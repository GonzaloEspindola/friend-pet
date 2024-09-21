<script setup lang="ts">
interface PetCardProps {
  id: string
  name: string
  qrCode: string
  imageUrl: string
  refresh: any
}

interface PetCardEmits {
  (e: 'openEditModal', id: string): void
}

const props = defineProps<PetCardProps>()
const emit = defineEmits<PetCardEmits>()

const openEditModal = (id: string) => {
  emit('openEditModal', id)
}
</script>

<template>
  <div class="flex flex-col gap-2 p-2 bg-base-300 rounded-md drop-shadow-md">
    <MyPetsImage :url="props.imageUrl" />
    <article class="flex justify-between items-center gap-2">
      <MyPetsCardActionsShowQR :id="props.id" :qr-code="props.qrCode" />
      <MyPetsCardActionsDetail :qr-code="props.qrCode" />
      <MyPetsCardActionsEdit
        :id="props.id"
        @open-edit-modal="(id: string) => openEditModal(id)"
      />
      <MyPetsCardActionsDelete :id="props.id" :refresh="refresh" />
    </article>
  </div>
</template>
