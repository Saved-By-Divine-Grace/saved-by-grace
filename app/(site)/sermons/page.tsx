import { client } from "@/sanity/lib/client"
import {
  allSermonsQuery,
  featuredSermonQuery,
 
} from "@/sanity/schemaTypes/queries"
import { Sermon } from "@/types/sermon"
import SermonsHero from "@/components/sermons/sermons-hero"
import SermonGrid from "@/components/sermons/sermons-grid"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sermons | Saved By Divine Grace of God Ministry",
  description:
    "Watch and listen to sermons by Apostle Solomon Opeyemi and the ministers of Saved By Divine Grace of God Ministry. Faith-filled, word-driven messages to build and strengthen you.",
  alternates: {
    canonical: "/sermons",
  },
  openGraph: {
    title: "Sermons | Saved By Divine Grace of God Ministry",
    description:
      "Watch and listen to sermons by Apostle Solomon Opeyemi and the ministers of SBDG Ministry.",
    url: "/sermons",
  },
}

export const revalidate = 3600

export default async function SermonsPage() {
  const [sermons, featured ] = await Promise.all([
    client.fetch<Sermon[]>(allSermonsQuery),
    client.fetch<Sermon>(featuredSermonQuery),
    
  ])

  return (
    <main>
      <SermonsHero featured={featured} />
      <SermonGrid sermons={sermons}  />
    </main>
  )
}