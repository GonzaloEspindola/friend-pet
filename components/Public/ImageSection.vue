<script setup lang="ts">
const { loggedIn } = useAuth()

interface Props {
  images: string[]
}

const props = defineProps<Props>()
</script>

<template>
  <div class="carousel relative h-[350px] w-full mb-4">
    <div
      v-for="image in props.images"
      :key="image"
      class="carousel-item w-full"
    >
      <div v-if="loggedIn">
        <a @click="navigateTo('/my-pets')" class="btn btn-circle absolute m-2"
          >❮</a
        >
      </div>
      <img :src="image" class="w-full object-cover" />
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
