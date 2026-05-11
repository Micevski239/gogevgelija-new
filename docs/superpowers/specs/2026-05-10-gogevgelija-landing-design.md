# GoGevgelija Landing Page — Design

## Goal
Marketing landing page for the GoGevgelija mobile app with rich scroll-driven animations.

## Stack
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (`whileInView`, scroll-linked animations)
- Lenis (smooth scroll)
- Inter font (variable)

## Visual direction
Modern minimal. Palette: near-black (#0a0a0a), off-white (#fafafa), mid-grey (#737373), single accent (#e76f51 — terracotta nod to Mediterranean). Tight sans-serif (Inter), oversized hero type with negative letter-spacing, generous whitespace, restrained color usage.

## Sections (scroll order)
1. **Sticky nav** — logo + Features / Screenshots / Download / Contact + Download CTA. Background fades from transparent to white on scroll.
2. **Hero** — full-viewport. Massive headline "Discover Gevgelija." Sub-copy and CTA buttons. Hero element has subtle scale + opacity transform tied to scroll.
3. **Stats strip** — 4 stats (20+ Listings / 10+ Events / 2 Languages / 24/7 Access). Numbers animate (count up) when section enters viewport.
4. **Features (pinned section)** — Heading sticks; feature cards slide/fade in as user scrolls. ~6 highlighted features (Listings, Events, Promotions, Bilingual, Wishlist, Calendar).
5. **Screenshots** — horizontal gallery; phone mockups slide horizontally tied to vertical scroll position.
6. **Download CTA** — large dark band. App Store + Google Play buttons. Magnetic hover effect.
7. **Contact** — two columns: contact info (email/phone/location) + form (UI only, non-functional v1).
8. **Footer** — minimal: brand, quick links, version/platform/languages, copyright.

## Animation patterns
- Lenis-driven smooth scroll site-wide
- `whileInView` fade-up on most text blocks
- Hero: scroll-linked scale/opacity
- Stats: count-up on enter
- Features: pinned section with scroll-driven reveal
- Screenshots: horizontal-scroll-on-vertical-scroll
- CTAs: magnetic mouse effect
- Respect `prefers-reduced-motion` — disable transforms, keep simple fades.

## Out of scope (v1)
- Real form submission
- i18n / Macedonian (English-only first pass)
- Backend, analytics, app screenshot assets (use placeholders/SVG mockups)
- Real App Store / Play Store links (hash placeholders)

## File layout
```
app/
  layout.tsx
  page.tsx
  globals.css
components/
  nav.tsx
  hero.tsx
  stats.tsx
  features.tsx
  screenshots.tsx
  download-cta.tsx
  contact.tsx
  footer.tsx
  smooth-scroll.tsx     // Lenis provider
  ui/magnetic-button.tsx
  ui/count-up.tsx
lib/
  content.ts            // strings, features list, stats data
```
