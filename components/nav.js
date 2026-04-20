'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import ThemeToggle from './theme-toggle'

const links = [
  { href: '/experience', label: 'Campaigns' },
  { href: '/projects', label: 'Arsenal' },
  { href: '/attack-map', label: 'Intel' },
  { href: '/about', label: 'Operator' },
  { href: '/contact', label: 'Uplink' },
]

function Ufo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 52" fill="none" aria-hidden="true" className="drop-shadow-[0_0_10px_rgba(239,68,68,0.6)]">
      <g transform="rotate(-12, 32, 28)">
        <ellipse cx="32" cy="14" rx="11" ry="10" fill="currentColor"/>
        <ellipse cx="32" cy="28" rx="27" ry="8" fill="currentColor"/>
        <path d="M12 26 Q32 20 52 26" stroke="rgb(var(--c-bg))" strokeWidth="3" fill="none"/>
        <circle cx="19" cy="28" r="3" fill="rgb(var(--c-bg))"/>
        <circle cx="45" cy="28" r="3" fill="rgb(var(--c-bg))"/>
        {/* Neon highlights */}
        <circle cx="32" cy="14" r="2" fill="rgb(var(--c-accent))" className="animate-pulse"/>
      </g>
    </svg>
  )
}

export { Ufo }

export default function Nav() {
  const raw = usePathname()
  const path = raw.replace(/\/+$/, '') || '/'
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-surface border-b border-white/5">
      <div className="wrap flex items-center justify-between h-20">
        <Link
          href="/"
          className="hover:text-accent transition-all duration-300 flex items-center gap-3 group"
          onClick={() => setOpen(false)}
          aria-label="Home"
        >
          <span className="ufo-live inline-block group-hover:scale-110 transition-transform"><Ufo /></span>
          <span className="font-mono font-bold tracking-[0.3em] text-xs hidden sm:inline-block">UF0_CORE</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[11px] font-mono uppercase tracking-[0.2em] transition-all duration-300 hover:text-white hover:glow-accent ${
                path === l.href ? 'text-accent glow-accent' : 'text-subtle'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button
            className="text-muted p-2 hover:text-accent transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
              {open
                ? <path d="M18 6L6 18M6 6l12 12" />
                : <path d="M4 12h16M4 6h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-bg/95 backdrop-blur-xl">
          <div className="wrap py-10 flex flex-col gap-8">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`text-xs font-mono uppercase tracking-[0.3em] py-2 border-l-2 pl-4 transition-colors ${
                  path === l.href ? 'text-accent border-l-accent bg-accent/5' : 'text-muted border-l-transparent'
                }`}
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
