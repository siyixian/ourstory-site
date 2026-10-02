# Our Story website

A responsive product marketing homepage built with React 19, TypeScript and Vite, using Node.js for development and production builds.

## Run locally

Requires Node.js 22+.

```sh
npm ci
npm run dev -- --port 4173
```

## Check and build

```sh
npm run typecheck
npm run build
npm run test:sites
```

Production client output is in `dist/client`. The included packaging script also creates a Sites-compatible worker; nothing has been published.

## Structure

- `src/App.tsx`: marketing page sections and mobile navigation
- `src/components/Demo.tsx`: collaborative and individual video demos
- `src/components/EarlyAccess.tsx`: accessible email request dialog
- `src/content/faq.ts`: FAQ content
- `src/styles.css`: design tokens and responsive styling
- `public/assets`: local product and brand assets
- `evidence`: browser screenshots and visual comparison

## Content and assets

Product videos, forest visual textures and phone frame originate from the user-provided Yidan Gong Our Story portfolio page. Video clips have been transcoded for web playback; they are product prototypes, not a live collaborative app. The visible phone and tablet views show the child-describes / parent-selects interaction.

The logo uses the original image attachment recovered from the prior “获取SVG矢量图” chat. The later approved Demi SVG was referenced in that chat as a sandbox download but could not be retrieved locally; the original raster image is used without recreating or changing the logo. Replace `public/assets/ourstory-logo.png` with the approved transparent/vector asset when available and update the two image references if the extension changes.

Contact address: `info@ourstory.team`. The early access flow prepares an email draft; it does not submit, store or transmit form data. The user must send the email from their mail application. No mailing service or signup backend is connected.

Typography: DM Sans (Google Fonts) with Avenir Next/sans-serif fallback; Georgia for editorial headlines. Icons: Phosphor.

## Before public launch

Confirm early access wording and device requirements against the actual release, replace the raster logo with the final asset, and add approved privacy/terms content and an actual registration service if needed. This deliverable is the requested homepage, not the Our Story learning app.
