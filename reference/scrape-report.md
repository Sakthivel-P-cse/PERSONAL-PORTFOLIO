# Reference portfolio analysis

Reference: `https://www.aikhan.dev/`

Known routes: `/`, `/cv`, `/links`.

The homepage uses a delayed JavaScript terminal startup state. A crawler that extracts at initial `networkidle` can miss meaningful anchors/content. The included scraper therefore waits up to 15 seconds for anchors or substantial content, stabilizes, scrolls, and captures desktop/mobile states.

Production reconstruction decisions:
- terminal boot is presentation-only and ~2.2 seconds
- Skip, keyboard skip and reduced-motion behavior are supported
- actual portfolio content remains accessible for SEO/accessibility
- clean Next.js/TypeScript is used instead of scraped HTML/bundles
- only Sakthivel P's content is used
- public repositories are linked; private repositories are labelled
- no original-owner CV, publications, social accounts, domains or personal assets are retained

Environment note: arbitrary outbound shell access was unavailable during this run, so a raw Playwright asset archive was not committed. The corrected scraper is included for a permitted local capture.
