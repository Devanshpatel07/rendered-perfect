import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { services, faqs } from "@/lib/site-data";
import heroFacade from "@/assets/hero-facade.jpg";
import craftTrowel from "@/assets/craft-trowel.jpg";
import texture from "@/assets/texture.jpg";
import projectKew from "@/assets/project-kew.jpg";
import projectMosman from "@/assets/project-mosman.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import { EyebrowHeading } from "@/components/eyebrow-heading";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found — Everest" }, { name: "robots", content: "noindex" }] };
    }
    const { service } = loaderData;
    return {
      meta: [
        { title: `${service.title} — Everest Rendering` },
        { name: "description", content: service.short },
        { property: "og:title", content: `${service.title} — Everest Rendering` },
        { property: "og:description", content: service.short },
        { property: "og:url", content: `/services/${params.slug}` },
        { property: "og:image", content: heroFacade },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="container-page pt-52 pb-32">
      <h1 className="font-display text-4xl tracking-tightest">Service not found.</h1>
      <Link to="/services" className="mt-6 inline-block eyebrow text-accent">All services →</Link>
    </div>
  ),
});

const gallery = [heroFacade, projectKew, projectMosman, projectCommercial, craftTrowel, texture];

function ServiceDetail() {
  const { service } = Route.useLoaderData();

  return (
    <>
      <section className="relative pt-40 pb-24 md:pt-52 md:pb-32">
        <div className="container-page grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <Link to="/services" className="eyebrow text-accent link-underline">← All services</Link>
            <div className="mt-8 font-mono text-sm text-muted-foreground">{service.index}</div>
            <h1 className="mt-4 font-display font-light text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] tracking-tightest text-ink">
              {service.title}
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">{service.short}</p>
          </div>
          <div className="md:col-span-5">
            <img src={heroFacade} alt={service.title} className="w-full aspect-[4/5] object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="container-page grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <EyebrowHeading eyebrow="Overview" title={<>What it is, and why.</>} />
          </div>
          <div className="md:col-span-7">
            <p className="text-lg text-foreground/85 leading-relaxed">{service.overview}</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <div className="eyebrow text-accent">Benefits</div>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {service.benefits.map((b: string) => (
                <li key={b} className="flex items-baseline gap-4 py-4">
                  <span className="text-accent font-mono text-xs">◆</span>
                  <span className="text-ink">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-6">
            <div className="eyebrow text-accent">Applications</div>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {service.applications.map((a: string) => (
                <li key={a} className="flex items-baseline gap-4 py-4">
                  <span className="text-accent font-mono text-xs">◇</span>
                  <span className="text-ink">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <EyebrowHeading eyebrow="Gallery" title={<>{service.title} in the field.</>} />
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((src, i) => (
              <div key={i} className="hover-image bg-surface-2 aspect-square">
                <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="container-page grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <EyebrowHeading eyebrow="How we work" title={<>Our process.</>} />
          </div>
          <div className="md:col-span-8">
            <ol className="space-y-6">
              {["Consultation", "Preparation", "Application", "Handover"].map((step, i) => (
                <li key={step} className="flex gap-6 border-t border-line pt-5">
                  <span className="font-mono text-accent text-xs">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-xl tracking-tighter text-ink">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <EyebrowHeading eyebrow="FAQs" title={<>Good to know.</>} />
          </div>
          <div className="md:col-span-8">
            {faqs.slice(0, 4).map((f) => (
              <details key={f.q} className="group border-t border-line py-6 last:border-b">
                <summary className="flex justify-between gap-6 cursor-pointer list-none">
                  <span className="font-display text-xl tracking-tighter text-ink">{f.q}</span>
                  <span className="font-mono text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-white py-24">
        <div className="container-page text-center max-w-2xl mx-auto">
          <h2 className="font-display font-light text-4xl md:text-5xl leading-tight tracking-tightest">
            Ready to specify {service.title.toLowerCase()}?
          </h2>
          <Link to="/contact" className="mt-8 inline-flex bg-accent text-accent-foreground px-8 py-5 text-[11px] font-semibold uppercase tracking-[0.2em]">
            Request a quote
          </Link>
        </div>
      </section>
    </>
  );
}
