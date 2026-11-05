# VisitAlbania

An independent Albania guide by Drin Kozhani. It is not an official tourism authority or booking service, and it has no backend or database.

## What is built

- A north-to-south homepage: Theth photograph, pinned statement, four-region Albania outline, six-place showcase, activities, food and culture, past calendar listings, about and cropped Shqipëria footer.
- `/destinations` with combined region/type filters, URL synchronization, announced counts and empty results.
- Independent `/destinations/:slug` pages for 41 places, nearby links and activity links back to the homepage.
- `/credits`, legal pages at `/privacy`, `/terms`, `/cookies`, and missing-page states.
- English-default language selection with Albanian, German, French and Italian drafts of all text; a chosen language persists across visits.

## Run locally

```sh
npm install
npm run dev
npm test
```

## Stack and dependencies

The Lovable platform fixes TanStack Start file routing and minimal TypeScript instead of the brief's React Router/JavaScript preference. Production output is JavaScript. React 19 and Tailwind CSS provide rendering and styling. i18next/react-i18next provide translations; flag-icons supplies compact language flags. Radix primitives provide accessible dialogs/dropdowns and the shared button slot. Lucide supplies interface arrows and menu icons. Vitest and Testing Library cover discovery, routing and language persistence. The template also includes tooling and UI dependencies not used by the guide; these have not all been removed. Motion uses CSS, IntersectionObserver and lightweight scroll hooks, with no animation or carousel library.

## Photography

All 41 places have a photograph. The 40 image files come from Wikimedia Commons (39) and Unsplash (1, Mirror Beach, by Elion Jashari). Authors and licences in `src/data/photos.ts` were re-read from each file's source record on 5 November 2026; none is NC or ND. `/credits` lists every photo, and each place page credits its own.

Images are ordinary Vite assets in `src/assets`, so they are fingerprinted and copied into the production build: a 1920px JPEG plus 640px and 1280px WebP versions for `srcset`. `src/data/photo-assets.ts` builds the URLs. Very wide panoramas were cropped to 3:2 so the subject stays visible.

## Privacy

The site loads nothing from third parties: fonts are self-hosted in `public/fonts` (Epilogue, SIL Open Font License), and photos come from the site's own address. There are no cookies, analytics or error-reporting calls. The only browser storage is `lang` in `localStorage`, written only when a visitor chooses a language. Router scroll restoration stays off because it writes to `sessionStorage`. `src/test/privacy.test.ts` guards these promises, because the legal pages depend on them.

If the site is published on a host that injects its own script or analytics, for example a platform badge, the privacy and cookie pages must be updated to say so.

## Content status

- Interface, place text, photo descriptions and legal pages exist in all five languages. Everything outside English is an unreviewed machine draft: see `src/i18n/TRANSLATION_STATUS.md`.
- Destination facts were checked against the National Tourism Agency, Council of Ministers decisions and other sources listed in `LOVABLE-ANSWERS.md`.
- Activities follow the agency's activity pages. Events are past listings, not upcoming dates.
- Regions are approximate travel groupings, not administrative boundaries; the outline is simplified from Natural Earth.
- Legal pages are drafts based on how the site actually works. They have not been reviewed by a lawyer.
- `contactEmail` in `src/data/site.ts` is empty. Until it is set, the footer hides "Suggest a correction" and the legal pages show that the address is pending.

## Production build

`npm run build` writes a Cloudflare Worker to `.output`. `vite preview` does not apply to this output, so test it in the Workers runtime:

```sh
npx wrangler dev --config .output/server/wrangler.json
```

## Verification

Checked on 5 November 2026 in Chrome against the production build running in the Workers runtime: every route at 1440, 768, 390 and 320 pixels, with no console errors, failed requests, third-party requests, broken images, horizontal overflow or broken internal links. Language switching and persistence were checked in all five languages. Automated tests and the TypeScript check pass.

Designed toward WCAG 2.2 AA, not certified compliant. Screen-reader testing and 200% browser zoom have not been done.
