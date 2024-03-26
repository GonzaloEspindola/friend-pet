export interface PetOwner {
  ownerName: string
  ownerType: string
  cellphone: string
  whatsapp: string
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
