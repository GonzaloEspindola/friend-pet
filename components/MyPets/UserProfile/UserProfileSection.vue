<script setup lang="ts">
const authStore = useAuthStore()
const { profileIsCompleted } = storeToRefs(authStore)
</script>

<template>
  <section
    class="flex flex-col p-4 gap-2 bg-base-300 rounded-md drop-shadow-md w-full"
  >
    <MyPetsUserProfileForm />
    <MyPetsUserProfileAlert :profile-is-completed="profileIsCompleted" />
  </section>
</template>
