import { type $Fetch } from 'ofetch'
import { PetsRepository, UserRepository } from './modules'
import { type ApiModules } from './types'

export const ApiFactory = (httpClient: $Fetch): ApiModules =>
  ({
    pets: new PetsRepository(httpClient),
    user: new UserRepository(httpClient),
  }) as ApiModules
