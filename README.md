# Sakthivel P — Terminal Portfolio

Terminal-inspired portfolio focused on distributed systems, backend infrastructure, observability and AI platforms.

## Routes
- `/` portfolio
- `/cv` CV page
- `/links` contact/profile hub

## Development
```bash
npm install
npm run dev
```

## Production
```bash
npm run build
npm run start
```

Most portfolio content lives in `data/portfolio.ts`. The terminal boot is presentation-only, skippable, keyboard accessible and reduced-motion aware.

## CV
The CV page is prepared for `public/cv/resume.pdf`. Add/replace that binary with the supplied resume before production deployment if it is not already present.

## Vercel
Import this repository, use the Next.js preset, and optionally set `NEXT_PUBLIC_SITE_URL` to the final domain. No secrets are required.

## Reference capture
`scripts/scrape-reference.mjs` documents the corrected Playwright approach for the reference site's delayed boot sequence. Raw capture output is gitignored and is not part of production.

## Content notes
- Phone visibility is enabled.
- CAUSA and AUTOBUILD are shown as private repositories.
- Internship years were not provided, so only month ranges are shown.
- No LeetCode URL or project demo URL is invented.
