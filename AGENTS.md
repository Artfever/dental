# AGENTS.md — Codex repository harness

## Product mandate
Implement a compelling, fully functional **demo website** for Nayyar Dental Associates (Islamabad) following `MASTER_CODEX_PROMPT.md`. This project represents a real practice: factual integrity and respectful medical language matter as much as visual quality.

## Read order
1. `context.md` — public research; not an internal operations manual.
2. `CONTENT_POLICY.md` — truth and privacy guardrails.
3. `DESIGN_SYSTEM.md` — visual and motion constraints.
4. `SITE_SPEC.md` — routes, interactions, data architecture.
5. `VERCEL_CHECKLIST.md` — deployment acceptance.
6. `MASTER_CODEX_PROMPT.md` — end-to-end instructions.

## Working style
- Finish the implementation autonomously. Do not stop at scaffolding or ask unnecessary follow-up questions.
- Before coding, write a short private task plan or in-repo checklist; then execute it.
- Prefer editing existing files and preserving working configuration when the repository isn't empty.
- Use TypeScript, Next.js App Router, Tailwind CSS, Motion for React, lucide-react.
- Keep code maintainable and data-driven; business facts live in one typed config file.
- Do not commit secrets or add integrations that collect personal health information.
- No mock backend represented as functional, no fabricated reviews or staff.
- After editing, run lint, type checking, and production build; fix until green or clearly record the blocker.
- End with an honest completion summary including tests you actually ran.

## Design non-negotiables
- Follow `DESIGN_SYSTEM.md` v3, “The Olive Edit”, as the sole visual authority.
- Approved accent: olive `#344337`; primary background: paper `#F7F5EE`; ink: graphite `#242824`. **No teal, mint, medical blue or gradients.**
- Use editorial service rows instead of repetitive rounded cards. Before completion, visually audit against anti-template checklist.

## Release gates
- Every CTA resolves to a valid route/phone/WhatsApp/Maps URL.
- Accessible mobile navigation and reduced-motion handling.
- No false booking confirmation or unverified clinic claims.
- No missing pages, broken images, dummy lorem ipsum, or avoidable console errors.
- Deployable on Vercel without environment secrets.

- Read `PAKISTAN_MARKET_REVIEW.md` for Pakistani market rationale. It is qualitative research, **not** an exhaustive or measured CSS-palette census.
