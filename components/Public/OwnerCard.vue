<script setup lang="ts">
export interface OwnerCardProps {
  ownerName: string
  ownerType: string
  cellphone: number
  whatsApp: number
  url?: string
}

const props = defineProps<OwnerCardProps>()
</script>

<template>
  <div
    class="flex rounded-xl gap-4 items-center p-4 border hover:bg-base-300 hover:border-slate-300"
  >
    <section>
      <img
        v-if="props.url"
        :src="props.url"
        alt="Foto del dueño del perro"
        class="rounded-xl h-20 w-20 object-cover"
      />

      <img
        v-else
        src="/assets/img/imagen_no_disponible.jpg"
        alt="Foto del dueño del perro"
        class="rounded-xl h-20 w-20 object-cover"
      />
    </section>

    <section>
      <h1 class="text-lg">
        <strong>{{ props.ownerName }}</strong>
      </h1>
      <p class="text-sm">{{ props.ownerType }}</p>
    </section>

    <section class="flex justify-end items-center grow gap-4">
      <a :href="'tel:' + props.cellphone">
        <img src="/assets/svg/cell.png" class="h-[40px] w-[40px]" />
      </a>

      <a
        :href="`https://api.whatsapp.com/send?phone=549${props.whatsApp}`"
        target="_blank"
      >
        <img src="/assets/svg/whatsapp.png" class="h-[40px] w-[40px]" />
      </a>
    </section>
  </div>
</template>
