import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/lib/site-data";
import { EyebrowHeading } from "@/components/eyebrow-heading";
import texture from "@/assets/texture.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Rendering Services — Everest Rendering" },
      { name: "description", content: "Acrylic, cement, texture, blue-board, foam-panel, commercial, residential and repairs — eight disciplines, one studio." },
      { property: "og:title", content: "Rendering Services — Everest" },
      { property: "og:description", content: "Eight rendering disciplines, one studio." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesList,
});

function ServicesList() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-52 md:pb-24">
        <div className="container-page max-w-5xl">
          <div className="eyebrow text-accent">Services</div>
          <h1 className="mt-6 font-display font-light text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] tracking-tightest text-ink">
            Eight disciplines under one roof.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Every render system, applied by the same people who trained on the last one. Pick a discipline to see
            benefits, applications, and the projects it built.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-page">
          <div className="border-t border-line">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group grid md:grid-cols-12 items-baseline gap-6 py-10 border-b border-line hover:bg-surface/60 transition-colors -mx-2 px-2"
              >
                <div className="md:col-span-1 font-mono text-[11px] text-accent">{s.index}</div>
                <div className="md:col-span-4">
                  <h2 className="font-display text-3xl md:text-4xl tracking-tightest text-ink group-hover:text-accent transition-colors">
                    {s.title}
                  </h2>
                </div>
                <p className="md:col-span-6 text-muted-foreground leading-relaxed">{s.short}</p>
                <span className="md:col-span-1 justify-self-end eyebrow text-ink group-hover:text-accent transition-colors">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 text-white overflow-hidden">
        <img src={texture} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="container-page relative text-center max-w-2xl mx-auto">
          <h2 className="font-display font-light text-4xl md:text-5xl leading-[1] tracking-tightest">
            Not sure which system suits your build?
          </h2>
          <p className="mt-6 text-white/70">Send plans through and we'll recommend the right approach.</p>
          <Link to="/contact" className="mt-8 inline-flex bg-accent text-accent-foreground px-8 py-5 text-[11px] font-semibold uppercase tracking-[0.2em]">
            Request a consultation
          </Link>
        </div>
      </section>
    </>
  );
}
