import type { Metadata } from 'next'
import {
  CaseStudyHeader,
  CaseStudyBody,
  Section,
  SubSection,
} from '@/components/case-study-layout'

export const metadata: Metadata = {
  title: 'Bringing AI Into the Workplace — R. Cody Bradshaw',
  description:
    "A practitioner's approach to AI adoption through action, not policy.",
}

export default function AICaseStudy() {
  return (
    <>
      <CaseStudyHeader
        tag="AI & Automation"
        title="Bringing AI Into the Workplace"
        subtitle="A practitioner's approach to AI adoption through action, not policy"
        metrics={[
          { label: 'Focus', value: 'Workflow automation' },
          { label: 'Method', value: 'Lead by example' },
          { label: 'Tools', value: 'AI-assisted dev' },
          { label: 'Approach', value: 'Tool evaluation' },
        ]}
      />

      <CaseStudyBody>
        <Section title="The Context">
          <p>
            [The broader moment: AI tools became widely available in 2023-2024, and most companies were figuring out what to do with them. Your situation as an ops leader who saw the opportunity. Your approach: instead of waiting for a company AI strategy, you started using tools yourself and showed others what was possible.]
          </p>
        </Section>

        <Section title="How I Used AI">
          <SubSection title="Writing, Analysis, and Decision Support">
            <p>
              [Tools used — Claude, ChatGPT. Specific use cases: drafting executive communications, summarizing long documents, analyzing data, preparing for meetings. What changed: speed, quality, or both?]
            </p>
          </SubSection>

          <SubSection title="Workflow Automation">
            <p>
              [Tools used — Zapier + AI, Apps Script + AI. What you automated: reporting pipelines? Ticket triage? Data consolidation? A concrete before/after example. What this freed you up to do instead.]
            </p>
          </SubSection>

          <SubSection title="AI-Assisted Development">
            <p>
              [Tools used — Cursor, Claude Code, Copilot. What you built: internal tools, dashboards, scripts, automations. Frame: &quot;I&apos;m not a developer, but AI tools let me build things that would have required engineering resources.&quot;]
            </p>
          </SubSection>

          <SubSection title="Tool Evaluation and Team Adoption">
            <p>
              [How you evaluated AI tools for the company. How you shared what you learned. The lead-by-example approach: what did other people start doing after seeing your results? Any resistance and how you handled it.]
            </p>
          </SubSection>
        </Section>

        <Section title="What I Learned About AI Adoption">
          <ul className="space-y-4 list-none">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                <strong className="text-foreground">Show, don&apos;t tell</strong> — demos beat decks every time.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                <strong className="text-foreground">Start with your own pain points</strong> — transform your own workflow first, then invite others in.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                <strong className="text-foreground">AI doesn&apos;t replace judgment, it accelerates it</strong> — the tool is only as good as the person prompting it.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                <strong className="text-foreground">Adopt early, share often</strong> — the operators who adopt AI earliest will have the biggest advantage.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                <strong className="text-foreground">Most AI ROI comes from boring use cases</strong> — not chatbots or generative art, but summarization, drafting, data analysis, and automation.
              </span>
            </li>
          </ul>
        </Section>

        <Section title="What&apos;s Next">
          <p>
            [How you&apos;re continuing to develop AI skills — personal projects, learning, experimentation. How you&apos;d approach AI integration in your next role. Frame: &quot;I want to be the person who helps the organization figure out where AI fits — not as a technology initiative, but as an operational capability.&quot;]
          </p>
        </Section>
      </CaseStudyBody>
    </>
  )
}
