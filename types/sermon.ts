export interface SermonSeries {
  _id: string
  title: string
  slug: { current: string }
}

export interface Sermon {
  _id: string
  title: string
  slug: { current: string }
  preacher: string
  date: string
  platform: "youtube" | "facebook"
  videoUrl: string
  duration?: string
  description?: string
  featured?: boolean
  topic?: string
  thumbnail?: {
    asset: { _id: string; url: string }
    hotspot?: { x: number; y: number }
  }
  series?: SermonSeries
}