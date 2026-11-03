const ORANGE = 'url(#grad-orange)'
const SILVER = 'url(#grad-silver)'

// Simple placeholder illustrations (100x100 viewBox), one per product type
const artwork = {
  keychain: (
    <>
      <circle cx="50" cy="20" r="9" fill="none" stroke={SILVER} strokeWidth="4" />
      <rect x="32" y="34" width="36" height="46" rx="10" fill={ORANGE} />
      <circle cx="50" cy="57" r="7" fill="#101114" opacity=".6" />
    </>
  ),
  lamp: (
    <>
      <path d="M34 82h32L58 30H42z" fill={ORANGE} />
      <rect x="26" y="82" width="48" height="6" rx="3" fill={SILVER} />
    </>
  ),
  wallArt: (
    <>
      <rect x="22" y="22" width="56" height="56" rx="4" fill="none" stroke={SILVER} strokeWidth="3" />
      <path d="M30 70l16-30 10 18 8-12 8 24z" fill={ORANGE} />
    </>
  ),
  statue: (
    <>
      <circle cx="50" cy="30" r="14" fill={ORANGE} />
      <path d="M24 86c0-22 12-34 26-34s26 12 26 34z" fill={SILVER} />
    </>
  ),
  nameBoard: (
    <>
      <path d="M16 62h68l-8 20H24z" fill={SILVER} />
      <path d="M22 36h56v26H22z" fill={ORANGE} />
    </>
  ),
  phoneStand: (
    <>
      <path d="M34 84h42v-8H46l20-52-10-4-22 56z" fill={SILVER} />
      <rect x="50" y="26" width="18" height="40" rx="3" transform="rotate(14 59 46)" fill={ORANGE} />
    </>
  ),
  planter: (
    <>
      <path d="M26 50h48l-6 34H32z" fill={ORANGE} />
      <path
        d="M50 50C50 30 38 24 30 22c0 14 8 24 20 28zm0 0c0-20 12-26 20-28 0 14-8 24-20 28z"
        fill={SILVER}
      />
    </>
  ),
  vase: (
    <path d="M42 16h16v14c14 8 20 22 14 42-3 8-8 12-22 12S31 80 28 72c-6-20 0-34 14-42z" fill={ORANGE} />
  ),
  miniature: (
    <>
      <path d="M50 16l14 20-6 10H42l-6-10z" fill={SILVER} />
      <path d="M36 50h28l6 34H30z" fill={ORANGE} />
    </>
  ),
  building: (
    <>
      <path d="M20 84V50l20-10v44zM44 84V30l24-12v66zM72 84V46l12 6v38z" fill={ORANGE} />
      {/* a thin rect instead of a line, gradients don't render on zero-height lines */}
      <rect x="14" y="85" width="76" height="3" rx="1.5" fill={SILVER} />
    </>
  ),
  gear: (
    <>
      <circle cx="50" cy="50" r="24" fill={ORANGE} />
      <circle cx="50" cy="50" r="9" fill="#101114" opacity=".6" />
      <circle cx="50" cy="50" r="34" fill="none" stroke={SILVER} strokeWidth="8" strokeDasharray="7 6" />
    </>
  ),
  gift: (
    <>
      <rect x="24" y="42" width="52" height="42" rx="4" fill={ORANGE} />
      <rect x="46" y="42" width="8" height="42" fill={SILVER} />
      <path d="M50 42C36 24 24 38 36 42zm0 0c14-18 26-4 14 0z" fill="none" stroke={SILVER} strokeWidth="4" />
    </>
  ),
}

export default function ProductArt({ name, className = '' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {artwork[name]}
    </svg>
  )
}
