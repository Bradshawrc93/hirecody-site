import { ArrowUp, MessageSquare, Package, Play, Server } from 'lucide-react'

type Stats = {
  chatbotMessages: number
  forgeRuns: number
  appsRegistered: number
  asOf: string
}

async function getStats(): Promise<Stats | null> {
  try {
    const res = await fetch('https://obs.hirecody.dev/api/public/stats', {
      cache: 'no-store',
    })
    if (!res.ok) return null
    return (await res.json()) as Stats
  } catch {
    return null
  }
}

function formatCount(n: number | undefined) {
  if (n === undefined || n === null) return '—'
  return n.toLocaleString()
}

const obs = {
  tag: 'Foundation',
  title: 'Obs',
  subtitle: 'AI Observability Platform',
  description:
    'Centralized monitoring dashboard every other project reports into. Tracks cost, latency, errors, token usage, and prompt versions across the portfolio.',
  thesis:
    'Observability and telemetry are the lifeforce of the AI movement. You cannot scale, trust, or improve what you cannot see — and as companies race to deploy AI into real workflows, the ones who win will be the ones who instrumented it from day one. Obs is my bet on that future, and the foundation every other project here is built to report into.',
  url: 'https://obs.hirecody.dev',
}

type FeederApp = {
  tag: string
  title: string
  description: string
  applicability: string
  url?: string
}

const feederApps: FeederApp[] = [
  {
    tag: 'AI Chatbot',
    title: 'ChatBot',
    description:
      'Conversational agent trained on me and every app in the portfolio — ask about my background or dig into how any of these projects work.',
    applicability:
      'Demonstrates retrieval-grounded chat and knowledge-base UX — the same pattern behind internal helpdesk bots, employee onboarding assistants, and customer support agents.',
    url: 'https://chatbot.hirecody.dev',
  },
  {
    tag: 'Automation',
    title: 'Forge',
    description:
      'Automation platform for building and scheduling agents — describe the job, wire up the triggers, and let it run on its own cadence.',
    applicability:
      'Turns tribal knowledge into executable automation. Any non-technical teammate can convert their repetitive work into a shareable, scheduled process without writing code.',
    url: 'https://forge.hirecody.dev',
  },
  {
    tag: 'Release Notes',
    title: 'Beacon',
    description:
      'Release notes and continuous training for this site and every app in the portfolio — a running changelog paired with on-demand lessons so you can see what shipped and get up to speed on how to use it.',
    applicability:
      'Keeps GTM teams current on the latest product functionality — doubles as the release notes source of truth and a continuous training layer so sales, support, and CS aren’t learning about new features from customers.',
    url: 'https://beacon.hirecody.dev',
  },
]

const workbench = {
  tag: 'Local Models',
  title: 'Private AI Workbench',
  description:
    'An on-prem setup for running, evaluating, and continuously improving local models — benchmarking performance across models, tracking responses, and catching hallucinations over time. Specific shape still in ideation.',
  applicability:
    'Mission critical for companies that need AI fully in-house for data residency, compliance, or cost control — a playbook for standing up local models and keeping them trustworthy as they evolve.',
}

export default async function Home() {
  const stats = await getStats()
  const chatWidget = (
    <div className="bg-card border border-border rounded-xl overflow-hidden h-[380px]">
      <iframe
        src="https://chatbot.hirecody.dev"
        title="Chat with AI Cody"
        className="w-full h-full border-0"
      />
    </div>
  )

  return (
    <>
      {/* Hero — two column on lg: left bio/links, right chat */}
      <section className="pt-20 pb-16 px-6 max-w-5xl mx-auto">
        <hr className="border-t border-border mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left — profile info, links, blurb */}
          <div className="flex flex-col">
            {/* Profile details */}
            <div className="text-sm text-foreground space-y-1 mb-12">
              <p>Austin, TX (open to remote)</p>
              <p>Sr. Manager, Product Ops @ Smarter Technologies</p>
              <p>7+ years in ops, support &amp; program leadership</p>
            </div>

            <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] mb-2">
              Known as
            </p>
            <h1 className="text-foreground text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
              Zero-to-One Operator
            </h1>
            <h2 className="text-foreground text-3xl md:text-4xl font-semibold tracking-tight leading-tight mt-1">
              AI Enabler
            </h2>
            <h2 className="text-foreground text-3xl md:text-4xl font-semibold tracking-tight leading-tight mt-1">
              Ops Engineer
            </h2>
          </div>

          {/* Right — AI chat (lg+ only) */}
          <div className="hidden lg:block">{chatWidget}</div>
        </div>
      </section>

      {/* Narrative: Why / Thesis / What's Here */}
      <section className="pb-16 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <div>
            <h2 className="text-foreground font-semibold text-sm tracking-wide uppercase mb-3">
              Why These Three Titles?
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              They&apos;re the same instinct applied three ways. My career has
              been a series of walking into situations where the thing that
              needed to exist didn&apos;t — no playbook, no predecessor, no
              team on day one — and making it real. I build from zero, I make
              the systems that keep it running, and now I&apos;m doing it with
              AI.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold text-sm tracking-wide uppercase mb-3">
              The Thesis
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Every company will have an AI Enablement function. Not a
              committee that debates strategy in quarterly reviews — a team
              that gets into the workflows, finds where AI creates real
              leverage, implements it, measures the impact, and keeps pushing.
              A continuous charter to unlock capacity and compound output by
              putting AI to work where it actually matters. Most companies
              don&apos;t have this yet. That&apos;s the gap. I&apos;m building
              for it.
            </p>
          </div>
        </div>

        {/* Mobile-only chat (lg hides it since it's shown in the hero) */}
        <div className="lg:hidden mt-10">{chatWidget}</div>
      </section>

      {/* Apps */}
      <section id="apps" className="pb-24 px-6 max-w-5xl mx-auto scroll-mt-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-primary" />
          <span className="text-primary text-sm font-medium tracking-wide uppercase">
            Apps
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            {
              label: 'Chatbot Messages',
              value: formatCount(stats?.chatbotMessages),
              icon: MessageSquare,
            },
            {
              label: 'Forge Runs',
              value: formatCount(stats?.forgeRuns),
              icon: Play,
            },
            {
              label: 'Apps on Obs',
              value: formatCount(stats?.appsRegistered),
              icon: Package,
            },
          ].map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col gap-2 bg-card border border-border rounded-xl p-5"
            >
              <div className="flex items-center gap-2 text-muted-foreground text-[11px] uppercase tracking-[0.15em] font-medium">
                <Icon size={14} strokeWidth={2} className="text-primary/80" />
                {label}
              </div>
              <div className="text-foreground text-3xl font-semibold tracking-tight tabular-nums">
                {value}
              </div>
            </div>
          ))}
        </div>

        <div
          className="relative rounded-2xl border border-border/60 p-5 md:p-8 space-y-4"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(43, 43, 43, 0.08) 1px, transparent 1px)',
            backgroundSize: '18px 18px',
            backgroundColor: 'rgba(241, 233, 221, 0.35)',
          }}
        >
          <a
            href={obs.url}
            className="relative flex flex-col items-center text-center gap-3 bg-card hover:bg-[#E4D8C5] hover:shadow-[inset_0_2px_6px_rgba(0,0,0,0.08)] border border-border rounded-xl p-6 transition-all duration-200"
          >
            <span className="absolute top-3 right-3 text-[10px] uppercase tracking-[0.15em] text-primary font-semibold">
              Platform
            </span>
            <h3 className="flex items-center justify-center gap-2 text-foreground font-semibold text-sm leading-snug">
              <Server size={16} style={{ color: '#C56A2D' }} strokeWidth={2.25} />
              {obs.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
              <em className="text-foreground/80">{obs.subtitle}</em> — {obs.description}
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl border-t border-border/60 pt-3 mt-1">
              {obs.thesis}
            </p>
          </a>

          <div className="hidden sm:grid grid-cols-3 gap-4 -my-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex justify-center">
                <ArrowUp
                  size={20}
                  strokeWidth={1.75}
                  className="text-primary/60"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {feederApps.map((app) => {
              const cardClass =
                'relative flex flex-col gap-3 bg-card hover:bg-[#E4D8C5] hover:shadow-[inset_0_2px_6px_rgba(0,0,0,0.08)] border border-border rounded-xl p-5 h-full transition-all duration-200'
              const inner = (
                <>
                  <span className="absolute top-3 right-3 text-[10px] uppercase tracking-[0.15em] text-primary font-semibold">
                    App
                  </span>
                  <h3 className="text-foreground font-semibold text-sm leading-snug">
                    {app.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {app.description}
                  </p>
                  {app.applicability && (
                    <p className="text-muted-foreground text-sm leading-relaxed border-t border-border/60 pt-3 mt-1">
                      <span className="text-foreground/80 font-medium">Workplace application: </span>
                      {app.applicability}
                    </p>
                  )}
                </>
              )
              return app.url ? (
                <a key={app.title} href={app.url} className={cardClass}>
                  {inner}
                </a>
              ) : (
                <div key={app.title} className={cardClass}>
                  {inner}
                </div>
              )
            })}
          </div>

          <div className="relative flex flex-col items-center text-center gap-3 bg-card border border-border rounded-xl p-6">
            <span className="absolute top-3 right-3 text-[10px] uppercase tracking-[0.15em] text-primary font-semibold">
              Lab
            </span>
            <h3 className="text-foreground font-semibold text-sm leading-snug">
              {workbench.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
              {workbench.description}
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl border-t border-border/60 pt-3 mt-1">
              <span className="text-foreground/80 font-medium">Workplace application: </span>
              {workbench.applicability}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
