# Cortera Launch

Production canonical host: https://www.cortera.space

## Pre-launch checklist
- [ ] Env vars set per .env.example for Production and Preview (NEXT_PUBLIC_SITE_URL=https://www.cortera.space)
- [ ] Domain and DNS configured:
  - www.cortera.space: CNAME to target shown in Vercel Domains panel
  - cortera.space (apex): A record or ALIAS/ANAME shown by Vercel, serving redirect to www. Preserve existing MX/TXT records.
- [ ] www as primary domain in Vercel, apex redirecting to www
- [ ] HTTPS works on both hosts; redirect returns 308
- [ ] CSP switched from Report-Only to enforcing
- [ ] Sitemap submitted to Google Search Console and Bing Webmaster Tools
- [ ] Open Graph preview tested with LinkedIn, X, Slack debuggers using www URLs
- [ ] RSS validated
- [ ] security.txt decision (set NEXT_PUBLIC_SECURITY_EMAIL to serve)

## DNS notes
DNS changes for the website must not touch MX, SPF, DKIM or DMARC records on the apex. Mailbox team@cortera.space must exist and be tested before launch.

## HSTS
Strict-Transport-Security: max-age=63072000 (no includeSubDomains, no preload). Preload can be considered later once every subdomain is confirmed HTTPS-only.

## Post-launch checks
- curl -I http://cortera.space, https://cortera.space, http://www.cortera.space, https://www.cortera.space/contact all end at https://www.cortera.space
- Verify zero console errors, zero CSP violations, zero third-party requests, zero cookies

## Rollback
Use Vercel instant rollback to previous deployment.

## Founder still owes
- Higher-resolution hero images (~2400px wide): hero-robot, hero-mine
- Agriculture photograph
- Transparent vector SVG of logo mark
- Confirmation of production domain (expected https://www.cortera.space)
- Hacker News and social URLs
- Security contact email decision
- Confirmation of package name and install command in first announcement
