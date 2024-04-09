<script setup lang="ts">
import { Field, useForm } from 'vee-validate'

interface Props {
  selectedFrame: number
  frameColor: string
  frameText: string
  frameTextColor: string
  handleChangeFrame: Function
}

interface Emits {
  (e: 'frameColor', frameColor: string): void
  (e: 'frameText', frameText: string): void
  (e: 'frameTextColor', frameTextColor: string): void
}

interface Form {
  frameColor: string
  frameText: string
  frameTextColor: string
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
const { values, setFieldValue } = useForm<Form>({
  initialValues: {
    frameColor: props.frameColor,
    frameText: props.frameText,
    frameTextColor: props.frameTextColor,
  },
})

watch(values, () => {
  const { frameColor, frameText, frameTextColor } = values

  if (frameColor) {
    emit('frameColor', frameColor)
  }

  if (frameText) {
    emit('frameText', frameText)
  }

  if (frameTextColor) {
    emit('frameTextColor', frameTextColor)
  }
})

watch(props, () => {
  const { frameColor, frameText, frameTextColor } = props

  setFieldValue('frameColor', frameColor)
  setFieldValue('frameText', frameText)
  setFieldValue('frameTextColor', frameTextColor)
})
</script>

<template>
  <section>
    <div class="collapse bg-base-200 rounded-sm">
      <input type="checkbox" class="peer" />
      <div class="collapse-title">
        <h3 class="text-secondary font-semibold">Marco</h3>
        <p class="text-neutral text-sm">
          Personalice el marco que mejor se adapte al estilo de su mascota
        </p>
      </div>
      <div class="collapse-content gap-2">
        <div class="divider m-0 p-0"></div>
        <div class="flex flex-col gap-2">
          <section>
            <p class="text-neutral text-xs font-semibold">Estilo de marco</p>
            <article class="flex flex-wrap gap-2 mt-2">
              <button
                class="w-[80px] h-[100px] p-2 bg-white rounded-md border-[2px] hover:border-gray-400"
                :class="{ 'border-primary': props.selectedFrame === 0 }"
                @click="props.handleChangeFrame(0)"
              >
                <picture>
                  <MyPetsQrFrame0 />
                </picture>
              </button>

              <button
                v-for="frame in frames"
                :key="frame.id"
                class="w-[80px] h-[100px] p-2 bg-white rounded-md border-[2px] hover:border-gray-400"
                :class="{ 'border-primary': selectedFrame === frame.id }"
                @click="props.handleChangeFrame(frame.id)"
              >
                <picture>
                  <img :src="frame.src" :alt="'Frame ' + frame.id" lazy />
                </picture>
              </button>
            </article>
          </section>

          <section
            class="flex flex-col flex-1 gap-2 bg-[#F3F3F3] p-4 rounded-sm"
            v-if="selectedFrame !== 0"
          >
            <p class="text-neutral text-xs font-semibold">Texto del marco</p>
            <article class="flex gap-2">
              <Field
                :value="props.frameText"
                name="frameText"
                rules="required"
                class="input input-bordered w-3/4"
              />
              <Field
                :value="props.frameTextColor"
                name="frameTextColor"
                rules="required"
                type="color"
                class="input input-bordered w-1/4"
              />
            </article>
          </section>

          <section
            class="flex flex-col flex-1 gap-2 bg-[#F3F3F3] p-4 rounded-sm"
          >
            <p class="text-neutral text-xs font-semibold">Color del marco</p>
            <article class="flex gap-2">
              <Field
                :value="props.frameColor"
                name="frameColor"
                rules="required"
                class="input input-bordered w-3/4"
              />
              <Field
                :value="props.frameColor"
                name="frameColor"
                rules="required"
                type="color"
                class="input input-bordered w-1/4"
              />
            </article>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>
