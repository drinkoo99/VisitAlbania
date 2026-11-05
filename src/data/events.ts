// Past listings, checked against the National Tourism Agency and albania.al on 5 November 2026.
// They are not upcoming dates: always check the organiser.

export interface EventEntry {
  key: "triathlon" | "streetFood" | "kayakFest" | "gzo";
  name: string;
  /** 1-12, rendered with Intl in the current language */
  month: number;
  place: string;
  /** year and month last listed */
  lastListed: { year: number; month: number };
  field: "surface" | "mist" | "ionian" | "slate";
}

export const events: EventEntry[] = [
  { key: "triathlon", name: "Vlora Triathlon", month: 5, place: "Vlorë", lastListed: { year: 2024, month: 5 }, field: "surface" },
  { key: "streetFood", name: "Tirana Street Food Festival", month: 5, place: "Tirana", lastListed: { year: 2024, month: 5 }, field: "mist" },
  { key: "kayakFest", name: "Kayak Fest", month: 5, place: "Lake Prespa", lastListed: { year: 2024, month: 5 }, field: "ionian" },
  { key: "gzo", name: "Gzo n'Shkodër", month: 12, place: "Shkodër", lastListed: { year: 2023, month: 12 }, field: "slate" },
];
