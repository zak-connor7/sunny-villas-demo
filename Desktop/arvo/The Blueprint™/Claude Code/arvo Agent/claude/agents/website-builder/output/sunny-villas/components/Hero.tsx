'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const BOOKING_URL = 'https://sunnyvillasresortandspa.reserve-online.net/'

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-svh min-h-[600px] overflow-hidden">
      {/* Full-screen background image */}
      <Image
        src="/images/welcome-slider-01.webp"
        alt="Sunny Villas - private pool with sea view over Toroneos Bay, Halkidiki"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col justify-end h-full px-6 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1
              className="font-display text-white leading-[0.88] select-none"
              style={{
                fontSize: 'clamp(48px, 10vw, 140px)',
                letterSpacing: '-0.02em',
              }}
            >
              SUNNY<br />VILLAS
            </h1>
          </motion.div>

          <motion.p
            className="mt-5 text-[14px] md:text-[15px] text-white/75 max-w-[420px] leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A hilltop resort above Toroneos Bay. Eleven private villas with heated pools, hotel service, and uninterrupted sea views across Halkidiki.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 mt-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.12em] font-semibold text-white uppercase px-7 py-3.5 transition-opacity hover:opacity-90"
              style={{ background: '#b8674b' }}
            >
              Book Now
            </a>
            <a
              href="#villas"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.12em] font-semibold text-white uppercase px-7 py-3.5 border border-white/40 hover:bg-white/10 transition-colors"
            >
              Explore Villas
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <a href="#about" className="text-white/50 hover:text-white transition-colors">
          <ChevronDown size={24} strokeWidth={1.5} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
