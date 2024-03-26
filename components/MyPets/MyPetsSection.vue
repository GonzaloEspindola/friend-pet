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
    const pet = await getMyPets()

    return {
      pet,
    }
  },
  {
    server: false,
    lazy: false,
  },
)
</script>

<template>
  <article class="flex flex-col gap-4">
    <h2 class="color-secondary">Mis mascotas</h2>
    <MyPetsCard
      v-for="pet in data"
      :key="pet?.id"
      :id="pet?.id"
      :name="pet?.name"
      :specie="pet?.specie"
      :age="pet?.age"
      :weight="pet?.weight"
      :address="pet?.address"
      :description="pet?.description"
      :gender="pet?.gender"
      :qrCode="pet?.qrCode"
    />
  </article>
</template>
