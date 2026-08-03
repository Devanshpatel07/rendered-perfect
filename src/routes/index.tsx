import { createFileRoute, Link } from "@tanstack/react-router";
import heroFacade from "@/assets/hero-facade.jpg";
import projectKew from "@/assets/project-kew.jpg";
import projectBrighton from "@/assets/project-brighton.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectMosman from "@/assets/project-mosman.jpg";
import craftTrowel from "@/assets/craft-trowel.jpg";
import texture from "@/assets/texture.jpg";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import teamOnsite from "@/assets/team-onsite.jpg";
import { services, stats, testimonials, faqs, process } from "@/lib/site-data";
import { BeforeAfter } from "@/components/before-after";
import { EyebrowHeading } from "@/components/eyebrow-heading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Everest Rendering Services — Rendering Contractors, Gold Coast" },
      {
        name: "description",
        content:
          "QBCC-licensed rendering contractors in Southport, Gold Coast. Acrylic renders, cement rendering, texture finishes and blue board across South East Queensland.",
      },
      { property: "og:title", content: "Everest Rendering Services — Rendering Contractors, Gold Coast" },
      { property: "og:description", content: "QBCC-licensed rendering contractors delivering acrylic, cement, texture and blue board finishes across South East Queensland." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/" },

    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex flex-col justify-end text-white">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroFacade}
            alt="Contemporary Australian home facade in warm-white acrylic render at golden hour"
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/20 to-ink/70" />
        </div>

        <div className="container-page pb-16 pt-40 md:pb-24">
          <div className="max-w-4xl reveal">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 border border-white/25 bg-white/10 backdrop-blur-sm px-3 py-1.5 eyebrow text-white/85">
                <span className="size-1.5 rounded-full bg-accent" /> QBCC Licensed Company
              </span>
              <span className="eyebrow text-white/60">Southport · Gold Coast · QLD</span>
            </div>
            <h1 className="mt-6 font-display font-light text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] tracking-tightest">
              Professional and expert
              <br />
              rendering <em className="italic font-normal">contractors</em>.
            </h1>
            <div className="mt-10 flex flex-col md:flex-row gap-6 md:gap-12 md:items-end max-w-3xl">
              <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-md">
                Bringing architectural concepts to life with acrylic renders, cement rendering, texture
                finishes and blue board — across South East Queensland.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-accent text-accent-foreground px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-background hover:text-ink transition-colors"
                >
                  Get a Free Quote
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center border border-white/40 text-white px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-white/10 transition-colors"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-line bg-background">
        <div className="container-page py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={s.label} className="flex flex-col">
              <span className="eyebrow text-accent">{String(i + 1).padStart(2, "0")}</span>
              <span className="mt-3 font-display text-4xl md:text-5xl tracking-tightest text-ink">{s.value}</span>
              <span className="mt-1 text-sm text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS — editorial asymmetric */}
      <section className="py-24 md:py-32">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <EyebrowHeading eyebrow="Selected Works" title={<>Recent facades,<br />chosen from the archive.</>} />
            <Link to="/projects" className="eyebrow text-ink link-underline self-start md:self-end">
              View the portfolio →
            </Link>
          </div>

          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <Link
              to="/projects/$slug"
              params={{ slug: "the-kew-residence" }}
              className="col-span-12 md:col-span-7 group hover-image"
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface-2">
                <img src={projectKew} alt="The Kew Residence facade" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="mt-5 flex justify-between items-baseline">
                <h3 className="font-display text-xl md:text-2xl tracking-tighter text-ink">The Kew Residence</h3>
                <span className="text-sm text-muted-foreground">Kew · 2024</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Acrylic rendering · Luxury Home</p>
            </Link>

            <Link
              to="/projects/$slug"
              params={{ slug: "brighton-curves" }}
              className="col-span-12 md:col-span-5 md:mt-24 group hover-image"
            >
              <div className="aspect-[4/5] overflow-hidden bg-surface-2">
                <img src={projectBrighton} alt="Brighton curved wall texture" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="mt-5 flex justify-between items-baseline">
                <h3 className="font-display text-xl md:text-2xl tracking-tighter text-ink">Brighton Curves</h3>
                <span className="text-sm text-muted-foreground">Brighton · 2023</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Texture coating · Detail Study</p>
            </Link>

            <Link
              to="/projects/$slug"
              params={{ slug: "st-kilda-workspace" }}
              className="col-span-12 md:col-span-5 group hover-image"
            >
              <div className="aspect-[4/5] overflow-hidden bg-surface-2">
                <img src={projectCommercial} alt="St Kilda commercial facade" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="mt-5 flex justify-between items-baseline">
                <h3 className="font-display text-xl md:text-2xl tracking-tighter text-ink">St Kilda Workspace</h3>
                <span className="text-sm text-muted-foreground">St Kilda · 2024</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Cement render · Commercial</p>
            </Link>

            <Link
              to="/projects/$slug"
              params={{ slug: "the-mosman-residence" }}
              className="col-span-12 md:col-span-7 md:mt-24 group hover-image"
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface-2">
                <img src={projectMosman} alt="Mosman residence at dusk" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="mt-5 flex justify-between items-baseline">
                <h3 className="font-display text-xl md:text-2xl tracking-tighter text-ink">The Mosman Residence</h3>
                <span className="text-sm text-muted-foreground">Mosman · 2023</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Foam panel · Luxury Home</p>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES — dark, editorial grid */}
      <section className="bg-ink text-background py-24 md:py-32">
        <div className="container-page">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-20">
            <div className="md:col-span-6">
              <div className="eyebrow text-accent">Capabilities</div>
              <h2 className="mt-5 font-display font-light text-4xl md:text-6xl leading-[1.02] tracking-tightest">
                Eight disciplines,<br />one standard.
              </h2>
            </div>
            <p className="md:col-span-5 md:col-start-8 text-background/60 text-lg leading-relaxed self-end">
              From heritage cement work to modern foam-panel systems, we hold every stage of the render process
              in-house — nothing sub-contracted, nothing rushed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="bg-ink p-8 min-h-[220px] flex flex-col justify-between hover:bg-white/5 transition-colors group"
              >
                <div>
                  <div className="font-mono text-[11px] text-accent">{s.index}.</div>
                  <h3 className="mt-6 font-display text-2xl tracking-tighter">{s.title}</h3>
                  <p className="mt-3 text-sm text-background/55 leading-relaxed">{s.short}</p>
                </div>
                <div className="mt-6 eyebrow text-background/40 group-hover:text-accent transition-colors">Read →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US — split with craft image */}
      <section className="py-24 md:py-32">
        <div className="container-page grid md:grid-cols-12 gap-14 items-center">
          <div className="md:col-span-6 relative">
            <img src={craftTrowel} alt="Rendering by hand with a steel trowel" className="w-full aspect-[4/5] object-cover" loading="lazy" />
            <div className="hidden md:block absolute -bottom-8 -right-8 bg-accent text-accent-foreground p-8 max-w-[220px]">
              <div className="font-display text-3xl tracking-tightest">QBCC</div>
              <div className="eyebrow text-accent-foreground/80 mt-2">Licensed & insured company</div>
            </div>
          </div>
          <div className="md:col-span-6">
            <EyebrowHeading eyebrow="Why choose us" title={<>Reasons people keep choosing Everest.</>} />
            <div className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-8">
              {[
                {
                  h: "Quality material",
                  b: "Only premium-grade materials, selected for superior quality and endurance — striking finishes that last.",
                },
                {
                  h: "Trained workers",
                  b: "Highly skilled professionals with continuous training in current rendering techniques and standards.",
                },
                {
                  h: "Time availability",
                  b: "Flexible, convenient booking times so our work aligns with your schedule and build programme.",
                },
                {
                  h: "Quick response",
                  b: "Prompt, proactive customer service with swift answers and efficient solutions to any query.",
                },
              ].map((f, i) => (
                <div key={f.h} className="border-t border-line pt-6">
                  <div className="font-mono text-[11px] text-accent">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-3 font-display text-xl tracking-tighter text-ink">{f.h}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{f.b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* PROCESS RIBBON */}
      <section className="bg-surface py-24 md:py-28">
        <div className="container-page">
          <EyebrowHeading eyebrow="Our process" title={<>From consultation to sign-off.</>} />
          <div className="mt-16 grid md:grid-cols-5 gap-10">
            {process.map((p) => (
              <div key={p.n}>
                <div className="font-display text-6xl text-accent/25 tracking-tightest">{p.n}</div>
                <h3 className="mt-3 font-display text-lg tracking-tighter text-ink">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="py-24 md:py-32">
        <div className="container-page grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4">
            <EyebrowHeading eyebrow="Transformation" title={<>Beyond cosmetic.</>} lede="Rendering does more than modernise. It adds thermal mass, weather protection and enduring market value." />
            <Link to="/before-after" className="mt-8 inline-block eyebrow text-ink link-underline">
              See the archive →
            </Link>
          </div>
          <div className="md:col-span-8">
            <BeforeAfter before={beforeImg} after={afterImg} />
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-ink text-background py-24 md:py-32">
        <div className="container-page grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <img src={teamOnsite} alt="Everest crew rendering a facade on scaffolding" className="w-full aspect-[4/5] object-cover grayscale" loading="lazy" />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <div className="eyebrow text-accent">Trusted by</div>
            <div className="mt-10 space-y-16">
              {testimonials.map((t) => (
                <figure key={t.author} className="border-t border-white/15 pt-8">
                  <blockquote className="font-display text-2xl md:text-3xl leading-snug tracking-tighter text-background">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 text-sm text-background/60">
                    {t.author} · <span className="text-background/40">{t.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="container-page grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <EyebrowHeading eyebrow="Common questions" title={<>Answers, before you ask.</>} />
          </div>
          <div className="md:col-span-8">
            <div>
              {faqs.map((f) => (
                <details key={f.q} className="group border-t border-line py-6 last:border-b">
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                    <span className="font-display text-xl tracking-tighter text-ink">{f.q}</span>
                    <span className="font-mono text-accent text-lg leading-none mt-1 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-32 md:py-40 text-white overflow-hidden">
        <img src={texture} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="container-page relative text-center max-w-3xl mx-auto">
          <div className="eyebrow text-accent">Start your project</div>
          <h2 className="mt-6 font-display font-light text-5xl md:text-7xl leading-[1] tracking-tightest">
            Let's discuss <em className="italic font-normal">your</em> facade.
          </h2>
          <p className="mt-8 text-lg text-white/75 max-w-xl mx-auto">
            Book a site visit and receive a written, itemised quote within 48 hours.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/contact" className="bg-accent text-accent-foreground px-8 py-5 text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-background hover:text-ink transition-colors">
              Request a free quote
            </Link>
            <a href="tel:+61452109330" className="border border-white/40 px-8 py-5 text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-white/10 transition-colors">
              Call +61 452 109 330

            </a>
          </div>
        </div>
      </section>
    </>
  );
}
