<script setup lang="ts">
import { useThemeStore } from '@/store/index'
const { loggedIn, user, signOut } = useAuth()

const themeStore = useThemeStore()

const isDark = computed(() => themeStore.isDark)

const userImage = computed(
  () => user?.value?.profile?.url ?? '@/assets/img/imagen_no_disponible.jpg',
)
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-base-100 shadow-md">
    <div class="mx-auto flex items-center justify-between py-4 w-2/3">
      <div class="logo">
        <NuxtLink to="/" v-if="!isDark">
          <img src="@/assets/svg/logo-black.svg" alt="Logo" class="w-32" />
        </NuxtLink>

        <NuxtLink to="/" v-else>
          <img src="@/assets/svg/logo-white.svg" alt="Logo" class="w-32" />
        </NuxtLink>
      </div>

      <nav v-if="!loggedIn" class="hidden lg:flex space-x-6">
        <a href="#home" class="text-paragraph font-semibold hover:text-gray-900"
          >Inicio</a
        >
        <a
          href="#services"
          class="text-paragraph font-semibold hover:text-gray-900"
          >Servicios</a
        >
      </nav>

      <div>
        <CommonsToggleTheme />
      </div>

      <div v-if="loggedIn" class="dropdown dropdown-bottom dropdown-end">
        <div tabindex="0" role="button" class="w-8 h-8">
          <img
            :src="userImage"
            alt="Imagen de perfil"
            class="rounded-full w-full h-full object-cover"
          />
        </div>
        <ul
          tabindex="0"
          class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li><NuxtLink to="/my-pets">Mis mascotas</NuxtLink></li>
          <li @click="signOut"><a>Cerrar sesión</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style scoped></style>
