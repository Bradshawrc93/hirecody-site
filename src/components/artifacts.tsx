'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { track } from '@vercel/analytics'

type ArtifactKind = 'app' | 'case_study'

type Artifact = {
  kind: ArtifactKind
  title: string
  tagline: string
  description: string
  href: string
}

const artifacts: Artifact[] = [
  {
    kind: 'app',
    title: 'obs',
    tagline: 'observability for every AI workflow',
    description:
      'Single dashboard for cost, latency, errors, and token usage across the portfolio. The platform every other probe reports into.',
    href: 'https://obs.hirecody.dev',
  },
  {
    kind: 'app',
    title: 'forge',
    tagline: 'automation without engineering',
    description:
      'Describe a job, wire up the triggers, and let it run on its own cadence. Turns tribal knowledge into shareable, scheduled agents anyone on the team can run.',
    href: 'https://forge.hirecody.dev',
  },
  {
    kind: 'app',
    title: 'beacon',
    tagline: 'release notes that explain themselves',
    description:
      'A running changelog paired with on-demand training. GTM, support, and CS see what shipped and how to use it without chasing a calendar invite.',
    href: 'https://beacon.hirecody.dev',
  },
  {
    kind: 'app',
    title: 'chatbot',
    tagline: 'the internal AI assistant pattern',
    description:
      'Conversational agent trained on me and the rest of the portfolio — a model for the helpdesk or onboarding bot every company already needs.',
    href: 'https://chatbot.hirecody.dev',
  },
  {
    kind: 'case_study',
    title: 'The AI Iceberg',
    tagline: 'why most companies only see the top 10%',
    description:
      'A piece on the layered structure of AI inside organizations — surface, waterline, and what lives below — and why the gap between companies operating at each level is the most under-discussed business risk of the next five years.',
    href: '/case-studies/ai-iceberg',
  },
  {
    kind: 'case_study',
    title: 'Shadow AI',
    tagline: "the org chart your company doesn't know it has",
    description:
      'Every company already has an unofficial AI strategy — the personal accounts, custom GPTs, and one-person agents employees built to get their work done. A piece on what that shadow really costs, and how to round it up before it walks out the door.',
    href: '/case-studies/shadow-ai',
  },
]

type Filter = 'all' | ArtifactKind

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'app', label: 'Apps' },
  { value: 'case_study', label: 'Case Studies' },
]

export function Artifacts() {
  const [filter, setFilter] = useState<Filter>('all')
  const visible = artifacts.filter(
    (a) => filter === 'all' || a.kind === filter,
  )

  return (
    <>
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {filters.map((f) => {
          const active = filter === f.value
          return (
            <button
              key={f.value}
              type="button"
              onClick={() => {
                setFilter(f.value)
                track('artifact_filter', { filter: f.value })
              }}
              className={
                active
                  ? 'px-3 py-1.5 rounded-md text-sm font-medium bg-foreground text-background transition-colors'
                  : 'px-3 py-1.5 rounded-md text-sm font-medium bg-card border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors'
              }
              aria-pressed={active}
            >
              {f.label}
            </button>
          )
        })}
      </div>

      {visible.length === 0 ? (
        <div className="border-y border-border py-6 text-muted-foreground text-sm">
          Case studies are in the works — check back soon.
        </div>
      ) : (
        <ul className="border-y border-border divide-y divide-border">
          {visible.map((a) => {
            const isInternal = a.href.startsWith('/')
            const onClick = () =>
              track('artifact_click', { artifact: a.title, kind: a.kind })
            const className =
              'group block px-4 py-4 hover:bg-card transition-colors'
            const inner = (
              <div className="flex items-start gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-foreground font-semibold text-base leading-snug group-hover:underline underline-offset-4 decoration-foreground/40">
                    {a.title} — {a.tagline}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                    {a.description}
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  aria-hidden
                  className="mt-1 shrink-0 text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-0.5 transition-all"
                />
              </div>
            )
            return (
              <li key={a.title}>
                {isInternal ? (
                  <Link href={a.href} onClick={onClick} className={className}>
                    {inner}
                  </Link>
                ) : (
                  <a href={a.href} onClick={onClick} className={className}>
                    {inner}
                  </a>
                )}
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}
