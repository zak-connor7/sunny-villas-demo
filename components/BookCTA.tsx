'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function BookCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      ref={ref}
      className="relative py-40 px-6 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?w=2000&q=80"
          alt="Book your stay"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1a1610]/75" />
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
          <span className="italic text-[#c49a6c]">Special?</span>
        </h2>

        <p className="text-white/60 font-body font-light text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          Contact us directly and we&apos;ll find the perfect villa for your dates. Online check-in
          available, flexible cancellation policy.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:info@sunnyvillashalkidiki.com"
            className="px-10 py-4 bg-[#c49a6c] text-white text-sm tracking-[0.15em] uppercase font-body font-medium hover:bg-[#a07840] transition-colors duration-300"
          >
            Email Us
          </a>
          <a
            href="tel:+306945796792"
            className="px-10 py-4 border border-white/40 text-white text-sm tracking-[0.15em] uppercase font-body font-light hover:border-[#c49a6c] hover:text-[#c49a6c] transition-all duration-300"
          >
            +30 694 579 6792
          </a>
        </div>

        <p className="mt-8 text-white/30 text-xs font-body tracking-widest uppercase">
          Special rates available for long stays · 25% off selected dates
        </p>
      </motion.div>
    </section>
  )
}
