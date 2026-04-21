import { MetadataRoute } from "next"

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://savedbydivinegrace.org"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/sermons`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/events`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // {
    //   url: `${BASE_URL}/prayer-wall`,
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
    {
      url: `${BASE_URL}/give`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // {
    //   url: `${BASE_URL}/blog`,
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.7,
    // },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/new-here`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // {
    //   url: `${BASE_URL}/live`,
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.7,
    // },
  ]
}