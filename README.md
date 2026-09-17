# ArcadeLX

ArcadeLX is a premium motion-gaming kiosk website built with Next.js, React, TypeScript, Tailwind CSS, GSAP, and ShaderGradient.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

```bash
npm run lint     # ESLint
npm run build    # Production build and TypeScript validation
npm run start    # Start the production server
```

## Main Files

- [app/page.tsx](app/page.tsx) is the route entry.
- [components/ArcadeLXLanding.tsx](components/ArcadeLXLanding.tsx) contains the landing page and interactive behavior.
- [app/globals.css](app/globals.css) contains global tokens and responsive styles.
- [app/arcadelx.css](app/arcadelx.css) contains the kiosk player silhouette styles.
- [app/layout.tsx](app/layout.tsx) defines metadata and the document shell.

More detail is available in [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) and [docs/ANIMATIONS.md](docs/ANIMATIONS.md).

## Brand Assets

The official logo is used from `/arcadelx_logo.png` and must not be recreated or replaced.

Charles Rosie is loaded locally from `/fonts/CharlesRosie.woff2` with `@font-face`. The site does not use Google Fonts or an external font CDN.

## Animation

GSAP and ScrollTrigger power the hero timeline, section reveals, statistics counters, kiosk movement, neon effects, and desktop-only pointer parallax. Reduced-motion preferences are respected.

ShaderGradient is isolated and memoized to avoid unnecessary WebGL remounts when other page state changes.

## Responsive Behavior

The layout has dedicated behavior for mobile, narrow screens, tablets, and desktop widths. Mobile navigation, hero ordering, kiosk sizing, horizontal game and gallery tracks, stacked video content, two-column statistics, and a stacked footer are included.

## Content

Replace placeholder contact behavior and content before connecting the page to production services.
