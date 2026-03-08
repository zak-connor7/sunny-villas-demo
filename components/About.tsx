'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '4', label: 'Private Villas' },
  { value: '110+', label: 'Square Metres' },
  { value: '360°', label: 'Sea Views' },
  { value: '5★', label: 'Service' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" ref={ref} className="bg-[#fdfaf6] py-32 px-6">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        className="max-w-7xl mx-auto"
      >
        {/* Section label */}
        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-16">
          <div className="w-10 h-px bg-[#c49a6c]" />
          <span className="text-[#c49a6c] text-xs tracking-[0.3em] uppercase font-body">
            Our Story
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: Heading */}
          <div>
            <motion.h2
              variants={fadeUp}
              className="font-display text-[clamp(40px,5vw,68px)] text-[#1a1610] leading-[1.05] mb-8"
            >
              Write Your Story
              <br />
              <span className="text-[#c49a6c] italic">In Greece</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="w-16 h-px bg-[#e5d9c8]" />
          </div>

          {/* Right: Body + stats */}
          <div>
            <motion.p
              variants={fadeUp}
              className="text-[#9a8878] text-lg leading-relaxed font-body font-light mb-6"
            >
              Greece — the country of myths and legends, the exemplar of hospitality. At Sunny Villas,
              we&apos;ve created something rare: the privacy of your own villa, combined with the quality
              of a five-star hotel.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-[#9a8878] text-lg leading-relaxed font-body font-light mb-12"
            >
              Perched on a hilltop in Chaniotis, each villa looks out over golden beaches and the
              shimmering Aegean. Whether you&apos;re here for the spa, the sea, or simply to do
              nothing at all — this is the place to feel it.
            </motion.p>

            {/* Stats */}
            <motion.div variants={stagger} className="grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={fadeUp} className="border-t border-[#e5d9c8] pt-6">
                  <div className="font-display text-4xl text-[#1a1610] mb-1">{stat.value}</div>
                  <div className="text-xs tracking-[0.2em] uppercase text-[#9a8878] font-body">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
