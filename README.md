# Nayyar Dental Associates — The Olive Edit

A complete Next.js demo for the publicly listed practice in I-8 Markaz, Islamabad. This is a proposed website and visual identity, with business details pending owner approval. It is ready to import into Vercel; it has not been deployed by this task.

## Run locally

Use Node.js 24 LTS (Node.js 22 or newer is supported).

```sh
npm ci
npm run dev
```

Open http://localhost:3000. On Windows PowerShell with script execution restricted, use `npm.cmd` and `npx.cmd` instead of `npm` and `npx`.

For a production preview:

```sh
npm run build
npm run start
```

## Pages and functionality

- `/`: editorial hero, service index, practice introduction, three-step enquiry journey, FAQs, location, and contact CTA.
- `/services`: nine publicly described care categories, cautious summaries, and treatment-specific enquiry links.
- `/about`: qualified public history, patient-focused concept, team-verification notice, and location.
- `/contact`: real phone, WhatsApp, Maps-search and social links; topic/category selector; message preview; no sensitive inputs or fake submissions.
- `/privacy`: transparent demo, hosting, third-party service, and information-handling explanation.
- Useful 404, favicon, generated social image, page metadata, minimal factual Dentist JSON-LD, robots, and sitemap.

Mobile navigation uses a native modal dialog, explicit keyboard focus wrapping, Escape-to-close, focus restoration, and scroll locking. Native FAQ disclosures work with a keyboard and without JavaScript. Main content is visible before animation enhancement. Below-fold photographs are lazy-loaded; fonts and images are bundled locally.

The animation vocabulary includes a single-pass tooth/enamel outline, smile curve, floss-inspired journey line, section reveals, route transitions, extending service rules, and directional link arrows. All decorative motion respects `prefers-reduced-motion`.

The exact v3 palette and editorial direction follow `DESIGN_SYSTEM.md`. `PAKISTAN_MARKET_REVIEW.md` provides qualitative positioning rationale, not a measured palette census. No shadcn components were needed: native dialog, details, and select elements serve the interactions with a smaller dependency footprint.

## Validate

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
```

The browser suite starts a production server, so run the build first. It uses installed Google Chrome by default. To use bundled Chromium instead, run `npx playwright install chromium` and set `PLAYWRIGHT_CHANNEL=chromium` in your shell before running the suite. This setting is for tests only; deployment requires no environment variables.

Executed successfully during delivery:

- ESLint, TypeScript validation, and production build.
- Development server: all five page routes returned HTTP 200.
- One mathematical WCAG AA contrast test for seven actual foreground/background pairs.
- Six Playwright tests: routes and assets; WCAG A/AA axe checks on all five pages at desktop and mobile; all local links and fragment targets; phone/WhatsApp/Maps URL structure; menu focus and Escape; FAQ keyboard interaction; treatment selection and message encoding; reduced-motion/no-JavaScript content; 404, robots, sitemap, JSON-LD, and social image.
- No horizontal overflow on all five pages at 320, 390, 768, 1024, and 1440px.
- Desktop, tablet, and mobile screenshots inspected against the anti-template checklist. Screenshots and traces are written to ignored `test-results/`.
- Production dependency audit: zero reported vulnerabilities. The full audit reports five high-severity advisories in the development-only `eslint-config-next → fast-glob → micromatch → braces` dependency chain. npm proposes downgrading the Next lint config incompatibly; this was not applied. Recheck upstream fixes before updating tooling.

Automated axe checks are useful coverage, not a claim of a complete accessibility certification. No Lighthouse score is claimed. Real phone availability, external social account ownership, and clinic response behavior cannot be established by local tests.

## Deploy directly to Vercel

1. Import [Artfever/dental](https://github.com/Artfever/dental) at https://vercel.com/new.
2. Select branch `main` and repository root as the Root Directory. Keep the detected **Next.js** framework preset.
3. Choose Node.js **24.x**. Keep Install Command `npm ci` (or Vercel’s default npm installation), Build Command `npm run build`, and the default Next.js Output Directory.
4. Add **no custom environment variables or secrets**. Click **Deploy**.
5. Visit `/`, `/services`, `/about`, `/contact`, `/privacy`, `/robots.txt`, and `/sitemap.xml` on the generated URL. Test outbound enquiries without assuming they confirm appointments.

The demo deliberately uses `noindex, nofollow` metadata, an `X-Robots-Tag` response header, and robots disallow rules. Keep them for the concept. Vercel’s automatic `VERCEL_URL` supplies the social-image origin; local builds use the actual localhost preview. No fictional clinic domain or canonical is set. The sitemap derives its origin from the incoming deployment request rather than an invented domain.

Before an approved official launch, replace the provisional branding and imagery, configure the authorized domain, update metadata/canonicals, and deliberately review all three noindex controls. Use `VERCEL_CHECKLIST.md` for the wider launch checklist.

## Owner verification and content editing

All changeable business facts live in `src/config/clinic.ts`. Care summaries live in `src/data/services.ts`; FAQs are in `src/data/faqs.ts`. Preserve `CONTENT_POLICY.md` when editing.

- Confirm landline **051-4938161** and WhatsApp **0302-5188884**. They are publicly listed, not owner-verified. The older mobile number is omitted.
- Confirm the address, exact map pin, first-floor access, opening hours, current treatment menu, fees, clinicians, and appointment process.
- Confirm the self-reported history since 2005, social accounts, brand permissions, privacy text, and marketing copy.
- No reviews, ratings, credentials, team biographies, guarantees, emergency availability, or free-consultation offers are invented.
- No database, records, payment processing, analytics, tracking embeds, API keys, or booking backend is included. The composer only prepares a non-sensitive message for the visitor to send in WhatsApp.
- Replace the generic dental photograph with approved local assets and accurate alt text. Source and font-license details are in `public/ASSETS.md`.

The Git history separates source documentation, application implementation, automated verification, and deployment handoff.
