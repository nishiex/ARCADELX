# ArcadeLX Animation System

GSAP is the primary animation system. Framer Motion is not used for the main landing page.

## Hero Timeline

The hero uses one GSAP timeline for cinematic ordering:

1. Header slides down and fades in.
2. Eyebrow, headline, description, and CTA content reveal with a stagger.
3. The kiosk enters from the right with a subtle scale transition.
4. Neon lighting fades into view.

The kiosk also has a slow vertical float and the screen includes a restrained light sweep.

## ScrollTrigger

Elements with `.lx-scroll-reveal` fade upward as they enter the viewport. This pattern is used for:

- Trusted organizations
- Product features
- Featured games
- Gallery
- Video
- Benefits
- Statistics
- Final CTA

Statistics use a separate ScrollTrigger to count from zero when the stats row enters the viewport.

## Desktop Parallax

Pointer parallax is enabled only for fine pointers at widths of `900px` and above. Background, kiosk, and copy layers move at different strengths. Touch and coarse-pointer devices do not receive pointer parallax.

## Lifecycle Safety

All GSAP work is created inside `gsap.context()` and reverted during cleanup. `gsap.matchMedia()` owns the responsive pointer listener and reverts it on unmount.

The ShaderGradient canvas is isolated in a memoized component so normal page state changes do not recreate the WebGL tree.

## Reduced Motion

When `prefers-reduced-motion: reduce` is enabled:

- Entrance movement is replaced with visible elements.
- Looping kiosk and neon animations are skipped.
- Scroll reveals keep content visible without travel.
- CSS animation and transition durations are reduced.

## Interaction Motion

Hover states use CSS for simple buttons and cards. The video playlist uses React state for active selection, while GSAP remains responsible for meaningful page-level motion.
