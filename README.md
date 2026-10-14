# Nayyar Dental Associates — Codex one-shot website kit

This is a **prompt and project-specification kit**, not the finished website. It is designed to be placed in a fresh repository and handed to Codex to generate a polished demo Next.js website suitable for Vercel.

## Files
- `MASTER_CODEX_PROMPT.md` — paste as your main instruction to Codex.
- `AGENTS.md` — persistent repository rules for Codex.
- `context.md` — researched clinic public presence (basis of facts).
- `DESIGN_SYSTEM.md` — colors, typography, layouts, animation personality.
- `SITE_SPEC.md` — route/component/data/interaction acceptance criteria.
- `CONTENT_POLICY.md` — prevents false medical/business claims.
- `VERCEL_CHECKLIST.md` — checks and deployment steps.

## Recommended workflow
1. Make a new empty folder/repository, e.g., `nayyar-dental-demo`.
2. Copy **all** files from this kit into that folder's root (especially `AGENTS.md` and `context.md`).
3. Open the folder in VS Code, launch Codex with file-edit and terminal permissions inside this project.
4. In Codex, paste: `Read AGENTS.md and MASTER_CODEX_PROMPT.md and all documents they reference. Execute MASTER_CODEX_PROMPT.md end to end. Build the full site in this repository, install dependencies, run lint/typecheck/build, fix failures, and report results. Do not stop after planning or scaffolding.`
5. Let Codex implement and verify. Check the `git diff`, run `npm run dev`, then open localhost on phone and desktop sizes.
6. Push to GitHub; import project on Vercel; deploy. See `VERCEL_CHECKLIST.md`.

## Visual identity (revised)
This kit uses **The Olive Edit** art direction: soft porcelain, graphite typography, olive accents, sage mist and terracotta. It explicitly prohibits blue/teal/mint dental-template aesthetics. See `DESIGN_SYSTEM.md` and the mandatory visual direction in `MASTER_CODEX_PROMPT.md`.

## Important caveats
Business contact information in the public research is **not currently owner-confirmed**. This is a visual/product concept and its factual material should be approved by the clinic before official launch. The site must never suggest WhatsApp messages are confirmed bookings. The supplied public location is I-8 Markaz, not a separate I-10 branch.

The v3 choice is documented in `PAKISTAN_MARKET_REVIEW.md`. These tokens are an original design recommendation, **not** a claim that all Pakistani medical or dental websites were scraped.
