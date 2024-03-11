<script setup lang="ts">
interface ResumeCardsProps {
  specie: string
  age: string
  gender: string
  weight: string
}

const props = defineProps<ResumeCardsProps>()
</script>

<template>
  <section class="flex flex-col gap-2">
    <h2 class="color-secondary">Datos sobre mi</h2>
    <article class="grid-section gap-2">
      <div
        class="flex items-center flex-item gap-3 py-1 px-4 rounded-xl border hover:bg-slate-100 hover:border-slate-300"
      >
        <img src="/assets/svg/paw.png" class="h-[26px] 2-[26px]" />
        <div>
          <p class="text-sm color-secondary">Raza</p>
          <strong class="text-lg color-primary">{{ props.specie }}</strong>
        </div>
      </div>

      <div
        class="flex items-center flex-item gap-3 py-1 px-4 rounded-xl border hover:bg-slate-100 hover:border-slate-300"
      >
        <img src="/assets/svg/clock.png" class="h-[26px] 2-[26px]" />
        <div>
          <p class="text-sm color-secondary">Edad</p>
          <strong class="text-lg color-primary">{{ props.age }}</strong>
        </div>
      </div>

      <div
        class="flex items-center flex-item gap-3 py-1 px-4 rounded-xl border hover:bg-slate-100 hover:border-slate-300"
      >
        <img src="/assets/svg/female.png" class="h-[26px] 2-[26px]" />
        <div>
          <p class="text-sm color-secondary">Genero</p>
          <strong class="text-lg color-primary">{{ props.gender }}</strong>
        </div>
      </div>

      <div
        class="flex items-center flex-item gap-3 py-1 px-4 rounded-xl border hover:bg-slate-100 hover:border-slate-300"
      >
        <img src="/assets/svg/weight.png" class="h-[26px] 2-[26px]" />
        <div>
          <p class="text-sm color-secondary">Peso</p>
          <strong class="text-lg color-primary">{{ props.weight }}</strong>
        </div>
      </div>
    </article>
  </section>
</template>

<style>
.grid-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
</style>
