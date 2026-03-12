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
      className="relative min-h-[560px] flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(/images/header-home.jpg)',
        }}
      />
      <div className="absolute inset-0 bg-navy/55" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-start">
        <motion.div
          className="bg-cream w-full max-w-lg p-8 md:p-10"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
        >
          <p className="text-[10px] tracking-[0.22em] uppercase text-rust font-semibold mb-3">
            Reserve Your Villa
          </p>
          <h2 className="font-display text-[32px] md:text-[40px] text-navy uppercase leading-tight mb-4">
            Your Halkidiki Summer Starts Here.
          </h2>
          <p className="text-[13px] text-muted leading-relaxed mb-8">
            All four villa types are available to book directly. Check dates and availability through our booking system, or get in touch if you&apos;d like to talk through what works best for your group.
          </p>

          <div className="flex flex-col gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 text-[12px] tracking-[0.12em] font-semibold text-white uppercase transition-opacity hover:opacity-90 text-center"
              style={{ background: '#b8674b' }}
            >
              → Check Availability
            </a>
            <a
              href="mailto:info@sunnyvillashalkidiki.com"
              className="w-full py-3.5 text-[12px] tracking-[0.12em] font-semibold text-navy uppercase transition-colors hover:bg-navy hover:text-cream text-center border border-navy"
            >
              Send a Message
            </a>
          </div>

          <p className="text-[11px] text-muted text-center mt-5">
            Book direct · Complimentary breakfast basket daily · Flexible cancellation
          </p>
        </motion.div>
      </div>
    </section>
  )
}
