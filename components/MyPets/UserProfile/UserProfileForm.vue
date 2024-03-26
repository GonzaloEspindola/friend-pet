<script setup lang="ts">
import { Field, useForm } from 'vee-validate'

interface UserProfileEdit {
  ownerTypePreference?: string
  name?: string
  phone?: string
  whatsApp?: string
  photo?: any
}

const { values, handleSubmit, errors } = useForm<UserProfileEdit>({})

const handleSubmitForm = handleSubmit(async () => {
  console.log('values', values)
})
</script>

<template>
  <div class="avatar w-1/4 p-2">
    <div class="flex items-center justify-center rounded-full">
      <img
        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
      />
    </div>
  </div>

  <div class="flex flex-col w-3/4 justify-center items-center gap-2 p-2">
    <div class="flex items-center justify-between w-full">
      <h2 class="flex grow">Información personal</h2>
      <CommonsPrimaryButton
        text="Actualizar datos"
        class="btn-success btn-sm text-white"
      />
    </div>

    <form class="grid grid-cols-2 gap-2">
      <label class="input input-bordered flex items-center gap-2">
        Nombre
        <Field name="name" type="text" class="grow" placeholder="Jhon Die" />
      </label>

      <label class="input input-bordered flex items-center gap-2">
        Parentesco
        <Field
          name="ownerTypePreference"
          type="text"
          class="grow"
          placeholder="Dueña"
        />
      </label>

      <label class="input input-bordered flex items-center gap-2">
        Celular
        <Field
          name="cellphone"
          type="text"
          class="grow"
          placeholder="115674843"
        />
      </label>

      <label class="input input-bordered flex items-center gap-2">
        WhatsApp
        <Field
          name="whatsApp"
          type="text"
          class="grow"
          placeholder="115674843"
        />
      </label>
    </form>
  </div>
</template>
