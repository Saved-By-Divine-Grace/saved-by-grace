import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Give | Saved By Divine Grace of God Ministry",
  description:
    "Support the work of Saved By Divine Grace of God Ministry through your tithes, offerings, and donations. Every seed sown advances the kingdom.",
  alternates: {
    canonical: "/give",
  },
  openGraph: {
    title: "Give | Saved By Divine Grace of God Ministry",
    description:
      "Support the work of SBDG Ministry through your tithes, offerings, and donations.",
    url: "/give",
  },
}


export default function Give() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800">Give</h1>
    </div>
  )
}