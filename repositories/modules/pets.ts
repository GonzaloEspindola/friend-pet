import { HttpRepository } from '../http-repository'
import type { Pet } from '../types'

export class PetsRepository extends HttpRepository {
  private RESOURCE = 'pet'

  async myPets(): Promise<Pet> {
    return await this.httpClient<Pet>(`${this.RESOURCE}/my-pets`, {
      method: 'GET',
    })
  }

  async petInformation(id: string): Promise<Pet> {
    return await this.httpClient<Pet>(`${this.RESOURCE}/${id}`, {
      method: 'GET',
    })
  }
}
