import { ArrowUp, ArrowUpRight, MessageSquare, Package, Play, Server } from 'lucide-react'

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
      'A conversational agent trained on me and every app in this portfolio — but also a model for the internal assistant every company needs: one that can answer frequently asked questions, surface company info, and stay current on tools and progress without anyone having to remember where the doc lives.',
    applicability:
      'The pattern behind an internal helpdesk bot, an employee onboarding assistant, or a customer support agent — and the front door for anyone who wants to know what already exists before they go build their own version.',
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
      'Product release notes for Obs, Forge, and the Chatbot — a running changelog paired with on-demand training so teams can see what shipped and get up to speed on how to use it.',
    applicability:
      'Solves the two complaints every product team hears: "nobody reads the release notes," and "GTM wants to know what the product can and can\u2019t do." Beacon is the source of truth for both, without relying on a calendar invite.',
    url: 'https://beacon.hirecody.dev',
  },
]

const scenarioSteps = [
  {
    step: '01',
    title: 'A single pane for usage, cost, and errors across every AI workflow.',
    body:
      'Support\u2019s chatbot, sales\u2019s summarizer, engineering\u2019s review assistant — all reporting into one dashboard. Finance can finally connect spend to a workflow owner, and leadership can see duplication before it compounds.',
    app: 'Obs',
  },
  {
    step: '02',
    title: 'Operators shipping automation without waiting on engineering.',
    body:
      'The support lead notices a manual Monday report. They describe it in plain language, wire up a schedule, and it runs on its own cadence — reusable by teammates instead of trapped in a Slack DM.',
    app: 'Forge',
  },
  {
    step: '03',
    title: 'Release notes that nobody has to chase.',
    body:
      'When a new capability ships, it gets packaged as a short release note and on-demand training. GTM, support, and CS see what the product can and can\u2019t do without waiting for a calendar invite.',
    app: 'Beacon',
  },
  {
    step: '04',
    title: 'The internal assistant for everything company-related.',
    body:
      'Employees ask the chatbot what a tool does, where a policy lives, what shipped last week, or how a process works. It\u2019s grounded in the same knowledge base every other tool reports into — so the answer is actually current.',
    app: 'Chatbot',
  },
]

export default async function Apps() {
  const stats = await getStats()

  return (
    <>
      {/* Intro */}
      <section className="pt-28 pb-12 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-primary" />
          <span className="text-primary text-sm font-medium tracking-wide uppercase">
            Working Ideas
          </span>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] text-balance mb-6 max-w-3xl">
          Probes for a problem I keep seeing.
        </h1>

        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl">
          I love solving problems, and I love implementing AI. What I keep
          running into — in my own work and in conversations with other
          operators — is that AI inside organizations is fragmented. Every
          team is using it differently, often with different tools, prompts,
          and definitions of &ldquo;working.&rdquo;
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-10">
          <div>
            <h2 className="text-foreground font-semibold text-sm tracking-wide uppercase mb-3">
              Cost-Benefit Fog
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Even with an enterprise plan, how are you really tracking the
              cost-benefit across how AI is being implemented? When Sales,
              Support, and Engineering each stand up their own workflow, who
              owns the ROI picture? Who sees the duplication?
            </p>
          </div>
          <div>
            <h2 className="text-foreground font-semibold text-sm tracking-wide uppercase mb-3">
              Learning Silos
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              When one team cracks a real automation or lands on a pattern
              that works, how does that learning travel to the rest of the
              org? In most companies, it doesn&apos;t — or it travels slowly,
              through Slack threads and hallway conversations.
            </p>
          </div>
        </div>
      </section>

      {/* What good looks like — scenario */}
      <section className="pb-16 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-primary" />
          <span className="text-primary text-sm font-medium tracking-wide uppercase">
            What Good Looks Like
          </span>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-6 max-w-2xl">
          A small, honest scenario.
        </h2>

        <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-3xl mb-8">
          Imagine a mid-sized SaaS company. Support, Sales, and Engineering
          have each started building their own AI workflows over the last
          quarter. Leadership wants to know: is it working? Are we
          duplicating effort? Where should we invest next? Here&apos;s what
          an AI enablement function running well looks like — and the probe
          I&apos;ve built alongside each piece.
        </p>

        <ol className="space-y-5">
          {scenarioSteps.map((s) => (
            <li
              key={s.step}
              className="flex gap-5 bg-card border border-border rounded-xl p-5 md:p-6"
            >
              <span className="text-primary font-semibold text-sm tracking-[0.15em] shrink-0">
                {s.step}
              </span>
              <div className="flex-1">
                <h3 className="text-foreground font-semibold text-base leading-snug mb-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.body}
                </p>
                <p className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold mt-3">
                  My probe: {s.app}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* The probes — apps */}
      <section id="apps" className="pb-16 px-6 max-w-5xl mx-auto scroll-mt-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-primary" />
          <span className="text-primary text-sm font-medium tracking-wide uppercase">
            The Probes
          </span>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-4 max-w-2xl">
          The pieces behind the scenario.
        </h2>

        <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-3xl mb-6">
          Each one is live — click in and poke around. Here&apos;s what
          other visitors have tried so far:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
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
          id="probes"
          className="relative rounded-2xl border border-border/60 p-5 md:p-8 space-y-4 scroll-mt-24"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(43, 43, 43, 0.08) 1px, transparent 1px)',
            backgroundSize: '18px 18px',
            backgroundColor: 'rgba(241, 233, 221, 0.35)',
          }}
        >
          <a
            href={obs.url}
            className="group relative flex flex-col items-center text-center gap-3 bg-card hover:bg-[#E4D8C5] hover:shadow-[inset_0_2px_6px_rgba(0,0,0,0.08)] border border-border rounded-xl p-6 transition-all duration-200"
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
            <span className="inline-flex items-center gap-1 text-primary text-xs font-medium mt-1 group-hover:translate-x-0.5 transition-transform">
              Open Obs <ArrowUpRight size={12} strokeWidth={2.25} />
            </span>
          </a>

          <div className="hidden sm:grid grid-cols-3 gap-4 my-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex justify-center">
                <ArrowUp
                  size={36}
                  strokeWidth={2.25}
                  className="text-primary"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {feederApps.map((app) => {
              const cardClass =
                'group relative flex flex-col gap-3 bg-card hover:bg-[#E4D8C5] hover:shadow-[inset_0_2px_6px_rgba(0,0,0,0.08)] border border-border rounded-xl p-5 h-full transition-all duration-200'
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
                  {app.url && (
                    <span className="inline-flex items-center gap-1 text-primary text-xs font-medium mt-auto pt-2 group-hover:translate-x-0.5 transition-transform">
                      Try {app.title} <ArrowUpRight size={12} strokeWidth={2.25} />
                    </span>
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
        </div>
      </section>

      {/* Chatbot iframe */}
      <section className="pb-24 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-primary" />
          <span className="text-primary text-sm font-medium tracking-wide uppercase">
            Ask the Chatbot
          </span>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-4 max-w-2xl">
          Want to go deeper? Ask.
        </h2>

        <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-3xl mb-6">
          The chatbot knows the details — how each app is built, what
          I&apos;d change next, and how any of this would map to a problem
          you&apos;re thinking about.
        </p>

        <div className="bg-card border border-border rounded-2xl overflow-hidden h-[520px]">
          <iframe
            src="https://chatbot.hirecody.dev/?ctx=projects"
            title="Chat with AI Cody"
            className="w-full h-full border-0"
          />
        </div>
      </section>
    </>
  )
}
