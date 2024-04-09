import { HttpRepository } from '../http-repository'
import type { AddPetPayload, Pet } from '../types'
import type { Qr } from '../types/qr'

export class QrRepository extends HttpRepository {
  private RESOURCE = 'qr'

  async qrDetail(qrCode: string): Promise<Qr> {
    return await this.httpClient<Qr>(`${this.RESOURCE}/detail/${qrCode}`, {
      method: 'GET',
    })
  }

  async createQr(payload: Qr, petId: string): Promise<string> {
    return await this.httpClient<Qr>(`${this.RESOURCE}/generate/${petId}`, {
      method: 'POST',
      body: payload,
    })
  }

  async updateQr(payload: Qr, qrCode: string): Promise<Pet> {
    return await this.httpClient<Qr>(`${this.RESOURCE}/update/${qrCode}`, {
      method: 'PATCH',
      body: payload,
    })
  }
}
