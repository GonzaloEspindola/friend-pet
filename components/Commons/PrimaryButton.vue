<script setup lang="ts">
type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg'
type ButtonVariants =
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'ghost'
  | 'link'
  | 'success'

interface PrimaryButtonProps {
  text: string
  disabled?: boolean
  type?: any
  showIcon?: boolean
  to?: string
  variant?: ButtonVariants
  size?: ButtonSizes
}

const props = withDefaults(defineProps<PrimaryButtonProps>(), {
  type: 'button',
  showIcon: false,
  variant: 'primary',
  size: 'md',
})

const classes = computed(() => {
  const variantClass = props.variant ? `btn-${props.variant}` : ''
  const sizeClass = props.size ? `btn-${props.size}` : ''
  return `btn ${variantClass} ${sizeClass}`.trim()
})
</script>

<template>
  <button
    :class="['flex items-center gap-2 justify-center rounded btn', classes]"
    :type="props.type"
    :disabled="props.disabled"
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
