<script setup lang="ts">
interface DescriptionProps {
  description?: string
}

const props = defineProps<DescriptionProps>()
</script>

<template>
  <article v-if="props.description" class="flex flex-col gap-2">
    <h1>Descripción</h1>
    <p class="text-neutral">
      {{ props.description }}
    </p>
  </article>
</template>
