import * as Dropdown from '@radix-ui/react-dropdown-menu';
import { ChevronDown, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { locales, languageCodes, isLocale } from '@/i18n';
import 'flag-icons/css/flag-icons.min.css';
const flagCodes: Record<string, string> = { sq: 'al', en: 'gb', de: 'de', fr: 'fr', it: 'it' };
export function Flag({ locale }: { locale: string }) { return <span aria-hidden="true" className={`flag fi fi-${flagCodes[locale] ?? 'gb'}`} />; }
export function LanguageRows({ onSelect }: { onSelect?: () => void }) {
 const { t, i18n } = useTranslation();
 return <div className="language-rows">{locales.map(l => <Button key={l} variant="ghost" className={`language-row ${i18n.language === l ? 'is-current' : ''}`} onClick={() => { void i18n.changeLanguage(l); onSelect?.(); }}><Flag locale={l} /><span lang={l}>{t(`lang.${l}`)}</span><span className="ml-auto type-small">{languageCodes[l]}</span>{i18n.language === l && <Check size={18} />}</Button>)}</div>;
}
export function LanguageSelector() {
 const { t, i18n } = useTranslation(); const current = isLocale(i18n.language) ? i18n.language : 'en';
 return <Dropdown.Root><Dropdown.Trigger asChild><Button variant="ghost" className="language-trigger" aria-label={`${t('a11y.language')}: ${t(`lang.${current}`)}`}>{languageCodes[current]}<ChevronDown /></Button></Dropdown.Trigger><Dropdown.Portal><Dropdown.Content className="language-dropdown bg-stone shadow-float anim-drop" align="end" sideOffset={8}>{locales.map(l => <Dropdown.Item key={l} className={`language-row cursor-pointer ${l === current ? 'is-current' : ''}`} onSelect={() => { void i18n.changeLanguage(l); }}><Flag locale={l}/><span lang={l}>{t(`lang.${l}`)}</span><span className="ml-auto type-small">{languageCodes[l]}</span>{l === current && <Check size={18}/>}</Dropdown.Item>)}</Dropdown.Content></Dropdown.Portal></Dropdown.Root>;
}
