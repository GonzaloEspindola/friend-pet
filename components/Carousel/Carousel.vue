<script setup lang="ts"></script>

<template>
  <div class="carousel w-full h-full">
    <div id="slide1" class="carousel-item relative w-full">
      <div class="flex flex-col text-center justify-center items-center w-full">
        <img
          src="/assets/img/asset_1.png"
          alt="Imagen de perro"
          class="h-[200px] mb-4 md:h-[400px] md:mb-8"
        />
        <h1 class="text-xl text-white px-4 font-semibold md:text-4xl">
          Toda la información de tu mascota en un solo lugar
        </h1>
      </div>
      <div
        class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
      >
        <a href="#slide2" class="btn btn-circle">❮</a>
        <a href="#slide2" class="btn btn-circle">❯</a>
      </div>
    </div>

    <div id="slide2" class="carousel-item relative w-full">
      <div class="flex flex-col text-center justify-center items-center w-full">
        <img
          src="/assets/img/asset_1.png"
          alt="Imagen de perro"
          class="h-[200px] mb-4 md:h-[400px] md:mb-8"
        />
        <h1 class="text-xl text-white px-4 font-semibold md:text-4xl">
          Datos de contacto actualizables a un solo click
        </h1>
      </div>
      <div
        class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
      >
        <a href="#slide1" class="btn btn-circle">❮</a>
        <a href="#slide1" class="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
</template>
