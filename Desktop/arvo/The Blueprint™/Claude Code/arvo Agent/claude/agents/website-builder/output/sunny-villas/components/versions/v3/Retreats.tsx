'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const retreatTypes = [
  {
    heading: 'Corporate Retreats',
    body: 'Offsites, strategy sessions, and leadership retreats. Space to think away from the office, with a team that handles all the logistics. Rooms, meals, transfers, and activities. So you can focus on the people and the work.',
    image: {
      src: 'https://www.sunnyvillashalkidiki.com/images/SunnyVillas-Chalkidiki-Services-horizontal.jpg',
      alt: 'Sunny Villas services and resort grounds, Halkidiki',
    },
    bg: 'bg-white',
  },
  {
    heading: 'Wellness Retreats',
    body: 'Yoga, meditation, spa treatments, and sea air. The complex has the space, the on-site spa, and the quiet to support a proper wellness programme. We can arrange instructors, therapists, and tailored meal options.',
    image: {
      src: '/images/homepage-spa.webp',
      alt: 'Sunny Villas Spa, on-site spa facility, Halkidiki',
    },
    bg: 'bg-cream',
  },
  {
    heading: 'Group Celebrations',
    body: 'Milestone birthdays, anniversaries, hen parties, and multi-family getaways. The full complex. The pools, the grounds, the terrace, the spa. All yours exclusively. We handle the catering, transfers, and any excursions you want to arrange.',
    image: {
      src: '/images/welcome-slider-03.webp',
      alt: 'Sunny Villas resort grounds and pool for group celebrations',
    },
    bg: 'bg-white',
  },
]

function RetreatRow({ retreat, index }: { retreat: typeof retreatTypes[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const isReversed = index % 2 !== 0

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-0 items-stretch ${retreat.bg}`}
    >
      {/* Image */}
      <motion.div
        className={`relative overflow-hidden min-h-[340px] md:min-h-[480px] ${
          isReversed ? 'md:order-2' : ''
        }`}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.9 }}
      >
        <Image src={retreat.image.src} alt={retreat.image.alt} fill className="object-cover" />
      </motion.div>

      {/* Text */}
      <motion.div
        className={`flex flex-col justify-center px-8 py-16 md:px-14 lg:px-20 md:py-20 ${
          isReversed ? 'md:order-1' : ''
        }`}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, delay: 0.1 }}
      >
        <h3 className="font-display text-[30px] md:text-[40px] text-navy leading-tight uppercase mb-6">
          {retreat.heading}
        </h3>
        <p className="text-[14px] leading-[1.85] text-muted max-w-md mb-10">
          {retreat.body}
        </p>
        <a
          href="mailto:info@sunnyvillashalkidiki.com"
          className="inline-flex self-start items-center gap-2 text-[10px] tracking-[0.14em] font-semibold text-white uppercase px-7 py-3.5 bg-rust hover:bg-rust/90 transition-colors"
        >
          Enquire About a Retreat
        </a>
      </motion.div>
    </div>
  )
}

export default function Retreats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="retreats" ref={ref}>
      {/* Section header */}
      <div className="bg-white py-24 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[11px] tracking-[0.2em] uppercase text-rust font-medium mb-5">
              Private Events &amp; Retreats
            </p>
            <h2 className="font-display text-[36px] md:text-[56px] leading-[1.04] text-navy uppercase mb-4">
              The Whole Complex Is Yours.
            </h2>
            <p className="text-[14px] text-muted max-w-2xl">
              All eleven villas sit on the same land. Book them together and the entire hillside is yours: multiple heated pools, the spa, the gym, and the bay views. For your group alone.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Retreat rows */}
      {retreatTypes.map((retreat, i) => (
        <RetreatRow key={retreat.heading} retreat={retreat} index={i} />
      ))}
    </section>
  )
}
