const links = [
  { href: '#pieces', label: 'Pieces' },
  { href: '#classes', label: 'Classes' },
  { href: '#visit', label: 'Visit' },
]

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 md:px-16">
      <a href="#top" className="font-display text-lg font-bold tracking-tight">
        Shoreline Clay
      </a>
      <nav aria-label="Main">
        <ul className="flex gap-6 text-sm font-medium md:gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="underline-offset-4 hover:underline">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
