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
    featured: true,
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
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export const defaultBlogPost = blogPosts[0];
