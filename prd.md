## PRD: AI Chat with Cody

**Status:** Draft
**Last Updated:** 2026-04-01

---

### Portfolio Narrative

I built a conversational AI agent embedded directly on my portfolio site that lets hiring managers ask questions about my experience, operating philosophy, and career — and get answers that sound like me, not a generic chatbot. The system uses retrieval-augmented generation (RAG) grounded in my actual case studies, resume, and written content to eliminate hallucination while preserving my voice. It demonstrates both my ability to ship AI-powered products and my understanding of how to make AI adoption practical and user-facing.

---

### 1. Problem & Context

- **Problem:** Hiring managers visiting a portfolio site have specific questions ("Has this person managed distributed teams?" "What's their experience with post-acquisition integration?") but have to dig through multiple pages to find answers. A static site can't respond to the specific thing a hiring manager cares about in the moment.

- **Why it matters:** The difference between a site visit that converts to a conversation and one that bounces is often whether the visitor found the specific signal they were looking for in under 60 seconds. An AI chat agent lets them ask directly and get a grounded, authentic answer immediately — turning a passive portfolio into an interactive one.

- **Current state:** The chat window exists as a UI placeholder on the homepage. It shows a greeting message and a disabled input field. No backend, no AI, no responses.

---

### 2. Goals & Success Metrics

- **Goals:**
  - Hiring managers can ask natural-language questions about Cody's experience and get accurate, voice-consistent answers
  - Responses are grounded in real content (resume, case studies, operating principles) — zero hallucination of facts, roles, or metrics
  - The agent sounds like Cody — direct, practical, first-person, not corporate or robotic
  - The experience feels fast and polished (streaming responses, no multi-second blank waits)

- **Metrics:**
  - **Accuracy:** 100% of factual claims (job titles, metrics, company names, timelines) match source documents. This is non-negotiable — one wrong number kills credibility with a hiring manager.
  - **Voice consistency:** Responses read as first-person, conversational, confident-but-not-arrogant (matching the tone guidance in the Site Content Map)
  - **Latency:** First token streams within 1 second of submission
  - **Engagement:** Track how many visitors use the chat and how many messages per session (via Vercel Analytics or a lightweight event)
  - **Fallback rate:** When the agent doesn't have enough context to answer, it says so honestly rather than guessing. Target: <5% of questions require a "I don't have that info" response for on-topic questions.

---

### 3. User & Use Case

- **Primary user:** Hiring managers evaluating Cody for Chief of Staff, Head of Operations, Director of Ops, or Technical Program Manager roles at companies with <200 people.

- **Key scenarios:**
  1. **Targeted question:** "Has Cody managed offshore teams?" → Agent pulls from the support org case study and answers with specifics (LATAM, Europe, South Africa, 75+ people).
  2. **Philosophy question:** "How does Cody think about tooling decisions?" → Agent pulls from the "How I Operate" principles and answers in Cody's voice.
  3. **Qualification check:** "What's Cody's experience with AI?" → Agent synthesizes across the AI case study, personal interests, and tool usage to give a complete picture.
  4. **Off-topic / out-of-scope:** "What's the capital of France?" → Agent redirects politely: "I'm here to answer questions about Cody's experience and work — what would you like to know?"

---

### 4. AI Approach

- **Technique chosen:** Retrieval-Augmented Generation (RAG) with a system prompt persona

  The architecture has two layers:
  1. **System prompt / persona layer:** A carefully written system prompt that defines Cody's voice, tone, boundaries, and behavioral rules. This is where "sounding like Cody" comes from — not fine-tuning, but detailed prompt engineering with examples of how Cody speaks, what he emphasizes, and what he avoids.
  2. **RAG retrieval layer:** Cody's content (case studies, resume, operating principles, about page, Q&A pairs) is chunked, embedded, and stored in a vector database. On each user question, relevant chunks are retrieved and injected into the context window so the model answers from source material, not from its training data.

- **Why this approach:**
  - **No fine-tuning needed.** Fine-tuning a model on a small corpus (~5,000 words of case studies) would be expensive, slow to iterate, and wouldn't meaningfully improve factual grounding vs. RAG. Fine-tuning is better for style transfer at scale — overkill for a single-user portfolio agent.
  - **RAG keeps answers grounded.** The model can only reference content it's been given. When Cody updates a case study or adds a new one, the vector store updates — no retraining.
  - **System prompts are fast to iterate.** Tweaking voice, tone, and boundaries is a text edit, not a training run.
  - **Vercel AI SDK has native streaming + tool support.** The tech stack is purpose-built for this pattern.

- **Alternatives considered:**
  - **Pure system prompt (no RAG):** Stuff all content into the system prompt. Simpler, no vector DB needed. **Ruled out because:** Cody's full content (3 case studies × 1,500 words + resume + principles + Q&A) will exceed what fits cleanly in a system prompt while leaving room for conversation history. Works at MVP scale but won't scale as content grows. *However — this is a viable Phase 1 approach if total content stays under ~4,000 words.*
  - **Fine-tuning:** Train a model on Cody's writing to capture voice. **Ruled out because:** The corpus is too small for meaningful style learning, iteration is slow (hours per run), and it doesn't solve the grounding problem — a fine-tuned model can still hallucinate facts.
  - **Pre-written FAQ bot:** Map common questions to pre-written answers with keyword matching. **Ruled out because:** It can't handle novel questions, feels robotic, and defeats the purpose of demonstrating AI capability.

- **Key risks:**
  - **Voice drift:** The model defaults to generic "assistant" tone if the system prompt isn't specific enough. Mitigation: include 3-5 example Q&A pairs in the system prompt showing exactly how Cody talks.
  - **Hallucinated specifics:** The model invents a metric or timeline that doesn't exist in the source material. Mitigation: system prompt explicitly instructs the model to only cite facts from provided context, and to say "I don't have that specific detail" when unsure.
  - **Adversarial use:** Someone tries to jailbreak the agent or get it to say something inappropriate. Mitigation: system prompt boundaries + model-level safety. The agent should only discuss Cody's professional experience.
  - **Cost:** If the site gets significant traffic, API costs could add up. Mitigation: rate limiting per session, caching common responses, using a cost-effective model (Claude Haiku or Sonnet for chat, not Opus).

---

### 5. Scope

- **In scope:**
  - Chat UI on homepage (already built as placeholder — wire it up)
  - API route (`/api/chat`) using Vercel AI SDK
  - System prompt with Cody's persona, voice rules, and example Q&A pairs
  - Content ingestion: case studies, resume, operating principles, about page
  - Streaming responses
  - Graceful handling of off-topic or unanswerable questions
  - Basic rate limiting (e.g., 20 messages per session)
  - Mobile-responsive chat experience

- **Out of scope:**
  - Chat history persistence across sessions (conversations are ephemeral)
  - User authentication or accounts
  - Admin dashboard for reviewing conversations
  - Voice/audio input or output
  - Multi-turn memory beyond the current session's context window
  - Analytics dashboard (use Vercel Analytics events, not a custom dashboard)
  - Fine-tuning a model
  - Integrating with external calendars or scheduling tools

---

### 6. Technical Requirements

- **Stack / tools / dependencies:**
  - **Frontend:** Existing Next.js app (already built), `ai` package (Vercel AI SDK) for `useChat` hook
  - **Backend:** Next.js API route (`app/api/chat/route.ts`), Vercel AI SDK for streaming
  - **Model:** Claude Sonnet (via Anthropic API) — good balance of quality, speed, and cost. Can downgrade to Haiku if cost is a concern.
  - **Vector store (Phase 2):** Vercel Postgres + pgvector, or a hosted solution like Pinecone free tier. Not needed if Phase 1 uses system-prompt-only approach.
  - **Embedding model (Phase 2):** Voyage AI or OpenAI `text-embedding-3-small` for chunking content into vectors.

- **Data requirements:**
  - **Source content to ingest:**
    - Site Content Map (structure + guidance) — already exists
    - Completed case study text (once written)
    - Resume PDF → extracted to plain text
    - Operating principles (from /how-i-operate page)
    - About page content
    - **Custom Q&A pairs** — this is the secret weapon. Cody writes 20-40 question/answer pairs covering the most likely hiring manager questions, in his own voice. These become both system prompt examples and RAG retrieval targets.
  - **Format:** Markdown files in the repo, chunked at the section level
  - **Volume:** Small (~10,000-15,000 words total when all content is written)

- **Integration points:**
  - Anthropic API (Claude) for chat completions
  - Vercel AI SDK for streaming and `useChat` hook
  - Vercel Analytics for tracking chat engagement events

---

### 7. Demo & Deliverable

- **Final artifact:** A working AI chat widget embedded on the hirecody.site homepage that visitors can interact with immediately. No login, no friction — just type and get a response.

- **How it will be presented:**
  - The chat is the centerpiece of the homepage (right column, already positioned)
  - It's also a case study in itself — "I built a conversational AI agent trained on my own experience" is a powerful signal for AI-adjacent ops roles
  - Can be referenced in the AI in the Workplace case study as an example of AI-assisted development

---

### 8. Open Questions

- [ ] **Which model to use?** Claude Sonnet is the default recommendation for quality + speed + cost. Haiku is cheaper but may produce less nuanced voice matching. Need to test both and compare quality.
- [ ] **Phase 1: system prompt only, or RAG from day one?** If total content stays under ~4,000 words, system-prompt-only is simpler and faster to ship. RAG adds complexity but scales better. Recommendation: start with system prompt, migrate to RAG when content exceeds prompt limits.
- [ ] **How to handle the Q&A training pairs?** Options: (a) Cody writes them manually in a markdown file, (b) Cody does a recorded interview and the answers are transcribed and cleaned up, (c) Cody iterates with Claude to draft answers and then edits them to sound right. Option (c) is likely fastest.
- [ ] **Rate limiting strategy?** Per-session (cookie-based), per-IP, or per-device? Need to balance accessibility with cost control.
- [ ] **Should the chat be available on all pages or just the homepage?** Currently it's homepage-only. Could be a floating widget on all pages, but that adds complexity and may distract from case study reading.
- [ ] **Cost budget?** Need to estimate monthly API costs based on expected traffic. At ~100 visitors/month with ~5 messages each, using Sonnet, costs would be roughly $2-5/month. At scale this changes.
- [ ] **Should conversations be logged (anonymously) for Cody to review?** Useful for understanding what hiring managers ask and improving the Q&A pairs. Privacy implications to consider.

---

### Implementation Phases (Recommended)

**Phase 1 — System Prompt MVP** *(ship fast, iterate on voice)*
- Wire up the existing chat UI with Vercel AI SDK `useChat`
- Create API route with Claude Sonnet
- Write system prompt with persona, voice rules, 10-15 example Q&A pairs
- Stuff key content (resume highlights, principles, case study summaries) directly into system prompt
- Add basic rate limiting
- Deploy and test with real visitors

**Phase 2 — RAG + Full Content** *(once case studies are written)*
- Chunk all site content into embeddings
- Set up vector store (pgvector on Vercel Postgres or Pinecone)
- Retrieve relevant chunks per query and inject into context
- Expand Q&A pairs to 30-40 based on Phase 1 conversation logs
- Optimize for cost (caching, model selection)

**Phase 3 — Polish** *(nice-to-haves)*
- Suggested starter questions in the chat UI ("What teams has Cody built?" "How does Cody approach AI?")
- Typing indicator animation
- Conversation analytics events
- Floating chat widget option for non-homepage pages
