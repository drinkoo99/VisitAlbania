import { useContext, useEffect, type ReactNode } from 'react';
import { I18nContext, useTranslation } from 'react-i18next';
import { useRouterState } from '@tanstack/react-router';
import { isLocale } from '@/i18n';
import { bySlug, getName } from '@/data/destinations';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';
function LanguageSync() {
 const { t, i18n } = useTranslation(); const pathname = useRouterState({ select: s => s.location.pathname });
 const instance = useContext(I18nContext)?.i18n;
 useEffect(() => {
  if (!instance) return;
  // Save only a language the visitor chose: a first visit writes nothing to the browser.
  const save = (language: string) => { try { localStorage.setItem('lang', language); } catch { /* Storage may be blocked. */ } };
  instance.on('languageChanged', save);
  try { const saved = localStorage.getItem('lang'); if (isLocale(saved) && instance.language !== saved) void instance.changeLanguage(saved); } catch { /* Storage may be blocked. */ }
  return () => instance.off('languageChanged', save);
 }, [instance]);
 useEffect(() => {
  document.documentElement.lang = i18n.language;
  const slug = pathname.split('/')[2]; const dest = slug ? bySlug[slug] : undefined;
  const title = dest ? `${getName(dest, i18n.language)} · VisitAlbania` : pathname === '/' ? `${t('hero.title')} · VisitAlbania` : pathname === '/destinations' ? `${t('destinations.heading')} · VisitAlbania` : pathname === '/credits' ? `${t('credits.heading')} · VisitAlbania` : ['/privacy', '/terms', '/cookies'].includes(pathname) ? `${t(`legal.${pathname.slice(1)}`)} · VisitAlbania` : `${t('notFound.heading')} · VisitAlbania`;
  document.title = title;
 }, [i18n.language, pathname, t]);
 return null;
}
export function SiteShell({ children }: { children: ReactNode }) { return <><LanguageSync/><SiteHeader/>{children}<SiteFooter/></>; }
