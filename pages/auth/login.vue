<script setup lang="ts">
import { Field, useForm } from 'vee-validate'

interface User {
  email?: string
  password?: string
}

const { signIn } = useAuth()
const { handleSubmit, errors } = useForm<User>()
const loginError = ref<any>()
const isLoading = ref<boolean>(false)

const onSignInError = (error: any) => {
  loginError.value = error?.data
}

const onSubmit = handleSubmit(async (user: User) => {
  isLoading.value = true
  await signIn(user, onSignInError)
  isLoading.value = false
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
        Inicia Sesión
      </h3>
      <p class="text-neutral text-xs font-semibold text-center p-2">
        Inicia sesión para comenzar a generar perfiles para tus mascotas
      </p>

      <section class="flex flex-col gap-6 mt-4">
        <form class="flex flex-col gap-2">
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

          <div>
            <CommonsFormInput
              name="password"
              label="Contraseña:"
              rules="required"
              type="password"
              placeholder="**********"
              :input-error="errors"
            />
          </div>

          <section v-if="loginError">
            <div
              v-if="Array.isArray(loginError?.message)"
              v-for="error in loginError?.message"
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
              <span class="text-sm text-white">{{ loginError?.message }}</span>
            </div>
          </section>
        </form>

        <div class="flex flex-col gap-2 justify-end">
          <CommonsPrimaryButton
            text="Inicia Sesión"
            :pending="isLoading"
            @click.prevent="onSubmit"
          />
          <label class="text-sm text-center"
            >Aun no tienes una cuenta?
            <NuxtLink
              to="/auth/register"
              class="text-primary hover:text-success"
              >Regístrate</NuxtLink
            ></label
          >
        </div>
      </section>
    </article>
  </div>
</template>
