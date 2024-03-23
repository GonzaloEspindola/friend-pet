<script setup lang="ts">
import type { PetOwner } from '~/repositories/types'

definePageMeta({
  auth: false,
})

const { $api } = useNuxtApp()
const route = useRoute()
const id = String(route.params.id)

const ownerList = ref<PetOwner[]>([
  {
    ownerName: 'Micaela Bautista',
    ownerType: 'Dueña',
    cellphone: '1176845607',
    whatsapp: '1176845607',
  },
])

const getPetInformation = async () => {
  try {
    return await $api.pets.petInformation(id)
  } catch (error) {
    console.log('error', error)
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
  <section class="flex items-center justify-center">
    <div class="min-h-screen max-w-md w-full bg-[#f8f8f8]">
      <section class="flex flex-col">
        <PublicImageSection />
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
          <PublicOwnersSection :owners-list="data?.pet?.owners" />
          <CommonsPrimaryButton text="Editar perfil" />
        </section>
      </section>
    </div>
  </section>
</template>
