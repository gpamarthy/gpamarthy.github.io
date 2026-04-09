'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import ThemeToggle from './theme-toggle'

const links = [
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/attack-map', label: 'ATT&CK' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const path = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-surface-bright/50">
      <div className="wrap flex items-center justify-between h-16">
        <Link
          href="/"
          className="hover:text-accent transition-colors flex items-center gap-1.5"
          onClick={() => setOpen(false)}
          aria-label="Home"
        >
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <ellipse cx="16" cy="14" rx="14" ry="6" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5"/>
            <ellipse cx="16" cy="14" rx="8" ry="3.5" fill="currentColor" opacity="0.3"/>
            <path d="M12 20l-3 8M20 20l3 8M16 20v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
            <path d="M10 14c0-4 2.5-9 6-9s6 5 6 9" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="13" cy="12" r="1.5" fill="currentColor"/>
            <circle cx="19" cy="12" r="1.5" fill="currentColor"/>
          </svg>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-mono transition-colors ${
                path === l.href ? 'text-accent' : 'text-muted hover:text-[rgb(var(--c-text))]'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            className="text-muted p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              {open
                ? <path d="M18 6L6 18M6 6l12 12" />
                : <path d="M4 8h16M4 16h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-surface-bright/50 bg-bg/95 backdrop-blur-md">
          <div className="wrap py-6 flex flex-col gap-5">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`text-sm font-mono py-1 ${path === l.href ? 'text-accent' : 'text-muted'}`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
