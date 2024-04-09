<script setup lang="ts">
import { Field, useForm } from 'vee-validate'
import { showToast } from '~/utils/toast'

export interface UserProfileEdit {
  ownerTypePreference: string
  ownerName: string
  cellphone: string
  whatsApp: string
  photo: any
}

const authStore = useAuthStore()
const { user, profileIsCompleted } = storeToRefs(authStore)
const { $api } = useNuxtApp()
const { values, setFieldValue } = useForm<UserProfileEdit>({})
const payload = ref<FormData>(new FormData())
const isLoading = ref(false)

const updateProfile = async () => {
  try {
    isLoading.value = true
    await $api.user.updateProfile(values)
    showToast('Perfil actualizado correctamente', 'success')
    await useNuxtApp().$auth.fetchUser()
  } catch (error) {
    showToast('Error al actualizar perfil')
  } finally {
    isLoading.value = false
  }
}

const handleSubmitForm = () => {
  const { cellphone, ownerName, ownerTypePreference, whatsApp } = values

  if (!cellphone || !ownerName || !ownerTypePreference || !whatsApp) {
    return showToast('Completa todos tus datos, incluyendo tu foto', 'error')
  }

  payload.value.set('ownerName', ownerName)
  payload.value.set('ownerTypePreference', ownerTypePreference)
  payload.value.set('cellphone', cellphone)
  payload.value.set('whatsApp', whatsApp)

  updateProfile()
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
  <div class="avatar p-2 md:w-1/4">
    <div class="flex items-center justify-center rounded-full">
      <img
        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
      />
    </div>
  </div>

  <div
    class="flex flex-col-reverse gap-2 p-2 md:w-3/4 md:flex-col md:justify-center md:items-center"
  >
    <div class="flex items-center justify-between w-full">
      <h2 class="hidden md:block">Información personal</h2>
      <CommonsPrimaryButton
        :text="profileIsCompleted ? 'Actualizar perfil' : 'Guardar'"
        class="btn-success btn-sm text-white grow md:grow-0"
        :pending="isLoading"
        @click.prevent="handleSubmitForm"
      />
    </div>

    <form class="flex flex-col gap-2 md:grid md:grid-cols-2">
      <label class="input input-bordered flex items-center gap-2 text-gray-400">
        Nombre
        <Field
          name="ownerName"
          type="text"
          rules="required"
          class="field-grow text-black"
          placeholder="Daisy"
        />
      </label>

      <label class="input input-bordered flex items-center gap-2 text-gray-400">
        Parentesco
        <Field
          name="ownerTypePreference"
          type="text"
          rules="required"
          class="field-grow text-black"
          placeholder="Dueña"
        />
      </label>

      <label class="input input-bordered flex items-center gap-2 text-gray-400">
        Celular
        <Field
          name="cellphone"
          type="number"
          rules="required"
          class="field-grow text-black"
          placeholder="115674843"
        />
      </label>

      <label class="input input-bordered flex items-center gap-2 text-gray-400">
        WhatsApp
        <Field
          name="whatsApp"
          type="number"
          rules="required"
          class="field-grow text-black"
          placeholder="115674843"
        />
      </label>
    </form>
  </div>
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
