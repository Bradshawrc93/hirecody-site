'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const caseStudies = [
    { href: '/case-studies/support-org-from-zero', label: 'Support Org from Zero' },
    { href: '/case-studies/product-ops-post-acquisition', label: 'Product Ops Post-Acquisition' },
    { href: '/case-studies/ai-in-the-workplace', label: 'AI in the Workplace' },
  ]

  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-foreground font-semibold tracking-tight text-sm">
          Cody Bradshaw
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Case Studies dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200 flex items-center gap-1">
              Case Studies
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 rounded-xl bg-background border border-border p-2 shadow-lg">
                {caseStudies.map((study) => (
                  <Link
                    key={study.href}
                    href={study.href}
                    className="block rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-200"
                  >
                    {study.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/how-i-operate"
            className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
          >
            How I Operate
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://linkedin.com/in/bradshawrc93"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-4 space-y-3">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider pt-1">
            Case Studies
          </p>
          {caseStudies.map((study) => (
            <Link
              key={study.href}
              href={study.href}
              onClick={() => setMobileOpen(false)}
              className="block text-muted-foreground hover:text-foreground text-sm pl-3 transition-colors"
            >
              {study.label}
            </Link>
          ))}
          <hr className="border-border" />
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="block text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            About
          </Link>
          <Link
            href="/how-i-operate"
            onClick={() => setMobileOpen(false)}
            className="block text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            How I Operate
          </Link>
          <a
            href="https://linkedin.com/in/bradshawrc93"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-primary text-sm font-medium"
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            download
            className="block text-primary text-sm font-medium"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  )
}
