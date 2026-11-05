import { useTranslation } from "react-i18next";

import { SiteShell } from "@/components/layout/site-shell";
import { site } from "@/data/site";
import { formatDate } from "@/lib/format-date";

type Section = { h: string; p: string[] };

export function LegalPage({ page }: { page: "privacy" | "terms" | "cookies" }) {
  const { t, i18n } = useTranslation();
  const fill = (text: string) =>
    text
      .replaceAll("{operator}", site.operator)
      .replaceAll("{contact}", site.contactEmail ?? t("legal.contactPending"));
  const sections = t(`legalDocs.${page}.sections`, {
    returnObjects: true,
  }) as unknown as Section[];
  const date = formatDate(i18n.language, site.legalUpdated);
  return (
    <SiteShell>
      <main id="main-content" className="shell section-gap">
        <h1 className="type-display">{t(`legal.${page}`)}</h1>
        <p className="type-small mt-6 text-muted-foreground">
          {t("legal.updated", { date })}
        </p>
        {i18n.language !== "en" && (
          <p className="type-small mt-2 text-muted-foreground">
            {t("legal.translationNote")}
          </p>
        )}
        <p className="type-lead mt-6 measure">
          {fill(t(`legalDocs.${page}.intro`))}
        </p>
        <div className="legal-body measure">
          {sections.map((section) => (
            <section key={section.h}>
              <h2 className="type-body">{section.h}</h2>
              {section.p.map((text) => (
                <p key={text} className="type-body mt-2">
                  {fill(text)}
                </p>
              ))}
            </section>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
