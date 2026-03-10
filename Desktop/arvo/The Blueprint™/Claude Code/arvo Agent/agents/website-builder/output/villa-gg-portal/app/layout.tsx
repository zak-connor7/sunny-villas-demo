import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Villa GG — Guest Portal',
  description: 'Manage your stay, browse experiences, and access your welcome pack.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-bg font-sans antialiased text-white">
        {children}
      </body>
    </html>
  )
}
