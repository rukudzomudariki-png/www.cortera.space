# Cortera — Architecture

## Folder structure
```
src/
  app/
    layout.tsx          Root layout: Geist vars, metadata, skip link, Nav
    globals.css         Design tokens (CSS vars) + @theme + utilities
    page.tsx            Home: Hero + sections 2-6 + footer
    design/page.tsx     Dev design-system reference (primitives, swatches, type scale)
  components/
    Nav.tsx             Sticky nav + mega panel (Mining hero-mine.jpg, Agriculture ContourBackdrop)
    ContourBackdrop.tsx Generative topographic contour SVG on --surface
    Hero.tsx            Hero: hero-mine.jpg, scrims, fade, radial glow, parallax
    ui/
      Container.tsx     Max-width container with side padding
      Section.tsx       dark | paper | sand variants, optional hairline
      Eyebrow.tsx       Geist Mono uppercase label
      Display.tsx       Heading with optional serif italic accent word
      Lede.tsx          Large muted paragraph, max 68ch
      Button.tsx        primary / secondary / ghost, pill, focus ring
      Reveal.tsx        Reveal-on-scroll (12px rise, fade, once)
      GradientHairline.tsx Signature-gradient hairline
      Logo.tsx          mark | lockup variants with blend-mode recipe
      MediaFrame.tsx    next/image fill with scrim/grain/parallax
      PullQuote.tsx     Instrument Serif quote + Geist Mono attribution
      ClosingLine.tsx   Sand-section "A BETTER / TOMORROW"
```

## Conventions
- TypeScript strict, App Router, server components by default; `"use strict"` only where client interactivity is needed (Reveal, MediaFrame parallax, Nav).
- Styling: Tailwind v4 with CSS variables from `globals.css`; no arbitrary inline design values where a token exists.
- Images: `next/image` only, explicit `width`/`height` or `fill`, `alt` on all images, `priority` on hero.
- Decorative imagery: `alt=""` + `aria-hidden="true"`.
- Accessibility: skip link, `focus-visible` ring (`#3B63E0`), semantic HTML, keyboard navigable, respects `prefers-reduced-motion`.
- No component libraries; primitives hand-written in `src/components/ui`.
- Deployable to Vercel; no backend in this stage.

## Verification commands
- `tsc` (via `next build`)
- `npm run lint` (eslint)
- `npm run build` (next build)
