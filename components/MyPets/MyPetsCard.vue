<script setup lang="ts">
interface PetCardProps {
  id: string
  name: string
  qrCode: string
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
  <div class="flex flex-col gap-2 p-2 bg-white rounded-md drop-shadow-md">
    <MyPetsImage />
    <article class="flex justify-between items-center gap-2">
      <MyPetsCardActionsShowQR :id="props.id" :qr-code="props.qrCode" />
      <MyPetsCardActionsDetail :id="props.id" />
      <MyPetsCardActionsEdit
        :id="props.id"
        @open-edit-modal="(id) => openEditModal(id)"
      />
      <MyPetsCardActionsDelete :id="props.id" :refresh="refresh" />
    </article>
  </div>
</template>
