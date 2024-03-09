import { type $Fetch } from 'ofetch'
import { PetsRepository } from './modules'
import { type ApiModules } from './types'

export const ApiFactory = (httpClient: $Fetch): ApiModules =>
  ({
    pets: new PetsRepository(httpClient),
  }) as ApiModules
