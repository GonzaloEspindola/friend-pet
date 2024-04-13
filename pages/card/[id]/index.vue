<script setup lang="ts">
definePageMeta({
  auth: false,
})

const { $api } = useNuxtApp()
const route = useRoute()
const id = String(route.params.id)

const getPetInformation = async () => {
  try {
    return await $api.pets.petInformationByQrCode(id)
  } catch (error) {
    showToast('Ha ocurrido un error al obtener a tus mascotas')
  }
}

const { data, pending, refresh } = useAsyncData(
  'pets',
  async () => {
    const pet = await getPetInformation()

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
  <section class="flex flex-col items-center gap-2 max-w-md min-h-screen">
    <div class="bg-[#f8f8f8] w-full h-full">
      <section class="flex flex-col">
        <PublicImageSection :images="data?.pet?.gallery!" />
        <section class="flex flex-col gap-6 px-6 z-10 pb-6">
          <PublicBasicInformation
            :name="data?.pet?.name!"
            :gender="data?.pet?.gender!"
            :address="data?.pet?.address"
          />
          <CommonsDivider />
          <PublicResumeCardsSection
            :specie="data?.pet?.specie!"
            :age="data?.pet?.age!"
            :gender="data?.pet?.gender!"
            :weight="data?.pet?.weight!"
          />
          <PublicDescriptionInformation :description="data?.pet?.description" />
          <CommonsDivider />
          <PublicOwnersSection :owners-list="data?.pet?.owners!" />
        </section>
      </section>
    </div>
  </section>
</template>
