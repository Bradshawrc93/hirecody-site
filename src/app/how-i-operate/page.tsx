import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How I Operate — R. Cody Bradshaw',
  description: 'My operating principles for building teams, systems, and processes.',
}

const principles = [
  {
    number: '01',
    heading: 'Start with visibility, not process.',
    body: "My first move in any new function is to create a single source of truth — a dashboard, a digest, a weekly report — so leadership can see what's actually happening before I start changing things. I built the executive Product Digest at Smarter Technologies for exactly this reason.",
  },
  {
    number: '02',
    heading: 'Build the team around the problem, not the org chart.',
    body: "I scaled from 6 to 75+ not by following a hiring plan, but by solving the next problem and building the team that problem required. I became the talent pipeline because I was closest to the work.",
  },
  {
    number: '03',
    heading: 'Tooling should serve workflows, not the other way around.',
    body: "I've transitioned teams across three support platforms and standardized Jira and Notion. The lesson every time: define the workflow first, then find the tool that fits. Never the reverse.",
  },
  {
    number: '04',
    heading: 'Make decisions with models, not gut feel.',
    body: "I built the budget and headcount forecasting models in Google Sheets + Apps Script that gave leadership actual data to make hiring decisions instead of guessing. If you can instrument a decision, you should.",
  },
  {
    number: '05',
    heading: 'Distributed teams need intentional culture.',
    body: "Managing 75+ people across LATAM, Europe, and South Africa taught me that async communication, accountability across time zones, and culture-building all require deliberate design. You can't just hope it happens.",
  },
  {
    number: '06',
    heading: 'Use AI as a force multiplier, not a replacement.',
    body: "I use AI tools daily — Claude, Cursor, Claude Code, Apps Script + AI — to move faster on writing, analysis, automation, and coding. The best operators adopt tools early and teach others by showing what's possible.",
  },
]

export default function HowIOperate() {
  return (
    <div className="pt-28 pb-24 px-6 max-w-5xl mx-auto">
      {/* Page header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="w-8 h-px bg-primary" />
        <span className="text-primary text-sm font-medium tracking-wide uppercase">
          How I Operate
        </span>
      </div>
      <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] text-balance mb-6 max-w-3xl">
        Principles I bring to every role.
      </h1>
      <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-16">
        Every company I&apos;ve joined has looked different, but the problems are
        usually the same: unclear priorities, scattered tooling, no single source
        of truth, and teams that don&apos;t talk to each other. Here&apos;s how I
        approach fixing that.
      </p>

      {/* Principles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {principles.map((p, i) => (
          <div
            key={i}
            className="group flex gap-6 bg-card rounded-xl border border-border p-7 hover:border-primary/30 hover:shadow-sm transition-all duration-200"
          >
            <span className="text-primary/30 font-mono font-bold text-2xl leading-none mt-0.5 select-none flex-shrink-0">
              {p.number}
            </span>
            <div>
              <h2 className="text-foreground font-semibold text-base leading-snug mb-2">
                {p.heading}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {p.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
