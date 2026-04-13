import type { Metadata } from 'next'
import {
  CaseStudyHeader,
  CaseStudyBody,
  Section,
  SubSection,
} from '@/components/case-study-layout'

export const metadata: Metadata = {
  title: 'Standing Up Product Operations Post-Acquisition — R. Cody Bradshaw',
  description:
    'Creating a product ops function from scratch during a multi-company healthtech rollup.',
}

export default function ProductOpsCaseStudy() {
  return (
    <>
      <CaseStudyHeader
        tag="Product Operations"
        title="Standing Up Product Operations Post-Acquisition"
        subtitle="Smarter Technologies | May 2025 – Present"
        metrics={[
          { label: 'Engineers', value: '25+' },
          { label: 'Product Ops', value: 'First framework' },
          { label: 'Reporting', value: 'Weekly exec digest' },
          { label: 'Scope', value: 'Multi-company' },
        ]}
      />

      <CaseStudyBody>
        <Section title="The Situation">
          <p>
            [What happened: Smarter Technologies acquired Thoughtful AI, SDx, and other healthtech companies. What the company looked like post-acquisition — multiple teams, different tools, no unified operating rhythm. Why you were promoted. What &quot;product operations&quot; meant in this context — it didn&apos;t exist before you.]
          </p>
        </Section>

        <Section title="The Challenge">
          <p>
            [No product ops function, no precedent, no playbook. Multiple engineering teams from different acquired companies with different tools and processes. Deloitte involved in the broader integration. The CPO needed visibility into what was happening across product and engineering, and didn&apos;t have it.]
          </p>
        </Section>

        <Section title="What I Built">
          <SubSection title="The Operating Rhythm">
            <p>
              [What cadences you established — standups, sprint reviews, planning cycles. How you defined delivery milestones and tied them to executive strategy. What ceremonies you introduced and why.]
            </p>
          </SubSection>

          <SubSection title="The Executive Product Digest">
            <p>
              [What it was — weekly consolidated report. What it contained — KPIs, delivery risks, roadmap status. How you built it. How leadership used it — did it change decision-making? Did it surface risks earlier?]
            </p>
          </SubSection>

          <SubSection title="The Tooling Standardization">
            <p>
              [The state of Jira and Notion before you touched them. What you standardized — backlog structure, sprint reporting, documentation standards. How you rolled it out across teams used to doing things their own way.]
            </p>
          </SubSection>

          <SubSection title="The Integration Work">
            <p>
              [Your role in the post-acquisition alignment. What you owned vs. what Deloitte owned. How you coordinated tooling, reporting, and process across sister companies. What worked and what was harder than expected.]
            </p>
          </SubSection>
        </Section>

        <Section title="Results & Impact">
          <p>
            [What the product org looks like now vs. when you started. What visibility leadership has now that they didn&apos;t before. Decisions directly informed by the systems you built. How the integration is progressing.]
          </p>
        </Section>

        <Section title="What I Learned">
          <p>
            [What you learned about building a function that didn&apos;t exist before. What you learned about operating alongside external consultants. What you&apos;d tell someone stepping into a product ops role for the first time.]
          </p>
        </Section>
      </CaseStudyBody>
    </>
  )
}
