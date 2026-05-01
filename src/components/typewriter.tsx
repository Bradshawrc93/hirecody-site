'use client'

import { useEffect, useState } from 'react'

const TYPE_MS = 75
const DELETE_MS = 40
const HOLD_AFTER_TYPED_MS = 1800
const HOLD_AFTER_CLEARED_MS = 350

type Phase = 'hold' | 'deleting' | 'typing'

export function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState(words[0])
  const [phase, setPhase] = useState<Phase>('hold')

  useEffect(() => {
    const word = words[index]
    let delay: number
    let next: () => void

    if (phase === 'hold') {
      delay = HOLD_AFTER_TYPED_MS
      next = () => setPhase('deleting')
    } else if (phase === 'deleting') {
      if (text.length === 0) {
        delay = HOLD_AFTER_CLEARED_MS
        next = () => {
          setIndex((i) => (i + 1) % words.length)
          setPhase('typing')
        }
      } else {
        delay = DELETE_MS
        next = () => setText(text.slice(0, -1))
      }
    } else {
      if (text === word) {
        delay = 0
        next = () => setPhase('hold')
      } else {
        delay = TYPE_MS
        next = () => setText(word.slice(0, text.length + 1))
      }
    }

    const timer = setTimeout(next, delay)
    return () => clearTimeout(timer)
  }, [text, phase, index, words])

  return (
    <span>
      {text}
      <span
        aria-hidden
        className="inline-block w-[2px] h-[0.85em] ml-1 -mb-[2px] align-baseline bg-foreground animate-blink"
      />
    </span>
  )
}
