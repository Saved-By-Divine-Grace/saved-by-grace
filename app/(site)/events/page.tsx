// import { client } from "@/sanity/lib/client"
// import { upcomingEventsQuery, pastEventsQuery } from "@/sanity/schemaTypes/queries"
// import { SBDGEvent } from "@/types/events"
// import EventsHero from "@/components/events/events-hero"
// import EventsCarousel from "@/components/events/events-carousel"
// import PastEvents from "@/components/events/past-events"
// import type { Metadata } from "next"

// export const dynamic = "force-dynamic"

// export const metadata: Metadata = {
//   title: "Events | Saved By Divine Grace of God Ministry",
//   description:
//     "Stay updated on upcoming services, conferences, and special programmes at Saved By Divine Grace of God Ministry.",
//   alternates: { canonical: "/events" },
//   openGraph: {
//     title: "Events | Saved By Divine Grace of God Ministry",
//     description: "Upcoming services, conferences, and special programmes at SBDG Ministry.",
//     url: "/events",
//   },
// }

// export default async function EventsPage() {
//   try {
//     const [upcoming, past] = await Promise.all([
//       client.fetch<SBDGEvent[]>(upcomingEventsQuery),
//       client.fetch<SBDGEvent[]>(pastEventsQuery),
//     ])

//     return (
//       <main>
//         <EventsHero />
//         <EventsCarousel events={upcoming} />
//         <PastEvents events={past} />
//       </main>
//     )
//   } catch {
//     return (
//       <main>
//         <EventsHero />
//         <EventsCarousel events={[]} />
//         <PastEvents events={[]} />
//       </main>
//     )
//   }
// }


import { client } from "@/sanity/lib/client"
import { upcomingEventsQuery, pastEventsQuery } from "@/sanity/schemaTypes/queries"
import { SBDGEvent } from "@/types/events"
import EventsHero from "@/components/events/events-hero"
import EventsCarousel from "@/components/events/events-carousel"
import PastEvents from "@/components/events/past-events"
import type { Metadata } from "next"

export const dynamic = "force-dynamic"

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
  let upcoming: SBDGEvent[] = []
  let past: SBDGEvent[] = []

  try {
    const data = await Promise.all([
      client.fetch<SBDGEvent[]>(upcomingEventsQuery),
      client.fetch<SBDGEvent[]>(pastEventsQuery),
    ])

    upcoming = data[0]
    past = data[1]
  } catch (error) {
    console.error("Failed to fetch events:", error)
  }

  return (
    <main>
      <EventsHero />
      <EventsCarousel events={upcoming} />
      <PastEvents events={past} />
    </main>
  )
}