import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const nav = [
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/before-after", label: "Before / After" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        transparent
          ? "bg-transparent text-white"
          : "bg-background/85 backdrop-blur-md text-foreground border-b border-line"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between gap-8">
        <Link to="/" className="flex items-center gap-3" aria-label="Everest Rendering Services — Home">
          <img src={logo.url} alt="Everest Rendering Services logo" className="h-11 w-auto" width={140} height={110} />
          <span className="hidden sm:flex items-baseline gap-2 font-display">
            <span className="text-2xl font-medium tracking-tightest">Everest</span>
            <span className={`eyebrow ${transparent ? "text-white/70" : ""}`}>Rendering</span>
          </span>
        </Link>


        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-[13px] font-medium tracking-wide link-underline transition-opacity ${
                transparent ? "text-white/85 hover:text-white" : "text-foreground/70 hover:text-foreground"
              }`}
              activeProps={{ className: "!text-accent" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+61452109330"
            className={`hidden md:inline text-[12px] tracking-wider ${transparent ? "text-white/80" : "text-muted-foreground"}`}
          >
            +61 452 109 330
          </a>
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] hover:bg-ink transition-colors"
          >
            Get Free Quote
          </Link>
          <button
            aria-label="Menu"
            className={`lg:hidden -mr-1 grid size-10 place-items-center border ${transparent ? "border-white/30" : "border-line"}`}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden>
              <path d="M0 1h18M0 6h18M0 11h18" stroke="currentColor" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background text-foreground border-t border-line">
          <nav className="container-page py-6 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="py-3 text-lg font-display tracking-tight border-b border-line last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 inline-flex justify-center bg-accent text-accent-foreground px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.18em]"
            >
              Get Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
