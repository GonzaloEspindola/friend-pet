<script setup lang="ts">
import { components } from '~/utils/qr_const'

interface Props {
  selectedFrame: number
  frameColor: string
  frameText: string
  frameTextColor: string
  backgroundColor: string
  dotsColor: string
  qrUrl?: string
}

const props = defineProps<Props>()

const getSelectFrameComponent = () => {
  return components.find((component) => component.id === props.selectedFrame)
    ?.component
}
</script>

<template>
  <section>
    <div class="mockup-browser border bg-base-300 rounded-sm">
      <div class="mockup-browser-toolbar">
        <div class="input text-sm">
          <p class="mt-1">
            {{ qrUrl ?? 'Genera el código QR para el perfil de tu mascota' }}
          </p>
        </div>
      </div>
      <div class="h-[200px] relative bg-base-200">
        <div
          class="absolute flex items-center justify-center inset-0 p-4 m-auto"
        >
          <MyPetsQrForm
            v-if="selectedFrame === 0"
            :background-color="backgroundColor"
            :dots-color="dotsColor"
          />
          <component
            v-else
            :is="getSelectFrameComponent()"
            :frame-color="frameColor"
            :text="frameText"
            :text-color="frameTextColor"
            class="h-full"
          >
            <MyPetsQrForm
              :background-color="backgroundColor"
              :dots-color="dotsColor"
            />
          </component>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.qrSection {
  width: 100% !important;
}
</style>
