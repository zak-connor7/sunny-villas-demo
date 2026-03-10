'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface PortalNavProps {
  reservationCode: string
}

export function PortalNav({ reservationCode }: PortalNavProps) {
  const pathname = usePathname()
  const base = `/portal/${reservationCode}`

  const links = [
    { href: base,                      label: 'My Booking' },
    { href: `${base}/experiences`,     label: 'Experiences' },
    { href: `${base}/welcome-pack`,    label: 'Welcome Pack' },
    { href: `${base}/arrival`,         label: 'Arrival' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-bg/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href={base} className="flex items-center gap-3 group">
            <div className="flex items-center gap-0.5">
              <span className="block w-1 h-2.5 bg-orange rounded-sm" />
              <span className="block w-2.5 h-2.5 border-2 border-orange border-t-0 rounded-b-sm" />
              <span className="block w-1 h-2.5 bg-orange rounded-sm" />
            </div>
            <span className="text-[11px] font-bold tracking-[0.2em] text-zinc-400 group-hover:text-white transition-colors uppercase">
              Villa GG
            </span>
          </Link>

          {/* Nav links — hidden on mobile */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest transition-colors',
                  pathname === link.href
                    ? 'text-white'
                    : 'text-muted hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Reservation code */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-muted uppercase tracking-widest hidden sm:block">Ref</span>
            <span className="font-mono text-[12px] text-zinc-300">#{reservationCode}</span>
          </div>
        </div>

        {/* Mobile nav */}
        <nav className="flex md:hidden items-center gap-1 pb-2 overflow-x-auto scrollbar-none">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'px-3 py-1 text-[10px] font-semibold uppercase tracking-widest whitespace-nowrap transition-colors border-b-2',
                pathname === link.href
                  ? 'text-white border-orange'
                  : 'text-muted hover:text-white border-transparent'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
