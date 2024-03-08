<template>
  <section class="relative">
    <section class="ola h-[100px] w-full"></section>
    <article class="h-[200px] w-full">
      <img
        src="/assets/examples/pupi2.jpeg"
        alt="Foto de mascota"
        class="object-cover object-center h-full w-full rounded-2xl"
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
  bottom: -25px;
  z-index: 0;
  background-color: white;
}
</style>
