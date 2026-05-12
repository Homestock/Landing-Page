# HomeStock — Landing page

Marketing site for [HomeStock](https://homestock.app) — the iOS inventory app.

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 3.4**
- Inter via `next/font`

Design mirrors the **Hero B · Bold Split** direction (dark theme, gradient blobs, floating chips, iPhone mockups).

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
```

## Structure

```
app/
  layout.tsx              Root layout + Inter font
  page.tsx                Composes all 12 sections in order
  globals.css             Reset + .blob + .dark-card utilities
  sections/
    Hero.tsx              Split-layout hero + floating chips
    Problem.tsx           3 sourced stats (CoreLogic / III)
    AICapture.tsx         Phone + "AI captured" chip
    Rooms.tsx             Dashboard list mockup
    Lending.tsx           Lending card with borrower
    Households.tsx        Two phones, connection dots
    Insurance.tsx         PDF preview mockup
    MovingBoxes.tsx       Sealed/open box cards
    Privacy.tsx           Trust signals
    Pricing.tsx           Free / Yearly (highlighted) / Monthly
    FAQ.tsx               6 q-cards
    FinalCTA.tsx          Big CTA + inline footer
components/
  Nav.tsx                 Top navigation
  Container.tsx           1440px max-width wrapper
  Eyebrow.tsx             Dot + uppercase label
  PhoneMockup.tsx         iPhone frame
  Stars.tsx               5-star row
tailwind.config.ts        Design tokens (deep / paper / accent / amber / sage / rose / violet)
```

## Design tokens

| Token | Value | Where |
|---|---|---|
| `deep` | `#0A0A0C` | page bg |
| `panel` | `#141417` | card bg |
| `paper` | `#FFFFFF` | text on dark |
| `accent` | `#007AFF` | primary CTA, AI blue |
| `amber` | `#F59E0A` | warm accent (Lending, Moving Boxes) |
| `sage` | `#6B9E80` | trust accent (Privacy, Insurance) |
| `rose` | `#ED8C8C` | alert (Missing, Warranty expires) |
| `violet` | `#8C5CFF` | AI magic (sparkle chip) |

## Deploy

Designed for Vercel. Push to `main` → auto-deploy.

## Roadmap

- [ ] Replace phone mockup placeholders with real screenshots
- [ ] Add Framer Motion entrance animations
- [ ] Mobile-responsive polish (375px breakpoint)
- [ ] OG-image generator
- [ ] Privacy + Support pages
- [ ] AppsFlyer / TestFlight invite banner
