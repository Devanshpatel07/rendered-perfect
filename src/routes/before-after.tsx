import { createFileRoute, Link } from "@tanstack/react-router";
import { BeforeAfter } from "@/components/before-after";

// Real villa facade photographs
import oldVillaImg from "@/assets/before.jpg";
import kewVillaImg from "@/assets/project-kew.jpg";
import mosmanVillaImg from "@/assets/project-mosman.jpg";
import brightonVillaImg from "@/assets/project-brighton.jpg";
import heroFacade from "@/assets/hero-facade.jpg";

export const Route = createFileRoute("/before-after")({
  head: () => ({
    meta: [
      { title: "Before & After Transformations — Everest Rendering Services" },
      { name: "description", content: "Interactive before-and-after villa facade transformations by QBCC-licensed Everest Rendering Services across Gold Coast and South East QLD." },
      { property: "og:title", content: "Before & After — Everest Rendering Services" },
      { property: "og:description", content: "Interactive slider comparisons of real Gold Coast rendering projects." },
      { property: "og:url", content: "/before-after" },
    ],
    links: [{ rel: "canonical", href: "/before-after" }],
  }),
  component: BeforeAfterPage,
});

interface TransformationPair {
  id: string;
  title: string;
  suburb: string;
  service: string;
  beforeLabel: string;
  afterLabel: string;
  description: string;
  before: string;
  after: string;
}

const pairs: TransformationPair[] = [
  {
    id: "broadbeach",
    title: "Broadbeach Waters Residence",
    suburb: "Broadbeach Waters, Gold Coast QLD",
    service: "Acrylic Render & Texture Coating",
    beforeLabel: "Original 1980s Red Brick Facade",
    afterLabel: "New Warm-White Architectural Render",
    description: "Transformation of an outdated exposed red brick home into a monolithic, modern architectural residence featuring custom window reveal detailing.",
    before: oldVillaImg,
    after: kewVillaImg,
  },
  {
    id: "surfers-paradise",
    title: "Surfers Paradise Coastal Residence",
    suburb: "Surfers Paradise, Gold Coast QLD",
    service: "Cement Render & Weatherproof Topcoat",
    beforeLabel: "Original Brickwork Substrate",
    afterLabel: "Modern Multi-Storey Rendered Elevation",
    description: "Restoration of a coastal residence suffering from sea-spray erosion, upgraded with salt-resistant polymer cement base coat and fine texture topcoat.",
    before: oldVillaImg,
    after: mosmanVillaImg,
  },
  {
    id: "burleigh-heads",
    title: "Burleigh Heads Hillside Estate",
    suburb: "Burleigh Heads, Gold Coast QLD",
    service: "EPS Foam Panel & Blue Board Render",
    beforeLabel: "Unrendered Masonry Facade",
    afterLabel: "Seamless Curved Rendered Residence",
    description: "Hillside residence extension and lightweight cladding transformed into a continuous thermal rendered system with integrated shadow lines.",
    before: oldVillaImg,
    after: brightonVillaImg,
  },
  {
    id: "hope-island",
    title: "Hope Island Waterfront Estate",
    suburb: "Hope Island, Gold Coast QLD",
    service: "Full Facade Transformation & Acrylic Finish",
    beforeLabel: "Original Aged Residence Elevation",
    afterLabel: "Bespoke Modern Luxury Waterfront Render",
    description: "Complete exterior modernization using high-durability acrylic render systems tailored for Gold Coast waterfront exposure.",
    before: oldVillaImg,
    after: heroFacade,
  },
];

function BeforeAfterPage() {
  return (
    <>
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 md:pt-52 md:pb-20">
        <div className="container-page">
          <div className="eyebrow text-accent">Real Villa Transformations</div>
          <h1 className="mt-5 sm:mt-6 font-display font-light text-[clamp(2.2rem,6vw,5.5rem)] leading-[0.98] tracking-tightest text-ink max-w-4xl">
            Drag the handle. See the difference.
          </h1>
          <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Every rendering project starts with an on-site assessment of the original structure and finishes with a stunning modern transformation. Slide through real Gold Coast villa transformations below.
          </p>
        </div>
      </section>

      <section className="pb-24 sm:pb-32 space-y-16 sm:space-y-24">
        {pairs.map((p) => (
          <div key={p.id} className="container-page">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 pb-4 border-b border-line">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs uppercase tracking-widest font-semibold text-accent">{p.service}</span>
                  <span className="text-muted-foreground/40">•</span>
                  <span className="text-xs text-muted-foreground">{p.suburb}</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-tighter text-ink">{p.title}</h2>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-md leading-relaxed md:text-right">
                {p.description}
              </p>
            </div>

            <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-1">
              <span className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-destructive/70 inline-block" />
                Before: {p.beforeLabel}
              </span>
              <span className="flex items-center gap-2 text-ink">
                After: {p.afterLabel}
                <span className="size-2 rounded-full bg-accent inline-block" />
              </span>
            </div>

            <BeforeAfter before={p.before} after={p.after} />
          </div>
        ))}
      </section>

      <section className="bg-ink text-background py-20 sm:py-28">
        <div className="container-page text-center max-w-3xl mx-auto space-y-6">
          <div className="eyebrow text-accent">QBCC License #15455473</div>
          <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tightest">
            Curious what your villa could become?
          </h2>
          <p className="text-background/70 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Get an itemised quote with a guaranteed 24-hour turnaround. We service Gold Coast, Brisbane, and South East Queensland.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex bg-accent text-accent-foreground px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-background hover:text-ink transition-colors">
              Book a Free Site Visit
            </Link>
            <a href="tel:+61452109330" className="inline-flex border border-background/30 text-background px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-background/10 transition-colors">
              Call +61 452 109 330
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
