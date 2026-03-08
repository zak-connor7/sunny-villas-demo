'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const BOOKING_URL = 'https://sunnyvillasresortandspa.reserve-online.net/'

const villas = [
  {
    name: 'Grande Villa',
    size: '110 sqm',
    capacity: 'Up to 6 guests',
    tag: 'Most Spacious',
    feature: 'Private heated pool · Whirlpool bathroom · Fireplace',
    description:
      'Three separate bedrooms across two levels, including a loft. A master bedroom with a private whirlpool bathroom, panoramic sea views, and a fireplace for winter evenings.',
    image: 'https://www.sunnyvillashalkidiki.com/images/grande-villa-header-01.jpg',
  },
  {
    name: 'Two Bedroom Villa',
    size: '85 sqm',
    capacity: 'Up to 4 guests',
    tag: 'Perfect for Couples',
    feature: 'Private pool · Sea & garden views · Terrace',
    description:
      'Two beautifully appointed bedrooms with Mediterranean finishes. A fully equipped kitchen, private pool terrace with sunbeds, and balcony views that stop you in your tracks.',
    image: 'https://www.sunnyvillashalkidiki.com/images/header-tow-bedroom-villa-01.jpg',
  },
  {
    name: 'Spa Villa',
    size: '85 sqm',
    capacity: 'Up to 4 guests',
    tag: 'Ultimate Wellness',
    feature: 'Private loft spa · Sauna · Hydro-jet shower',
    description:
      'Your own private spa in the loft — a whirlpool and sauna for two. A unique hydro-jet rain shower, sea views from every room, and a welcome bottle of wine waiting on arrival.',
    image: 'https://www.sunnyvillashalkidiki.com/images/header-spa-villa-new.jpg',
  },
  {
    name: 'Exclusive Villa',
    size: 'Bespoke',
    capacity: 'Premium experience',
    tag: 'Most Exclusive',
    feature: 'Fully bespoke · Premium finishes · Private',
    description:
      'Our most exclusive property. Every detail is arranged around you — premium finishes, total privacy, and a service level that goes beyond what you would expect.',
    image: 'https://www.sunnyvillashalkidiki.com/images/exclusive-villa-header.jpg',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
}

export default function Villas() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="villas" className="bg-[#1a1610] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-20"
        >
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-px bg-[#c49a6c]" />
              <span className="text-[#c49a6c] text-xs tracking-[0.3em] uppercase font-body">
                The Villas
              </span>
            </div>
            <h2 className="font-display text-[clamp(36px,5vw,64px)] text-white leading-[1.05]">
              Choose Your
              <br />
              <span className="text-[#e8bc88] italic">Private Retreat</span>
            </h2>
          </div>
          <p className="hidden lg:block text-white/50 font-body font-light text-base max-w-xs text-right leading-relaxed">
            Every villa comes with a private pool, daily service, and views over the Aegean.
          </p>
        </motion.div>

        {/* Villa grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {villas.map((villa) => (
            <motion.div
              key={villa.name}
              variants={fadeUp}
              className="group relative overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={villa.image}
                  alt={villa.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1610] via-[#1a1610]/20 to-transparent" />

                {/* Tag */}
                <div className="absolute top-5 left-5">
                  <span className="text-[10px] tracking-[0.25em] uppercase bg-[#c49a6c] text-white px-3 py-1.5 font-body">
                    {villa.tag}
                  </span>
                </div>

                {/* Arrow on hover */}
                <div className="absolute top-5 right-5 w-9 h-9 border border-white/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={16} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="bg-[#211e18] p-7 border-t border-[#c49a6c]/20">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-2xl text-white">{villa.name}</h3>
                  <div className="text-right">
                    <div className="text-white/50 text-xs font-body">{villa.size}</div>
                    <div className="text-[#c49a6c] text-xs font-body">{villa.capacity}</div>
                  </div>
                </div>
                <p className="text-[#c49a6c] text-xs tracking-widest uppercase font-body mb-4">
                  {villa.feature}
                </p>
                <p className="text-white/60 text-sm font-body font-light leading-relaxed mb-6">
                  {villa.description}
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs tracking-[0.2em] uppercase border border-[#c49a6c]/50 text-[#c49a6c] px-5 py-2.5 hover:bg-[#c49a6c] hover:text-white transition-all duration-300 font-body"
                >
                  Book This Villa
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
