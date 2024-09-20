<template>
  <div class="parent" id="home">
    <div class="main">
      <h1 class="text-4xl">Tu mascota, segura y siempre conectada</h1>
      <p class="text-neutral">
        Crea perfiles detallados de tus mascotas y genera códigos QR que brindan
        acceso instantáneo a su información. Todo en un solo lugar.
      </p>

      <div class="flex justify-center gap-4">
        <CommonsPrimaryButton
          text="Iniciar sesión"
          variant="neutral"
          size="sm"
          to="/auth/login"
        />
        <CommonsPrimaryButton
          text="Registrarse"
          variant="primary"
          size="sm"
          to="/auth/register"
        />
      </div>
    </div>

    <div class="left">
      <img
        src="@/assets/img/pet-1.png"
        alt="Imagen de mascota 1"
        class="object-cover h-full"
      />
    </div>

    <div class="left-bottom">
      <img
        src="@/assets/img/pet-3.png"
        alt="Imagen de mascota 3"
        class="object-cover h-full"
      />
    </div>

    <div class="right">
      <img
        src="@/assets/img/pet-2.png"
        alt="Imagen de mascota 2"
        class="object-cover h-full"
      />
    </div>

    <div class="right-bottom">
      <img
        src="@/assets/img/pet-4.png"
        alt="Imagen de mascota 4"
        class="object-cover h-full"
      />
    </div>

    <div class="left-to-bottom-left">
      <img
        src="@/assets/svg/background/left-to-bottom-left.png"
        alt="Decoración de imagen izquierda hacia imagen inferior izquierda"
      />
    </div>

    <div class="bottom-left-to-bottom-right">
      <img
        src="@/assets/svg/background/bottom-left-to-bottom-right.png"
        alt="Decoración de imagen izquierda hacia imagen inferior izquierda"
      />
    </div>

    <div class="bottom-right-to-right">
      <img
        src="@/assets/svg/background/bottom-right-to-right.png"
        alt="Decoración de la imagen inferior derecha hacia la imagen derecha"
      />
    </div>
  </div>
</template>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: repeat(8, 1fr);
  margin: 6rem 0px;
}

.main {
  grid-column: span 5 / span 5;
  grid-row: span 3 / span 3;
  grid-column-start: 4;
  grid-row-start: 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
}

.left {
  grid-column: span 2 / span 2;
  grid-row: span 4 / span 4;
  grid-column-start: 1;
  grid-row-start: 2;
  border: 2px solid #f7eefc;
  padding: 4px;
}

.right {
  grid-column: span 2 / span 2;
  grid-row: span 4 / span 4;
  grid-column-start: 10;
  grid-row-start: 2;
  border: 2px solid #fde3f6;
  padding: 4px;
}

.left-bottom {
  grid-column: span 2 / span 2;
  grid-row: span 4 / span 4;
  grid-column-start: 4;
  grid-row-start: 5;
  border: 2px solid #f0fde3;
  padding: 4px;
}

.right-bottom {
  grid-column: span 2 / span 2;
  grid-row: span 4 / span 4;
  grid-column-start: 7;
  grid-row-start: 5;
  border: 2px solid #fdefe3;
  padding: 4px;
}

.left-to-bottom-left {
  grid-column: span 1 / span 1;
  grid-row: span 4 / span 4;
  grid-column-start: 3;
  grid-row-start: 4;
}

.bottom-left-to-bottom-right {
  grid-column: span 1 / span 1;
  grid-row: span 4 / span 4;
  grid-column-start: 6;
  grid-row-start: 7;
}

.bottom-right-to-right {
  grid-column: span 1 / span 1;
  grid-row: span 4 / span 4;
  grid-column-start: 9;
  grid-row-start: 4;
}

@media (max-width: 550px) {
  .parent {
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }

  .main {
    display: flex;
    margin-bottom: 1rem;
  }

  .left,
  .right,
  .left-bottom,
  .left-to-bottom-left,
  .bottom-right-to-right,
  .bottom-left-to-bottom-right {
    display: none;
  }

  .right-bottom img {
    width: 100%;
    object-fit: cover;
  }
}
</style>
