import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FlowFest 1.0 - National Water Engineering Symposium",
  description:
    "Join Bangladesh's premier water engineering competition and symposium. Six unique competitions, expert seminars, and networking opportunities.",
  keywords: "water engineering, competition, symposium, CUET, Bangladesh, FlowFest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
