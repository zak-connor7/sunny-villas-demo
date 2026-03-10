import Link from 'next/link'
import Image from 'next/image'
import { formatEur } from '@/lib/utils'
import type { Experience } from '@/types'
import { ArrowRight, Clock } from 'lucide-react'

interface ExperienceCardProps {
  experience: Experience
  reservationCode: string
}

export function ExperienceCard({ experience, reservationCode }: ExperienceCardProps) {
  return (
    <Link
      href={`/portal/${reservationCode}/experiences/${experience.slug}`}
      className="group block bg-surface border border-border hover:border-orange/30 transition-colors overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-raised">
        {experience.image_url ? (
          <Image
            src={experience.image_url}
            alt={experience.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-raised" />
        )}
        {/* Category tag */}
        <span className="absolute top-3 left-3 px-2 py-1 bg-orange text-black text-[10px] font-bold tracking-widest uppercase">
          {experience.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-white text-[15px] leading-snug group-hover:text-orange transition-colors">
          {experience.name}
        </h3>

        {experience.duration_text && (
          <div className="flex items-center gap-1.5 mt-2 text-muted">
            <Clock size={12} />
            <span className="text-[12px]">{experience.duration_text}</span>
          </div>
        )}

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
          <div>
            <span className="font-mono font-semibold text-white">{formatEur(experience.price_eur)}</span>
            {experience.price_note && (
              <span className="text-[11px] text-muted ml-1">{experience.price_note}</span>
            )}
          </div>
          <ArrowRight size={14} className="text-muted group-hover:text-orange transition-colors" />
        </div>
      </div>
    </Link>
  )
}
