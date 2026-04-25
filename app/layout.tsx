import type { Metadata, Viewport } from "next"
import "./globals.css"
import localFont from "next/font/local"
import JsonLd from "@/components/shared/JsonLd"

const raleway = localFont({
  src: [
    { path: "./fonts/Raleway-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/Raleway-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Raleway-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Raleway-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Raleway-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Raleway-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-raleway",
  display: "swap",
})

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://saved-by-grace-blue.vercel.app"

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),


  title: {
     default: "Saved By Divine Grace of God Ministry | Ore, Nigeria",
    template: "%s | Saved By Divine Grace of God Ministry",
  },


  description:
    "Saved By Divine Grace of God Ministry — committed to winning souls through evangelism and building a strong prayer and word-driven church in Ore, Ondo State, Nigeria.",

 
  keywords: [
    "Saved By Divine Grace",
    "SBDG Ministry",
    "SBDG",
    "church in Ore",
    "church in Ondo State",
    "Nigerian church",
    "Apostle Solomon Opeyemi",
    "evangelism Nigeria",
    "word of faith church Nigeria",
    "prayer ministry Nigeria",
    "Christian church Ore",
  ],

 
  authors: [{ name: "Saved By Divine Grace of God Ministry" }],
  creator: "Aremu Olamilekan John",
  publisher: "Saved By Divine Grace of God Ministry",

  alternates: {
    canonical: "/",
  },


  openGraph: {
    type: "website",
    locale: "en_NG",
    url: BASE_URL,
    siteName: "Saved By Divine Grace of God Ministry",
    title: "Saved By Divine Grace of God Ministry | Ore, Nigeria",
    description:
      "Committed to winning souls through evangelism and building a strong prayer and word-driven church. Join us every Sunday — Ore, Ondo State, Nigeria.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saved By Divine Grace of God Ministry",
      },
    ],
  },


  twitter: {
    card: "summary_large_image",
    title: "Saved By Divine Grace of God Ministry | Ore, Nigeria",
    description:
      "Committed to winning souls through evangelism and building a strong prayer and word-driven church. Join us every Sunday.",
    images: ["/og-image.jpg"],
    site: "@sbdg_m",
    creator: "@sbdg_m",
  },


  icons: {
    icon: [
      { url: "/meta-logo.png" },
      { url: "/meta-logo.png", sizes: "16x16", type: "image/png" },
      { url: "/meta-logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/meta-logo-ii.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "meta-logo",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },


  manifest: "/site.webmanifest",

  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Verification ───────────────────────────────────────────────────
  // Add these once you've verified in Google Search Console and Bing
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-code",
  // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={raleway.variable}>
      <body className={raleway.className}>
        {children}
        <JsonLd />
      </body>
    </html>
  )
}