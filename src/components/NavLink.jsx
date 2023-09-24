import Link from 'next/link'

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="flex relative border-r-2 items-center justify-between overflow-hidden px-6 py-1 text-md font-sans text-slate-700 hover:text-teal-600"
    >
      {children}
    </Link>
  )
}
