import type { Metadata } from "next"
import { Raleway } from "next/font/google"
import "./globals.css"

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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