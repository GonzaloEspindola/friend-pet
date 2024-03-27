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
  address: string
  age: string
  description: string
  gender: string
  name: string
  specie: string
  weight: string
  ownersList: PetOwner[]
}
