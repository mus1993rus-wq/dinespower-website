// Product catalog data — one product per brand, used by /product and /product/[slug]

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  brand: "Astera Labs" | "Deus Medical" | "Biaxol";
  name: string;
  category: string;
  categoryLabel: string;
  thumbnails: string[];
  specs: ProductSpec[];
  price: number;
  oldPrice?: number;
  reviews: number;
  rating: number;
  inStockDays: string;
  overview: string;
  overviewSections: { title: string; body: string }[];
}

export const products: Product[] = [
  {
    slug: "astera-methenolone-enanthate-200",
    brand: "Astera Labs",
    name: "Methenolone Enanthate 200 Injectable Steroid In Vials",
    category: "injectable",
    categoryLabel: "Injectable",
    thumbnails: [
      "/images/shop/products/astera/methenolone-enanthate-200.webp",
      "/images/shop/products/astera/methenolone-enanthate-100.webp",
    ],
    specs: [
      { label: "Active Ingredient", value: "Methenolone Enanthate" },
      { label: "Chemical Formula", value: "C27H42O3" },
      { label: "Form", value: "Injectable solution" },
      { label: "Concentration", value: "200 mg/mL" },
      { label: "Volume", value: "10 mL vial" },
    ],
    price: 44,
    oldPrice: 56,
    reviews: 325,
    rating: 5,
    inStockDays: "5-20 days",
    overview:
      "Methenolone Enanthate 200mg by Astera Labs is an injectable anabolic steroid prized for its balanced potency and mild androgenic properties. Formulated in a pharmaceutical-grade concentration of 200mg/mL, it provides controlled, long-acting support for muscle preservation and lean mass development. The product is known for its clean profile and low estrogenic effects — popular among athletes focused on sustainable physique improvement.",
    overviewSections: [
      {
        title: "What is Methenolone Enanthate 200mg used for",
        body:
          "Used during cutting cycles to preserve muscle tissue and reduce fat. Provides slow and steady anabolic support, ideal for competition preparation and athletes pursuing lean mass gains without water retention.",
      },
      {
        title: "Benefits of Methenolone Enanthate 200mg injections",
        body:
          "Preservation of lean muscle mass in a calorie deficit; low estrogen conversion reduces water retention and bloating; long-acting formula allows stable blood levels with fewer injections.",
      },
    ],
  },
  {
    slug: "deus-3-trenbomed-150",
    brand: "Deus Medical",
    name: "3-Trenbomed 150 Injectable Steroid In Ampoules",
    category: "injectable",
    categoryLabel: "Injectable",
    thumbnails: [
      "/images/shop/products/injectable-trenbomed-150.jpg",
      "/images/shop/products/injectable-trenbomed-150.jpg",
    ],
    specs: [
      { label: "Active Ingredient", value: "Trenbolone Mix (Ace/Enan/HexaHC)" },
      { label: "Chemical Formula", value: "C26H34O3" },
      { label: "Form", value: "Injectable solution" },
      { label: "Concentration", value: "150 mg/mL" },
      { label: "Volume", value: "10 × 1 mL ampoules" },
    ],
    price: 57,
    oldPrice: 65,
    reviews: 412,
    rating: 5,
    inStockDays: "5-20 days",
    overview:
      "3-Trenbomed 150 is Deus Medical's flagship trenbolone blend combining three esters — Acetate, Enanthate and Hexahydrobenzylcarbonate — for both fast onset and long-lasting effect. Manufactured in WHO-GMP certified facilities with full batch traceability.",
    overviewSections: [
      {
        title: "What is 3-Trenbomed 150 used for",
        body:
          "A powerful cutting and recomposition compound used by intermediate and advanced athletes. The three-ester blend provides rapid initial activity from the acetate followed by extended release from enanthate and hexa esters.",
      },
      {
        title: "Benefits of using 3-Trenbomed 150",
        body:
          "Pronounced lean mass gains; dramatic improvement in muscle hardness and vascularity; minimal water retention; strong fat-burning effect via increased nutrient partitioning.",
      },
    ],
  },
  {
    slug: "biaxol-yohimbine-fat-burner",
    brand: "Biaxol",
    name: "Yohimbine Fat Burner Capsules",
    category: "fat-burn",
    categoryLabel: "Fat Burn",
    thumbnails: [
      "/images/shop/products/fat-burn-yohimbine.png",
      "/images/shop/products/fat-burn-yohimbine.png",
    ],
    specs: [
      { label: "Active Ingredient", value: "Yohimbine HCl" },
      { label: "Chemical Formula", value: "C21H26N2O3" },
      { label: "Form", value: "Capsules" },
      { label: "Concentration", value: "10 mg/capsule" },
      { label: "Pack size", value: "60 capsules" },
    ],
    price: 24,
    oldPrice: 30,
    reviews: 325,
    rating: 5,
    inStockDays: "3-10 days",
    overview:
      "Biaxol Yohimbine is a specialized alpha-2 antagonist designed to mobilize stubborn body fat, particularly in hard-to-lose regions. Best used fasted, before cardio, for maximum effect on lipolysis.",
    overviewSections: [
      {
        title: "What is Yohimbine Fat Burner used for",
        body:
          "Targeted fat loss support — Yohimbine blocks alpha-2 adrenergic receptors, which are concentrated in stubborn fat depots. When used with a caloric deficit and fasted cardio it accelerates loss of these resistant fat areas.",
      },
      {
        title: "Benefits of Yohimbine",
        body:
          "Stubborn fat mobilization; increased training focus and alertness; enhanced effectiveness of cardio sessions; no hormonal side effects.",
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export const defaultProduct = products[0];
