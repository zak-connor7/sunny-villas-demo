import { ALL_SAMPLE_BOOKINGS, SAMPLE_EXPERIENCE_BOOKINGS, SAMPLE_EXPERIENCES } from '@/lib/sample-data'
import { formatDate, formatEur } from '@/lib/utils'
import { Badge } from '@/components/ui/Badge'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function AdminDashboard() {
  const now = new Date()

  const upcoming = ALL_SAMPLE_BOOKINGS
    .filter((b) => new Date(b.check_in) >= now)
    .sort((a, b) => new Date(a.check_in).getTime() - new Date(b.check_in).getTime())
    .slice(0, 5)

  const recentExpBookings = SAMPLE_EXPERIENCE_BOOKINGS
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 5)
    .map((eb) => ({
      ...eb,
      experience: SAMPLE_EXPERIENCES.find((e) => e.id === eb.experience_id),
      booking: ALL_SAMPLE_BOOKINGS.find((b) => b.id === eb.booking_id),
    }))

  const unpaidBalance = ALL_SAMPLE_BOOKINGS.filter((b) => b.balance_status === 'pending').length

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-white leading-none" style={{ fontSize: '40px' }}>
          DASHBOARD
        </h1>
        <p className="text-muted text-sm mt-1">Villa GG · Podstrana, Croatia</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <StatCard label="Total Bookings" value={ALL_SAMPLE_BOOKINGS.length.toString()} />
        <StatCard label="Upcoming" value={upcoming.length.toString()} />
        <StatCard label="Balance Pending" value={unpaidBalance.toString()} highlight={unpaidBalance > 0} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming arrivals */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-[11px] uppercase tracking-widest text-muted font-semibold">Upcoming Arrivals</p>
            <Link href="/admin/bookings" className="text-[11px] text-muted hover:text-orange transition-colors uppercase tracking-widest flex items-center gap-1">
              All <ArrowRight size={10} />
            </Link>
          </div>
          <div className="space-y-2">
            {upcoming.length === 0 && (
              <div className="bg-surface border border-border px-5 py-6 text-center">
                <p className="text-sm text-muted">No upcoming bookings.</p>
              </div>
            )}
            {upcoming.map((b) => (
              <Link
                key={b.id}
                href={`/admin/bookings/${b.id}`}
                className="flex items-center justify-between bg-surface border border-border px-5 py-3 hover:border-orange/30 transition-colors group"
              >
                <div>
                  <p className="text-sm font-semibold group-hover:text-orange transition-colors">{b.guest_name}</p>
                  <p className="text-[11px] text-muted mt-0.5">{formatDate(b.check_in)} · {b.guest_count} guests</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={b.balance_status === 'paid' ? 'success' : 'warning'} dot>
                    {b.balance_status === 'paid' ? 'Paid' : 'Balance due'}
                  </Badge>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent experience bookings */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-[11px] uppercase tracking-widest text-muted font-semibold">Experience Bookings</p>
            <Link href="/admin/experience-bookings" className="text-[11px] text-muted hover:text-orange transition-colors uppercase tracking-widest flex items-center gap-1">
              All <ArrowRight size={10} />
            </Link>
          </div>
          <div className="space-y-2">
            {recentExpBookings.length === 0 && (
              <div className="bg-surface border border-border px-5 py-6 text-center">
                <p className="text-sm text-muted">No experience bookings yet.</p>
              </div>
            )}
            {recentExpBookings.map((eb) => (
              <div
                key={eb.id}
                className="flex items-center justify-between bg-surface border border-border px-5 py-3"
              >
                <div>
                  <p className="text-sm font-semibold">{eb.experience?.name}</p>
                  <p className="text-[11px] text-muted mt-0.5">{eb.booking?.guest_name}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm">{formatEur(eb.total_eur)}</span>
                  <Badge variant={eb.status === 'paid' ? 'success' : 'warning'} dot>
                    {eb.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`bg-surface border px-5 py-5 ${highlight ? 'border-warning/40' : 'border-border'}`}>
      <p className="text-[10px] uppercase tracking-widest text-muted font-semibold mb-1">{label}</p>
      <p className={`font-display text-3xl ${highlight ? 'text-warning' : 'text-white'}`}>{value}</p>
    </div>
  )
}
