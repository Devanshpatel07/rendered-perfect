import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Everest Rendering" },
      { name: "description", content: "A photographic archive of rendered facades, textures and craftsmanship across Australia." },
      { property: "og:title", content: "Gallery — Everest Rendering" },
      { property: "og:description", content: "A photographic archive of rendered facades and craftsmanship." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const items = [
  { src: heroFacade, alt: "Warm-white rendered facade at dusk", tall: true },
  { src: projectKew, alt: "Two-storey rendered residence" },
  { src: projectBrighton, alt: "Curved textured wall", tall: true },
  { src: projectCommercial, alt: "Commercial rendered facade" },
  { src: craftTrowel, alt: "Hand-troweled render detail", tall: true },
  { src: texture, alt: "Macro of texture coating" },
  { src: projectMosman, alt: "Modern residence at night" },
  { src: teamOnsite, alt: "Crew rendering on scaffolding" },
  { src: afterImg, alt: "After: rendered home" },
  { src: beforeImg, alt: "Before: unrendered home", tall: true },
];

function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section className="pt-40 pb-16 md:pt-52 md:pb-20">
        <div className="container-page">
          <div className="eyebrow text-accent">Gallery</div>
          <h1 className="mt-6 font-display font-light text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] tracking-tightest text-ink max-w-4xl">
            An archive of surfaces and shadows.
          </h1>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-page">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 [column-fill:_balance]">
            {items.map((it, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="block w-full mb-4 md:mb-6 break-inside-avoid hover-image bg-surface-2 group"
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  className={`w-full object-cover ${it.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-ink/95 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button aria-label="Close" className="absolute top-6 right-6 text-white text-3xl" onClick={() => setLightbox(null)}>×</button>
          <button
            aria-label="Previous"
            className="absolute left-6 text-white text-3xl"
            onClick={(e) => { e.stopPropagation(); setLightbox((v) => (v! - 1 + items.length) % items.length); }}
          >‹</button>
          <img src={items[lightbox].src} alt={items[lightbox].alt} className="max-h-[85vh] max-w-[85vw] object-contain" />
          <button
            aria-label="Next"
            className="absolute right-6 text-white text-3xl"
            onClick={(e) => { e.stopPropagation(); setLightbox((v) => (v! + 1) % items.length); }}
          >›</button>
        </div>
      )}
    </>
  );
}
