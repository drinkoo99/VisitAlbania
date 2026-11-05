import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Photo } from '@/components/ui/photo';
export function Hero() { const { t } = useTranslation(); return <section className="hero"><div className="hero-photo scrim-even scrim-bottom"><Photo photo="theth" eager className="h-full"/></div><div className="shell hero-content"><div className="hero-copy anim-hero-panel"><h1 className="type-display">{t('hero.title')}</h1><p className="type-lead hero-lead">{t('hero.lead')}</p><div className="hero-ctas"><Button asChild><Link to="/" hash="regions">{t('cta.chooseRegion')}<ArrowRight/></Link></Button><Link to="/destinations" className="text-link-dark">{t('cta.allDestinations')}</Link></div></div><p className="hero-caption type-small text-stone">{t('hero.caption')}</p></div></section>; }
