import type { qrOptions } from './qr'

export interface PetOwner {
  ownerName: string
  ownerType: string
  cellphone: number
  whatsApp: number
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
