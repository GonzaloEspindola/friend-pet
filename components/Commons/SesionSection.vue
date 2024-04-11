<script setup lang="ts">
const { signOut } = useAuth()
</script>

<template>
  <section class="flex justify-end">
    <CommonsPrimaryButton text="Cerrar sesión" size="sm" @click="signOut" />
  </section>
</template>
