<script setup lang="ts">
import { useForm, Form, Field } from 'vee-validate'
import type { PetOwner } from '../types'
import type { Pet } from '~/repositories/types'
import { ageOptions } from '~/utils/const'

interface AddPetForm {
  name: string
  address: string
  specie: string
  age: number
  gender: string
  weight: number
  description: string
  owners: PetOwner[]
  ageSelect: string
  weightSelect: string
  photo: File
}

interface AddPetEmits {
  (e: 'addPet'): void
}

interface AddPetProps {
  loading: boolean
  preloadPet?: Pet
}

const emit = defineEmits<AddPetEmits>()
const props = defineProps<AddPetProps>()
const addPetModal = ref<any>()
const authStore = useAuthStore()
const { user, profileIsCompleted } = storeToRefs(authStore)
const { $api } = useNuxtApp()
const { values, handleSubmit, errors, setFieldValue, resetForm } =
  useForm<AddPetForm>()
const payload = ref<FormData>(new FormData())
const ownerList = ref<PetOwner[]>([])
const isLoading = ref<boolean>(false)
const selectedCard = computed(() => props.preloadPet)
const isEditMode = ref<boolean>(false)

const handleClick = () => {
  addPetModal.value.handleOpenModal()
}

const handleAddNewContact = (newContact: any) => {
  ownerList.value.push(newContact)
}

const addPet = async () => {
  try {
    isLoading.value = true
    return await $api.pets.addPet(payload)
  } catch (error) {
    showToast('Ha ocurrido un error al agregar a tu mascota')
  } finally {
    isLoading.value = false
  }
}

const editPet = async () => {
  try {
    isLoading.value = true
    return await $api.pets.editPet(payload, selectedCard.value?.id!)
  } catch (error) {
    showToast('Ha ocurrido un error al agregar a tu mascota')
  } finally {
    isLoading.value = false
  }
}

const handleSubmitForm = handleSubmit(async () => {
  payload.value.set('name', values.name)
  payload.value.set('address', values.address)
  payload.value.set('age', `${values.age} ${values.ageSelect}`)
  payload.value.set('weight', `${values.weight} ${values.weightSelect}`)
  payload.value.set('description', values.description)
  payload.value.set('gender', values.gender)
  payload.value.set('specie', values.specie)
  payload.value.set('photo', values.photo)
  payload.value.set('ownersList', JSON.stringify(ownerList.value))

  await addPet()

  emit('addPet')
  addPetModal.value.handleCloseModal()
})

const handleEditPet = handleSubmit(async () => {
  payload.value.set('name', values.name)
  payload.value.set('address', values.address)
  payload.value.set('age', `${values.age} ${values.ageSelect}`)
  payload.value.set('weight', `${values.weight} ${values.weightSelect}`)
  payload.value.set('description', values.description)
  payload.value.set('gender', values.gender)
  payload.value.set('specie', values.specie)
  payload.value.set('photo', values.photo)
  payload.value.set('ownersList', JSON.stringify(ownerList.value))

  await editPet()
  isEditMode.value = false
  resetForm()
  emit('addPet')
  addPetModal.value.handleCloseModal()
})

watch(
  user,
  () => {
    if (profileIsCompleted && !selectedCard.value) {
      if (ownerList.value.length === 0) {
        ownerList.value.push({
          ownerName: user?.value?.profile.ownerName,
          ownerType: user?.value?.profile.ownerTypePreference,
          cellphone: Number(user?.value?.profile.cellphone),
          whatsApp: Number(user?.value?.profile.whatsApp),
          url: user?.value?.profile.url,
        })
      } else {
        ownerList.value[0].ownerName = user?.value?.profile.ownerName
        ownerList.value[0].ownerType = user?.value?.profile.ownerType
        ownerList.value[0].cellphone = user?.value?.profile.cellphone
        ownerList.value[0].whatsApp = user?.value?.profile.whatsApp
        ownerList.value[0].url = user?.value?.profile.url
      }
    }
  },
  {
    immediate: true,
  },
)

watch(selectedCard, () => {
  if (selectedCard.value) {
    isEditMode.value = true
    const { name, address, specie, age, gender, weight, description, owners } =
      selectedCard.value

    const finalAge = Number(age.split(' ')[0])
    const ageSelect = age.split(' ')[1]

    const finalWeight = Number(weight.split(' ')[0])
    const weightSelect = weight.split(' ')[1]

    setFieldValue('name', name)
    setFieldValue('address', address)
    setFieldValue('specie', specie)
    setFieldValue('age', finalAge)
    setFieldValue('gender', gender)
    setFieldValue('weight', finalWeight)
    setFieldValue('description', description)
    setFieldValue('ageSelect', ageSelect)
    setFieldValue('weightSelect', weightSelect)

    ownerList.value = owners
  }
})

defineExpose({
  handleClick,
})
</script>

<template>
  <div
    class="flex flex-col p-2 rounded-md drop-shadow-md select-none border hover:border-primary hover:cursor-pointer hover:color-primary hover:text-primary"
    @click="handleClick"
  >
    <article class="flex items-center justify-center h-40">
      <img
        src="/assets/svg/add.png"
        alt="Icono para agregar mascota"
        class="h-26 w-26 rounded-md"
      />
    </article>
    <p class="text-center text-white">
      {{ props.loading ? 'Cargando...' : 'Añadir Mascota' }}
    </p>
  </div>

  <CommonsModal
    ref="addPetModal"
    title="Añadir nueva mascota"
    :reset="resetForm"
  >
    <section>
      <h2 class="color-secondary">Información</h2>
      <form class="flex flex-col gap-2">
        <article>
          <CommonsFormInput
            name="name"
            label="Nombre:"
            type="text"
            placeholder="Pupencio"
            rules="required"
            :input-error="errors"
          />
        </article>

        <article>
          <CommonsFormInput
            name="address"
            label="Dirección:"
            type="text"
            placeholder="San Nicolas 323, Buenos Aires"
            :input-error="errors"
          />
        </article>

        <article>
          <CommonsFormInput
            name="specie"
            label="Raza:"
            type="text"
            placeholder="Mestizo"
            rules="required"
            :input-error="errors"
          />
        </article>

        <article>
          <CommonsFormInput
            name="age"
            label="Edad:"
            type="number"
            placeholder="6"
            rules="required"
            :input-error="errors"
            selectName="ageSelect"
            multipleInput
            :multiple-input-options="ageOptions"
          />
        </article>

        <article>
          <CommonsFormInput
            as="select"
            name="gender"
            label="Género:"
            placeholder="Selecciona un género"
            rules="required"
            :options="[
              {
                text: 'Masculino',
                value: 'Masculino',
              },
              {
                text: 'Femenino',
                value: 'Femenino',
              },
            ]"
            :input-error="errors"
          />
        </article>

        <article>
          <CommonsFormInput
            name="weight"
            label="Peso:"
            type="number"
            placeholder="10"
            rules="required"
            :input-error="errors"
            selectName="weightSelect"
            multipleInput
            :multiple-input-options="weightOptions"
          />
        </article>

        <article>
          <CommonsFormInput
            name="description"
            label="Descripción:"
            type="text"
            placeholder="Pequeño y blanco"
            :input-error="errors"
          />
        </article>

        <article>
          <label for="">
            <span class="label-text">Imagen:</span>

            <Field
              name="photo"
              type="file"
              class="file-input file-input-bordered file-input-md w-full mt-1"
            />
          </label>
        </article>

        <CommonsDivider />

        <MyPetsAddContactForm @new-contact="handleAddNewContact" />
        <PublicOwnersSection class="mt-3" :owners-list="ownerList" hideTitle />

        <CommonsDivider />

        <CommonsPrimaryButton
          v-if="!isEditMode"
          text="Añadir mascota"
          class="btn-primary btn-sm"
          :pending="isLoading"
          @click="handleSubmitForm"
        />

        <CommonsPrimaryButton
          v-if="isEditMode"
          text="Editar mascota"
          class="btn-primary btn-sm"
          :pending="isLoading"
          @click="handleEditPet"
        />
      </form>
    </section>
  </CommonsModal>
</template>
