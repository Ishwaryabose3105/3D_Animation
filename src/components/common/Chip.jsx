export default function Chip({ active = false, className = '', children, ...props }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
        active
          ? 'border-brand bg-brand text-[#1a0d05]'
          : 'border-line text-muted hover:border-brand/50 hover:text-ink'
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
