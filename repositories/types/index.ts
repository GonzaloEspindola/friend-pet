import type { FetchOptions } from 'ofetch'
import { PetsRepository, UserRepository } from '../modules'

export interface FetchClient {
  <T>(url: MaybeRefOrGetter<T>, options: FetchOptions): PromiseLike<T>
}

export interface ApiModules {
  pets: PetsRepository
  user: UserRepository
}

export * from './pets'
