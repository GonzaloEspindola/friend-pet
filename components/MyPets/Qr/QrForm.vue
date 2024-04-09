<script setup lang="ts">
import vueQr from 'vue-qr/src/packages/vue-qr.vue'
import type { qrOptions } from '~/repositories/types/qr'

interface QrFormProps {
  qrOptions?: any
  errors?: any
  backgroundColor: string
  dotsColor: string
}

const props = defineProps<QrFormProps>()

const qrStyleOptions = {
  data: {
    scale: 1,
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
</script>

<template>
  <vue-qr
    class="p-6 rounded-md h-full"
    :text="`/qr/`"
    qid="testid"
    :colorLight="backgroundColor"
    :colorDark="dotsColor"
    :margin="10"
    :components="qrStyleOptions"
  ></vue-qr>
</template>
