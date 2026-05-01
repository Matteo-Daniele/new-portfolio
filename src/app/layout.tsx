import type { Metadata } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import type React from "react"
import { LanguageProvider } from "../components/language-provider"
import { ThemeProvider } from "../components/theme-provider"
import "./globals.css"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", weight: ["300", "400", "500", "700"] })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", weight: ["400", "500", "600", "700", "800"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://matteda.vercel.app/"),
  title: "Matteo Daniele portfolio",
  description: "Personal portfolio of Matte Daniele, Full-Stack Developer",
  openGraph: {
    title: "Matteo Daniele portfolio",
    description: "Personal portfolio of Matte Daniele, Full-Stack Developer",
    url: "https://matteda.vercel.app/",
    siteName: "Matteo Daniele",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "Matteo Daniele Portfolio"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matteo Daniele portfolio",
    description: "Personal portfolio of Matte Daniele, Full-Stack Developer",
    images: ["/Logo.png"],
    creator: "@matteodaniele"
  },
  icons: {
    icon: "/Logo.png",
    shortcut: "/Logo.png",
    apple: "/Logo.png",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${playfair.variable} font-sans`} suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
