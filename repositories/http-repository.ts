import { type $Fetch } from 'ofetch'

export class HttpRepository {
  public httpClient: $Fetch

  constructor(httpClient: $Fetch) {
    this.httpClient = httpClient
  }
}
