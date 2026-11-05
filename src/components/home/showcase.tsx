import { Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { bySlug, getName, getSummary } from '@/data/destinations';
import { regionByKey } from '@/data/regions';
import { Photo } from '@/components/ui/photo';
import { useScrollProgress } from '@/hooks/use-motion';
const showcase = ['theth', 'valbona', 'berat', 'gjirokaster', 'gjipe', 'butrint'];
export function Showcase() {
 const { t, i18n } = useTranslation(); const { ref, progress, reduced } = useScrollProgress(); const track = useRef<HTMLDivElement>(null); const [travel, setTravel] = useState(0);
 useEffect(() => { const el = track.current; if (!el) return; const measure = () => setTravel(Math.max(0, el.scrollWidth - window.innerWidth + 48)); measure(); const observer = new ResizeObserver(measure); observer.observe(el); return () => observer.disconnect(); }, []);
 return <section className={`showcase ${reduced ? 'reduced' : ''}`}><div ref={ref} className="showcase-scroll"><div className="showcase-stage"><div className="showcase-background scrim-even"><Photo photo="valbona" decorative className="h-full"/></div><div className="shell showcase-intro on-dark"><h2 className="type-heading text-stone">{t('showcase.heading')}</h2><p className="type-lead mt-6 text-stone">{t('showcase.lead')}</p></div><div ref={track} className="showcase-track" style={{ '--track-x': `${-progress * travel}px` } as React.CSSProperties}>{showcase.map((slug, i) => { const d = bySlug[slug]; if (!d) return null; const name = getName(d, i18n.language); return <Link key={slug} to="/destinations/$slug" params={{ slug }} className={`showcase-card showcase-tone-${i % 3}`} aria-label={t('cta.readAbout', { name })}><Photo photo={d.image} place={name} className="showcase-photo"/><div className="showcase-card-copy"><h3>{name}</h3><div><p className="type-small text-muted-foreground">{t(`regions.${regionByKey[d.region].i18nKey}.name`)} · {t(`type.${d.type}`)}</p><p className="type-body mt-3">{getSummary(d, i18n.language)}</p></div></div></Link>; })}</div></div></div><div className="shell mt-10"><Link to="/destinations" className="text-link">{t('cta.allDestinations')}</Link></div></section>;
}
