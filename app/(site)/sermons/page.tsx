import { client } from "@/sanity/lib/client"
import {
  allSermonsQuery,
  featuredSermonQuery,
  allSeriesQuery,
} from "@/sanity/schemaTypes/queries"
import { Sermon, SermonSeries } from "@/types/sermon"
import SermonsHero from "@/components/sermons/sermons-hero"
import SermonGrid from "@/components/sermons/sermons-grid"

export const revalidate = 3600

export default async function SermonsPage() {
  const [sermons, featured, series] = await Promise.all([
    client.fetch<Sermon[]>(allSermonsQuery),
    client.fetch<Sermon>(featuredSermonQuery),
    client.fetch<SermonSeries[]>(allSeriesQuery),
  ])

  return (
    <main>
      <SermonsHero featured={featured} />
      <SermonGrid sermons={sermons} series={series} />
    </main>
  )
}