<script setup lang="ts">
import { storeToRefs } from 'pinia'

definePageMeta({
  layout: 'empty',
  auth: false,
})

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)

const roleRedirect = {
  admin: '/',
  default: '/my-pets',
}

type roleTypes = 'admin'

const roleKeys = computed(
  () => user.value?.roles?.map(({ name }) => name) ?? [],
)

const redirectLink = computed(() => {
  let redirectLink = roleRedirect.default

  for (const role of roleKeys.value) {
    if (roleRedirect[role as roleTypes]) {
      redirectLink = roleRedirect[role as roleTypes]
      break
    }
  }
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
