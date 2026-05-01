import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { Section } from '@/components/case-study-layout'

export const metadata = {
  title: 'The AI Iceberg | Cody Bradshaw',
  description:
    'Why most companies only see the top 10% of what AI is becoming — and the gap that opens between the ones who go below the waterline and the ones who don’t.',
}

export default function AiIceberg() {
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

        <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] text-balance mb-6">
          The AI Iceberg: Why Most Companies Only See the Top 10%
        </h1>

        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
          You only see about 10% of an iceberg above the water. The rest is
          below, and it&apos;s where the real mass is.
        </p>

        <Image
          src="/case-studies/ai-iceberg-hero.png"
          alt="An iceberg diagram with surface, waterline, and submerged layers labeled"
          width={1672}
          height={941}
          priority
          sizes="(min-width: 768px) 768px, 100vw"
          className="w-full h-auto rounded-xl border border-border mb-12"
        />

        <div className="space-y-12">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>That&apos;s the right metaphor for AI right now.</p>
            <p>
              The conversation about AI in most companies is happening at the
              surface — ChatGPT prompts, Copilot suggestions, the occasional
              custom GPT. Above the waterline, there&apos;s a lot of activity
              and not much depth. Meanwhile, a small number of people and
              companies have gone underwater and found that the iceberg is
              enormous, structured, and mostly invisible to the people still
              floating at the top.
            </p>
            <p>
              The gap between those two groups is the most under-discussed
              business risk of the next five years.
            </p>
          </div>

          <Section title="The surface (above the waterline)">
            <p>This is where most professional AI usage lives today.</p>
            <ul className="list-disc pl-5 marker:text-primary space-y-3">
              <li>
                <strong className="text-foreground">Asking ChatGPT.</strong>{' '}
                Drafting an email, summarizing a doc, asking for an outline.
                Genuinely useful. Also genuinely surface-level. The
                interaction is single-turn, the output is disposable, and the
                user&apos;s mental model is &ldquo;AI is a smart search engine
                that writes.&rdquo;
              </li>
              <li>
                <strong className="text-foreground">
                  Using Copilot, Gemini, or whatever ships with the suite.
                </strong>{' '}
                Same shape. Slightly more integrated, same depth.
              </li>
              <li>
                <strong className="text-foreground">
                  Custom GPTs and saved prompts.
                </strong>{' '}
                A real step — the user has noticed the same problem keeps
                coming up and built a small reusable thing. Most professionals
                never get this far.
              </li>
            </ul>
            <p>
              If your company&apos;s AI strategy lives entirely above this
              line, you have a productivity story. You don&apos;t have a
              transformation story. The economics of your business are
              unchanged. You&apos;re just doing the same work slightly faster.
            </p>
          </Section>

          <Section title="The waterline (the transition)">
            <p>
              This is where the AI tooling layer lives — Cursor, Lovable,
              Zite, v0, Claude Code, Replit Agents. The waterline is the right
              place for these tools because they&apos;re the most visible part
              of &ldquo;real&rdquo; AI building, but they&apos;re also the
              shallowest layer of the deep work.
            </p>
            <p>
              These tools are excellent. They&apos;re the on-ramp that makes
              the depth accessible to people who aren&apos;t traditional
              engineers. A non-developer can describe an app and watch it
              materialize. A small team can ship things that would have
              required a frontend hire two years ago.
            </p>
            <p>
              But here&apos;s the thing nobody says out loud: using Lovable is
              not the same as building a company that runs on Lovable as a
              substrate. The first is a productivity boost. The second is
              operational redesign — and it&apos;s the difference between a
              company that generates a couple of internal tools and a company
              whose product team operates fundamentally differently.
            </p>
            <p>
              The waterline is where most ambitious operators currently stop.
              They&apos;ve built a few things, they feel productive, they
              think they&apos;re &ldquo;doing AI.&rdquo; They&apos;re not
              wrong — they&apos;ve just only seen the top of the iceberg.
            </p>
          </Section>

          <Section title="Below the waterline">
            <p>
              This is where the structure of the AI iceberg actually lives.
              It&apos;s also where almost no one is operating yet.
            </p>
            <div className="space-y-5">
              <p>
                <strong className="text-foreground">Workflow design.</strong>{' '}
                Not a prompt — a system of prompts that produces a reliable
                output for a recurring problem. The shift here is from &ldquo;I
                asked ChatGPT to do this once&rdquo; to &ldquo;this workflow
                runs every Monday and reports to a dashboard.&rdquo; The unit
                of work changes from interaction to artifact.
              </p>
              <p>
                <strong className="text-foreground">
                  Prompt systems and skill libraries.
                </strong>{' '}
                When you&apos;ve built more than a handful of workflows, you
                start noticing they share components — the same way of
                summarizing a transcript, the same approach to triaging a
                request, the same evaluation rubric. The right move is to
                extract those into reusable skills that live in a library. Now
                your AI usage is composable, not bespoke. This is where
                transportable assets start to exist.
              </p>
              <p>
                <strong className="text-foreground">Harnesses.</strong> A
                harness is the scaffolding around an LLM call that makes it
                reliable enough to put in production — retries, fallbacks,
                structured output validation, error handling, logging. Most
                people who think they&apos;re &ldquo;building with AI&rdquo;
                have never written a harness, and it shows in their output the
                moment something breaks.
              </p>
              <p>
                <strong className="text-foreground">Orchestration.</strong>{' '}
                Multi-step workflows where the output of one model call
                becomes the input of another, where agents make decisions
                about routing, where state persists across runs. This is where
                AI starts to look less like a chatbot and more like a system.
                Most companies are years away from this. The ones that
                aren&apos;t will look fundamentally different in five years.
              </p>
              <p>
                <strong className="text-foreground">
                  Where human-in-the-loop sits.
                </strong>{' '}
                This is one of the highest-leverage design decisions in any
                AI-native workflow, and most people don&apos;t even know
                it&apos;s a decision. Do humans approve before the action
                runs, or audit after? Are they in the loop on every case, or
                only the ones the model flags as uncertain? Are they reviewing
                outputs, or training the eval set? The answer changes the
                economics of the workflow more than any other variable.
              </p>
              <p>
                <strong className="text-foreground">Evals.</strong> How you
                know whether the system is actually working. Every serious AI
                workflow needs an eval set — examples of inputs and the
                outputs you&apos;d expect — that you run against any change
                before shipping it. Companies without evals are flying blind.
                They feel productive. They have no idea if their AI is getting
                better or worse over time.
              </p>
              <p>
                <strong className="text-foreground">Substrate.</strong> The
                bottom of the iceberg. This is the layer where AI isn&apos;t a
                tool the company uses — it&apos;s the operating system the
                company is organized around. Workflows route to agents before
                they route to people. Skills libraries replace tribal
                knowledge. Eval systems sit alongside KPIs. Org design assumes
                AI is the default executor and humans are the judgment layer.
                Almost no company operates here yet. The ones that get there
                first will be unrecognizable from the ones that didn&apos;t.
              </p>
            </div>
          </Section>

          <Section title="A worked example">
            <p>
              Picture a 40-person SaaS company. The CEO has been using ChatGPT
              for six months. Two engineers are using Cursor. Marketing built
              a custom GPT for blog drafts. The leadership team feels like
              they&apos;re &ldquo;doing AI.&rdquo;
            </p>
            <p>
              Here&apos;s what they don&apos;t have: a single workflow that
              runs without a human starting it. A single skill in a reusable
              library. A single eval that tells them whether their AI usage is
              getting better. A single business decision that&apos;s been
              redesigned around what AI can now do.
            </p>
            <p>
              They&apos;re at the surface, and they don&apos;t know it.
              They&apos;ll spend the next two years generating modest
              productivity gains, while a smaller competitor — same size, same
              market — quietly rebuilds their support function around a triage
              agent with a proper eval suite, their sales motion around a
              research agent feeding into the CRM, and their product roadmap
              around weekly synthesis of customer signal that used to take two
              analysts a week.
            </p>
            <p>
              The smaller competitor isn&apos;t doing more AI. They&apos;re
              doing it deeper. In three years, the gap is uncatchable.
            </p>
          </Section>

          <Section title="What this means if you're an operator">
            <p>
              Most companies are going to need help going under the waterline.
              The tools are accessible — you can spin up Lovable in an
              afternoon — but the operating model underneath them isn&apos;t.
            </p>
            <p>
              Going deep doesn&apos;t mean every team needs a machine learning
              engineer. It means someone has to design the workflows, build
              the skill library, set up the evals, decide where humans sit in
              the loop, and rebuild the operating cadence around all of it.
              That&apos;s an operations problem more than an engineering
              problem. The companies that figure this out will look like
              operators who learned to build, not engineers who learned to
              operate.
            </p>
            <p>
              If your company&apos;s AI conversation is still happening at the
              waterline, the question isn&apos;t whether to go deeper.
              It&apos;s who&apos;s going to lead you there.
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
                If your company is staring at the iceberg and trying to figure
                out how to get below the surface — what to build, where to sit
                humans in the loop, how to design the workflows that change
                the economics of how you operate — that&apos;s the work I do.
              </p>
              <p>
                I&apos;m available to lead it as a full-time hire (Chief of
                Staff, Head of Operations, AI Transformation Lead at a small
                or mid-sized company moving fast) or to consult on the
                operating-model redesign that has to happen before any of the
                tools matter.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href="mailto:bradshawrc93@gmail.com?subject=AI%20Iceberg%20%E2%80%94%20let%27s%20talk"
                className="inline-flex items-center gap-2 bg-foreground text-background text-sm font-medium px-4 py-2 rounded-lg hover:bg-foreground/85 transition-colors duration-200"
              >
                Get in touch
              </a>
              <a
                href="https://www.linkedin.com/in/codybradshaw93/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-card border border-border text-foreground text-sm font-medium px-4 py-2 rounded-lg hover:border-foreground/40 transition-colors duration-200"
              >
                LinkedIn
              </a>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}
