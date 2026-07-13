// Single source of truth for business content.
// Swap these values for real photos/hours/reviews when available.

// ⬇️ Production domain — update this ONE line when the real domain is ready.
// Used by metadata (layout.tsx), robots.ts and sitemap.ts. No trailing slash.
export const siteUrl = "https://professionalcleaners.ca";

export const site = {
  name: "Professional Dry Cleaners & Alteration",
  shortName: "Professional Cleaners",
  tagline: "Impeccable garment care & expert tailoring in Mississauga.",
  phoneDisplay: "(905) 232-5099",
  phoneHref: "tel:+19052325099",
  email: "hello@professionalcleaners.ca", // placeholder — update to real inbox
  address: {
    street: "1125 Dundas St E",
    city: "Mississauga",
    region: "ON",
    postal: "L4Y 2C4",
    country: "CA",
  },
  get addressLine() {
    return `${this.address.street}, ${this.address.city}, ${this.address.region} ${this.address.postal}`;
  },
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=1125+Dundas+St+E+Mississauga+ON+L4Y+2C4",
  mapEmbed:
    "https://www.google.com/maps?q=1125+Dundas+St+E,+Mississauga,+ON+L4Y+2C4&output=embed",
  // Placeholder hours — confirm & edit.
  hours: [
    { day: "Monday", time: "8:00 AM – 7:00 PM" },
    { day: "Tuesday", time: "8:00 AM – 7:00 PM" },
    { day: "Wednesday", time: "8:00 AM – 7:00 PM" },
    { day: "Thursday", time: "8:00 AM – 7:00 PM" },
    { day: "Friday", time: "8:00 AM – 7:00 PM" },
    { day: "Saturday", time: "9:00 AM – 5:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  stats: [
    { value: "25+", label: "Years serving Mississauga" },
    { value: "48 hr", label: "Standard turnaround" },
    { value: "5★", label: "Highly rated on Google" },
    { value: "100%", label: "Satisfaction guarantee" },
  ],
} as const;

export type ServiceCategory = {
  id: string;
  title: string;
  blurb: string;
  icon: string; // lucide icon name key (mapped in component)
  items: string[];
};

export const serviceGroups: ServiceCategory[] = [
  {
    id: "everyday",
    title: "Everyday Garment Care",
    blurb:
      "Crisp, professionally finished results for the clothes you wear most — pressed, packaged and ready when you need them.",
    icon: "shirt",
    items: [
      "Dry cleaning",
      "Shirt cleaning",
      "Suit cleaning",
      "Repairs and alterations",
      "Tailoring",
    ],
  },
  {
    id: "specialty",
    title: "Specialty & Delicate Care",
    blurb:
      "Hand-finished expertise for the pieces that matter most — luxury outerwear, delicate fabrics and once-in-a-lifetime garments.",
    icon: "sparkles",
    items: [
      "Canada Goose jacket cleaning",
      "Down garments",
      "Wedding gown preservation",
      "Formal wear",
      "Silks",
      "Suede",
      "Leather",
      "Fur",
    ],
  },
  {
    id: "home",
    title: "Home & Household",
    blurb:
      "Beyond the wardrobe — we refresh the fabrics that make your home feel clean, bright and cared for.",
    icon: "home",
    items: [
      "Drapery and curtains",
      "Household items and rugs",
      "Carpet cleaning",
      "Shoe cleaning",
    ],
  },
];

// Featured specialty highlights (shown as a spotlight section).
export const specialties = [
  {
    title: "Canada Goose & Down",
    desc: "Loft-restoring cleaning that protects insulation, shells and trims — so your jacket performs like new.",
    icon: "snowflake",
  },
  {
    title: "Wedding Gown Preservation",
    desc: "Museum-grade cleaning and acid-free boxing to keep your gown pristine for generations.",
    icon: "gem",
  },
  {
    title: "Leather, Suede & Fur",
    desc: "Specialist conditioning and colour care that keeps fine skins supple and beautiful.",
    icon: "layers",
  },
  {
    title: "Expert Alterations & Tailoring",
    desc: "In-house tailors for hems, resizing, repairs and a flawless custom fit.",
    icon: "scissors",
  },
] as const;

export const steps = [
  {
    title: "Drop off",
    desc: "Visit us on Dundas St E — no appointment needed. Tell us about any spots or special-care fabrics.",
    icon: "mapPin",
  },
  {
    title: "Expert care",
    desc: "Each garment is inspected, tagged and cleaned by hand-finishing specialists using the right method for the fabric.",
    icon: "sparkles",
  },
  {
    title: "Pick up fresh",
    desc: "Collect your order pressed, packaged and ready — most standard items in about 48 hours.",
    icon: "check",
  },
] as const;

export const reasons = [
  {
    title: "Fabric-first expertise",
    desc: "Silk, suede, leather, fur and technical down each get a method matched to the material — never a one-size process.",
    icon: "sparkles",
  },
  {
    title: "A master tailor you can trust",
    desc: "Alterations and repairs are done on-site by Masood and our experienced tailors — praised by customers for over a decade for precise, honest, careful work.",
    icon: "scissors",
  },
  {
    title: "Reliable 48-hour turnaround",
    desc: "Dependable timing you can plan around, with same-day options available on request.",
    icon: "clock",
  },
  {
    title: "Satisfaction guaranteed",
    desc: "If something isn't right, we make it right. Your garments are treated as carefully as our own.",
    icon: "shieldCheck",
  },
];

// Real Google reviews (verbatim, lightly trimmed). Swap/add more anytime.
export const testimonials = [
  {
    quote:
      "I've been a loyal customer of Masood for over 12 years, and he has never once disappointed. His work is always done with such care — clean, precise, and perfectly finished every time. Truly the best in the business.",
    name: "Haya Jumaa",
    detail: "Loyal customer · 12+ years",
  },
  {
    quote:
      "Been a customer for years because of Masood's excellent customer service. He is a very skilled tailor who has altered and fixed many pieces for my family, including repairing and restoring a 15-year-old Canada Goose jacket that I was ready to give up on.",
    name: "Mohamed Awad",
    detail: "Canada Goose restoration",
  },
  {
    quote:
      "I've come here for both dry cleaning and alterations, and I've always had a great experience. The owner is very welcoming and friendly, the alterations are done well and always on time, and my clothes come back looking great.",
    name: "Gina Lee",
    detail: "Dry cleaning & alterations",
  },
  {
    quote:
      "Masood went above and beyond to help me with my alterations. He spent time to explain the pros and cons of a very expensive jacket and made sure it was handled with the utmost care. I'll be bringing all our family's clothes to him from now on.",
    name: "Jeanne Agius",
    detail: "Expert alterations",
  },
  {
    quote:
      "Very personable and professional. This is where you need to go for tailoring and alterations. Quality work and genuine customer service you won't find at many other places.",
    name: "Lesley Tumber",
    detail: "Tailoring & alterations",
  },
  {
    quote:
      "Needed a suit for my prom that was the next day, and the owner got it done for me very quickly and efficiently. I love the navy colour and high-quality fabric — he got me right last minute.",
    name: "Ali Mahran",
    detail: "Last-minute suit",
  },
];

// "Our Work" showcase — drop your own photos into /public/images/work/
// and set `src` (e.g. src: "/images/work/suit-1.jpg"). Leave src null to
// show a styled placeholder slot.
export type WorkItem = {
  title: string;
  caption: string;
  icon: string;
  src: string | null;
};

export const ourWork: WorkItem[] = [
  {
    // Photo 1: Canada Goose parkas with fur-trim hoods on the rack
    title: "Canada Goose & down",
    caption: "Fur-trim parkas and down jackets, cleaned and restored",
    icon: "snowflake",
    src: "/images/work/canada-goose.jpg",
  },
  {
    // Photo 2: suits & tuxedos styled on mannequins with ties/bow ties
    title: "Suits & formal wear",
    caption: "Tuxedos and suits, cleaned and pressed to perfection",
    icon: "sparkles",
    src: "/images/work/suits-formal.jpg",
  },
  {
    // Photo 5: wall of tailored suits in every colour
    title: "Suit tailoring & selection",
    caption: "Expertly altered and tailored by Masood",
    icon: "scissors",
    src: "/images/work/suit-wall.jpg",
  },
  {
    // Photo 3: full-length lace wedding gown
    title: "Wedding gowns",
    caption: "Delicate cleaning and preservation for your gown",
    icon: "gem",
    src: "/images/work/wedding-gown.jpg",
  },
  {
    // Photo 4: bride in lace gown with bouquet
    title: "Bridal & occasion wear",
    caption: "Careful care for lace, beading and fine detail",
    icon: "gem",
    src: "/images/work/bridal.jpg",
  },
  {
    // Photo 6: Mackage parka with a real-fur collar
    title: "Fur & luxury outerwear",
    caption: "Real-fur trims and designer parkas, cleaned with care",
    icon: "layers",
    src: "/images/work/fur-outerwear.jpg",
  },
];

// Gallery photos (swap for your own shop/work photos in /public/images).
export const gallery = [
  {
    src: "/images/rack-boutique.jpg",
    alt: "Freshly cleaned garments hanging on a warmly lit rack",
    label: "Ready for pickup",
    caption: "Pressed, packaged & organized",
  },
  {
    src: "/images/suit-tweed.jpg",
    alt: "A tailored blue tweed three-piece suit",
    label: "Suit care & tailoring",
    caption: "Precision cleaning and fitting",
  },
  {
    src: "/images/pressing-iron.jpg",
    alt: "A garment being professionally pressed with an iron",
    label: "Expert pressing",
    caption: "Crisp, hand-finished results",
  },
  {
    src: "/images/shirts-rack.jpg",
    alt: "A row of cleaned shirts on hangers",
    label: "Everyday garments",
    caption: "Shirts done right, every time",
  },
  {
    src: "/images/rack-neutral.jpg",
    alt: "Delicate neutral-toned garments on a rack",
    label: "Delicate & specialty",
    caption: "Fabric-matched, gentle care",
  },
  {
    src: "/images/suit-walking.jpg",
    alt: "A person wearing a sharply tailored navy suit",
    label: "A flawless fit",
    caption: "Alterations by in-house tailors",
  },
] as const;

// Short review highlights woven into the gallery.
export const galleryReviews = [
  {
    quote:
      "Masood is the best tailor I have ever been to. The quality of his work is unmatched.",
    name: "Zack W.",
  },
  {
    quote:
      "All my jackets looked brand new — no stains, lint or dirt. Trustworthy and eco-friendly!",
    name: "Angelica Inton",
  },
] as const;

export const faqs = [
  {
    q: "How long does dry cleaning take?",
    a: "Most standard garments are ready in about 48 hours. Same-day and express service is often available on request — just ask when you drop off.",
  },
  {
    q: "Do you clean Canada Goose and down-filled jackets?",
    a: "Yes. We specialize in down and technical outerwear, using a loft-restoring process that protects the insulation, shell and trims so your jacket stays warm and looks like new.",
  },
  {
    q: "Can you preserve a wedding gown?",
    a: "Absolutely. We offer museum-grade gown cleaning and acid-free preservation boxing to keep your dress pristine for years to come.",
  },
  {
    q: "Do you do alterations and tailoring?",
    a: "We do — all in-house. Our experienced tailors handle hemming, resizing, repairs and custom fitting for everything from everyday wear to formal suits and gowns.",
  },
  {
    q: "Do I need an appointment?",
    a: "No appointment is necessary for drop-off. Just visit us at 1125 Dundas St E in Mississauga during business hours, or call us at (905) 232-5099 with any questions.",
  },
];

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Specialty", href: "#specialty" },
  { label: "Our Work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];
