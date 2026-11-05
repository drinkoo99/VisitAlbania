<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Use TanStack Start file routes with minimal TypeScript instead of the brief's React Router/JS preference, because the platform fixes the framework.
- Keep discovery data in src/data and translated resources in src/i18n: interface text in locales/, place names and text in places/. English in src/data is the source.
- Share one Photo component for credited imagery and labelled failure states; photos are self-hosted Vite assets in src/assets (JPEG plus 640 and 1280 WebP), never hotlinked.
- Use CSS sticky and lightweight motion hooks, with no animation library, so reduced-motion layouts remain complete.
- Keep one synchronous i18n instance in the root provider so all page content shares the selected language across navigation.
- Restore saved language through the stable I18nContext instance, not useTranslation's language-dependent wrapper, to avoid re-triggering restoration on every language change.
- Use flag-icons only for the compact language-selector flags; all other page assets remain credited photography.
- Keep destination detail routes non-nested with a trailing underscore so the index page cannot swallow their content.
- Keep the privacy promises in the legal pages true: no third-party requests, no cookies, and `lang` as the only browser storage. Router scroll restoration stays off for this reason.
- Netlify publishes `dist` (see netlify.toml). Do not change it to `dist/client`, which is what Netlify detects for TanStack Start: with Nitro, that folder is never created.
