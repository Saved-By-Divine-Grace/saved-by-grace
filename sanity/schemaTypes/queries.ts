import { groq } from "next-sanity"

export const allSermonsQuery = groq`
  *[_type == "sermon"] | order(date desc) {
    _id,
    title,
    slug,
    preacher,
    date,
    platform,
    videoUrl,
    duration,
    description,
    featured,
    topic,
    thumbnail {
      asset -> { _id, url },
      hotspot
    },
    series -> {
      _id,
      title,
      slug
    }
  }
`

export const featuredSermonQuery = groq`
  *[_type == "sermon" && featured == true] | order(date desc) [0] {
    _id,
    title,
    slug,
    preacher,
    date,
    platform,
    videoUrl,
    duration,
    description,
    thumbnail {
      asset -> { _id, url },
      hotspot
    },
    series -> {
      title,
      slug
    }
  }
`

export const allSeriesQuery = groq`
  *[_type == "series"] | order(startDate desc) {
    _id,
    title,
    slug
  }
`