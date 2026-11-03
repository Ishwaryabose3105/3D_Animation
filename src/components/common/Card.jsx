export default function Card({ as: Tag = 'div', className = '', children, ...props }) {
  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <Tag
      onPointerMove={handlePointerMove}
      className={`relative overflow-hidden rounded-[22px] border border-line bg-card after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(280px_circle_at_var(--mx,50%)_var(--my,0),rgba(255,120,61,0.2),transparent_65%)] after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] hover:after:opacity-100 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
