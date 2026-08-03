import { Link } from "@tanstack/react-router";
import logo from "@/assets/everest-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-background/80 mt-24">
      <div className="container-page py-20">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3 font-display text-background">
              <img src={logo.url} alt="Everest Rendering Services logo" className="h-14 w-auto" width={140} height={110} loading="lazy" />
              <span className="flex items-baseline gap-2">
                <span className="text-3xl tracking-tightest">Everest</span>
                <span className="eyebrow text-background/60">Rendering</span>
              </span>
            </Link>

            <p className="mt-8 max-w-md text-background/60 leading-relaxed">
              QBCC-licensed rendering contractors based on the Gold Coast, delivering acrylic, cement,
              texture and blue board finishes for homes and businesses across South East Queensland.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
              <div>
                <div className="eyebrow text-background/50">Phone</div>
                <a href="tel:+61452109330" className="mt-2 block text-background link-underline">
                  +61 452 109 330
                </a>
              </div>
              <div>
                <div className="eyebrow text-background/50">Email</div>
                <a
                  href="mailto:contact@everestrenderingservices.com.au"
                  className="mt-2 block text-background link-underline break-all"
                >
                  contact@everestrenderingservices.com.au
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-background/50">Services</div>
            <ul className="mt-6 space-y-3 text-background/75">
              <li><Link to="/services/$slug" params={{ slug: "acrylic-rendering" }} className="link-underline">Acrylic Rendering</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "cement-rendering" }} className="link-underline">Cement Rendering</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "texture-coating" }} className="link-underline">Texture Finishes</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "blue-board-rendering" }} className="link-underline">Blue Board Rendering</Link></li>
              <li><Link to="/services" className="link-underline">All services</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow text-background/50">Studio</div>
            <ul className="mt-6 space-y-3 text-background/75">
              <li><Link to="/about" className="link-underline">About</Link></li>
              <li><Link to="/projects" className="link-underline">Projects</Link></li>
              <li><Link to="/gallery" className="link-underline">Gallery</Link></li>
              <li><Link to="/contact" className="link-underline">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow text-background/50">Head office</div>
            <address className="mt-6 not-italic text-background/75 leading-relaxed">
              Southport<br />
              QLD 4215, Australia
            </address>
            <div className="mt-6 eyebrow text-background/50">Follow</div>
            <div className="mt-3 flex gap-4 text-background/75 text-sm">
              <a href="https://www.facebook.com/Everestrendering" target="_blank" rel="noreferrer" className="link-underline">Facebook</a>
              <a href="https://www.instagram.com/everest_renderingservices" target="_blank" rel="noreferrer" className="link-underline">Instagram</a>
              <a href="https://www.linkedin.com/company/everest-rendering-services-pyt-ltd/" target="_blank" rel="noreferrer" className="link-underline">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-[11px] uppercase tracking-[0.18em] text-background/50">
          <span>© {new Date().getFullYear()} Everest Rendering Services Pty Ltd</span>
          <span>QBCC Licensed</span>
        </div>
      </div>
    </footer>
  );
}
