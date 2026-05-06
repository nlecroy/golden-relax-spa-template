'use client'

import { useState } from 'react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Location', href: '#location' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-forest text-cream">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <span className="font-heading text-xl text-gold font-semibold tracking-wide">
          Golden Relax
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:8287676178"
            className="bg-gold text-forest px-4 py-2 text-sm font-semibold hover:bg-yellow-400 transition-colors"
          >
            Call Us
          </a>
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden text-cream"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          aria-label="mobile menu"
          className="md:hidden bg-forest border-t border-gold/20 px-4 py-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm hover:text-gold transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:8287676178"
            className="bg-gold text-forest px-4 py-2 text-sm font-semibold text-center"
          >
            Call Us
          </a>
        </nav>
      )}
    </nav>
  )
}
