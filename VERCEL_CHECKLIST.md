# Vercel deployment and QA checklist

## Local acceptance
- [ ] `npm install` works on an actively supported Node.js LTS release compatible with installed Next.js.
- [ ] `npm run dev` serves all routes.
- [ ] `npm run lint` succeeds (configure script if project template omits it).
- [ ] `npx tsc --noEmit` succeeds.
- [ ] `npm run build` succeeds.
- [ ] No missing image assets, dead CTA links, runtime console errors, or horizontal scrolling at mobile widths.
- [ ] Accessibility: keyboard navigation, focus states, reduced motion, useful alt text, contrast, semantic landmarks.
- [ ] No made-up appointment slots, hours, reviews, claims, pricing, doctors, photographs, or awards.
- [ ] Phone and WhatsApp marked as pending verification in project README before public clinic launch.
- [ ] Metadata and OG image are accurate; no fake domain in canonical, `robots.txt`, sitemap, or structured data.

## Deploy
1. Commit working code to a GitHub repo (do not commit `.env*`, `node_modules`, or credentials).
2. On https://vercel.com/new, import that repository.
3. Vercel should detect **Next.js** automatically. Keep default build command (`next build` via npm build script), output settings, and install command unless project requires otherwise.
4. No environment variables should be required for the static demo.
5. Click Deploy; inspect the preview URL on desktop and phone.
6. Check `/`, `/services`, `/about`, `/contact`, `/privacy` and all important CTAs.
7. Until clinic approves the demo, prefer a preview deployment or clear `Concept website` label. For a public non-official preview, consider `noindex` to avoid competing with genuine listings; remove only after approval.
8. Once approved, configure an authorized custom domain, verify clinic contact details, and review SEO/canonicals/structured data again.

## Troubleshooting
- Build fails due to fonts or remote images: use bundled/local fallback; do not rely on flaky runtime fetches.
- Env vars unexpectedly required: remove integrations or document precisely, rather than inventing values.
- Animation hydration error: move interactive effects into small client components and keep initial render consistent.
- Broken Maps pin: use the general Maps search URL from `context.md` until clinic supplies an official place URL.
