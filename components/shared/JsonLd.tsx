export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: "Saved By Divine Grace of God Ministry",
    alternateName: "SBDG Ministry",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://savedbydivinegrace.org",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
    image: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`,
    description:
      "Committed to winning souls through evangelism and building a strong prayer and word-driven church.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Behind Kamadec Filling Station, Omi-Ayo",
      addressLocality: "Ore",
      addressRegion: "Ondo State",
      addressCountry: "NG",
    },
    telephone: "+2348068900228",
    email: "sbdgm01@gmail.com",
    sameAs: [
      "https://www.facebook.com/share/1HHexaa6Cq/",
      "https://www.youtube.com/@opeyemisolomon",
      "https://instagram.com/sbdg_m",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "08:00",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Wednesday",
        opens: "18:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "06:00",
        closes: "07:00",
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}