<script setup lang="ts">
import vueQr from 'vue-qr/src/packages/vue-qr.vue'
import type { qrOptions } from '~/repositories/types/qr'

interface QrFormProps {
  qrOptions?: any
  errors?: any
  backgroundColor: string
  dotsColor: string
  hidden?: boolean
  qrUrl?: string
}

interface Emit {
  (event: 'update:svg', dataURI: any): void
}

const props = defineProps<QrFormProps>()
const emit = defineEmits<Emit>()

const qrStyleOptions = {
  data: {
    scale: 1,
  },
  timing: {
    scale: 1,
    protectors: false,
  },
  alignment: {
    scale: 1,
    protectors: false,
  },
  cornerAlignment: {
    scale: 1,
    protectors: true,
  },
}

const getDataURL = (dataURI: any) => {
  emit('update:svg', dataURI)
}
</script>

<template>
  <vue-qr
    class="p-6 rounded-md h-full"
    :style="props.hidden ? 'display: none' : ''"
    :text="qrUrl"
    qid="qr"
    :colorLight="props.backgroundColor"
    :colorDark="props.dotsColor"
    :margin="10"
    :components="qrStyleOptions"
    :callback="(dataURI: any) => getDataURL(dataURI)"
  />
</template>
