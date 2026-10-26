# Cortera

Marketing website for Cortera — Physical AI and cloud AI for agriculture and mining.

## Run locally

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

## Scripts

- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — eslint
- `npm run typecheck` — tsc
- `npm run test` — unit tests
- `npm run check:no-forms` — guard against forms/contact endpoints
- `npm run check:claims` — guard against forbidden marketing claims
- `npm run check:seo` — SEO checks against running site
- `npm run verify:deploy` — full deploy verification

## Adding an announcement

Add an MDX file under `content/announcements/`. See existing entries for frontmatter shape.

## Deployment

See LAUNCH.md.
