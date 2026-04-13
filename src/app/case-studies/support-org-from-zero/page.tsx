import type { Metadata } from 'next'
import {
  CaseStudyHeader,
  CaseStudyBody,
  Section,
  SubSection,
  Callout,
  MetricsTable,
} from '@/components/case-study-layout'

export const metadata: Metadata = {
  title: 'Building a Support & Delivery Org from Zero — R. Cody Bradshaw',
  description:
    'How I built a 75+ person support and delivery organization from a shared email inbox — and turned it into a competitive advantage protecting $15M+ in ARR.',
}

export default function SupportOrgCaseStudy() {
  return (
    <>
      <CaseStudyHeader
        tag="Team Building & Scaling"
        title="Building a Support & Delivery Org from Zero"
        subtitle="Thoughtful AI (now Smarter Technologies) | Nov 2022 – May 2025"
        metrics={[
          { label: 'Team Built', value: '0 → 75+' },
          { label: 'ARR Protected', value: '$15M+' },
          { label: 'Annual Churn', value: '3%' },
          { label: 'Avg Resolution', value: '~50hr → ~5hr' },
        ]}
      />

      <CaseStudyBody>
        <Section title="The Situation">
          <p>
            When I joined Thoughtful AI in late 2022, the company was roughly 15
            people building AI automation agents for healthcare revenue cycle
            management. The product was technically complex and operationally
            unforgiving: bespoke AI agents, built per client, processing tens of
            thousands of records — eligibility verifications, claims submissions,
            payment postings. About 50 agents were live across the client base.
          </p>
          <p>
            Customer support existed in theory. Incoming issues flowed through a
            shared email inbox. There were no dedicated support engineers — the
            delivery engineers who built each agent informally owned it after
            go-live, which meant they couldn&apos;t take on new work. No SLAs, no
            escalation paths, no categorization, no metrics. Average resolution
            time was roughly 50 hours.
          </p>
          <p>
            I was brought in as the founding support hire with a straightforward
            mandate: build a support function. What actually happened was
            considerably broader.
          </p>
        </Section>

        <Section title="The Challenge">
          <p>
            The product operated in an environment with real consequences for
            failure. When an eligibility verification agent breaks, a patient
            shows up for a procedure and nobody can confirm their coverage. When
            a claims processing agent fails near end-of-month, there&apos;s a
            sub-12-hour window to fix it before billing cycles close and revenue
            gets delayed. These weren&apos;t theoretical risks — they were
            routine.
          </p>
          <p>
            Building a support org from scratch meant solving several problems
            simultaneously: staffing across time zones for 24/7 coverage,
            creating workflows and tooling where none existed, establishing
            accountability metrics, and doing all of it fast enough to keep pace
            with a product and client base that were both scaling rapidly.
          </p>
        </Section>

        <Section title="What I Built">
          <SubSection title="The Team: 0 → 75+">
            <p>
              The first move was structural. I pulled six engineers off the
              delivery team — people with deep knowledge of specific agents — and
              formalized them as the first dedicated support engineering team.
              That single change freed the delivery team to take on new work
              without being tethered to agents they&apos;d already shipped.
            </p>
            <p>
              From there, I built the offshore hiring pipeline, managing vendor
              relationships across four staffing partners spanning Latin America,
              Europe, and South Africa. I reviewed candidates, ran interviews,
              made hiring decisions, and onboarded every engineer who joined.
              When I later took ownership of delivery engineering as well, the
              combined organization scaled from roughly 25 to over 75 engineers
              across a dozen countries with 24/7 coverage.
            </p>
            <p>
              The headcount growth wasn&apos;t just tracking company growth. The
              product was getting more complex — agents roughly doubled or
              tripled in sophistication over that period, and the client count
              went from 50 to over 100 live agents. Support had to scale faster
              than the product, or the product would outrun its own safety net.
            </p>
          </SubSection>

          <SubSection title="The Systems: Three Platform Migrations">
            <p>
              I stood up Jira Service Management as the first real ticketing
              system, replacing the shared inbox — structured intake,
              categorization, prioritization, and SLAs. As the company matured
              and all client-facing communication consolidated into HubSpot, I
              migrated us to HubSpot&apos;s service tools to keep everything in
              one ecosystem. When the company later moved away from HubSpot, I
              transitioned the operation to Zoho Desk.
            </p>
            <p>
              Each move was a deliberate decision, not a reaction to a tool
              failing. The right platform for a 15-person startup isn&apos;t the
              right platform for a 75-person org. Every migration preserved the
              workflow architecture I&apos;d designed: tiered SLAs, escalation
              frameworks, categorization taxonomies, and accountability
              structures.
            </p>
          </SubSection>

          <SubSection title="The Financial Infrastructure">
            <p>
              I built forecasting and headcount planning models in Google Sheets
              backed by Apps Script automation. They pulled from the live sales
              pipeline at different deal stages and modeled headcount needs
              against active delivery timelines, engineer roll-off dates, skill
              profiles, and seniority requirements. Leadership used them weekly
              for budgeting, hiring justifications, and growth planning.
            </p>
            <p>
              When a new deal closed, I needed the right engineers scoped,
              contracted, and ready before kickoff — not after. The forecasting
              model gave us weeks of lead time instead of days.
            </p>
          </SubSection>
        </Section>

        <Section title="The Tooling: Where Support Became Engineering">
          <p>
            This is where the work diverged from a standard scaling narrative. I
            didn&apos;t just build a support org — I drove the product vision and
            served as PM for internal tools that made the team disproportionately
            effective relative to its size, with support engineers executing the
            builds.
          </p>

          <SubSection title="Sauron — Automated Failure Detection & Resolution">
            <p>
              Sauron started as a monitoring tool that scanned our Bitbucket
              repositories to identify dependency failures and broken agent
              logic. It flagged cascading risks — everything that might be
              affected when a failure occurred — instead of letting us discover
              problems one at a time.
            </p>
            <p>
              By its final iteration, Sauron could identify a root cause, write
              the fix, submit a pull request, run a dev test, and — if tests
              passed — merge the fix into production automatically. For issues
              requiring human judgment, it logged a structured summary and
              pre-staged a ticket so an engineer could review and act in minutes.
            </p>
            <Callout>
              We had five critical incidents across 3.5 years. The first was a
              war room — all-day scramble, delivery engineers pulled off projects
              to help. The last ones were resolved before most customers noticed.
              Our overnight team in South Africa would detect the issue, Sauron
              would assess and stage fixes, and by morning everything was clean.
            </Callout>
          </SubSection>

          <SubSection title="Ghost Runs — Proactive Production Safety">
            <p>
              I implemented scheduled dev runs that mirrored production workflows
              end-to-end but stopped short of writing to production data. They
              ran ahead of actual production windows, surfacing failures before
              they hit live environments. It became standard operating procedure
              and fundamentally changed the team&apos;s posture from reactive to
              preventive.
            </p>
          </SubSection>

          <SubSection title="AI Support Analyzer — Intelligent Triage">
            <p>
              As volume grew, I built an AI-powered triage layer on top of our
              Slack support channels. Incoming messages were automatically
              classified: technical issues routed to Jira, billing questions
              surfaced from records, product questions matched against
              documentation. Non-technical queries came with a suggested
              response, letting customer success analysts reply in minutes
              instead of researching from scratch.
            </p>
          </SubSection>
        </Section>

        <Section title="Building Culture as Infrastructure">
          <p>
            When you have 75 engineers across a dozen countries who have never
            shared physical space, you don&apos;t naturally get a culture. You
            get a collection of isolated contractors who have no reason to help
            someone they&apos;ve never met with a ticket they&apos;re not
            accountable for.
          </p>
          <p>
            I watched this create real problems. When an engineer posted a
            problem in Slack, the thread would sit for hours with one or two
            responses. I&apos;d have to personally pull people in.
          </p>
          <p>
            So I started treating culture as infrastructure. Structured rituals
            in the weekly all-hands — recognition, room for people to be human.
            Then optional Saturday gaming sessions. Nothing mandatory, nothing
            corporate. People showed up because they were curious, stayed because
            it was fun, and came back because they&apos;d made friends. At peak,
            20+ engineers from across multiple countries were joining on their own
            time.
          </p>
          <Callout>
            The operational impact surprised me. Slack response rates went from
            one or two replies over hours to ten or more within the hour.
            Cross-team collaboration stopped being something I had to manufacture
            and started happening organically. Culture isn&apos;t a morale
            initiative — it&apos;s an operational input.
          </Callout>
        </Section>

        <Section title="The Metrics">
          <p>
            The resolution time progression tells the real story. The jump from
            50 hours to 12–15 wasn&apos;t impressive operational engineering — it
            was building a function where none existed. The grind from 15 to 10
            to 8 to 5 was the hard part.
          </p>
          <MetricsTable
            rows={[
              {
                label: 'Avg. Resolution Time',
                before: '~50 hours',
                after: '~5 hours',
              },
              {
                label: 'First Human Response',
                before: 'No SLA',
                after: '< 8 minutes',
              },
              {
                label: 'Annual Logo Churn',
                before: 'Unmeasured',
                after: '3%',
              },
              {
                label: 'ARR Under Support',
                before: '$0 (no function)',
                after: '$15M+',
              },
              {
                label: 'Team Size',
                before: '0 dedicated',
                after: '75+ across 4 continents',
              },
              {
                label: 'Live Agents Supported',
                before: '~50',
                after: '100+ (2–3x more complex)',
              },
            ]}
          />
          <p>
            At roughly five hours average resolution on a product where
            debugging AI agents, diagnosing integration failures, and testing
            fixes safely in production-mirrored environments was the baseline
            complexity — we&apos;d hit the structural floor.
          </p>
        </Section>

        <Section title="Results & Impact">
          <p>
            By May 2025, the support and delivery organization was a 75+ person
            operation spanning Latin America, Europe, and South Africa with 24/7
            coverage, supporting over 100 live AI agents across an enterprise
            client base generating $15M+ in ARR.
          </p>
          <p>
            Annual logo churn held at 3%. In a space where AI automation products
            are still earning trust with healthcare organizations, that retention
            rate was the direct result of a support operation that treated every
            ticket as a revenue protection event.
          </p>
          <p>
            Clients started telling us they preferred working with the support
            team over the delivery team. That&apos;s not something support orgs
            typically hear — and it was the signal that we&apos;d built something
            beyond the baseline expectation.
          </p>
          <p>
            The internal tooling — Sauron, ghost runs, the AI triage layer —
            outlasted any single team configuration. They became the operational
            backbone that let the company absorb a major acquisition without the
            support experience degrading.
          </p>
          <p>
            The CPO ultimately asked me to transition into Product Operations to
            build that function next. Not because I&apos;d outgrown support —
            because I&apos;d built it to the point where it ran without me.
          </p>
        </Section>

        <Section title="What I Learned">
          <p>
            If I built this again, I&apos;d invest in the internal tooling
            earlier. Sauron and ghost runs were force multipliers, but we built
            them as the org matured. A basic version of proactive failure
            detection in month two instead of month eight would have shortened
            the early pain period significantly.
          </p>
          <p>
            I&apos;d also push harder on platform consolidation upfront. Three
            migrations in 2.5 years was pragmatic, but each one had a transition
            cost. More time spent evaluating where the company was heading — not
            just where it was — would have meant one fewer move.
          </p>
          <p>
            The biggest surprise was how much the culture work mattered. I
            started the gaming sessions because it seemed like the right thing to
            do for morale. What I learned was that it was the right thing to do
            for performance. The operational impact of people actually knowing
            and liking each other across a distributed org was larger than any
            process improvement I shipped. That changed how I think about what
            &quot;operational infrastructure&quot; includes.
          </p>
        </Section>
      </CaseStudyBody>
    </>
  )
}
