<script setup lang="ts">
import { useThemeStore } from '@/store/index'

const themeStore = useThemeStore()

const isDark = computed(() => themeStore.isDark)
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

      <nav class="hidden lg:flex space-x-6">
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
    </div>
  </header>
</template>

<script setup></script>

<style scoped></style>
