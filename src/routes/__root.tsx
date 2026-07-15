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
import { reportLovableError } from "../lib/lovable-error-reporting";
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
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

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
      { title: "Everest Rendering — Premium Acrylic, Cement & Texture Rendering, Australia" },
      {
        name: "description",
        content:
          "Everest Rendering Services delivers premium acrylic, cement, texture and foam-panel rendering for luxury residential and commercial projects across Melbourne, Sydney and Australia.",
      },
      { name: "author", content: "Everest Rendering Services Pty Ltd" },
      { property: "og:site_name", content: "Everest Rendering Services" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#faf7f2" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
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
    <div className="lg:hidden fixed bottom-4 inset-x-4 z-40">
      <Link
        to="/contact"
        className="flex items-center justify-between w-full bg-ink text-background px-5 py-4 shadow-lift"
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">Get Free Quote</span>
        <span className="text-accent">→</span>
      </Link>
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main id="main" className="min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
      <MobileStickyQuote />
    </QueryClientProvider>
  );
}
