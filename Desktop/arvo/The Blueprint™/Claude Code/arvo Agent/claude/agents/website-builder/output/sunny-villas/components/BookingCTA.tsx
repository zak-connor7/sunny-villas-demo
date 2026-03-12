'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const BOOKING_URL = 'https://sunnyvillasresortandspa.reserve-online.net/'

export default function BookingCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="booking"
      ref={ref}
      className="relative min-h-[520px] flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/header-home.jpg)',
        }}
      />
      <div className="absolute inset-0 bg-navy/60" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-16 py-20">
        <motion.div
          className="max-w-lg"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-rust font-medium mb-5">
            Reserve Your Villa
          </p>
          <h2 className="font-display text-[36px] md:text-[48px] text-white uppercase leading-tight mb-5">
            Your Halkidiki Summer Starts Here.
          </h2>
          <p className="text-[14px] text-white/60 leading-relaxed mb-10">
            All four villa types are available to book directly. Check dates and availability through our booking system, or get in touch if you&apos;d like to talk through what works best for your group.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-[10px] tracking-[0.14em] font-semibold text-white uppercase px-8 py-4 bg-rust hover:bg-rust/90 transition-colors"
            >
              Check Availability
            </a>
            <a
              href="mailto:info@sunnyvillashalkidiki.com"
              className="inline-flex text-[10px] tracking-[0.14em] font-semibold text-white uppercase px-8 py-4 border border-white/30 hover:bg-white/10 transition-colors"
            >
              Send a Message
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
