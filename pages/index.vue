<script setup lang="ts">
definePageMeta({
  layout: 'empty',
  auth: false,
})
</script>

<template>
  <section class="min-h-screen flex justify-center bg-base-100">
    <div class="w-full sm:w-11/12 md:w-3/4 lg:w-2/3">
      <LandingHeader />
      <LandingHome />
      <LandingServices />
    </div>
  </section>
</template>
