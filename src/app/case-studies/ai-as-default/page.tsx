import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { Section } from '@/components/case-study-layout'
import { TrackedLink } from '@/components/tracked'
import {
  ArtboardFrame,
  DiagramA,
  DiagramB,
} from '@/components/case-study-graphics/ai-as-default-diagrams'

export const metadata = {
  title: "AI as Default: Centralizing the AI Org Before Shadow AI Eats It | Cody Bradshaw",
  description:
    "What AI infrastructure looks like when it stops being a tool layer and becomes a substrate layer. A v0.5 asset pack called Paired, plus the organizational and financial case for centralizing the AI org now.",
}

export default function AiAsDefault() {
  return (
    <article className="pt-28 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/#artifacts"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
          Back to artifacts
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-primary" />
          <span className="text-primary text-sm font-medium tracking-wide uppercase">
            Case Study
          </span>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] text-balance mb-3">
          AI as Default
        </h1>
        <p className="font-serif text-xl md:text-2xl text-muted-foreground/90 italic leading-snug mb-6">
          Or: how companies will centralize the AI org before shadow AI eats it.
        </p>

        <p className="text-muted-foreground text-lg leading-relaxed mb-12">
          A case study on what AI infrastructure looks like when it stops being
          a tool layer and becomes a substrate layer. For leaders trying to
          figure out where to start an AI transformation in their company — and
          for the AI Ops practitioners who&apos;ll have to do the actual work.
        </p>

        <div className="space-y-12">
          <div className="lg:relative lg:left-1/2 lg:-translate-x-1/2 lg:w-[min(1400px,calc(100vw-3rem))]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <ArtboardFrame
                sheet="A · FINAL"
                caption={{
                  bold: 'ONE CENTRAL CORE.',
                  rest: 'Every role, every skill, every model decision — owned by the company.',
                }}
              >
                <DiagramA />
              </ArtboardFrame>
              <ArtboardFrame
                sheet="B · FINAL"
                caption={{
                  bold: 'SHADOW AI.',
                  rest: 'No bridge between the people doing the work and the people accountable for it.',
                }}
              >
                <DiagramB />
              </ArtboardFrame>
            </div>
          </div>

          <Section title="The hook">
            <p>
              In a few years, AI won&apos;t be a tool a company adopts.
              It&apos;ll be the default layer the company runs on — the way
              networking, identity, and databases became substrates over the
              last thirty years. Invisible infrastructure that everything else
              assumes is there.
            </p>
            <p>
              Getting there isn&apos;t a model decision. The model is the easy
              part — they&apos;re interchangeable, and they get swapped
              quarterly. The hard part is the layer above the model: a
              centralized core of skills, libraries, role-specific contexts,
              and observability that the whole company runs through.
              Centralizing the AI org is the move most companies haven&apos;t
              made yet, and it&apos;s the move that separates organizations
              doing AI well in 2027 from organizations still paying for eleven
              shadow subscriptions on personal cards.
            </p>
            <p>
              A real AI Ops function manages this core the same way IT manages
              the network. They run continuous evaluations (with tools like{' '}
              <TrackedLink
                event="artifact_click"
                eventProps={{ artifact: 'lens', kind: 'app', source: 'case_study_ai_as_default' }}
                href="https://hirecody-lens.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-semibold underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground transition-colors"
              >
                Lens
              </TrackedLink>
              ) to keep skills on the cheapest model that does the job well.
              They run the observability layer over the whole substrate (with
              tools like{' '}
              <TrackedLink
                event="artifact_click"
                eventProps={{ artifact: 'obs', kind: 'app', source: 'case_study_ai_as_default' }}
                href="https://obs.hirecody.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-semibold underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground transition-colors"
              >
                Obs
              </TrackedLink>
              ) — usage, cost, latency, errors, model mix — so the core can
              actually be operated, not just deployed. They own the registry
              of skills, the assignment of models, the access boundaries
              between roles, and the observability into who&apos;s using what.
            </p>
            <p>
              This is the step. If you&apos;re an exec wondering where to start
              with AI transformation, or an ops leader who senses the company
              is &ldquo;doing AI&rdquo; without actually being organized about
              it — this is what the next layer looks like.
            </p>
          </Section>

          <Section title="The diagnosis: shadow AI is a substrate vacuum">
            <p>
              Most companies aren&apos;t failing to use AI. They&apos;re using
              it everywhere, privately. Marcus rewrites status updates in his
              ChatGPT account. Maya keeps a Notion page of thirty tuned prompts
              she won&apos;t share. Devon&apos;s Cursor rules live on his
              laptop. Priya has a Claude account she uses for board prep. None
              of them are doing anything wrong. None of them are doing anything
              together.
            </p>
            <p>
              When any one of them leaves, the AI half of their job leaves with
              them. Their replacement starts from scratch and builds their own
              private substrate. The cycle restarts.
            </p>
            <p>
              This isn&apos;t a strategy problem — it&apos;s a vacuum. Without
              a centralized core, every individual builds a personal one. The
              company ends up with N substrates, all incompatible, all locked
              inside individual humans, all unmanaged, all uninstrumented. That
              is the situation centralizing the AI org is designed to fix.
            </p>
          </Section>

          <Section title="How this might go: two paths">
            <p>
              How companies actually get to &ldquo;AI as default&rdquo; probably
              plays out one of two ways. Worth thinking about now, because the
              choice shapes what you build today.
            </p>
            <p>
              <strong className="text-foreground">
                Path A: Provider lock-in.
              </strong>{' '}
              The company picks a side — Anthropic, OpenAI, or Google — and
              commits, the same way most companies committed to AWS or Azure
              for cloud. The provider eventually ships its own version of an
              &ldquo;AI workbench&rdquo; inside its console: skill management,
              role-based access, team observability, evaluation tooling. The
              company gets a polished, integrated experience inside one
              ecosystem. The cost is vendor lock-in and the reality that the
              company&apos;s substrate now belongs to a vendor.
            </p>
            <p>
              <strong className="text-foreground">
                Path B: Provider-agnostic central core.
              </strong>{' '}
              The company keeps the substrate in-house. Skills, role configs,
              usage logs, and evaluation pipelines live in a registry the
              company owns. Models are swappable underneath. The cost is more
              in-house ops work; the benefit is portability and the reality
              that the substrate outlives any one provider&apos;s product
              cycle.
            </p>
            <p>
              Most likely, real companies will end up somewhere in between —
              anchored to one provider but keeping the registry independent
              enough to swap if needed. The strategic decision isn&apos;t
              either-or; it&apos;s about how much of your AI substrate
              you&apos;re willing to let live inside someone else&apos;s
              product.
            </p>
            <p>
              The case for keeping it in-house, even partially: provider
              consoles today don&apos;t show the org chart. Anthropic can tell
              you how many tokens you used last month. It can&apos;t tell you
              which skill ran, by which role, with what outcome, or what
              fraction of that role&apos;s recurring work the AI is actually
              carrying. That gap will close partially over the next 18 months,
              but the strategic question of who owns the substrate is durable
              regardless.
            </p>
          </Section>

          <Section title="What I built, and what it isn't">
            <p>
              I built a v0.5 of what an AI Core could look like, called{' '}
              <strong className="text-foreground">Paired</strong>. It&apos;s a
              downloadable asset pack — a CLI wizard, a local MCP server, a
              small observability dashboard, and a sample five-role org. You
              can run it on a laptop, in fifteen minutes, against the Anthropic
              API, and feel the shape of the idea working end-to-end.
            </p>
            <p>I want to be direct about what it is and what it isn&apos;t.</p>
            <p>
              Paired is a wireframe. It&apos;s the smallest possible version of
              the bigger picture above. It&apos;s enough to make the substrate
              idea legible — you can see skills firing, watch the dashboard
              update, switch between role-specific coworkers, and start to feel
              why this layer matters. It&apos;s not a finished product, and
              the version you can download today won&apos;t solve a real
              company&apos;s AI problem on its own.
            </p>
            <p>
              It&apos;s also opinionated in ways a real implementation
              shouldn&apos;t be. A real version of this — built with more time,
              real resources, and feedback from operators in real companies —
              would look different depending on industry, company size,
              regulatory environment, and which provider they picked (or
              didn&apos;t). A healthcare staffing company&apos;s version of
              this looks nothing like a CRE SaaS company&apos;s. The shape of
              the substrate has to fit the shape of the work.
            </p>
            <p>
              Treat Paired as a tasting menu. The thinking behind it is what
              matters. If you download it and it sparks a conversation about
              what the full version could look like at your company, that&apos;s
              the conversation I&apos;m trying to have.
            </p>

            <figure className="space-y-2 pt-2">
              <Image
                src="/case-studies/ai-as-default-cli.png"
                alt="The Paired CLI walking through role and skill configuration."
                width={1600}
                height={1000}
                sizes="(min-width: 768px) 768px, 100vw"
                className="w-full h-auto rounded-xl border border-border"
              />
              <figcaption className="text-sm text-muted-foreground">
                The Paired CLI walking through role and skill configuration.
                Five roles, populated from sample team journals, in under
                fifteen minutes.
              </figcaption>
            </figure>

            <figure className="space-y-2 pt-2">
              <Image
                src="/case-studies/ai-as-default-dashboard.png"
                alt="The Paired observability dashboard showing skill calls by role, model usage, and cost."
                width={1600}
                height={1000}
                sizes="(min-width: 768px) 768px, 100vw"
                className="w-full h-auto rounded-xl border border-border"
              />
              <figcaption className="text-sm text-muted-foreground">
                The local dashboard showing skill calls by role, model usage,
                and cost over the last seven days.
              </figcaption>
            </figure>
          </Section>

          <Section title="How it'd actually be used">
            <p>The setup, in plain terms:</p>
            <ol className="list-decimal pl-5 marker:text-primary space-y-3">
              <li>
                AI Ops downloads the repo, runs{' '}
                <code className="text-foreground bg-card border border-border rounded px-1.5 py-0.5 text-[13px]">
                  npx paired-setup
                </code>
                .
              </li>
              <li>
                The wizard walks them through five roles — title, occupants,
                default model. Defaults to Haiku for cost; AI Ops can override
                per role or per skill.
              </li>
              <li>
                For each role, AI Ops feeds in last week&apos;s work journals
                from each teammate (the wizard supports paste-a-week,
                conversational, or by-title input methods). The wizard analyzes
                and proposes skills.
              </li>
              <li>
                AI Ops reviews and confirms each skill, optionally bumping its
                model or pointing it at a third-party tool the team uses
                (Notion, HubSpot, Linear, etc.).
              </li>
              <li>
                The wizard generates skill files, populates a local SQLite
                database, prints a Claude Desktop config snippet, and a
                per-occupant cheat sheet.
              </li>
              <li>
                Each teammate pastes the snippet into their Claude Desktop,
                restarts, and now has their role&apos;s AI coworker available
                as MCP tools.
              </li>
              <li>
                AI Ops opens the localhost dashboard and watches usage roll in.
              </li>
            </ol>
            <p>
              Critically, this only works well if the company has someone
              playing the AI Ops role. Without that — without one person owning
              the core, the skills, the evaluations, the model choices — the
              substrate decays into the same shadow AI mess it was supposed to
              replace. Most AI Ops practitioners reading this likely have their
              own vision of what the AI Core should look like. Paired is a
              sketch of mine.
            </p>
            <p>
              I&apos;d be honestly unsurprised if Anthropic eventually ships a
              version of this directly inside their console — a workbench an
              admin can use to roll out their company&apos;s AI org, with
              metrics on which roles are using which skills, who&apos;s leaning
              on AI heavily, and who might need coaching to get there. If that
              happens, Paired&apos;s value isn&apos;t the product; it&apos;s
              the thinking about what the layer should look like. The
              companies that started building toward this shape early will be
              the ones who slot into the workbench cleanly when it arrives.
            </p>
          </Section>

          <Section title="Why this matters: the financial argument">
            <p>
              Transforming to AI as the default isn&apos;t just a tooling
              change. It&apos;s a change in how roles get built out. New hires
              don&apos;t start by learning how their predecessor did the job;
              they start by inheriting a working set of skills and contributing
              the next ones. The role&apos;s design becomes &ldquo;what
              fraction of this work can I express as a skill in the
              core?&rdquo; The target ceiling is around 80% — the remaining
              20% is judgment, relationships, and decisions, which is permanent
              human territory.
            </p>
            <p>
              When this works, four things happen, and they compound:
            </p>
            <div className="space-y-5">
              <p>
                <strong className="text-foreground">
                  1. Direct substitution: tokens are cheaper than human time.
                </strong>{' '}
                A delivery status update Marcus writes manually takes 45
                minutes — call it $60 fully loaded. The same update produced
                by his AI coworker on Haiku costs ~$0.30 in tokens plus 5
                minutes of his review at ~$7. That&apos;s an 88% reduction on
                a recurring weekly task. The methodology — salary-derived
                hourly rate, average task duration, token cost subtracted — is
                the same one I&apos;m building out in Obs.
              </p>
              <p>
                <strong className="text-foreground">
                  2. Repeatable quality has its own dollar value.
                </strong>{' '}
                When Marcus writes a customer status update, quality is a
                function of his energy that day. When his AI coworker writes
                it, quality is a function of the skill — and the skill is the
                same Tuesday at 9am as Friday at 5pm. Variance is expensive.
                It shows up as escalations, rework, and the meta-tax of every
                reviewer asking &ldquo;is this version okay this time?&rdquo;
              </p>
              <p>
                <strong className="text-foreground">
                  3. Centralized knowledge collapses onboarding.
                </strong>{' '}
                When Maya leaves Hartley Lane today, her replacement starts at
                zero — her thirty tuned prompts go with her, her HubSpot
                conventions are in her head, her playbook is institutional
                knowledge that exists in one person. With a central core, the
                new SDR inherits a working system on day one. Time-to-productive
                drops from the industry-standard sales-role ramp (3–6 months)
                to weeks.
              </p>
              <p>
                <strong className="text-foreground">
                  4. The thirty minutes you didn&apos;t spend.
                </strong>{' '}
                The hour Marcus didn&apos;t spend rewriting the same update
                three times is an hour he spent on judgment calls, customer
                relationships, escalations — work nobody else can do. That
                hour isn&apos;t free. It&apos;s worth more than the dollar
                value of his time. It&apos;s worth the opportunity cost of
                what only he can do. This is also why the 80% ceiling matters:
                the AI coworker isn&apos;t replacing the work, it&apos;s
                clearing the deck for the work worth being a person for.
              </p>
            </div>
            <p>
              <strong className="text-foreground">The honest part.</strong>{' '}
              The math compounds, but it isn&apos;t free. There&apos;s setup
              time. There&apos;s an AI Ops function the company has to staff
              or absorb. There&apos;s the cost of getting skills right — bad
              skills produce confident-sounding garbage that costs more to
              clean up than to write from scratch. The financial case is real,
              and it&apos;s still real after you subtract those costs. But
              anyone selling you a turnkey ROI number is selling you something
              else.
            </p>
            <p>
              Run your own math. The methodology is in Obs. The starting
              numbers are in this section. The compounding is yours to project.
            </p>
          </Section>

          <Section title="Try it yourself">
            <p>
              What you need: Anthropic API key, Claude Desktop, Node 20+. How
              long: under 15 minutes.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <TrackedLink
                event="paired_download_click"
                eventProps={{ asset: 'repo' }}
                href="https://github.com/Bradshawrc93/Paired"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-foreground text-background text-sm font-medium px-4 py-2 rounded-lg hover:bg-foreground/85 transition-colors duration-200"
              >
                Download Paired (v0.5 asset pack)
              </TrackedLink>
              <TrackedLink
                event="paired_download_click"
                eventProps={{ asset: 'sample_data' }}
                href="https://github.com/Bradshawrc93/Paired/tree/main/Hartley%20Lane%20sample%20data"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-card border border-border text-foreground text-sm font-medium px-4 py-2 rounded-lg hover:border-foreground/40 transition-colors duration-200"
              >
                Download the Hartley Lane sample data
              </TrackedLink>
            </div>
            <p>
              Got stuck? That&apos;s useful — tell me. Paired is a v0.5
              wireframe and the rough edges are real. If something broke, was
              unclear, or made you think &ldquo;this is close but missing
              X,&rdquo; that&apos;s exactly the feedback that makes the next
              version better. Same goes if you got it running and want to talk
              through what the full version could look like at your company.
            </p>
          </Section>

          <Section title="About this">
            <p>
              This is part of a portfolio working through what AI infrastructure
              looks like as it becomes default rather than additive. The other
              pieces:
            </p>
            <ul className="list-disc pl-5 marker:text-primary space-y-2">
              <li>
                <TrackedLink
                  event="artifact_click"
                  eventProps={{ artifact: 'obs', kind: 'app', source: 'case_study_ai_as_default_about' }}
                  href="https://obs.hirecody.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-semibold underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground transition-colors"
                >
                  Obs
                </TrackedLink>{' '}
                — the observability platform that sits underneath everything
                else. Cost, latency, errors, token usage, and net cost-per-task
                across every skill, role, and model in the core. It&apos;s
                what makes the central core operable instead of theoretical —
                you can&apos;t run a substrate you can&apos;t see.
              </li>
              <li>
                <TrackedLink
                  event="artifact_click"
                  eventProps={{ artifact: 'lens', kind: 'app', source: 'case_study_ai_as_default_about' }}
                  href="https://hirecody-lens.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-semibold underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground transition-colors"
                >
                  Lens
                </TrackedLink>{' '}
                — continuous model evaluation. Keeping skills on the right
                model as providers ship and prices shift.
              </li>
            </ul>
            <p>
              Together they&apos;re the sketch of an AI Ops toolkit. Paired is
              the core. Obs is the observability layer that powers it. Lens is
              the quality layer. None are finished. All are real demonstrations
              of the thinking.
            </p>
            <p>
              If you&apos;re a leader trying to figure out what the AI org
              chart looks like at your company, or you saw something here that
              made you think &ldquo;I want to talk to whoever built this&rdquo;
              — that&apos;s the conversation I&apos;m trying to have.
            </p>
          </Section>

          <section className="bg-card border border-border rounded-2xl p-6 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-primary" />
              <span className="text-primary text-sm font-medium tracking-wide uppercase">
                Let&apos;s Get in Contact
              </span>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                If you&apos;re trying to figure out what the AI org chart looks
                like at your company — or you want to talk through what a real,
                full-fat version of Paired could look like for your team —
                that&apos;s the work I do.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-6">
              <TrackedLink
                event="contact_click"
                eventProps={{ location: 'case_study_ai_as_default', method: 'email' }}
                href="mailto:bradshawrc93@gmail.com?subject=AI%20as%20Default%20%E2%80%94%20let%27s%20talk"
                className="inline-flex items-center gap-2 bg-foreground text-background text-sm font-medium px-4 py-2 rounded-lg hover:bg-foreground/85 transition-colors duration-200"
              >
                Get in touch
              </TrackedLink>
              <TrackedLink
                event="contact_click"
                eventProps={{ location: 'case_study_ai_as_default', method: 'linkedin' }}
                href="https://www.linkedin.com/in/codybradshaw93/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-card border border-border text-foreground text-sm font-medium px-4 py-2 rounded-lg hover:border-foreground/40 transition-colors duration-200"
              >
                LinkedIn
              </TrackedLink>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}
