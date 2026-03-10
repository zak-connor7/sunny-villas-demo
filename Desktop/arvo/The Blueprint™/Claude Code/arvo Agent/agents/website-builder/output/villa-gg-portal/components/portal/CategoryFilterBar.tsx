'use client'

import { cn } from '@/lib/utils'
import type { ExperienceCategory } from '@/types'

const ALL_CATEGORIES: (ExperienceCategory | 'ALL')[] = [
  'ALL', 'FOOD', 'SEA', 'LAND', 'AIR', 'CULTURE', 'PARTY', 'HEALTH',
]

interface CategoryFilterBarProps {
  active: ExperienceCategory | 'ALL'
  onChange: (cat: ExperienceCategory | 'ALL') => void
  counts?: Partial<Record<ExperienceCategory | 'ALL', number>>
}

export function CategoryFilterBar({ active, onChange, counts }: CategoryFilterBarProps) {
  return (
    <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-1">
      {ALL_CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={cn(
            'flex-none px-4 py-2 text-[11px] font-bold uppercase tracking-widest transition-all whitespace-nowrap border',
            active === cat
              ? 'bg-orange text-black border-orange'
              : 'bg-transparent text-muted border-border hover:text-white hover:border-white/20'
          )}
        >
          {cat}
          {counts && counts[cat] !== undefined && (
            <span className={cn(
              'ml-1.5 opacity-60',
              active === cat ? 'text-black' : 'text-muted'
            )}>
              {counts[cat]}
            </span>
          )}
        </button>
      ))}
    </div>
  )
}
