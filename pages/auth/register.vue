<script setup lang="ts">
import { useForm } from 'vee-validate'

definePageMeta({
  auth: false,
})

interface Form {
  email: string
  password: string
}

const { $api } = useNuxtApp()
const { signIn } = useAuth()
const { values, handleSubmit, errors } = useForm<Form>()
const isLoading = ref<boolean>(false)
const registerError = ref<any>()

const register = async () => {
  try {
    isLoading.value = true
    await $api.user.register(values)
    await signIn(values)
  } catch (error: any) {
    registerError.value = error?.data
  } finally {
    isLoading.value = false
  }
}

const handleSubmitForm = handleSubmit(async () => {
  register()
})
</script>

<template>
  <div class="flex flex-col min-h-screen bg-white md:flex-row items-center p-1">
    <article class="w-full h-2/5 bg-primary md:w-3/5 md:h-full rounded-md">
      <Carousel />
    </article>

    <article
      class="flex flex-col p-8 w-full h-3/5 justify-center md:w-2/5 md:h-full"
    >
      <h3 class="text-center text-secondary font-semibold text-xl">
        Crear tu cuenta
      </h3>
      <p class="text-neutral text-xs font-semibold text-center p-2">
        Crea tu cuenta para comenzar a generar perfiles para tus mascotas
      </p>

      <section class="flex flex-col gap-6 mt-4">
        <form class="flex flex-col flex-1 gap-2" @submit="handleSubmitForm">
          <div>
            <CommonsFormInput
              name="email"
              label="Email:"
              rules="required"
              type="email"
              placeholder="test@friendpet.com"
              :input-error="errors"
            />
          </div>

          <div class="flex flex-col">
            <CommonsFormInput
              name="password"
              label="Contraseña:"
              rules="required"
              type="password"
              placeholder="**********"
              :input-error="errors"
            />
          </div>

          <section v-if="registerError">
            <div
              v-if="Array.isArray(registerError?.message)"
              v-for="error in registerError?.message"
              role="alert"
              class="alert alert-error rounded-sm p-2 flex justify-center"
            >
              <span class="text-sm text-white">{{ error }}</span>
            </div>

            <div
              v-else
              role="alert"
              class="alert alert-error rounded-sm p-2 flex justify-center"
            >
              <span class="text-sm text-white">{{
                registerError?.message
              }}</span>
            </div>
          </section>
        </form>

        <div class="flex flex-col gap-2 justify-end">
          <CommonsPrimaryButton
            text="Registrarse"
            @click.prevent="handleSubmitForm"
            :pending="isLoading"
          />
          <label class="text-sm text-center"
            >Ya tienes cuenta?
            <NuxtLink to="/auth/login" class="text-primary hover:text-success"
              >Inicia sesión</NuxtLink
            ></label
          >
        </div>
      </section>
    </article>
  </div>
</template>
