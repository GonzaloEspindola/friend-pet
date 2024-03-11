<script setup lang="ts">
import { useForm, Field } from 'vee-validate'
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
}

const { $api } = useNuxtApp()
const { values, handleSubmit, errors } = useForm<AddPetForm>({})
const addPetModal = ref<any>()
const ownerList = ref<PetOwner[]>([
  {
    name: 'Micaela Bautista',
    ownerType: 'Dueña',
    cellphone: '1176845607',
    whatsapp: '1176845607',
  },
])

const handleClick = () => {
  addPetModal.value.handleOpenModal()
}

const handleSubmitForm = handleSubmit(async () => {
  console.log('values', values)
  console.log('errors', errors)
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
</script>

<template>
  <article class="flex flex-col gap-4">
    <section class="flex justify-between items-center">
      <img
        src="/assets/svg/man.png"
        alt="Imagen de perfil del usuario en sesión"
        class="h-[40px] w-[40px]"
      />
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
              <div class="label">
                <span class="label-text">Nombre:</span>
                <span
                  class="label-text-alt"
                  :class="{ 'error-message': errors.name }"
                  >{{ errors.name ?? 'requerido' }}</span
                >
              </div>
              <Field
                name="name"
                rules="required"
                type="text"
                placeholder="Pupencio"
                class="input input-bordered w-full"
                :class="{ 'error-message': errors.name }"
              />
            </article>

            <article>
              <div class="label">
                <span class="label-text">Dirección</span>
              </div>
              <Field
                name="address"
                type="text"
                placeholder="San Nicolas 332, Buenos Aires"
                class="input input-bordered w-full"
              />
            </article>

            <article>
              <div class="label">
                <span class="label-text">Raza:</span>
                <span
                  class="label-text-alt"
                  :class="{ 'error-message': errors.specie }"
                  >{{ errors.specie ?? 'requerido' }}</span
                >
              </div>
              <Field
                name="specie"
                rules="required"
                type="text"
                placeholder="Mestizo"
                class="input input-bordered w-full"
                :class="{ 'error-message': errors.specie }"
              />
            </article>

            <article>
              <div class="label">
                <span class="label-text">Edad:</span>
                <span
                  class="label-text-alt"
                  :class="{ 'error-message': errors.age }"
                  >{{ errors.age ?? 'requerido' }}</span
                >
              </div>
              <Field
                name="age"
                rules="required"
                type="text"
                placeholder="6 años"
                class="input input-bordered w-full"
                :class="{ 'error-message': errors.age }"
              />
            </article>

            <article>
              <div class="label">
                <span class="label-text">Genero:</span>
                <span
                  class="label-text-alt"
                  :class="{ 'error-message': errors.gender }"
                  >{{ errors.gender ?? 'requerido' }}</span
                >
              </div>
              <Field
                as="select"
                name="gender"
                rules="required"
                class="select select-bordered"
                :class="{ 'error-message': errors.gender }"
              >
                <option>Masculino</option>
                <option>Femenino</option>
              </Field>
            </article>

            <article>
              <div class="label">
                <span class="label-text">Peso:</span>
                <span
                  class="label-text-alt"
                  :class="{ 'error-message': errors.weight }"
                  >{{ errors.weight ?? 'requerido' }}</span
                >
              </div>
              <Field
                name="weight"
                rules="required"
                type="text"
                placeholder="5 kg"
                class="input input-bordered w-full"
                :class="{ 'error-message': errors.weight }"
              />
            </article>

            <article>
              <div class="label">
                <span class="label-text">Descripción:</span>
              </div>
              <Field
                name="description"
                type="text"
                placeholder="Pequeño y blanco"
                class="input input-bordered w-full"
              />
            </article>

            <CommonsDivider />

            <section class="flex flex-col gap-2">
              <h2 class="color-secondary">Agregar contactos</h2>
              <div class="grid-section gap-2">
                <article>
                  <div class="label">
                    <span class="label-text">Nombre:</span>
                  </div>
                  <Field
                    name="ownerName"
                    type="text"
                    placeholder="Jhon Die"
                    class="input input-bordered w-full"
                  />
                </article>

                <article>
                  <div class="label">
                    <span class="label-text">Parentesco:</span>
                  </div>
                  <Field
                    name="ownerType"
                    type="text"
                    placeholder="Dueño"
                    class="input input-bordered w-full"
                  />
                </article>

                <article>
                  <div class="label">
                    <span class="label-text">Celular:</span>
                  </div>
                  <Field
                    name="cellphone"
                    type="text"
                    placeholder="1175849249"
                    class="input input-bordered w-full"
                  />
                </article>

                <article>
                  <div class="label">
                    <span class="label-text">Whatsapp:</span>
                  </div>
                  <Field
                    name="whatsapp"
                    type="text"
                    placeholder="1175849249"
                    class="input input-bordered w-full"
                  />
                </article>
              </div>
              <CommonsPrimaryButton text="Agregar contacto" class="grow" />
            </section>

            <PublicOwnersSection
              class="mt-3"
              :owners-list="ownerList"
              hideTitle
            />

            <CommonsDivider />
            <CommonsPrimaryButton
              text="Añadir mascota"
              class="grow"
              type="submit"
            />
          </form>
        </section>
      </CommonsModal>
    </section>
  </article>
</template>

<style>
select,
input {
  width: 100%;
  color: var(--fallback-bc, oklch(var(--bc) / 1));
}

.grid-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

input.error-message {
  border-color: rgb(255, 50, 50);
}

span.error-message {
  color: rgb(255, 50, 50);
}
</style>
