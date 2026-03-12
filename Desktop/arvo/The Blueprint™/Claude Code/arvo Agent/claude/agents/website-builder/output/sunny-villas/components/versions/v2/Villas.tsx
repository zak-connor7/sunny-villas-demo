'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Maximize2, BedDouble } from 'lucide-react'

const BOOKING_URL = 'https://sunnyvillasresortandspa.reserve-online.net/'

const villas = [
  {
    name: 'Grande Villa',
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
    size: '85 sqm',
    capacity: 'Sleeps 5',
    bedrooms: '2 Bedrooms',
    feature: 'Private pool · Loft bedroom · Hydro-jet shower · Garden views',
    description:
      'Two bedrooms across two levels. A master on the ground floor and a loft above. The shower has hydro jets and a rain head. A private pool sits just off the veranda, with garden and sea views.',
    image: '/images/two-bedroom-villa.webp',
  },
  {
    name: 'Spa Villa',
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
    size: '160\u2013180 sqm',
    capacity: 'Sleeps 8+',
    bedrooms: '3 or 4 Bedrooms',
    feature: 'Private pool · Largest floor plan · Bathtubs & rain showers · 49\u2033 TV',
    description:
      'The largest villas in the complex. A 4-bedroom and two 3-bedroom configurations, each with a heated private pool, bathtubs, and a 49\u2033 TV in the living room. The right choice for a large family or a group that wants space.',
    image: '/images/exclusive-villa.webp',
  },
]

function VillaRow({ villa, index }: { villa: typeof villas[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const isReversed = index % 2 !== 0

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-0 items-stretch ${
        index > 0 ? '' : ''
      }`}
    >
      {/* Image - full height */}
      <motion.div
        className={`relative overflow-hidden min-h-[320px] md:min-h-[480px] ${
          isReversed ? 'md:order-2' : ''
        }`}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.9 }}
      >
        <Image
          src={villa.image}
          alt={villa.name}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Text */}
      <motion.div
        className={`flex flex-col justify-center px-8 py-12 md:px-14 lg:px-20 md:py-16 ${
          isReversed ? 'md:order-1 bg-white' : 'bg-cream'
        }`}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, delay: 0.1 }}
      >
        <p className="text-[11px] tracking-[0.2em] uppercase text-rust font-medium mb-4">
          {villa.bedrooms}
        </p>
        <h3 className="font-display text-[30px] md:text-[40px] text-navy leading-tight uppercase mb-3">
          {villa.name}
        </h3>
        <p className="text-[12px] text-rust/70 tracking-[0.06em] mb-6">
          {villa.feature}
        </p>
        <p className="text-[14px] leading-[1.85] text-muted max-w-md mb-8">
          {villa.description}
        </p>

        <div className="flex flex-wrap items-center gap-5 text-[12px] text-muted mb-8">
          <span className="flex items-center gap-1.5">
            <Users size={14} strokeWidth={1.5} />
            {villa.capacity}
          </span>
          <span className="flex items-center gap-1.5">
            <BedDouble size={14} strokeWidth={1.5} />
            {villa.bedrooms}
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize2 size={14} strokeWidth={1.5} />
            {villa.size}
          </span>
        </div>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex self-start text-[10px] tracking-[0.14em] font-semibold text-white uppercase px-7 py-3.5 bg-navy hover:bg-navy/90 transition-colors"
        >
          Check Availability
        </a>
      </motion.div>
    </div>
  )
}

export default function Villas() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="villas" ref={ref}>
      {/* Section header */}
      <div className="bg-cream py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[11px] tracking-[0.2em] uppercase text-rust font-medium mb-5">
              The Villas
            </p>
            <h2 className="font-display text-[36px] md:text-[56px] leading-[1.04] text-navy uppercase mb-4">
              Four Villas. One Standard.
            </h2>
            <p className="text-[14px] text-muted max-w-lg">
              All villas include daily room service, free Wi-Fi, gym access, and a welcome basket on arrival.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Villa rows - alternating image/text */}
      {villas.map((villa, i) => (
        <VillaRow key={villa.name} villa={villa} index={i} />
      ))}
    </section>
  )
}
