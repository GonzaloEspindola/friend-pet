<script setup lang="ts">
const addPetModal = ref<any>()

const handleClick = () => {
  addPetModal.value.handleOpenModal()
}
</script>

<template>
  <article class="flex flex-col gap-4">
    <section class="flex justify-between items-center">
      <img
        src="/assets/svg/man.png"
        alt="Imagen de perfil del usuario en sesión"
        class="h-[40px] w-[40px]"
      />
      <CommonsPrimaryButton
        text="Añadir mascota"
        variant="secondary"
        showIcon
        @click="handleClick"
      />

      <CommonsModal ref="addPetModal" title="Añadir nueva mascota">
        <section>
          <form class="flex flex-col gap-2">
            <label for="">Nombre:</label>
            <input type="text" placeholder="Pupencio" />
            <div class="grid-section gap-2">
              <div>
                <label for="">Raza:</label>
                <input type="text" placeholder="Mestizo" />
              </div>
              <div>
                <label for="">Edad:</label>
                <input type="text" placeholder="6 años" />
              </div>
              <div>
                <label for="">Genero:</label>
                <select name="gender-select" id="gender-select">
                  <option value="male">Masculino</option>
                  <option value="female">Femenino</option>
                </select>
              </div>
              <div>
                <label for="">Peso:</label>
                <input type="text" placeholder="5 kg" />
              </div>
            </div>
            <label for="">Dirección:</label>
            <input type="text" placeholder="Dirección" />
            <label for="">Descripción:</label>
            <input type="text" placeholder="Descripción" />
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered input-primary w-full max-w-xs"
            />
          </form>
        </section>
      </CommonsModal>
    </section>
  </article>
</template>

<style>
input,
select {
  border: 1px solid #dfddddbe;
  padding: 2px 6px;
  border-radius: 5px;
  color: #8f8f8f;
  width: 100%;
}

input::placeholder {
  color: #8f8f8f;
}

.grid-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}
</style>
