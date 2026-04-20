import AboutHero from "@/components/about/about-hero";
import MissionVision from "@/components/about/vision";
import TwelvePillars from "@/components/about/pillars";
import LeadPastor from "@/components/landing-page/lead-pastor";
import Families from "@/components/landing-page/families";
import AboutBanner from "@/components/about/about-banner";
import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "About Us | Saved By Divine Grace of God Ministry",
  description:
    "Learn about Saved By Divine Grace of God Ministry — our mission, vision, twelve pillars, five families, and the leadership of Apostle Solomon Opeyemi.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Saved By Divine Grace of God Ministry",
    description:
      "Learn about our mission, vision, twelve pillars, and five families.",
    url: "/about",
  },
}


export default function AboutPage() {
  return (
    <>
    <AboutHero />
    <MissionVision />
    <TwelvePillars />
    <LeadPastor />
    <Families />
    <AboutBanner />
    </>
  )
}