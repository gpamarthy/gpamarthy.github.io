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
          <svg width="28" height="28" viewBox="0 0 64 64" fill="none" aria-hidden="true" className="ufo-bob">
            {/* dome */}
            <path d="M22 30 C22 18 28 10 32 10 C36 10 42 18 42 30" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.08"/>
            {/* big goofy eyes */}
            <ellipse cx="27" cy="24" rx="4" ry="4.5" fill="currentColor" opacity="0.9"/>
            <ellipse cx="37" cy="24" rx="4" ry="4.5" fill="currentColor" opacity="0.9"/>
            <circle cx="28.5" cy="23" r="1.5" fill="rgb(var(--c-bg))"/>
            <circle cx="38.5" cy="23" r="1.5" fill="rgb(var(--c-bg))"/>
            {/* saucer */}
            <ellipse cx="32" cy="32" rx="22" ry="7" fill="currentColor" opacity="0.15"/>
            <ellipse cx="32" cy="32" rx="22" ry="7" stroke="currentColor" strokeWidth="2.5" fill="none"/>
            {/* saucer lights */}
            <circle cx="20" cy="32" r="2" fill="currentColor" opacity="0.5"/>
            <circle cx="32" cy="34" r="2" fill="currentColor" opacity="0.5"/>
            <circle cx="44" cy="32" r="2" fill="currentColor" opacity="0.5"/>
            {/* tractor beams */}
            <path d="M26 39 L20 56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
            <path d="M32 39 L32 58" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
            <path d="M38 39 L44 56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
            {/* antenna */}
            <line x1="32" y1="10" x2="32" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="32" cy="3" r="2" fill="currentColor"/>
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
