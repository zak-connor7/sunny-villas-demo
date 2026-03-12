'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Waves, Dumbbell, Sparkles, Scissors,
  Ship, Fish, Anchor, TreePine,
  PartyPopper, Music, UtensilsCrossed, Heart,
} from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

/* ─── Wellness & Spa ─── */

const spaServices = [
  { icon: Waves, label: 'Sea Water Pool', desc: 'Chemical-free, heated sea water pool for natural sea therapy.' },
  { icon: Sparkles, label: 'Sauna', desc: 'Complimentary 45-minute session included with every stay.' },
  { icon: Dumbbell, label: 'Gym & Personal Training', desc: 'Full gym access with personal trainer available on request.' },
  { icon: Sparkles, label: 'Beauty Therapy', desc: 'Massage, facial treatments, and relaxation therapies.' },
  { icon: Scissors, label: 'Manicure & Pedicure', desc: 'Professional nail care and pampering services.' },
]

function SpaSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-navy py-20 lg:py-28" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex gap-1.5 shrink-0">
            {[0, 1, 2, 3, 4].map(i => (
              <div key={i} className="w-[7px] h-[7px] rotate-45 bg-rust" />
            ))}
          </div>
          <div className="flex-1 border-b border-dashed border-white/10" />
          <span className="text-[10px] tracking-[0.22em] uppercase font-medium text-white/40 shrink-0">
            Wellness &amp; Spa
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85 }}
          >
            <h2 className="font-display text-[36px] md:text-[50px] leading-[1.05] text-white uppercase mb-3">
              Beauty &amp; Spa.
            </h2>
            <p className="text-[14px] text-rust italic mb-6">
              An oasis of harmony and rejuvenation.
            </p>
            <p className="text-[14px] leading-relaxed text-white/60 max-w-md mb-10">
              Escape from the stress of everyday routine. Our on-site spa offers a range of treatments and facilities designed to restore your body and mind — all without leaving the complex.
            </p>

            <div className="space-y-6">
              {spaServices.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.06 }}
                >
                  <Icon size={20} strokeWidth={1.25} color="#BA7D6E" className="mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[12px] font-semibold text-white tracking-[0.06em] mb-0.5">{label}</p>
                    <p className="text-[12px] text-white/40 leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.95, delay: 0.15 }}
          >
            <div className="relative overflow-hidden w-full" style={{ borderRadius: 4, aspectRatio: '4/5' }}>
              <Image
                src="/images/spa-homepage.webp"
                alt="Sunny Villas — on-site spa and wellness facility"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─── Activities ─── */

const activities = [
  {
    icon: Anchor,
    label: 'Diving & Snorkelling',
    desc: 'PADI diving lessons, day and night diving trips, shipwreck exploration at depths from 15 to 55 metres. Underwater caves and marine life.',
  },
  {
    icon: TreePine,
    label: 'Horse Riding',
    desc: 'Ride through magical forest trails on horseback, arranged through a local equestrian centre on the peninsula.',
  },
  {
    icon: Ship,
    label: 'Private Boat Tours',
    desc: 'Day-long cruises on a 35-foot private motor yacht with experienced crew. Crystal clear waters, hidden beaches, full-day excursions.',
  },
  {
    icon: Fish,
    label: 'Sport Fishing',
    desc: 'Sport, bottom, deep bottom, and offshore trolling with professional guides. All equipment and expert guidance provided.',
  },
]

function ActivitiesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-cream py-20 lg:py-28" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-[36px] md:text-[50px] leading-[1.05] text-navy uppercase mb-3">
            Adventures on Land &amp; Sea.
          </h2>
          <p className="text-[14px] text-rust italic mb-6">
            Arranged by your concierge. Just ask.
          </p>
          <p className="text-[14px] leading-relaxed text-muted max-w-xl">
            Halkidiki has some of the best diving, sailing, and riding in Greece. We work with trusted local partners to arrange every detail — just tell us what you&apos;d like to do and we&apos;ll handle the rest.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {activities.map(({ icon: Icon, label, desc }, i) => (
            <motion.div
              key={label}
              className="bg-cream p-8 flex items-start gap-5 rounded"
              style={{ borderRadius: 4 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.08 }}
            >
              <Icon size={24} strokeWidth={1.25} className="text-rust mt-0.5 shrink-0" />
              <div>
                <h3 className="font-display text-[20px] text-navy uppercase mb-2">{label}</h3>
                <p className="text-[13px] leading-relaxed text-muted">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Events ─── */

const eventTypes = [
  { icon: Heart, label: 'Weddings' },
  { icon: PartyPopper, label: 'Celebrations' },
  { icon: UtensilsCrossed, label: 'Catering' },
  { icon: Music, label: 'Entertainment' },
]

function EventsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-surface py-20 lg:py-28" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85 }}
          >
            <h2 className="font-display text-[36px] md:text-[50px] leading-[1.05] text-navy uppercase mb-3">
              Let Us Make Your Event.
            </h2>
            <p className="text-[14px] text-rust italic mb-6">
              Gardens, sea views, and a team that handles every detail.
            </p>
            <p className="text-[14px] leading-relaxed text-muted max-w-md mb-5">
              From weddings and christenings to bachelor parties and social gatherings — our gardens, refined villas, and magnificent sea views provide the perfect backdrop. We work with professional event planning partners to personalise every detail.
            </p>
            <p className="text-[14px] leading-relaxed text-muted max-w-md mb-10">
              Venue selection, floral arrangements, catering, music solutions, special decoration, parking facilities, and entertainment — all arranged for you.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {eventTypes.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  className="flex items-center gap-3 py-3 px-4 border border-border"
                  style={{ borderRadius: 4 }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
                >
                  <Icon size={18} strokeWidth={1.5} className="text-rust shrink-0" />
                  <span className="text-[12px] font-semibold tracking-[0.08em] text-navy uppercase">{label}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="mailto:info@sunnyvillashalkidiki.com"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.14em] font-semibold text-white uppercase px-7 py-3.5 bg-rust hover:bg-rust/90 transition-colors"
            >
              Enquire About an Event
            </a>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.95, delay: 0.15 }}
          >
            <div className="relative overflow-hidden w-full" style={{ borderRadius: 4, aspectRatio: '4/5' }}>
              <Image
                src="/images/welcome-slider-02.webp"
                alt="Sunny Villas — gardens and sea views for events and celebrations"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─── Page ─── */

export default function ExperiencesPage() {
  return (
    <>
      <Nav />
      <main className="pt-[72px]">
        {/* Hero banner */}
        <section className="bg-cream py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85 }}
            >
              <p className="text-[10px] tracking-[0.22em] uppercase text-rust font-semibold mb-3">
                Experiences
              </p>
              <h1 className="font-display text-[42px] md:text-[60px] leading-[1.05] text-navy uppercase mb-4">
                More Than a Stay.
              </h1>
              <p className="text-[14px] leading-relaxed text-muted max-w-xl">
                Spa treatments, diving, yacht trips, horse riding, and bespoke events — all arranged from the comfort of your villa. This is what sets Sunny Villas apart.
              </p>
            </motion.div>
          </div>
        </section>

        <SpaSection />
        <ActivitiesSection />
        <EventsSection />
      </main>
      <Footer />
    </>
  )
}
