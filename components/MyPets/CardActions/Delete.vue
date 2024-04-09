<script setup lang="ts">
interface DeleteProps {
  id: string
  refresh: any
}

const { $api } = useNuxtApp()
const props = defineProps<DeleteProps>()
const isLoading = ref<boolean>(false)

const deletePet = async () => {
  try {
    isLoading.value = true
    await $api.pets.deletePet(props.id)
    showToast('Eliminado correctamente')
    props.refresh()
  } catch (error) {
    showToast('Ha ocurrido un error al eliminar a tu mascota')
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <button
    v-if="!isLoading"
    @click="deletePet"
    title="Eliminar"
    class="btn btn-error min-h-0 h-9 w-9 p-0 m-0 rounded-md grow"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width="14"
      height="14"
    >
      <path
        fill="white"
        d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
      />
    </svg>
    <span v-if="isLoading" class="loading loading-spinner"></span>
  </button>
</template>
