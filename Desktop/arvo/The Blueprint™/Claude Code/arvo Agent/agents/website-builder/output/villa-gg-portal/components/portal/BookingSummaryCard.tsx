import { Badge } from '@/components/ui/Badge'
import { formatDate, formatEur, nightsBetween } from '@/lib/utils'
import type { Booking, PaymentStatus } from '@/types'
import { Users, Calendar, Moon } from 'lucide-react'

function paymentBadge(status: PaymentStatus) {
  if (status === 'paid')   return <Badge variant="success" dot>Paid</Badge>
  if (status === 'waived') return <Badge variant="muted" dot>Waived</Badge>
  return <Badge variant="warning" dot>Pending</Badge>
}

export function BookingSummaryCard({ booking }: { booking: Booking }) {
  const nights = nightsBetween(booking.check_in, booking.check_out)

  return (
    <div className="border border-border bg-surface rounded-none overflow-hidden">
      {/* Status bar */}
      <div className="flex items-center gap-3 px-6 py-4 border-b border-border">
        <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
        <span className="text-[11px] font-semibold uppercase tracking-widest text-success">
          Booking Confirmed
        </span>
      </div>

      {/* Dates — hero section */}
      <div className="px-6 py-8 border-b border-border">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-muted font-semibold mb-2">Check-in</p>
            <p className="font-display text-2xl sm:text-3xl text-white leading-none">
              {formatDate(booking.check_in)}
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-muted font-semibold mb-2">Check-out</p>
            <p className="font-display text-2xl sm:text-3xl text-white leading-none">
              {formatDate(booking.check_out)}
            </p>
          </div>
          <div className="col-span-2 sm:col-span-1 flex sm:flex-col gap-6 sm:gap-0 pt-2 sm:pt-0">
            <div className="flex items-center gap-2 text-muted">
              <Moon size={14} />
              <span className="text-sm">{nights} nights</span>
            </div>
            <div className="flex items-center gap-2 text-muted">
              <Users size={14} />
              <span className="text-sm">{booking.guest_count} guests</span>
            </div>
            <div className="flex items-center gap-2 text-muted">
              <Calendar size={14} />
              <span className="text-sm font-mono">{booking.reservation_code}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Payment breakdown */}
      <div className="px-6 py-6">
        <p className="text-[10px] uppercase tracking-widest text-muted font-semibold mb-4">Payment</p>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted">Total</span>
            <span className="font-mono text-white">{formatEur(booking.total_eur)}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted">Deposit</span>
              {paymentBadge(booking.deposit_status)}
            </div>
            <span className="font-mono text-sm text-zinc-400">{formatEur(booking.deposit_eur)}</span>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold">Balance due</span>
              {paymentBadge(booking.balance_status)}
            </div>
            <span className="font-mono font-semibold">
              {booking.balance_status === 'paid' ? formatEur(0) : formatEur(booking.balance_eur)}
            </span>
          </div>
        </div>

        {booking.balance_status === 'pending' && (
          <p className="mt-4 text-[12px] text-muted">
            Balance is due 28 days before arrival. Grgo will be in touch with payment details.
          </p>
        )}
      </div>
    </div>
  )
}
