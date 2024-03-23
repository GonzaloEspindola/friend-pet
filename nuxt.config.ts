const NUXT_PUBLIC_API_BASE = process.env.NUXT_PUBLIC_API_BASE

export default defineNuxtConfig({
  devtools: { enabled: false },

  ssr: false,

  runtimeConfig: {
    public: {
      apiBase: NUXT_PUBLIC_API_BASE,
      auth: {
        scheme: 'refresh',
        options: {
          endpoints: {
            login: { url: '/auth/login', method: 'post' },
            refresh: { url: '/auth/refresh', method: 'post' },
            user: { url: '/auth/me', method: 'get' },
            logout: { url: '/auth/logout', method: 'post' },
          },
          redirect: {
            home: '/check',
            login: '/auth/login',
            logout: '/',
          },
          token: {
            property: 'accessToken',
          },
          refreshToken: {
            property: 'refreshToken',
          },
        },
      },
    },
  },

  extends: ['./auth'],

  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@pinia/nuxt'],

  pinia: {
    storesDirs: ['./auth/stores'],
  },

  css: ['~/styles/main.css'],

  plugins: ['~/plugins/vee-validate.ts'],
})
