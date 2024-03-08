<script setup lang="ts">
interface ModalProps {
  title: string
  showFooter?: boolean
}

const props = withDefaults(defineProps<ModalProps>(), {
  showFooter: false,
})
const modal = ref<HTMLElement>()

const handleOpenModal = () => {
  modal.value.showModal()
}

const handleCloseModal = () => {
  modal.value.close()
}

defineExpose({
  handleOpenModal,
  handleCloseModal,
})
</script>

<template>
  <dialog ref="modal" class="rounded-xl p-6">
    <article class="flex flex-col gap-2">
      <header class="flex items-center justify-between">
        <h2 class="uppercase">{{ props.title }}</h2>
        <span class="cursor-pointer" @click="handleCloseModal"
          ><strong>X</strong></span
        >
      </header>
      <CommonsDivider />
      <section>
        <slot />
      </section>
      <footer v-if="showFooter" class="flex flex-col justify-end">
        <CommonsDivider />
        <slot name="footer" />
      </footer>
    </article>
  </dialog>
</template>
