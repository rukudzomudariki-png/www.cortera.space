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
| `hero-robot.jpg` | `22018.jpg` (tracked robot, twin-lamp sensor arm, mine tunnel) | Hero image — atmospheric only, low resolution (~720px wide), replace with 2400px original |
| `hero-mine.jpg` | `21926.jpg` (haul trucks in tunnel) | Mining panel (reserved, NOT the hero) |
| `control-terminal.jpg` | `21375.jpg` | Terminal photo |
| `logo-lockup-light.png` | `22094.png` | Logo lockup (NOT provided — see summary) |
| `og-twitter.jpg` | composite of `hero-mine.jpg` + scrim + lockup | OG/Twitter (placeholder copy pending composite) |

Copy uploaded files to `/public/assets` with these names; never edit or recompress beyond `next/image` defaults.
If any file still carries an old name (`hero-dome.png`, `mine-haul-trucks.jpg`), rename it per this table and fix every reference.

Define the hero image path once as a constant `HERO_IMAGE = "/assets/hero-robot.jpg"` in `src/config/assets.ts` and import it everywhere so it can be swapped in one line.

### Logo blend-mode recipe
- **Mark** (`logo-mark-dark.png`): `mix-blend-mode: screen` + `filter: brightness(1.1) contrast(1.2)`. Renders the near-black texture into `var(--bg)` with no visible rectangle. Raise contrast until any faint box vanishes without clipping gradient colors.
- **Lockup on dark** (`logo-lockup-light.png`): `filter: invert(1)` + `mix-blend-mode: screen`.
- **Lockup on paper**: same file untouched, `mix-blend-mode: multiply`.
- Wrap in `<Logo variant="mark|lockup" />`. TODO: swap raster for vector SVG later. `logo-mark-dark.png` must eventually be replaced by a transparent SVG.

### Image treatments (CSS utilities)
- `.scrim-bottom` — bottom-to-top dark gradient
- `.scrim-top` — top-to-bottom dark gradient
- `.grain` — subtle noise overlay at 4% opacity
- `.duotone-blue` — grayscale + blue tint (for control-terminal.jpg)

All images via `next/image` with explicit sizes, alt text, blur placeholders; hero image `priority`.

### Hero rules (site-3-hero)

**Section:** dark variant, `height: 100svh`, `min-height: 720px`, `position: relative`, `overflow: hidden`, background `var(--bg)`.

**Image layer (desktop >=1024px):** absolutely positioned container on the right, `top: 0`, `bottom: 0`, `width: 78vw`. Inside, `next/image` `fill`, `priority`, `object-fit: cover`, `object-position: 50% 50%` so the robot lands around 60–65% of viewport width. Treatment: `brightness(0.85) saturate(0.9)`. CSS mask (linear gradients) dissolves the left, top and bottom edges into `var(--bg)` so no rectangle is ever visible. A left-to-right overlay runs from `var(--bg)` at the container's left edge to transparent at 45% of the container. Top scrim under the nav and a bottom scrim are applied.

**Glow:** faint radial glow, signature-gradient blue `#3B82F6` at max 10% opacity, centered on the robot's lamps (~50% x, ~33% y of the image), slow 10s pulse between 0.07 and 0.10. `aria-hidden`.

**Grain:** `.grain` utility at 4% over the whole hero. `aria-hidden`.

**Text block:** bottom-left, aligned to the container grid, columns 1–7, bottom padding `clamp(120px, 14vh, 180px)`.
1. Eyebrow (Geist Mono): "PHYSICAL AI FOR MINING & AGRICULTURE", preceded by a 24px gradient hairline.
2. Display headline, three lines max: "Frontier AI, built for the *physical* world." "physical" is Instrument Serif italic; the rest Geist Sans 600. Display scale `clamp(56px–136px)`, line-height `1.02`, tracking `-0.035em`, color `var(--text)`.
3. Lede (max 56ch, `--muted`, 19px): exact copy (see page source).
4. Two buttons, 16px gap: primary "Request a demo" → `/contact`; secondary (outlined) "Explore Physical AI" → `/physical-ai` with arrow icon.

**Top-right (desktop only):** Geist Mono 11px, `--muted`, right-aligned, two lines under the nav: "FRONTIER PHYSICAL AND CLOUD AI / BUILT FOR THE GLOBE".

**Bottom-center scroll cue:** 1px × 40px vertical line with a gradient dot traveling down it (2.4s loop) and the label "SCROLL" in Geist Mono 10px. Static line only under reduced motion.

**Mobile (<1024px):** image block first, full width, height `52svh`, `object-position 50% 50%`, same mask/fade treatment (bottom and sides dissolve); text block below with 24px side padding; headline clamps to 44–56px; buttons stack full width below 480px; no clipped text at 320px; the hero may exceed `100svh`.

**Motion:** image fades in 1200ms; eyebrow, headline (word by word, 60ms stagger, 12px rise), lede, buttons follow at 100ms offsets; total under 1.6s, once only. Pointer parallax on the image on desktop, max 12px, disabled on touch and under reduced motion. No video, no autoplay audio, no scroll-jacking.

**Accessibility:** exactly one `h1` (the headline). Image alt: "Tracked robot with a twin-lamp sensor arm in an underground mine tunnel". Glow and grain `aria-hidden`. Text contrast AA over every part of the image on every viewport.

## 6. Capability strip

Full-width band on `var(--bg)`, 1px `--line` top and bottom, height `72px`. Geist Mono 12px uppercase, tracking `0.14em`, `--muted`. Items separated by 4px gradient dots: Permissions, Guardrails, Monitoring, Cost visibility, Failure analysis, Human oversight. Desktop: evenly spaced, static. Mobile: infinite horizontal marquee (30s linear, pauses on hover/focus; static and horizontally scrollable under reduced motion). Duplicate the track for seamless looping and mark the duplicate `aria-hidden`.

## 7. Content rules
- No fake customer logos, statistics, testimonials, awards, press mentions, revenue figures, lorem ipsum, or placeholder data.
- Claims only about: Physical AI robotics for mining & agriculture; control plane for cloud & physical agents; safety, security, human oversight.
- Tone: precise, confident, plain English. No hype words ("revolutionary", "game-changing").

## 8. Routes
- `/` — Home: Logo + one Display line (placeholder), plus built sections (Hero, Control plane, Physical AI feature, PullQuote, Industries, ClosingLine sand).
- `/design` — Dev-only design system reference: every primitive in all variants on dark/paper/sand backgrounds, token swatches, type scale.

## 9. Known asset issue
`logo-lockup-light.png` (source `22094.png`) was not included with the uploaded assets, so no raster lockup file exists yet. The `Logo lockup` variant references `/assets/logo-lockup-light.png` and will 404 until the file is added. `logo-mark-dark.png` should eventually be replaced with a transparent vector SVG.

## 10. Global navigation & footer (site-2-shell)
- Fixed top bar: 72px desktop / 64px mobile. Transparent over hero; after 24px scroll `--bg` at 72% opacity + backdrop blur + 1px `--line` bottom border (only glass). 250ms transition.
- Hide-on-scroll-down / show-on-scroll-up after first viewport on desktop; always visible on mobile.
- Mega panel: 360px, `--surface`, hairline; hover intent 80ms; closes on mouse-leave, Escape, route change; keyboard accessible.
- Footer: dark; oversized decorative CORTERA wordmark; gradient hairline above; 4 link columns; lockup inverted on dark; tagline + sentence; bottom bar year + conditional socials/email.

## 11. Homepage sections (site-4-home-sections)
- Section rhythm below capability strip: dark (mission) → dark (platform) → dark (physical-ai) → paper (control-plane) → dark (industries) → paper (loop) → dark (global) → paper (quote) → sand (closing).
- Each section has an `id` for anchor links: mission, platform, physical-ai, control-plane, industries, loop, global, quote, closing.
- Manifesto: scroll-linked word highlight (25%→100% opacity via useScroll/useTransform), clamp 28–56px, Geist Sans 500, max ~22ch.
- Two pillars: 1px --line vertical divider, 48px padding, hover bg --surface + gradient hairline top (300ms).
- Physical AI feature: logo-mark-dark.png right 60%, screen blend, radial mask, grain 4%, glow ≤12% 10s pulse.
- Control plane feature: duotone-blue terminal MediaFrame; 3×2 capability grid separated by hairlines.
- Industries: 4/5 (4/3 mobile) panels; mining hero-mine.jpg; agriculture ContourBackdrop on --surface.
- Loop: SVG stroke-draw on scroll; vertical on mobile.
- Global: canvas Fibonacci sphere ~2000 dots, drag-to-rotate, pause off-screen, reduced-motion static.
- Quote: PullQuote centered; Closing: sand variant ClosingLine.

## 12. Industry pages (site-7-industries)
- Shared template `<IndustryPage content={...} />` in `src/components/IndustryPage.tsx`, fed by typed content files `src/content/industries/{slug}.ts` conforming to `IndustryContent` in `src/content/industries/types.ts`.
- Content schema: slug, title, description, canonical, eyebrow, h1 (one `*accent*`), lede, conditions{h2,lede,items[5]}, build{h2,blocks[{icon,title,body}] x3}, closing{h2,lede}, otherIndustry{label,href,description}.
- Header: dark, height clamp(560px,80vh,820px); mining uses hero-mine.jpg right 70% with mask/edge fades/brightness 0.8/grain; agriculture uses ContourBackdrop right 70% with drift (AGRICULTURE_IMAGE when defined).
- Sections: conditions (paper), what-we-build (dark, id), oversight (paper, id), approach (dark, id), connected (paper), closing (dark).
- /industries index uses PageHeader + homepage Industries panels + closing block.
