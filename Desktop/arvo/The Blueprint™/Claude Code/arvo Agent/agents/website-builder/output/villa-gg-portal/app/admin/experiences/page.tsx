import { SAMPLE_EXPERIENCES } from '@/lib/sample-data'
import { formatEur } from '@/lib/utils'
import { Badge } from '@/components/ui/Badge'
import Link from 'next/link'
import { Plus } from 'lucide-react'

const CATEGORY_COLORS: Record<string, 'success' | 'warning' | 'orange' | 'muted'> = {
  FOOD: 'orange', SEA: 'muted', LAND: 'success', AIR: 'muted',
  CULTURE: 'warning', PARTY: 'orange', HEALTH: 'success',
}

export default function AdminExperiencesPage() {
  const experiences = [...SAMPLE_EXPERIENCES].sort((a, b) => a.sort_order - b.sort_order)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-white leading-none" style={{ fontSize: '40px' }}>EXPERIENCES</h1>
          <p className="text-muted text-sm mt-1">{experiences.length} experiences</p>
        </div>
        <Link
          href="/admin/experiences/new"
          className="inline-flex items-center gap-2 bg-orange text-black font-bold uppercase tracking-widest px-5 py-3 text-[12px] hover:bg-orange/90 transition-colors"
        >
          <Plus size={14} />
          Add Experience
        </Link>
      </div>

      <div className="bg-surface border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <Th>Name</Th>
                <Th>Category</Th>
                <Th>Price</Th>
                <Th>Per</Th>
                <Th>Duration</Th>
                <Th>Status</Th>
              </tr>
            </thead>
            <tbody>
              {experiences.map((exp) => (
                <tr key={exp.id} className="border-b border-border last:border-b-0 hover:bg-raised transition-colors">
                  <td className="px-4 py-3">
                    <Link href={`/admin/experiences/${exp.id}`} className="text-sm text-white hover:text-orange transition-colors font-semibold">
                      {exp.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant={CATEGORY_COLORS[exp.category] || 'muted'}>
                      {exp.category}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 font-mono text-sm">{formatEur(exp.price_eur)}</td>
                  <td className="px-4 py-3 text-sm text-muted">{exp.price_note || '—'}</td>
                  <td className="px-4 py-3 text-sm text-muted">{exp.duration_text || '—'}</td>
                  <td className="px-4 py-3">
                    <Badge variant={exp.available ? 'success' : 'muted'} dot>
                      {exp.available ? 'Active' : 'Hidden'}
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
