// Gradients shared by every illustration on the site.
// Rendered once in Layout so other SVGs can use fill="url(#grad-orange)".
export default function SvgGradients() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <linearGradient id="grad-orange" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff783d" />
          <stop offset="1" stopColor="#ffb347" />
        </linearGradient>
        <linearGradient id="grad-silver" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e3e7ec" />
          <stop offset="1" stopColor="#7b8290" />
        </linearGradient>
      </defs>
    </svg>
  )
}
