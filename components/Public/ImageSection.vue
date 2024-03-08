<template>
  <section class="relative">
    <section class="ola h-[100px] w-full"></section>
    <article class="h-[400px] w-full">
      <img
        src="/assets/examples/pupi2.jpeg"
        alt="Foto de mascota"
        class="object-cover object-center h-full w-full"
      />
    </article>
  </section>
</template>

<style scoped>
.ola {
  position: absolute;
  --mask: radial-gradient(126.18px at 50% 171px, #000 99%, #0000 101%)
      calc(50% - 120px) 0/240px 100%,
    radial-gradient(126.18px at 50% -111px, #0000 99%, #000 101%) 50% 60px/240px
      100% repeat-x;
  -webkit-mask: var(--mask);
  mask: var(--mask);
  bottom: 0;
  z-index: 1;
  background-color: #f8f8f8;
}
</style>
