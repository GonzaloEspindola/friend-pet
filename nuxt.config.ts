const NUXT_PUBLIC_API_BASE = process.env.NUXT_PUBLIC_API_BASE

export default defineNuxtConfig({
  devtools: { enabled: false },

  ssr: false,

  runtimeConfig: {
    public: {
      apiBase: NUXT_PUBLIC_API_BASE,
    },
  },

  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],

  css: ['~/styles/main.css'],

  plugins: ['~/plugins/vee-validate.ts'],
})
