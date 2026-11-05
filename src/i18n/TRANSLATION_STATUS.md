# Translation status

English is the source. Every text in sq, de, fr and it is a **machine draft that needs native review**. Nothing is left in English on purpose, apart from proper names and the source titles of photographs on the credits page.

| Text | File | Review priority |
|---|---|---|
| Legal pages | `locales/*.json`, `legalDocs` | High. Each page says the English version is the original. |
| Place names, summaries, descriptions | `places/*.json` | High, especially Albanian place names and their grammatical forms |
| Interface labels | `locales/*.json` | Medium |
| Photo descriptions (alt text) | `locales/*.json`, `photos` | Medium |

Food names (Tavë kosi, Fërgesë, Flija, Oda, Valle) stay in Albanian in every language. German and French use their usual names for lakes, rivers and parks. Italian also uses its traditional names, such as Valona, Scutari and Saseno.

The tests fail if a key is missing from any language, or if a place or photo description is left in English.
