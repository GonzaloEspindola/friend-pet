<script setup lang="ts">
const { $api } = useNuxtApp()
const authStore = useAuthStore()
const { profileIsCompleted } = storeToRefs(authStore)

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
</script>

<template>
  <article class="flex flex-col gap-2 w-full">
    <h2 class="color-secondary">Mis mascotas</h2>
    <div class="grid-section gap-2">
      <MyPetsCard
        v-for="pet in data"
        :key="pet?.id"
        :id="pet?.id"
        :name="pet?.name"
        :qrCode="pet?.qrCode"
      />
      <MyPetsCard
        v-for="pet in data"
        :key="pet?.id"
        :id="pet?.id"
        :name="pet?.name"
        :qrCode="pet?.qrCode"
      />
      <MyPetsAddPet v-if="profileIsCompleted" />
    </div>
  </article>
</template>

<style scoped>
.grid-section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
}
</style>
