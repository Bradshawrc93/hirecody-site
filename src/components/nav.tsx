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
          <Link
            href="/#apps"
            className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
          >
            Apps
          </Link>
          <Link
            href="/about"
            className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
          >
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/cody-bradshaw-41965017b/"
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
          <a
            href="https://obs.hirecody.dev"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-bold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            Obs
            <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
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
          <Link
            href="/#apps"
            onClick={() => setMobileOpen(false)}
            className="block text-muted-foreground hover:text-foreground text-sm transition-colors pt-1"
          >
            Apps
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="block text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            About
          </Link>
          <a
            href="https://www.linkedin.com/in/cody-bradshaw-41965017b/"
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
          <a
            href="https://obs.hirecody.dev"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-bold px-4 py-2 rounded-lg"
          >
            Obs
            <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      )}
    </header>
  )
}
