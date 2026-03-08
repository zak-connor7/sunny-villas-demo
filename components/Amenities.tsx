'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const amenities = [
  {
    icon: '◎',
    title: 'Private Pool',
    description: 'Every villa includes its own private pool with sunbeds and outdoor dining on the terrace.',
  },
  {
    icon: '◈',
    title: 'Spa & Wellness',
    description: 'The Spa Villa features a private loft spa with sauna for two, whirlpool, and hydro-jet rain shower.',
  },
  {
    icon: '◉',
    title: 'Panoramic Views',
    description: 'Hilltop position with uninterrupted views over the golden beaches of Halkidiki and the Aegean.',
  },
  {
    icon: '◇',
    title: 'Daily Service',
    description: 'Room service, housekeeping, and a complimentary breakfast basket delivered to your door each morning.',
  },
  {
    icon: '◈',
    title: 'Gym Access',
    description: 'Complimentary access to the on-site gym throughout your stay, at no extra cost.',
  },
  {
    icon: '◎',
    title: 'Flexible Booking',
    description: 'Cancel 30+ days before arrival and your prepayment remains valid for 18 months. No penalties.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

export default function Amenities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="amenities" ref={ref} className="bg-[#f0e8d8] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="w-10 h-px bg-[#c49a6c]" />
            <span className="text-[#c49a6c] text-xs tracking-[0.3em] uppercase font-body">
              What&apos;s Included
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 justify-between">
            <h2 className="font-display text-[clamp(36px,5vw,64px)] text-[#1a1610] leading-[1.05]">
              Everything You
              <br />
              <span className="italic text-[#c49a6c]">Could Want</span>
            </h2>
            <p className="lg:max-w-sm text-[#6b5e52] font-body font-light leading-relaxed text-base">
              We&apos;ve thought of everything so you don&apos;t have to. From the moment you arrive
              to the moment you leave, it&apos;s all taken care of.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#d9ccbb]"
        >
          {amenities.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="bg-[#f0e8d8] p-10 hover:bg-[#fdfaf6] transition-colors duration-300 group"
            >
              <div className="text-[#c49a6c] text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                {item.icon}
              </div>
              <h3 className="font-display text-xl text-[#1a1610] mb-3">{item.title}</h3>
              <p className="text-[#6b5e52] text-sm font-body font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
