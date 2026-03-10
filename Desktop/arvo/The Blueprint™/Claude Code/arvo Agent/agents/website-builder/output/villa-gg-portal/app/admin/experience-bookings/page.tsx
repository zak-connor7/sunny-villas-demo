import { SAMPLE_EXPERIENCE_BOOKINGS, SAMPLE_EXPERIENCES, ALL_SAMPLE_BOOKINGS } from '@/lib/sample-data'
import { formatDate, formatEur } from '@/lib/utils'
import { Badge } from '@/components/ui/Badge'

export default function ExperienceBookingsPage() {
  const bookings = SAMPLE_EXPERIENCE_BOOKINGS
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .map((eb) => ({
      ...eb,
      experience: SAMPLE_EXPERIENCES.find((e) => e.id === eb.experience_id),
      booking: ALL_SAMPLE_BOOKINGS.find((b) => b.id === eb.booking_id),
    }))

  const totalRevenue = bookings
    .filter((b) => b.status === 'paid')
    .reduce((sum, b) => sum + b.total_eur, 0)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-white leading-none" style={{ fontSize: '40px' }}>
            EXPERIENCE BOOKINGS
          </h1>
          <p className="text-muted text-sm mt-1">{bookings.length} bookings · {formatEur(totalRevenue)} collected</p>
        </div>
      </div>

      {bookings.length === 0 ? (
        <div className="bg-surface border border-border px-5 py-16 text-center">
          <p className="text-muted text-sm">No experience bookings yet.</p>
          <p className="text-muted text-[12px] mt-1">When guests book experiences, they'll appear here.</p>
        </div>
      ) : (
        <div className="bg-surface border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <Th>Experience</Th>
                  <Th>Guest</Th>
                  <Th>Booking Ref</Th>
                  <Th>Qty</Th>
                  <Th>Amount</Th>
                  <Th>Preferred Date</Th>
                  <Th>Status</Th>
                  <Th>Notes</Th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((eb) => (
                  <tr key={eb.id} className="border-b border-border last:border-b-0 hover:bg-raised transition-colors">
                    <td className="px-4 py-3">
                      <p className="text-sm font-semibold text-white">{eb.experience?.name || '—'}</p>
                      <p className="text-[11px] text-muted">{eb.experience?.category}</p>
                    </td>
                    <td className="px-4 py-3">
                      <p className="text-sm text-white">{eb.guest_name}</p>
                      <p className="text-[11px] text-muted">{eb.guest_email}</p>
                    </td>
                    <td className="px-4 py-3 font-mono text-[12px] text-orange">
                      {eb.booking?.reservation_code || '—'}
                    </td>
                    <td className="px-4 py-3 text-sm text-muted text-center">{eb.quantity}</td>
                    <td className="px-4 py-3 font-mono text-sm">{formatEur(eb.total_eur)}</td>
                    <td className="px-4 py-3 text-sm text-muted">
                      {eb.preferred_date ? formatDate(eb.preferred_date) : '—'}
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        variant={
                          eb.status === 'paid' ? 'success' :
                          eb.status === 'cancelled' ? 'danger' :
                          eb.status === 'refunded' ? 'muted' : 'warning'
                        }
                        dot
                      >
                        {eb.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-[12px] text-muted max-w-[200px]">
                      {eb.notes || '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-4 py-3 text-left text-[10px] uppercase tracking-widest text-muted font-semibold whitespace-nowrap">
      {children}
    </th>
  )
}
