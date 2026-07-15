import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { projects, type ProjectCategory } from "@/lib/site-data";
import projectKew from "@/assets/project-kew.jpg";
import projectBrighton from "@/assets/project-brighton.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectMosman from "@/assets/project-mosman.jpg";
import beforeImg from "@/assets/before.jpg";
import texture from "@/assets/texture.jpg";

const covers: Record<string, string> = {
  kew: projectKew,
  brighton: projectBrighton,
  commercial: projectCommercial,
  mosman: projectMosman,
  before: beforeImg,
  texture,
};

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Everest Rendering" },
      { name: "description", content: "Selected works from Everest Rendering: residential, commercial, luxury homes, texture finishes and heritage repairs." },
      { property: "og:title", content: "Projects — Everest Rendering" },
      { property: "og:description", content: "Selected works from the archive." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsList,
});

const categories: (ProjectCategory | "All")[] = [
  "All",
  "Residential",
  "Commercial",
  "Luxury Homes",
  "Texture Finish",
  "Repairs",
];

function ProjectsList() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="pt-40 pb-16 md:pt-52 md:pb-20">
        <div className="container-page">
          <div className="eyebrow text-accent">Portfolio</div>
          <h1 className="mt-6 font-display font-light text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] tracking-tightest text-ink max-w-4xl">
            Selected works from the archive.
          </h1>
        </div>
      </section>

      <section className="border-y border-line sticky top-20 bg-background/85 backdrop-blur z-30">
        <div className="container-page py-4 flex gap-2 overflow-x-auto">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`shrink-0 px-4 py-2 text-[11px] uppercase tracking-[0.18em] font-semibold border transition-colors ${
                filter === c
                  ? "bg-ink text-background border-ink"
                  : "border-line text-muted-foreground hover:text-ink hover:border-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page">
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            {visible.map((p, i) => {
              // masonry-ish rhythm
              const wide = i % 3 === 0;
              return (
                <Link
                  key={p.slug}
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className={`group hover-image ${wide ? "col-span-12 md:col-span-7" : "col-span-12 md:col-span-5"} ${
                    i % 4 === 1 ? "md:mt-16" : ""
                  }`}
                >
                  <div className={`overflow-hidden bg-surface-2 ${wide ? "aspect-[4/3]" : "aspect-[4/5]"}`}>
                    <img src={covers[p.cover]} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="mt-5 flex justify-between items-baseline gap-4">
                    <h3 className="font-display text-xl md:text-2xl tracking-tighter text-ink">{p.title}</h3>
                    <span className="text-sm text-muted-foreground shrink-0">{p.suburb} · {p.year}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{p.service} · {p.category}</p>
                </Link>
              );
            })}
          </div>

          {visible.length === 0 && (
            <p className="text-center text-muted-foreground py-20">No projects in this category yet.</p>
          )}
        </div>
      </section>
    </>
  );
}
