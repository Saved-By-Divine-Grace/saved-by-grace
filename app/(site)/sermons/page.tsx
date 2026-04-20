import { client } from "@/sanity/lib/client"
import {
  allSermonsQuery,
  featuredSermonQuery,
 
} from "@/sanity/schemaTypes/queries"
import { Sermon } from "@/types/sermon"
import SermonsHero from "@/components/sermons/sermons-hero"
import SermonGrid from "@/components/sermons/sermons-grid"

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