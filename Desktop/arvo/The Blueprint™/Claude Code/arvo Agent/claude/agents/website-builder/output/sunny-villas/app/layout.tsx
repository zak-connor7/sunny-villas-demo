import type { Metadata } from 'next'
import { Forum, Red_Hat_Display, Dancing_Script } from 'next/font/google'
import './globals.css'

const forum = Forum({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-forum',
  display: 'swap',
})

const redhat = Red_Hat_Display({
  subsets: ['latin'],
  variable: '--font-redhat',
  display: 'swap',
})

const dancing = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sunny Villas Resort & Spa — Private Villa Complex in Halkidiki, Greece',
  description: 'Eleven private heated-pool villas on the Kassandra Peninsula, Halkidiki. Hotel service, villa privacy. Book direct and save.',
  openGraph: {
    title: 'Sunny Villas Resort & Spa — Private Villa Complex in Halkidiki, Greece',
    description: 'Eleven private heated-pool villas on the Kassandra Peninsula, Halkidiki. Hotel service, villa privacy.',
    siteName: 'Sunny Villas Resort & Spa',
    images: [
      {
        url: 'https://www.sunnyvillashalkidiki.com/images/header-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Sunny Villas — private pool with sea view, Halkidiki Greece',
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${forum.variable} ${redhat.variable} ${dancing.variable}`}>
      <body className="bg-surface font-sans antialiased text-muted">{children}</body>
    </html>
  )
}
