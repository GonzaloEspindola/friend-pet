import { HttpRepository } from '../http-repository'
import type { AddPetPayload, Pet } from '../types'

export class PetsRepository extends HttpRepository {
  private RESOURCE = 'pet'

  async myPets(): Promise<Pet[]> {
    return await this.httpClient<Pet[]>(`${this.RESOURCE}/my-pets`, {
      method: 'GET',
    })
  }

  async petInformationByQrCode(id: string): Promise<Pet> {
    return await this.httpClient<Pet>(`${this.RESOURCE}/qr/${id}`, {
      method: 'GET',
    })
  }

  async addPet(payload: Ref<FormData>): Promise<Pet> {
    return await this.httpClient<Pet>(`${this.RESOURCE}/add-pet`, {
      method: 'POST',
      body: payload.value,
    })
  }

  async editPet(payload: Ref<FormData>, id: string): Promise<Pet> {
    return await this.httpClient<Pet>(`${this.RESOURCE}/edit-pet/${id}`, {
      method: 'PATCH',
      body: payload.value,
    })
  }

  async deletePet(id: string): Promise<Pet> {
    return await this.httpClient<Pet>(`${this.RESOURCE}/delete-pet/${id}`, {
      method: 'DELETE',
    })
  }
}
