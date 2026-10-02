# Our Story homepage design QA

Source visual truth: `evidence/source.jpg`, captured from https://yidangong.com/projects/our-story. Brand source: `public/assets/ourstory-logo.png`, recovered from the previous logo chat attachment.
Implementation: `evidence/desktop.jpg`, `evidence/desktop-full.jpg`, `evidence/mobile.jpg`, `evidence/demo.jpg`.
Full-view comparison: `evidence/comparison.jpg` (source and implementation in one comparison image).

## Scope and normalization

This is a company homepage redesign, as requested, rather than a clone of the portfolio layout. Comparison checks preservation of product imagery, story interaction and green visual language. Editorial headings, revised marketing copy, the new company logo, and the split hero are intentional changes. The old portfolio wordmark is intentionally not reused.

Desktop source and implementation: 1280 × 720 pixels, 1280 × 720 CSS viewport, browser capture density 1. Comparison downsamples both equally to 640 × 360. Mobile implementation: 390 × 844 CSS viewport, 390 × 844 pixels. Mobile has no source homepage layout to reproduce; responsiveness is reviewed against the agreed homepage structure.
State: default homepage; additional tests cover demo playback, solo practice, early-access request preparation, FAQ expanded and mobile menu open/closed.

## Findings and comparison history

- [P2, fixed] Product screen initially overlapped the hero caption. Reduced desktop tablet width from 83% to 72%, moved it to 17% from the top, and adjusted phone size/position. Post-fix `desktop.jpg` and `comparison.jpg` show a clear gap above both lines of the caption.
- [P2, fixed] Decorative hero video auto-looped without a visible pause control. Replaced it with the actual source video poster image. Demo playback remains user-initiated.
- [P3] The available logo is a raster source with a pale background. It remains sharp at the displayed navigation size and its proportions are preserved. The later approved Demi SVG was not retrievable from historical sandbox links. Replace with that final vector when provided; no replacement logo was invented.

## Required fidelity surfaces

- Typography: Georgia editorial display and DM Sans UI are intentional. Desktop and mobile headings wrap without clipping; paragraph lengths are controlled. No source font fidelity claim is made for this redesign.
- Spacing/layout: split hero, generous section rhythm, three-step desktop grid, stacked mobile grid, paired device demos. No horizontal overflow at 1280 or 390 CSS pixels. Desktop product/caption overlap corrected.
- Colors/tokens: cream, dark forest green and sage retain the supplied direction; original texture and product forest illustrations are reused. Legible foreground/background balance.
- Asset quality: actual product screenshots, actual source phone frame, local transcoded recordings and original logo. No imitation product screens or handcrafted logo. Phone frame and screen maintain their intended aspect ratio. Source/implementation focused product regions were inspected at full viewport size separately after the combined comparison.
- Copy/content: company/product voice replaces designer contributions, role, research process and iteration history. Prototype status is stated; no invented testimonials, effectiveness statistics, launch availability or signup success.

## Interaction verification

- Hero demo link navigates to the demo section.
- Shared play/pause starts both device videos; media readyState 4 and no playback error observed.
- Solo tab switches to individual practice; video plays successfully.
- Left/right keyboard switching changes selected demo tab.
- Early-access modal opens and closes. Test name/email prepare a correctly encoded mailto draft to info@ourstory.team. No email sent and no data persisted.
- FAQ expands to show the development status answer.
- Mobile menu opens, navigates to the mission and closes.
- Console reviewed: Vite connection and React development informational messages; no application errors observed.

## Validation and limitations

Production build including strict TypeScript checking passes. Four included packaging tests pass. Preview is local, not publicly deployed. Live registration service, policy pages and the learning app itself are outside the requested homepage scope. Desktop and mobile verified in the Codex in-app browser; other browser engines were not tested.

final result: passed
