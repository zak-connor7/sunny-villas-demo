import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sunny Villas — Private Luxury Villas in Halkidiki',
  description: 'Feeling special in a magic place. Private luxury villas with pools and panoramic sea views in Chaniotis, Halkidiki, Greece.',
  openGraph: {
    title: 'Sunny Villas — Private Luxury Villas in Halkidiki',
    description: 'Feeling special in a magic place. Private luxury villas with pools and panoramic sea views.',
    siteName: 'Sunny Villas',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
