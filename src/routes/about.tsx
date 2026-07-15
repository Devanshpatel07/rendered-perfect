import { createFileRoute, Link } from "@tanstack/react-router";
import teamOnsite from "@/assets/team-onsite.jpg";
import craftTrowel from "@/assets/craft-trowel.jpg";
import projectMosman from "@/assets/project-mosman.jpg";
import { EyebrowHeading } from "@/components/eyebrow-heading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Everest Rendering Services" },
      { name: "description", content: "Family-run Australian rendering studio. Eighteen years, 1,200+ facades, in-house crews only." },
      { property: "og:title", content: "About — Everest Rendering" },
      { property: "og:description", content: "Family-run Australian rendering studio, eighteen years of craft." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: teamOnsite },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const team = [
  { name: "Deepak Adhikari", role: "Founder & Master Renderer", years: "22 yrs" },
  { name: "Sarah Whitmore", role: "Studio Director", years: "12 yrs" },
  { name: "Marco Bianchi", role: "Site Foreman, Melbourne", years: "15 yrs" },
  { name: "Jason Truong", role: "Site Foreman, Sydney", years: "11 yrs" },
];

const values = [
  { h: "Craft over speed", b: "We say no to projects that can't be done properly. Every time." },
  { h: "Own the outcome", b: "Ten-year workmanship guarantee. No fine print, no wriggle room." },
  { h: "Show the work", b: "Our schedule of mixes and products is documented and handed over on completion." },
  { h: "Respect the site", b: "Cleaner at handover than at start. Neighbours matter." },
];

function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-52 md:pb-32">
        <div className="container-page">
          <div className="eyebrow text-accent">About the studio</div>
          <h1 className="mt-6 font-display font-light text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] tracking-tightest text-ink max-w-4xl">
            A family rendering studio, working at the level of the architects we serve.
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Everest was founded in 2007 by Deepak Adhikari, after fifteen years on the trowels of Melbourne's
            most demanding architectural builders. What began as a two-person operation is now a thirty-strong
            studio with foremen in Melbourne and Sydney — still owner-operated, still on the tools.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <img src={teamOnsite} alt="Everest team working on scaffolding" className="w-full aspect-[21/10] object-cover" loading="lazy" />
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <div className="eyebrow text-accent">Mission</div>
            <p className="mt-6 font-display text-2xl tracking-tighter text-ink leading-snug">
              To bring gallery-grade craftsmanship to every facade we touch — residential or commercial, big or small.
            </p>
          </div>
          <div className="md:col-span-4">
            <div className="eyebrow text-accent">Vision</div>
            <p className="mt-6 font-display text-2xl tracking-tighter text-ink leading-snug">
              To be the studio Australian architects specify by name — the trusted last mile of every considered build.
            </p>
          </div>
          <div className="md:col-span-4">
            <div className="eyebrow text-accent">Experience</div>
            <p className="mt-6 font-display text-2xl tracking-tighter text-ink leading-snug">
              1,200+ completed facades. 120+ suburbs. Eighteen years of continuous operation without a single unpaid warranty claim.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="container-page">
          <EyebrowHeading eyebrow="Our values" title={<>What we won't compromise on.</>} />
          <div className="mt-16 grid md:grid-cols-2 gap-12">
            {values.map((v, i) => (
              <div key={v.h} className="border-t border-line pt-8">
                <div className="font-mono text-[11px] text-accent">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-4 font-display text-2xl tracking-tighter text-ink">{v.h}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-page grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-6">
            <img src={craftTrowel} alt="Craftsman applying render by hand" className="w-full aspect-[4/5] object-cover" loading="lazy" />
          </div>
          <div className="md:col-span-6">
            <EyebrowHeading eyebrow="Why clients trust us" title={<>Eighteen years, zero shortcuts.</>} />
            <ul className="mt-10 space-y-4 text-muted-foreground">
              {[
                "Licensed in VIC and NSW, fully insured",
                "White-carded, trained crew — no day labour",
                "Manufacturer-certified applicators (Rockcote, Dulux Acratex, Unitex)",
                "Documented QA on every project",
                "Ten-year workmanship guarantee, in writing",
                "Direct-line access to your foreman",
              ].map((x) => (
                <li key={x} className="flex gap-4">
                  <span className="text-accent mt-1">—</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-ink text-background">
        <div className="container-page">
          <EyebrowHeading eyebrow="Meet the team" title={<>People, not personas.</>} className="text-background [&_*]:!text-background [&_.text-accent]:!text-accent" />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((m) => (
              <div key={m.name} className="border-t border-white/15 pt-6">
                <div className="eyebrow text-accent">{m.years}</div>
                <h3 className="mt-4 font-display text-xl tracking-tighter">{m.name}</h3>
                <p className="mt-1 text-sm text-background/55">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 text-white overflow-hidden">
        <img src={projectMosman} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="container-page relative text-center max-w-2xl mx-auto">
          <h2 className="font-display font-light text-5xl md:text-6xl leading-[1] tracking-tightest">
            Work with the studio.
          </h2>
          <Link to="/contact" className="mt-10 inline-flex bg-accent text-accent-foreground px-8 py-5 text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-background hover:text-ink transition-colors">
            Start a project
          </Link>
        </div>
      </section>
    </>
  );
}
