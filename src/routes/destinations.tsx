import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import { SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";
import {
  REGIONS,
  TYPES,
  destinations,
  filterDestinations,
  getName,
  getSummary,
  isRegion,
  isType,
  type RegionKey,
  type TypeKey,
} from "@/data/destinations";
import { regionByKey } from "@/data/regions";
import { pageHead } from "@/lib/page-head";

type Search = { region?: RegionKey | undefined; type?: TypeKey | undefined };

export const Route = createFileRoute("/destinations")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    region: isRegion(search["region"]) ? search["region"] : undefined,
    type: isType(search["type"]) ? search["type"] : undefined,
  }),
  head: () =>
    pageHead(
      "Destinations · VisitAlbania",
      "Every place in this guide, by region and by type.",
    ),
  component: DestinationsPage,
});

function DestinationsPage() {
  const { t, i18n } = useTranslation();
  const { region, type } = Route.useSearch();
  const navigate = Route.useNavigate();
  const list = filterDestinations(destinations, region, type);

  return (
    <SiteShell>
      <main id="main-content" className="shell section-gap">
        <header className="section-intro">
          <h1 className="type-display">{t("destinations.heading")}</h1>
          <p className="type-lead mt-6">{t("destinations.lead")}</p>
          <p className="type-small mt-4 text-muted-foreground">{t("destinations.note")}</p>
        </header>

        <div className="filter-groups" role="group" aria-label={t("a11y.filters")}>
          <fieldset className="filter-group">
            <legend className="type-small filter-label">{t("destinations.region")}</legend>
            <div className="filter-options">
              <Button aria-pressed={!region} onClick={() => void navigate({ search: { type }, resetScroll: false })} variant={!region ? "primary" : "secondary"} size="sm">
                {t("destinations.all")}
              </Button>
              {REGIONS.map((r) => (
                <Button key={r} aria-pressed={region === r} onClick={() => void navigate({ search: { region: region === r ? undefined : r, type }, resetScroll: false })} variant={region === r ? "primary" : "secondary"} size="sm">
                    {t(`regions.${regionByKey[r].i18nKey}.name`)}
                </Button>
              ))}
            </div>
          </fieldset>
          <fieldset className="filter-group">
            <legend className="type-small filter-label">{t("destinations.type")}</legend>
            <div className="filter-options">
              <Button aria-pressed={!type} onClick={() => void navigate({ search: { region }, resetScroll: false })} variant={!type ? "primary" : "secondary"} size="sm">
                {t("destinations.all")}
              </Button>
              {TYPES.map((ty) => (
                <Button key={ty} aria-pressed={type === ty} onClick={() => void navigate({ search: { region, type: type === ty ? undefined : ty }, resetScroll: false })} variant={type === ty ? "primary" : "secondary"} size="sm">
                    {t(`type.${ty}`)}
                </Button>
              ))}
            </div>
          </fieldset>
        </div>

        <p className="type-small mt-10 text-muted-foreground" aria-live="polite">
          {t("destinations.count", { count: list.length })}
        </p>

        {list.length === 0 ? (
          <div className="mt-8">
            <p className="type-body">{t("destinations.empty")}</p>
            <Button asChild variant="secondary" className="mt-6">
              <Link to="/destinations" search={{}}>{t("cta.clearFilters")}</Link>
            </Button>
          </div>
        ) : (
          <ul className="destination-grid mt-8">
            {list.map((d, index) => (
              <li key={d.slug}>
                <Link
                  to="/destinations/$slug"
                  params={{ slug: d.slug }}
                  className={`destination-card ${d.image && (index + 1) % 4 === 0 ? 'featured scrim-bottom' : ''}`}
                  aria-label={t("cta.readAbout", { name: getName(d, i18n.language) })}
                >
                  <Photo photo={d.image} place={getName(d, i18n.language)} className="destination-photo aspect-[4/3]" />
                  <div className="destination-card-copy">
                    <h2 className="destination-name">
                      {getName(d, i18n.language)}
                      <ArrowRight size={18} aria-hidden />
                    </h2>
                    <p className="type-small text-muted-foreground">
                      {t(`regions.${regionByKey[d.region].i18nKey}.name`)} · {t(`type.${d.type}`)}
                    </p>
                    <p className="type-body mt-3">{getSummary(d, i18n.language)}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </SiteShell>
  );
}
