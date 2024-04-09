export interface qrOptions {
  status: string
  color: string
  prefixUrl: string
}

export interface Qr {
  id?: string
  selectedFrame: number
  frameColor: string
  frameText: string
  frameTextColor: string
  backgroundColor: string
  dotsColor: string
  url?: string
}
