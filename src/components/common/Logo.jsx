import { Link } from 'react-router-dom'

export default function Logo({ onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-ink"
    >
      <svg width="45" height="45" viewBox="0 0 28 28" aria-hidden="true">
        <path d="M14 2l11 6.5v11L14 26 3 19.5v-11z" fill="url(#grad-orange)" />
        <path d="M14 2v24M3 8.5l22 11" stroke="#101114" strokeOpacity=".35" />
      </svg>
   <div className="flex flex-col leading-tight">
 <span className="text-[grey-700] dark:text-[white] font-bold">
  Shine Craft
</span>

<span className="text-[maroon] dark:text-[white]">
  3D PRINTING SERVICE
</span>
</div>
     
    </Link>
  )
}
