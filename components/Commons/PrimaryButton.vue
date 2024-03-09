<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue'

interface PrimaryButtonProps {
  text: string
  type?: any
  showIcon?: boolean
  variant?: string
}

const props = withDefaults(defineProps<PrimaryButtonProps>(), {
  type: 'button',
  showIcon: false,
  variant: 'primary',
})

const classes = {
  primary: 'bg-[#e84f2c] text-white grow hover:bg-[#c74123]',
  secondary: 'text-black border hover:border-[#c74123] hover:text-[#c74123]',
}
</script>

<template>
  <button
    class="flex items-center gap-2 justify-center rounded-xl px-6 py-2"
    :class="classes[props.variant]"
    :type="props.type"
  >
    <img
      v-if="props.showIcon"
      src="/assets/svg/add.png"
      alt="Imagen de perfil del usuario en sesión"
      class="h-[40px] w-[40px]"
    />
    {{ props.text }}
  </button>
</template>
