'use client'

import { track } from '@vercel/analytics'
import { useEffect, useRef, useState } from 'react'

type TrackedLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: string
  eventProps?: Record<string, string | number | boolean | null>
}

export function TrackedLink({ event, eventProps, onClick, children, ...rest }: TrackedLinkProps) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        track(event, eventProps)
        onClick?.(e)
      }}
    >
      {children}
    </a>
  )
}

type TrackedChatFrameProps = {
  src: string
  title: string
  ctx: string
  className?: string
}

// Cross-origin iframes don't expose click events to the parent, but clicking
// inside one blurs the parent window — we use that as the engagement signal.
export function TrackedChatFrame({ src, title, ctx, className }: TrackedChatFrameProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [engaged, setEngaged] = useState(false)

  useEffect(() => {
    if (engaged) return
    const onBlur = () => {
      if (document.activeElement?.tagName === 'IFRAME' && wrapperRef.current?.contains(document.activeElement)) {
        track('chat_engage', { ctx })
        setEngaged(true)
      }
    }
    window.addEventListener('blur', onBlur)
    return () => window.removeEventListener('blur', onBlur)
  }, [ctx, engaged])

  return (
    <div ref={wrapperRef} className={className}>
      <iframe src={src} title={title} className="w-full h-full border-0" />
    </div>
  )
}
