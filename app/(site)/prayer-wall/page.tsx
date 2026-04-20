import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Prayer Wall | Saved By Divine Grace of God Ministry",
  description:
    "Submit your prayer requests and stand in agreement with the SBDG family. We believe in the power of corporate prayer — no one prays alone here.",
  alternates: {
    canonical: "/prayer-wall",
  },
  openGraph: {
    title: "Prayer Wall | Saved By Divine Grace of God Ministry",
    description:
      "Submit your prayer requests and stand in agreement with the SBDG family.",
    url: "/prayer-wall",
  },
}


export default function PrayerWall() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800">Prayer Wall</h1>
    </div>
  )
}