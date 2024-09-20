<script setup lang="ts">
import { useThemeStore } from '@/store/index'

const themeStore = useThemeStore()
themeStore.initTheme()

const theme = computed(() => (themeStore.isDark ? 'dark' : 'light'))
</script>

<template>
  <html :data-theme="theme">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </html>
</template>
