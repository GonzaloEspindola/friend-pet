import { defineStore } from 'pinia'

interface AuthUser {
  id: string
  account: { [key: string]: any }
  profile: { [key: string]: any }
}

export const useAuthStore = defineStore('auth', () => {
  const user = useState<AuthUser | undefined>()
  const profileIsCompleted = useState<boolean>()

  const setUser = (value: any) => {
    user.value = value
  }

  const setProfileIsCompleted = (value: any) => {
    profileIsCompleted.value = value
  }

  return {
    user,
    setUser,
    profileIsCompleted,
    setProfileIsCompleted,
  }
})
