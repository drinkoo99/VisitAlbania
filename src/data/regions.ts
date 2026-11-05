import type { PhotoKey } from "./photos";
import type { RegionKey } from "./destinations";

export interface RegionEntry {
  key: RegionKey;
  /** i18n key segment: regions.<i18nKey>.* */
  i18nKey: "north" | "centre" | "southInland" | "riviera";
  photo: PhotoKey;
  places: string[];
}

// The regions are an editorial travel grouping, not official boundaries.
export const regions: RegionEntry[] = [
  {
    key: "north",
    i18nKey: "north",
    photo: "valbona",
    places: [
      "theth",
      "valbona",
      "lepushe",
      "shala-river",
      "accursed-mountains",
      "korab",
      "lake-shkodra",
      "buna-river",
      "drin-river",
      "lezhe",
    ],
  },
  {
    key: "centre",
    i18nKey: "centre",
    photo: "tirana",
    places: ["tirana", "kruje", "mount-dajti", "divjake-karavasta-national-park", "apollonia"],
  },
  {
    key: "south-inland",
    i18nKey: "southInland",
    photo: "berat",
    places: [
      "berat",
      "gjirokaster",
      "mount-tomorr",
      "osum-river",
      "vjosa-river",
      "lake-ohrid",
      "lake-prespa",
      "dardhe",
    ],
  },
  {
    key: "riviera",
    i18nKey: "riviera",
    photo: "gjipe",
    places: [
      "llogara-pass",
      "dhermi",
      "jale",
      "gjipe",
      "borsh",
      "mirror-beach",
      "ksamil",
      "butrint",
      "blue-eye",
      "karaburun",
      "sazan-island",
    ],
  },
];

export const regionByKey = Object.fromEntries(regions.map((r) => [r.key, r])) as Record<RegionKey, RegionEntry>;
