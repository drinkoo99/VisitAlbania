import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import { SiteShell } from "@/components/layout/site-shell";
import { Photo } from "@/components/ui/photo";
import { Button } from '@/components/ui/button';
import { bySlug, destinations, getBody, getName, getSummary } from "@/data/destinations";
import { regionByKey } from "@/data/regions";
import { photos } from "@/data/photos";
import { pageHead } from "@/lib/page-head";
import { photoAssets } from '@/data/photo-assets';

export const Route = createFileRoute("/destinations_/$slug")({
  loader: ({ params }) => {
    const dest = bySlug[params.slug];
    if (!dest) throw notFound();
    return dest;
  },
  head: ({ loaderData }) =>
    pageHead(
      loaderData ? `${loaderData.name} · VisitAlbania` : "Place not found · VisitAlbania",
      loaderData?.summary.en ?? "This place is not in the guide.",
      loaderData?.image ? photoAssets[loaderData.image].url : undefined,
    ),
  component: DestinationPage,
  notFoundComponent: DestinationNotFound,
});

function DestinationPage() {
  const { t, i18n } = useTranslation();
  const dest = Route.useLoaderData();
  const region = regionByKey[dest.region];
  const more = destinations.filter((d) => d.region === dest.region && d.slug !== dest.slug).slice(0, 3);
  const photo = dest.image ? photos[dest.image] : undefined;

  return (
    <SiteShell>
      <main id="main-content">
        <article className="shell section-gap place-layout">
          <header className="place-header">
            <Link to="/destinations" className="text-link">
              <ArrowLeft size={16} aria-hidden /> {t("cta.backToDestinations")}
            </Link>
            <h1 className="type-display mt-6">{getName(dest, i18n.language)}</h1>
            <p className="type-lead mt-6">{getSummary(dest, i18n.language)}</p>
            <dl className="place-facts mt-8">
              <div>
                <dt className="type-small text-muted-foreground">{t("place.region")}</dt>
                <dd>{t(`regions.${region.i18nKey}.name`)}</dd>
              </div>
              <div>
                <dt className="type-small text-muted-foreground">{t("place.type")}</dt>
                <dd>{t(`type.${dest.type}`)}</dd>
              </div>
              {dest.goodFor.length > 0 && (
                <div>
                  <dt className="type-small text-muted-foreground">{t("place.goodFor")}</dt>
                  <dd className="flex flex-wrap gap-3">{dest.goodFor.map((a) => <Link key={a} to="/" hash={`activity-${a}`} className="text-link">{t(`activity.${a}`)}</Link>)}</dd>
                </div>
              )}
            </dl>
          </header>
          <Photo photo={dest.image} place={getName(dest, i18n.language)} eager className="place-photo aspect-[3/2]" />
          {photo && <p className="type-small place-credits">{photo.author} · <a href={photo.licenceUrl} target="_blank" rel="noreferrer" className="text-link">{photo.licence}</a> · <Link to="/credits" className="text-link">{t('credits.heading')}</Link></p>}
          <div className="measure place-body">
            <p className="type-body">{getBody(dest, i18n.language)}</p>
          </div>
          {dest.nearby.length > 0 && (
            <nav className="place-nearby" aria-label={t("place.nearby")}>
              <h2 className="type-heading">{t("place.nearby")}</h2>
              <ul className="nearby-list mt-6">
                {dest.nearby.map((slug) => {
                  const n = bySlug[slug];
                  return n ? (
                    <li key={slug}>
                      <Link to="/destinations/$slug" params={{ slug }} className="region-place-link">
                        <span>{getName(n, i18n.language)}</span>
                        <ArrowRight size={18} aria-hidden />
                      </Link>
                    </li>
                  ) : null;
                })}
              </ul>
            </nav>
          )}
        </article>
        {more.length > 0 && (
          <section className="shell section-gap">
            <h2 className="type-heading">{t("place.moreIn", { region: t(`regions.${region.i18nKey}.name`) })}</h2>
            <ul className="more-places mt-8">
              {more.map((d) => (
                <li key={d.slug}>
                  <Link to="/destinations/$slug" params={{ slug: d.slug }} className="destination-card">
                    <Photo photo={d.image} place={getName(d, i18n.language)} className="destination-photo aspect-[4/3]" />
                    <div className="destination-card-copy">
                      <h3 className="destination-name">
                        {getName(d, i18n.language)}
                        <ArrowRight size={18} aria-hidden />
                      </h3>
                      <p className="type-small text-muted-foreground">{t(`type.${d.type}`)}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </SiteShell>
  );
}

function DestinationNotFound() {
  const { t } = useTranslation();
  const { slug } = Route.useParams();
  return (
    <SiteShell>
      <main id="main-content" className="shell section-gap">
        <h1 className="type-display">{t("place.notFoundHeading")}</h1>
        <p className="type-lead mt-6">
          {t("place.notFoundBody")} <span className="type-small text-muted-foreground">({slug})</span>
        </p>
        <Button asChild variant="secondary" className="mt-8"><Link to="/destinations">
          <ArrowLeft size={16} aria-hidden /> {t("cta.backToDestinations")}
        </Link></Button>
      </main>
    </SiteShell>
  );
}
