import { createFileRoute, Link } from "@tanstack/react-router";
import { BeforeAfter } from "@/components/before-after";
import { EyebrowHeading } from "@/components/eyebrow-heading";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import projectKew from "@/assets/project-kew.jpg";
import projectMosman from "@/assets/project-mosman.jpg";

export const Route = createFileRoute("/before-after")({
  head: () => ({
    meta: [
      { title: "Before & After — Everest Rendering" },
      { name: "description", content: "Interactive before-and-after comparisons of Australian homes transformed by rendering." },
      { property: "og:title", content: "Before & After — Everest Rendering" },
      { property: "og:description", content: "Rendered facade transformations, side by side." },
      { property: "og:url", content: "/before-after" },
    ],
    links: [{ rel: "canonical", href: "/before-after" }],
  }),
  component: BeforeAfterPage,
});

const pairs = [
  { title: "Hawthorn Heritage", suburb: "Hawthorn, VIC", before: beforeImg, after: afterImg },
  { title: "Kew Renovation", suburb: "Kew, VIC", before: beforeImg, after: projectKew },
  { title: "Mosman Uplift", suburb: "Mosman, NSW", before: beforeImg, after: projectMosman },
];

function BeforeAfterPage() {
  return (
    <>
      <section className="pt-40 pb-16 md:pt-52 md:pb-20">
        <div className="container-page">
          <div className="eyebrow text-accent">Before / After</div>
          <h1 className="mt-6 font-display font-light text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] tracking-tightest text-ink max-w-4xl">
            Drag the handle. See the difference.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Every render project starts with an assessment and ends with a transformation. Slide through a
            selection of recent facades — from tired brick to considered modernism.
          </p>
        </div>
      </section>

      <section className="pb-32 space-y-24">
        {pairs.map((p) => (
          <div key={p.title} className="container-page">
            <div className="flex justify-between items-baseline mb-6">
              <h2 className="font-display text-2xl md:text-3xl tracking-tighter text-ink">{p.title}</h2>
              <span className="text-sm text-muted-foreground">{p.suburb}</span>
            </div>
            <BeforeAfter before={p.before} after={p.after} />
          </div>
        ))}
      </section>

      <section className="bg-ink text-background py-24">
        <div className="container-page text-center max-w-2xl mx-auto">
          <h2 className="font-display font-light text-4xl md:text-5xl leading-tight tracking-tightest">
            Curious what your home could become?
          </h2>
          <Link to="/contact" className="mt-8 inline-flex bg-accent text-accent-foreground px-8 py-5 text-[11px] font-semibold uppercase tracking-[0.2em]">
            Book a site visit
          </Link>
        </div>
      </section>
    </>
  );
}
