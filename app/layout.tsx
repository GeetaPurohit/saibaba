import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shirdi Sai Baba - Official Website | श्री साईं बाबा",
  description:
    "Official website dedicated to Shirdi Sai Baba. Experience divine teachings, daily devotionals, community events, and spiritual guidance. सबका मालिक एक।",
  keywords: "Shirdi Sai Baba, Sai Baba, Shirdi, devotional, aarti, bhajans, spiritual, teachings, miracles",
  openGraph: {
    title: "Shirdi Sai Baba - Official Website",
    description: "Experience the divine teachings and eternal message of Shirdi Sai Baba",
    type: "website",
    locale: "en_US",
    alternateLocale: ["hi_IN", "mr_IN"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
