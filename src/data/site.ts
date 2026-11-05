// Facts about the site's operator, used by the legal pages and the footer.
export const site: {
  operator: string;
  contactEmail: string | null;
  legalUpdated: string;
} = {
  operator: "Drin Kozhani",
  /** Public contact address. While this is null the footer link is hidden and the legal pages say it is pending. */
  contactEmail: null,
  /** Date the legal pages were last changed. */
  legalUpdated: "2026-11-05",
};
