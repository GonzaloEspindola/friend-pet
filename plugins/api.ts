import { ApiFactory } from '../repositories/factory'
import { type ApiModules } from '../repositories/types'
import { type $Fetch } from 'ofetch'

declare module '#app' {
  interface NuxtApp {
    $api: ApiModules
  }
}

export default defineNuxtPlugin(() => {
  /** an object containing all repositories we need to expose */

  const client = useNuxtApp().$apiClient as $Fetch

  const modules = ApiFactory(client)

  return {
    provide: {
      api: modules,
    },
  }
})
