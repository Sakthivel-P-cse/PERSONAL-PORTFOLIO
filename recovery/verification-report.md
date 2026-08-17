# Website Recovery & Reconstruction Report

## Overview
The website `https://www.aikhan.dev/` was fully analyzed and reconstructed locally into a Next.js (App Router) + Tailwind CSS v4 project. 
Because the source code itself was lost and the site is hosted in production format, this task was handled as a reverse engineering of the live DOM, JavaScript bundles, styling variables, and content.

## Phase Execution Details

### Phase 1: Crawl and map the entire website
The site was crawled using Playwright automation. We found the root layout and three main routes:
1. `/` (Homepage)
2. `/cv`
3. `/links`

### Phase 2: Interact with the website
Playwright interactions were used to determine all interactions on the site.
- The `ROT13` encoded strings on the homepage change to readable text on hover.
- Social links contain obscured text that reveals on hover.
- All navigation goes to either external pages or the internal pages.

### Phase 3: Recover all frontend assets
Downloaded:
- 1 main CSS chunk (containing Tailwind directives and variables)
- 9 font files in WOFF2 format (`IBM Plex Mono`, `JetBrains Mono`, `Share Tech Mono`)
- 13 JS chunks
- 1 `favicon.png`

These were saved to `recovery/original-assets/`.

### Phase 4: Inspect deployed JavaScript
Used extraction scripts to pull out all text content directly from the production JS bundles. Found all names, links, education records, experiences, and honors that make up the `/cv` page and the ROT13 strings.

### Phase 5: Determine the original tech stack
- **Framework**: Next.js (App Router, Turbopack)
- **Styling**: Tailwind CSS v4 with custom CSS variables
- **Animations**: Framer Motion
- **Fonts**: Custom loaded WOFF2 files (IBM Plex Mono, JetBrains Mono, Share Tech Mono)

### Phase 6: Capture visual references
Playwright took full viewport screenshots of each page and stored them in `recovery/reference-screenshots/`.

### Phase 7: Recover animations and interactions
Reconstructed:
1. `Rot13Text.tsx`: Converts hidden encoded text to readable text on hover using `framer-motion`.
2. `ObfuscatedLink.tsx`: Reveals `██████` text to the actual label on hover.
3. Used the exact CSS box-shadow offsets to recreate the `screen-tear` effect.

### Phase 8 & 9 & 10: Extract Content, Reconstruct Project, Preserve Links
- Moved data to `src/data/cv.ts` and `src/data/links.ts`.
- Recreated `src/app/page.tsx`, `src/app/cv/page.tsx`, `src/app/links/page.tsx`.
- Saved all parsed links to `recovery/links.json`.
- Set up `package.json` for Next.js `15.3.5` and React 19.
- Used custom PostCSS config to support Tailwind v4.

### Phase 11 & 12: Verification
- Provided `recovery/verify.spec.js` as an automated Playwright test script to verify the DOM structure matches the original layout, checking for all critical components on the three main pages.
