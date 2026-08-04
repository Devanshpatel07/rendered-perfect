import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, type FormEvent } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Everest Rendering" },
      { name: "description", content: "Request a free quote from Everest Rendering Services. QBCC-licensed rendering contractors based in Southport, Queensland." },
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search.includes("sent=true")) {
      setSent(true);
    }
  }, []);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      e.preventDefault();
      const errs: Errors = {};
      for (const issue of parsed.error.issues) {
        errs[issue.path[0] as keyof FormValues] = issue.message;
      }
      setErrors(errs);
      return;
    }

    setErrors({});

    const web3Key = import.meta.env.VITE_WEB3FORMS_KEY || import.meta.env.VITE_CONTACT_KEY;
    if (web3Key) {
      e.preventDefault();
      setIsSubmitting(true);
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: web3Key,
          subject: `New Project Enquiry from ${parsed.data.name}`,
          from_name: parsed.data.name,
          email: parsed.data.email,
          phone: parsed.data.phone || "Not provided",
          suburb: parsed.data.suburb || "Not provided",
          service: parsed.data.service || "General Enquiry",
          message: parsed.data.message,
        }),
      })
        .then((res) => {
          if (res.ok) {
            setSent(true);
          } else {
            form.submit();
          }
        })
        .catch(() => {
          form.submit();
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
    // If no web3Key, allow native form POST submit to formsubmit.co!
  }

  const nextUrl = typeof window !== "undefined" ? `${window.location.origin}/contact?sent=true` : "https://rendered-perfect.vercel.app/contact?sent=true";

  return (
    <>
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 md:pt-52 md:pb-20">
        <div className="container-page">
          <div className="eyebrow text-accent">Contact</div>
          <h1 className="mt-5 sm:mt-6 font-display font-light text-[clamp(2.2rem,6vw,5.5rem)] leading-[0.98] tracking-tightest text-ink max-w-4xl">
            Tell us about your project.
          </h1>
          <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Written, itemised quotes within 48 hours. Enquiries sent directly to contact@everestrenderingservices.com.au.
          </p>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="container-page grid md:grid-cols-12 gap-10 sm:gap-16">
          <div className="md:col-span-5 space-y-8 sm:space-y-10">
            <div>
              <div className="eyebrow text-accent">Head office</div>
              <address className="mt-3 sm:mt-4 not-italic text-lg text-ink font-display tracking-tighter leading-snug">
                Southport<br />
                QLD 4215, Australia
              </address>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <div className="eyebrow text-accent">Phone</div>
                <a href="tel:+61452109330" className="mt-2 sm:mt-3 block font-display text-xl tracking-tighter text-ink link-underline">+61 452 109 330</a>
              </div>
              <div>
                <div className="eyebrow text-accent">Email</div>
                <a href="mailto:contact@everestrenderingservices.com.au" className="mt-2 sm:mt-3 block font-display text-base sm:text-lg tracking-tighter text-ink link-underline break-all">contact@everestrenderingservices.com.au</a>
              </div>
            </div>
            <div>
              <div className="eyebrow text-accent">Hours</div>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground">Monday – Saturday · 7am – 5pm<br />Site visits by appointment</p>
            </div>
            <div>
              <div className="eyebrow text-accent">Follow</div>
              <div className="mt-2 sm:mt-3 flex flex-wrap gap-4 sm:gap-5 text-sm sm:text-base text-ink">
                <a href="https://www.facebook.com/Everestrendering" target="_blank" rel="noreferrer" className="link-underline">Facebook</a>
                <a href="https://www.instagram.com/everest_renderingservices" target="_blank" rel="noreferrer" className="link-underline">Instagram</a>
                <a href="https://www.linkedin.com/company/everest-rendering-services-pyt-ltd/" target="_blank" rel="noreferrer" className="link-underline">LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            {sent ? (
              <div className="border border-line p-6 sm:p-10 bg-surface">
                <div className="eyebrow text-accent">Message Sent</div>
                <h2 className="mt-4 font-display text-2xl sm:text-3xl tracking-tighter text-ink">Thank you — your enquiry has been sent directly to our email.</h2>
                <p className="mt-4 text-sm sm:text-base text-muted-foreground">A member of the Everest team will respond to your query at <strong>contact@everestrenderingservices.com.au</strong> within one business day. For urgent enquiries, call <a href="tel:+61452109330" className="text-ink link-underline">+61 452 109 330</a>.</p>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      if (typeof window !== "undefined") {
                        window.history.replaceState({}, document.title, window.location.pathname);
                      }
                    }}
                    className="text-xs uppercase tracking-widest text-accent hover:underline font-semibold"
                  >
                    ← Send another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form 
                action="https://formsubmit.co/contact@everestrenderingservices.com.au" 
                method="POST" 
                onSubmit={onSubmit} 
                className="grid grid-cols-2 gap-5 sm:gap-6" 
                noValidate
              >
                <input type="hidden" name="_subject" value="New Project Enquiry — Everest Rendering" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value={nextUrl} />

                <Field label="Full name" name="name" error={errors.name} required className="col-span-2 md:col-span-1" />
                <Field label="Email" name="email" type="email" error={errors.email} required className="col-span-2 md:col-span-1" />
                <Field label="Phone" name="phone" type="tel" error={errors.phone} className="col-span-2 md:col-span-1" />
                <Field label="Suburb" name="suburb" error={errors.suburb} className="col-span-2 md:col-span-1" />
                <div className="col-span-2">
                  <label className="eyebrow text-muted-foreground block mb-2 text-xs" htmlFor="service">Service of interest</label>
                  <select id="service" name="service" className="w-full bg-transparent border-b border-line py-3 focus:outline-none focus:border-accent text-ink text-sm sm:text-base">
                    <option value="">Select…</option>
                    <option>Acrylic Rendering</option>
                    <option>Cement Rendering</option>
                    <option>Texture Finishes</option>
                    <option>Blue Board Rendering</option>
                    <option>Not sure — please advise</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="eyebrow text-muted-foreground block mb-2 text-xs" htmlFor="message">About your project</label>
                  <textarea id="message" name="message" rows={5} required maxLength={2000}
                    className="w-full bg-transparent border-b border-line py-3 focus:outline-none focus:border-accent text-ink text-sm sm:text-base resize-none"
                    placeholder="Address, storey count, timeline, anything specific about the finish…"
                  />
                  {errors.message && <p className="mt-2 text-sm text-destructive">{errors.message}</p>}
                </div>
                <div className="col-span-2 flex flex-col sm:flex-row justify-between gap-4 items-stretch sm:items-center pt-4">
                  <p className="text-xs text-muted-foreground">Submitting sends your query directly to contact@everestrenderingservices.com.au.</p>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-ink text-background px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-accent transition-colors text-center disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending…" : "Request quote"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-[320px] sm:h-[440px] bg-surface-2 relative overflow-hidden">
          <iframe
            title="Everest Rendering Services — Southport, QLD"
            src="https://www.openstreetmap.org/export/embed.html?bbox=153.400%2C-27.975%2C153.430%2C-27.960&layer=mapnik&marker=-27.9679%2C153.4145"
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
