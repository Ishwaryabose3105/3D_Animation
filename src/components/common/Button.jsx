import { Link } from 'react-router-dom'

const variants = {
  primary:
    'border-transparent bg-linear-120 from-brand to-gold text-[#1a0d05] shadow-[0_8px_28px_-10px_var(--brand)]',
  outline: 'border-line bg-transparent text-ink hover:border-brand/50',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-[0.95rem]',
}

// Renders a router <Link> when `to` is passed, otherwise a normal <button>
export default function Button({ to, variant = 'outline', size = 'md', className = '', children, ...props }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full border font-medium whitespace-nowrap transition duration-200 hover:-translate-y-0.5 ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
