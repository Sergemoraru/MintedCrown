import Link from 'next/link'

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 shadow-md hover:text-emerald-800"
    >
      {children}
    </Link>
  )
}
