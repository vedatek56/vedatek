<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-END:nextjs-agent-rules -->

# VEDATEK Project Performance, Accessibility & SEO Rules

Whenever creating or modifying pages, components, or styles in this repository, strictly enforce the following standards:

### 1. Performance & LCP (Target: 100/100)
- **Hero / Above-the-Fold Content**: Heading elements (`<h1>`, `<p>`, hero visuals) MUST paint immediately on initial render. NEVER wrap above-the-fold hero text in Framer Motion with `initial={{ opacity: 0 }}`.
- **Off-Screen & Below-the-Fold Components**: Use `[content-visibility: auto]` on heavy SVG visual containers (e.g. `HeroVisual`, `IntegrationVisual`) to defer off-screen mobile rendering.
- **CSS Filters**: Avoid heavy backdrop blur filters (`blur-3xl`, `backdrop-blur-xl`) on mobile containers; use lightweight opacity layers or radial gradients.
- **Analytics & Scripts**: Always load Google Analytics / GTM with `strategy="lazyOnload"` and include `preconnect` / `dns-prefetch` resource hints in `<head>`.

### 2. Accessibility & WCAG AA (Target: 100/100)
- **Strict Heading Order**: Heading elements MUST follow a sequential descending order (`<h1>` -> `<h2>` -> `<h3>`). NEVER use `<h4>` without a preceding `<h3>` and `<h2>`.
- **Color Contrast Ratio**: Ensure foreground text meets WCAG AA contrast ratio (>4.5:1). Avoid low-opacity text color utilities like `text-brand-cyan/85` on dark backgrounds.
- **Interactive Elements**: All `<button>` tags MUST have an explicit `type` attribute (`type="button"` or `type="submit"`) and a descriptive `aria-label`.
- **Icon / Logo Links**: Icon-only links and brand logos MUST have descriptive `aria-label` attributes (e.g., `aria-label="VEDATEK Homepage"`).

### 3. SEO & Anchor Text (Target: 100/100)
- **Descriptive Link Text**: NEVER use generic link text like `"Learn More"` or `"Click Here"`. Use unique, keyword-rich anchor text (e.g., `"Explore AI & Automation"`, `"View Linnworks Services"`).
- **Structured Data Schemas**: Include valid JSON-LD schemas (`FAQPage`, `LocalBusiness`, `ProfessionalService`) on relevant landing pages.
- **Internal Link Hierarchy**: Maintain site-wide internal link paths (e.g. Footer, CTA banners) to pass link equity directly to priority SEO landing pages (`/linnworks-consultants`).

### 4. Build & Environment Optimization
- Maintain modern `browserslist` target in `package.json` to eliminate legacy polyfills (`Array.prototype.flat`, `Object.hasOwn`).
- Preserve static asset long-term immutable caching rules in `public/_headers`.

---

# 🤖 Agentic Systems & Graph Engineering Rules (Andrew Ng & Anthropic Playbook)

Whenever designing, building, or modifying AI agents, LLM workflows, or multi-agent architectures, strictly enforce the following design principles:

### 1. Architecture Over Model (GPT-3.5 Agentic > GPT-4 Zero-Shot)
- **Workflow First**: Invest in workflow architecture and iterative loops rather than relying solely on stronger foundation models. Compound workflows (55% → 72% → 84% → 88% → 95%) deliver far greater reliability than zero-shot direct prompts.
- **Fast Tokens as Multiplier**: Prioritize fast token generation (e.g. smaller/faster models for loops, extraction, and routing) to allow more iterations and workers within the same latency/cost budget.

### 2. Staged Build Path & Decision Rules
- **Rule 1: Start with the Cheapest Pattern**: Always begin with the minimal reliable pattern (Zero-Shot → Reflection → Tool Use → Planning → Multi-Agent → Graph Architecture). Earn the right to add complexity only when measured failure demands it.
- **Rule 2: Measure Before Promoting**: Establish a baseline before promoting to the next pattern. If baseline failure rate is <5%, pattern complexity cost likely exceeds benefit.
- **Rule 3: Match Control to Risk**: High-stakes tasks (finance, security, data modification) MUST use deterministic chains/evaluation gates with explicit schemas. Low-stakes tasks (brainstorming, drafting) can leverage autonomous planning/multi-agent exploration.
- **Rule 4: Count Tokens, Not Agents**: Cost scales with tokens consumed, not conceptual agent count. Design for token efficiency with bounded intermediate outputs.
- **Rule 5: The Graph Earns Itself**: Introduce persistent Knowledge Graphs (Neo4j / ADK) when state must persist across sessions, or when multiple agents query/update shared entities and relationships.

### 3. Core Agent Design Patterns
- **Reflection / Evaluator-Optimizer**: Separate generator from critic. Always enforce explicit rubrics, cap maximum revision iterations, cite line-level evidence, and log intermediate artifacts (draft, critique, revision).
- **Tool Use**: Enforce strict, validated JSON tool schemas. Separate read-only permissions from write-access. Implement explicit rate-limiting and fallback handlers (e.g., pivot search tools upon API limits).
- **Planning**: Generate structured JSON plans. Preserve successful intermediate work across replans ("preserve successful work across replans"). Bound step counts and define explicit human escalation thresholds.
- **Multi-Agent Collaboration**: Use role-specialized prompts with distinct rubrics (e.g. Coder vs Security Auditor vs Tester). Require agents to communicate via typed artifact contracts and bounded summaries (e.g. 200 tokens), NOT raw full transcripts.
- **Prompt Chaining**: Use fixed sequences with programmatic gate checks between stages to catch malformed inputs early.
- **Routing**: Use fast, lightweight models to classify and route queries to specialized sub-agents.
- **Graph Architecture**: Externalize shared state into a durable knowledge graph (Entities, Claims, Sources, Artifacts, Runs with typed edges `mentions`, `supports`, `contradicts`, `derived_from`, `supersedes`). Track full provenance and versioning.

### 4. Anti-Patterns to Strictly Avoid
- 🚫 **The Everything-Agent**: Never build a single monolith agent with dozens of tools and a bloated prompt.
- 🚫 **The Echo Chamber**: Avoid running identical prompts across agents expecting diversity; use distinct rubrics/prompts.
- 🚫 **The Infinite Loop**: Never create reflection/planning loops without strict iteration caps and stopping criteria.
- 🚫 **The Phantom Graph**: Never build graph infrastructure/ontologies that agents do not actively query.
- 🚫 **Conversational Bottlenecks**: Never feed un-summarized worker transcripts back into orchestrators.
- 🚫 **The Premature Agent**: Never over-engineer simple tasks into multi-agent systems without proving zero-shot/single-loop failure first.

