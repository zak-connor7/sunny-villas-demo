'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="flex gap-1.5 shrink-0">
        {[0, 1, 2, 3, 4].map(i => (
          <div key={i} className="w-[7px] h-[7px] rotate-45 bg-rust" />
        ))}
      </div>
      <div className="flex-1 border-b border-dashed border-border" />
      <span className="text-[10px] tracking-[0.22em] uppercase font-medium text-muted shrink-0">
        {label}
      </span>
    </div>
  )
}

export { SectionDivider }

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
    <section id="about" className="bg-white py-20 lg:py-28" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionDivider label="The Resort" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85 }}
          >
            <h2 className="font-display text-[36px] md:text-[50px] leading-[1.06] text-navy uppercase mb-4">
              Hotel Service. Villa Privacy. One Hillside in Halkidiki.
            </h2>
            <p className="text-[14px] leading-relaxed text-rust italic mb-8">
              Far from the crowds. Ten minutes from the beach.
            </p>
            <p className="text-[14px] leading-relaxed text-muted max-w-md mb-5">
              Sunny Villas sits on a hillside above Hanioti, on the Kassandra Peninsula. Eleven villas share the same land — each with a heated private pool, a terrace facing west over Toroneos Bay, and daily room service from a team that has been doing this since 1988.
            </p>
            <p className="text-[14px] leading-relaxed text-muted max-w-md mb-10">
              This is not a hotel where you share a pool with fifty other guests. It is not a bare-bones self-catering rental either. It is the middle ground most people don&apos;t know exists: a villa that is entirely yours, with the kind of service that makes a stay effortless.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border mb-10">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="font-display text-[28px] md:text-[34px] text-navy leading-none">
                    {value}
                  </p>
                  <p className="text-[10px] tracking-[0.14em] uppercase text-muted mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#villas"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.14em] font-semibold text-white uppercase px-7 py-3.5 bg-navy hover:bg-navy/90 transition-colors"
            >
              → Explore Villas
            </a>
          </motion.div>

          {/* Right: full-height image */}
          <motion.div
            className="relative overflow-hidden w-full self-stretch min-h-[400px]"
            style={{ borderRadius: 4 }}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.95, delay: 0.15 }}
          >
            <Image
              src="/images/welcome-slider-02.webp"
              alt="Sunny Villas — hilltop villa complex overlooking Toroneos Bay, Halkidiki"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
