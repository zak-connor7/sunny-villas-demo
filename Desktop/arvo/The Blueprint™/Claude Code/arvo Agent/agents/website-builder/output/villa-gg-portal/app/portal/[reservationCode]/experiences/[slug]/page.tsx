'use client'

import { notFound, useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { SAMPLE_EXPERIENCES, SAMPLE_BOOKING } from '@/lib/sample-data'
import { formatEur } from '@/lib/utils'
import { ArrowLeft, Clock, Users } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input, Textarea } from '@/components/ui/Input'

export default function ExperienceDetailPage() {
  const params = useParams()
  const reservationCode = params.reservationCode as string
  const slug = params.slug as string

  const experience = SAMPLE_EXPERIENCES.find((e) => e.slug === slug)
  if (!experience) return notFound()

  return <ExperienceDetail experience={experience} reservationCode={reservationCode} />
}

function ExperienceDetail({
  experience,
  reservationCode,
}: {
  experience: ReturnType<typeof SAMPLE_EXPERIENCES.find> & object
  reservationCode: string
}) {
  const [quantity, setQuantity] = useState(1)
  const [preferredDate, setPreferredDate] = useState('')
  const [notes, setNotes] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const exp = experience as NonNullable<typeof experience>

  async function handleBook() {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          experienceId: exp.id,
          quantity,
          preferredDate,
          notes,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        setError(data.error || 'Something went wrong.')
        setLoading(false)
        return
      }

      const { url } = await res.json()
      window.location.href = url
    } catch {
      setError('Unable to start checkout. Please try again.')
      setLoading(false)
    }
  }

  const totalPrice = exp.price_eur * quantity

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto space-y-8"
    >
      {/* Back */}
      <Link
        href={`/portal/${reservationCode}/experiences`}
        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-muted hover:text-white transition-colors font-semibold"
      >
        <ArrowLeft size={12} />
        All Experiences
      </Link>

      {/* Image */}
      {exp.image_url && (
        <div className="relative w-full aspect-video overflow-hidden bg-raised">
          <Image
            src={exp.image_url}
            alt={exp.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <span className="absolute top-4 left-4 px-3 py-1.5 bg-orange text-black text-[10px] font-bold tracking-widest uppercase">
            {exp.category}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Left: description */}
        <div className="md:col-span-3 space-y-4">
          <h1 className="font-display text-white leading-none" style={{ fontSize: 'clamp(28px, 6vw, 44px)' }}>
            {exp.name.toUpperCase()}
          </h1>

          <div className="flex items-center gap-4 text-muted text-sm">
            {exp.duration_text && (
              <span className="flex items-center gap-1.5">
                <Clock size={13} />
                {exp.duration_text}
              </span>
            )}
            {exp.price_note && (
              <span className="flex items-center gap-1.5">
                <Users size={13} />
                {exp.price_note}
              </span>
            )}
          </div>

          <p className="text-muted leading-relaxed text-sm">{exp.description}</p>
        </div>

        {/* Right: booking panel */}
        <div className="md:col-span-2">
          <div className="bg-surface border border-border p-5 space-y-5">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted font-semibold mb-1">Price</p>
              <p className="font-mono text-2xl text-white font-semibold">{formatEur(exp.price_eur)}</p>
              {exp.price_note && (
                <p className="text-[12px] text-muted">{exp.price_note}</p>
              )}
            </div>

            {/* Quantity — only if priced per person */}
            {exp.price_note?.includes('per person') && (
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-widest text-muted font-semibold">
                  Number of people
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-9 border border-border text-white hover:border-orange/40 transition-colors flex items-center justify-center"
                  >
                    −
                  </button>
                  <span className="font-mono text-lg w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 border border-border text-white hover:border-orange/40 transition-colors flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            <Input
              label="Preferred Date (optional)"
              type="date"
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              className="w-full"
            />

            <Textarea
              label="Notes (optional)"
              placeholder="Dietary requirements, preferences, or anything useful..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
            />

            {/* Total */}
            <div className="flex items-center justify-between pt-3 border-t border-border">
              <span className="text-[12px] text-muted uppercase tracking-widest font-semibold">Total</span>
              <span className="font-mono font-bold text-lg">{formatEur(totalPrice)}</span>
            </div>

            {error && <p className="text-[12px] text-danger">{error}</p>}

            <Button
              onClick={handleBook}
              loading={loading}
              className="w-full"
              size="lg"
            >
              Book & Pay {formatEur(totalPrice)}
            </Button>

            <p className="text-[11px] text-muted text-center leading-relaxed">
              Secure payment via Stripe. Grgo will confirm all details with you before your stay.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
