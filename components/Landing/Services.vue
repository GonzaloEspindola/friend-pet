<template>
  <div class="parent" id="services">
    <div class="main">
      <h1 class="text-3xl mb-2">Nuestros Servicios</h1>
      <p class="text-neutral">
        En Friendpet, nos dedicamos a crear un vínculo más fuerte entre los
        dueños y sus mascotas. Sabemos lo importante que es mantener a salvo a
        tu compañero más fiel, por eso hemos desarrollado un sistema sencillo y
        efectivo para compartir información vital con un simple escaneo de un
        código QR. Así, cualquier persona puede acceder al perfil de tu mascota
        en cuestión de segundos, ayudando a que regresen a casa sanos y salvos.
      </p>
    </div>

    <section class="first">
      <div>
        <img src="@/assets/svg/account.svg" alt="icono de cuenta" class="h-8" />
        <h1 class="font-semibold text-secondary">Crea tu cuenta</h1>
        <p class="text-neutral text-sm">
          Regístrese y comience a administrar la información de sus mascotas de
          forma segura en línea.
        </p>
      </div>
    </section>

    <div class="second">
      <div>
        <img src="@/assets/svg/add.svg" alt="icono de cuenta" class="h-8" />
        <h1 class="font-semibold text-secondary">Añade tus mascotas</h1>
        <p class="text-neutral text-sm">
          Ingrese información detallada sobre sus mascotas, incluido el
          historial médico y las instrucciones de cuidado.
        </p>
      </div>
    </div>

    <div class="third">
      <div>
        <img src="@/assets/svg/qr.svg" alt="icono de cuenta" class="h-8" />
        <h1 class="font-semibold text-secondary">Genera el codigo QR</h1>
        <p class="text-neutral text-sm">
          Cree un código QR único para cada mascota, vinculándolo a su perfil
          para una fácil identificación.
        </p>
      </div>
    </div>

    <div class="four">
      <div>
        <img src="@/assets/svg/update.svg" alt="icono de cuenta" class="h-8" />
        <h1 class="font-semibold text-secondary">
          Mantén la información actualizada
        </h1>
        <p class="text-neutral text-sm">
          Actualice periódicamente la información de sus mascotas y los datos de
          contacto para garantizar la precisión.
        </p>
      </div>
    </div>

    <div class="first-decoration">
      <img
        src="@/assets/svg/background/first.png"
        alt="Decoración del servicio 1 al servicio 2"
        class="w-full"
      />
    </div>

    <div class="second-decoration">
      <img
        src="@/assets/svg/background/second.png"
        alt="Decoración del servicio 2 al servicio 3"
        class="w-full"
      />
    </div>

    <div class="third-decoration">
      <img
        src="@/assets/svg/background/third.png"
        alt="Decoración del servicio 3 al servicio 4"
        class="w-full"
      />
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1500px) {
  .parent {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: repeat(6, 1fr);
    margin: 6rem 0px;
  }

  .main {
    grid-column: span 5 / span 5;
    grid-row: span 3 / span 3;
    grid-column-start: 4;
    text-align: center;
  }

  .first,
  .second,
  .third,
  .four {
    padding: 6px;
    height: 250px;
  }

  .first {
    grid-column: span 2 / span 2;
    grid-row: span 3 / span 3;
    grid-row-start: 4;
    border: 2px solid #f7eefc;
  }

  .second {
    grid-column: span 2 / span 2;
    grid-row: span 3 / span 3;
    grid-column-start: 4;
    grid-row-start: 4;
    border: 2px solid #fdefe3;
  }

  .third {
    grid-column: span 2 / span 2;
    grid-row: span 3 / span 3;
    grid-column-start: 7;
    grid-row-start: 4;
    border: 2px solid #f0fde3;
  }

  .four {
    grid-column: span 2 / span 2;
    grid-row: span 3 / span 3;
    grid-column-start: 10;
    grid-row-start: 4;
    border: 2px solid #fde3f6;
  }

  .first div,
  .second div,
  .third div,
  .four div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    text-align: center;
    height: 100%;
    padding: 10px;
  }

  .first-decoration {
    grid-column: span 1 / span 1;
    grid-row: span 1 / span 1;
    grid-column-start: 3;
    grid-row-start: 5;
  }

  .second-decoration {
    grid-column: span 1 / span 1;
    grid-row: span 1 / span 1;
    grid-column-start: 6;
    grid-row-start: 5;
  }

  .third-decoration {
    grid-column: span 1 / span 1;
    grid-row: span 1 / span 1;
    grid-column-start: 9;
    grid-row-start: 5;
  }
}

@media (max-width: 1500px) {
  .parent {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: repeat(12, 1fr);
    margin: 6rem 0px;
  }

  .main {
    grid-column: span 5 / span 5;
    grid-row: span 3 / span 3;
    grid-column-start: 4;
    text-align: center;
  }

  .first,
  .second,
  .third,
  .four {
    grid-column: span 3 / span 3;
    grid-row: span 3 / span 3;
    padding: 6px;
    height: 300px;
  }

  .first {
    grid-column-start: 3;
    grid-row-start: 4;
    border: 2px solid #f7eefc;
  }

  .second {
    grid-column-start: 7;
    grid-row-start: 4;
    border: 2px solid #fdefe3;
  }

  .third {
    grid-column-start: 3;
    grid-row-start: 8;
    border: 2px solid #f0fde3;
  }

  .four {
    grid-column-start: 7;
    grid-row-start: 8;
    border: 2px solid #fde3f6;
  }

  .first div,
  .second div,
  .third div,
  .four div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    text-align: center;
    height: 100%;
    padding: 10px;
  }

  .first-decoration {
    grid-column: span 1 / span 1;
    grid-row: span 1 / span 1;
    grid-column-start: 6;
    grid-row-start: 5;
  }

  .second-decoration {
    display: none;
  }

  .second-decoration div img {
    height: 100%;
  }

  .third-decoration {
    grid-column: span 1 / span 1;
    grid-row: span 1 / span 1;
    grid-column-start: 6;
    grid-row-start: 9;
  }
}

@media (max-width: 550px) {
  .parent {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
  }

  .main {
    grid-column: span 6 / span 6;
    grid-column-start: 1;
    text-align: center;
  }

  .first,
  .second,
  .third,
  .four {
    padding: 6px;
    height: 250px;
  }

  .first {
    border: 2px solid #f7eefc;
  }

  .second {
    border: 2px solid #fdefe3;
  }

  .third {
    border: 2px solid #f0fde3;
  }

  .four {
    border: 2px solid #fde3f6;
  }

  .first div,
  .second div,
  .third div,
  .four div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    text-align: center;
    height: 100%;
    padding: 10px;
  }

  .first-decoration,
  .second-decoration,
  .third-decoration,
  .four-decoration {
    display: none;
  }
}

.first div:hover,
.second div:hover,
.third div:hover,
.four div:hover {
  transform: scale(1.05);
  transition-duration: 0.5s;
}

.first div {
  background-color: #f7eefc;
}

.second div {
  background-color: #fdefe3;
}

.third div {
  background-color: #f0fde3;
}

.four div {
  background-color: #fde3f6;
}
</style>
