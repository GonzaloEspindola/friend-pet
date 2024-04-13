<script setup lang="ts">
import { storeToRefs } from 'pinia'

definePageMeta({
  layout: 'empty',
  auth: false,
})

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)

const roleRedirect = {
  admin: '/my-pets',
  default: '/my-pets',
}

type roleTypes = 'admin'

const redirectLink = computed(() => {
  let redirectLink = roleRedirect.default
  return redirectLink
})

if (process.client) {
  await navigateTo(redirectLink.value)
}
</script>

<template>
  <div></div>
</template>

<style scoped></style>
