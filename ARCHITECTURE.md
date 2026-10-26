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

## CSP tradeoff (site-11)
CSP is set statically (no per-request nonce) so all routes stay statically generated and CDN-cacheable. `script-src` uses `'unsafe-inline'` because Next.js static pages ship inline bootstrap scripts; all third-party origins remain blocked. `CSP_MODE` in `src/config/security.ts` defaults to "report-only" for preview verification before enforcement.
- `tsc` (via `next build`)
- `npm run lint` (eslint)
- `npm run build` (next build)

## Routes (site-2-shell)
- `/` Home
- `/physical-ai`
- `/control-plane`
- `/industries/mining`
- `/industries/agriculture`
- `/safety`
- `/research`
- `/company`
- `/contact`
- `/privacy` (title only; needs legal text)
- `/terms` (title only; needs legal text)
- not-found: "Off the map."

## Environment variables
- `NEXT_PUBLIC_APP_URL` (optional; enables Sign in link)
- `NEXT_PUBLIC_SITE_URL` (metadataBase; dev fallback http://localhost:3000)
- `NEXT_PUBLIC_LINKEDIN_URL`, `NEXT_PUBLIC_X_URL`, `NEXT_PUBLIC_GITHUB_URL` (optional footer socials)
- `NEXT_PUBLIC_HN_URL` (optional; Hacker News discussion link)
- `NEXT_PUBLIC_SECURITY_EMAIL` (optional; security contact email)

## Contact (site-9)
- `src/config/contact.ts` exports `CONTACT_EMAIL = "team@cortera.space"` and `buildMailto({ subject, body })`. No backend, no forms, no email provider.
- `src/components/ui/CopyEmailButton.tsx` client component for clipboard copy with fallback.
- `npm run check:no-forms` guards against `<form>` or contact-endpoint fetch/XHR in `src`.

## Content system (site-9b-news)
- Articles are MDX in `/content/announcements/*.mdx` and `/content/blog/*.mdx`, parsed at build time.
- `src/lib/content.ts`: gray-matter frontmatter, zod validation, reading time, sorting, hasBlogPosts().
- Routes: /announcements, /announcements/[slug], /announcements/rss.xml, /blog, /blog/[slug], /blog/rss.xml.
- Blog link auto-hidden in footer when no non-draft blog entries (hasBlogPosts()).
