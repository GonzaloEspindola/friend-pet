<script setup lang="ts">
import type { PetOwner } from '../types'

interface OwnerSectionProps {
  ownersList: PetOwner[]
  hideTitle?: boolean
}

const props = withDefaults(defineProps<OwnerSectionProps>(), {
  hideTitle: false,
})
</script>

<template>
  <article class="flex flex-col gap-2">
    <h2 v-if="!props.hideTitle" class="color-secondary">Mi familia</h2>
    <PublicOwnerCard
      v-for="owner in props.ownersList"
      :key="owner.ownerName"
      :owner-name="owner.ownerName"
      :owner-type="owner.ownerType"
      :cellphone="owner.cellphone"
      :whatsApp="owner.whatsApp"
    />
  </article>
</template>
