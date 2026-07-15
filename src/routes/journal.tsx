import { createFileRoute, Link } from "@tanstack/react-router";
import texture from "@/assets/texture.jpg";
import craftTrowel from "@/assets/craft-trowel.jpg";
import projectKew from "@/assets/project-kew.jpg";
import projectMosman from "@/assets/project-mosman.jpg";
import beforeImg from "@/assets/before.jpg";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Everest Rendering" },
      { name: "description", content: "Field notes on rendering, maintenance, and modern exterior inspiration from Everest Rendering Services." },
      { property: "og:title", content: "Journal — Everest Rendering" },
      { property: "og:description", content: "Field notes on rendering and modern exteriors." },
      { property: "og:url", content: "/journal" },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
  }),
  component: JournalPage,
});

const posts = [
  {
    slug: "acrylic-vs-cement",
    title: "Acrylic or cement? A practical guide for architects",
    date: "12 May 2026",
    read: "6 min",
    excerpt:
      "The two most-specified render systems in Australia serve very different jobs. Here's how we help clients choose the right one for the substrate, the climate and the intent.",
    tag: "Advice",
    img: texture,
  },
  {
    slug: "maintaining-rendered-facade",
    title: "Maintaining a rendered facade in the Australian climate",
    date: "28 April 2026",
    read: "5 min",
    excerpt:
      "A washdown every eighteen months, a re-seal every ten years, and knowing what to watch for. A short maintenance guide from the studio.",
    tag: "Maintenance",
    img: craftTrowel,
  },
  {
    slug: "modern-exterior-inspiration",
    title: "Six modern Australian exteriors that got the render right",
    date: "3 April 2026",
    read: "8 min",
    excerpt:
      "From Kennedy Nolan to Studio Bright — a photographic selection of facades where the render is doing quiet, essential work.",
    tag: "Inspiration",
    img: projectKew,
  },
  {
    slug: "when-repair-not-replace",
    title: "When to repair, not replace, a rendered facade",
    date: "18 March 2026",
    read: "4 min",
    excerpt:
      "Cracking doesn't always mean redoing the whole wall. A field guide to diagnosing and treating remedial rendering.",
    tag: "Repairs",
    img: beforeImg,
  },
  {
    slug: "specifying-foam-panels",
    title: "Specifying foam-panel systems: what architects should know",
    date: "5 March 2026",
    read: "7 min",
    excerpt:
      "EPS panel systems can transform thermal performance while opening up architectural detail. The trade-offs and details worth writing into your spec.",
    tag: "Advice",
    img: projectMosman,
  },
];

function JournalPage() {
  const [feature, ...rest] = posts;

  return (
    <>
      <section className="pt-40 pb-16 md:pt-52 md:pb-20">
        <div className="container-page">
          <div className="eyebrow text-accent">Journal</div>
          <h1 className="mt-6 font-display font-light text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] tracking-tightest text-ink max-w-4xl">
            Field notes from the studio.
          </h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <Link to="/journal" className="grid md:grid-cols-12 gap-10 border-b border-line pb-16 hover-image group">
            <div className="md:col-span-7 aspect-[4/3] overflow-hidden bg-surface-2">
              <img src={feature.img} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="md:col-span-5 flex flex-col justify-end">
              <div className="eyebrow text-accent">{feature.tag} · {feature.date}</div>
              <h2 className="mt-4 font-display text-3xl md:text-4xl tracking-tightest text-ink leading-tight">
                {feature.title}
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">{feature.excerpt}</p>
              <div className="mt-6 eyebrow text-ink">{feature.read} read →</div>
            </div>
          </Link>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-page grid md:grid-cols-2 gap-14">
          {rest.map((p) => (
            <Link key={p.slug} to="/journal" className="group hover-image">
              <div className="aspect-[16/10] overflow-hidden bg-surface-2">
                <img src={p.img} alt="" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="mt-5 eyebrow text-accent">{p.tag} · {p.date}</div>
              <h3 className="mt-3 font-display text-2xl tracking-tighter text-ink">{p.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.excerpt}</p>
              <div className="mt-4 eyebrow text-ink">{p.read} read →</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
