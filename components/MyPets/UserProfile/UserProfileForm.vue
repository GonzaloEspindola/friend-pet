<script setup lang="ts">
import { Field, useForm } from 'vee-validate'
import { showToast } from '~/utils/toast'

export interface UserProfileEdit {
  ownerTypePreference: string
  ownerName: string
  cellphone: string
  whatsApp: string
  photo: File
}

const authStore = useAuthStore()
const { user, profileIsCompleted } = storeToRefs(authStore)
const { $api } = useNuxtApp()
const { values, setFieldValue, handleSubmit, errors } =
  useForm<UserProfileEdit>({})
const payload = ref<FormData>(new FormData())
const isLoading = ref(false)
const isImageLoading = ref(false)

const updateProfile = async () => {
  try {
    isLoading.value = true
    await $api.user.updateProfile(values)
    showToast('Perfil actualizado correctamente', 'success', 'bg-green-500')
    await useNuxtApp().$auth.fetchUser()
  } catch (error) {
    showToast('Error al actualizar perfil', 'error')
  } finally {
    isLoading.value = false
  }
}

const updateProfilePhoto = async () => {
  try {
    isImageLoading.value = true
    await $api.user.updateProfilePhoto(payload)
    showToast('Imagen actualizada correctamente', 'success', 'bg-green-500')
    await useNuxtApp().$auth.fetchUser()
  } catch (error) {
    showToast('Error al actualizar imagen de perfil', 'error', 'bg-red-500')
  } finally {
    isImageLoading.value = false
  }
}

const handleSubmitForm = handleSubmit(() => {
  updateProfile()
})

const handleUploadImage = () => {
  payload.value.set('photo', values.photo)
  updateProfilePhoto()
}

watch(
  profileIsCompleted,
  () => {
    if (profileIsCompleted) {
      setFieldValue('ownerName', user.value?.profile.ownerName)
      setFieldValue(
        'ownerTypePreference',
        user.value?.profile.ownerTypePreference,
      )
      setFieldValue('cellphone', user.value?.profile.cellphone)
      setFieldValue('whatsApp', user.value?.profile.whatsApp)
    }
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <section class="flex flex-col gap-2 md:flex-row">
    <div class="flex items-center justify-center">
      <div
        v-if="isImageLoading"
        class="flex items-center justify-center w-[150px] h-[150px]"
      >
        <span class="loading loading-spinner loading-lg"></span>
      </div>

      <label
        v-if="user?.profile.url && !isImageLoading"
        for="photo"
        class="relative cursor-pointer"
      >
        <img
          :src="user?.profile.url"
          alt="Preview"
          class="w-[150px] h-[150px] object-cover rounded-md"
        />

        <span
          class="text-sm absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300"
        >
          Cambiar imagen
        </span>

        <Field
          id="photo"
          name="photo"
          type="file"
          class="hidden"
          @change="handleUploadImage"
        />
      </label>

      <label
        v-if="!user?.profile.url && !isImageLoading"
        for="photo"
        class="flex items-center justify-center w-[150px] h-[150px] bg-neutral-content rounded-md border-1 text-neutral hover:cursor-pointer hover:opacity-50"
      >
        Subir Imagen
        <Field
          id="photo"
          name="photo"
          type="file"
          class="hidden"
          @change="handleUploadImage"
        />
      </label>
    </div>

    <div
      class="flex flex-col-reverse gap-2 p-2 flex-1 md:flex-col md:justify-center md:items-center"
    >
      <div class="flex items-center justify-between w-full">
        <h2 class="text-base-content hidden md:block">Información personal</h2>
        <CommonsPrimaryButton
          :text="profileIsCompleted ? 'Actualizar perfil' : 'Guardar'"
          class="btn-primary btn-sm text-white grow md:grow-0"
          :pending="isLoading"
          @click.prevent="handleSubmitForm"
        />
      </div>
      <form class="flex flex-col gap-2 w-full md:grid md:grid-cols-2">
        <label
          class="input input-bordered flex items-center gap-2 text-gray-400"
          :class="[{ 'border-1 border-[#e75757]': errors['ownerName'] }]"
        >
          Nombre
          <Field
            name="ownerName"
            type="text"
            rules="required"
            class="field-grow"
          />
        </label>

        <label
          class="input input-bordered flex items-center gap-2 text-gray-400"
          :class="[
            { 'border-1 border-[#e75757]': errors['ownerTypePreference'] },
          ]"
        >
          Parentesco
          <Field
            name="ownerTypePreference"
            type="text"
            rules="required"
            class="field-grow"
            placeholder="Dueña"
          />
        </label>

        <label
          class="input input-bordered flex items-center gap-2 text-gray-400"
          :class="[{ 'border-1 border-[#e75757]': errors['cellphone'] }]"
        >
          Celular
          <Field
            name="cellphone"
            type="number"
            rules="required"
            class="field-grow"
            placeholder="115674843"
          />
        </label>

        <label
          class="input input-bordered flex items-center gap-2 text-gray-400"
          :class="[{ 'border-1 border-[#e75757]': errors['whatsApp'] }]"
        >
          WhatsApp
          <Field
            name="whatsApp"
            type="number"
            rules="required"
            class="field-grow"
            placeholder="115674843"
          />
        </label>
      </form>
    </div>
  </section>
</template>

<style scoped>
.grid-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.field-grow {
  width: calc(100% - 40px);
}
</style>
