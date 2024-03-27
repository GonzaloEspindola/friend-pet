<script setup lang="ts">
const authStore = useAuthStore()
const { profileIsCompleted } = storeToRefs(authStore)
</script>

<template>
  <section
    class="flex flex-col p-4 bg-white rounded-md drop-shadow-md md:flex-row flex-wrap"
  >
    <MyPetsUserProfileForm />
    <MyPetsUserProfileAlert :profile-is-completed="profileIsCompleted" />
  </section>
</template>
