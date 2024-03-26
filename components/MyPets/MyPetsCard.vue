<script setup lang="ts">
interface PetCardProps {
  id?: string
  name?: string
  qrCode?: string
}

const props = defineProps<PetCardProps>()
console.log('props', props)
</script>

<template>
  <div class="flex flex-col gap-2 p-2 bg-white rounded-md drop-shadow-md">
    <MyPetsImage />
    <article class="flex gap-2 items-center">
      <CommonsPrimaryButton text="Ver QR" class="btn-primary btn-sm grow" />
      <CommonsPrimaryButton text="Editar" class="btn-primary btn-sm grow" />
    </article>
  </div>
</template>
