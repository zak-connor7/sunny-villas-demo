'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '9.1', label: 'Rated on Booking.com' },
  { value: '#2', label: 'On TripAdvisor, Hanioti' },
  { value: '52+', label: 'Guest Reviews' },
  { value: '35+', label: 'Years in Business' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="bg-white py-24 lg:py-32" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-rust font-medium mb-5">
            The Resort
          </p>
          <h2 className="font-display text-[36px] md:text-[56px] leading-[1.04] text-navy uppercase mb-5">
            Hotel Service.<br />Villa Privacy.
          </h2>
          <p className="text-[14px] leading-relaxed text-rust italic mb-10">
            Far from the crowds. Ten minutes from the beach.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-10 lg:gap-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.15 }}
        >
          <p className="text-[14px] leading-[1.85] text-muted">
            Sunny Villas sits on a hillside above Hanioti, on the Kassandra Peninsula. Eleven villas share the same land, each with a heated private pool, a terrace facing west over Toroneos Bay, and daily room service from a team that has been doing this since 1988.
          </p>
          <p className="text-[14px] leading-[1.85] text-muted">
            This is not a hotel where you share a pool with fifty other guests. It is not a bare-bones self-catering rental either. It is the middle ground most people don&apos;t know exists: a villa that is entirely yours, with the kind of service that makes a stay effortless.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16 pt-10 border-t border-border"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="font-display text-[32px] md:text-[40px] text-navy leading-none">
                {value}
              </p>
              <p className="text-[10px] tracking-[0.14em] uppercase text-muted mt-2">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
