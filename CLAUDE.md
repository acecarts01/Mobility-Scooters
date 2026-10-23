# LIFESTYLE MOBILITY SCOOTERS AUSTRALIA — CLAUDE AGENT CONVENTIONS

## Business & Regulatory Ground Truth
- Domain: lifestylemobilityscooters.com.au
- Operating Entity: BUTLER TRADING PTY. LTD.
- Identifiers: ABN 84 008 071 323 | ACN 008 071 323
- Headquarters: 3 Shepley Ave, Panorama SA 5041, Australia
- Phone: 1800 703 244 | Email: sales@lifestylemobilityscooters.com.au
- Tax Treatment: 100% GST-Exempt under Australian Tax Law (GST Act 1999, Section 38-45, Item 33). All catalogue prices render as: "$X,XXX AUD (GST-Free)" via `formatAud()` + `GST_FREE_LABEL` in `lib/utils.ts`.
- Road Transport: All scooters must be tagged ARR 204 compliant (≤10 km/h) for legal pedestrian footpath status across Australia.

## Tech Stack & Architecture
- Next.js 15 (App Router, Server Components by default)
- TypeScript (Strict Mode) + React 19
- Tailwind CSS v4 / v3.4 + Lucide React
- Edge Serverless Form Handlers: Direct Zoho CRM dispatch via fetch webhooks (No third-party client form builders).
- Zero Card Gateway / Zero PayPal Policy: Checkouts route via EFT/PayID/OSKO (BSB: 085-005, Acc: 84-008-0713, PayID: sales@lifestylemobilityscooters.com.au), NDIS Proforma Invoices, Zip Money, or Afterpay.

## Directory Layout
- `src/types/index.ts`: Central data contracts (Product, Order, NDIS Submission).
- `src/lib/catalog.ts`: Master catalog (141 products with full specs & query helpers; ramps/accessories have maxSpeedKmh 0).
- `src/lib/schema.ts`: Schema.org JSON-LD graph (MedicalBusiness, Product, WebSite, FAQPage).
- `src/app/robots.ts` & `src/app/sitemap.ts`: Next.js dynamic metadata routes.
- `src/components/shop/ProductThumbnail.tsx`: Resilient fallback thumbnail component. Renders themed SVG schematics while awaiting photography; automatically loads `.webp` files when placed in `/public/images/products/`.
- `src/components/shop/ProductCard.tsx`: WCAG 2.1 AA compliant e-commerce cards.
- `src/components/shop/NdisQuoteModal.tsx`: Instant NDIS PDF quote drawer.
- `src/components/checkout/BankTransferDetails.tsx`: Live Australian EFT/PayID reference generator.

## Strict Rules for Claude When Modifying Code
1. Never introduce Stripe, PayPal, or generic card entry forms.
2. Never strip GST-Free annotations; mobility scooters are non-taxable healthcare equipment in Australia.
3. Keep `ProductThumbnail.tsx` error boundaries intact so the website never displays broken image icons while photos are being populated.
4. Run `npm run type-check` and `npm run build` mentally/locally before committing changes to ensure no broken imports.
5. All passage-level answers under H2/H3s should remain concise (40–60 words) to maximize citation eligibility in Google AI Overviews and Perplexity.
