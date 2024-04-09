<script setup lang="ts">
interface Props {
  frameColor: string
  text: string
  textColor: string
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
    <path
      d="M320.4,15c0-10.9-3.6-14.9-13.9-14.9c-97.7,0-195.5,0-293.3,0C4.2,0.1,1.9,2-0.4,10.5v396.3c0.6,5.6,2.8,9.9,9,11H311  c3.6-1,7-2.4,8.3-6.3c0.9-2.9,1.2-5.8,1.1-8.8c0-16.4,0-32.8,0-49.3C320.4,240.6,320.4,127.8,320.4,15z M307.1,303.8  c0,4.1-0.9,5.1-5.1,5.1c-94.8-0.1-189.7-0.1-284.5,0c-4.1,0-5.1-0.9-5.1-5.1c0.2-47.5,0.1-94.9,0.1-142.4c0-47.6,0.1-95.3-0.1-142.9  c0-4.1,0.9-5.1,5.1-5.1c94.8,0.1,189.7,0.1,284.5,0c4.1,0,5.1,0.9,5.1,5.1C307,113.6,307,208.6,307.1,303.8z"
    />
    <path class="st0" d="M113,361v4h-0.9l-0.8-3.1L113,361z" />
    <path
      class="st1"
      d="M136,367c-1,0-2.2-0.2-2.1-1.4c0.1-1.8,1.7-1.6,3-1.6c0.9,0,2.2-0.4,2.1,1.1S137.4,367.1,136,367z"
    />
    <path
      class="st2"
      d="M207.2,360.9c2-2.7,3.9-2.1,6.3-0.2C211.4,361.3,209.2,361.4,207.2,360.9z"
    />
    <foreignObject x="0" y="0" width="100%" height="75%">
      <slot></slot>
    </foreignObject>
    <g>
      <text
        class="text-3xl font-bold"
        x="160"
        y="375"
        :fill="props.textColor"
        text-anchor="middle"
      >
        {{ props.text }}
      </text>
    </g>
  </svg>
</template>

<style type="text/css">
.st0 {
  fill: #383838;
}
.st1 {
  fill: #0e0e0e;
}
.st2 {
  fill: #171717;
}
.st3 {
  fill: #e5e7ef;
}
.st4 {
  fill: #ffffff;
}
</style>
