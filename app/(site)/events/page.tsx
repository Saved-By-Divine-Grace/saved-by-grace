import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events | Saved By Divine Grace of God Ministry",
  description:
    "Stay updated on upcoming services, conferences, and special programmes at Saved By Divine Grace of God Ministry. Join us for our next event.",
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "Events | Saved By Divine Grace of God Ministry",
    description:
      "Upcoming services, conferences, and special programmes at SBDG Ministry. Join us.",
    url: "/events",
  },
}


export default function Events() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800">Events Page</h1>
    </div>
  )
}