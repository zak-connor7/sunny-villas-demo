'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { motion } from 'framer-motion'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError('Invalid email or password.')
      setLoading(false)
    } else {
      router.push('/admin')
      router.refresh()
    }
  }

  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-6">
      <motion.div
        className="w-full max-w-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5 mb-10">
          <div className="flex items-center gap-0.5">
            <span className="block w-1.5 h-4 bg-orange rounded-sm" />
            <span className="block w-4 h-4 border-2 border-orange border-t-0 rounded-b-sm" />
            <span className="block w-1.5 h-4 bg-orange rounded-sm" />
          </div>
          <div>
            <p className="text-[12px] font-bold tracking-[0.2em] text-white uppercase">Villa GG</p>
            <p className="text-[10px] text-muted tracking-widest uppercase">Admin</p>
          </div>
        </div>

        <h1 className="font-display text-white mb-8" style={{ fontSize: '40px' }}>
          SIGN IN
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase tracking-widest text-muted font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="bg-surface border border-border text-white px-4 py-3 text-sm focus:outline-none focus:border-orange/60 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase tracking-widest text-muted font-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="bg-surface border border-border text-white px-4 py-3 text-sm focus:outline-none focus:border-orange/60 transition-colors"
            />
          </div>

          {error && <p className="text-[12px] text-danger">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange text-black font-bold uppercase tracking-widest py-4 text-[13px] hover:bg-orange/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                Signing in...
              </>
            ) : (
              'Sign In →'
            )}
          </button>
        </form>
      </motion.div>
    </div>
  )
}
