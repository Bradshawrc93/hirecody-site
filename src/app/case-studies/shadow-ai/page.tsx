import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { Section } from '@/components/case-study-layout'
import { TrackedLink } from '@/components/tracked'

export const metadata = {
  title: "Shadow AI: The Org Chart Your Company Doesn't Know It Has | Cody Bradshaw",
  description:
    "There's a second org chart inside every company right now — the one where employees have quietly built the AI workflows leadership has no map of. This is what to do about it.",
}

export default function ShadowAi() {
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
          Shadow AI: The Org Chart Your Company Doesn&apos;t Know It Has
        </h1>

        <p className="text-muted-foreground text-lg leading-relaxed mb-12">
          Every company has an org chart. Boxes, lines, reporting structures.
          The one leadership prints out and shows the board.
        </p>

        <div className="space-y-12">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              There&apos;s a second org chart now, and almost nobody is looking
              at it.
            </p>
            <p>
              It&apos;s the one where Sarah in marketing has a custom GPT that
              drafts campaign briefs. Where two engineers run Cursor against
              the production codebase on personal Anthropic keys. Where someone
              in support built a Zapier flow that pipes tickets through Claude
              before they hit the queue. Where the head of sales has a Lovable
              app on his laptop that nobody else has ever seen, and it&apos;s
              the thing that actually closes his deals.
            </p>
            <p>
              This is shadow AI. It&apos;s the real AI strategy of most
              companies right now, and the leadership team has no map of it.
            </p>
          </div>

          <Image
            src="/case-studies/shadow-ai-hero.png"
            alt="An illustration of a company's hidden shadow AI org chart"
            width={1672}
            height={941}
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="w-full h-auto rounded-xl border border-border"
          />

          <Section title="How we got here">
            <p>The shadow showed up because the official strategy didn&apos;t.</p>
            <p>
              Most companies responded to the AI moment with a memo —
              here&apos;s our enterprise ChatGPT seat, please don&apos;t paste
              customer data into it — and assumed that was strategy. Meanwhile
              the actual work got harder, the deadlines didn&apos;t move, and
              people are smart. They went and got the tools they needed.
            </p>
            <p>
              Nobody told them not to. Or somebody did, and they did it anyway,
              because the alternative was missing their number.
            </p>
            <p>
              This isn&apos;t a discipline problem. It&apos;s a vacuum problem.
              When the company doesn&apos;t take a position on how AI gets
              used, every employee takes their own. The result looks exactly
              like what you&apos;d predict: high-agency people build genuinely
              useful things, those things live on personal devices and personal
              accounts, and the company gets none of the compounding benefit.
            </p>
          </Section>

          <Section title="What's actually happening underneath">
            <p>
              If you went desk by desk through a 200-person company today and
              asked everyone to show you the AI tools they use for work,
              here&apos;s what you&apos;d find:
            </p>
            <ul className="list-disc pl-5 marker:text-primary space-y-3">
              <li>
                <strong className="text-foreground">
                  A pile of accounts on personal email addresses.
                </strong>{' '}
                ChatGPT Plus, Claude Pro, Cursor, Lovable, Replit, Perplexity,
                a couple of niche vertical tools nobody at the company has ever
                heard of. Some are paid for personally. Some are reimbursed as
                &ldquo;software&rdquo; on expense reports. Most are invisible.
              </li>
              <li>
                <strong className="text-foreground">
                  Custom GPTs and Claude Projects
                </strong>{' '}
                with company-specific context pasted in — sometimes including
                things that should not have left the building.
              </li>
              <li>
                <strong className="text-foreground">
                  Workflows held together with duct tape.
                </strong>{' '}
                Personal Zapier accounts, Make scenarios, Google Apps Script,
                and the occasional Python file on someone&apos;s laptop that
                runs on a cron job. When that person leaves, the workflow
                leaves.
              </li>
              <li>
                <strong className="text-foreground">Agents.</strong> Real ones,
                increasingly. Someone in ops has a Claude Code setup that
                pulls from three internal systems and writes a weekly report.
                Someone in product has a research agent running against the
                company Notion. They built these themselves. They&apos;re proud
                of them. They should be — they&apos;re good. They&apos;re also
                completely undocumented and entirely dependent on one
                person&apos;s machine staying on.
              </li>
              <li>
                <strong className="text-foreground">
                  Skills, prompts, and patterns that work
                </strong>{' '}
                — sitting in private notes apps. Not shared. Not reusable.
                Reinvented every time someone new tries to solve the same
                problem.
              </li>
            </ul>
            <p>
              The org has been doing AI work for years. It just hasn&apos;t
              been capturing any of it.
            </p>
          </Section>

          <Section title="The risk isn't what you think it is">
            <p>
              The shadow AI conversation usually goes straight to security.
              What if someone leaks data to a model provider, what if a
              contract gets pasted into a personal account, what about
              compliance. Those are real, and they&apos;re worth taking
              seriously, but they&apos;re the obvious risk. They&apos;re the
              part above the waterline.
            </p>
            <p>
              The bigger risk is structural, and it doesn&apos;t show up in an
              audit:
            </p>
            <div className="space-y-5">
              <p>
                <strong className="text-foreground">
                  The company is paying for the same intelligence five times.
                </strong>{' '}
                Five people independently figured out how to summarize
                customer calls. Five different prompts, five different tools,
                five different output formats. None of them know the others
                exist.
              </p>
              <p>
                <strong className="text-foreground">
                  Knowledge is leaving when people leave.
                </strong>{' '}
                The best AI workflows in the company are sitting on personal
                laptops and in personal accounts. When that engineer quits, the
                agent quits with them. The company never owned it.
              </p>
              <p>
                <strong className="text-foreground">
                  There&apos;s no learning curve, just a flat line of
                  individual experiments.
                </strong>{' '}
                Without a central place where workflows, prompts, and skills
                accumulate, the company never compounds. Year three looks like
                year one with more tools.
              </p>
              <p>
                <strong className="text-foreground">
                  You can&apos;t tell what&apos;s working.
                </strong>{' '}
                No observability, no evals, no telemetry. Leadership has no
                idea which AI workflows are saving real time, which are
                theatrical, and which are quietly producing bad outputs that
                nobody is checking.
              </p>
              <p>
                <strong className="text-foreground">
                  You can&apos;t make model decisions at the company level.
                </strong>{' '}
                The most expensive frontier model is being used for a task that
                a cheaper model would handle fine. A reasoning-heavy task is
                running on the wrong model and the output quality is worse than
                anyone realizes. Nobody is looking.
              </p>
            </div>
            <p>
              This is the shape of the real risk: the company is doing a lot of
              AI work, none of it is owned, none of it is measured, and none of
              it accrues to the company as an asset.
            </p>
          </Section>

          <Section title='What "rounding things up" actually looks like'>
            <p>
              The instinct of most leadership teams, when they finally see the
              shadow, is to clamp down. Ban the tools. Mandate the one approved
              provider. Issue a policy.
            </p>
            <p>
              This is the wrong move and it never works. The shadow exists
              because people are getting real value from these tools. Banning
              them sends the work further underground or, more likely, slows
              the company down while a competitor doesn&apos;t.
            </p>
            <p>
              The right move is the opposite —{' '}
              <strong className="text-foreground">
                legitimize, centralize, and instrument.
              </strong>{' '}
              Bring the shadow into the light, give it infrastructure, and turn
              what&apos;s currently a personal asset into a company one.
            </p>
            <p>In practice that means a few things:</p>
            <div className="space-y-5">
              <p>
                <strong className="text-foreground">An inventory.</strong>{' '}
                Someone has to actually go find out what&apos;s being used, by
                whom, for what. Not as an audit — as a survey. Most of what
                surfaces will be useful. Some of it will be load-bearing in
                ways nobody at the leadership level realizes.
              </p>
              <p>
                <strong className="text-foreground">
                  A central place where AI work lives.
                </strong>{' '}
                Workflows, skills, prompts, agents — versioned, shared,
                reviewable. Treated like code, because that&apos;s what it is
                now. When someone in marketing builds a great campaign-brief
                workflow, it shouldn&apos;t live in their custom GPT. It should
                live in a library where the next marketer can fork it, the
                head of marketing can review it, and the company keeps it when
                that person leaves.
              </p>
              <p>
                <strong className="text-foreground">
                  Observability across the whole stack.
                </strong>{' '}
                Which workflows are running, which models they&apos;re hitting,
                what they cost, how often they fail, where the outputs are
                going. This is admin-level visibility — not surveillance of
                individual usage, but operational telemetry on what the
                company&apos;s AI layer is actually doing.
              </p>
              <p>
                <strong className="text-foreground">
                  Model-agnostic infrastructure.
                </strong>{' '}
                No tool in the stack should be locked to one provider. The
                model landscape is moving too fast — what&apos;s best today is
                a tier-two choice in six months — and a company that has
                hard-coded itself to one vendor has just made a strategic
                mistake it&apos;ll be paying off for years. Build the layer,
                swap the model.
              </p>
              <p>
                <strong className="text-foreground">
                  Someone whose job this is.
                </strong>{' '}
                Not a side project for a senior engineer. Not a slide on the
                CTO&apos;s roadmap. An actual owner — operator-shaped,
                technical enough to build, organizational enough to lead —
                whose remit is the company&apos;s AI substrate.
              </p>
              <p>
                <strong className="text-foreground">
                  A culture where employees build, not just consume.
                </strong>{' '}
                The shadow exists because people are already building. The
                opportunity is to teach them to build well — to write prompts
                that are testable, to think in workflows instead of one-shot
                interactions, to extract reusable skills, to put humans in the
                loop in the right places. This is a training and enablement
                problem, not a permissions problem. Done right, every employee
                becomes a force multiplier instead of a one-person AI cell.
              </p>
            </div>
            <p>
              When you do this, the shadow stops being a liability and becomes
              the thing it should have been from the start: the company&apos;s
              most valuable internal product.
            </p>
          </Section>

          <Section title="A note on why I built Obs first">
            <p>
              I&apos;ll be honest about my own bias here, because it&apos;s
              relevant.
            </p>
            <p>
              When I started building my own ecosystem of apps — Forge, the
              chatbot, Beacon, the rest — the very first thing I built
              wasn&apos;t any of them. It was{' '}
              <strong className="text-foreground">Obs</strong>, an
              observability and telemetry platform, and every app I&apos;ve
              built since hooks into it. Admin-only, but I see everything:
              which app made which call, against which model, at what cost,
              with what latency, against what output.
            </p>
            <p>
              I built it first for the same reason a company should: because if
              you don&apos;t have visibility from day one, you never get it.
              You bolt it on later, badly, and you make decisions in the dark
              in the meantime.
            </p>
            <p>
              The other deliberate choice was making every tool model-agnostic
              from the start. Not one app is locked to a single provider. I
              have a separate tool, <strong className="text-foreground">Lens</strong>,
              that runs across the apps and tells me when I should consider
              switching models or providers based on cost, performance, and
              quality drift. The whole point is that the model is a swappable
              component, not the foundation.
            </p>
            <p>
              I&apos;m not saying every company needs to build their own Obs
              and Lens. I&apos;m saying the principles those tools encode —
              central visibility, model agnosticism, and continuous evaluation
              of the model layer — are what a company&apos;s AI substrate
              should be built on. If you don&apos;t have those three things,
              you don&apos;t have an AI strategy. You have a pile of receipts.
            </p>
          </Section>

          <Section title="Who leads this">
            <p>
              The companies that figure shadow AI out aren&apos;t going to do
              it by hiring a Chief AI Officer with a slide deck. They&apos;re
              going to do it by giving the work to someone who can actually
              build the central layer, run the inventory, set up the
              observability, train the team, and make the boring operational
              decisions that turn a shadow into a system.
            </p>
            <p>
              This is operations work with a builder&apos;s toolkit. It&apos;s
              the kind of role that doesn&apos;t fit cleanly into the existing
              org chart, which is appropriate, because the existing org chart
              is the one that missed this in the first place.
            </p>
            <p>
              The shadow AI in your company is already there. Your employees
              have already done the hard part — they&apos;ve found the tools,
              built the workflows, proven the value. The question is whether
              the company is going to capture that work and compound it, or
              whether it&apos;s going to keep paying for the same intelligence
              five times and lose it every time someone resigns.
            </p>
            <p>Someone has to round it up. The question is who.</p>
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
                If your company knows the shadow is there and wants someone to
                actually round it up — run the inventory, build the central
                layer, set up the observability, train the team — that&apos;s
                the work I do.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-6">
              <TrackedLink
                event="contact_click"
                eventProps={{ location: 'case_study_shadow_ai', method: 'email' }}
                href="mailto:bradshawrc93@gmail.com?subject=Shadow%20AI%20%E2%80%94%20let%27s%20talk"
                className="inline-flex items-center gap-2 bg-foreground text-background text-sm font-medium px-4 py-2 rounded-lg hover:bg-foreground/85 transition-colors duration-200"
              >
                Get in touch
              </TrackedLink>
              <TrackedLink
                event="contact_click"
                eventProps={{ location: 'case_study_shadow_ai', method: 'linkedin' }}
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
