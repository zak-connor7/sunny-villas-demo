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
    <section id="amenities" className="bg-navy py-24 lg:py-32" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

        <motion.div
          className="mb-16"
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
          <p className="text-[14px] text-white/40 italic">Every villa. Every stay.</p>
        </motion.div>

        {/* Two-column amenity list */}
        <div className="grid md:grid-cols-2 gap-x-16 lg:gap-x-24">
          {amenities.map(({ icon: Icon, label, desc }, i) => (
            <motion.div
              key={label}
              className="flex items-start gap-5 py-6 border-b border-white/[0.06]"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.04 }}
            >
              <div className="shrink-0 mt-0.5">
                <Icon size={20} strokeWidth={1.25} color="#b8674b" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-white tracking-[0.04em] mb-1">
                  {label}
                </p>
                <p className="text-[12px] text-white/35 leading-relaxed">
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
