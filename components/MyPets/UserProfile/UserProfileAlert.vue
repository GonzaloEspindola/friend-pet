<script setup lang="ts">
interface ProfileAlertProps {
  profileIsCompleted: boolean
}

const props = defineProps<ProfileAlertProps>()
</script>

<template>
  <div
    v-if="!profileIsCompleted"
    class="flex gap-2 items-center justify-center grow py-1 x-2 rounded-md bg-accent"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="stroke-current shrink-0 h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
    <span class="text-sm"
      >Debes completar tu perfil antes de poder agregar a tus mascotas!</span
    >
  </div>
</template>
