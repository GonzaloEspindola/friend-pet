<script setup lang="ts">
interface Props {
  frameColor: string
  text: string
  textColor: string
  qrUri: string
}

const props = defineProps<Props>()
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
    id="Layer_1"
    x="0px"
    y="0px"
    viewBox="0 0 320 418"
    style="enable-background: new 0 0 320 418"
    xml:space="preserve"
    :fill="props.frameColor"
  >
    <g class="relative">
      <path
        d="M320.5,343.8v64.8c-0.7,4.7-4.3,8.3-9,9H9.1c-7.8-2.6-9.4-5-9.4-13.5c0-18.6,0-37.2,0-55.8c0-11,4.6-15.7,15.6-16  c5.8-0.2,11.6,0,17.4,0H299c2.3,0,4.6,0,7,0.1C314.7,332.7,318.5,335.8,320.5,343.8z"
      />
      <text
        class="text-3xl font-bold"
        x="160"
        y="385"
        :fill="props.textColor"
        text-anchor="middle"
      >
        {{ props.text }}
      </text>
    </g>

    <path
      d="M306.8,0.1h-1c-97.1,0-194.2,0-291.3,0c-2.2,0-4.3,0.2-6.4,0.6C3.8,1.5,1.4,4.3,0.3,8.2c-0.6,2.4-0.8,4.9-0.7,7.4  c0,96.9,0,193.9,0,290.8c0,1,0,2,0,3c0.4,8.6,4.8,13,13.3,13.5c2.3,0.1,4.6,0.1,7,0.1h204.8c26.8,0,53.7,0.1,80.5,0  c9.7,0,12.8-2.5,15.1-11.5V10.6C318.1,2,315.8,0.2,306.8,0.1z M307.5,161.4c0,47.5-0.1,95,0.1,142.4c0,4.1-1,5.1-5.1,5.1  c-94.8-0.1-189.6-0.1-284.5,0c-4.2,0-5.1-1-5.1-5.1c0.1-95.1,0.1-190.2,0-285.4c0-4.2,1-5.1,5.1-5.1c94.8,0.1,189.6,0.1,284.5,0  c4.1,0,5.1,1,5.1,5.1C307.4,66.2,307.5,113.8,307.5,161.4L307.5,161.4z"
    />

    <image
      :xlink:href="props.qrUri"
      x="15"
      y="0"
      width="90%"
      height="77%"
    ></image>
  </svg>
</template>

<style scoped>
.st0 {
  fill: #e5e7ef;
}
.st1 {
  fill: #ffffff;
}
</style>
