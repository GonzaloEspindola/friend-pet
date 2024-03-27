<script setup lang="ts">
import { useForm, Form } from 'vee-validate'
import type { PetOwner } from '../types'
import type { AddPetPayload } from '~/repositories/types'
import vueQr from 'vue-qr/src/packages/vue-qr.vue'

const NUXT_PUBLIC_API_BASE = process.env.NUXT_PUBLIC_API_BASE

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
}

const addPetModal = ref<any>()
const authStore = useAuthStore()
const { user, profileIsCompleted } = storeToRefs(authStore)
const { $api } = useNuxtApp()
const { values, handleSubmit, errors, setFieldValue } = useForm<AddPetForm>({})
const payload = ref<AddPetPayload>({
  address: '',
  age: '',
  description: '',
  gender: '',
  name: '',
  specie: '',
  weight: '',
  ownersList: [],
})
const ownerList = ref<PetOwner[]>([])
const isLoading = ref<boolean>(false)

const handleClick = () => {
  addPetModal.value.handleOpenModal()
}

const handleAddNewContact = (newContact: any) => {
  ownerList.value.push(newContact)
}

const addPet = async () => {
  try {
    isLoading.value = true
    return await $api.pets.myPets()
  } catch (error) {
    showToast('Ha ocurrido un error al agregar a tu mascota')
  } finally {
    isLoading.value = false
  }
}

const handleSubmitForm = handleSubmit(() => {
  payload.value.name = values.name
  payload.value.address = values.address
  payload.value.age = `${values.age}`
  payload.value.weight = `${values.weight}`
  payload.value.description = values.description
  payload.value.gender = values.gender
  payload.value.specie = values.specie
  payload.value.ownersList = ownerList.value.slice()

  console.log('values', values)

  addPet()
})

const qrStyleOptions = {
  data: {
    scale: 15,
  },
  timing: {
    scale: 10,
    protectors: false,
  },
  alignment: {
    scale: 10,
    protectors: true,
  },
  cornerAlignment: {
    scale: 10,
    protectors: false,
  },
}

watch(
  user,
  () => {
    if (profileIsCompleted) {
      ownerList.value.push({
        ownerName: user?.value?.profile.ownerName,
        ownerType: user?.value?.profile.ownerTypePreference,
        cellphone: user?.value?.profile.cellphone,
        whatsApp: user?.value?.profile.whatsApp,
      })
    }
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <CommonsPrimaryButton
    text="Añadir mascota"
    variant="secondary"
    showIcon
    @click="handleClick"
  />

  <CommonsModal ref="addPetModal" title="Añadir nueva mascota">
    <section>
      <article>
        <div class="flex justify-center items-center">
          <vue-qr
            :text="`${NUXT_PUBLIC_API_BASE}/qr/`"
            qid="testid"
            colorLight="white"
            colorDark="black"
            :components="qrStyleOptions"
          ></vue-qr>
        </div>
      </article>

      <h2 class="color-secondary">Información</h2>
      <form @submit.prevent="handleSubmitForm" class="flex flex-col">
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
            :multiple-input-options="[
              {
                text: 'Meses',
                value: 'Meses',
              },
              {
                text: 'Años',
                value: 'Años',
              },
            ]"
            :setFieldValue="setFieldValue"
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
            :multiple-input-options="[
              {
                text: 'Gramos',
                value: 'Gramos',
              },
              {
                text: 'Kilogramos',
                value: 'Kilogramos',
              },
            ]"
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

        <CommonsDivider />

        <MyPetsAddContactForm @new-contact="handleAddNewContact" />
        <PublicOwnersSection class="mt-3" :owners-list="ownerList" hideTitle />

        <CommonsDivider />

        <CommonsPrimaryButton
          text="Añadir mascota"
          class="btn-primary btn-sm"
          type="submit"
          :pending="isLoading"
        />
      </form>
    </section>
  </CommonsModal>
</template>
