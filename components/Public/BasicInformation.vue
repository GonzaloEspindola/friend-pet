<script setup lang="ts">
interface BasicInformationProps {
  name: string
  gender: string
  address?: string
}

const props = defineProps<BasicInformationProps>()
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
      <p class="color-span">{{ props.address ?? '- - - - - - - -' }}</p>
      <p class="color-span px-4 border rounded-xl text-xs">2.5 KM</p>
    </div>
  </article>
</template>
