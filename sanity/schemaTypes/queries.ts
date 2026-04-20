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
    
  }
`

export const upcomingEventsQuery = groq`
  *[_type == "event" && date >= now()] | order(date asc) {
    _id,
    title,
    slug,
    type,
    date,
    endDate,
    location,
    description,
    featured,
    image {
      asset -> { _id, url },
      hotspot
    }
  }
`

export const pastEventsQuery = groq`
  *[_type == "event" && date < now()] | order(date desc) [0..5] {
    _id,
    title,
    slug,
    type,
    date,
    location,
    image {
      asset -> { _id, url },
      hotspot
    }
  }
`