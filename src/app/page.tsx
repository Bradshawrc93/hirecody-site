import { Briefcase } from 'lucide-react'
import { TrackedChatFrame } from '@/components/tracked'

type TimelineEntry = {
  role: string
  company: string
  location?: string
  dates: string
  summary: string
}

const timeline: TimelineEntry[] = [
  {
    role: 'Senior Manager, Product Operations',
    company: 'Thoughtful AI / Smarter Technologies',
    location: 'Austin, TX (remote)',
    dates: 'Jun 2025 – Present',
    summary:
      'Partnered with the CPO on strategy across five product workstreams. Designed the product + engineering operating framework adopted by the combined org after the Thoughtful / Access Healthcare merger.',
  },
  {
    role: 'Head of Customer Support & Engineering Operations',
    company: 'Thoughtful AI',
    location: 'Austin, TX (remote)',
    dates: 'Mar 2024 – Jun 2025',
    summary:
      'Ran 24/7 enterprise support (~7-min first response vs. 15-min SLA) and scaled the offshore delivery org from ~25 to ~75 engineers across LATAM and Eastern Europe.',
  },
  {
    role: 'Customer Support Analyst',
    company: 'Thoughtful AI',
    location: 'Austin, TX (remote)',
    dates: 'Nov 2022 – Mar 2024',
    summary:
      'Founding support hire — stood up the service desk, MTTR dashboard, and triage workflow from scratch, then consolidated a fragmented support stack onto a single service platform.',
  },
  {
    role: 'Software Implementation Consultant',
    company: 'Bureau Veritas',
    location: 'Remote',
    dates: 'Feb 2022 – Nov 2022',
    summary:
      'Ran simultaneous SaaS implementations for 10+ government clients and standardized the onboarding and training materials that were then rolled out org-wide.',
  },
  {
    role: 'Project Manager',
    company: 'CDW — ServiceNow Solutions',
    location: 'Remote',
    dates: 'May 2021 – Feb 2022',
    summary:
      'Managed 10+ concurrent ServiceNow deployments against scope, timeline, and budget. Owned P&L, resource allocation, and executive stakeholder communication across technical delivery partnerships.',
  },
  {
    role: 'Technical Trainer',
    company: 'HospitalPortal',
    location: 'Remote',
    dates: 'Oct 2018 – Jan 2020',
    summary:
      'Designed onboarding programs for 15 large healthcare accounts, cutting time-to-value. Built the online knowledge base and video library that became the default onboarding path for new clients.',
  },
]

const highlights = [
  'Scaled an offshore delivery org from ~25 to ~75 engineers across LATAM and Eastern Europe.',
  'Designed the product and engineering operating framework the combined org adopted after the Thoughtful / Access Healthcare merger — covering the recurring ceremonies from quarterly planning down to team standups.',
  "The person leadership turns to for ambiguous, cross-team problems that sit between functions — most recently as the CPO's operational partner across five product workstreams, co-authoring board materials and keeping every workstream on track week over week.",
  'Championed internal automations the team used day to day — a dependency-detection tool, a live-agent bug-catcher, and a Jira automation that provisioned projects and boards for every signed customer deal.',
  'Founding support hire — stood up the service desk, MTTR dashboard, and triage workflow from scratch, then consolidated a fragmented support stack onto a single service platform.',
  'B.S., Information Technology — Colorado State University Global. CSM, ITIL Foundation, Lean Six Sigma White Belt.',
]

export default function Home() {
  const chatWidget = (
    <TrackedChatFrame
      ctx="home"
      src="https://chatbot.hirecody.dev/?ctx=home"
      title="Chat with AI Cody"
      className="bg-card border border-border rounded-xl overflow-hidden h-[380px]"
    />
  )

  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 px-6 max-w-5xl mx-auto">
        <hr className="border-t border-border mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <div className="text-sm text-foreground space-y-1 mb-12">
              <p>Austin, TX (open to remote)</p>
              <p>Sr. Manager, Product Ops @ Smarter Technologies</p>
              <p>7+ years in ops, support &amp; program leadership</p>
            </div>

            <h1 className="text-foreground text-3xl md:text-4xl font-semibold tracking-tight leading-tight mt-8">
              Turning Ambiguity Into Outcomes.
            </h1>
          </div>

          <div className="hidden lg:block">{chatWidget}</div>
        </div>
      </section>

      {/* Narrative */}
      <section className="pb-16 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <div>
            <h2 className="text-foreground font-semibold text-sm tracking-wide uppercase mb-3">
              Introducing Cody Bradshaw
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A senior operations leader with 7+ years across enterprise tech
              and healthcare. Most recently spent three and a half years at
              Thoughtful AI — joined as the founding support hire and
              progressed into a senior product role partnered with the CPO
              across product and engineering strategy. Across my career
              I&apos;ve been the person leadership turns to for the
              ambiguous, cross-team problems that sit between functions, and
              I see them through to resolution.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold text-sm tracking-wide uppercase mb-3">
              What I Can Offer
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Senior operations leadership with AI adoption baked in. I
              design the operating frameworks fast-scaling orgs run on —
              org design, SLA and KPI, ceremonies, governance — and I&apos;ve
              stood up 24/7 support, scaled offshore delivery, led SaaS
              tooling migrations, and integrated product and engineering
              through an M&amp;A. Alongside all of that I wire AI-assisted
              workflows and automations into the day-to-day. I&apos;m looking
              for a senior operations role where helping a business adopt AI
              and prove its impact is part of the scope.
            </p>
          </div>
        </div>

        <div className="lg:hidden mt-10">{chatWidget}</div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="pb-24 px-6 max-w-5xl mx-auto scroll-mt-24">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-px bg-primary" />
          <span className="text-primary text-sm font-medium tracking-wide uppercase">
            Career
          </span>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-12 max-w-2xl">
          The road so far.
        </h2>

        <div className="relative">
          {/* Spine */}
          <div
            aria-hidden
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2"
          />

          <ul className="space-y-10 md:space-y-14">
            {timeline.map((entry, i) => {
              const onLeft = i % 2 === 0
              return (
                <li key={`${entry.company}-${entry.dates}`} className="relative">
                  {/* Node */}
                  <span
                    aria-hidden
                    className="absolute left-4 md:left-1/2 top-3 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-background border border-border shadow-sm"
                  >
                    <Briefcase size={14} className="text-primary" strokeWidth={2} />
                  </span>

                  <div
                    className={`pl-14 md:pl-0 md:w-1/2 ${
                      onLeft ? 'md:pr-12' : 'md:ml-auto md:pl-12'
                    }`}
                  >
                    <div
                      className={`bg-card border border-border rounded-xl p-5 md:p-6 ${
                        onLeft ? 'md:text-right' : ''
                      }`}
                    >
                      <p className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold mb-2">
                        {entry.dates}
                      </p>
                      <h3 className="text-foreground font-semibold text-base leading-snug">
                        {entry.role}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {entry.company}
                        {entry.location ? ` · ${entry.location}` : ''}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                        {entry.summary}
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Resume at a glance */}
      <section className="pb-24 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-primary" />
          <span className="text-primary text-sm font-medium tracking-wide uppercase">
            Resume at a Glance
          </span>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-8 max-w-2xl">
          A few things worth pulling out.
        </h2>

        <ul className="space-y-4 max-w-3xl text-muted-foreground text-sm md:text-base leading-relaxed list-disc pl-5 marker:text-primary">
          {highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </section>

      {/* Apps CTA */}
      <section className="pb-24 px-6 max-w-5xl mx-auto">
        <a
          href="/apps"
          className="group block bg-card border border-border rounded-2xl p-6 md:p-10 hover:border-primary/40 transition-colors duration-200"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <p className="text-primary text-xs font-medium tracking-[0.15em] uppercase mb-3">
                Keep Going
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground leading-tight mb-3">
                Check out some of my recent side projects.
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                A set of working samples built to probe at the fragmented-AI
                problem — and to show what I&apos;d build next if given the
                room.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">
              Explore working ideas →
            </span>
          </div>
        </a>
      </section>
    </>
  )
}
