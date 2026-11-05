import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { locales, languageCodes } from '@/i18n';
import { site } from '@/data/site';
import { HomeLink } from './site-header';
export function SiteFooter() {
 const { t, i18n } = useTranslation();
 return <footer className="site-footer bg-olive text-stone on-dark"><div className="shell"><div className="footer-upper"><div><h2 className="type-heading footer-invitation">{t('footer.invitation')}</h2><Button asChild variant="onDark" className="mt-10 footer-cta"><HomeLink hash="regions">{t('cta.chooseRegion')}<ArrowRight/></HomeLink></Button></div><div><nav aria-label={t('a11y.footerNav')} className="footer-nav"><Link to="/destinations">{t('nav.destinations')}</Link><HomeLink hash="things-to-do">{t('nav.thingsToDo')}</HomeLink><HomeLink hash="food-culture">{t('nav.foodCulture')}</HomeLink><HomeLink hash="calendar">{t('nav.events')}</HomeLink><HomeLink hash="about">{t('nav.about')}</HomeLink><Link to="/credits">{t('nav.credits')}</Link>{site.contactEmail && <a href={`mailto:${site.contactEmail}`}>{t('nav.correction')}</a>}</nav><div className="footer-languages" aria-label={t('a11y.footerLanguages')}>{locales.map(l => <Button key={l} variant="ghost" size="sm" title={t(`lang.${l}`)} lang={l} aria-pressed={i18n.language === l} className={i18n.language === l ? 'underline underline-offset-8' : ''} onClick={() => { void i18n.changeLanguage(l); }}>{languageCodes[l]}</Button>)}</div></div></div><div className="footer-meta type-small"><span>{t('footer.copyright')}</span><nav className="flex flex-wrap gap-6"><Link to="/privacy">{t('legal.privacy')}</Link><Link to="/terms">{t('legal.terms')}</Link><Link to="/cookies">{t('legal.cookies')}</Link></nav></div></div><div className="footer-name" aria-hidden="true">Shqipëria</div></footer>;
}
