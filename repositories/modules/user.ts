import type { UserProfileEdit } from '~/components/MyPets/UserProfile/UserProfileForm.vue'
import { HttpRepository } from '../http-repository'
import type { UserRegister } from '../types/user'

export class UserRepository extends HttpRepository {
  private RESOURCE = 'user'

  register(payload: UserRegister): Promise<any> {
    return this.httpClient<any>(`${this.RESOURCE}/register`, {
      method: 'POST',
      body: payload,
    })
  }

  updateProfile(payload: UserProfileEdit): Promise<any> {
    return this.httpClient<any>(`${this.RESOURCE}/edit`, {
      method: 'PATCH',
      body: payload,
    })
  }

  updateProfilePhoto(payload: Ref<FormData>): Promise<any> {
    return this.httpClient<any>(`${this.RESOURCE}/upload`, {
      method: 'POST',
      body: payload.value,
    })
  }
}
