<script setup lang="ts">
import QrFrameSelection from '~/components/MyPets/Qr/Frame/QrFrameSelection.vue'

const route = useRoute()
const router = useRouter()
const petId = String(route.params.id)
const { $api } = useNuxtApp()
const frameText = ref<string>('ESCANÉAME!')
const frameTextColor = ref<string>('#FFFFFF')
const frameColor = ref<string>('#000000')
const selectedFrame = ref<number>(0)
const backgroundColor = ref<string>('#FFFFFF')
const dotsColor = ref<string>('#000000')
const qrUrl = ref<string>('')
const isLoading = ref<boolean>(false)
const getQrInfoLoading = ref<boolean>(false)

const qrCode = computed(() => route.query.qrCode?.toString())

const handleChangeFrame = (id: number) => {
  selectedFrame.value = id
}

const handleChangeBackgroundColor = (color: string) => {
  backgroundColor.value = color
}

const handleChangeDotsColor = (color: string) => {
  dotsColor.value = color
}

const handleChangeFrameColor = (color: string) => {
  frameColor.value = color
}

const handleChangeFrameText = (text: string) => {
  frameText.value = text
}

const handleChangeFrameTextColor = (color: string) => {
  frameTextColor.value = color
}

const handleGenerateQr = async () => {
  try {
    const payload = {
      selectedFrame: selectedFrame.value,
      frameColor: frameColor.value,
      frameText: frameText.value,
      frameTextColor: frameTextColor.value,
      backgroundColor: backgroundColor.value,
      dotsColor: dotsColor.value,
    }

    isLoading.value = true
    const qrId = await $api.qr.createQr(payload, petId)
    showToast('Generado correctamente', 'success', 'bg-green-500')

    await router.replace({
      path: router.currentRoute.value.path,
      query: {
        qrCode: qrId,
      },
    })
  } catch (error) {
    showToast('Ha ocurrido un error al generar el código QR', 'error')
  } finally {
    isLoading.value = false
  }
}

const handleUpdateQr = async () => {
  try {
    const payload = {
      selectedFrame: selectedFrame.value,
      frameColor: frameColor.value,
      frameText: frameText.value,
      frameTextColor: frameTextColor.value,
      backgroundColor: backgroundColor.value,
      dotsColor: dotsColor.value,
    }

    isLoading.value = true
    await $api.qr.updateQr(payload, petId)
    showToast('Actualizado correctamente', 'success', 'bg-green-500')
  } catch (error) {
    showToast('Ha ocurrido un error al actualizar el código QR', 'error')
  } finally {
    isLoading.value = false
  }
}

const getQrInfo = async () => {
  try {
    getQrInfoLoading.value = true
    const qrInfo = await $api.qr.qrDetail(qrCode.value!)

    backgroundColor.value = qrInfo.backgroundColor
    dotsColor.value = qrInfo.dotsColor
    frameColor.value = qrInfo.frameColor
    frameText.value = qrInfo.frameText
    frameTextColor.value = qrInfo.frameTextColor
    selectedFrame.value = qrInfo.selectedFrame
    qrUrl.value = qrInfo.url!
  } catch (error) {
    showToast('Ha ocurrido un error al obtener el QR')
  } finally {
    getQrInfoLoading.value = false
  }
}

watch(
  qrCode,
  async () => {
    if (qrCode.value) {
      await getQrInfo()
    }
  },
  {
    immediate: true,
    deep: true,
  },
)
</script>

<template>
  <main class="flex flex-col gap-4 md:p-4">
    <MyPetsQrPreview
      :selected-frame="selectedFrame"
      :frame-color="frameColor"
      :frame-text="frameText"
      :frame-text-color="frameTextColor"
      :background-color="backgroundColor"
      :dots-color="dotsColor"
      :qr-url="qrUrl"
    />

    <section class="flex flex-col gap-4">
      <QrFrameSelection
        :selected-frame="selectedFrame"
        :frame-color="frameColor"
        :frame-text="frameText"
        :frame-text-color="frameTextColor"
        :handle-change-frame="handleChangeFrame"
        @frame-color="handleChangeFrameColor"
        @frame-text="handleChangeFrameText"
        @frame-text-color="handleChangeFrameTextColor"
      />

      <MyPetsQrFrameQrColorSelection
        :background-color="backgroundColor"
        :dots-color="dotsColor"
        @background-color="
          (backgroundColor: string) =>
            handleChangeBackgroundColor(backgroundColor)
        "
        @dots-color="(dotsColor: string) => handleChangeDotsColor(dotsColor)"
      />

      <CommonsPrimaryButton
        v-if="qrCode"
        text="Actualizar QR"
        class="btn-primary btn-sm"
        :pending="isLoading"
        @click="handleUpdateQr"
      />
      <CommonsPrimaryButton
        v-else
        text="Generar QR"
        class="btn-primary btn-sm"
        :pending="isLoading"
        @click="handleGenerateQr"
      />
    </section>
  </main>
</template>
