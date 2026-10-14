# Website specification and acceptance criteria

## Product scope
A public brochure/conversion demo, explicitly not a live appointment, triage, or health-data platform. Patient journey: discover → understand services → contact staff over WhatsApp/phone → visit the I-8 clinic.

## Routes and page sections
| Route | Required sections |
| --- | --- |
| `/` | Header, premium hero, short confidence statement, service overview, patient-focused approach, three-step enquiry journey, about teaser, FAQ, location/visit card, full-width WhatsApp CTA, footer |
| `/services` | Intro, accessible card grid of services from `context.md`, plain-language summaries, non-guarantee note, enquiry CTA |
| `/about` | Practice overview, public-reported 2005 history accurately qualified, editorial values, no fabricated team cards, location, CTA |
| `/contact` | Contact methods, directions, non-sensitive WhatsApp message builder (optional), social links, confirmation disclaimer, note that hours must be verified |
| `/privacy` | Demo-only privacy/transparency note: no personal data stored by site, WhatsApp handled by third-party provider; no invented formal policy |
| 404 | Useful not-found screen with link home |

## Config data
Create `src/config/clinic.ts` (or consistent equivalent) with typed fields:
- `name: "Nayyar Dental Associates"`
- `streetAddress: "Office No. 3, First Floor, Ahmed Centre"`
- `area: "I-8 Markaz"`, `city: "Islamabad"`, `country: "Pakistan"`
- `phoneDisplay: "051-4938161"`, `phoneTel: "+92514938161"`
- `whatsAppDisplay: "0302-5188884"`, `whatsAppDigits: "923025188884"`
- `mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Nayyar+Dental+Associates+I-8+Markaz+Islamabad"`
- Instagram `https://www.instagram.com/nayyar_dental_associates/`
- Facebook `https://www.facebook.com/p/Nayyar-Dental-Associates-100054313879169/`
- LinkedIn `https://pk.linkedin.com/company/nayyar-dental-associates`
- `hours: null` (not independently verified)
- `bookingDisclaimer: "Appointment enquiries are confirmed only after clinic staff replies."`
- configurable `demoNotice` and `verificationRequired` fields.

## CTAs and UX
- Sticky header with clear links and WhatsApp CTA; compact mobile drawer with focus management and escape-to-close.
- WhatsApp message must contain no symptom, diagnosis, medical history, or personally identifying health data. Encode query correctly.
- `tel:` links work wherever shown.
- Directions use verified **Maps search URL**, not an invented pinned address or coordinates.
- FAQ is accessible and concise; possible questions: "How do I ask about an appointment?", "Where is the clinic?", "Can I enquire about a specific treatment?", "Is my appointment confirmed after messaging?".
- Patient inquiries are **requests** only, not bookings.
- No form should appear to submit to a nonexistent server.

## Architecture suggestion
`src/app/{page.tsx,services/page.tsx,about/page.tsx,contact/page.tsx,privacy/page.tsx,layout.tsx,not-found.tsx}`; `src/components/{site-header,site-footer,hero,service-card,faq,contact-cta,animated-tooth,reveal}`; `src/config/clinic.ts`; `src/data/services.ts`; `src/styles` or `app/globals.css`.

## Content guidance
Hero copy inspiration: “Thoughtful care for every smile.” Supporting line: “Explore dental care at Nayyar Dental Associates in I-8 Markaz, Islamabad. Connect with the team to ask about appointments and treatments.” Use fresh, original copy in this direction; avoid strong clinical claims.

## QA scenarios
1. On 390px mobile, opening/closing menu preserves usability; no side scrolling.
2. CTA opens properly formed `wa.me` with an informational message only.
3. Call links dial the public number; address links to Maps search.
4. No review counts, exact operating hours, fees, named staff biographies, or fictional case results.
5. Reduced-motion mode eliminates decorative movement.
6. All navigation routes, footer links, social links and FAQs work.
7. `npm run build`, lint, TypeScript validation succeed.
