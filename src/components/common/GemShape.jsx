const ORANGE = 'url(#grad-orange)'
const SILVER = 'url(#grad-silver)'

// six faces of the hexagon "gem" that shows up in the hero, about and CTA sections
const faces = [
  { points: '100,14 172,56 100,100', fill: ORANGE, opacity: 1 },
  { points: '172,56 172,144 100,100', fill: ORANGE, opacity: 0.7 },
  { points: '172,144 100,186 100,100', fill: SILVER, opacity: 0.55 },
  { points: '100,186 28,144 100,100', fill: ORANGE, opacity: 0.45 },
  { points: '28,144 28,56 100,100', fill: SILVER, opacity: 0.8 },
  { points: '28,56 100,14 100,100', fill: SILVER, opacity: 0.4 },
]

// wire = outline only
export default function GemShape({ wire = false, className = '' }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      {faces.map((face) => (
        <polygon
          key={face.points}
          points={face.points}
          opacity={face.opacity}
          fill={wire ? 'none' : face.fill}
          stroke={wire ? ORANGE : undefined}
          strokeWidth={wire ? 1.4 : undefined}
        />
      ))}
      <path
        d="M100 14l72 42v88l-72 42-72-42V56zM100 100V14M100 100l72-44M100 100l72 44M100 100v86M100 100l-72 44M100 100L28 56"
        fill="none"
        stroke="#fff"
        strokeOpacity=".25"
      />
    </svg>
  )
}
