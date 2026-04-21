import JoinHero from "@/components/join-us/join-hero"
import JoinForm from "@/components/join-us/join-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Join Us | Saved By Divine Grace of God Ministry",
  description:
    "Become part of the SBDG family. We would love to have you worship with us and get connected to a community rooted in faith.",
  alternates: { canonical: "/join-us" },
  openGraph: {
    title: "Join Us | Saved By Divine Grace of God Ministry",
    description: "Become part of the SBDG family today.",
    url: "/join-us",
  },
}

export default function JoinUsPage() {
  return (
    <main>
      <JoinHero />
      <JoinForm />
    </main>
  )
}