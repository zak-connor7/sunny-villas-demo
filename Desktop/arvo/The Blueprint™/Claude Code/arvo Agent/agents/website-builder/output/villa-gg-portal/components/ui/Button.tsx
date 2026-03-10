import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'ghost' | 'danger' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-orange text-black font-bold hover:bg-orange/90',
  ghost:   'bg-white/5 text-white hover:bg-white/10 border border-border',
  outline: 'bg-transparent text-white border border-border hover:border-white/40',
  danger:  'bg-danger/10 text-danger border border-danger/20 hover:bg-danger/20',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-[12px] tracking-wide',
  md: 'px-6 py-3 text-[13px] tracking-wide',
  lg: 'px-8 py-4 text-[13px] tracking-wider',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={cn(
        'inline-flex items-center justify-center gap-2 uppercase font-semibold transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {loading && (
        <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
      {children}
    </button>
  )
}
