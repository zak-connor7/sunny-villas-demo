'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Maximize2, BedDouble } from 'lucide-react'
import { SectionDivider } from './About'

const BOOKING_URL = 'https://sunnyvillasresortandspa.reserve-online.net/'

const villas = [
  {
    name: 'Grande Villa',
    tag: 'Most Spacious',
    size: '110 sqm',
    capacity: 'Sleeps 7',
    bedrooms: '3 Bedrooms',
    feature: 'Private pool · Whirlpool en-suite · Sea views · Fireplace',
    description:
      'Three bedrooms, two bathrooms, a fireplace, and a private heated pool on the terrace. The master suite has a whirlpool bath. The living room opens to a veranda looking out over the garden and the bay.',
    image: '/images/villa-grande.webp',
  },
  {
    name: 'Two Bedroom Villa',
    tag: 'Perfect for Families',
    size: '85 sqm',
    capacity: 'Sleeps 5',
    bedrooms: '2 Bedrooms',
    feature: 'Private pool · Loft bedroom · Hydro-jet shower · Garden views',
    description:
      'Two bedrooms across two levels — a master on the ground floor and a loft above. The shower has hydro jets and a rain head. A private pool sits just off the veranda, with garden and sea views.',
    image: '/images/two-bedroom-villa.webp',
  },
  {
    name: 'Spa Villa',
    tag: 'Most Indulgent',
    size: '85 sqm',
    capacity: 'Sleeps 4',
    bedrooms: '1 Bedroom + Spa Loft',
    feature: 'Private pool · Private sauna · Whirlpool loft · Sea views',
    description:
      'One master bedroom, and above it: a private spa loft with a sauna and whirlpool for two. A heated pool sits on the terrace with views straight out over the bay.',
    image: '/images/spa-homepage.webp',
  },
  {
    name: 'Exclusive Villa',
    tag: 'For Larger Groups',
    size: '160–180 sqm',
    capacity: 'Sleeps 8+',
    bedrooms: '3 or 4 Bedrooms',
    feature: 'Private pool · Largest floor plan · Bathtubs & rain showers · 49″ TV',
    description:
      'The largest villas in the complex. A 4-bedroom and two 3-bedroom configurations, each with a heated private pool, bathtubs, and a 49″ TV in the living room. The right choice for a large family or a group that wants space.',
    image: '/images/exclusive-villa.webp',
  },
]

function VillaCard({ villa, index }: { villa: typeof villas[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/3', borderRadius: 4 }}>
        <Image
          src={villa.image}
          alt={villa.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Tag badge */}
        <div
          className="absolute top-4 left-4 text-white text-[10px] font-semibold tracking-[0.1em] uppercase px-3 py-1.5"
          style={{ background: '#b8674b' }}
        >
          {villa.tag}
        </div>
      </div>

      <div className="pt-4 pb-2">
        <h3 className="font-display text-[24px] text-navy leading-tight mb-1 uppercase">
          {villa.name}
        </h3>
        <p className="text-[11px] text-rust tracking-[0.1em] uppercase mb-3">
          {villa.feature}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-[12px] text-muted mb-4">
          <span className="flex items-center gap-1.5">
            <Users size={13} strokeWidth={1.5} />
            {villa.capacity}
          </span>
          <span className="flex items-center gap-1.5">
            <BedDouble size={13} strokeWidth={1.5} />
            {villa.bedrooms}
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize2 size={13} strokeWidth={1.5} />
            {villa.size}
          </span>
        </div>

        <p className="text-[13px] leading-relaxed text-muted mb-5">
          {villa.description}
        </p>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-[10px] tracking-[0.14em] font-semibold text-white uppercase px-6 py-3 bg-navy hover:bg-navy/90 transition-colors"
        >
          → Check Availability
        </a>
      </div>
    </motion.div>
  )
}

const marqueeItems = [
  'HEATED PRIVATE POOL', 'SEA VIEWS', 'DAILY ROOM SERVICE', 'ON-SITE SPA', 'ACTIVITY CONCIERGE', 'FREE GYM',
  'HEATED PRIVATE POOL', 'SEA VIEWS', 'DAILY ROOM SERVICE', 'ON-SITE SPA', 'ACTIVITY CONCIERGE', 'FREE GYM',
]

export default function Villas() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="villas" className="bg-cream pt-20 lg:pt-28 pb-0">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12" ref={ref}>
        <SectionDivider label="The Villas" />

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <motion.h2
            className="font-display text-[36px] md:text-[50px] leading-[1.05] text-navy uppercase max-w-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Four Villas. One Standard.
          </motion.h2>
          <motion.p
            className="text-[13px] text-muted max-w-xs"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            All villas include daily room service, free Wi-Fi, gym access, and a welcome basket on arrival.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {villas.map((villa, i) => (
            <VillaCard key={villa.name} villa={villa} index={i} />
          ))}
        </div>

      </div>

      {/* Marquee ticker */}
      <div className="mt-16 py-8 overflow-hidden border-y border-border bg-white">
        <div
          className="flex whitespace-nowrap animate-marquee"
        >
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              className="font-display text-[40px] md:text-[60px] text-navy leading-none px-6 shrink-0 flex items-center gap-6"
            >
              {item}
              <span className="text-rust text-[36px] md:text-[50px] mx-2">☀</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
