<script setup lang="ts">
const route = useRoute()
const id = route.params.id
</script>

<template>
  <section class="flex items-center justify-center">
    <div class="min-h-screen max-w-md w-full bg-[#f8f8f8]">
      <section class="flex flex-col">
        <PublicImageSection />
        <section class="flex flex-col gap-6 px-6 z-10 pb-6">
          <PublicBasicInformation />
          <CommonsDivider />
          <PublicResumeCardsSection />
          <PublicDescriptionInformation />
          <CommonsDivider />
          <PublicOwnersSection />
          <CommonsPrimaryButton text="Editar perfil" />
        </section>
      </section>
    </div>
  </section>
</template>
