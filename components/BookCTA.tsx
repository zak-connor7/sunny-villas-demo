'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const BOOKING_URL = 'https://sunnyvillasresortandspa.reserve-online.net/'

export default function BookCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="relative py-40 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.web-dynamic.gr/sunnyvillas/images/menu-slider/Menu-slider-1.jpg"
          alt="Book your stay"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1a1610]/80" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-10 h-px bg-[#c49a6c]" />
          <span className="text-[#c49a6c] text-xs tracking-[0.3em] uppercase font-body">
            Reserve Your Villa
          </span>
          <div className="w-10 h-px bg-[#c49a6c]" />
        </div>

        <h2 className="font-display text-[clamp(40px,6vw,80px)] text-white leading-[1.05] mb-6">
          Ready to Feel
          <br />
          <span className="italic text-[#e8bc88]">Special?</span>
        </h2>

        <p className="text-white/75 font-body font-light text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          Contact us directly and we&apos;ll find the perfect villa for your dates. Online booking
          available, flexible cancellation policy, up to 25% off selected dates.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-[#c49a6c] text-white text-sm tracking-[0.15em] uppercase font-body font-medium hover:bg-[#a07840] transition-colors duration-300"
          >
            Book Online
          </a>
          <a
            href="/contact"
            className="px-10 py-4 border border-white/50 text-white text-sm tracking-[0.15em] uppercase font-body font-light hover:border-[#c49a6c] hover:text-[#c49a6c] transition-all duration-300"
          >
            Send an Enquiry
          </a>
        </div>

        <p className="mt-8 text-white/40 text-xs font-body tracking-widest uppercase">
          Special rates available for long stays · Online check-in available
        </p>
      </motion.div>
    </section>
  )
}
