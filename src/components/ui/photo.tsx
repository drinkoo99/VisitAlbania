import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { photos, type PhotoKey } from '@/data/photos';
import { photoAssets } from '@/data/photo-assets';
import { cn } from '@/lib/utils';
export function ImagePlaceholder({ place, className, decorative = false }: { place: string; className?: string; decorative?: boolean }) {
 const { t } = useTranslation();
 return <div className={cn('photo-placeholder bg-surface text-muted-foreground flex items-center justify-center p-6 type-small', className)} role={decorative ? undefined : 'img'} aria-hidden={decorative || undefined} aria-label={decorative ? undefined : t('photo.needed', { place })}><span>{t('photo.needed', { place })}</span></div>;
}
export function Photo({ photo, place = '', className, eager = false, decorative = false, sizes }: { photo: PhotoKey | null; place?: string; className?: string; eager?: boolean; decorative?: boolean; sizes?: string }) {
 const { t } = useTranslation(); const [failedPhoto, setFailedPhoto] = useState<PhotoKey | null>(null);
 const entry = photo ? photos[photo] : null;
 if (!entry || failedPhoto === entry.key) return <ImagePlaceholder decorative={decorative} place={place || entry?.place || ''} {...(className ? { className } : {})} />;
 return <div className={cn('photo-box overflow-hidden', className)}><img src={photoAssets[entry.key].url} srcSet={photoAssets[entry.key].srcSet} sizes={sizes ?? (eager ? '100vw' : '(min-width: 1024px) 50vw, 100vw')} style={{ objectPosition: entry.focus }} width={entry.width} height={entry.height} alt={decorative ? '' : t(`photos.${entry.key}`)} aria-hidden={decorative || undefined} loading={eager ? 'eager' : 'lazy'} decoding="async" fetchPriority={eager ? 'high' : 'auto'} className={`photo-img focus-${entry.key} ${eager ? 'anim-hero-img' : ''}`} onError={() => setFailedPhoto(entry.key)} /></div>;
}
