'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Waves, Bell, Sparkles, Compass, Dumbbell,
  Wifi, Car, Gift, Shield, Tv,
} from 'lucide-react'
import { SectionDivider } from './About'

const amenities = [
  { icon: Waves,    label: 'Heated Private Pool',  desc: 'Your pool. Maintained and heated every day of your stay.' },
  { icon: Bell,     label: 'Daily Room Service',   desc: 'Housekeeping and service delivered each morning.' },
  { icon: Sparkles, label: 'On-Site Spa',          desc: 'Massage, therapy, manicure, pedicure, and personal training.' },
  { icon: Compass,  label: 'Activity Concierge',   desc: 'Diving, yacht charters, horse riding, and fishing — all arranged.' },
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
    <section id="amenities" className="bg-navy py-20 lg:py-28" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        <div className="flex items-center gap-3 mb-8">
          <div className="flex gap-1.5 shrink-0">
            {[0, 1, 2, 3, 4].map(i => (
              <div key={i} className="w-[7px] h-[7px] rotate-45 bg-rust" />
            ))}
          </div>
          <div className="flex-1 border-b border-dashed border-white/10" />
          <span className="text-[10px] tracking-[0.22em] uppercase font-medium text-white/40 shrink-0">
            What&apos;s Included
          </span>
        </div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-[36px] md:text-[50px] leading-[1.05] text-white uppercase mb-2">
            Everything You Need, At All Times.
          </h2>
          <p className="text-[14px] text-rust italic">Every villa. Every stay.</p>
        </motion.div>

        {/* Amenity cards — 2-col on mobile, 5-col on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/10">
          {amenities.map(({ icon: Icon, label, desc }, i) => (
            <motion.div
              key={label}
              className="bg-navy p-6 flex flex-col gap-4 hover:bg-white/5 transition-colors"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <Icon size={22} strokeWidth={1.25} color="#b8674b" />
              <div>
                <p className="text-[12px] font-semibold text-white tracking-[0.06em] mb-1">
                  {label}
                </p>
                <p className="text-[11px] text-white/40 leading-relaxed">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
