<template>
  <article class="flex flex-col gap-2">
    <h2 class="color-secondary">Mi familia</h2>
    <div
      class="flex rounded-xl gap-4 items-center p-4 border hover:bg-slate-100 hover:border-slate-300"
    >
      <section>
        <img
          src="/assets/examples/mica.jpg"
          alt="Foto del dueño del perro"
          class="rounded-xl h-20 w-20 object-cover"
        />
      </section>

      <section>
        <h2 class="color-primary text-xl"><strong>Micaela Bautista</strong></h2>
        <p class="text-slate-400">Dueña</p>
      </section>

      <section class="flex justify-end items-center grow gap-4">
        <img src="/assets/svg/cell.png" class="h-[40px] 2-[40px]" />
        <img src="/assets/svg/whatsapp.png" class="h-[40px] 2-[40px]" />
      </section>
    </div>
  </article>
</template>
