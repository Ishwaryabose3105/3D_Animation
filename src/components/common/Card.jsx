export default function Card({ as: Tag = 'div', className = '', children, ...props }) {
  // moves the orange spotlight with the pointer (see .spotlight in index.css)
  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <Tag
      onPointerMove={handlePointerMove}
      className={`spotlight relative overflow-hidden rounded-[22px] border border-line bg-card ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
