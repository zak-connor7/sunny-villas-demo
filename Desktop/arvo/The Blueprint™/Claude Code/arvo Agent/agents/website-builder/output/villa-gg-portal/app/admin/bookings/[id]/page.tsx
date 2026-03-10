'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { ALL_SAMPLE_BOOKINGS } from '@/lib/sample-data'
import { formatDate, formatEur } from '@/lib/utils'
import { Input, Textarea, Select } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'

export default function EditBookingPage() {
  const params = useParams()
  const router = useRouter()

  const booking = ALL_SAMPLE_BOOKINGS.find((b) => b.id === params.id)
  if (!booking) return notFound()

  const [form, setForm] = useState({
    guest_name: booking.guest_name,
    guest_email: booking.guest_email,
    guest_phone: booking.guest_phone || '',
    check_in: booking.check_in,
    check_out: booking.check_out,
    guest_count: booking.guest_count.toString(),
    total_eur: (booking.total_eur / 100).toString(),
    deposit_eur: (booking.deposit_eur / 100).toString(),
    deposit_status: booking.deposit_status,
    balance_status: booking.balance_status,
    notes: booking.notes || '',
  })

  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)

  function set(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    // In production: PATCH /api/bookings/[id]
    await new Promise((r) => setTimeout(r, 600))
    setSaved(true)
    setLoading(false)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <Link
          href="/admin/bookings"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-muted hover:text-white transition-colors font-semibold mb-4"
        >
          <ArrowLeft size={12} />
          All Bookings
        </Link>
        <div className="flex items-center gap-4">
          <h1 className="font-display text-white leading-none" style={{ fontSize: '32px' }}>
            {booking.guest_name}
          </h1>
          <span className="font-mono text-[13px] text-muted">#{booking.reservation_code}</span>
        </div>
        <p className="text-muted text-sm mt-1">
          {formatDate(booking.check_in)} → {formatDate(booking.check_out)} · {booking.guest_count} guests
        </p>
      </div>

      {/* Payment summary */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-surface border border-border p-4">
          <p className="text-[10px] uppercase tracking-widest text-muted font-semibold mb-1">Total</p>
          <p className="font-mono text-white font-semibold">{formatEur(booking.total_eur)}</p>
        </div>
        <div className="bg-surface border border-border p-4">
          <p className="text-[10px] uppercase tracking-widest text-muted font-semibold mb-1">Deposit</p>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant={booking.deposit_status === 'paid' ? 'success' : 'warning'} dot>
              {booking.deposit_status}
            </Badge>
            <span className="font-mono text-sm text-muted">{formatEur(booking.deposit_eur)}</span>
          </div>
        </div>
        <div className="bg-surface border border-border p-4">
          <p className="text-[10px] uppercase tracking-widest text-muted font-semibold mb-1">Balance</p>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant={booking.balance_status === 'paid' ? 'success' : 'warning'} dot>
              {booking.balance_status}
            </Badge>
            <span className="font-mono text-sm text-muted">{formatEur(booking.balance_eur)}</span>
          </div>
        </div>
      </div>

      {/* Edit form */}
      <form onSubmit={handleSave} className="bg-surface border border-border p-6 space-y-5">
        <p className="text-[11px] uppercase tracking-widest text-muted font-semibold border-b border-border pb-3">
          Edit Booking
        </p>

        <Input label="Guest Name(s)" value={form.guest_name} onChange={(e) => set('guest_name', e.target.value)} required />
        <div className="grid grid-cols-2 gap-4">
          <Input label="Email" type="email" value={form.guest_email} onChange={(e) => set('guest_email', e.target.value)} required />
          <Input label="Phone" value={form.guest_phone} onChange={(e) => set('guest_phone', e.target.value)} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Input label="Check-in" type="date" value={form.check_in} onChange={(e) => set('check_in', e.target.value)} required />
          <Input label="Check-out" type="date" value={form.check_out} onChange={(e) => set('check_out', e.target.value)} required />
        </div>
        <Input label="Guests" type="number" min="1" max="20" value={form.guest_count} onChange={(e) => set('guest_count', e.target.value)} required />
        <div className="grid grid-cols-2 gap-4">
          <Input label="Total (€)" type="number" step="0.01" value={form.total_eur} onChange={(e) => set('total_eur', e.target.value)} required />
          <Input label="Deposit (€)" type="number" step="0.01" value={form.deposit_eur} onChange={(e) => set('deposit_eur', e.target.value)} required />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Select label="Deposit Status" value={form.deposit_status} onChange={(e) => set('deposit_status', e.target.value)}>
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
            <option value="waived">Waived</option>
          </Select>
          <Select label="Balance Status" value={form.balance_status} onChange={(e) => set('balance_status', e.target.value)}>
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
            <option value="waived">Waived</option>
          </Select>
        </div>
        <Textarea label="Notes" value={form.notes} onChange={(e) => set('notes', e.target.value)} rows={3} />

        <div className="flex gap-3 pt-2">
          <Button type="submit" loading={loading}>
            {saved ? '✓ Saved' : 'Save Changes'}
          </Button>
          <Link href="/admin/bookings">
            <Button type="button" variant="ghost">Cancel</Button>
          </Link>
        </div>
      </form>

      {/* Guest portal link */}
      <div className="bg-surface border border-border p-4 flex items-center justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-widest text-muted font-semibold">Guest Portal Link</p>
          <p className="font-mono text-sm text-white mt-1">
            {typeof window !== 'undefined' ? window.location.origin : ''}/portal/{booking.reservation_code}
          </p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigator.clipboard.writeText(`${window.location.origin}/portal/${booking.reservation_code}`)}
        >
          Copy
        </Button>
      </div>
    </div>
  )
}
