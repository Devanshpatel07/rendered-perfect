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
  email: z.string().trim().email("Please enter a valid email address").max(200),
  phone: z.string().trim().max(40).optional(),
  suburb: z.string().trim().max(100).optional(),
  service: z.string().trim().max(80).optional(),
  message: z.string().trim().min(2, "Please provide a brief message about your project").max(2000),
});

type FormValues = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormValues, string>>;

function ContactPage() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search.includes("sent=true")) {
      setSent(true);
    }
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;
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
    setSubmitError(null);
    setIsSubmitting(true);

    const web3Key = import.meta.env.VITE_WEB3FORMS_KEY || import.meta.env.VITE_CONTACT_KEY;

    try {
      let response: Response;

      if (web3Key) {
        response = await fetch("https://api.web3forms.com/submit", {
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
        });
      } else {
        response = await fetch("https://formsubmit.co/ajax/contact@everestrenderingservices.com.au", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            name: parsed.data.name,
            email: parsed.data.email,
            phone: parsed.data.phone || "Not provided",
            suburb: parsed.data.suburb || "Not provided",
            service: parsed.data.service || "General Enquiry",
            message: parsed.data.message,
            _subject: `New Project Enquiry from ${parsed.data.name}`,
          }),
        });
      }

      if (!response.ok) {
        throw new Error(`Submission failed with status ${response.status}`);
      }

      setSubmittedData(parsed.data);
      setSent(true);
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setSubmitError(
        "Something went wrong sending your enquiry. Please try again, or email us directly at contact@everestrenderingservices.com.au."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 md:pt-52 md:pb-20">
        <div className="container-page">
          <div className="eyebrow text-accent">Contact Us</div>
          <h1 className="mt-5 sm:mt-6 font-display font-light text-[clamp(2.2rem,6vw,5.5rem)] leading-[0.98] tracking-tightest text-ink max-w-4xl">
            Tell us about your project.
          </h1>
          <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Free estimates and itemised quotes with a guaranteed 24-hour turnaround. Enquiries sent directly to contact@everestrenderingservices.com.au.
          </p>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="container-page grid md:grid-cols-12 gap-10 sm:gap-16">
          <div className="md:col-span-5 space-y-8 sm:space-y-10">
            <div>
              <div className="eyebrow text-accent">Company Credentials</div>
              <div className="mt-3 sm:mt-4 space-y-1.5 text-ink text-sm sm:text-base font-medium">
                <p className="font-display text-xl tracking-tight font-semibold">Everest Rendering Services Pty Ltd</p>
                <p className="text-muted-foreground"><strong className="text-ink">QBCC License:</strong> 15455473</p>
                <p className="text-muted-foreground"><strong className="text-ink">ABN:</strong> 98 676 120 166</p>
                <p className="text-muted-foreground"><strong className="text-ink">ACN:</strong> 676 120 166</p>
              </div>
            </div>

            <div>
              <div className="eyebrow text-accent">Main Office</div>
              <address className="mt-3 sm:mt-4 not-italic text-lg text-ink font-display tracking-tighter leading-snug">
                Southport<br />
                QLD 4215, Australia
              </address>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div>
                <div className="eyebrow text-accent">Make a Call / Free Estimate</div>
                <a href="tel:+61452109330" className="mt-2 sm:mt-3 block font-display text-xl sm:text-2xl tracking-tighter text-ink link-underline">+61 452 109 330</a>
              </div>
              <div>
                <div className="eyebrow text-accent">Send a Mail</div>
                <a href="mailto:contact@everestrenderingservices.com.au" className="mt-2 sm:mt-3 block font-display text-base sm:text-lg tracking-tighter text-ink link-underline break-all">contact@everestrenderingservices.com.au</a>
              </div>
            </div>

            <div>
              <div className="eyebrow text-accent">Hours</div>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground">Mon – Sat: 09am – 08pm<br />Site visits by appointment</p>
            </div>

            <div>
              <div className="eyebrow text-accent">Follow Us</div>
              <div className="mt-2 sm:mt-3 flex flex-wrap gap-4 sm:gap-5 text-sm sm:text-base text-ink">
                <a href="https://www.facebook.com/Everestrendering" target="_blank" rel="noreferrer" className="link-underline">Facebook</a>
                <a href="https://www.instagram.com/everest_renderingservices" target="_blank" rel="noreferrer" className="link-underline">Instagram</a>
                <a href="https://www.linkedin.com/company/everest-rendering-services-pyt-ltd/" target="_blank" rel="noreferrer" className="link-underline">LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            {sent ? (
              <div className="border border-line p-8 sm:p-12 bg-surface rounded-sm space-y-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center size-8 rounded-full bg-accent/10 text-accent font-bold text-lg">✓</span>
                  <div className="eyebrow text-accent">Enquiry Submitted</div>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl tracking-tighter text-ink">
                  Thank you{submittedData?.name ? `, ${submittedData.name}` : ""} — your quote request has been logged!
                </h2>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Our Southport office will review your project requirements and get back to you at <strong>{submittedData?.email || "contact@everestrenderingservices.com.au"}</strong> within 24 hours.
                </p>

                {submittedData && (
                  <div className="bg-background/80 p-5 border border-line rounded space-y-2 text-xs sm:text-sm text-ink">
                    <p className="font-semibold text-accent uppercase tracking-wider text-[11px]">Enquiry Details</p>
                    <p><strong>Name:</strong> {submittedData.name}</p>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    {submittedData.phone && <p><strong>Phone:</strong> {submittedData.phone}</p>}
                    {submittedData.suburb && <p><strong>Location:</strong> {submittedData.suburb}</p>}
                    {submittedData.service && <p><strong>Service:</strong> {submittedData.service}</p>}
                    <p><strong>Message:</strong> {submittedData.message}</p>
                  </div>
                )}

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setSubmittedData(null);
                      setSubmitError(null);
                      if (typeof window !== "undefined") {
                        window.history.replaceState({}, document.title, window.location.pathname);
                      }
                    }}
                    className="inline-flex items-center gap-2 bg-ink text-background px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-accent transition-colors"
                  >
                    ← Send another enquiry
                  </button>

                  <a
                    href={`mailto:contact@everestrenderingservices.com.au?subject=Quote Request from ${encodeURIComponent(submittedData?.name || "Client")}&body=${encodeURIComponent(`Name: ${submittedData?.name || ""}\nEmail: ${submittedData?.email || ""}\nPhone: ${submittedData?.phone || ""}\nService: ${submittedData?.service || ""}\nMessage: ${submittedData?.message || ""}`)}`}
                    className="inline-flex items-center gap-2 border border-line px-6 py-3 text-xs uppercase tracking-widest font-semibold text-ink hover:bg-surface-2 transition-colors"
                  >
                    Open in Mail App ✉
                  </a>
                </div>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="grid grid-cols-2 gap-5 sm:gap-6 bg-surface/50 p-6 sm:p-8 border border-line"
                noValidate
              >
                {submitError && (
                  <div className="col-span-2 border border-destructive/40 bg-destructive/5 text-destructive text-sm px-4 py-3 rounded-sm">
                    {submitError}
                  </div>
                )}

                <Field label="Full name" name="name" error={errors.name} required className="col-span-2 md:col-span-1" placeholder="e.g. John Smith" />
                <Field label="Email address" name="email" type="email" error={errors.email} required className="col-span-2 md:col-span-1" placeholder="john@example.com" />
                <Field label="Phone number" name="phone" type="tel" error={errors.phone} className="col-span-2 md:col-span-1" placeholder="+61 400 000 000" />
                <Field label="Suburb / Location" name="suburb" error={errors.suburb} className="col-span-2 md:col-span-1" placeholder="e.g. Southport, Gold Coast" />

                <div className="col-span-2">
                  <label className="eyebrow text-muted-foreground block mb-2 text-xs" htmlFor="service">Service of interest</label>
                  <select
                    id="service"
                    name="service"
                    className="w-full bg-background border border-line px-4 py-3 focus:outline-none focus:border-accent text-ink text-sm sm:text-base rounded-none"
                  >
                    <option value="" className="bg-background text-ink">Select a service…</option>
                    <option value="Acrylic Rendering" className="bg-background text-ink">Acrylic Rendering</option>
                    <option value="Cement Rendering" className="bg-background text-ink">Cement Rendering</option>
                    <option value="Texture Finishes" className="bg-background text-ink">Texture Finishes</option>
                    <option value="Blue Board Rendering" className="bg-background text-ink">Blue Board Texture Finishes</option>
                    <option value="Foam Panel Rendering" className="bg-background text-ink">Foam Panel Systems</option>
                    <option value="Commercial Rendering" className="bg-background text-ink">Commercial Projects</option>
                    <option value="Render Repairs" className="bg-background text-ink">Render Repairs & Restoration</option>
                    <option value="Not sure — please advise" className="bg-background text-ink">Not sure — please advise me</option>
                  </select>
                </div>

                <div className="col-span-2">
                  <label className="eyebrow text-muted-foreground block mb-2 text-xs" htmlFor="message">
                    About your project <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    maxLength={2000}
                    className={`w-full bg-background border ${errors.message ? "border-destructive" : "border-line"} p-4 focus:outline-none focus:border-accent text-ink text-sm sm:text-base resize-none`}
                    placeholder="Provide details about your build or facade project (address, storey count, timeline, substrate type...)"
                  />
                  {errors.message && <p className="mt-1.5 text-sm text-destructive font-medium">{errors.message}</p>}
                </div>

                <div className="col-span-2 flex flex-col sm:flex-row justify-between gap-4 items-stretch sm:items-center pt-4 border-t border-line mt-2">
                  <p className="text-xs text-muted-foreground">Free quote responses returned within 24 hours.</p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-accent text-accent-foreground px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-ink hover:text-background transition-colors text-center disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Request Free Quote"}
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
            className="absolute inset-0 h-full w-full grayscale opacity-85 hover:opacity-100 transition-opacity"
            loading="lazy"
          />
          <div className="absolute bottom-6 left-6 bg-ink text-background p-4 sm:p-6 max-w-xs shadow-2xl z-10 border border-white/10">
            <div className="eyebrow text-accent">Southport HQ</div>
            <p className="mt-2 text-xs sm:text-sm text-background/80">Serving Gold Coast & South East Queensland.</p>
            <a
              href="https://maps.google.com/?q=Southport+QLD+4215"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-xs uppercase tracking-widest text-accent hover:underline font-semibold"
            >
              Open in Google Maps ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", error, required, className = "", placeholder = "",
}: {
  label: string; name: string; type?: string; error?: string; required?: boolean; className?: string; placeholder?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="eyebrow text-muted-foreground block mb-2 text-xs">
        {label}{required && <span className="text-accent ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-background border border-line px-4 py-3 focus:outline-none focus:border-accent text-ink text-sm sm:text-base placeholder:text-muted-foreground/50"
      />
      {error && <p className="mt-1.5 text-sm text-destructive font-medium">{error}</p>}
    </div>
  );
}