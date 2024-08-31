<script setup lang="ts">
import type { Pet } from '~/repositories/types'

const { $api } = useNuxtApp()
const authStore = useAuthStore()
const { profileIsCompleted } = storeToRefs(authStore)
const addPet = ref<any>()
const selectedCard = ref<Pet>()

const getMyPets = async () => {
  try {
    return await $api.pets.myPets()
  } catch (error) {
    showToast('Ha ocurrido un error al obtener a tus mascotas')
  }
}

const { data, pending, refresh } = useAsyncData(
  'pets',
  async () => {
    return await getMyPets()
  },
  {
    server: false,
    lazy: false,
  },
)

const openEditModal = (id: string) => {
  selectedCard.value = data.value?.find((pet) => pet.id === id)
  addPet.value.handleClick()
}
</script>

<template>
  <article class="flex flex-col gap-2 w-full">
    <h2 class="color-secondary">Mis mascotas</h2>
    <div class="grid-section gap-2">
      <MyPetsCard
        v-for="pet in data"
        :key="pet.id"
        :id="pet.id"
        :name="pet.name"
        :qrCode="pet.qrCode"
        :image-url="pet.gallery[0]"
        :refresh="refresh"
        @open-edit-modal="(id: string) => openEditModal(id)"
      />
      <MyPetsAddPet
        ref="addPet"
        v-if="profileIsCompleted"
        :loading="pending"
        :preload-pet="selectedCard"
        @addPet="refresh"
      />
    </div>
  </article>
</template>

<style scoped>
.grid-section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
}
</style>
