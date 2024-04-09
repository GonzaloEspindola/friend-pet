<script setup lang="ts">
interface DescriptionProps {
  description?: string
}

const props = defineProps<DescriptionProps>()
</script>

<template>
  <article v-if="props.description" class="flex flex-col gap-2">
    <h2 class="color-secondary">Descripción</h2>
    <p class="color-primary">
      {{ props.description }}
    </p>
  </article>
</template>
