# Cortera — Design System

**Project:** Cortera marketing website
**Branch:** site-1-foundation
**Tagline:** Physical AI for Mining & Agriculture

## 1. Design tokens (CSS variables)

Defined in `src/app/globals.css` and wired into the Tailwind v4 `@theme inline` block.

### Dark base
| Variable | Value | Usage |
|---|---|---|
| `--bg` | `#0A0A0B` | Body / dark section background |
| `--surface` | `#111113` | Elevated dark surface |
| `--surface-2` | `#17171A` | Deeper dark surface |
| `--line` | `rgba(255,255,255,0.08)` | Hairlines / dividers on dark |
| `--text` | `#F2F1EC` | Primary text on dark |
| `--muted` | `#8E8E93` | Secondary text |

### Paper (light sections)
| Variable | Value |
|---|---|
| `--paper` | `#F7F6F2` |
| `--ink` | `#0A0A0B` |
| `--paper-line` | `rgba(10,10,11,0.10)` |

### Sand (closing section)
| Variable | Value |
|---|---|
| `--sand` | `#C6B391` |
| `--sand-ink` | `#24140D` |

### Signature gradient
`linear-gradient(90deg, #FF7A45, #F0508A, #8B5CF6, #3B82F6, #2DD4BF)`
Used ONLY for hairlines, thin strokes, small glows, and one hero accent. Never large fills or body text. The blue stop `#3B82F6` is used for the hero radial glow at max 10%.

### Focus ring
`--focus-ring: #3B63E0` — visible focus state on every interactive element. All text/background pairs target WCAG AA.

## 2. Layout
- 12-column grid, container max-width 1280px
- Side padding: `clamp(20px, 4vw, 64px)` (`--side-padding`)
- Section vertical padding: `clamp(96px, 12vw, 200px)` (`--section-padding`)
- Structure through hairline dividers, whitespace, large type
- Radius scale only: `0`, `8`, `9999` (`--radius-none`, `--radius-8`, `--radius-full`)
- Glass blur only on sticky nav after scroll

## 3. Typography
- **Geist Sans:** headings 600, letter-spacing `-0.03em`, line-height `1.02–1.08`; body 400, line-height `1.6`
- **Geist Mono:** uppercase eyebrows/labels, tracking `0.14em`, small
- **Instrument Serif italic:** at most one accent word per headline
- Fluid scale via `clamp()`: display `56–136px`, h1 `44–96px`, h2 `32–60px`, h3 `22–30px`, body `16–19px`, label `11–13px`
- Max body line length `68ch`

## 4. Motion (Framer Motion)
- Reveal-on-scroll: 12px rise + fade, 600ms, `cubic-bezier(0.16, 1, 0.3, 1)`, 80ms stagger, once only
- Full-bleed images: slow parallax, max 40px travel (hero uses max 12px pointer parallax)
- Hover: 200ms, subtle
- `prefers-reduced-motion`: disables parallax and reveals entirely
- No autoplay audio, no scroll-jacking, no loaders

## 5. Assets

| Required name | Source file | Role |
|---|---|---|
| `logo-mark-dark.png` | `22706.png` (robot dome artwork) | Logo mark |
| `hero-mine.jpg` | `21926.jpg` (haul trucks in tunnel) | Hero image |
| `control-terminal.jpg` | `21375.jpg` | Terminal photo |
| `logo-lockup-light.png` | `22094.png` | Logo lockup (NOT provided — see summary) |
| `og-twitter.jpg` | composite of `hero-mine.jpg` + scrim + lockup | OG/Twitter (placeholder copy pending composite) |

Copy uploaded files to `/public/assets` with these names; never edit or recompress beyond `next/image` defaults.

### Logo blend-mode recipe
- **Mark** (`logo-mark-dark.png`): `mix-blend-mode: screen` + `filter: brightness(1.1) contrast(1.2)`. Renders the near-black texture into `var(--bg)` with no visible rectangle. Raise contrast until any faint box vanishes without clipping gradient colors.
- **Lockup on dark** (`logo-lockup-light.png`): `filter: invert(1)` + `mix-blend-mode: screen`.
- **Lockup on paper**: same file untouched, `mix-blend-mode: multiply`.
- Wrap in `<Logo variant="mark\|lockup" />`. TODO: swap raster for vector SVG later. `logo-mark-dark.png` must eventually be replaced by a transparent SVG.

### Image treatments (CSS utilities)
- `.scrim-bottom` — bottom-to-top dark gradient
- `.scrim-top` — top-to-bottom dark gradient
- `.grain` — subtle noise overlay at 4% opacity
- `.duotone-blue` — grayscale + blue tint (for control-terminal.jpg)

All images via `next/image` with explicit sizes, alt text, blur placeholders; hero image `priority`.

## 6. Content rules
- No fake customer logos, statistics, testimonials, awards, press mentions, revenue figures, lorem ipsum, or placeholder data.
- Claims only about: Physical AI robotics for mining & agriculture; control plane for cloud & physical agents; safety, security, human oversight.
- Tone: precise, confident, plain English. No hype words ("revolutionary", "game-changing").

## 7. Routes
- `/` — Home: Logo + one Display line (placeholder), plus built sections (Hero, Control plane, Physical AI feature, PullQuote, Industries, ClosingLine sand).
- `/design` — Dev-only design system reference: every primitive in all variants on dark/paper/sand backgrounds, token swatches, type scale.

## 8. Known asset issue
`logo-lockup-light.png` (source `22094.png`) was not included with the uploaded assets, so no raster lockup file exists yet. The `Logo lockup` variant references `/assets/logo-lockup-light.png` and will 404 until the file is added. `logo-mark-dark.png` should eventually be replaced with a transparent vector SVG.
