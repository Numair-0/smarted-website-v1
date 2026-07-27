# Smarted Systems — Official Website

The production codebase for [smartedsystems.in](https://smartedsystems.in) —
the digital identity of Smarted Systems, an AI engineering studio building
toward Smarted, an AI-native Business Operating System.

## Vision

This site exists to do one job well: make a technical, skeptical enterprise
buyer (a CIO, CFO, or technical founder) believe — within the first screen —
that Smarted Systems builds deterministic, auditable, production-grade AI
systems, not another "AI wrapper." Every design and content decision on this
site is traceable back to the company's Strategic Blueprint. Nothing here is
templated marketing filler: no fake clients, no fake stats, no fake
testimonials. Where real information doesn't exist yet (team photos, case
studies), the relevant section is built to accept it later rather than
faking it now.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router, React Server Components by default) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS, with a custom token system (see Design System) |
| Motion | Framer Motion (scroll reveals, micro-interactions) |
| Forms | React Hook Form + Zod |
| Icons | lucide-react |
| Fonts | next/font/google — Space Grotesk (display), Inter (body), IBM Plex Mono (utility) |

Client Components (`"use client"`) are used only where interactivity is
unavoidable: the mobile nav toggle, the FAQ accordion, the timeline, the
contact form, and anything using Framer Motion. Every page component itself
is a Server Component.

## Architecture & Folder Structure

```
src/
  app/                        # Routes (App Router)
    layout.tsx                 # Root layout: fonts, metadata, schema, nav/footer
    page.tsx                   # Home
    about/page.tsx
    services/page.tsx
    industries/page.tsx
    team/page.tsx
    contact/page.tsx
    privacy-policy/page.tsx
    terms-and-conditions/page.tsx
    not-found.tsx               # Custom 404
    sitemap.ts                  # Metadata API — generates /sitemap.xml
    robots.ts                   # Metadata API — generates /robots.txt
    manifest.ts                 # Metadata API — generates /manifest.webmanifest
    icon.png / apple-icon.png / favicon.ico   # Auto-detected icon conventions
    api/contact/route.ts        # Contact form submission handler
    globals.css                 # Design tokens, base layer, component classes

  components/
    layout/                     # Navbar, Footer — site chrome
    home/                       # Sections unique to the homepage
    shared/                     # Reused across multiple pages (PageHeader,
                                 # Breadcrumbs, ContactForm, WhatsAppButton)
    motion/                     # Animation primitives (Reveal, KnotDraw)

  data/                         # Structured content — the "CMS" for now
    services.ts / industries.ts / principles.ts / timeline.ts / faq.ts / team.ts

  lib/
    site-config.ts              # Single source of truth: company name, email,
                                 # WhatsApp number, nav links — change once,
                                 # updates everywhere
    validation.ts                # Zod schema for the contact form
    cn.ts                        # Tailwind class-merge helper
```

**Why a `data/` folder instead of hardcoded JSX:** every content block that
might change independently of layout (services, industries, FAQ, timeline,
team) lives in a typed data file. Pages and components import and render it.
This means updating a service description or adding a team member never
requires touching component code — and it's a straight path to swapping
these files for a real CMS or database later without restructuring anything.

## Design System

The palette, type system, and signature motion were derived directly from
the blueprint's brand positioning (white background, indigo/blue/cyan,
premium, minimal, no dark theme) — not a generic template default.

- **Color** — `ledger` (deep indigo, the "single source of truth" tone),
  `execute` (blue, primary interactive color), `semantic` (cyan, used
  sparingly as an intelligence/AI accent), plus `canvas` and `ink` neutrals.
  See `tailwind.config.ts`.
- **Type** — Space Grotesk for display/headings (geometric, technical),
  Inter for body copy, IBM Plex Mono for eyebrows/labels/data — reinforcing
  the "deterministic engineering" brand voice rather than a soft, generic
  sans-everywhere feel.
- **Signature element** — `KnotDraw` (`components/motion/KnotDraw.tsx`): a
  line-art rendition of the two interlocking loops in the Smarted mark that
  draws itself in on the homepage hero. It's a literal expression of the
  brand thesis — two separate loops resolving into one interlocked
  structure — used once, deliberately, rather than as decoration repeated
  everywhere.
- **Motion** — a single reveal primitive (`components/motion/Reveal.tsx`)
  is reused across every section so animation stays consistent instead of
  scattered. `prefers-reduced-motion` is respected globally in `globals.css`.

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Visit `http://localhost:3000`.

## Production

```bash
npm run build
npm run start
```

`npm run build` has been verified to compile cleanly (TypeScript strict mode,
zero ESLint warnings, all 9 routes + API route + sitemap/robots/manifest
statically generate successfully).

## Environment Variables

See `.env.example`. None are required to run the site — they only activate
optional integrations (see below).

## Deployment

Any Next.js-compatible host works (Vercel is the path of least resistance
for the App Router + Metadata API features used here). Point the domain
`smartedsystems.in` at the deployment and set `NEXT_PUBLIC_SITE_URL` if the
canonical URL in `src/lib/site-config.ts` ever needs to differ per
environment.

## Coding Standards & Naming Conventions

- Components: PascalCase file and export names (`Hero.tsx`, `export function Hero()`).
- One component per file; co-locate nothing that isn't reused.
- Data files export typed arrays/objects with a documented shape — no `any`.
- Tailwind utility classes are preferred over custom CSS; shared patterns
  (buttons, cards, section spacing) are extracted into `@layer components`
  in `globals.css` rather than duplicated across files.
- Every page exports its own `metadata` object — no page inherits a generic
  title/description from a parent layout.

## Accessibility

- Semantic HTML landmarks (`header`, `nav`, `main`, `footer`) throughout.
- A "Skip to content" link at the top of every page.
- Visible focus rings via `:focus-visible` (see `globals.css`), never
  suppressed.
- All interactive icons carry `aria-label` or `aria-hidden` as appropriate.
- Form fields use associated `<label>` elements, `aria-invalid`, and
  `aria-describedby` for error messages.
- `prefers-reduced-motion` is respected at the CSS level, in addition to
  Framer Motion's own handling.

## SEO

- Every route has unique `Metadata` (title, description, canonical URL).
- OpenGraph and Twitter Card metadata set globally in the root layout.
- JSON-LD structured data: `Organization` and `WebSite` (root layout),
  `FAQPage` (home page), `ItemList` of `Service` (services page), and
  `BreadcrumbList` (every interior page, via `components/shared/Breadcrumbs.tsx`).
- `sitemap.ts` and `robots.ts` use the Next.js Metadata API to generate
  `/sitemap.xml` and `/robots.txt` automatically — no static files to keep
  in sync.

## What's Deliberately Left as an Integration Point

Per the brief, this site never fabricates data. A few things are wired up
structurally but need a real decision/credential from you before they're
"live":

1. **Contact form email delivery** — `src/app/api/contact/route.ts`
   validates and logs submissions today. Wire in a transactional email
   provider (Resend, Postmark, SES) using the inline example in that file,
   and add the API key to `.env.local`.
2. **Team page** (`src/data/team.ts`) — intentionally empty. Add real team
   members here; the page and homepage snapshot both render correctly with
   zero, one, or many entries.
3. **Case studies / client logos** — no placeholders exist anywhere in the
   codebase. Add them to `src/data/` once you have real, permissioned
   examples to publish.
4. **Legal pages** — the Privacy Policy and Terms & Conditions are
   reasonable starting drafts, not legal advice. Have them reviewed by
   counsel before publishing, particularly for applicable data-protection
   law (India's DPDP Act, and GDPR/CCPA if you serve those regions).

## Future Scaling Notes

- If content velocity increases, `src/data/*.ts` files are a natural
  migration point to a headless CMS (Sanity, Contentful) — the page
  components already treat this data as an external, typed source.
- If GSAP/Lenis-level scroll choreography becomes a priority beyond the
  current Framer Motion reveals, they can be layered in at the section
  level without restructuring the component tree.
- The `data/` + `components/{home,shared}` split is designed so that adding
  a tenth page doesn't require touching the existing nine.

## Contribution Guide

1. Branch from `main`.
2. Run `npm run typecheck && npm run lint` before opening a PR.
3. Keep new content in `src/data/`, not hardcoded in JSX, unless it's truly
   one-off page copy.
4. Match the existing motion pattern (`Reveal`) rather than introducing a
   new animation approach per component.
