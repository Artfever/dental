# Design system — The Olive Edit (v3)

## Creative thesis
**Nayyar Dental Associates, Islamabad** — proposed **demo-only** art direction, not a claim about existing clinic branding. Design it like an independent architectural / editorial practice with clinical precision. Think crisp porcelain paper, deep botanical olive ink, a typographic masthead, slender rules, credible dental photography and the smallest touch of burnt terracotta. The site should be memorable without being loud.

**Do not make a generic AI dental website.** Specifically ban the ubiquitous teal/mint/navy gradient, glossy SaaS cards, blue medical icon grids, stock-photo hero featuring a smiling dentist pointing at teeth, floating glass pills, excessive blur and random decorative blobs.

## Approved color system — exact values
| Role | Token | Hex | Use |
|---|---|---|---|
| Canvas | `paper` | `#F7F5EE` | Main page background: softly warm porcelain, off-white not yellow |
| Ink | `graphite` | `#242824` | Headings, body text, rules, footer on light canvas |
| Primary | `olive` | `#344337` | Main CTA, active links, editorial emphasis |
| Primary hover | `olive-dark` | `#263329` | CTA hover and dense ink sections |
| Soft accent | `sage-mist` | `#DCE3D7` | Selected background blocks and typography highlights, never text on paper |
| Warm accent | `terracotta` | `#A84F38` | Micro-accent line, labels, select icon strokes; avoid low contrast text |
| Secondary surface | `limestone` | `#E9E9E0` | Section panels, offset image mats |
| Card surface | `cream` | `#FFFEFA` | Rare inset surfaces, contact panel |
| Muted text | `secondary-ink` | `#565E57` | Explanatory copy on light backgrounds; verify AA contrast |

Color ratio guideline: 72% porcelain/white, 17% charcoal/light stone, 9% olive, 2% terracotta. **This is a light website.** Olive is a purposeful accent and occasional sectional anchor, not a default fill for every section. Avoid gradients entirely by default. Never introduce a second saturated brand color.

## Typography
- **Editorial serif** for oversized headlines, e.g. `Cormorant Garamond` (or `DM Serif Display` if it reads better), paired with **precise grotesk sans** such as `Manrope` or `DM Sans`. Use `next/font` and ensure italic/regular weights are intentionally chosen.
- Hero should resemble an editorial cover, not a startup landing page. Wide line spacing control, hanging punctuation as appropriate, visual restraint. Primary headline must clearly mention dental care and Islamabad, not vague luxury copy.
- Small uppercase section indices (`01 / THE PRACTICE`) with increased tracking; one oversized expressive serif statement per main screen region.
- Headlines 56–96px desktop, carefully responsive; text measure 60–72ch; body 16–18px; minimum AA contrast.

## Layout and image art direction
- Asymmetric editorial grid, near-architectural alignment, fine divider rules, generous negative space. Unusual but usable layout: large typography left, portrait-oriented detail image right; small vertical marginal notes; numbered service index instead of repeated identical cards.
- Hero: large type + portrait or close-up architectural composition, one thin line illustration (a gentle abstract enamel/tooth contour). No stock dentist pointing or arms-folded medical teams.
- Select photography in understated cream/bone/natural daylight, clinic details, hands at work without identifiable staff, textures, physical material. Do NOT imply generic images are the actual clinic.
- Corners mostly square to 6px, radius up to 10px selectively. No pill-shaped service cards; no huge shadows. Borders 1px graphite/low opacity. Prefer spacing and typography to depth effects.
- Mobile maintains typographic character without horizontal scroll; 20–24px gutters, 44px minimum tap targets.

## Animation signature — dental-specific, but invisible until noticed
- 1.2–1.6s SVG `pathLength` draw of one fine tooth/enamel contour on hero, in olive or graphite. On reduced motion: fully drawn path from first paint.
- Small **single-pass** curved smile-line sweep under one headline, stroke-dashoffset or path draw. Once only.
- Scroll reveals: opacity plus 8–14px translate, 350–550ms, restrained stagger only for service index rows. Content should be visible if JS is disabled.
- Hover state: olive rules that grow 12–24px, directional arrow motion 2–4px; no scale-jumping cards.
- Services: focus/hover draws a fine terracotta line across the indexed row, **not** animated tooth emojis, 3D molars or spinning icons.
- Enquiry transition: small arc draws beside CTA and becomes still. No looping shine, parallax, floating dots, glints, confetti, or animations at rest.
- Support keyboard focus-visible and `prefers-reduced-motion`; avoid layout shift and scrolljacking.

## Component grammar
- Header resembles an understated studio masthead (provisional text wordmark), editorial vertical rhythm and fine separator.
- Services are a numbered typographic list with short descriptions and discreet arrow indicators, not six colorful icon tiles.
- A restrained image/text 'practice philosophy' spread; FAQ uses clear accordion, contact uses an elevated but quiet inset panel.
- Footer may use graphite background with cream typography, with a single terracotta rule. Footer should not look like a black enterprise SaaS footer.
- CTA button: solid olive, cream text, almost-square corners and simple arrow. Secondary CTA: plain underlined link with arrow.

## Explicit rejection checklist
If the result resembles a default Next.js/Tailwind/AI-produced dentist template, revise before finishing. Reject: teal, aqua, mint, cyan, cobalt or navy as primary color; rainbow gradients; blurred glow circles; Glassmorphism; repeated three-column icon cards; generic gradient hero; enormous round buttons; fake testimonials/reviews; random floating badges; smiling dentist hero stock; excessive gradients/shadows; inexplicable badges; stock photos claimed as real; decorative dental imagery that overwhelms content.

## Research provenance and limits
This is a **proposed** visual identity for a demo and is not the existing Nayyar Dental Associates brand. A qualitative review of publicly accessible Pakistani dental and medical websites informed the positioning; see `PAKISTAN_MARKET_REVIEW.md`. This was **not** an exhaustive scrape of every Pakistani website or a verified automated extraction of each site’s CSS color tokens. The hex codes above are design decisions, not measurements of competitors.

## Contrast and implementation
- Primary CTA: olive `#344337` with porcelain `#FFFEFA` label. Hover `#263329`.
- Typography on light backgrounds uses charcoal `#242824`, muted text `#565E57`.
- Terracotta `#A84F38` is restrained and must not serve as small text unless contrast-tested.
- WhatsApp button may contain a recognizable WhatsApp icon, but its surrounding UI must use the brand palette rather than a generic green floating blob.
- Avoid olive-on-sage-mist for body text; check WCAG AA using a real contrast calculation.
- No old burgundy, blush pink or medical teal styling should survive.
