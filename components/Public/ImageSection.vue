<script setup lang="ts">
interface Props {
  images: string[]
}

const props = defineProps<Props>()
</script>

<template>
  <div class="carousel w-full relative">
    <section class="ola h-[100px] w-full"></section>
    <div
      v-for="image in props.images"
      :key="image"
      id="slide1"
      class="carousel-item relative h-[300px] w-full"
    >
      <img :src="image" class="w-full object-cover" />
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <a href="#slide4" class="btn btn-circle btn-xs">❮</a>
        <a href="#slide2" class="btn btn-circle btn-xs">❯</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ola {
  position: absolute;
  --mask: radial-gradient(126.18px at 50% 171px, #000 99%, #0000 101%)
      calc(50% - 120px) 0/240px 100%,
    radial-gradient(126.18px at 50% -111px, #0000 99%, #000 101%) 50% 60px/240px
      100% repeat-x;
  -webkit-mask: var(--mask);
  mask: var(--mask);
  bottom: 0;
  z-index: 1;
  background-color: #f8f8f8;
}
</style>
