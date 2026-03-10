'use client'

import { useState } from 'react'
import { useParams, useSearchParams } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { CategoryFilterBar } from '@/components/portal/CategoryFilterBar'
import { ExperienceCard } from '@/components/portal/ExperienceCard'
import { SAMPLE_EXPERIENCES } from '@/lib/sample-data'
import type { ExperienceCategory } from '@/types'
import { CheckCircle } from 'lucide-react'

export default function ExperiencesPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const reservationCode = params.reservationCode as string
  const justBooked = searchParams.get('booked') === 'true'

  const [activeCategory, setActiveCategory] = useState<ExperienceCategory | 'ALL'>('ALL')

  const filtered = activeCategory === 'ALL'
    ? SAMPLE_EXPERIENCES.filter((e) => e.available)
    : SAMPLE_EXPERIENCES.filter((e) => e.available && e.category === activeCategory)

  const counts = {
    ALL: SAMPLE_EXPERIENCES.filter((e) => e.available).length,
    FOOD: SAMPLE_EXPERIENCES.filter((e) => e.category === 'FOOD' && e.available).length,
    SEA: SAMPLE_EXPERIENCES.filter((e) => e.category === 'SEA' && e.available).length,
    LAND: SAMPLE_EXPERIENCES.filter((e) => e.category === 'LAND' && e.available).length,
    AIR: SAMPLE_EXPERIENCES.filter((e) => e.category === 'AIR' && e.available).length,
    CULTURE: SAMPLE_EXPERIENCES.filter((e) => e.category === 'CULTURE' && e.available).length,
    PARTY: SAMPLE_EXPERIENCES.filter((e) => e.category === 'PARTY' && e.available).length,
    HEALTH: SAMPLE_EXPERIENCES.filter((e) => e.category === 'HEALTH' && e.available).length,
  }

  return (
    <div className="space-y-6">
      {/* Confirmation banner */}
      {justBooked && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 px-5 py-4 bg-success/10 border border-success/20 text-success"
        >
          <CheckCircle size={18} />
          <p className="text-sm font-semibold">
            Experience booked. Grgo will confirm the details with you before your stay.
          </p>
        </motion.div>
      )}

      {/* Header */}
      <div>
        <p className="text-[11px] uppercase tracking-widest text-muted font-semibold mb-2">
          Curated for your stay
        </p>
        <h1
          className="font-display text-white leading-none"
          style={{ fontSize: 'clamp(36px, 8vw, 64px)' }}
        >
          EXPERIENCES
        </h1>
        <p className="mt-3 text-muted text-sm max-w-lg leading-relaxed">
          Everything is bookable directly from here. Payment is taken upfront. Grgo coordinates everything on the ground — you just show up.
        </p>
      </div>

      {/* Filter */}
      <CategoryFilterBar
        active={activeCategory}
        onChange={setActiveCategory}
        counts={counts}
      />

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filtered.map((exp) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              reservationCode={reservationCode}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <div className="py-16 text-center text-muted">
          <p className="text-sm">No experiences in this category right now.</p>
        </div>
      )}
    </div>
  )
}
