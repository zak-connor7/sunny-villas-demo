'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionDivider } from './About'

const retreatTypes = [
  {
    step: '01',
    heading: 'Corporate Retreats',
    body: 'Offsites, strategy sessions, and leadership retreats. Space to think away from the office, with a team that handles all the logistics — rooms, meals, transfers, and activities — so you can focus on the people and the work.',
    image: {
      src: 'https://www.sunnyvillashalkidiki.com/images/SunnyVillas-Chalkidiki-Services-horizontal.jpg',
      alt: 'Sunny Villas — services and resort grounds, Halkidiki',
    },
  },
  {
    step: '02',
    heading: 'Wellness Retreats',
    body: 'Yoga, meditation, spa treatments, and sea air. The complex has the space, the on-site spa, and the quiet to support a proper wellness programme. We can arrange instructors, therapists, and tailored meal options.',
    image: {
      src: '/images/homepage-spa.webp',
      alt: 'Sunny Villas Spa — on-site spa facility, Halkidiki',
    },
  },
  {
    step: '03',
    heading: 'Group Celebrations',
    body: 'Milestone birthdays, anniversaries, hen parties, and multi-family getaways. The full complex — the pools, the grounds, the terrace, the spa — is yours exclusively. We handle the catering, transfers, and any excursions you want to arrange.',
    image: {
      src: '/images/welcome-slider-03.webp',
      alt: 'Sunny Villas — resort grounds and pool for group celebrations',
    },
  },
]

function RetreatStep({ retreat, index }: { retreat: typeof retreatTypes[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const isReversed = index % 2 !== 0

  return (
    <div
      ref={ref}
      className="relative grid md:grid-cols-2 gap-10 lg:gap-20 items-center py-16 border-b border-border last:border-0"
    >
      {/* Watermark step number */}
      <div
        className="absolute inset-0 flex items-center justify-end pr-4 pointer-events-none select-none"
        aria-hidden
      >
        <span
          className="font-display text-[180px] leading-none text-navy"
          style={{ opacity: 0.04 }}
        >
          {retreat.step}
        </span>
      </div>

      {/* Single image */}
      <motion.div
        className={`relative overflow-hidden rounded z-10 ${isReversed ? 'md:order-2' : ''}`}
        style={{ aspectRatio: '16/10' }}
        initial={{ opacity: 0, x: isReversed ? 24 : -24 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.85 }}
      >
        <Image src={retreat.image.src} alt={retreat.image.alt} fill className="object-cover" />
      </motion.div>

      {/* Text */}
      <motion.div
        className={`relative z-10 ${isReversed ? 'md:order-1' : ''}`}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, delay: 0.15 }}
      >
        <span className="text-[11px] tracking-[0.2em] text-muted font-medium uppercase block mb-4">
          {retreat.step}
        </span>
        <h3 className="font-display text-[32px] md:text-[40px] text-navy leading-tight uppercase mb-6">
          {retreat.heading}
        </h3>
        <p className="text-[14px] leading-relaxed text-muted max-w-md mb-8">
          {retreat.body}
        </p>
        <a
          href="mailto:info@sunnyvillashalkidiki.com"
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.14em] font-semibold text-white uppercase px-7 py-3.5 bg-rust hover:bg-rust/90 transition-colors"
        >
          → Enquire About a Retreat
        </a>
      </motion.div>
    </div>
  )
}

export default function Retreats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="retreats" className="bg-white py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12" ref={ref}>
        <SectionDivider label="Private Events &amp; Retreats" />

        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-[36px] md:text-[50px] leading-[1.05] text-navy uppercase mb-3">
            The Whole Complex Is Yours.
          </h2>
          <p className="text-[14px] text-rust italic mb-6">
            Eleven villas on the same hillside — bookable as one.
          </p>
          <p className="text-[14px] leading-relaxed text-muted max-w-2xl">
            All eleven villas sit on the same land. Book them together and the entire hillside is yours: multiple heated pools, the spa, the gym, and the bay views — for your group alone.
          </p>
        </motion.div>

        <div className="mt-12">
          {retreatTypes.map((retreat, i) => (
            <RetreatStep key={retreat.step} retreat={retreat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
