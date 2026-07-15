import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-background/80 mt-24">
      <div className="container-page py-20">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-baseline gap-2 font-display text-background">
              <span className="text-3xl tracking-tightest">Everest</span>
              <span className="eyebrow text-background/60">Rendering</span>
            </Link>
            <p className="mt-8 max-w-md text-background/60 leading-relaxed">
              Specialist rendering contractors for high-end residential and commercial architecture across
              Melbourne, Sydney and beyond. Licensed, insured, and committed to the craft.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
              <div>
                <div className="eyebrow text-background/50">Phone</div>
                <a href="tel:1300000000" className="mt-2 block text-background link-underline">
                  1300 000 000
                </a>
              </div>
              <div>
                <div className="eyebrow text-background/50">Email</div>
                <a href="mailto:hello@everestrendering.com.au" className="mt-2 block text-background link-underline">
                  hello@everestrendering.com.au
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-background/50">Services</div>
            <ul className="mt-6 space-y-3 text-background/75">
              <li><Link to="/services/$slug" params={{ slug: "acrylic-rendering" }} className="link-underline">Acrylic Rendering</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "cement-rendering" }} className="link-underline">Cement Rendering</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "texture-coating" }} className="link-underline">Texture Coating</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "commercial-rendering" }} className="link-underline">Commercial</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "render-repairs" }} className="link-underline">Render Repairs</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow text-background/50">Studio</div>
            <ul className="mt-6 space-y-3 text-background/75">
              <li><Link to="/about" className="link-underline">About</Link></li>
              <li><Link to="/projects" className="link-underline">Projects</Link></li>
              <li><Link to="/journal" className="link-underline">Journal</Link></li>
              <li><Link to="/contact" className="link-underline">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow text-background/50">Studios</div>
            <address className="mt-6 not-italic text-background/75 leading-relaxed">
              Melbourne · Sydney<br />
              Serving VIC / NSW / ACT
            </address>
            <div className="mt-6 eyebrow text-background/50">Hours</div>
            <p className="mt-2 text-background/75">Mon–Fri · 7am – 5pm</p>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-[11px] uppercase tracking-[0.18em] text-background/50">
          <span>© {new Date().getFullYear()} Everest Rendering Services Pty Ltd</span>
          <span>ABN 12 345 678 901 · VIC Lic 104922</span>
        </div>
      </div>
    </footer>
  );
}
