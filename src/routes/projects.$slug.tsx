import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projects } from "@/lib/site-data";
import projectKew from "@/assets/project-kew.jpg";
import projectBrighton from "@/assets/project-brighton.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectMosman from "@/assets/project-mosman.jpg";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import texture from "@/assets/texture.jpg";
import craftTrowel from "@/assets/craft-trowel.jpg";
import { EyebrowHeading } from "@/components/eyebrow-heading";

const covers: Record<string, string> = {
  kew: projectKew,
  brighton: projectBrighton,
  commercial: projectCommercial,
  mosman: projectMosman,
  before: beforeImg,
  texture,
};

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);
    return { project, related };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }] };
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.title} — Everest Rendering` },
        { name: "description", content: project.summary },
        { property: "og:title", content: project.title },
        { property: "og:description", content: project.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${params.slug}` },
        { property: "og:image", content: covers[project.cover] },
      ],
      links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="container-page pt-52 pb-32">
      <h1 className="font-display text-4xl tracking-tightest">Project not found.</h1>
      <Link to="/projects" className="mt-6 inline-block eyebrow text-accent">All projects →</Link>
    </div>
  ),
  component: ProjectDetail,
});

const galleryImgs = [projectKew, projectMosman, projectCommercial, craftTrowel, afterImg, texture];

function ProjectDetail() {
  const { project, related } = Route.useLoaderData();
  const cover = covers[project.cover];

  return (
    <>
      <section className="pt-28 sm:pt-32">
        <div className="container-page">
          <Link to="/projects" className="eyebrow text-accent link-underline">← Portfolio</Link>
          <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-8 items-end">
            <div className="md:col-span-8">
              <div className="eyebrow text-muted-foreground">{project.category} · {project.suburb} · {project.year}</div>
              <h1 className="mt-3 sm:mt-4 font-display font-light text-[clamp(2.2rem,6vw,5rem)] leading-[0.98] tracking-tightest text-ink">
                {project.title}
              </h1>
            </div>
            <p className="md:col-span-4 text-sm sm:text-base text-muted-foreground leading-relaxed">{project.summary}</p>
          </div>
        </div>
      </section>

      <section className="pt-10 sm:pt-16">
        <div className="container-page">
          <img src={cover} alt={project.title} className="w-full aspect-[16/10] sm:aspect-[21/10] object-cover" />
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-page grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12">
          <aside className="md:col-span-4 md:sticky md:top-28 h-fit grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-6 sm:gap-8 border-b md:border-b-0 border-line pb-8 md:pb-0">
            <div>
              <div className="eyebrow text-accent">Service</div>
              <div className="mt-2 font-display text-lg sm:text-xl text-ink">{project.service}</div>
            </div>
            <div>
              <div className="eyebrow text-accent">Timeline</div>
              <div className="mt-2 font-display text-lg sm:text-xl text-ink">{project.timeline}</div>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-1">
              <div className="eyebrow text-accent">Materials</div>
              <ul className="mt-2 sm:mt-3 space-y-1 text-sm sm:text-base text-muted-foreground">
                {project.materials.map((m: string) => (<li key={m}>{m}</li>))}
              </ul>
            </div>
          </aside>
          <div className="md:col-span-8 space-y-10 sm:space-y-16">
            <div>
              <div className="eyebrow text-accent">The challenge</div>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed text-foreground/85">{project.challenge}</p>
            </div>
            <div>
              <div className="eyebrow text-accent">Our solution</div>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed text-foreground/85">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="container-page">
          <div className="grid grid-cols-12 gap-3 sm:gap-4">
            <div className="col-span-12 md:col-span-8 hover-image aspect-[16/10] bg-surface-2 overflow-hidden">
              <img src={galleryImgs[0]} alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="col-span-6 md:col-span-4 hover-image aspect-[4/5] bg-surface-2 overflow-hidden">
              <img src={galleryImgs[1]} alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="col-span-6 md:col-span-4 hover-image aspect-square bg-surface-2 overflow-hidden">
              <img src={galleryImgs[2]} alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="col-span-12 md:col-span-8 hover-image aspect-[16/10] bg-surface-2 overflow-hidden">
              <img src={galleryImgs[3]} alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-ink text-background">
        <div className="container-page max-w-3xl">
          <div className="eyebrow text-accent">Client testimonial</div>
          <blockquote className="mt-6 sm:mt-8 font-display font-light text-2xl sm:text-3xl md:text-4xl leading-snug tracking-tighter">
            &ldquo;{project.quote}&rdquo;
          </blockquote>
          <div className="mt-4 sm:mt-6 text-sm sm:text-base text-background/60">{project.quoteAuthor}</div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-page">
          <div className="flex items-end justify-between mb-8 sm:mb-12">
            <EyebrowHeading eyebrow="Related projects" title={<>You might also like.</>} />
            <Link to="/projects" className="eyebrow text-ink link-underline">All →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {related.map((r: typeof projects[number]) => (
              <Link key={r.slug} to="/projects/$slug" params={{ slug: r.slug }} className="hover-image group">
                <div className="aspect-[4/3] sm:aspect-[4/5] overflow-hidden bg-surface-2">
                  <img src={covers[r.cover]} alt={r.title} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <h3 className="mt-3 sm:mt-4 font-display text-lg sm:text-xl tracking-tighter text-ink">{r.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{r.suburb} · {r.year}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
