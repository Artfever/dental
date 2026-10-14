# MASTER CODEX PROMPT — Nayyar Dental Associates Website Demo

You are Codex, acting as an autonomous senior creative developer, UX designer, accessibility engineer, SEO specialist, and QA lead. Your job is to **build a complete, polished, deployable demo website**, not a scaffold, mockup, or plan. Execute end-to-end in this repository with minimal hand-holding.

## First: read the repository instructions
Read `AGENTS.md`, `context.md`, `DESIGN_SYSTEM.md`, `SITE_SPEC.md`, `CONTENT_POLICY.md`, and `VERCEL_CHECKLIST.md` before modifying files. Resolve conflicts in favor of factual safety and accessibility, then this prompt, then the other specifications. Do not stop after writing a plan. Create the code, assets, content, and documentation, run checks, fix failures, and summarize the actual result.

## Mission and audience
Build a sophisticated, premium-yet-welcoming, responsive **demo website for Nayyar Dental Associates in I-8 Markaz, Islamabad**. It should look like a distinctive boutique dental practice—not a generic SaaS template, hospital dashboard, or childish cartoon site. Target first-time dental patients, families, and patients considering restorative/cosmetic treatments. Create credibility and make it exceptionally easy to enquire via WhatsApp, call, and get directions. This is a **public-facing brochure and enquiry demo**, not a live medical booking service.

## Technical specification
- Next.js App Router + TypeScript, Tailwind CSS using the current stable compatible versions, npm, ESLint.
- Use `motion` (`motion/react`) for selected, tasteful client-side animations; use CSS for low-complexity transitions.
- Use `lucide-react` icons. No bulky UI framework unless genuinely justified.
- Use `next/font` for typography; prefer a sophisticated sans paired with an elegant display font, both readable.
- Use `next/image` for photographic content, with local optimized assets when available. Avoid broken external image dependencies. If reliable photography is unavailable, make editorial artwork/gradient compositions or local SVG illustrations and label demo imagery where appropriate. Never pull other clinics' photos or photos of actual staff without permission.
- Static-first architecture, no database, no auth, no paid services or API keys, no server-side patient data processing. Deploy directly to Vercel.
- Prefer React Server Components; keep client components small and only where interactive.
- All external links open appropriately and safely. All actions must work: phone, WhatsApp, directions, navigation, accordion, forms.
- No `any`-typed shortcuts, no dummy broken buttons, no lorem ipsum, no giant TODOs.

## Visual direction — mandatory art-direction revision
Implement **The Olive Edit** from `DESIGN_SYSTEM.md`, not a stereotypical dental site. The site should feel like a beautifully typeset independent design journal applied to a healthcare practice: soft porcelain `#F7F5EE`, graphite `#242824`, olive `#344337` as a tightly controlled primary brand accent, muted sage mist `#DCE3D7`, limestone `#E9E9E0`, terracotta `#A84F38`. This is the **only** approved palette; the reasoning is recorded in `PAKISTAN_MARKET_REVIEW.md`. Do not use teal, mint, cyan, blue, aqua or SaaS gradients. Do not revert to familiar medical blue/green even if typical dental competitor sites use it.

Art direction: expressive serif typography paired with restrained modern sans; near-architectural asymmetric composition, thin divider lines, numbered editorial service index, near-square corners, photography framed like a print magazine, and very limited shadows. Let typography, materiality, composition and calm white space establish premium quality. Build one confident 1440px hero with meaningful hierarchy, then translate thoughtfully to 768px and 390px—not generic responsive stacks of three cards.

Hero: a split editorial spread with large readable dental-care message, local place identifier `I-8 Markaz, Islamabad`, one clear olive WhatsApp CTA and quieter secondary action; single minimalist anatomical tooth/enamel line drawing or carefully art-directed photo. Do not mimic a real clinic logo. Use a provisional typographic masthead that is clearly demo branding.

**Originality gate:** Before considering the design done, inspect hero, service area, CTA, nav and footer against `DESIGN_SYSTEM.md` anti-patterns. If it looks like a generic AI-generated dental landing page—gradient background, medical teal, floating cards, rounded pill-everything, generic stock doctor, icon grid—redesign it. Do not treat compliance with functionality alone as design completion.

## Animation direction — understated, dental-specific, performant
Build a reusable animation vocabulary:
1. Hero: delicate SVG tooth-outline draw-on (1.2–1.8s), with a quiet single-pass curve draw; absolutely no shimmer or sparkle.
2. Header and CTA: 150–250ms hover/focus transitions, subtle arrow slide, no bounce spam.
3. Cards: reveal on entering viewport (opacity 0→1, y 12→0, 0.4–0.65s), limited stagger; accessible when JS is slow.
4. Dental service icons: a thin terracotta rule that extends across an indexed editorial service row on hover/focus; no rotating teeth or icon tiles.
5. Patient journey: thin line traces between `Discover → Enquire → Visit`, inspired by a dental floss thread, with reduced-motion fallbacks.
6. Smile motif: a restrained curved line reveal in the hero or CTA band.
7. Accordion: smooth open/close with semantic native controls or accessible button behavior.
8. Mobile menu: smooth but short exit/entrance, correct focus handling.
9. Prefer `transform` and `opacity`, avoid animation of expensive filters and layout thrash. **No autoplay carousels**, parallax overload, scrolljacking, background video, animated numerical claims, or perpetual motion.
10. Honor `prefers-reduced-motion` / Motion reduced-motion settings; content must be readable without JS-driven animation.

## Required routes
- `/` — complete homepage with hero; subtle trust/value proposition (without invented statistics); service highlights; about/story preview; how to enquire; visual treatment philosophy; FAQs; location/map CTA; final appointment CTA.
- `/services` — an elegant indexed grid for general dentistry, scaling/polishing, endodontics/root canal, orthodontics, prosthodontics, pediatric dentistry, restorative care, wisdom tooth extraction, and implants. Present as examples of **services mentioned in public profiles, subject to confirmation**, not guaranteed current availability. Write plain-language, medically cautious summaries without treatment outcomes or prices.
- `/about` — clinic approach, public-reported history since 2005 with qualified wording, neighborhood/location, respectful team/about placeholder without invented credentials or portraits.
- `/contact` — clickable call, WhatsApp, location/directions, contact/enquiry UX, social links, explicit note that appointment requests are not confirmed until staff replies. Do not display unverified operating hours as fact.
- `/privacy` — a concise demo notice explaining WhatsApp/call actions, and that the site does not store patient records. Avoid pretending to be a formal clinic-approved legal policy.
- Appropriate not-found page and global metadata/OG/social share images if feasible.

## Conversion flow
Primary CTA: `Enquire on WhatsApp` opens `https://wa.me/923025188884?text=...` with a **non-sensitive** prefilled message (example: “Hello, I would like to enquire about an appointment at Nayyar Dental Associates.”). The number is publicly listed but **awaits clinic verification**; centralize it in `src/config/clinic.ts` or equivalent and label in README. Never tell the visitor the appointment has been booked. Secondary CTA `Call the Clinic` links to `tel:+92514938161` (also requires verification). `Get Directions` links to `https://www.google.com/maps/search/?api=1&query=Nayyar+Dental+Associates+I-8+Markaz+Islamabad`; this is a Maps **search**, not an exact verified pin. Optionally show a simple, accessible `contact preference` selector and enquiry composer that builds a WhatsApp link **without collecting clinical symptoms or sensitive data**. No fake form submission, no email endpoint without infrastructure, no simulated appointment slots.

## Content integrity — non-negotiable
All business claims must be grounded in `context.md` and ruled by `CONTENT_POLICY.md`.
- Clinic: **Nayyar Dental Associates**; location **Office No. 3, First Floor, Ahmed Centre, I-8 Markaz, Islamabad, Pakistan**.
- Context: public info suggests practice established in 2005 (self-reported). Do not assert verified credentials, outcomes, emergency service, accreditation, 5-star reviews, treatment price, free consultation, instant booking, hours, or patient testimonials.
- Do not claim an I-10 branch. Do not link to `nayyar-dental.com` (unrelated U.S. business).
- Staff names/biographies and photos must be omitted or clearly marked `To be confirmed by clinic` rather than invented.
- Use tasteful *generic* imagery that does not imply it depicts the actual office, doctors, or patients. Include alt text.
- Do not include patient before/after photos, patient records, review screenshots, external tracking, analytics cookies, or unverifiable testimonials.
- Avoid 'pain-free', 'guaranteed', 'best', 'number one', and medical outcome promises.
- Put all changeable business data into one config file.
- It is a demo: include a discreet `Concept website • Details pending clinic confirmation` note in footer rather than a giant watermark on every page.

## Quality requirements and verification
- Responsive, keyboard accessible, semantic headings, strong visible focus states, mobile menu works, `aria` labels, form labels, meaningful alt text, sufficient contrast.
- SEO metadata, sensible page titles, descriptions, canonical only if real domain known (otherwise omit), robots/sitemap setup without fictitious hostnames, JSON-LD only for facts grounded in context; omit review/rating and hours structured data.
- Maintain 0 horizontal overflow on 320–1440px; images sized to avoid layout shift; lazy load below-fold imagery; reserve sizes; content works under reduced motion.
- Aim for excellent Lighthouse scores, but **do not fabricate benchmark results**.
- Run `npm install`, `npm run lint`, `npx tsc --noEmit`, `npm run build` and repair failures. Add a basic automated test where sensible; if browser tooling exists, take screenshots at mobile and desktop, inspect and polish.
- Keep components modular (header, footer, hero, services, FAQ, enquiry CTA, location, reveal animation, etc.). Do not overengineer.
- Document any limitations and remaining owner verification items in README.

## Execution order — do not stop prematurely
1. Inspect repository; read specified MD files.
2. If no application exists, scaffold Next.js here. If one exists, adapt without needless destructive changes.
3. Build tokens, typography, layout, responsive header/footer, icon and image system.
4. Implement complete pages and all CTA interactions; use polished, original copy.
5. Layer in dental micro-animations and accessibility controls.
6. Add metadata, not-found, privacy, and deploy configuration if needed.
7. Install, lint, typecheck, build; fix errors; test flows. Do not assert unexecuted tests passed.
8. Update README with local/Vercel deploy steps, content caveats, and how to replace demo assets.
9. In your final response, report files created, pages completed, tests actually run, any blockers, and exact commands to run and deploy. No requests for further permission unless blocked by a destructive or external action.

## Definition of done
The result must look like a website ready to show a dental clinic owner on a laptop and a phone, complete enough to deploy to Vercel immediately. No bare template, placeholder cards, broken CTAs, fictitious patient claims, or unfinished pages. Prioritize finishing a high-quality functioning site over adding unnecessary features.

## Market-informed design mandate
Reference `PAKISTAN_MARKET_REVIEW.md` to explain why the olive/porcelain/terracotta palette was selected. Competitor positioning notes are qualitative, not extracted CSS colors. Follow `DESIGN_SYSTEM.md` for the exact token values. Do not copy any competitor site’s design, code, photos or claims. Do not introduce previous v2 burgundy or pink colors.
