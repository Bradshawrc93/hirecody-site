import { TrackedChatFrame } from '@/components/tracked'
import { Typewriter } from '@/components/typewriter'
import { Artifacts } from '@/components/artifacts'

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
              AI{' '}
              <Typewriter
                words={['Engineering', 'Operations', 'Transformation Leading', 'Strategy']}
              />
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
            <div className="text-muted-foreground text-sm leading-relaxed space-y-3">
              <p>
                I&apos;ve spent the last seven-plus years in operations
                across enterprise tech and healthcare. Most of that was at
                Thoughtful AI — I joined as the founding post-go-live hire,
                built customer support from scratch into a 75+ person team
                across three continents, then moved into senior product ops
                working with the CPO on product and engineering strategy.
              </p>
              <p>
                The work I get pulled into is usually the messy, cross-team
                stuff nobody else owns — standing up 24/7 support, scaling
                offshore delivery, migrating off bad tools, integrating
                teams through an M&amp;A. What ties it together is the
                structure underneath: org design, SLAs, KPIs, ceremonies,
                governance, capacity forecasting — the boring stuff that
                keeps a fast-scaling company from falling over.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-foreground font-semibold text-sm tracking-wide uppercase mb-3">
              What I&apos;m Offering
            </h2>
            <div className="text-muted-foreground text-sm leading-relaxed space-y-3">
              <p>
                I think about AI as the layer a company is built on, not a
                productivity tool you bolt on top. The version I want to
                build routes work to agents before people, replaces tribal
                knowledge with shared skill libraries, and runs evals
                alongside the usual KPIs.
              </p>
              <p>
                How this is different: the runbooks, skill libraries,
                frameworks, and eval systems I bring build on each other
                across engagements rather than starting from scratch each
                time.
              </p>
              <p>
                I&apos;m looking for a senior role where rebuilding how the
                business runs on AI is the actual job, not a side project —
                Chief of Staff, Head of Operations, or AI Transformation
                Lead at a company moving fast.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:hidden mt-10">{chatWidget}</div>
      </section>

      {/* Artifacts */}
      <section id="artifacts" className="pb-24 px-6 max-w-5xl mx-auto scroll-mt-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-primary" />
          <span className="text-primary text-sm font-medium tracking-wide uppercase">
            Artifacts
          </span>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-4 max-w-2xl">
          Things I&apos;ve built and shipped.
        </h2>

        <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-3xl mb-8">
          Live apps probing the fragmented-AI problem, plus case studies from
          operating roles. Each one is poke-around-able — click in.
        </p>

        <Artifacts />
      </section>

      {/* Ask the Chatbot */}
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
          The chatbot knows the details — how each artifact is built, what
          I&apos;d change next, and how any of this would map to a problem
          you&apos;re thinking about.
        </p>

        <TrackedChatFrame
          ctx="home_deep"
          src="https://chatbot.hirecody.dev/?ctx=home_deep"
          title="Chat with AI Cody"
          className="bg-card border border-border rounded-2xl overflow-hidden h-[520px]"
        />
      </section>
    </>
  )
}
