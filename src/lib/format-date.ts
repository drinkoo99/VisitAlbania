// Chrome ships no Albanian date data, so Intl silently falls back to English for "sq".
const albanianMonths = [
  "janar",
  "shkurt",
  "mars",
  "prill",
  "maj",
  "qershor",
  "korrik",
  "gusht",
  "shtator",
  "tetor",
  "nëntor",
  "dhjetor",
];

const utc = (year: number, month: number, day = 1) =>
  new Date(Date.UTC(year, month - 1, day));

export function formatMonth(language: string, month: number): string {
  if (language === "sq") return albanianMonths[month - 1] ?? "";
  return new Intl.DateTimeFormat(language, {
    month: "long",
    timeZone: "UTC",
  }).format(utc(2024, month));
}

export function formatMonthYear(
  language: string,
  year: number,
  month: number,
): string {
  if (language === "sq") return `${albanianMonths[month - 1]} ${year}`;
  return new Intl.DateTimeFormat(language, {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(utc(year, month));
}

export function formatDate(language: string, isoDate: string): string {
  const [year = 0, month = 1, day = 1] = isoDate.split("-").map(Number);
  if (language === "sq") return `${day} ${albanianMonths[month - 1]} ${year}`;
  return new Intl.DateTimeFormat(language, {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(utc(year, month, day));
}
