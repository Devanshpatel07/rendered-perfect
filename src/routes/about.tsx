import { createFileRoute, Link } from "@tanstack/react-router";
import teamOnsite from "@/assets/team-onsite.jpg";
import craftTrowel from "@/assets/craft-trowel.jpg";
import projectMosman from "@/assets/project-mosman.jpg";
import logo from "@/assets/everest-logo.svg";
import logoNavy from "@/assets/everest-logo-navy.svg";
import { EyebrowHeading } from "@/components/eyebrow-heading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Everest Rendering Services" },
      { name: "description", content: "QBCC-licensed rendering contractors based on the Gold Coast. Specialists in acrylic, cement, texture and blue board finishes across South East Queensland." },
      { property: "og:title", content: "About — Everest Rendering Services" },
      { property: "og:description", content: "QBCC-licensed rendering contractors based on the Gold Coast, Queensland." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: teamOnsite },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const highlights = [
  { h: "QBCC licensed", b: "Fully licensed and insured to operate as rendering contractors in Queensland." },
  { h: "Premium materials", b: "Only premium-grade acrylic, cement and texture systems selected for Australian conditions." },
  { h: "Trained applicators", b: "Ongoing training keeps our team across current techniques and manufacturer standards." },
  { h: "Flexible scheduling", b: "We work around your build programme — with prompt communication from first call to handover." },
];

const values = [
  { h: "Craft over speed", b: "We take the time each finish needs to be done properly. Every surface, every corner." },
  { h: "Clear communication", b: "Prompt replies, honest timelines, and one direct point of contact throughout your job." },
  { h: "Respect the site", b: "We leave the site cleaner than we found it — your home, your neighbours, your builders." },
  { h: "Stand behind the work", b: "If something isn't right, we come back and fix it. That is the promise." },
];

function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 md:pt-48 md:pb-24">
        <div className="container-page flex flex-col md:flex-row md:items-center justify-between gap-12">
          <div className="max-w-3xl">
            <div className="eyebrow text-accent">About the company</div>
            <h1 className="mt-5 sm:mt-6 font-display font-light text-[clamp(2.2rem,6vw,5.5rem)] leading-[0.98] tracking-tightest text-ink">
              Professional rendering contractors, bringing architectural concepts to life.
            </h1>
            <p className="mt-6 sm:mt-10 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              At Everest Rendering Services, we specialise in acrylic-based renders, cement rendering,
              texture finishes and blue board texture finishes. Every project — from a single feature wall
              to a full facade — is executed with the highest level of craftsmanship and attention to detail.
            </p>
          </div>
          <div className="hidden lg:flex shrink-0 p-8 bg-[#0d1b2e] rounded-xl shadow-2xl">
            <img src={logo} alt="Everest Rendering Services Official Logo" className="h-24 w-auto object-contain" width={460} height={110} />
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="container-page">
          <img src={teamOnsite} alt="Everest team working on scaffolding" className="w-full aspect-[16/10] sm:aspect-[21/10] object-cover" loading="lazy" />
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="container-page grid md:grid-cols-12 gap-8 sm:gap-16">
          <div className="md:col-span-4">
            <div className="eyebrow text-accent">Mission</div>
            <p className="mt-4 sm:mt-6 font-display text-xl sm:text-2xl tracking-tighter text-ink leading-snug">
              To deliver durable, aesthetically striking rendered finishes tailored to every client's brief.
            </p>
          </div>
          <div className="md:col-span-4">
            <div className="eyebrow text-accent">Approach</div>
            <p className="mt-4 sm:mt-6 font-display text-xl sm:text-2xl tracking-tighter text-ink leading-snug">
              A skilled, trained team applying premium-grade materials with the care every home deserves.
            </p>
          </div>
          <div className="md:col-span-4">
            <div className="eyebrow text-accent">Coverage</div>
            <p className="mt-4 sm:mt-6 font-display text-xl sm:text-2xl tracking-tighter text-ink leading-snug">
              Based in Southport on the Gold Coast, serving projects across South East Queensland.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-surface">
        <div className="container-page">
          <EyebrowHeading eyebrow="Our values" title={<>What we won't compromise on.</>} />
          <div className="mt-10 sm:mt-16 grid md:grid-cols-2 gap-8 sm:gap-12">
            {values.map((v, i) => (
              <div key={v.h} className="border-t border-line pt-6 sm:pt-8">
                <div className="font-mono text-[11px] text-accent">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-3 sm:mt-4 font-display text-xl sm:text-2xl tracking-tighter text-ink">{v.h}</h3>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 md:py-32">
        <div className="container-page grid md:grid-cols-12 gap-10 sm:gap-16 items-center">
          <div className="md:col-span-6">
            <img src={craftTrowel} alt="Craftsman applying render by hand" className="w-full aspect-[4/5] object-cover" loading="lazy" />
          </div>
          <div className="md:col-span-6">
            <EyebrowHeading eyebrow="Why choose us" title={<>The reasons people choose Everest.</>} />
            <ul className="mt-10 space-y-4 text-muted-foreground">
              {[
                "QBCC-licensed rendering contractors (License No. 15455473)",
                "Registered company (ABN: 98 676 120 166 · ACN: 676 120 166)",
                "Based on the Gold Coast (Southport HQ) serving all SE QLD",
                "Fast 24-hour turnaround on free estimates & itemised quotes",
                "Premium-grade materials selected for Australian weather conditions",
                "Skilled, continuously trained applicators across all 8 render disciplines",
                "Flexible booking to suit your build programme",
                "Direct communication from first call through to handover",
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
          <EyebrowHeading eyebrow="What sets us apart" title={<>Built on four simple commitments.</>} className="text-background [&_*]:!text-background [&_.text-accent]:!text-accent" />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((m, i) => (
              <div key={m.h} className="border-t border-white/15 pt-6">
                <div className="eyebrow text-accent">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-4 font-display text-xl tracking-tighter">{m.h}</h3>
                <p className="mt-2 text-sm text-background/60 leading-relaxed">{m.b}</p>
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
