import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Wirowa",
  description:
    "Wirowa – Die kommende Plattform für effizientes Aufsetzen, Verwalten und Skalieren von Shopify-Shops. Smarte Tools, klare Prozesse und echte Expertise.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Wirowa – Shopify Setup & Management Plattform",
    description:
      "Eine neue Plattform für Händler & Agenturen: Setup, Management & Skalierung von Shopify-Shops – smarter, schneller, klarer.",
    url: "https://wirowa.com",
    siteName: "Wirowa",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wirowa – Shopify Setup Plattform",
    description:
      "Hier entsteht eine moderne Plattform für das effiziente Aufsetzen und Verwalten von Shopify-Shops.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={`${inter.className} bg-white text-black antialiased`}>
        {children}
      </body>
    </html>
  )
}
