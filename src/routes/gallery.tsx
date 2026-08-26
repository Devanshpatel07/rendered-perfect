import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 md:pt-52 md:pb-20">
        <div className="container-page flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="eyebrow text-accent">Selected Works & Gallery</div>
            <h1 className="mt-5 sm:mt-6 font-display font-light text-[clamp(2.2rem,6vw,5.5rem)] leading-[0.98] tracking-tightest text-ink max-w-4xl">
              An archive of surfaces and shadows.
            </h1>
            <p className="mt-4 text-muted-foreground text-sm sm:text-base max-w-xl">
              For real-time job updates, on-site craftsmanship videos, and latest project photos, visit our Instagram feed.
            </p>
          </div>
          <a
            href="https://www.instagram.com/everest_renderingservices"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-ink text-background px-6 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-accent transition-colors self-start md:self-end shrink-0"
          >
            <span>Instagram</span>
            <span>↗</span>
          </a>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="container-page">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 md:gap-6 [column-fill:_balance]">
            {items.map((it, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="block w-full mb-3 sm:mb-4 md:mb-6 break-inside-avoid hover-image bg-surface-2 group active:scale-[0.99] transition-transform"
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
          className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="Close gallery lightbox"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white size-11 sm:size-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-xl z-10 active:scale-95 transition-transform"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
          
          <button
            aria-label="Previous photo"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-white size-11 sm:size-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-2xl z-10 active:scale-95 transition-transform"
            onClick={(e) => { e.stopPropagation(); setLightbox((v) => (v! - 1 + items.length) % items.length); }}
          >
            ‹
          </button>

          <div className="relative max-h-[85vh] max-w-[90vw] sm:max-w-[85vw] flex flex-col items-center">
            <img src={items[lightbox].src} alt={items[lightbox].alt} className="max-h-[80vh] max-w-[90vw] sm:max-w-[85vw] object-contain shadow-2xl" />
            <p className="mt-3 text-xs sm:text-sm text-white/80 text-center font-sans">{items[lightbox].alt}</p>
          </div>

          <button
            aria-label="Next photo"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white size-11 sm:size-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-2xl z-10 active:scale-95 transition-transform"
            onClick={(e) => { e.stopPropagation(); setLightbox((v) => (v! + 1) % items.length); }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}

