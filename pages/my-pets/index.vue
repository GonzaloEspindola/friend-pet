<script setup lang="ts">
definePageMeta({
  layout: 'landing',
  auth: false,
})
</script>

<template>
  <section
    class="flex flex-col gap-2 p-4 pt-[6rem] min-h-screen w-full mx-auto sm:w-11/12 md:w-3/4 lg:w-2/3"
  >
    <MyPetsUserProfileSection />
    <MyPetsSection />
  </section>
</template>
