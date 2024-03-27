import type { UserProfileEdit } from '~/components/MyPets/UserProfile/UserProfileForm.vue'
import { HttpRepository } from '../http-repository'

export class UserRepository extends HttpRepository {
  private RESOURCE = 'user'

  updateProfile(payload: UserProfileEdit): Promise<any> {
    return this.httpClient<any>(`${this.RESOURCE}/edit`, {
      method: 'PATCH',
      body: payload,
    })
  }
}
