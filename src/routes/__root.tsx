import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { I18nextProvider } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import { makeI18n } from '@/i18n';
import { SiteShell } from '@/components/layout/site-shell';
import { Button } from '@/components/ui/button';

import appCss from "../styles.css?url";

function NotFoundComponent() {
  const { t } = useTranslation();
  return (
    <SiteShell><main id="main-content" className="shell section-gap min-h-screen">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">{t('notFound.heading')}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {t('notFound.body')}
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t('a11y.home')}
          </Link>
        </div>
      </div>
    </main></SiteShell>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </Button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "VisitAlbania: an independent guide, from Theth to Ksamil" },
      { name: "description", content: "An independent guide to the mountains, stone towns, food and coast of Albania, in five languages." },
      { name: "author", content: "Drin Kozhani" },
      { property: "og:title", content: "VisitAlbania: an independent guide, from Theth to Ksamil" },
      { property: "og:description", content: "An independent guide to the mountains, stone towns, food and coast of Albania, in five languages." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "preload", href: "/fonts/epilogue-latin-900-normal.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
      { rel: "preload", href: "/fonts/epilogue-latin-400-normal.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [i18n] = useState(makeI18n);

  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      </I18nextProvider>
    </QueryClientProvider>
  );
}
