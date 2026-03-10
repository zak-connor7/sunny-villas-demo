import { cn } from '@/lib/utils'

type BadgeVariant = 'success' | 'warning' | 'danger' | 'muted' | 'orange'

const variants: Record<BadgeVariant, string> = {
  success: 'bg-success/10 text-success border border-success/20',
  warning: 'bg-warning/10 text-warning border border-warning/20',
  danger:  'bg-danger/10 text-danger border border-danger/20',
  muted:   'bg-white/5 text-muted border border-border',
  orange:  'bg-orange/10 text-orange border border-orange/20',
}

interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
  dot?: boolean
}

export function Badge({ variant = 'muted', children, className, dot }: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase',
      variants[variant],
      className
    )}>
      {dot && (
        <span className={cn(
          'w-1.5 h-1.5 rounded-full',
          variant === 'success' && 'bg-success',
          variant === 'warning' && 'bg-warning',
          variant === 'danger'  && 'bg-danger',
          variant === 'orange'  && 'bg-orange',
          variant === 'muted'   && 'bg-muted',
        )} />
      )}
      {children}
    </span>
  )
}
