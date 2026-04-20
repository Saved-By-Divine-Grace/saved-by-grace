export interface SBDGEvent {
  _id: string
  title: string
  slug: { current: string }
  type: string
  date: string
  endDate?: string
  location: string
  description?: string
  featured?: boolean
  image?: {
    asset: { _id: string; url: string }
    hotspot?: { x: number; y: number }
  }
}