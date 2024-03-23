import { jwtDecode, type JwtPayload } from 'jwt-decode'
import { TokenStatus } from './token-status'

export class Token {
  public key
  public expirationKey

  constructor(
    name: string,
    public tokenPrefix?: string,
  ) {
    this.key = `auth.${name}`
    this.expirationKey = `auth.${name}_expiration`
  }

  get(): string | undefined {
    if (process.client) {
      return localStorage.getItem(this.key) ?? undefined
    } else {
      return useState<string | undefined>(this.key).value ?? undefined
    }
  }

  getValue(): string | undefined {
    const tokenWithPrefix = this.get()
    let cleanToken = tokenWithPrefix
    if (this.tokenPrefix) {
      cleanToken = tokenWithPrefix?.replace(this.tokenPrefix, '')
    }
    return cleanToken ?? undefined
  }

  set(tokenValue?: string): string | undefined {
    const token = this.tokenPrefix
      ? this._addTokenPrefix(tokenValue)
      : tokenValue
    this._setToken(token)
    this._updateExpiration(token)

    return token
  }

  getExpiration(): number | undefined {
    if (process.client) {
      return Number(localStorage.getItem(this.expirationKey)) ?? undefined
    } else {
      return useState<number | undefined>(this.expirationKey).value ?? undefined
    }
  }

  getUserInfo(): object | undefined {
    const token = this.getValue()
    if (!token) return
    return jwtDecode<any>(token + '')?.user
  }

  status(): TokenStatus {
    return new TokenStatus(this.get(), this.getExpiration())
  }

  remove(): void {
    if (process.client) {
      localStorage.removeItem(this.key)
      localStorage.removeItem(this.expirationKey)
    }
    const key = useState(this.key)
    const expirationKey = useState(this.expirationKey)
    key.value = undefined
    expirationKey.value = undefined
  }

  private _setToken(token?: string): void {
    if (!token) return
    if (process.client) {
      localStorage.setItem(this.key, token)
    }
    const key = useState(this.key)
    key.value = token
  }

  private _addTokenPrefix(token?: string): string | undefined {
    if (token) {
      return `${this.tokenPrefix}${token}`
    }
    return token
  }

  private _updateExpiration(token?: string): number | false | void {
    let tokenExpiration
    /* const _tokenIssuedAtMillis = Date.now()
    const _tokenTTLMillis = Number(this.scheme.options.token.maxAge) * 1000 */
    const _tokenExpiresAtMillis = 300000

    try {
      tokenExpiration =
        jwtDecode<JwtPayload>(token + '').exp! * 1000 || _tokenExpiresAtMillis
    } catch (error: any) {
      // If the token is not jwt, we can't decode and refresh it, use _tokenExpiresAt value
      tokenExpiration = _tokenExpiresAtMillis

      if (!(error && error.name === 'InvalidTokenError')) {
        throw error
      }
    }

    return this._setExpiration(tokenExpiration)
  }

  private _setExpiration(expiration?: number): void {
    if (!expiration) return
    if (process.client) {
      localStorage.setItem(this.expirationKey, `${expiration}`)
    }
    const expirationKey = useState(this.expirationKey)
    expirationKey.value = expiration
  }
}
