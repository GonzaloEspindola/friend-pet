<script setup lang="ts">
interface PetCardProps {
  id?: string
  name?: string
  specie?: string
  age?: string
  weight?: string
  address?: string
  description?: string
  gender?: string
  qrCode?: string
}

const props = defineProps<PetCardProps>()
</script>

<template>
  <div class="flex flex-wrap p-4 bg-white rounded-md drop-shadow-md">
    <MyPetsImage />
    <div>
      <p>{{ props.name }}</p>
    </div>
  </div>
</template>
