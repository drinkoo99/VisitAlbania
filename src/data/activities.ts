import type { ActivityKey } from "./destinations";

export interface ActivityRow {
  slug: string;
  /** Optional label override, e.g. a route between two places */
  label?: string;
}

// Places follow the National Tourism Agency's activity pages (akt.gov.al/en/adventure/).
export const activities: { key: ActivityKey; rows: ActivityRow[] }[] = [
  { key: "hiking", rows: [{ slug: "valbona" }, { slug: "theth" }, { slug: "llogara-pass" }] },
  { key: "paragliding", rows: [{ slug: "llogara-pass" }, { slug: "mount-dajti" }] },
  {
    key: "kayaking",
    rows: [{ slug: "vjosa-river" }, { slug: "osum-river" }, { slug: "drin-river" }, { slug: "lake-prespa" }],
  },
  { key: "diving", rows: [{ slug: "karaburun" }, { slug: "sazan-island" }] },
  {
    key: "cycling",
    rows: [{ slug: "llogara-pass", label: "Llogara Pass – Himarë" }, { slug: "lake-shkodra" }, { slug: "theth" }],
  },
  {
    key: "camping",
    rows: [
      { slug: "theth" },
      { slug: "alps-of-albania-national-park" },
      { slug: "gjipe" },
      { slug: "mount-dajti" },
    ],
  },
];
