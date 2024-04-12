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
  <div class="flex flex-col min-h-screen max-w-md w-full bg-white">
    <article class="h-[300px] w-full">
      <img
        src="/assets/examples/pupi1.jpg"
        alt="Imagen de perro"
        class="h-[300px] w-full object-cover"
      />
    </article>

    <article class="flex flex-col px-6 container relative flex-1 py-4">
      <h3 class="text-center text-secondary">Inicia Sesión</h3>
      <p class="text-neutral text-xs font-semibold text-center p-2">
        Inicia sesión para comenzar a generar perfiles para tus mascotas
      </p>

      <section class="flex flex-col flex-1 gap-6 mt-4">
        <form class="flex flex-col flex-1 gap-2">
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
              placeholder="********"
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
            <a href="/auth/register" class="color-span hover:text-success"
              >Regístrate</a
            ></label
          >
        </div>
      </section>
    </article>
  </div>
</template>

<style scoped>
.container::before {
  content: '';
  background-color: white;
  width: 100%;
  height: 30px;
  left: 0;
  top: -30px;
  position: absolute;
  z-index: 100;
  border-radius: 30px 30px 0 0;
}
</style>
