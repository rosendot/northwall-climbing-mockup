# Northwall Climbing — concept mockup

A seven-page site for a **fictional** bouldering gym in Tacoma, WA. Built by
Atlas Studio as a portfolio piece — no such business exists, and the prices,
hours, staff and testimonials are all invented.

Live: https://northwall-climbing-mockup.pages.dev

## Stack

Astro 5, static output, deployed to Cloudflare Pages. No framework islands —
the interactive pieces (nav drawer, testimonial slider, image comparison, FAQ
accordion/tabs, countdown, hours pill) are one small inline script in
`src/layouts/Layout.astro`.

## Design system

- **Palette:** `electric-lime` from the Atlas Studio vault
- **Fonts:** DM Sans headings, Inter body — the first all-sans mockup in the set
- Design tokens come from `src/styles/tokens.css`, a verbatim copy of the
  vault's `design-system/tokens.css`. `src/styles/northwall.css` overrides only
  the `--color-*` and `--font-*` values.

## Structure

```
src/
├── components/   ImageSlot, PageHero, HoursCard, CtaBanner, FooterCta
├── data/         nav.ts (shared shop details + nav), content.ts, content2.ts
├── layouts/      Layout.astro — header, footer, and the shared script
├── pages/        one .astro per route
└── styles/       tokens.css (design system) + northwall.css (brand)
```

Copy lives in `src/data/`, so the pages stay markup and the wording is
reviewable in one place.

## Photos

Every image is an unfilled `<ImageSlot>` showing the shot that belongs there.
Fill them by passing `src` — the placeholder styling drops away on its own.

## Notes from the build

- **The drawer breakpoint is 720px, measured.** The header holds cleanly to
  740; DM Sans at `--text-sm` is compact enough that seven links plus a CTA fit
  where Torque & Tally's Oswald caps needed 1024. Measured, not assumed.
- **The mobile CTA lives inside the drawer.** Left beside the burger it costs
  ~92px of header row and pushed the toggle off-screen at 320.
- **The canvas emitted the pricing cards and the comparison table in different
  column orders**, and dated the countdown 2027 against 2026 copy. Both fixed
  here.

## Commands

```
npm install
npm run dev      # localhost:4321
npm run build    # -> dist/
npm run deploy   # wrangler pages deploy dist
```
