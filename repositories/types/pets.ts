import type { qrOptions } from './qr'

export interface PetOwner {
  ownerName: string
  ownerType: string
  cellphone: number
  whatsApp: number
  url?: string
}

export interface Pet {
  id: string
  name: string
  address: string
  specie: string
  age: string
  gender: string
  weight: string
  description: string
  owners: PetOwner[]
  qrCode: string
  gallery: string[]
}

export interface AddPetPayload {
  name: string
  age: string
  weight: string
  address: string
  gender: string
  specie: string
  description: string
  ownersList: PetOwner[]
}
