import { ALL_SAMPLE_BOOKINGS } from '@/lib/sample-data'
import { formatDate, formatEur } from '@/lib/utils'
import { Badge } from '@/components/ui/Badge'
import Link from 'next/link'
import { Plus } from 'lucide-react'

export default function AdminBookingsPage() {
  const bookings = [...ALL_SAMPLE_BOOKINGS].sort(
    (a, b) => new Date(a.check_in).getTime() - new Date(b.check_in).getTime()
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-white leading-none" style={{ fontSize: '40px' }}>BOOKINGS</h1>
          <p className="text-muted text-sm mt-1">{bookings.length} total</p>
        </div>
        <Link
          href="/admin/bookings/new"
          className="inline-flex items-center gap-2 bg-orange text-black font-bold uppercase tracking-widest px-5 py-3 text-[12px] hover:bg-orange/90 transition-colors"
        >
          <Plus size={14} />
          Add Booking
        </Link>
      </div>

      {/* Table */}
      <div className="bg-surface border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <Th>Code</Th>
                <Th>Guest</Th>
                <Th>Check-in</Th>
                <Th>Guests</Th>
                <Th>Total</Th>
                <Th>Deposit</Th>
                <Th>Balance</Th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr
                  key={b.id}
                  className="border-b border-border last:border-b-0 hover:bg-raised transition-colors"
                >
                  <td className="px-4 py-3">
                    <Link href={`/admin/bookings/${b.id}`} className="font-mono text-[12px] text-orange hover:underline">
                      {b.reservation_code}
                    </Link>
                  </td>
                  <td className="px-4 py-3">
                    <Link href={`/admin/bookings/${b.id}`} className="text-sm text-white hover:text-orange transition-colors">
                      {b.guest_name}
                    </Link>
                    {b.notes && (
                      <p className="text-[11px] text-muted mt-0.5 max-w-[200px] truncate">{b.notes}</p>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm text-muted whitespace-nowrap">
                    {formatDate(b.check_in)}
                  </td>
                  <td className="px-4 py-3 text-sm text-muted text-center">{b.guest_count}</td>
                  <td className="px-4 py-3 font-mono text-sm whitespace-nowrap">{formatEur(b.total_eur)}</td>
                  <td className="px-4 py-3">
                    <Badge variant={b.deposit_status === 'paid' ? 'success' : 'warning'} dot>
                      {b.deposit_status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant={b.balance_status === 'paid' ? 'success' : 'warning'} dot>
                      {b.balance_status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
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
