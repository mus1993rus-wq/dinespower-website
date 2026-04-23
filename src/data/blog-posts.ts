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
  {
    slug: "igf-1-muscle-growth-growth-hormone-anabolism",
    title: "IGF-1 and Muscle Growth: How Growth Hormone Triggers Anabolism",
    description:
      "IGF-1 is a polypeptide hormone with pronounced anabolic effects that increases protein synthesis and drives real lean mass gains.",
    date: "6 Apr 2025",
    readTime: "6 min read",
    views: "2.8k views",
    tags: ["Peptides", "Bodybuilding"],
    image: ASTRA_IMAGE_2,
    toc: [
      { id: "what-is-igf1", text: "What is IGF-1" },
      { id: "mechanism", text: "Mechanism of action" },
      { id: "protocols", text: "Common protocols" },
    ],
    intro:
      "Insulin-like Growth Factor 1 (IGF-1) is the primary mediator of growth hormone's anabolic effects. While GH itself has broad systemic effects, IGF-1 is where most of the actual muscle growth happens at the cellular level.",
    sections: [
      {
        id: "what-is-igf1",
        title: "What is IGF-1",
        paragraphs: [
          "IGF-1 is a 70-amino-acid polypeptide primarily produced in the liver in response to GH stimulation. It functions as a key mediator of cell growth, proliferation and differentiation throughout life.",
        ],
      },
      {
        id: "mechanism",
        title: "Mechanism of action",
        paragraphs: [
          "IGF-1 binds to the IGF-1 receptor (IGF-1R), a tyrosine kinase receptor that activates multiple downstream pathways including PI3K/Akt/mTOR — the central pathway for protein synthesis and muscle hypertrophy.",
        ],
      },
      {
        id: "protocols",
        title: "Common protocols",
        paragraphs: [
          "Direct IGF-1 LR3 use is controversial due to short half-life and potential for side effects. Most athletes prefer GHRH/GHRP peptide combinations that stimulate natural IGF-1 pulses.",
        ],
      },
    ],
  },
  {
    slug: "rad-140-testolone-laboratory-analysis",
    title:
      "RAD-140 (Testolone): Laboratory Analysis of Its Impact on Anabolism, Androgen Receptors and Safety Markers",
    description:
      "A full lab breakdown of Testolone — receptor binding, anabolic effect, and what the safety markers actually show.",
    date: "26 Jan 2025",
    readTime: "9 min read",
    views: "6.1k views",
    tags: ["SARMs", "Bodybuilding"],
    image: ASTRA_IMAGE_4,
    toc: [
      { id: "mechanism", text: "Mechanism of interaction with androgen receptors" },
      { id: "anabolic-activity", text: "Anabolic activity" },
      { id: "comparison", text: "Comparison with other SARMs" },
      { id: "safety", text: "Safety markers" },
    ],
    intro:
      "RAD-140 is a powerful selective androgen receptor modulator that is widely used by bodybuilders. This compound is considered one of the most thoroughly studied SARMs due to extensive laboratory testing. Research dating back to 2014 shows a favorable safety profile at clinical doses.",
    sections: [
      {
        id: "mechanism",
        title: "Mechanism of Interaction Between RAD-140 and Androgen Receptors",
        paragraphs: [
          "RAD-140 binds to the androgen receptor (AR) with high tissue selectivity. Unlike traditional anabolic steroids that affect the AR in all tissues, RAD-140 preferentially activates receptors in muscle and bone while having minimal activity in prostate and other androgen-sensitive tissues.",
        ],
        bullets: [
          "Faster muscle recovery",
          "Increased lean muscle mass",
          "Improved endurance and strength",
          "Enhanced muscle definition",
        ],
      },
      {
        id: "anabolic-activity",
        title: "Anabolic Activity of Testolone",
        paragraphs: [
          "Studies have demonstrated significant anabolic potential with favorable safety markers. A dosage of 10 mg is generally sufficient for most users. Typical cycle duration ranges from 6 to 12 weeks depending on individual goals and experience level.",
        ],
      },
      {
        id: "comparison",
        title: "Comparison of RAD-140 with Other Popular SARMs",
        paragraphs: [
          "In professional bodybuilding, precision and optimization are key factors in compound selection. Understanding how different SARMs compare allows athletes to make informed decisions based on their specific goals and experience level.",
        ],
      },
      {
        id: "safety",
        title: "Safety markers",
        paragraphs: [
          "Laboratory analyses consistently show that at typical bodybuilding doses (10-20mg/day), RAD-140 causes moderate suppression of natural testosterone production but has limited impact on liver enzymes or lipid profile when used for standard cycle lengths.",
        ],
      },
    ],
  },
  {
    slug: "peptides-vs-sarms-cutting",
    title: "Peptides vs SARMs for Cutting: Which Is More Effective for Preserving Muscle Mass",
    description:
      "A head-to-head look at peptides and SARMs when the goal is maximum fat loss without sacrificing hard-earned muscle.",
    date: "20 Mar 2025",
    readTime: "6 min read",
    views: "3.5k views",
    tags: ["Peptides", "SARMs", "Cutting"],
    image: ASTRA_IMAGE_5,
    toc: [
      { id: "peptides-for-cutting", text: "Peptides for cutting" },
      { id: "sarms-for-cutting", text: "SARMs for cutting" },
      { id: "head-to-head", text: "Head-to-head comparison" },
    ],
    intro:
      "When the goal is to lose fat while preserving lean mass, both peptides and SARMs offer compelling options. The choice depends on experience level, budget, and tolerance for different side effect profiles.",
    sections: [
      {
        id: "peptides-for-cutting",
        title: "Peptides for cutting",
        paragraphs: [
          "Peptides like GHRP-6, CJC-1295 and Ipamorelin work by stimulating natural growth hormone pulses. The anabolic effect is mild but highly preserving during caloric deficit.",
        ],
      },
      {
        id: "sarms-for-cutting",
        title: "SARMs for cutting",
        paragraphs: [
          "Ostarine (MK-2866) and Cardarine (GW-501516) are the cornerstones of a cutting SARM stack. Ostarine preserves muscle while Cardarine enhances fat oxidation and endurance.",
        ],
      },
      {
        id: "head-to-head",
        title: "Head-to-head comparison",
        paragraphs: [
          "Peptides are milder, safer for long-term use, and have no androgen receptor activation. SARMs are faster-acting but come with suppression. For first-time cutters, peptides are usually the better entry point.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export const defaultBlogPost = blogPosts[0];
