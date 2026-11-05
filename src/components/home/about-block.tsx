import { Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
export function AboutBlock() { const { t } = useTranslation(); return <section id="about" className="bg-surface section-gap"><div className="shell about-layout" data-reveal><h2 className="type-heading">{t('about.heading')}</h2><div className="measure"><p className="type-lead">{t('about.body')}</p><Link to="/credits" className="text-link inline-block mt-6">{t('about.credits')}</Link></div></div></section>; }
