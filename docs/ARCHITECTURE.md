# ArcadeLX Architecture

ArcadeLX is a Next.js App Router landing page for a motion-sensing gaming kiosk brand.

## Project Structure

```text
app/
  page.tsx              Route entry that renders the landing component
  layout.tsx            Metadata, document shell, and global CSS import
  globals.css           Shared tokens, legacy utility styles, and landing styles
  arcadelx.css          Small visual additions for the landing experience
components/
  ArcadeLXLanding.tsx   Page-level GSAP orchestration and composition
  arcadelx-data.ts      Typed data for features, games, gallery, videos, and stats
  layout/
    SiteHeader.tsx      Desktop navigation and mobile menu
    SiteFooter.tsx      Footer and newsletter form
  sections/
    Hero.tsx            Hero content, kiosk visual, and ShaderGradient
    ProductSections.tsx Trusted, features, games, gallery, video, benefits, stats, CTA
  ui/
    ArcadePrimitives.tsx Reusable neon button and section heading
public/
  arcadelx_logo.png    Official ArcadeLX logo
  fonts/               Local Charles Rosie font files
```

## Component Responsibilities

`app/page.tsx` stays intentionally small and renders `ArcadeLXLanding`.

`components/ArcadeLXLanding.tsx` owns:

- Page composition
- GSAP timelines, ScrollTrigger reveals, parallax, and reduced-motion behavior

Section components own their local presentation and state. For example, gallery filtering stays in `Gallery`, and active video selection stays in `VideoSection`.

Repeated content is defined in `arcadelx-data.ts` and rendered through reusable components instead of duplicated card markup.

## Assets

The site uses the existing official logo at `/arcadelx_logo.png` and loads Charles Rosie locally from `/fonts/CharlesRosie.woff2` through `@font-face`.

## Styling

The visual system uses a dark navy foundation with cyan, electric blue, purple, and magenta accents. Responsive rules include dedicated mobile layouts below `768px`, a narrow-screen fallback below `375px`, and tablet adjustments between `768px` and `1024px`.

## Development Commands

```bash
npm run dev
npm run lint
npm run build
npm run start
```
