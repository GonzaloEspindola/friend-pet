<script setup lang="ts">
interface DescriptionProps {
  description?: string
}

const props = defineProps<DescriptionProps>()
</script>

<template>
  <article v-if="props.description">
    <p class="color-primary">
      {{ props.description }}
    </p>
  </article>
</template>
