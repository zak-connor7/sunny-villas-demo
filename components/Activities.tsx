'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const activities = [
  {
    name: 'Yacht Cruises',
    description:
      'Explore the hidden coves and crystal waters of Halkidiki from the deck of a private yacht. We arrange everything.',
    image: 'https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=700&q=80',
  },
  {
    name: 'Horseback Riding',
    description:
      'Ride through the pine forests and coastal trails of Halkidiki with experienced guides. Suitable for all levels.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
  },
  {
    name: 'ATV Adventures',
    description:
      'Off-road routes through the hills above Chaniotis with dramatic sea views at every turn.',
    image: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=700&q=80',
  },
  {
    name: 'Local Culture',
    description:
      'We&apos;ll connect you with the best of Greece — tavernas, monasteries, markets. The stuff that doesn&apos;t make TripAdvisor.',
    image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=700&q=80',
  },
]

export default function Activities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="activities" ref={ref} className="bg-[#1a1610] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="w-10 h-px bg-[#c49a6c]" />
            <span className="text-[#c49a6c] text-xs tracking-[0.3em] uppercase font-body">
              Beyond The Villa
            </span>
          </div>
          <h2 className="font-display text-[clamp(36px,5vw,64px)] text-white leading-[1.05]">
            Your Story,
            <br />
            <span className="italic text-[#c49a6c]">Your Adventure</span>
          </h2>
        </motion.div>

        {/* Activities: horizontal strip */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, i) => (
            <motion.div
              key={activity.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden mb-5">
                <img
                  src={activity.image}
                  alt={activity.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-display text-xl text-white leading-tight">{activity.name}</h3>
                </div>
              </div>
              <p className="text-white/40 text-sm font-body font-light leading-relaxed">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
