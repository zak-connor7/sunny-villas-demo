import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact — Sunny Villas Halkidiki',
  description: 'Get in touch with Sunny Villas Resort & Spa. Enquire about availability, book your stay, or ask us anything.',
}

export default function ContactPage() {
  return <ContactClient />
}
