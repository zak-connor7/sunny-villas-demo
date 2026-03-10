import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export function Input({ label, error, className, id, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-[11px] uppercase tracking-widest text-muted font-semibold">
          {label}
        </label>
      )}
      <input
        id={id}
        {...props}
        className={cn(
          'bg-surface border border-border text-white placeholder:text-subtle px-4 py-3 text-sm focus:outline-none focus:border-orange/60 transition-colors',
          error && 'border-danger/50 focus:border-danger',
          className
        )}
      />
      {error && (
        <p className="text-[12px] text-danger">{error}</p>
      )}
    </div>
  )
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export function Textarea({ label, error, className, id, ...props }: TextareaProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-[11px] uppercase tracking-widest text-muted font-semibold">
          {label}
        </label>
      )}
      <textarea
        id={id}
        {...props}
        className={cn(
          'bg-surface border border-border text-white placeholder:text-subtle px-4 py-3 text-sm focus:outline-none focus:border-orange/60 transition-colors resize-none',
          error && 'border-danger/50 focus:border-danger',
          className
        )}
      />
      {error && (
        <p className="text-[12px] text-danger">{error}</p>
      )}
    </div>
  )
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  children: React.ReactNode
}

export function Select({ label, error, className, id, children, ...props }: SelectProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-[11px] uppercase tracking-widest text-muted font-semibold">
          {label}
        </label>
      )}
      <select
        id={id}
        {...props}
        className={cn(
          'bg-surface border border-border text-white px-4 py-3 text-sm focus:outline-none focus:border-orange/60 transition-colors appearance-none',
          error && 'border-danger/50',
          className
        )}
      >
        {children}
      </select>
      {error && (
        <p className="text-[12px] text-danger">{error}</p>
      )}
    </div>
  )
}
