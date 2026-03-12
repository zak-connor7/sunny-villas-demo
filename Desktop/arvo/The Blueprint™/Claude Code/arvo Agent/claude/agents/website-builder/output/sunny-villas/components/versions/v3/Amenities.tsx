'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Waves, Bell, Sparkles, Compass, Dumbbell,
  Wifi, Car, Gift, Shield, Tv,
} from 'lucide-react'

const amenities = [
  { icon: Waves,    label: 'Heated Private Pool',  desc: 'Your pool. Maintained and heated every day of your stay.' },
  { icon: Bell,     label: 'Daily Room Service',   desc: 'Housekeeping and service delivered each morning.' },
  { icon: Sparkles, label: 'On-Site Spa',          desc: 'Massage, therapy, manicure, pedicure, and personal training.' },
  { icon: Compass,  label: 'Activity Concierge',   desc: 'Diving, yacht charters, horse riding, and fishing. All arranged.' },
  { icon: Dumbbell, label: 'Free Gym',             desc: 'Full gym access included with every villa.' },
  { icon: Wifi,     label: 'Free Wi-Fi',           desc: 'Reliable connection throughout the complex.' },
  { icon: Car,      label: 'Free Parking',         desc: 'On-site parking for all guests.' },
  { icon: Gift,     label: 'Welcome Basket',       desc: 'Local wine and fresh fruit waiting in your villa on arrival.' },
  { icon: Shield,   label: 'Digital Safe',         desc: 'In-room digital safe in every villa.' },
  { icon: Tv,       label: 'Satellite TV',         desc: 'Satellite TV in the living room and every bedroom.' },
]

export default function Amenities() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="amenities"
      ref={ref}
      className="relative min-h-[700px] flex items-center overflow-hidden"
    >
      {/* Full-width background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/images/header-home.jpg)' }}
      />
      <div className="absolute inset-0 bg-navy/75" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-16 py-24 lg:py-32">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-rust font-medium mb-5">
            What&apos;s Included
          </p>
          <h2 className="font-display text-[36px] md:text-[56px] leading-[1.04] text-white uppercase mb-3">
            Everything You Need.
          </h2>
          <p className="text-[14px] text-white/50 italic">Every villa. Every stay.</p>
        </motion.div>

        {/* Amenity grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {amenities.map(({ icon: Icon, label, desc }, i) => (
            <motion.div
              key={label}
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.04 }}
            >
              <div className="flex justify-center md:justify-start mb-3">
                <Icon size={24} strokeWidth={1.25} color="#b8674b" />
              </div>
              <p className="text-[12px] font-semibold text-white tracking-[0.04em] mb-1">
                {label}
              </p>
              <p className="text-[11px] text-white/40 leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
