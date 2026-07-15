import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Everest Rendering" },
      { name: "description", content: "Request a free quote or speak with the Everest Rendering studio. Melbourne and Sydney offices." },
      { property: "og:title", content: "Contact — Everest Rendering" },
      { property: "og:description", content: "Book a site visit or request a quote." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(200),
  phone: z.string().trim().max(40).optional(),
  suburb: z.string().trim().max(100).optional(),
  service: z.string().trim().max(80).optional(),
  message: z.string().trim().min(10, "A little more detail helps").max(2000),
});

type FormValues = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormValues, string>>;

function ContactPage() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Errors = {};
      for (const issue of parsed.error.issues) {
        errs[issue.path[0] as keyof FormValues] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  }

  return (
    <>
      <section className="pt-40 pb-16 md:pt-52 md:pb-20">
        <div className="container-page">
          <div className="eyebrow text-accent">Contact</div>
          <h1 className="mt-6 font-display font-light text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] tracking-tightest text-ink max-w-4xl">
            Tell us about your project.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Written, itemised quotes within 48 hours. Site visits by appointment.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-page grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5 space-y-10">
            <div>
              <div className="eyebrow text-accent">Melbourne studio</div>
              <address className="mt-4 not-italic text-lg text-ink font-display tracking-tighter leading-snug">
                14 Cremorne Street<br />
                Cremorne VIC 3121
              </address>
            </div>
            <div>
              <div className="eyebrow text-accent">Sydney studio</div>
              <address className="mt-4 not-italic text-lg text-ink font-display tracking-tighter leading-snug">
                6 Regent Street<br />
                Chippendale NSW 2008
              </address>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="eyebrow text-accent">Phone</div>
                <a href="tel:1300000000" className="mt-3 block font-display text-xl tracking-tighter text-ink link-underline">1300 000 000</a>
              </div>
              <div>
                <div className="eyebrow text-accent">Email</div>
                <a href="mailto:hello@everestrendering.com.au" className="mt-3 block font-display text-lg tracking-tighter text-ink link-underline break-all">hello@everestrendering.com.au</a>
              </div>
            </div>
            <div>
              <div className="eyebrow text-accent">Hours</div>
              <p className="mt-3 text-muted-foreground">Monday – Friday · 7am – 5pm<br />Site visits by appointment</p>
            </div>
          </div>

          <div className="md:col-span-7">
            {sent ? (
              <div className="border border-line p-10 bg-surface">
                <div className="eyebrow text-accent">Message received</div>
                <h2 className="mt-4 font-display text-3xl tracking-tighter text-ink">Thank you — we'll be in touch within one business day.</h2>
                <p className="mt-4 text-muted-foreground">A member of the Everest studio will respond by email or phone. For urgent enquiries call <a href="tel:1300000000" className="text-ink link-underline">1300 000 000</a>.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid grid-cols-2 gap-6" noValidate>
                <Field label="Full name" name="name" error={errors.name} required className="col-span-2 md:col-span-1" />
                <Field label="Email" name="email" type="email" error={errors.email} required className="col-span-2 md:col-span-1" />
                <Field label="Phone" name="phone" type="tel" error={errors.phone} className="col-span-2 md:col-span-1" />
                <Field label="Suburb" name="suburb" error={errors.suburb} className="col-span-2 md:col-span-1" />
                <div className="col-span-2">
                  <label className="eyebrow text-muted-foreground block mb-2" htmlFor="service">Service of interest</label>
                  <select id="service" name="service" className="w-full bg-transparent border-b border-line py-3 focus:outline-none focus:border-accent text-ink">
                    <option value="">Select…</option>
                    <option>Acrylic Rendering</option>
                    <option>Cement Rendering</option>
                    <option>Texture Coating</option>
                    <option>Blue Board Rendering</option>
                    <option>Foam Panel Rendering</option>
                    <option>Commercial</option>
                    <option>Residential</option>
                    <option>Render Repairs</option>
                    <option>Not sure — please advise</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="eyebrow text-muted-foreground block mb-2" htmlFor="message">About your project</label>
                  <textarea id="message" name="message" rows={5} required maxLength={2000}
                    className="w-full bg-transparent border-b border-line py-3 focus:outline-none focus:border-accent text-ink resize-none"
                    placeholder="Address, storey count, timeline, anything specific about the finish…"
                  />
                  {errors.message && <p className="mt-2 text-sm text-destructive">{errors.message}</p>}
                </div>
                <div className="col-span-2 flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center pt-4">
                  <p className="text-xs text-muted-foreground">By submitting, you agree to be contacted about your enquiry.</p>
                  <button type="submit" className="bg-ink text-background px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-accent transition-colors">
                    Request quote
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-[440px] bg-surface-2 relative overflow-hidden">
          <iframe
            title="Everest Rendering Melbourne studio map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=144.994%2C-37.831%2C145.006%2C-37.822&layer=mapnik"
            className="absolute inset-0 h-full w-full grayscale"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", error, required, className = "",
}: {
  label: string; name: string; type?: string; error?: string; required?: boolean; className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="eyebrow text-muted-foreground block mb-2">
        {label}{required && <span className="text-accent ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-line py-3 focus:outline-none focus:border-accent text-ink"
      />
      {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
    </div>
  );
}
