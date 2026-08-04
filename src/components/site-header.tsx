import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/everest-logo.svg";



const nav = [
  { to: "/", label: "Home" },
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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const transparent = isHome && !scrolled && !open;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0d1b2e] text-white border-b border-white/10">
      <div className="container-page flex h-20 items-center justify-between gap-4 sm:gap-8">
        <Link to="/" className="flex items-center" aria-label="Everest Rendering Services — Home">
          <img
            src={logo}
            alt="Everest Rendering Services logo"
            className="h-11 sm:h-13 w-auto object-contain"
            width={450}
            height={110}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[13px] font-medium tracking-wide text-white/80 hover:text-white link-underline transition-opacity"
              activeProps={{ className: "!text-accent" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:+61452109330"
            className="hidden md:inline-flex text-[12px] tracking-wider text-white/80 hover:text-white transition-colors"
          >
            +61 452 109 330
          </a>

          {/* Quick Call Icon for Mobile */}
          <a
            href="tel:+61452109330"
            aria-label="Call +61 452 109 330"
            className="md:hidden grid size-10 place-items-center border border-white/30 text-white transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </a>

          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] hover:bg-ink transition-colors"
          >
            Get Free Quote
          </Link>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            className="lg:hidden -mr-1 grid size-10 place-items-center border border-white/30 text-white transition-colors"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            {open ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden>
                <path d="M0 1h18M0 6h18M0 11h18" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-background/98 backdrop-blur-xl border-t border-line overflow-y-auto flex flex-col justify-between">
          <nav className="container-page py-6 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="py-4 text-xl font-display tracking-tight border-b border-line/60 flex items-center justify-between text-ink hover:text-accent transition-colors"
                activeProps={{ className: "!text-accent font-medium" }}
              >
                <span>{item.label}</span>
                <span className="text-xs text-accent font-mono">→</span>
              </Link>
            ))}
          </nav>

          <div className="container-page pb-12 pt-4 flex flex-col gap-3">
            <Link
              to="/contact"
              className="w-full inline-flex justify-center items-center gap-2 bg-accent text-accent-foreground px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] shadow-lift"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+61452109330"
              className="w-full inline-flex justify-center items-center gap-2 border border-line bg-surface py-3.5 text-xs text-ink font-medium tracking-wider"
            >
              Call +61 452 109 330
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

