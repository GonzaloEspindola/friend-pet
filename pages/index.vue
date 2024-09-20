<script setup lang="ts">
definePageMeta({
  layout: 'landing',
  auth: false,
})
</script>

<template>
  <section class="min-h-screen flex justify-center">
    <div class="w-full sm:w-11/12 md:w-3/4 lg:w-2/3">
      <LandingHome />
      <LandingServices />
    </div>
  </section>
</template>
