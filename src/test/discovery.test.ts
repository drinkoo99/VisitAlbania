import { describe, expect, it } from 'vitest';
import { destinations, bySlug, filterDestinations, getBody, getName, getSummary, isRegion, isType } from '@/data/destinations';
import { activities } from '@/data/activities';
import { regions } from '@/data/regions';
import { photos } from '@/data/photos';
import { photoAssets } from '@/data/photo-assets';
import { events } from '@/data/events';
import { locales, makeI18n } from '@/i18n';
import { formatDate, formatMonth, formatMonthYear } from '@/lib/format-date';

describe('VisitAlbania discovery rules', () => {
  it('contains the 30 core places and 11 additional places', () => {
    // Theth and Valbona national parks merged into the Alps of Albania National Park in 2022.
    expect(destinations.filter(d => !d.extra)).toHaveLength(30);
    expect(destinations.filter(d => d.extra)).toHaveLength(11);
    expect(new Set(destinations.map(d => d.slug)).size).toBe(41);
    expect(bySlug['theth-national-park']).toBeUndefined();
    expect(bySlug['valbona-valley-national-park']).toBeUndefined();
    expect(bySlug['alps-of-albania-national-park']).toBeDefined();
    expect(bySlug['korab-koritnik-nature-park']).toMatchObject({ name: 'Korab-Koritnik Nature Park' });
  });
  it('places Mirror Beach between Sarandë and Ksamil, not near Borsh', () => {
    const mirror = bySlug['mirror-beach'];
    expect(mirror?.body).toContain('between Sarandë and Ksamil');
    expect(mirror?.nearby).not.toContain('borsh');
    expect(bySlug['borsh']?.nearby).not.toContain('mirror-beach');
  });
  it('describes the Llogara road as it is since the 2024 tunnel', () => {
    expect(bySlug['llogara-pass']?.body).toContain('Llogara Tunnel');
    expect(bySlug['llogara-pass']?.body).toContain('Palasë');
    expect(bySlug['dhermi']?.body).not.toContain('first village');
  });
  it('groups Gjipe in the Riviera beaches', () => {
    expect(bySlug['gjipe']).toMatchObject({ name: 'Gjipe', region: 'riviera', type: 'beaches' });
    expect(filterDestinations(destinations, 'riviera', 'beaches').map(d => d.slug)).toEqual(['ksamil', 'gjipe', 'jale', 'mirror-beach', 'borsh', 'dhermi', 'vlore', 'himare']);
  });
  it('combines region and type filters and permits empty results', () => {
    expect(filterDestinations(destinations, 'south-inland', 'rivers').map(d => d.slug)).toEqual(['vjosa-river', 'osum-river']);
    expect(filterDestinations(destinations, 'centre', 'lakes')).toEqual([]);
    expect(filterDestinations(destinations)).toHaveLength(41);
  });
  it('rejects invalid region and type query values', () => {
    expect(isRegion('south-inland')).toBe(true);
    expect(isRegion('south')).toBe(false);
    expect(isType('rivers')).toBe(true);
    expect(isType('hotels')).toBe(false);
    expect(isType(['rivers'])).toBe(false);
  });
  it('translates every place into every language', () => {
    for (const d of destinations) {
      expect(getSummary(d, 'en').length, d.slug).toBeGreaterThan(0);
      expect(getBody(d, 'en').length, d.slug).toBeGreaterThan(0);
      for (const language of locales.filter(l => l !== 'en')) {
        expect(getSummary(d, language), `${language} ${d.slug}`).not.toBe(getSummary(d, 'en'));
        expect(getBody(d, language), `${language} ${d.slug}`).not.toBe(getBody(d, 'en'));
      }
    }
    expect(getName(bySlug['lake-ohrid']!, 'it')).toBe('Lago di Ocrida');
    expect(getName(bySlug['lake-ohrid']!, 'en')).toBe('Lake Ohrid');
  });
  it('has the same interface keys in all five languages', () => {
    const keys = (value: unknown, prefix = ''): string[] => value && typeof value === 'object' && !Array.isArray(value) ? Object.entries(value).flatMap(([k, v]) => keys(v, `${prefix}${k}.`)) : [prefix];
    const i18n = makeI18n();
    const english = keys(i18n.getResourceBundle('en', 'translation')).sort();
    for (const language of locales) expect(keys(i18n.getResourceBundle(language, 'translation')).sort(), language).toEqual(english);
  });
  it('translates every photo description', () => {
    const i18n = makeI18n();
    const english = i18n.getResourceBundle('en', 'translation').photos as Record<string, string>;
    expect(Object.keys(english).sort()).toEqual(Object.keys(photos).sort());
    for (const language of locales.filter(l => l !== 'en')) {
      const translated = i18n.getResourceBundle(language, 'translation').photos as Record<string, string>;
      for (const key of Object.keys(photos)) expect(translated[key], `${language} ${key}`).not.toBe(english[key]);
    }
  });
  it('resolves every nearby, region and activity destination', () => {
    const references = [...destinations.flatMap(d => d.nearby), ...regions.flatMap(r => r.places), ...activities.flatMap(a => a.rows.map(r => r.slug))];
    for (const slug of references) expect(bySlug[slug], slug).toBeDefined();
    expect(activities.find(a => a.key === 'kayaking')?.rows.map(r => r.slug)).toEqual(['vjosa-river', 'osum-river', 'drin-river', 'lake-prespa']);
  });
  it('has a credit record for every used photo', () => {
    expect(Object.keys(photos)).toHaveLength(40);
    for (const d of destinations) {
      expect(d.image, d.slug).not.toBeNull();
      if (d.image) expect(photos[d.image]).toMatchObject({ key: d.image });
    }
    for (const photo of Object.values(photos)) {
      expect(photo.author.length).toBeGreaterThan(0);
      expect(photo.sourcePage).toMatch(/^https:\/\/(commons\.wikimedia\.org\/wiki\/File:|unsplash\.com\/photos\/)/);
      expect(photo.licenceUrl).toMatch(/^https:\/\/(creativecommons\.org\/|unsplash\.com\/license$)/);
      expect(photo.licence).not.toMatch(/NC|ND/);
      expect(photoAssets[photo.key].url, photo.key).toMatch(/\.jpg/);
      expect(photoAssets[photo.key].srcSet, photo.key).toMatch(/640\.webp.*1280\.webp.*\.jpg/);
    }
  });
  it('preserves the three May 2024 event listings', () => {
    expect(events.filter(e => e.key !== 'gzo').map(e => e.lastListed)).toEqual([{ year: 2024, month: 5 }, { year: 2024, month: 5 }, { year: 2024, month: 5 }]);
  });
  it('dates the Shkodër listing to its last confirmed edition', () => {
    expect(events.find(e => e.key === 'gzo')).toMatchObject({ month: 12, place: 'Shkodër', lastListed: { year: 2023, month: 12 } });
  });
  it('writes dates in Albanian even where the browser has no Albanian data', () => {
    expect(formatDate('sq', '2026-11-05')).toBe('5 nëntor 2026');
    expect(formatMonth('sq', 5)).toBe('maj');
    expect(formatMonthYear('sq', 2023, 12)).toBe('dhjetor 2023');
    expect(formatDate('de', '2026-11-05')).toBe('5. November 2026');
  });
  it('initializes in English and switches resources synchronously', async () => {
    const i18n = makeI18n();
    expect(i18n.language).toBe('en');
    await i18n.changeLanguage('de');
    expect(i18n.language).toBe('de');
    expect(i18n.getResource('de', 'translation', 'nav.destinations')).toBeDefined();
  });
});