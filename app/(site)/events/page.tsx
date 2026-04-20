import { client } from "@/sanity/lib/client"
import { upcomingEventsQuery, pastEventsQuery } from "@/sanity/queries"
import { SBDGEvent } from "@/types/event"
import EventsHero from "@/components/events/EventsHero"
import EventsCarousel from "@/components/events/EventsCarousel"
import PastEvents from "@/components/events/PastEvents"
import type { Metadata } from "next"

// export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Events | Saved By Divine Grace of God Ministry",
  description:
    "Stay updated on upcoming services, conferences, and special programmes at Saved By Divine Grace of God Ministry.",
  alternates: { canonical: "/events" },
  openGraph: {
    title: "Events | Saved By Divine Grace of God Ministry",
    description: "Upcoming services, conferences, and special programmes at SBDG Ministry.",
    url: "/events",
  },
}

export default async function EventsPage() {
  try {
    const [upcoming, past] = await Promise.all([
      client.fetch<SBDGEvent[]>(upcomingEventsQuery),
      client.fetch<SBDGEvent[]>(pastEventsQuery),
    ])

    return (
      <main>
        <EventsHero />
        <EventsCarousel events={upcoming} />
        <PastEvents events={past} />
      </main>
    )
  } catch {
    return (
      <main>
        <EventsHero />
        <EventsCarousel events={[]} />
        <PastEvents events={[]} />
      </main>
    )
  }
}