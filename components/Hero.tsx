'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown } from 'lucide-react'

const BOOKING_URL = 'https://sunnyvillasresortandspa.reserve-online.net/'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <img
          src="https://cdn.web-dynamic.gr/sunnyvillas/images/homepage-header-02.jpg"
          alt="Sunny Villas Halkidiki"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay — darkened for accessibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/75" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-8 h-px bg-[#c49a6c]" />
          <span className="text-white/90 text-xs tracking-[0.3em] uppercase font-body font-light">
            Chaniotis · Halkidiki · Greece
          </span>
          <div className="w-8 h-px bg-[#c49a6c]" />
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(52px,9vw,120px)] text-white leading-none drop-shadow-lg"
          >
            Feeling Special
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(52px,9vw,120px)] text-[#e8bc88] leading-none italic drop-shadow-lg"
          >
            In A Magic Place
          </motion.h1>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-white/85 text-sm md:text-base tracking-widest uppercase font-body font-light max-w-lg mx-auto mb-12"
        >
          Private villas with pools · Panoramic sea views · Bespoke service
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-[#c49a6c] text-white text-sm tracking-[0.15em] uppercase font-body font-medium hover:bg-[#a07840] transition-colors duration-300"
          >
            Book Now
          </a>
          <a
            href="#villas"
            className="px-10 py-4 border border-white/70 text-white text-sm tracking-[0.15em] uppercase font-body font-light hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            Explore Villas
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} className="text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
