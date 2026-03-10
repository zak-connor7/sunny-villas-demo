'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function LandingPage() {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!code.trim()) return

    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/auth/verify-reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reservationCode: code.trim().toUpperCase() }),
      })

      if (res.ok) {
        const data = await res.json()
        router.push(`/portal/${data.reservationCode}`)
      } else {
        setError('Reservation not found. Check your code and try again.')
        setLoading(false)
      }
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-bg flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-border">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-0.5">
            <span className="block w-1 h-3 bg-orange rounded-sm" />
            <span className="block w-3 h-3 border-2 border-orange border-t-0 rounded-b-sm" />
            <span className="block w-1 h-3 bg-orange rounded-sm" />
          </div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-zinc-400 uppercase">
            Villa GG
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Headline */}
          <div className="mb-10">
            <h1
              className="font-display text-white leading-none"
              style={{ fontSize: 'clamp(48px, 12vw, 80px)', letterSpacing: '-0.01em' }}
            >
              GUEST<br />PORTAL
            </h1>
            <p className="mt-4 text-muted text-sm leading-relaxed max-w-xs">
              Enter the reservation code from your booking confirmation to access your stay.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] uppercase tracking-widest text-muted font-semibold">
                Reservation Code
              </label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="GG-0000-SPL"
                autoComplete="off"
                autoFocus
                className="bg-surface border border-border text-white placeholder:text-subtle px-5 py-4 font-mono text-lg focus:outline-none focus:border-orange/60 transition-colors tracking-widest uppercase"
              />
              {error && (
                <p className="text-[12px] text-danger mt-1">{error}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || !code.trim()}
              className="w-full bg-orange text-black font-bold uppercase tracking-widest py-4 text-[13px] hover:bg-orange/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  Checking...
                </>
              ) : (
                'Access My Booking →'
              )}
            </button>
          </form>

          <p className="mt-8 text-[11px] text-subtle text-center">
            Your reservation code is in your booking confirmation email.<br />
            Need help? Contact Grgo at{' '}
            <a href="mailto:info@villagg.com" className="text-muted hover:text-white transition-colors">
              info@villagg.com
            </a>
          </p>
        </motion.div>
      </div>

      {/* Bottom */}
      <div className="px-6 py-5 border-t border-border">
        <p className="text-[10px] text-subtle text-center tracking-wide">
          VILLA GG · PODSTRANA, CROATIA · VILLAGG.COM
        </p>
      </div>
    </main>
  )
}
