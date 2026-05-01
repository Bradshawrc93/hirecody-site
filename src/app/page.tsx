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
                Senior operations leader with seven-plus years across
                enterprise tech and healthcare, now focused on the
                operational layer of AI transformation — how small and
                mid-sized companies redesign their workflows, decisions,
                and systems around AI as the default rather than bolting it
                onto how things used to work.
              </p>
              <p>
                The foundation is operating experience. I spent three and a
                half years at Thoughtful AI — joined as the founding
                post-go-live hire, progressed into a senior product
                operations role partnered with the CPO across product and
                engineering strategy. I&apos;m the person leadership turns
                to for the ambiguous, cross-team problems that sit between
                functions, and I see them through to resolution.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-foreground font-semibold text-sm tracking-wide uppercase mb-3">
              What I Can Offer
            </h2>
            <div className="text-muted-foreground text-sm leading-relaxed space-y-3">
              <p>
                An operations leader who treats AI as the substrate the
                company is organized around, not a productivity tool
                layered onto existing workflows. I design the operating
                frameworks fast-scaling orgs run on — org design, SLAs and
                KPIs, ceremonies, governance, capacity forecasting — and
                I&apos;ve stood up 24/7 support, scaled offshore delivery
                across three continents, led SaaS tooling migrations, and
                integrated product and engineering through an M&amp;A.
              </p>
              <p>
                What&apos;s different now: the operating system I&apos;m
                designing is AI-native by default. Workflows route to
                agents before they route to people. Skills libraries
                replace tribal knowledge. Eval systems sit alongside KPIs.
                The frameworks I bring — runbooks, skill libraries,
                operating frameworks, eval systems — compound across
                engagements rather than starting from scratch each time.
              </p>
              <p>
                I&apos;m looking for a senior role where rebuilding how the
                business operates around AI is the mandate, not a side
                project. Chief of Staff, Head of Operations, or AI
                Transformation Lead at a small or mid-sized company moving
                fast.
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
