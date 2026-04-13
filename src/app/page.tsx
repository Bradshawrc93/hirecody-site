import Link from 'next/link'
import { Users, Settings, Cpu, ArrowUpRight, Send } from 'lucide-react'

const caseStudies = [
  {
    href: '/case-studies/support-org-from-zero',
    tag: 'Team Building & Scaling',
    title: 'Building a Support & Delivery Org from Zero',
    description:
      'How I grew a 6-person team into a 75+ person cross-functional organization across four countries.',
    icon: Users,
  },
  {
    href: '/case-studies/product-ops-post-acquisition',
    tag: 'Product Operations',
    title: 'Standing Up Product Operations Post-Acquisition',
    description:
      'Creating a product ops function from scratch during a multi-company healthtech rollup.',
    icon: Settings,
  },
  {
    href: '/case-studies/ai-in-the-workplace',
    tag: 'AI & Automation',
    title: 'Bringing AI Into the Workplace',
    description:
      'How I used AI tools to automate workflows, accelerate output, and lead adoption by example.',
    icon: Cpu,
  },
]

export default function Home() {
  return (
    <>
      {/* Hero — two column: left bio/links, right chat */}
      <section className="pt-28 pb-16 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-primary" />
          <span className="text-primary text-sm font-medium tracking-wide uppercase">
            R. Cody Bradshaw
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left — profile info, links, blurb */}
          <div className="flex flex-col">
            {/* Profile details */}
            <div className="text-sm text-foreground space-y-1 mb-6">
              <p>Austin, TX (open to remote)</p>
              <p>Sr. Manager, Product Ops @ Smarter Technologies</p>
              <p>7+ years in ops, support &amp; program leadership</p>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              I&apos;ve scaled a 6-person support team into a 75+ person
              cross-functional organization, stood up product operations during a
              multi-company acquisition, and built the financial models and
              reporting systems that executives rely on to make decisions.
              I&apos;m most effective when things are messy, undefined, and need
              someone to make them work.
            </p>
          </div>

          {/* Right — AI chat placeholder */}
          <div className="bg-card border border-border rounded-xl flex flex-col h-[320px]">
            {/* Chat header */}
            <div className="px-5 py-3 border-b border-border flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm font-medium text-foreground">Chat with AI Cody</span>
            </div>

            {/* Messages area */}
            <div className="flex-1 px-5 py-4 overflow-y-auto">
              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">C</span>
                </div>
                <div className="bg-secondary border border-border rounded-lg rounded-tl-none px-4 py-2.5 max-w-[85%]">
                  <p className="text-sm text-foreground leading-relaxed">
                    Hi there! Feel free to ask me any questions — I&apos;m trained by Cody.
                  </p>
                </div>
              </div>
            </div>

            {/* Input area */}
            <div className="px-4 py-3 border-t border-border">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Ask me about Cody's experience..."
                  disabled
                  className="flex-1 bg-background border border-border rounded-lg px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 disabled:opacity-60 disabled:cursor-not-allowed"
                />
                <button
                  disabled
                  className="shrink-0 bg-primary text-primary-foreground p-2 rounded-lg hover:bg-primary/90 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-24 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-primary" />
          <span className="text-primary text-sm font-medium tracking-wide uppercase">
            Case Studies
          </span>
        </div>

        <div className="space-y-3">
          {caseStudies.map((study) => {
            const Icon = study.icon
            return (
              <Link
                key={study.href}
                href={study.href}
                className="group flex items-center gap-5 bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-foreground font-semibold text-sm leading-snug">
                      {study.title}
                    </h3>
                    <span className="hidden sm:inline text-xs text-muted-foreground bg-secondary border border-border rounded-full px-2.5 py-0.5 shrink-0">
                      {study.tag}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed truncate">
                    {study.description}
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </>
  )
}
