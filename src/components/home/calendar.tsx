import { formatMonth, formatMonthYear } from '@/lib/format-date';
import { useTranslation } from 'react-i18next';
import { events } from '@/data/events';
import { useScrollProgress } from '@/hooks/use-motion';
export function Calendar() {
 const { t, i18n } = useTranslation(); const { ref, progress, reduced } = useScrollProgress();
 return <section id="calendar" className={`calendar section-gap ${reduced ? 'reduced' : ''}`}><div className="shell section-intro" data-reveal><h2 className="type-heading">{t('calendar.heading')}</h2><p className="type-lead mt-6">{t('calendar.lead')}</p></div><div ref={ref} className="calendar-scroll"><div className="shell calendar-stage"><div className="calendar-cards">{events.map((event, i) => { const month = formatMonth(i18n.language, event.month); const date = formatMonthYear(i18n.language, event.lastListed.year, event.lastListed.month); return <article key={event.key} className={`event-card event-${event.field}`} style={{ '--deal-y': `${Math.max(0, 1 - progress * 3 + i * .3) * 80}px`, '--deal-rotate': `${[-2, 1, -1, 2][i]}deg` } as React.CSSProperties}><p className="type-lead">{month} · {event.place}</p><h3>{event.name}</h3><p>{t(`calendar.${event.key}`)}</p><p className="type-small event-date">{t('calendar.lastListed', { date })}</p></article>; })}</div></div></div><div className="shell calendar-link"><a href="https://akt.gov.al/en/event-category/national-festivals/" target="_blank" rel="noreferrer" className="text-link">{t('calendar.currentDates')}</a></div></section>;
}
