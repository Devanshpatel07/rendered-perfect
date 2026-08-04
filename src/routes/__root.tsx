import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="eyebrow text-accent">404</div>
        <h1 className="mt-4 font-display text-5xl tracking-tightest text-ink">Page not found</h1>
        <p className="mt-4 text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center bg-ink text-background px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] hover:bg-accent transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl tracking-tightest text-ink">This page didn't load</h1>
        <p className="mt-3 text-muted-foreground">
          Something went wrong on our end. Try refreshing or head home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center bg-ink text-background px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em]"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center border border-line px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em]"
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
      { title: "Everest Rendering Services — Professional Rendering Contractors, QLD" },
      {
        name: "description",
        content:
          "QBCC-licensed rendering contractors. Acrylic, cement, texture and blue board finishes for homes and businesses across South East Queensland.",
      },
      { name: "author", content: "Everest Rendering Services Pty Ltd" },
      { property: "og:site_name", content: "Everest Rendering Services" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#faf7f2" },
      { property: "og:title", content: "Everest Rendering Services — Professional Rendering Contractors" },
      { name: "twitter:title", content: "Everest Rendering Services — Professional Rendering Contractors" },
      { property: "og:description", content: "QBCC-licensed rendering contractors delivering acrylic, cement, texture and blue board finishes across South East Queensland." },
      { name: "twitter:description", content: "QBCC-licensed rendering contractors delivering acrylic, cement, texture and blue board finishes across South East Queensland." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-AU">
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

function MobileStickyQuote() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname === "/contact") return null;
  return (
    <div className="lg:hidden fixed bottom-4 inset-x-4 z-40 pb-safe">
      <div className="flex gap-2">
        <Link
          to="/contact"
          className="flex-1 flex items-center justify-between bg-ink/95 backdrop-blur-md text-background px-5 py-3.5 shadow-lift border border-white/10 active:scale-[0.98] transition-transform"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">Get Free Quote</span>
          <span className="text-accent text-sm font-mono">→</span>
        </Link>
        <a
          href="tel:+61452109330"
          aria-label="Call Everest Rendering"
          className="flex items-center justify-center bg-accent text-accent-foreground px-4 py-3.5 shadow-lift active:scale-[0.98] transition-transform shrink-0"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main id="main" className="min-h-screen pb-20 lg:pb-0">
        <Outlet />
      </main>
      <SiteFooter />
      <MobileStickyQuote />
    </QueryClientProvider>
  );
}

