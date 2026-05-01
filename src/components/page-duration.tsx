'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { track } from '@vercel/analytics'

function bucket(ms: number) {
  if (ms < 10_000) return '<10s'
  if (ms < 30_000) return '10-30s'
  if (ms < 60_000) return '30-60s'
  if (ms < 180_000) return '1-3m'
  return '3m+'
}

export function PageDuration() {
  const pathname = usePathname()
  const activeMsRef = useRef(0)
  const lastStartRef = useRef<number | null>(null)
  const firedRef = useRef(false)

  useEffect(() => {
    activeMsRef.current = 0
    firedRef.current = false
    lastStartRef.current =
      document.visibilityState === 'visible' ? performance.now() : null

    const accumulate = () => {
      if (lastStartRef.current != null) {
        activeMsRef.current += performance.now() - lastStartRef.current
        lastStartRef.current = null
      }
    }

    const onVisibility = () => {
      if (document.visibilityState === 'hidden') {
        accumulate()
      } else {
        lastStartRef.current = performance.now()
      }
    }

    const fire = () => {
      if (firedRef.current) return
      firedRef.current = true
      accumulate()
      track('page_view_duration', {
        page: pathname,
        bucket: bucket(activeMsRef.current),
      })
    }

    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('pagehide', fire)

    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pagehide', fire)
      fire()
    }
  }, [pathname])

  return null
}
