<script setup lang="ts">
import type { PetOwner } from '~/repositories/types'

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
    const petInformation = await $api['pets'].petInformation(id)
    console.log('petInformation', petInformation)
  } catch (error) {
    console.log('error', error)
  }
}

getPetInformation()
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
          <PublicOwnersSection :owners-list="ownerList" />
          <CommonsPrimaryButton text="Editar perfil" />
        </section>
      </section>
    </div>
  </section>
</template>
