import { defineStore } from 'pinia'

interface AuthUser {
  id: string
  username?: string
  permissions: string[]
  roles: { id: string; name: string; description: string }[]
  account: { [key: string]: any }
  profile: { [key: string]: any }
}

export const useAuthStore = defineStore('auth', () => {
  const user = useState<AuthUser | undefined>()

  const setUser = (value: any) => {
    user.value = value
  }

  return {
    user,
    setUser,
  }
})
