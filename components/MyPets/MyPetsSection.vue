<template>
  <article class="flex flex-col gap-4">
    <h2 class="color-secondary">Mis perros</h2>
    <div class="rounded-3xl p-3 bg-white shadow-md">
      <MyPetsImage />
      <div class="flex flex-wrap gap-2 pt-3 relative min-w-100 z-1">
        <CommonsPrimaryButton text="Editar" />
        <CommonsPrimaryButton text="Ver detalle" />
      </div>
    </div>
  </article>
</template>
