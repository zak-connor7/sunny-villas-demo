'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { LayoutDashboard, CalendarDays, Star, ShoppingBag, LogOut } from 'lucide-react'

const NAV = [
  { href: '/admin',                    label: 'Dashboard',           icon: LayoutDashboard },
  { href: '/admin/bookings',           label: 'Bookings',            icon: CalendarDays },
  { href: '/admin/experiences',        label: 'Experiences',         icon: Star },
  { href: '/admin/experience-bookings',label: 'Experience Bookings', icon: ShoppingBag },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="flex flex-col w-56 bg-surface border-r border-border h-screen sticky top-0 shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 py-5 border-b border-border">
        <div className="flex items-center gap-0.5">
          <span className="block w-1 h-2.5 bg-orange rounded-sm" />
          <span className="block w-2.5 h-2.5 border-2 border-orange border-t-0 rounded-b-sm" />
          <span className="block w-1 h-2.5 bg-orange rounded-sm" />
        </div>
        <div>
          <p className="text-[11px] font-bold tracking-[0.15em] text-white uppercase">Villa GG</p>
          <p className="text-[9px] text-muted tracking-widest uppercase">Admin</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-3 space-y-0.5 px-2">
        {NAV.map((item) => {
          const Icon = item.icon
          const active = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href))
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-2.5 px-3 py-2.5 text-[12px] font-semibold uppercase tracking-wide transition-colors',
                active
                  ? 'bg-orange/10 text-orange'
                  : 'text-muted hover:text-white hover:bg-white/5'
              )}
            >
              <Icon size={14} />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="p-2 border-t border-border">
        <form action="/api/admin/logout" method="POST">
          <button
            type="submit"
            className="w-full flex items-center gap-2.5 px-3 py-2.5 text-[12px] font-semibold uppercase tracking-wide text-muted hover:text-danger hover:bg-danger/5 transition-colors"
          >
            <LogOut size={14} />
            Sign Out
          </button>
        </form>
      </div>
    </aside>
  )
}
