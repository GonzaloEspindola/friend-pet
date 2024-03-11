export default defineNuxtPlugin(({ $config, payload }) => {
  const apiBase = $config.public.apiBase

  const apiClient = $fetch.create({
    baseURL: apiBase,
    retry: 0,
    mode: 'cors',
    async onRequest({ options }) {
      options.headers = new Headers(options.headers)
      options.headers.set('Accept', 'application/json')
    },
  })

  return {
    provide: {
      apiClient,
    },
  }
})
