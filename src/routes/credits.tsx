import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

import { SiteShell } from "@/components/layout/site-shell";
import { Photo } from "@/components/ui/photo";
import { destinations, getName } from "@/data/destinations";
import { photos, type PhotoKey } from "@/data/photos";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/credits")({
  head: () =>
    pageHead(
      "Photo credits · VisitAlbania",
      "Every photograph in this guide, with its author and licence.",
    ),
  component: CreditsPage,
});

function CreditsPage() {
  const { t, i18n } = useTranslation();
  const entries = Object.values(photos);

  return (
    <SiteShell>
      <main id="main-content" className="shell section-gap">
        <header className="section-intro">
          <h1 className="type-display">{t("credits.heading")}</h1>
          <p className="type-lead mt-6">{t("credits.lead")}</p>
          <p className="type-small mt-4 text-muted-foreground">{t("credits.shareAlike")}</p>
        </header>
        <ul className="credits-list mt-12">
          {entries.map((p) => (
            <li key={p.key} className="credit-row">
              <Photo photo={p.key as PhotoKey} className="credit-photo aspect-[3/2]" sizes="(min-width: 768px) 33vw, 100vw" />
              <div className="credit-copy">
                <h2 className="credit-title">{p.title}</h2>
                <dl className="credit-facts type-small">
                  <div>
                    <dt className="text-muted-foreground">{t("credits.author")}</dt>
                    <dd>{p.author}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">{t("credits.licence")}</dt>
                    <dd>
                      <a href={p.licenceUrl} target="_blank" rel="noreferrer" className="text-link">
                        {p.licence}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">{t("credits.source")}</dt>
                    <dd>
                      <a href={p.sourcePage} target="_blank" rel="noreferrer" className="text-link">
                        {p.sourcePage.includes("unsplash.com") ? "Unsplash" : t("credits.sourceLink")}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">{t("credits.usedOn")}</dt>
                    <dd>{[...(p.onHome ? [t("credits.home")] : []), ...destinations.filter((d) => d.image === p.key).map((d) => getName(d, i18n.language))].join("; ")}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </SiteShell>
  );
}
