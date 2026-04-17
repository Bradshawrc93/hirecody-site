import { Server } from 'lucide-react'

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
    title: 'Portfolio Chat Bot',
    description:
      'A conversational agent on the site that knows my career story — recruiters talk to a digital twin instead of reading a static resume.',
    applicability:
      'Demonstrates retrieval-grounded chat and knowledge-base UX — the same pattern behind internal helpdesk bots, employee onboarding assistants, and customer support agents.',
    url: 'https://chatbot.hirecody.dev',
  },
  {
    tag: 'Adaptive Learning',
    title: '日本語 Trainer',
    description:
      'Adaptive Japanese tutor with AI-generated chapters, exercises, and a live tutor chat that evolves with my progress.',
    applicability:
      'The same adaptive framework could power monthly workforce training — auto-generating compliance refreshers, product updates, or role-specific upskilling content that adjusts to each employee.',
  },
  {
    tag: 'Automation',
    title: 'Workflow Forge',
    description:
      'Describe a recurring manual task in plain language — "every month I process invoice batches…" — and get back a complete workflow: the scripts, a step-by-step guide, and a single command to copy-paste into your terminal to run it.',
    applicability:
      'Turns tribal knowledge into executable automation. Any non-technical teammate can convert their own repetitive work into a shareable, running process without writing code.',
  },
  {
    tag: 'Local Models',
    title: 'Private AI Workbench',
    description:
      'An on-prem setup for running, evaluating, and continuously improving local models — benchmarking performance across models, tracking responses, and catching hallucinations over time. Specific shape still in ideation.',
    applicability:
      'Mission critical for companies that need AI fully in-house for data residency, compliance, or cost control — a playbook for standing up local models and keeping them trustworthy as they evolve.',
  },
]

export default function Home() {
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

        {/* Zone 1: Observability & Telemetry */}
        <div
          className="relative rounded-2xl border border-border/60 p-5 pt-12 md:p-8 md:pt-12 mb-6"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(43, 43, 43, 0.08) 1px, transparent 1px)',
            backgroundSize: '18px 18px',
            backgroundColor: 'rgba(241, 233, 221, 0.35)',
          }}
        >
          <span className="absolute top-3 left-4 text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-semibold bg-background/90 border border-border/60 rounded-full px-2.5 py-1">
            Observability &amp; Telemetry
          </span>

          <a
            href={obs.url}
            className="flex flex-col items-center text-center gap-3 bg-card hover:bg-[#E4D8C5] hover:shadow-[inset_0_2px_6px_rgba(0,0,0,0.08)] border border-border rounded-xl p-6 transition-all duration-200"
          >
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
        </div>

        {/* Zone 2: Applications */}
        <div
          className="relative rounded-2xl border border-border/60 p-5 pt-12 md:p-8 md:pt-12"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(43, 43, 43, 0.08) 1px, transparent 1px)',
            backgroundSize: '18px 18px',
            backgroundColor: 'rgba(241, 233, 221, 0.35)',
          }}
        >
          <span className="absolute top-3 left-4 text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-semibold bg-background/90 border border-border/60 rounded-full px-2.5 py-1">
            Applications
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {feederApps.map((app) => {
              const cardClass =
                'flex flex-col gap-3 bg-card hover:bg-[#E4D8C5] hover:shadow-[inset_0_2px_6px_rgba(0,0,0,0.08)] border border-border rounded-xl p-5 h-full transition-all duration-200'
              const inner = (
                <>
                  <div className="flex items-center justify-end">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground bg-secondary border border-border rounded-full px-2 py-0.5">
                      {app.tag}
                    </span>
                  </div>
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
        </div>
      </section>
    </>
  )
}
