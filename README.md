# Sakthivel P — Portfolio

Personal portfolio built with Next.js, Tailwind CSS v4, and Framer Motion.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Fonts:** IBM Plex Mono, Share Tech Mono, JetBrains Mono

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form

The `/links` page includes a server-side contact form backed by Formspree.
Create a form at [formspree.io](https://formspree.io/), copy its endpoint into
`FORMSPREE_ENDPOINT`, and add that variable to `.env.local` and the Vercel
Production environment before deploying.

## Updating Content

Edit `src/data/portfolio.ts` to update most portfolio information in one place.

Place your resume at `public/cv/resume.pdf` and profile photo at `public/images/profile.webp`.

## Routes

- `/` — Homepage
- `/cv` — Resume viewer and download
- `/links` — Social and repository links
