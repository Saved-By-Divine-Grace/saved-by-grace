import GiveHero from "@/components/give/give-hero"
import WhyWeGive from "@/components/give/why-we-give"
import AccountDetails from "@/components/give/account-details"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Give | Saved By Divine Grace of God Ministry",
  description:
    "Support the work of Saved By Divine Grace of God Ministry through your tithes and offerings. Every seed sown advances the kingdom.",
  alternates: { canonical: "/give" },
  openGraph: {
    title: "Give | Saved By Divine Grace of God Ministry",
    description:
      "Support the work of SBDG Ministry through your tithes and offerings.",
    url: "/give",
  },
}

export default function GivePage() {
  return (
    <main>
      <GiveHero />
      <WhyWeGive />
      <AccountDetails />
      {/* <GivingBanner /> */}
    </main>
  )
}