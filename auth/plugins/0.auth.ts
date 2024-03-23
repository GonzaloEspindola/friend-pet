import { type AuthConfig } from '../types'
import { Token } from '../classes/token'
import { useAuthStore } from '../stores'

export default defineNuxtPlugin(({ $config, payload }) => {
  // Skip plugin when rendering error page
  if (payload.error) {
    return {}
  }
  const apiBase = $config.public.apiBase
  const authConfig = $config.public.auth as AuthConfig
  const schemeOptions = authConfig.options
  const endpoints = schemeOptions.endpoints
  const redirect = schemeOptions.redirect
  const tokenProperty = schemeOptions.token.property
  const refreshTokenProperty = schemeOptions.refreshToken.property
  const authStore = useAuthStore()
  const currentRoute = useRoute()
  const redirectTo = useState('authRedirect')

  const tokenPrefix = 'Bearer '

  let fetchRefreshTokenPromise: Promise<any> | null = null

  const signOut = async () => {
    if (!process.client) return
    const token = new Token(tokenProperty, tokenPrefix)
    const refreshToken = new Token(refreshTokenProperty)

    const { url, method } = endpoints.logout

    try {
      await $fetch(url, {
        baseURL: apiBase,
        headers: {
          Authorization: `${token.get()}`,
        },
        method,
      })
    } catch (error) {
      console.error(error)
    }

    authStore.setUser(null)
    token.remove()
    refreshToken.remove()
    const authMetaTag = currentRoute?.meta?.auth as any
    if ([true, undefined].includes(authMetaTag)) {
      redirectTo.value = currentRoute.path
    }
    navigateTo(redirect.logout)
  }

  const fetchRefreshToken = async () => {
    if (!process.client) return
    const tokenClass = new Token(tokenProperty, tokenPrefix)
    const refreshTokenClass = new Token(refreshTokenProperty)
    const { url, method } = endpoints.refresh

    try {
      const response: any = await $fetch(url, {
        baseURL: apiBase,
        headers: {
          Authorization: `${tokenPrefix}${refreshTokenClass.get()}`,
        },
        method,
      })
      tokenClass.set(response[tokenProperty])
      refreshTokenClass.set(response[refreshTokenProperty])
    } catch (error) {
      console.log(error)
      signOut()
    }
  }

  const apiClient = $fetch.create({
    baseURL: apiBase,
    retry: 0,
    mode: 'cors',
    async onRequest({ options }) {
      // if (!process.client) return
      const tokenClass = new Token(tokenProperty)
      const refreshTokenClass = new Token(refreshTokenProperty)

      let isTokenValid = tokenClass.status().valid()
      const isRefreshTokenValid = refreshTokenClass.status().valid()

      // token is invalid and refresh is valid -> request new token
      if (!isTokenValid && isRefreshTokenValid) {
        // await previous refresh token promise
        if (!fetchRefreshTokenPromise) {
          fetchRefreshTokenPromise = fetchRefreshToken()
          await fetchRefreshTokenPromise
          fetchRefreshTokenPromise = null
        } else {
          await fetchRefreshTokenPromise
        }
        isTokenValid = tokenClass.status().valid()
      }
      options.headers = new Headers(options.headers)
      options.headers.set('Accept', 'application/json')
      options.headers.set('Authorization', tokenClass.get()!)
    },
    onResponseError({ response }) {
      const refreshTokenUrl = endpoints?.refresh?.url

      if (
        response?.status === 401 ||
        (response?.status === 403 && response?.url?.includes(refreshTokenUrl))
      ) {
        signOut()
      }
    },
  })

  // Create a ref to know where to redirect the user when logged in

  const setToken = (newToken: string) => {
    const token = new Token(tokenProperty, tokenPrefix)
    token.set(newToken)
  }

  const setRefreshToken = (newRefreshToken: string) => {
    const refreshToken = new Token(refreshTokenProperty)
    refreshToken.set(newRefreshToken)
  }

  const loggedIn: any = computed(() => !!authStore.user)
  const user: any = computed(() => authStore.user)

  const fetchUser = async () => {
    if (!process.client) return
    const { url, method } = endpoints.user
    try {
      const userProfile = await apiClient<any>(url, { method })
      const token = new Token(tokenProperty, tokenPrefix)
      const userInfo = token.getUserInfo()
      if (userInfo) {
        authStore.setUser({ ...userInfo, ...userProfile })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const signIn = async (
    body: any,
    errorCallback?: Function,
    onSignIn?: Function,
  ) => {
    if (!process.client) return
    try {
      const { url, method } = endpoints.login
      const token = new Token(tokenProperty, tokenPrefix)
      const refreshToken = new Token(refreshTokenProperty)
      const response: any = await $fetch(url, {
        baseURL: apiBase,
        method,
        body,
      })

      if (response[tokenProperty] && response[refreshTokenProperty]) {
        token.set(response[tokenProperty])
        refreshToken.set(response[refreshTokenProperty])

        await fetchUser()

        if (onSignIn) {
          onSignIn(user.value)
        } else {
          await navigateTo(redirect.home)
        }
      }
    } catch (error) {
      errorCallback?.(error)
    }
  }

  addRouteMiddleware(
    'auth',
    async (to) => {
      if (!process.client) return
      const token = new Token(tokenProperty, tokenPrefix)
      if (token.getValue() && !loggedIn.value) {
        await fetchUser()
      }

      const authMetaTag = to?.meta?.auth
      if (authMetaTag === false || !to.matched.length) return

      if (authMetaTag === 'guest' && loggedIn.value) {
        return redirect.home
      } else if (
        !loggedIn.value &&
        to.path !== redirect.login &&
        authMetaTag !== 'guest'
      ) {
        redirectTo.value = to.path
        return redirect.login
      }
    },
    { global: true },
  )

  return {
    provide: {
      auth: {
        loggedIn,
        redirectTo,
        signIn,
        signOut,
        setToken,
        setRefreshToken,
        fetchUser,
        user,
      },
      apiClient,
    },
  }
})
