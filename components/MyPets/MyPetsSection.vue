<script setup lang="ts">
const { $api } = useNuxtApp()

const getMyPets = async () => {
  try {
    return await $api.pets.myPets()
  } catch (error) {
    console.log('error', error)
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
  <article class="flex flex-col gap-2">
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
    </div>
  </article>
</template>

<style scoped>
.grid-section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
}
</style>
