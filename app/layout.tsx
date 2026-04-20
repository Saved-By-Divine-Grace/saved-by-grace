import type { Metadata } from "next"
import "./globals.css"
import localFont from "next/font/local"

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

export const metadata: Metadata = {
  title: "Saved By Divine Grace of God Ministry",
  description: "Committed to winning souls through evangelism and building a strong prayer and word-driven church.",
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
      </body>
    </html>
  )
}