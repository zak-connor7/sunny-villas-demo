import { notFound } from 'next/navigation'
import { BookingSummaryCard } from '@/components/portal/BookingSummaryCard'
import { ALL_SAMPLE_BOOKINGS, SAMPLE_EXPERIENCES, SAMPLE_EXPERIENCE_BOOKINGS } from '@/lib/sample-data'
import { formatEur } from '@/lib/utils'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'

interface Props {
  params: Promise<{ reservationCode: string }>
}

export default async function PortalDashboard({ params }: Props) {
  const { reservationCode } = await params

  // In production: fetch from Supabase
  const booking = ALL_SAMPLE_BOOKINGS.find(
    (b) => b.reservation_code === reservationCode
  )

  if (!booking) notFound()

  // Experience bookings for this stay
  const expBookings = SAMPLE_EXPERIENCE_BOOKINGS
    .filter((eb) => eb.booking_id === booking.id)
    .map((eb) => ({
      ...eb,
      experience: SAMPLE_EXPERIENCES.find((e) => e.id === eb.experience_id),
    }))

  return (
    <div className="space-y-8">
      {/* Greeting */}
      <div>
        <p className="text-[11px] uppercase tracking-widest text-muted font-semibold mb-2">
          Welcome back
        </p>
        <h1
          className="font-display text-white leading-none"
          style={{ fontSize: 'clamp(36px, 8vw, 64px)' }}
        >
          {booking.guest_name.split('&')[0].trim()}.
        </h1>
        <p className="mt-2 text-muted text-sm">Your stay at Villa GG, Podstrana.</p>
      </div>

      {/* Booking card */}
      <BookingSummaryCard booking={booking} />

      {/* Booked experiences */}
      {expBookings.length > 0 && (
        <div>
          <p className="text-[11px] uppercase tracking-widest text-muted font-semibold mb-4">
            Your Experiences
          </p>
          <div className="space-y-2">
            {expBookings.map((eb) => (
              <div
                key={eb.id}
                className="flex items-center justify-between px-5 py-4 bg-surface border border-border"
              >
                <div>
                  <p className="text-sm font-semibold">{eb.experience?.name}</p>
                  {eb.preferred_date && (
                    <p className="text-[12px] text-muted mt-0.5">{eb.preferred_date}</p>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm">{formatEur(eb.total_eur)}</span>
                  <Badge variant={eb.status === 'paid' ? 'success' : 'warning'} dot>
                    {eb.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <QuickLink
          href={`/portal/${reservationCode}/experiences`}
          title="Experiences"
          description="40+ curated activities — book direct"
        />
        <QuickLink
          href={`/portal/${reservationCode}/welcome-pack`}
          title="Welcome Pack"
          description="Split, the islands, restaurants"
        />
        <QuickLink
          href={`/portal/${reservationCode}/arrival`}
          title="Arrival Info"
          description="Address, transfers, check-in"
        />
      </div>
    </div>
  )
}

function QuickLink({
  href,
  title,
  description,
}: {
  href: string
  title: string
  description: string
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between p-5 bg-surface border border-border hover:border-orange/30 transition-colors"
    >
      <div>
        <p className="text-[11px] uppercase tracking-widest text-muted font-semibold">{title}</p>
        <p className="text-sm text-white mt-1 group-hover:text-orange transition-colors">{description}</p>
      </div>
      <ArrowRight size={16} className="text-muted group-hover:text-orange transition-colors shrink-0 ml-3" />
    </Link>
  )
}
