import { photos, type PhotoKey } from "./photos";

// Vite fingerprints these files and copies them into the production build.
const files = import.meta.glob("/src/assets/*.{jpg,webp}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;
const file = (name: string) => files[`/src/assets/${name}`] ?? "";

export interface PhotoAsset {
  url: string;
  srcSet: string;
}

export const photoAssets = Object.fromEntries(
  Object.values(photos).map(({ key, width }) => [
    key,
    {
      url: file(`${key}.jpg`),
      srcSet: `${file(`${key}-640.webp`)} 640w, ${file(`${key}-1280.webp`)} 1280w, ${file(`${key}.jpg`)} ${width}w`,
    },
  ]),
) as Record<PhotoKey, PhotoAsset>;
