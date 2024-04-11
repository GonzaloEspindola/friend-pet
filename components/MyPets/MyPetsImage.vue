<script setup lang="ts">
interface Props {
  url: string
}

const props = defineProps<Props>()
</script>

<template>
  <article>
    <img
      :src="props.url"
      alt="Foto de mascota"
      class="object-cover h-40 w-full rounded-md"
    />
  </article>
</template>
