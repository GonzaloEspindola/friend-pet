import type { Component } from 'vue'
import MyPetsQrFrame1 from '~/components/MyPets/Qr/Frame/1.vue'
import MyPetsQrFrame2 from '~/components/MyPets/Qr/Frame/2.vue'
import MyPetsQrFrame3 from '~/components/MyPets/Qr/Frame/3.vue'

interface QrFrameComponent {
  id: number
  component: Component
}

export const components: QrFrameComponent[] = [
  {
    id: 1,
    component: MyPetsQrFrame1,
  },
  {
    id: 2,
    component: MyPetsQrFrame2,
  },
  {
    id: 3,
    component: MyPetsQrFrame3,
  },
]

export const frames = [
  {
    id: 1,
    src: 'https://res.cloudinary.com/ds3dttn8v/image/upload/v1712417463/frames/1.svg',
  },
  {
    id: 2,
    src: 'https://res.cloudinary.com/ds3dttn8v/image/upload/v1712417463/frames/2.svg',
  },
  {
    id: 3,
    src: 'https://res.cloudinary.com/ds3dttn8v/image/upload/v1712417463/frames/3.svg',
  },
]
