// Blog posts data — used by /blog and /blog/[slug]

export interface BlogSection {
  type: "paragraph" | "heading" | "list";
  text?: string;
  items?: string[];
  id?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // human-readable e.g. "9 Apr 2025"
  readTime: string; // e.g. "7 min read"
  views: string; // e.g. "3.2k views"
  tags: string[];
  image: string;
  toc: { id: string; text: string }[];
  intro: string;
  sections: { id: string; title: string; paragraphs: string[]; bullets?: string[]; image?: string }[];
  featured?: boolean;
}

const ASTRA_IMAGE_1 = "/images/shop/blog-1.png";
const ASTRA_IMAGE_2 = "/images/shop/blog-2.png";
const ASTRA_IMAGE_4 = "/images/shop/blog-4.png";
const ASTRA_IMAGE_5 = "/images/shop/blog-5.png";

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-prepare-body-before-sports-pharmacology-cycle",
    title: "How to Prepare Your Body Before a Sports Pharmacology Cycle",
    description:
      "Proper preparation minimizes risks when using anabolic compounds, helps avoid side effects, and ensures steady progress on cycle.",
    date: "9 Apr 2025",
    readTime: "7 min read",
    views: "3.2k views",
    tags: ["Bodybuilding", "PCT"],
    image: ASTRA_IMAGE_1,
    featured: true,
    toc: [
      { id: "why-preparation", text: "Why preparation matters" },
      { id: "bloodwork", text: "Pre-cycle bloodwork" },
      { id: "diet", text: "Diet and training baseline" },
      { id: "support-supplements", text: "Support supplements" },
    ],
    intro:
      "Starting a sports pharmacology cycle without proper preparation is one of the most common mistakes made by athletes at all levels. The body needs to be ready biochemically and systemically before adding any exogenous compound. This article breaks down what you should check, adjust and stock up on before day one.",
    sections: [
      {
        id: "why-preparation",
        title: "Why preparation matters",
        paragraphs: [
          "A well-prepared body absorbs and utilizes compounds more efficiently, reducing the likelihood of side effects such as elevated blood pressure, liver stress or hormonal disruption. Preparation is not about restriction — it is about stacking the deck in your favor so every milligram of your protocol contributes to progress, not damage control.",
          "Skipping the prep phase often leads to wasted cycles where gains plateau early or recovery is incomplete. The foundation you build before the cycle determines how much you can retain after it ends.",
        ],
      },
      {
        id: "bloodwork",
        title: "Pre-cycle bloodwork",
        paragraphs: [
          "Comprehensive blood panel is non-negotiable. At minimum check full lipid panel, liver enzymes (ALT/AST/GGT), complete blood count, total and free testosterone, estradiol, prolactin, thyroid panel (TSH, free T3/T4), and fasting glucose with insulin.",
        ],
        bullets: [
          "Lipid panel — establish a baseline for HDL/LDL ratio",
          "Liver enzymes — if elevated before the cycle, delay until they normalize",
          "Hormones — baseline testosterone and estradiol help judge suppression later",
          "CBC — hematocrit and RBC to monitor for thickening",
        ],
      },
      {
        id: "diet",
        title: "Diet and training baseline",
        paragraphs: [
          "Your diet should already hit protein targets (1.6-2.2 g per kg bodyweight) and supply adequate micronutrients for at least 4-6 weeks before the cycle. Training volume should be stable — starting a new program and a new cycle simultaneously makes it impossible to attribute results.",
        ],
      },
      {
        id: "support-supplements",
        title: "Support supplements",
        paragraphs: [
          "Stock up on essential support before the cycle starts: TUDCA or NAC for liver, omega-3 for lipids, CoQ10 for cardiovascular health, vitamin D3 + K2, magnesium glycinate for recovery and sleep.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export const defaultBlogPost = blogPosts[0];
