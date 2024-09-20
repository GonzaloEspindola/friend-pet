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
const qrUri = ref<string>('')

const getSelectFrameComponent = () => {
  return components.find((component) => component.id === props.selectedFrame)
    ?.component
}

const downloadQrPng = () => {
  const qrSection = document.getElementById('qr-section')?.innerHTML

  const modifiedQrSection = qrSection?.replace(/<img[^>]+>/g, (match) => {
    return match.slice(0, -1) + '/>'
  })

  const blob = new Blob([modifiedQrSection!], { type: 'image/svg+xml' })
  const downloadLink = document.createElement('a')
  downloadLink.href = URL.createObjectURL(blob)
  downloadLink.download = 'qr.svg'
  downloadLink.click()
}
</script>

<template>
  <section>
    <div class="mockup-browser border bg-base-300 rounded-sm mt-[6rem]">
      <div class="mockup-browser-toolbar">
        <div class="input text-sm">
          <p class="mt-1">
            {{ qrUrl ?? 'Genera el código QR para el perfil de tu mascota' }}
          </p>
        </div>
      </div>
      <div class="h-[200px] relative bg-base-200">
        <section class="flex items-center absolute gap-2 p-2 z-50">
          <div>
            <a
              @click="navigateTo('/my-pets')"
              class="btn btn-sm btn-circle btn-primary cursor-pointer"
              >❮</a
            >
          </div>
          <div
            @click="downloadQrPng"
            class="flex items-center justify-center bg-primary p-1 px-2 rounded-md cursor-pointer text-white text-sm"
          >
            Descargar QR
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-download"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="white"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 5v13m-4-4l4 4l4-4" />
            </svg>
          </div>
        </section>
        <MyPetsQrForm
          :background-color="backgroundColor"
          :dots-color="dotsColor"
          :qrUrl="qrUrl"
          hidden
          @update:svg="(dataURI: string) => (qrUri = dataURI)"
        />
        <div
          id="qr-section"
          class="absolute flex items-center justify-center inset-0 p-4 m-auto"
        >
          <MyPetsQrForm
            v-if="selectedFrame === 0"
            :background-color="backgroundColor"
            :dots-color="dotsColor"
            :qrUrl="qrUrl"
          />
          <component
            v-else
            :is="getSelectFrameComponent()"
            :frame-color="frameColor"
            :text="frameText"
            :text-color="frameTextColor"
            :qr-uri="qrUri"
            class="h-full"
          />
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
