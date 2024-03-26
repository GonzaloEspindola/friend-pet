<script setup lang="ts">
import { useForm, Form } from 'vee-validate'
import type { PetOwner } from '../types'
import vueQr from 'vue-qr/src/packages/vue-qr.vue'

const NUXT_PUBLIC_API_BASE = process.env.NUXT_PUBLIC_API_BASE

interface AddPetForm {
  name: string
  address: string
  specie: string
  age: string
  gender: string
  weight: string
  description: string
  owners: PetOwner[]
  selectAge: string
}

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)
const { $api } = useNuxtApp()
const { values, handleSubmit, errors } = useForm<AddPetForm>({})
const addPetModal = ref<any>()
const isProfileCompleted = ref<boolean>(false)

console.log('user', user)

const ownerList = ref<PetOwner[]>([])

const addPet = async () => {
  try {
    return await $api.pets.myPets()
  } catch (error) {
    console.log('error', error)
  }
}

const handleClick = () => {
  addPetModal.value.handleOpenModal()
}

const handleSubmitForm = handleSubmit(async () => {
  console.log('values', values)
  console.log('errors', errors)
})

const handleAddNewContact = (newContact: any) => {
  ownerList.value.push(newContact)
}

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
  values,
  () => {
    console.log('values', values)
  },
  {
    immediate: true,
  },
)

watch(
  user,
  () => {
    if (
      user.value?.profile.name &&
      user.value.profile.ownerTypePreference &&
      user.value.profile.cellphone &&
      user.value.profile.whatsApp
    ) {
      ownerList.value.push({
        ownerName: user.value.profile.name,
        ownerType: user.value.profile.ownerTypePreference,
        cellphone: user.value.profile.name,
        whatsApp: user.value.profile.name,
      })
      isProfileCompleted.value = true
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

      <section
        v-if="!isProfileCompleted"
        class="flex items-center gap-2 px-4 py-1 rounded-md bg-yellow-300 my-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="stroke-current shrink-0 w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span class="text-sm"
          >Debes completar tu perfil antes de poder agregar mascotas</span
        >
      </section>

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

        <MyPetsAddContactForm
          @new-contact="handleAddNewContact"
          :disabled="!isProfileCompleted"
        />

        <PublicOwnersSection class="mt-3" :owners-list="ownerList" hideTitle />

        <CommonsDivider />

        <CommonsPrimaryButton
          text="Añadir mascota"
          class="grow"
          type="submit"
          :variant="!isProfileCompleted ? 'disabled' : 'primary'"
          :disabled="!isProfileCompleted"
        />
      </form>
    </section>
  </CommonsModal>
</template>
