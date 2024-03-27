<script setup lang="ts">
import { useForm, Form } from 'vee-validate'

interface AddContactForm {
  ownerName: string
  ownerType: string
  cellphone: number
  whatsApp: number
}

interface AddContactFormProps {
  disabled?: boolean
}

interface AddContactEmits {
  (e: 'newContact', newContact: AddContactForm): void
}

const props = defineProps<AddContactFormProps>()
const emit = defineEmits<AddContactEmits>()
const { values, handleSubmit, errors } = useForm<AddContactForm>({})

const handleSubmitForm = handleSubmit(async () => {
  emit('newContact', values)
})
</script>

<template>
  <section class="flex flex-col gap-2">
    <h2 class="color-secondary">Agregar contactos</h2>
    <form class="grid-section gap-2">
      <article>
        <CommonsFormInput
          name="ownerName"
          label="Nombre:"
          type="text"
          rules="required"
          placeholder="Jhon Die"
          :input-error="errors"
        />
      </article>

      <article>
        <CommonsFormInput
          name="ownerType"
          label="Parentesco:"
          type="text"
          rules="required"
          placeholder="Dueño"
          :input-error="errors"
        />
      </article>

      <article>
        <CommonsFormInput
          name="cellphone"
          label="Celular:"
          type="number"
          rules="required"
          placeholder="1175849249"
          :input-error="errors"
        />
      </article>

      <article>
        <CommonsFormInput
          name="whatsApp"
          label="WhatsApp:"
          type="number"
          rules="required"
          placeholder="1175849249"
          :input-error="errors"
        />
      </article>
    </form>

    <CommonsPrimaryButton
      text="Agregar contacto"
      class="btn-outline btn-sm"
      @click="handleSubmitForm"
    />
  </section>
</template>
