<script setup lang="ts">
interface BasicInformationProps {
  name: string
  gender: string
  address?: string
}

const props = defineProps<BasicInformationProps>()

const goMaps = () => {
  const url =
    'https://www.google.com/maps?q=' + encodeURIComponent(props.address!)
  window.open(url, '_blank')
}
</script>

<template>
  <article class="flex flex-col gap-2">
    <div class="flex flex-wrap gap-2 items-center">
      <h1 class="color-primary text-3xl">
        <strong>{{ props.name }}</strong>
      </h1>
      <img
        v-if="props.gender === 'Masculino'"
        src="/assets/svg/male.png"
        class="h-[30px] 2-[30px]"
      />
      <img
        v-if="props.gender === 'Femenino'"
        src="/assets/svg/female.png"
        class="h-[30px] 2-[30px]"
      />
    </div>
    <div class="flex gap-4 items-center">
      <p class="color-span">
        {{ props.address ?? '- - - - - - - -' }}
        <a
          @click="goMaps()"
          class="text-sm text-primary hover:cursor-pointer hover:font-bold"
        >
          Ver en mapa
        </a>
      </p>
    </div>
  </article>
</template>
