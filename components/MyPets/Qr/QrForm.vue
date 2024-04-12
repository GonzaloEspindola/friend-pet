<script setup lang="ts">
import vueQr from 'vue-qr/src/packages/vue-qr.vue'
import type { qrOptions } from '~/repositories/types/qr'

interface QrFormProps {
  qrOptions?: any
  errors?: any
  backgroundColor: string
  dotsColor: string
  hidden?: boolean
}

interface Emit {
  (event: 'update:svg', dataURI: any): void
}

const props = defineProps<QrFormProps>()
const emit = defineEmits<Emit>()

const qrStyleOptions = {
  data: {
    scale: 100,
  },
  timing: {
    scale: 20,
    protectors: true,
  },
  alignment: {
    scale: 20,
    protectors: false,
  },
  cornerAlignment: {
    scale: 20,
    protectors: false,
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
    :text="`/qr/`"
    qid="testid"
    :colorLight="props.backgroundColor"
    :colorDark="props.dotsColor"
    :margin="10"
    :components="qrStyleOptions"
    :callback="(dataURI: any) => getDataURL(dataURI)"
  />
</template>
