<script setup lang="ts">
import { Field } from 'vee-validate'
</script>

<template>
  <section class="flex items-center justify-center">
    <div class="flex flex-col min-h-screen max-w-md w-full bg-primary">
      <article class="h-[300px] w-full">
        <img
          src="/assets/examples/pupi1.jpg"
          alt="Imagen de perro"
          class="h-[300px] w-full object-cover"
        />
      </article>

      <article class="flex flex-col px-6 container relative grow">
        <h2 class="text-center"><strong>Registrarse</strong></h2>

        <section class="flex flex-col justify-between grow py-10">
          <section class="flex flex-col gap-6">
            <div>
              <label for="email" class="color-secondary text-sm">Email:</label>
              <label class="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="w-4 h-4 opacity-70"
                >
                  <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
                  />
                  <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
                  />
                </svg>
                <Field
                  id="email"
                  name="name"
                  rules="required"
                  type="text"
                  placeholder="Pupencio"
                />
              </label>
            </div>

            <div class="flex flex-col">
              <label for="password" class="color-secondary text-sm"
                >Contraseña:</label
              >
              <label class="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="w-4 h-4 opacity-70"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <Field
                  id="password"
                  name="password"
                  rules="required"
                  type="password"
                  placeholder="********"
                />
              </label>
            </div>
          </section>

          <div class="flex flex-col gap-2">
            <CommonsPrimaryButton text="Registrarse" />
            <label class="text-sm text-center"
              >Ya tienes cuenta?
              <a href="/auth/login" class="color-span hover:text-[#c74123]"
                >Inicia sesión</a
              ></label
            >
          </div>
        </section>
      </article>
    </div>
  </section>
</template>

<style scoped>
.container::before {
  content: '';
  background-color: #f7f7f7;
  width: 100%;
  height: 30px;
  left: 0;
  top: -30px;
  position: absolute;
  z-index: 100;
  border-radius: 30px 30px 0 0;
}
</style>
