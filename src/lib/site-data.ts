export type ServiceCategory =
  | "acrylic-rendering"
  | "cement-rendering"
  | "texture-coating"
  | "blue-board-rendering"
  | "foam-panel-rendering"
  | "commercial-rendering"
  | "residential-rendering"
  | "render-repairs";

export interface Service {
  slug: ServiceCategory;
  index: string;
  title: string;
  short: string;
  overview: string;
  benefits: string[];
  applications: string[];
}

export const services: Service[] = [
  {
    slug: "acrylic-rendering",
    index: "01",
    title: "Acrylic Rendering",
    short: "Flexible, crack-resistant finishes tuned for the Australian climate.",
    overview:
      "Acrylic render is a polymer-modified system that flexes with the substrate, resists hairline cracking, and holds colour under harsh UV. We apply it as a topcoat over cement base, blueboard, foam or existing render.",
    benefits: [
      "Superior flexibility and crack resistance",
      "Custom tinted — no painting required",
      "Fast curing, minimal downtime",
      "UV stable across Australian summers",
    ],
    applications: ["New residential builds", "Renovations", "Blueboard facades", "Foam substrates"],
  },
  {
    slug: "cement-rendering",
    index: "02",
    title: "Cement Rendering",
    short: "Traditional sand-and-cement render for durable, timeless facades.",
    overview:
      "Our cement render is a hand-troweled sand, cement and lime mix laid over brick, block or masonry. It is the foundation of every high-end facade — the base every acrylic or texture coat depends on.",
    benefits: [
      "Extremely durable substrate",
      "Breathable and heritage compatible",
      "Ideal base for any topcoat",
      "Fire and pest resistant",
    ],
    applications: ["Brick homes", "Block work", "Heritage restoration", "Retaining walls"],
  },
  {
    slug: "texture-coating",
    index: "03",
    title: "Texture Coating",
    short: "Architectural coatings with custom grain, depth and colour.",
    overview:
      "A high-build coating applied over a prepared surface to introduce controlled grain — sand, medium or coarse. Perfect for architectural statements where light and shadow do the talking.",
    benefits: [
      "Custom grain and colour",
      "Hides minor surface imperfections",
      "Weather and impact resistant",
      "Low maintenance",
    ],
    applications: ["Modern architectural homes", "Feature walls", "Commercial facades"],
  },
  {
    slug: "blue-board-rendering",
    index: "04",
    title: "Blue Board Rendering",
    short: "Precision jointing and rendering of fibre-cement sheeting.",
    overview:
      "Blueboard is the modern lightweight substrate of choice. We tape, joint and render it with an acrylic system that leaves a seamless monolithic finish.",
    benefits: [
      "Seamless jointing",
      "Lightweight and fast to install",
      "Suits contemporary architecture",
      "Compatible with all acrylic topcoats",
    ],
    applications: ["Second storey additions", "New timber-frame builds", "Modular construction"],
  },
  {
    slug: "foam-panel-rendering",
    index: "05",
    title: "Foam Panel Rendering",
    short: "High-thermal EPS panel systems with mesh-reinforced render.",
    overview:
      "Expanded polystyrene panels adhered and mesh-reinforced then rendered — a genuine external insulation upgrade with a monolithic finish.",
    benefits: [
      "Significant thermal improvement",
      "Enables architectural mouldings",
      "Impact-resistant when meshed correctly",
      "Reduces heating and cooling loads",
    ],
    applications: ["Passive-house builds", "Feature bulkheads and cornices", "Facade renovations"],
  },
  {
    slug: "commercial-rendering",
    index: "06",
    title: "Commercial Rendering",
    short: "Scale-optimised delivery for developers, builders and PMs.",
    overview:
      "Multi-storey facades, staged access, live sites — our commercial team handles programme, safety and QA on projects from mid-rise residential to warehouses and retail.",
    benefits: [
      "Programme certainty",
      "Full compliance and insurance",
      "In-house scaffold coordination",
      "Dedicated site foreman",
    ],
    applications: ["Apartments", "Retail and hospitality", "Industrial and warehouse", "Schools"],
  },
  {
    slug: "residential-rendering",
    index: "07",
    title: "Residential Rendering",
    short: "Bespoke finishes for architect-designed and luxury family homes.",
    overview:
      "The bulk of our work — one-off residential facades where craftsmanship shows in every corner, reveal and shadow line.",
    benefits: [
      "Detail-obsessed finishing",
      "Direct owner communication",
      "Colour and grain consulting",
      "Ten-year workmanship guarantee",
    ],
    applications: ["New builds", "Extensions", "Full facade renovations", "Luxury homes"],
  },
  {
    slug: "render-repairs",
    index: "08",
    title: "Render Repairs",
    short: "Restoration and remedial work for cracked or aged facades.",
    overview:
      "We assess, cut back and reinstate failing render — matching the original grain and colour so the repair disappears into the wall.",
    benefits: [
      "Invisible colour and texture matching",
      "Root-cause diagnosis",
      "Warranted repairs",
      "Insurance-report friendly",
    ],
    applications: ["Cracked facades", "Water-damaged render", "Impact damage", "Aged commercial"],
  },
];

export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Luxury Homes"
  | "Texture Finish"
  | "Repairs";

export interface Project {
  slug: string;
  title: string;
  suburb: string;
  year: number;
  category: ProjectCategory;
  service: string;
  cover: string;
  summary: string;
  challenge: string;
  solution: string;
  materials: string[];
  timeline: string;
  quote: string;
  quoteAuthor: string;
}

// Image references live in the route files (ES6 imports).
export const projects: Project[] = [
  {
    slug: "the-kew-residence",
    title: "The Kew Residence",
    suburb: "Kew, VIC",
    year: 2024,
    category: "Luxury Homes",
    service: "Acrylic Rendering",
    cover: "kew",
    summary:
      "A monolithic warm-white facade wrapping a two-storey family home, with hand-detailed reveals around bespoke black steel joinery.",
    challenge:
      "The architect specified a seamless facade with no visible control joints and a warm, softly textured surface that would read as one continuous plane from the street.",
    solution:
      "We laid a full cement base coat, mesh-reinforced every junction, then finished with a two-coat fine acrylic topcoat in a custom warm-white — the reveals were formed and detailed by hand.",
    materials: ["Cement base render", "Fibreglass mesh", "Acrylic topcoat, fine grain", "Custom tint"],
    timeline: "6 weeks",
    quote:
      "The finish is flawless. Everest was the only trade on this build that never needed a follow-up.",
    quoteAuthor: "Amelia Chen — Homeowner",
  },
  {
    slug: "brighton-curves",
    title: "Brighton Curves",
    suburb: "Brighton, VIC",
    year: 2023,
    category: "Texture Finish",
    service: "Texture Coating",
    cover: "brighton",
    summary:
      "A sculptural curved wall clad in a medium-grain texture coating, calibrated so afternoon light reads as a soft drift across the surface.",
    challenge:
      "Curved geometry meant every trowel stroke had to follow the arc without breaking the grain pattern.",
    solution:
      "A small crew of two applied the coat in a single continuous session, hand-blending the grain at the crown of the curve.",
    materials: ["Acrylic primer", "Medium-grain texture coating", "Custom pigment"],
    timeline: "2 weeks",
    quote: "They understood the geometry as much as our architect did.",
    quoteAuthor: "Studio Woodward",
  },
  {
    slug: "st-kilda-workspace",
    title: "St Kilda Workspace",
    suburb: "St Kilda, VIC",
    year: 2024,
    category: "Commercial",
    service: "Cement Rendering",
    cover: "commercial",
    summary:
      "A four-storey commercial facade rendered in smooth cement over pre-cast panels, delivered on programme with live tenants below.",
    challenge:
      "Access constrained by a live retail tenancy at ground floor and a strict noise curfew.",
    solution:
      "Split the facade into four staged elevations, ran a night shift for setdown and cleaning, and used a swing-stage to minimise footprint at ground level.",
    materials: ["Cement render", "Elastomeric sealer", "Anti-graffiti topcoat"],
    timeline: "9 weeks",
    quote: "Programme, communication, quality — all landed. Rare on a live commercial site.",
    quoteAuthor: "Harrow Group — Builder",
  },
  {
    slug: "the-mosman-residence",
    title: "The Mosman Residence",
    suburb: "Mosman, NSW",
    year: 2023,
    category: "Luxury Homes",
    service: "Foam Panel Rendering",
    cover: "mosman",
    summary:
      "A harbourside residence wrapped in an EPS foam-panel render system — thermal upgrade and architectural finish in a single move.",
    challenge:
      "Integrate a modern render system with existing heritage cement work at the ground floor.",
    solution:
      "Custom-cut EPS panels above a rendered ground-floor plinth, mesh reinforced at every junction, finished in a soft warm-white acrylic.",
    materials: ["EPS panels", "Base coat with mesh", "Acrylic topcoat"],
    timeline: "8 weeks",
    quote: "The house is noticeably warmer in winter and completely transformed from the street.",
    quoteAuthor: "David & Priya Naidu",
  },
  {
    slug: "hawthorn-heritage-repair",
    title: "Hawthorn Heritage Repair",
    suburb: "Hawthorn, VIC",
    year: 2024,
    category: "Repairs",
    service: "Render Repairs",
    cover: "before",
    summary:
      "Sympathetic remedial render on a 1920s facade — cracks stabilised, missing sections rebuilt, texture matched to the original hand-float.",
    challenge:
      "Diagnose whether the cracking was structural or superficial, then match a 100-year-old sand-float finish.",
    solution:
      "Engineer's report ruled out structural movement; we cut back to substrate, reinstated with a lime-cement mix and floated the texture to match by hand.",
    materials: ["Lime-cement mix", "Matched pigments", "Breathable sealer"],
    timeline: "3 weeks",
    quote: "You cannot see where the repair ends. Which is the point.",
    quoteAuthor: "Heritage Homeowner",
  },
  {
    slug: "trowel-detail-study",
    title: "Trowel Detail Study",
    suburb: "Melbourne studio",
    year: 2024,
    category: "Texture Finish",
    service: "Texture Coating",
    cover: "texture",
    summary:
      "An internal reference wall the team uses to calibrate grain, colour and light for new projects.",
    challenge: "Build a shared physical library of every finish we offer.",
    solution: "Twelve sample walls, each with its own mix ratio, primer and topcoat documented.",
    materials: ["Various"],
    timeline: "Ongoing",
    quote: "This is where every project starts — with a physical sample, not a swatch.",
    quoteAuthor: "Everest Studio",
  },
];

export const testimonials = [
  {
    quote:
      "Everest rendered our entire Vaucluse facade. The finish is gallery-grade — clients ask us who did it every time.",
    author: "Kate Ferris",
    role: "Ferris Architecture",
  },
  {
    quote:
      "We've used a lot of renderers. None have combined this level of craftsmanship with real programme discipline.",
    author: "Ben Halstead",
    role: "Halstead Constructions",
  },
  {
    quote: "Quiet, precise, on time. They left the site cleaner than they found it.",
    author: "Priya Naidu",
    role: "Homeowner, Mosman",
  },
];

export const faqs = [
  {
    q: "How long does a full facade take?",
    a: "A typical two-storey residential facade takes four to six weeks depending on weather, access and finish. We give a firm programme with every quote.",
  },
  {
    q: "Do you supply and install foam?",
    a: "Yes — we cut, glue and mesh EPS panels on site, then apply the render system as one integrated package.",
  },
  {
    q: "Can you match an existing texture?",
    a: "In almost every case, yes. We keep a physical sample library and mix on site to match colour and grain.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Fully. We hold public liability insurance, WorkCover, and all crew are white-carded and trained internally.",
  },
  {
    q: "Do you work interstate?",
    a: "Our base is Melbourne and Sydney. We take on selected projects across VIC, NSW and the ACT.",
  },
  {
    q: "What warranty do you offer?",
    a: "Ten years on workmanship, plus the manufacturer warranty on materials — typically fifteen years.",
  },
];

export const stats = [
  { label: "Years of craft", value: "18+" },
  { label: "Projects completed", value: "1,200+" },
  { label: "Suburbs served", value: "120+" },
  { label: "Workmanship guarantee", value: "10 yr" },
];

export const process = [
  {
    n: "01",
    title: "Consultation",
    body: "On-site assessment of substrate, orientation and design intent. Texture and colour discussion with samples.",
  },
  {
    n: "02",
    title: "Detailed quote",
    body: "A transparent, itemised quote and a firm programme — no vague estimates or surprise variations.",
  },
  {
    n: "03",
    title: "Preparation",
    body: "Masking, cleaning and priming. Bond breakers and mesh at every junction — the work you never see.",
  },
  {
    n: "04",
    title: "Application",
    body: "Hand-troweled base and topcoat by long-tenured crew, applied in the right conditions for the material.",
  },
  {
    n: "05",
    title: "Handover",
    body: "Detailed clean, sign-off walk, and a written record of the products and mixes used on your home.",
  },
];
