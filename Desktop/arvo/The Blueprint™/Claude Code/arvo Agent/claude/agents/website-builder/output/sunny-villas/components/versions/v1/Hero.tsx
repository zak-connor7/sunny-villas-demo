'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const BOOKING_URL = 'https://sunnyvillasresortandspa.reserve-online.net/'

export default function Hero() {
  return (
    <section id="hero" className="pt-[72px] bg-cream overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Mobile: landscape image at top, full width */}
        <motion.div
          className="relative overflow-hidden w-full md:hidden mt-6"
          style={{ borderRadius: 4, aspectRatio: '16/10' }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05, delay: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src="/images/welcome-slider-01.webp"
            alt="Sunny Villas — private pool with sea view over Toroneos Bay, Halkidiki"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-start gap-8 pt-6 md:pt-8 pb-8 md:pb-0 md:min-h-[calc(100svh-72px)]">

          {/* Left: brand name + copy */}
          <div className="flex-1 min-w-0 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
            <div>
              <h1
                className="font-display leading-[0.88] text-navy select-none"
                style={{
                  fontSize: 'clamp(52px, 13vw, 196px)',
                  letterSpacing: '-0.02em',
                }}
              >
                SUNNY<br />VILLAS
              </h1>

              <motion.p
                className="mt-5 text-[14px] text-muted max-w-[300px] leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                A hilltop complex above Toroneos Bay. Eleven private villas. Hotel service. Your own heated pool, your own terrace, and nothing but sea in front of you.
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
                  → Book Now
                </a>
                <a
                  href="#villas"
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.12em] font-semibold text-navy uppercase px-7 py-3.5 border border-navy hover:bg-navy hover:text-cream transition-colors"
                >
                  Explore Villas
                </a>
              </motion.div>
            </div>
            </motion.div>

          </div>

          {/* Desktop: square image on the right */}
          <motion.div
            className="relative overflow-hidden hidden md:block md:w-[45%] shrink-0"
            style={{ borderRadius: 4, aspectRatio: '1/1' }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, delay: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Image
              src="/images/welcome-slider-01.webp"
              alt="Sunny Villas — private pool with sea view over Toroneos Bay, Halkidiki"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
