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
Use Vercel instant rollback to previous deployment. Vercel Deployments > previous production deployment > Promote to Production (instant). Environment variable changes require a redeploy.

## Founder steps
1. Push the repo to GitHub.
2. In Vercel choose Add New Project, import the repo, framework Next.js, root directory ./, leave commands as detected (they match vercel.json).
3. Set Production environment variables per .env.example, Preview scope as noted.
4. Deploy and open the *.vercel.app URL to confirm it is noindex.
5. Settings > Domains: add www.cortera.space as the production domain and add cortera.space set to redirect to www (308).
6. Add the DNS records Vercel shows (CNAME for www, A or ALIAS for the apex), leaving every existing MX, SPF, DKIM and DMARC record untouched.
7. Wait for certificates, then test http and https on both hosts with curl -I.
8. Keep CSP_MODE at "report-only" for the first deployment, check the browser console on every page, then set "enforce" and redeploy.
9. Submit https://www.cortera.space/sitemap.xml to Google Search Console and Bing Webmaster Tools.
10. Test link previews in the LinkedIn, X and Slack debuggers.
11. Confirm team@cortera.space receives a test email from a mailto button.

## Deployment Protection
Enable Vercel Deployment Protection for Preview deployments (Vercel Authentication) so unreleased work is not public; production stays public.

## Founder still owes
- Higher-resolution hero images (~2400px wide): hero-robot, hero-mine
- Agriculture photograph
- Transparent vector SVG of logo mark
- Confirmation of production domain (expected https://www.cortera.space)
- Hacker News and social URLs
- Security contact email decision
- Confirmation of package name and install command in first announcement
