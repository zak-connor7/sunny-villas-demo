'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown, CalendarDays, Users } from 'lucide-react'

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

      {/* Lighter overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content overlay - centered */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1
            className="font-display text-white leading-[0.92] select-none"
            style={{
              fontSize: 'clamp(48px, 10vw, 120px)',
              letterSpacing: '0.04em',
            }}
          >
            SUNNY VILLAS
          </h1>
        </motion.div>

        <motion.p
          className="mt-5 text-[14px] md:text-[16px] text-white/80 max-w-[520px] leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          A hilltop resort above Toroneos Bay. Eleven private villas with heated pools, hotel service, and uninterrupted sea views across Halkidiki.
        </motion.p>
      </div>

      {/* Scroll arrow */}
      <motion.div
        className="absolute bottom-[100px] sm:bottom-[110px] left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors">
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown size={20} strokeWidth={1.5} className="animate-bounce" />
        </a>
      </motion.div>

      {/* Booking bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
      >
        <div className="bg-white/95 backdrop-blur-sm">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center">
              {/* Check-in */}
              <div className="flex-1 flex items-center gap-3 px-5 py-4 sm:py-5 border-b sm:border-b-0 sm:border-r border-gray-200">
                <CalendarDays size={16} strokeWidth={1.5} className="text-rust shrink-0" />
                <div>
                  <p className="text-[9px] tracking-[0.14em] uppercase text-muted font-medium">Check In</p>
                  <p className="text-[13px] text-navy font-medium mt-0.5">Select Date</p>
                </div>
              </div>

              {/* Check-out */}
              <div className="flex-1 flex items-center gap-3 px-5 py-4 sm:py-5 border-b sm:border-b-0 sm:border-r border-gray-200">
                <CalendarDays size={16} strokeWidth={1.5} className="text-rust shrink-0" />
                <div>
                  <p className="text-[9px] tracking-[0.14em] uppercase text-muted font-medium">Check Out</p>
                  <p className="text-[13px] text-navy font-medium mt-0.5">Select Date</p>
                </div>
              </div>

              {/* Guests */}
              <div className="flex-1 flex items-center gap-3 px-5 py-4 sm:py-5 border-b sm:border-b-0 sm:border-r border-gray-200">
                <Users size={16} strokeWidth={1.5} className="text-rust shrink-0" />
                <div>
                  <p className="text-[9px] tracking-[0.14em] uppercase text-muted font-medium">Guests</p>
                  <p className="text-[13px] text-navy font-medium mt-0.5">2 Adults</p>
                </div>
              </div>

              {/* Book button */}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-10 py-4 sm:py-5 bg-rust text-white text-[11px] tracking-[0.14em] font-semibold uppercase hover:bg-rust/90 transition-colors whitespace-nowrap"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
