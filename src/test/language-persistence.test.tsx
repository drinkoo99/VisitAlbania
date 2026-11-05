import { act, cleanup, render, waitFor } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { makeI18n } from '@/i18n';
import { SiteShell } from '@/components/layout/site-shell';

vi.mock('@tanstack/react-router', () => ({ useRouterState: () => '/' }));
vi.mock('@/components/layout/site-header', () => ({ SiteHeader: () => null }));
vi.mock('@/components/layout/site-footer', () => ({ SiteFooter: () => null }));

afterEach(() => { cleanup(); localStorage.clear(); });

describe('Language persistence', () => {
  it('keeps a new language after switching and restores it on a later visit', async () => {
    localStorage.setItem('lang', 'en');
    const instance = makeI18n();
    const change = vi.spyOn(instance, 'changeLanguage');
    const view = render(<I18nextProvider i18n={instance}><SiteShell><main /></SiteShell></I18nextProvider>);
    await act(async () => { await instance.changeLanguage('de'); });
    await waitFor(() => expect(localStorage.getItem('lang')).toBe('de'));
    expect(instance.language).toBe('de');
    expect(document.documentElement.lang).toBe('de');
    expect(change).toHaveBeenCalledTimes(1);
    view.unmount();
    const nextVisit = makeI18n();
    render(<I18nextProvider i18n={nextVisit}><SiteShell><main /></SiteShell></I18nextProvider>);
    await waitFor(() => expect(nextVisit.language).toBe('de'));
  });
  it('saves nothing in the browser until a language is chosen', async () => {
    render(<I18nextProvider i18n={makeI18n()}><SiteShell><main /></SiteShell></I18nextProvider>);
    await waitFor(() => expect(document.documentElement.lang).toBe('en'));
    expect(localStorage.length).toBe(0);
    expect(sessionStorage.length).toBe(0);
    expect(document.cookie).toBe('');
  });
});