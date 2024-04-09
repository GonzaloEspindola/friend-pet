<script setup lang="ts">
import { Field, useForm } from 'vee-validate'

interface Props {
  backgroundColor: string
  dotsColor: string
}

interface Emits {
  (e: 'backgroundColor', backgroundColor: string): void
  (e: 'dotsColor', dotsColor: string): void
}

interface Form {
  backgroundColor: string
  dotsColor: string
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
const { values, setFieldValue } = useForm<Form>()
const rgbHexRegex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/

const isValidHexColor = (color: string): boolean => {
  return rgbHexRegex.test(color)
}

watch(values, () => {
  const { backgroundColor, dotsColor } = values

  if (isValidHexColor(backgroundColor)) {
    emit('backgroundColor', backgroundColor)
  }

  if (isValidHexColor(dotsColor)) {
    emit('dotsColor', dotsColor)
  }
})

watch(props, () => {
  const { backgroundColor, dotsColor } = props

  setFieldValue('backgroundColor', backgroundColor)
  setFieldValue('dotsColor', dotsColor)
})
</script>

<template>
  <div class="collapse bg-base-200 rounded-sm">
    <input type="checkbox" class="peer" />
    <div class="collapse-title">
      <h3 class="text-secondary font-semibold">Colores</h3>
      <p class="text-neutral text-sm">
        Personalice el color que mejor se adapte al estilo de su mascota
      </p>
    </div>
    <div class="collapse-content">
      <div class="divider m-0 p-0"></div>
      <section>
        <p class="text-neutral text-xs font-semibold mb-2">Colores</p>
        <article>
          <div class="flex flex-col gap-2">
            <article
              class="flex flex-col flex-1 gap-2 bg-[#F3F3F3] p-4 rounded-sm"
            >
              <p class="text-neutral text-xs font-semibold">Color del fondo</p>
              <section class="flex gap-2">
                <Field
                  :value="props.backgroundColor"
                  name="backgroundColor"
                  rules="required"
                  class="input input-bordered w-3/4"
                />
                <Field
                  :value="props.backgroundColor"
                  name="backgroundColor"
                  rules="required"
                  type="color"
                  class="input input-bordered w-1/4"
                />
              </section>
            </article>

            <article
              class="flex flex-col flex-1 gap-2 bg-[#F3F3F3] p-4 rounded-sm"
            >
              <p class="text-neutral text-xs font-semibold">
                Color de los puntos
              </p>
              <section class="flex gap-2">
                <Field
                  :value="props.dotsColor"
                  name="dotsColor"
                  rules="required"
                  class="input input-bordered w-3/4"
                />
                <Field
                  :value="props.dotsColor"
                  name="dotsColor"
                  rules="required"
                  type="color"
                  class="input input-bordered w-1/4"
                />
              </section>
            </article>
          </div>
        </article>
      </section>
    </div>
  </div>
</template>
