# Northgo website (northgo-w3)

Astro rebuild of [www.northgo.com](https://www.northgo.com/).

Live preview on GitHub Pages: [https://yjhwang59.github.io/northgo-w3/](https://yjhwang59.github.io/northgo-w3/)

Production target remains Cloudflare Pages (enquiry API and `_redirects`).

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:4321/northgo-w3/`. English is at `/northgo-w3/`; Traditional Chinese at `/northgo-w3/zh-tw`.

## Build

```bash
npm run build
npm run preview
```

Static output is written to `dist/`. Cloudflare Pages Functions live in `functions/api/enquiry.ts`.

## Enquiry form

`POST /api/enquiry` accepts the contact form on Cloudflare Pages only. GitHub Pages serves the static site and does not run this function.

Set these Cloudflare Pages secrets / environment variables:

- `ENQUIRY_TO` — destination mailbox (default `info.tpe@northgo.com`)
- `ENQUIRY_FROM` — verified sender for Resend (default `enquiries@northgo.com`)
- `RESEND_API_KEY` — when unset, the function accepts the payload and logs it (useful for preview)

## Redirects

`public/_redirects` sends `/news` to home (301) and unfinished `/ja` & `/vi` locales to English equivalents (302). These rules apply on Cloudflare Pages only.

## GitHub Pages deploy

Push to `main` runs `.github/workflows/deploy.yml`, which builds with Astro (`base: /northgo-w3`) and publishes `dist/` to GitHub Pages.

## Cloudflare Pages deploy

1. Connect this repo to Cloudflare Pages.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Set secrets: `RESEND_API_KEY`, optional `ENQUIRY_TO` / `ENQUIRY_FROM`.
5. Preview the Pages URL, then point `www.northgo.com` DNS to Pages when ready.
6. For production on the apex domain, set `site` / `base` back to root before pointing DNS.
7. Keep existing path URLs (`/services/...`, `/about`, `/contact`, `/legal/...`, `/zh-tw/...`).

## Inventory snapshots

Root HTML files `sitemap.html`, `sitemap-tree.html`, and `locations.html` are research artefacts from the 2026-11-11 audit. They are not part of the Astro build.
