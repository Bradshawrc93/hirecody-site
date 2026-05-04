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
  date: string
}

const artifacts: Artifact[] = [
  {
    kind: 'app',
    title: 'obs',
    tagline: 'observability for every AI workflow',
    description:
      'Single dashboard for cost, latency, errors, and token usage across the portfolio. The platform every other probe reports into.',
    href: 'https://obs.hirecody.dev',
    date: '2026-04-10',
  },
  {
    kind: 'app',
    title: 'chatbot',
    tagline: 'the internal AI assistant pattern',
    description:
      'Conversational agent trained on me and the rest of the portfolio — a model for the helpdesk or onboarding bot every company already needs.',
    href: 'https://chatbot.hirecody.dev',
    date: '2026-04-12',
  },
  {
    kind: 'app',
    title: 'forge',
    tagline: 'automation without engineering',
    description:
      'Describe a job, wire up the triggers, and let it run on its own cadence. Turns tribal knowledge into shareable, scheduled agents anyone on the team can run.',
    href: 'https://forge.hirecody.dev',
    date: '2026-04-14',
  },
  {
    kind: 'case_study',
    title: 'The AI Iceberg',
    tagline: 'why most companies only see the top 10%',
    description:
      'A piece on the layered structure of AI inside organizations — surface, waterline, and what lives below — and why the gap between companies operating at each level is the most under-discussed business risk of the next five years.',
    href: '/case-studies/ai-iceberg',
    date: '2026-04-25',
  },
  {
    kind: 'app',
    title: 'beacon',
    tagline: 'release notes that explain themselves',
    description:
      'A running changelog paired with on-demand training. GTM, support, and CS see what shipped and how to use it without chasing a calendar invite.',
    href: 'https://beacon.hirecody.dev',
    date: '2026-04-28',
  },
  {
    kind: 'case_study',
    title: 'Shadow AI',
    tagline: "the org chart your company doesn't know it has",
    description:
      'Every company already has an unofficial AI strategy — the personal accounts, custom GPTs, and one-person agents employees built to get their work done. A piece on what that shadow really costs, and how to round it up before it walks out the door.',
    href: '/case-studies/shadow-ai',
    date: '2026-05-01',
  },
  {
    kind: 'app',
    title: 'lens',
    tagline: 'rubric-driven model evaluation',
    description:
      'Pick an app, define or reuse a rubric, and run its workflow across multiple models. Each audit returns side-by-side scored outputs and an explicit recommendation that weighs quality against cost and latency.',
    href: 'https://hirecody-lens.vercel.app',
    date: '2026-05-02',
  },
  {
    kind: 'case_study',
    title: 'AI as Default',
    tagline: 'centralizing the AI org before shadow AI eats it',
    description:
      'What AI infrastructure looks like when it stops being a tool layer and becomes a substrate layer. A v0.5 asset pack called Paired you can run on a laptop, plus the organizational and financial case for centralizing the AI org now.',
    href: '/case-studies/ai-as-default',
    date: '2026-05-03',
  },
]

const KIND_LABEL: Record<ArtifactKind, string> = {
  app: 'APP',
  case_study: 'CASE STUDY',
}

type Filter = 'all' | ArtifactKind

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'app', label: 'Apps' },
  { value: 'case_study', label: 'Case Studies' },
]

function ArtifactRow({
  artifact,
  onClick,
}: {
  artifact: Artifact
  onClick: () => void
}) {
  const isInternal = artifact.href.startsWith('/')
  const className = 'group block px-4 py-4 hover:bg-card transition-colors'
  const inner = (
    <div className="flex items-start gap-4">
      <div className="flex-1 min-w-0">
        <h3 className="text-foreground font-semibold text-base leading-snug group-hover:underline underline-offset-4 decoration-foreground/40">
          {artifact.title} — {artifact.tagline}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mt-1">
          {artifact.description}
        </p>
      </div>
      <span
        aria-hidden
        className="mt-1 shrink-0 text-[11px] uppercase tracking-wider text-muted-foreground/50 hidden sm:inline"
      >
        {KIND_LABEL[artifact.kind]}
      </span>
      <ArrowRight
        size={16}
        strokeWidth={2}
        aria-hidden
        className="mt-1 shrink-0 text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-0.5 transition-all"
      />
    </div>
  )
  return isInternal ? (
    <Link href={artifact.href} onClick={onClick} className={className}>
      {inner}
    </Link>
  ) : (
    <a href={artifact.href} onClick={onClick} className={className}>
      {inner}
    </a>
  )
}

export function Artifacts() {
  const [filter, setFilter] = useState<Filter>('all')
  const visible = artifacts.filter(
    (a) => filter === 'all' || a.kind === filter,
  )
  const latest = artifacts.reduce((a, b) => (a.date >= b.date ? a : b))
  const showLatest = filter === 'all'

  return (
    <>
      {showLatest && (
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] uppercase tracking-wider text-muted-foreground/70">
              Latest addition
            </span>
            <span className="text-[11px] text-muted-foreground/40">
              {KIND_LABEL[latest.kind]}
            </span>
          </div>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <ArtifactRow
              artifact={latest}
              onClick={() =>
                track('artifact_click', {
                  artifact: latest.title,
                  kind: latest.kind,
                  source: 'latest',
                })
              }
            />
          </div>
        </div>
      )}

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
          {visible.map((a) => (
            <li key={a.title}>
              <ArtifactRow
                artifact={a}
                onClick={() =>
                  track('artifact_click', { artifact: a.title, kind: a.kind })
                }
              />
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
