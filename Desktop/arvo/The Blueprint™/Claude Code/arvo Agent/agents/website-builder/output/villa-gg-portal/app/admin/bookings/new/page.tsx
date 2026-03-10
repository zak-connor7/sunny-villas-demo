'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input, Textarea, Select } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { generateReservationCode } from '@/lib/utils'
import Link from 'next/link'
import { ArrowLeft, RefreshCw } from 'lucide-react'

export default function NewBookingPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    reservation_code: generateReservationCode(),
    guest_name: '',
    guest_email: '',
    guest_phone: '',
    check_in: '',
    check_out: '',
    guest_count: '1',
    total_eur: '',
    deposit_eur: '',
    deposit_status: 'pending',
    balance_status: 'pending',
    notes: '',
  })

  function set(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  const balanceEur = form.total_eur && form.deposit_eur
    ? (parseFloat(form.total_eur) - parseFloat(form.deposit_eur)).toFixed(2)
    : ''

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          guest_count: parseInt(form.guest_count),
          total_eur: Math.round(parseFloat(form.total_eur) * 100),
          deposit_eur: Math.round(parseFloat(form.deposit_eur) * 100),
          balance_eur: Math.round(parseFloat(balanceEur) * 100),
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        setError(data.error || 'Failed to create booking.')
        setLoading(false)
        return
      }

      router.push('/admin/bookings')
    } catch {
      setError('Something went wrong.')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <Link
          href="/admin/bookings"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-muted hover:text-white transition-colors font-semibold mb-4"
        >
          <ArrowLeft size={12} />
          Back
        </Link>
        <h1 className="font-display text-white leading-none" style={{ fontSize: '40px' }}>
          ADD BOOKING
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-surface border border-border p-6 space-y-5">
        {/* Reservation code */}
        <div className="flex gap-3 items-end">
          <div className="flex-1">
            <Input
              label="Reservation Code"
              value={form.reservation_code}
              onChange={(e) => set('reservation_code', e.target.value.toUpperCase())}
              placeholder="GG-0000-SPL"
              required
              className="font-mono tracking-widest"
            />
          </div>
          <button
            type="button"
            onClick={() => set('reservation_code', generateReservationCode())}
            className="px-3 py-3 border border-border text-muted hover:text-white hover:border-white/40 transition-colors"
            title="Generate new code"
          >
            <RefreshCw size={14} />
          </button>
        </div>

        {/* Guest details */}
        <Input
          label="Guest Name(s)"
          value={form.guest_name}
          onChange={(e) => set('guest_name', e.target.value)}
          placeholder="James & Sophie Thornton"
          required
        />
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Email"
            type="email"
            value={form.guest_email}
            onChange={(e) => set('guest_email', e.target.value)}
            required
          />
          <Input
            label="Phone"
            type="tel"
            value={form.guest_phone}
            onChange={(e) => set('guest_phone', e.target.value)}
          />
        </div>

        {/* Dates */}
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Check-in"
            type="date"
            value={form.check_in}
            onChange={(e) => set('check_in', e.target.value)}
            required
          />
          <Input
            label="Check-out"
            type="date"
            value={form.check_out}
            onChange={(e) => set('check_out', e.target.value)}
            required
          />
        </div>

        <Input
          label="Number of Guests"
          type="number"
          min="1"
          max="20"
          value={form.guest_count}
          onChange={(e) => set('guest_count', e.target.value)}
          required
        />

        {/* Payment */}
        <div className="grid grid-cols-3 gap-4">
          <Input
            label="Total (€)"
            type="number"
            step="0.01"
            value={form.total_eur}
            onChange={(e) => set('total_eur', e.target.value)}
            placeholder="10500.00"
            required
          />
          <Input
            label="Deposit (€)"
            type="number"
            step="0.01"
            value={form.deposit_eur}
            onChange={(e) => set('deposit_eur', e.target.value)}
            placeholder="3150.00"
            required
          />
          <Input
            label="Balance (€)"
            value={balanceEur}
            readOnly
            className="opacity-60"
            placeholder="Auto"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Select
            label="Deposit Status"
            value={form.deposit_status}
            onChange={(e) => set('deposit_status', e.target.value)}
          >
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
            <option value="waived">Waived</option>
          </Select>
          <Select
            label="Balance Status"
            value={form.balance_status}
            onChange={(e) => set('balance_status', e.target.value)}
          >
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
            <option value="waived">Waived</option>
          </Select>
        </div>

        <Textarea
          label="Notes"
          value={form.notes}
          onChange={(e) => set('notes', e.target.value)}
          placeholder="Group type, special requirements, anything worth knowing..."
          rows={3}
        />

        {error && <p className="text-[12px] text-danger">{error}</p>}

        <div className="flex gap-3 pt-2">
          <Button type="submit" loading={loading}>
            Create Booking
          </Button>
          <Link href="/admin/bookings">
            <Button type="button" variant="ghost">Cancel</Button>
          </Link>
        </div>
      </form>
    </div>
  )
}
