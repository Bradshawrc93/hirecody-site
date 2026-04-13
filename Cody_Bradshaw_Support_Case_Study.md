# CASE STUDY

# Support Is Not a Cost Center. It's the Reason $15M in ARR Didn't Walk Out the Door.

*How I built a 75+ person support and delivery organization from a shared email inbox — and turned it into the company's most reliable competitive advantage.*

**Thoughtful AI (now Smarter Technologies) | Nov 2022 – May 2025**
**Cody Bradshaw | Head of Customer Support & Engineering Operations**

---

| 25 → 75+ | $15M+ | 3% | ~5 hrs |
|:-:|:-:|:-:|:-:|
| TEAM SCALED | ARR PROTECTED | ANNUAL LOGO CHURN | AVG RESOLUTION |

---

## The Argument Nobody Wants to Have

Most companies treat customer support the way they treat office snacks — a cost you try to minimize while keeping people from complaining too loudly. They staff it lean, measure it by ticket volume, and bury it three levels below anyone who makes real decisions. Then they wonder why their churn number looks like it was set by their competitors.

Here's what I learned building a support organization from literally nothing into a 75+ person operation protecting $15M in annual recurring revenue: support isn't overhead. It's the last line of defense between your product's imperfections and your customer's willingness to keep paying you.

This is the story of how I built that line of defense — the team, the systems, the tooling, and the culture — and why it became the thing that let the company scale through a Series B and an acquisition without bleeding customers.

---

## The Situation

When I joined Thoughtful AI in late 2022, the company was roughly 15 people building AI automation agents for healthcare revenue cycle management. The product was technically complex and operationally unforgiving: bespoke AI agents, built per client, processing tens of thousands of records — eligibility verifications, claims submissions, payment postings. About 50 agents were live across the client base.

Support existed the way most things exist at a 15-person startup — in theory. Incoming issues were filtered through a shared email inbox called Front. There were no dedicated support engineers. The delivery engineers who built each agent informally owned it after go-live, which meant they couldn't take on new work. There were no SLAs, no escalation paths, no categorization, no metrics.

Average time to resolve an issue was roughly 50 hours. To be fair, that number reflects a company that simply hadn't built the function yet — not a team that was failing at it. But the distinction didn't matter to clients waiting for answers.

> *When an eligibility verification agent breaks, a patient shows up for a procedure and nobody can confirm their coverage. When a claims processing agent fails near end-of-month, you're looking at a sub-12-hour window to fix it before billing cycles close and revenue gets delayed. These weren't theoretical risks. They were Tuesday.*

I was brought in as the founding support hire with a straightforward mandate: build a support function. What actually happened was considerably broader than that.

---

## What I Built

### The Team: 6 Engineers to 75+

The first move was structural. I pulled six engineers off the delivery team — people who already had deep knowledge of specific agents — and formalized them as the first dedicated support engineering team. They reported to me, were accountable to resolution metrics, and their job was support — nothing else. That one change alone freed the delivery team to take on new projects without being tethered to the agents they'd already shipped.

From there, I built the offshore hiring pipeline. I managed vendor relationships across four staffing partners spanning Latin America, Europe, and South Africa. I didn't delegate the recruiting — I was the one reviewing candidates, running interviews, making decisions, and onboarding every engineer who joined. When I later took ownership of delivery engineering as well, the combined organization scaled from roughly 25 to over 75 engineers across a dozen countries with 24/7 coverage.

The headcount wasn't just growing because the company was growing. The product was getting more complex. Agents roughly doubled or tripled in size and sophistication over that two-and-a-half-year period, and the client count went from around 50 live agents to over 100. Support had to scale faster than the product, or the product would outrun its own safety net.

### The Systems: Three Platform Migrations in 2.5 Years

I stood up Jira Service Management as the first real ticketing system, replacing the shared inbox. Structured intake, categorization, prioritization, SLAs — the basics that didn't exist. It served us well for the first phase of growth.

As the company matured, all client-facing communication consolidated into HubSpot. Rather than force support to live on a separate island, I migrated us to HubSpot's service tools to keep everything in one ecosystem. When the company later pulled back from HubSpot, I moved the support operation to Zoho Desk — maintaining the enterprise-grade workflows we'd built while fitting the tooling to where the organization was actually heading.

Each transition was a deliberate call I drove — not a reaction to a tool failing, but a recognition that the right platform for a 15-person startup isn't the right platform for a 75-person org, and the tooling should serve the operation, not the other way around. Every migration preserved the workflow architecture: tiered SLAs, escalation frameworks, categorization taxonomies, and the accountability structures I'd designed.

### The Financial Infrastructure

I built forecasting and headcount planning models in Google Sheets backed by Apps Script automation. These weren't vanity dashboards. They pulled from the live sales pipeline at different deal stages and modeled headcount needs against active delivery timelines, engineer roll-off dates, skill profiles, and seniority requirements. Leadership used them weekly for budgeting, hiring justifications, and growth planning.

When a new deal closed, I needed the right engineers scoped, contracted, and ready before kickoff — not after. The forecasting model made that possible by giving me weeks of lead time instead of days. In a company scaling this fast, the difference between proactive and reactive staffing was the difference between a smooth launch and a scramble.

---

## The Tooling: Where Support Became Engineering

This is where the story diverges from a standard "I scaled a team" narrative. I didn't just build a support org — I built the internal tools that made the org disproportionately effective relative to its size. I drove the product vision and served as PM for each of these tools, with support engineers executing the builds.

### Sauron — Automated Failure Detection and Resolution

Named with exactly the subtlety you'd expect from engineers. Sauron started as a monitoring tool that scanned our Bitbucket repositories to identify dependency failures and broken agent logic. It flagged cascading risks — everything that might be affected when a failure occurred — instead of letting us discover problems one at a time.

By its final iteration, Sauron could identify a root cause, write the fix, submit a pull request, run a dev test, and — if tests passed — merge the fix into production automatically. For issues requiring human judgment, it logged a structured summary and pre-staged a ticket so an engineer could review and act in minutes.

> *We had five critical incidents across 3.5 years. The first was a war room — all-day scramble, delivery engineers pulled off projects to help, hours of manual triage. The last ones were resolved before most customers were awake. Our overnight team in South Africa would detect the issue around 2 AM, Sauron would assess and stage fixes, and by 6 AM everything was clean. Zero production impact.*

### Ghost Runs — Proactive Production Safety

I implemented scheduled dev runs that mirrored production workflows end-to-end but stopped short of writing to production data. They ran ahead of actual production windows, surfacing failures before they hit live environments. It became standard operating procedure and fundamentally changed the team's posture from reactive to preventive.

### AI Support Analyzer — Intelligent Triage

As volume grew, I built an AI-powered triage layer on top of our Slack support channels. Incoming messages were automatically classified: technical issue routed to Jira, billing question surfaced from records, or product/business logic question matched against documentation. Non-technical queries came with a suggested response, letting customer success analysts reply in minutes instead of researching from scratch.

---

## The Culture Play (And Why It's Not Soft)

Here's the take that makes operations people uncomfortable: culture is an operational input, not a morale initiative. I can prove it.

When you have 75 engineers across a dozen countries who have never shared physical space, you don't naturally get a culture. You get a collection of isolated contractors. Engineers in El Salvador don't know engineers in South Africa. Nobody has a reason to help someone they've never met with a ticket they're not accountable for.

I watched this create real problems. When an engineer got stuck and posted in Slack, the thread would sit for hours with one or two responses. I'd have to personally pull people in.

So I started treating culture as infrastructure. Small rituals in the weekly all-hands — ice breakers, recognition, room for people to be human. Then I started hosting optional Saturday gaming sessions. Counterstrike, mostly. Nothing mandatory. People showed up because they were curious, stayed because it was fun, and came back because they'd made friends.

At peak, 20+ engineers from across multiple countries were joining a casual Saturday session on their own time.

> *The measurable outcome: when an engineer posted a stuck thread in Slack, responses went from 1–2 over hours to 10–20 within the hour. People who were friends wanted to help their friends. For a sustained period after each event, I'd estimate we were getting 1.25x output from the team. Cross-team collaboration stopped being something I had to manufacture and started happening on its own. Culture isn't a line item. It's a multiplier.*

---

## The Metrics Turnaround

Numbers without context are vanity metrics, so here's the context that makes these worth reading.

| METRIC | STARTING POINT | FINAL STATE |
|:---|:-:|:-:|
| **Avg. Resolution Time** | ~50 hours (no org) | ~5 hours |
| **Year 1 Resolution** | — | 12–15 hours |
| **Year 2 Resolution** | — | 8–10 hours |
| **First Human Response** | No SLA | < 8 minutes |
| **Annual Logo Churn** | Unmeasured | 3% |
| **ARR Under Support** | $0 (no function) | $15M+ |
| **Team Size** | 0 dedicated | 75+ across 4 continents |
| **Live Agents Supported** | ~50 | 100+ (2–3x more complex) |

The resolution time progression tells the real story. The jump from 50 hours to 12–15 wasn't impressive operational engineering — it was building a function where none existed. The grind from 15 to 10 to 8 to 5 was the hard part. At ~5 hours average resolution on a product where debugging AI agents, diagnosing integration failures, and testing fixes safely in production-mirrored environments was the baseline complexity — faster wasn't really structurally possible. We'd hit the floor.

---

## Results & Impact

By May 2025, the support and delivery organization was a 75+ person operation spanning Latin America, Europe, and South Africa with 24/7 coverage. It was supporting over 100 live AI agents — each one substantially more complex than what existed when I started — across an enterprise client base generating $15M+ in ARR.

Annual logo churn held at 3%. In a space where AI automation products are still earning trust with healthcare organizations, that retention rate wasn't passive. It was the direct result of a support operation that treated every ticket as a revenue protection event.

Clients started telling us they preferred working with the support team over the delivery team. That's not a normal thing for a support org to hear. It was the signal that we'd built something that exceeded the baseline expectation of "fix it when it breaks" and had become a genuine differentiator.

The internal tooling — Sauron, ghost runs, the AI triage layer — outlasted any single team configuration. These weren't one-off projects. They became the operational backbone that let the company absorb a major acquisition without the support experience degrading.

The ultimate validation: the CPO asked me to transition into Product Operations to build that function next. Not because I'd outgrown support — because I'd built it to the point where it ran without me.

---

## What I Learned

If I built this again from scratch, I'd invest in the internal tooling earlier. Sauron and ghost runs were force multipliers, but we built them as the org matured. If I'd started with even a basic version of proactive failure detection in month two instead of month eight, the early pain period would have been shorter and the team would have hit its stride faster.

I'd also push harder on platform consolidation earlier. Three migrations in 2.5 years was pragmatic, but each one had a transition cost. If I could go back, I'd spend more time upfront evaluating where the company was heading — not just where it was — and make one less move.

The biggest surprise was how much the culture work mattered. I started the gaming sessions because it seemed like the right thing to do for team morale. What I learned was that it was the right thing to do for team performance. The operational impact of people actually knowing and liking each other across a distributed org was larger than any process improvement I shipped. That changed how I think about what "operational infrastructure" includes.

> *The through-line of this entire experience: the best support orgs don't just respond to problems. They prevent them, they build tools that compound their own effectiveness, and they treat every customer interaction as a revenue event. Support isn't a cost center. It's the thing that makes the rest of the business possible.*

---

*Cody Bradshaw • bradshawrc93@gmail.com • Austin, TX*
