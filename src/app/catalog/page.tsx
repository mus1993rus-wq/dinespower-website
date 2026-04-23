"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Pagination from "@/components/Pagination";
import { catalogProducts, type CatalogProduct } from "@/data/catalog-products";

const categoryBrands: Record<string, string[]> = {
  injectable: ["Astera Labs", "Deus Medical"],
  oral: ["Astera Labs", "Deus Medical"],
  "fat-burn": ["Astera Labs", "Deus Medical", "Biaxol"],
  "peptides-hgh": ["Astera Labs", "Deus Medical", "Biaxol"],
  sarms: ["Astera Labs", "Deus Medical", "Biaxol"],
  pct: ["Astera Labs", "Deus Medical", "Biaxol"],
  energy: ["Biaxol"],
  "sex-support": ["Astera Labs", "Deus Medical"],
  health: ["Biaxol"],
  stacks: ["Deus Medical", "Biaxol"],
  "amino-acids": ["Astera Labs"],
};

// Categories with only one brand — auto-redirect to that brand
const singleBrandCategories: Record<string, string> = {
  energy: "biaxol",
  health: "biaxol",
  "amino-acids": "astera-labs",
};

const sortOptions = ["Most Popular", "Price: Low to High", "Price: High to Low", "Newest"];

const faqItems = [
  { q: "What is the minimum amount for the first order?", a: "There is no minimum order amount for retail customers. For wholesale/partner orders, please contact our sales team." },
  { q: "How long does delivery take?", a: "Europe: 5-14 days. USA & Worldwide: 7-21 days. We ship discreetly and provide tracking information." },
  { q: "How do we know that these products are genuine?", a: "Every product comes with a unique verification code and can be checked on the manufacturer's official website. All items are sourced directly from authorized manufacturers." },
  { q: "What if the package is lost or damaged?", a: "We offer reshipment guarantee for any packages that are lost or damaged during shipping. Contact our support team with your order details." },
  { q: "Are all products really tested in laboratories?", a: "Yes, every batch is independently tested by third-party laboratories. Lab reports are available on our Lab Tests page." },
];

const categoryList = [
  { slug: "injectable", label: "Injectable" },
  { slug: "oral", label: "Oral" },
  { slug: "fat-burn", label: "Fat Burn" },
  { slug: "sarms", label: "SARMs" },
  { slug: "peptides-hgh", label: "Peptides & HGH" },
  { slug: "pct", label: "PCT" },
  { slug: "energy", label: "Energy" },
  { slug: "sex-support", label: "Sex-Support" },
  { slug: "health", label: "Health" },
  { slug: "stacks", label: "Stacks" },
  { slug: "amino-acids", label: "Amino Acids" },
];

const categoryDescriptions: Record<string, string> = {
  injectable: "A curated selection of high-quality injectable compounds",
  oral: "Premium oral products from trusted brands",
  "fat-burn": "Effective fat-burning compounds from trusted brands",
  "peptides-hgh": "Advanced peptides for recovery and performance",
  sarms: "Performance-focused SARMs from trusted brands",
  pct: "Post-cycle therapy products",
  energy: "Energy-boosting products from trusted brands",
  "sex-support": "Support products from trusted brands",
  health: "Health products from trusted brands",
  stacks: "Pre-designed stacks for specific goals",
  "amino-acids": "Amino acid products for recovery and muscle support",
};

const brandDescriptions: Record<string, string> = {
  "Deus Medical": "DEUS MEDICAL is one of the leading Pharmaceutical manufacturing brands in India with state-of-the-art manufacturing facility situated at Kolkata.",
  "Astera Labs": "Astera Labs is one of the leading pharmaceutical companies in India.",
  "Biaxol": "Biaxol Supplements is one of the leading sports supplement stores in Europe, providing quality and trust at every step.",
};

const brandSlugToLabel: Record<string, string> = {
  "deus-medical": "Deus Medical",
  "astera-labs": "Astera Labs",
  "biaxol": "Biaxol",
};

const brandLabelToSlug: Record<string, string> = {
  "Deus Medical": "deus-medical",
  "Astera Labs": "astera-labs",
  "Biaxol": "biaxol",
};

const brandColors: Record<string, string> = {
  "Astera Labs": "#FF6701",
  "Deus Medical": "#C0202F",
  "Biaxol": "#00709F",
};

const brandBgColors: Record<string, string> = {
  "Astera Labs": "#F5ECE6",
  "Deus Medical": "#F7F3F4",
  "Biaxol": "#F2F6F7",
};

// Maps category slug + brand slug to banner image filenames
function getBannerImage(categorySlug: string | null, brandSlug: string | null): string | null {
  if (!categorySlug) return null;

  const cat = categoryList.find((c) => c.slug === categorySlug);
  if (!cat) return null;

  const brandLabel = brandSlug ? brandSlugToLabel[brandSlug] : null;

  const bannerMap: Record<string, { base: string; brandMap: Record<string, string> }> = {
    injectable: {
      base: "Injectable.png",
      brandMap: {
        "Deus Medical": "Injectable  Deus Medical.png",
        "Astera Labs": "Injectable  Astera Labs.png",
      },
    },
    oral: {
      base: "Oral.png",
      brandMap: {
        "Deus Medical": "Oral  Deus Medical.png",
        "Astera Labs": "Oral Astera Labs.png",
      },
    },
    "fat-burn": {
      base: "Fat Burn.png",
      brandMap: {
        "Deus Medical": "Fat burn   Deus Medical.png",
        "Astera Labs": "Fat burn   Astera Labs.png",
        "Biaxol": "Fat burn  Biaxol.png",
      },
    },
    sarms: {
      base: "SARMs.png",
      brandMap: {
        "Deus Medical": "SARMs Deus Medical.png",
        "Astera Labs": "SARMs  Astera Labs.png",
        "Biaxol": "SARMs Biaxol.png",
      },
    },
    "peptides-hgh": {
      base: "Peptides & HGH.png",
      brandMap: {
        "Deus Medical": "Peptides & HCG   Deus Medical.png",
        "Astera Labs": "Peptides & HCG  Astera Labs.png",
        "Biaxol": "Peptides & HCG   Biaxol.png",
      },
    },
    pct: {
      base: "",
      brandMap: {},
    },
    energy: {
      base: "Energy.png",
      brandMap: {
        "Biaxol": "Energy Biaxol.png",
      },
    },
    "sex-support": {
      base: "Sex-Support.png",
      brandMap: {
        "Deus Medical": "Sex-Support Deus Medical.png",
        "Astera Labs": "Sex-Support Astera Labs.png",
      },
    },
    health: {
      base: "Health.png",
      brandMap: {
        "Biaxol": "Health Biaxol.png",
      },
    },
    stacks: {
      base: "Stacks.png",
      brandMap: {
        "Deus Medical": "Stacks Deus Medical.png",
        "Biaxol": "Stacks Biaxol.png",
      },
    },
    "amino-acids": {
      base: "Amino Acids.png",
      brandMap: {
        "Astera Labs": "Amino Acids Astera Labs.png",
      },
    },
  };

  const entry = bannerMap[categorySlug];
  if (!entry) return null;

  if (brandLabel && entry.brandMap[brandLabel]) {
    return `/images/shop/banners/${entry.brandMap[brandLabel]}`;
  }

  if (entry.base) {
    return `/images/shop/banners/${entry.base}`;
  }

  return null;
}

/* ------------------------------------------------------------------ */
/*  SEO content per category (from dinespower.to)                     */
/* ------------------------------------------------------------------ */

const categorySEO: Record<string, { heading: string; paragraphs: string[] }> = {
  injectable: {
    heading: "What is an injectable form of preparation?",
    paragraphs: [
      "An injection in bodybuilding is a procedure that involves the introduction of a preparation into the tissues of the body using a syringe and needle. This manipulation is the most common procedure in strength sports. The quality of its implementation directly affects the athlete's appearance, physiological capabilities, and condition.",
      "Unlike tablets, injectable supplements for bodybuilding enter the bloodstream unchanged and in full. Due to this, preparations are used in a smaller dosage, their excess does not accumulate in the tissues and does not harm the body.",
      "In the Dinespower online store, you can order injectable steroids for sale online with delivery throughout Europe. We offer only proven products with a quality guarantee. All products in our catalog have undergone comprehensive laboratory testing for purity and effectiveness.",
      "We are interested in our customers consistently achieving the expected result. We provide not only fast and reliable goods sales but also an appropriate level of consulting support.",
    ],
  },
  oral: {
    heading: "What is the oral form of preparations?",
    paragraphs: [
      "Oral steroids are taken orally and then swallowed. This is the most common and convenient way to take pharmacological preparations in bodybuilding. Tablets, capsules, powders, syrups, etc., are often taken this way. Steroid tablets dissolve well and are absorbed in the stomach cavity, providing maximum effect from the intake.",
      "Many athletes note the convenience of this method of taking steroids. After all, to achieve the desired result, they do not need to resort to injections and the help of medical personnel. In addition, steroid tablets for bodybuilding are usually easy to swallow.",
      "In our online store, you can buy oral steroids for bodybuilding in Europe. We have everything that professional bodybuilders and people involved in sports need. We offer the best steroid tablets and deliver them throughout Europe.",
      "If you want to buy oral steroids, contact Dinespower. We offer original, high-quality products from leading global manufacturers. Our products will help you maintain or increase muscle mass, lose excess weight, get a boost of energy, and add endurance.",
    ],
  },
  "fat-burn": {
    heading: "What are fat burners, and why are they needed?",
    paragraphs: [
      "Fat burner supplements are preparations that reduce fat deposits in the body. They speed up metabolism, suppress appetite, and improve thermogenesis. The best fat burning supplements include active components of natural and synthetic origin. They help improve physical activity and endurance.",
      "Natural ingredients are most often used to produce fat loss supplements: guarana, yohimbe, dietary fiber, green tea extract, raspberry ketone, etc. All this helps to burn belly fat faster and in other parts of the body. If these factors are supplemented with daily training, the body's fat mass will begin to decrease rapidly.",
      "If you want high-quality body relief with a low percentage of subcutaneous fat, you should prefer fat loss injections. They will help you achieve the desired result faster without losing muscle mass.",
      "To achieve maximum effect, you can combine bodybuilding fat burner with other types of sports nutrition. Experts recommend taking body fat burning supplements no more than twice a day: the first time in the morning, half an hour before breakfast, and the second, half an hour before training.",
    ],
  },
  "peptides-hgh": {
    heading: "For what bodybuilding purposes can growth hormone be used?",
    paragraphs: [
      "Human growth hormone (HGH) is a peptide hormone the pituitary gland produces. During life, the level of growth hormone production changes depending on age. It peaks in childhood, usually between 10 and 14 years. After that, it begins to decline gradually. By the age of 30, HGH levels drop by about 14% compared to their peak. That is why many athletes take HGH supplements.",
      "Peptides are the most important components of many body processes. They are actively involved in regulating the nervous, digestive, musculoskeletal, hormonal, circulatory, and other systems. An improper diet can cause a peptide deficiency and sharply decrease the body's capabilities.",
      "You can buy peptides for muscle growth through injection in our online store. We are responsible for the quality of goods and offer only 100% original products. We offer many pharmacological preparations necessary for athletes of different sports, experiences, and training levels.",
      "Original products, professional staff, and reasonable prices allow us to remain the best in the sports supplements industry. We carefully check each batch so you have a pleasant experience when buying human growth hormones.",
    ],
  },
  sarms: {
    heading: "What are SARMs, and why do you need them?",
    paragraphs: [
      "SARMs are a special class of compounds that interact with androgen receptors in the body. Unlike traditional anabolic steroids, the safest SARMs selectively affect specific muscles and bones without affecting other organs (liver or prostate). This selectivity makes SARMs an attractive option for those who want to improve endurance and achieve impressive athletic results.",
      "If you want to improve your athletic performance, we recommend buying SARMs supplements for sale and personal use. This is a great solution for weightlifters, bodybuilders, and fitness enthusiasts. Athletes in various sports use SARMs for muscle growth as a way to gain a competitive advantage without resorting to banned substances.",
      "If you do not know where to buy SARMs in Europe, contact the Dinespower online store. We work only with trusted suppliers and brands. All products in our online store have undergone complete examinations and do not contain prohibited components.",
      "On the Dinespower website, you can buy SARMs online in just a few minutes. With Dinespower, you can make your dreams of a beautiful and fit body come true. Many of our customers call us the best SARMs shop Europe.",
    ],
  },
  pct: {
    heading: "What is Post Cycle Therapy (PCT)?",
    paragraphs: [
      "Post cycle therapy PCT is a complex of preparations and sports supplements that are used in bodybuilding and strength sports to minimize side effects and complications after a cycle of steroid hormones or prohormones. PCT is especially important for athletes who simultaneously take large doses of hormones or several anabolic preparations.",
      "Without PCT steroids, restoring your natural testosterone levels can be slow and difficult. Once you stop taking steroids, you will have little or no testosterone left in your body. This sudden drop can cause fatigue, muscle loss, mood swings, low libido, and anxiety. Ignoring PCT drugs makes it difficult for your body to recover fully.",
      "You need to start taking PCT pills immediately after completing the anabolic steroid course. There is no need to delay because this will only make things worse for the body. If you plan to stop taking anabolics for more than three months, then natural PCT post cycle therapy will help you fully restore your body.",
      "In the Dinespower online store, you can buy the best post cycle therapy for SARMs. We are responsible for the quality of goods and offer only genuine preparations with quality certificates. Every athlete, from a beginner to a professional bodybuilder, will find the best PCT supplement on the Dinespower website.",
    ],
  },
  energy: {
    heading: "What are human endurance and energy reserves?",
    paragraphs: [
      "Endurance in sports is the ability of muscles to maintain the force of contractions during prolonged intensive work. In bodybuilding, endurance plays a vital role since the more muscle fibers you can use during training, the faster you will achieve the desired results.",
      "A lack of energy is a severe test for an athlete, especially during intense physical activity. Both beginners and experienced athletes can feel a loss of strength. Energy boosting supplements can help compensate for the lack of strength and significantly increase endurance.",
      "Modern manufacturers of pharmacological products offer many supplements for focus and energy. Some of them are designed for vigor and rapid strength gain. Others help stabilize metabolic processes in the muscles. Before taking increase energy supplements, carefully study their properties, composition, and dosages.",
      "If you want to order high energy supplements with delivery across Europe, contact the Dinespower online store. We offer our customers a quality guarantee, regular product updates, promotions, discounts, and convenient payment methods.",
    ],
  },
  "sex-support": {
    heading: "What is potency?",
    paragraphs: [
      "Potency is an integral part of male sexual health, covering various aspects, including libido, erectile function, ejaculation, and reproductive health. This is the ability of a man to perform sexual intercourse, that is, to maintain an erection and achieve ejaculation.",
      "Potency is affected by factors such as testosterone levels, hormonal balance, physical activity, nutrition, psychological state, and chronic diseases. Potency problems, such as erectile dysfunction, can occur due to stress, depression, hormonal imbalances, cardiovascular diseases, excessive physical activity, and medication.",
      "Steroids and sex drive are interrelated concepts. Excessively intense training can lead to serious problems with erection. In addition, anabolic steroids can negatively affect potency. The only correct solution is safe sex supplements, which will help quickly restore lost sexual functions without harm to health.",
      "Certified supplements for sexual desire and libido are an essential part of taking steroids. In the Dinespower online store, you can buy the best supplements to increase sex drive. We deliver throughout Europe.",
    ],
  },
  health: {
    heading: "How is a person's well-being formed?",
    paragraphs: [
      "The absence of diseases does not mean that a person is healthy. Good health depends on a complex of factors. Only an integrated approach will improve a person's well-being and protect against adverse external factors.",
      "The immune system is a complex of cells, tissues, and organs that work together to protect the body from viruses, infections, and bacteria. To cope with the constant onslaught of negative factors, it needs adequate nutrition, including vitamins, minerals, and probiotics. Health supplements, which contain concentrated forms of various nutrients, can solve this problem.",
      "Health supplements are an excellent solution for professional athletes who must saturate their bodies with beneficial micro and macroelements. They increase the effectiveness of training, speed up the body's recovery from injuries, and replenish energy reserves.",
      "At Dinespower, you can buy original, certified, effective health supplements online. We deliver throughout Europe. We value our reputation and work only with reputable manufacturers. The Dinespower team will help you become more beautiful, achieve sports victories, improve your health, and find the best version of yourself.",
    ],
  },
  stacks: {
    heading: "The best bodybuilding stacks in the Dinespower online store",
    paragraphs: [
      "When you want to gain muscle mass, increase strength and improve your physical fitness, it is important to use not just one drug, but a well-chosen combination. That is why bodybuilding supplements stack is a great solution for you if you want to take drugs as effectively as possible. In the Dinespower online store you will find the best stack for bodybuilding that will help you achieve your goals in the shortest possible time.",
      "A well-composed bodybuilding stack is a well-thought-out set of components, where each enhances the effect of the other. The site has a bodybuilding steroid stack for professionals, as well as the best natural stack assemblies for those who prefer legal and safe solutions.",
      "Each athlete is unique. Someone needs to build up dry muscle mass as quickly as possible, someone needs to increase strength and volume, and someone strives for an ideal relief. That is why Dinespower offers a free consultation. They will help you choose the best stack for bodybuilding, which will best suit your goals and level of training.",
      "When you buy bodybuilding stacks in Dinespower, you get not only high-quality products, but also high-quality service. You can buy a bodybuilding stack online without leaving your home, and be sure that you will receive only a quality product.",
    ],
  },
  "amino-acids": {
    heading: "Amino Acids: High-Quality and Reliable Products at Dinespower",
    paragraphs: [
      "Sports demand a deep understanding of the body's biochemistry from every athlete. At the core of athletic success are amino acids — the fundamental building blocks from which all protein structures of the body are formed. Properly structured nutrition allows you to optimize metabolism and ensures stable progress in performance.",
      "Under conditions of intense physical load, sports place serious stress on all systems of the body. The main burden falls on the skeletal framework and muscle tissues, where amino acids act as the primary recovery resource. Professional bodybuilding has proven that timely recovery directly depends on the concentration of leucine and valine in the blood.",
      "The biological growth of new muscle fibers is initiated through the activation of signaling pathways, where amino acids serve as key triggers. The core mechanism behind bodybuilding is the stimulation of protein synthesis. Strength sports require a continuous supply of arginine (a vasodilator) to improve blood flow.",
      "Dinespower offers a wide selection of essential products for everyone whose priority is sports and health. In the store, you can buy certified supplements that have passed strict quality control. Our amino acids help ensure stable muscle growth and eliminate prolonged soreness.",
    ],
  },
};


/* ------------------------------------------------------------------ */
/*  Brand badge component                                              */
/* ------------------------------------------------------------------ */

function CatalogContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const categorySlug = searchParams.get("category");
  const brandSlug = searchParams.get("brand");

  const [activeSort, setActiveSort] = useState(0);
  const [sortOpen, setSortOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [inStockChecked, setInStockChecked] = useState(true);
  const [outOfStockChecked, setOutOfStockChecked] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(2);
  const [seoExpanded, setSeoExpanded] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const currentCategory = categoryList.find((c) => c.slug === categorySlug);
  const currentBrandLabel = brandSlug ? brandSlugToLabel[brandSlug] : null;
  const bannerImage = getBannerImage(categorySlug, brandSlug);

  // Auto-redirect for single-brand categories
  useEffect(() => {
    if (categorySlug && singleBrandCategories[categorySlug] && !brandSlug) {
      router.replace(`/catalog?category=${categorySlug}&brand=${singleBrandCategories[categorySlug]}`);
    }
  }, [categorySlug, brandSlug, router]);

  // No "All Products" page — redirect to home if no category
  useEffect(() => {
    if (!categorySlug) {
      router.replace("/");
    }
  }, [categorySlug, router]);

  // Filter products (hook must be before any early return)
  const filteredProducts = useMemo(() => {
    let list: CatalogProduct[] = catalogProducts;

    if (categorySlug) {
      list = list.filter((p) => p.category === categorySlug);
    }

    if (currentBrandLabel) {
      list = list.filter((p) => p.brand === currentBrandLabel);
    }

    // Availability filter
    if (inStockChecked && !outOfStockChecked) {
      list = list.filter((p) => p.inStock !== false);
    } else if (outOfStockChecked && !inStockChecked) {
      list = list.filter((p) => p.inStock === false);
    }

    // Price filter
    list = list.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    if (activeSort === 1) {
      list = [...list].sort((a, b) => a.price - b.price);
    } else if (activeSort === 2) {
      list = [...list].sort((a, b) => b.price - a.price);
    }

    return list;
  }, [categorySlug, currentBrandLabel, activeSort, inStockChecked, outOfStockChecked, priceRange]);

  if (!categorySlug) {
    return null;
  }

  const bannerDescription = currentBrandLabel
    ? brandDescriptions[currentBrandLabel] || ""
    : categorySlug
    ? categoryDescriptions[categorySlug] || ""
    : "";

  // Brands available for the current category
  const brandsForCategory = categorySlug ? (categoryBrands[categorySlug] || []) : ["Astera Labs", "Deus Medical", "Biaxol"];

  // Build active filters list — brand is navigation, NOT a removable filter
  const activeFilters: { label: string; onRemove: () => void }[] = [];
  if (inStockChecked && !outOfStockChecked) {
    activeFilters.push({ label: "In stock", onRemove: () => setInStockChecked(false) });
  }
  if (outOfStockChecked && !inStockChecked) {
    activeFilters.push({ label: "Out of stock", onRemove: () => setOutOfStockChecked(false) });
  }

  function clearAllFilters() {
    setInStockChecked(true);
    setOutOfStockChecked(false);
    setPriceRange([0, 100000]);
  }

  return (
    <>
      <Header />
      <main className="min-h-screen relative z-10 bg-white">
        {/* Breadcrumb - Figma style: Home / Category / Brand */}
        <div className="max-w-[1340px] mx-auto py-3 px-4 ">
          <div className="flex items-center gap-2 text-sm text-[#7E7E7E]">
            <Link href="/" className="hover:text-[#181818] transition-colors">Home</Link>
            {currentCategory && (
              <>
                <span>/</span>
                {currentBrandLabel ? (
                  <Link
                    href={`/catalog?category=${categorySlug}`}
                    className="hover:text-[#181818] transition-colors"
                  >
                    {currentCategory.label}
                  </Link>
                ) : (
                  <span className="text-[#181818]">{currentCategory.label}</span>
                )}
              </>
            )}
            {!currentCategory && !currentBrandLabel && (
              <>
                <span>/</span>
                <span className="text-[#181818]">Catalog</span>
              </>
            )}
            {currentBrandLabel && (
              <>
                <span>/</span>
                <span className="text-[#181818]">{currentBrandLabel}</span>
              </>
            )}
          </div>
        </div>

        {/* Banner */}
        {bannerImage ? (
          <div className="max-w-[1340px] mx-auto mb-6 tablet:mb-7 desktop:mb-8 px-4 ">
            <div className="relative h-[160px] tablet:h-[220px] desktop:h-[260px] wide:h-[278px] rounded-[16px] overflow-hidden" style={{ backgroundColor: currentBrandLabel ? (brandBgColors[currentBrandLabel] || '#F7F7F7') : '#F7F7F7' }}>
              <Image
                src={bannerImage}
                alt={`${currentCategory?.label || "Catalog"}${currentBrandLabel ? ` - ${currentBrandLabel}` : ""}`}
                fill
                priority
                sizes="100vw"
                className="object-cover"

              />
              <div className="absolute left-5 tablet:left-8 desktop:left-[48px] wide:left-[60px] top-1/2 -translate-y-1/2 max-w-[60%] tablet:max-w-[55%] desktop:max-w-[50%]">
                <h1 className="text-[20px] tablet:text-[28px] desktop:text-[34px] wide:text-[40px] font-black text-[#181818] uppercase leading-[24px] tablet:leading-[32px] desktop:leading-[38px] wide:leading-[44px]">
                  {currentCategory?.label || "All Products"}
                </h1>
                {currentBrandLabel && (
                  <h2
                    className="text-[20px] tablet:text-[28px] desktop:text-[34px] wide:text-[40px] font-extrabold italic uppercase leading-[24px] tablet:leading-[32px] desktop:leading-[38px] wide:leading-[44px] mt-1"
                    style={{ color: brandColors[currentBrandLabel] || "#FF6701" }}
                  >
                    {currentBrandLabel}
                  </h2>
                )}
                {bannerDescription && (
                  <p className="hidden tablet:block text-[13px] desktop:text-[15px] wide:text-[16px] text-[#000000] leading-[18px] desktop:leading-[20px] wide:leading-[22px] mt-2 desktop:mt-3 max-w-[400px] capitalize">
                    {bannerDescription}
                  </p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-[1340px] mx-auto mb-6 tablet:mb-7 desktop:mb-8 px-4 ">
            <div className="relative h-[160px] tablet:h-[220px] desktop:h-[260px] wide:h-[278px] rounded-[16px] overflow-hidden bg-[#F7F7F7]">
              <div className="absolute left-5 tablet:left-8 desktop:left-[48px] wide:left-[60px] top-1/2 -translate-y-1/2 max-w-[60%] tablet:max-w-[55%] desktop:max-w-[50%]">
                <h1 className="text-[20px] tablet:text-[28px] desktop:text-[34px] wide:text-[40px] font-black text-[#181818] uppercase leading-[24px] tablet:leading-[32px] desktop:leading-[38px] wide:leading-[44px]">
                  {currentCategory?.label}
                </h1>
                {bannerDescription && (
                  <p className="text-[13px] desktop:text-[15px] wide:text-[16px] text-[#4A4A4A] leading-[18px] desktop:leading-[20px] wide:leading-[22px] mt-2">
                    {bannerDescription}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="max-w-[1340px] mx-auto flex gap-6 wide:gap-6 pb-16 px-4 ">
          {/* Sidebar Filters — visible only from desktop (≥961) */}
          <aside className="hidden desktop:flex desktop:w-[240px] wide:w-[256px] shrink-0 flex-col gap-4">
            {/* Brands card — only if more than 1 brand */}
            {brandsForCategory.length > 1 && (
              <div className="bg-white border border-[#E7E7E7] rounded-[12px] p-2 flex flex-col">
                {brandsForCategory.map((b) => {
                  const isActive = brandSlug === brandLabelToSlug[b];
                  return (
                    <Link
                      key={b}
                      href={`/catalog?category=${categorySlug}&brand=${brandLabelToSlug[b]}`}
                      className={`flex items-center justify-between px-4 py-3 rounded-[8px] transition-colors ${
                        isActive ? "bg-[#F7F7F7]" : "hover:bg-[#F7F7F7]"
                      }`}
                    >
                      <span className="text-[14px] font-semibold text-[#181818] leading-5">{b}</span>
                      {isActive && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M9 6l6 6-6 6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </Link>
                  );
                })}
                {currentBrandLabel && (
                  <>
                    <div className="h-px bg-[#E7E7E7] mx-4 my-1" />
                    <Link
                      href={`/catalog?category=${categorySlug}`}
                      className="flex items-center px-4 py-3 rounded-[8px] text-[14px] font-semibold text-[#181818] leading-5 hover:bg-[#F7F7F7] transition-colors"
                    >
                      See All
                    </Link>
                  </>
                )}
              </div>
            )}

            {/* Availability card */}
            <div className="bg-white border border-[#E7E7E7] rounded-[12px] p-4">
              <h4 className="text-[12px] text-[#7E7E7E] leading-4 mb-3">Availability</h4>
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <span
                    onClick={() => setInStockChecked(!inStockChecked)}
                    className={`w-5 h-5 rounded-[4px] flex items-center justify-center shrink-0 transition-colors ${
                      inStockChecked ? "bg-[#181818]" : "border border-[#CBCBCB] bg-white"
                    }`}
                  >
                    {inStockChecked && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </span>
                  <span className="text-[14px] text-[#181818] leading-5">In Stock</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <span
                    onClick={() => setOutOfStockChecked(!outOfStockChecked)}
                    className={`w-5 h-5 rounded-[4px] flex items-center justify-center shrink-0 transition-colors ${
                      outOfStockChecked ? "bg-[#181818]" : "border border-[#CBCBCB] bg-white"
                    }`}
                  >
                    {outOfStockChecked && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </span>
                  <span className="text-[14px] text-[#181818] leading-5">Out of Stock</span>
                </label>
              </div>
            </div>

            {/* Price card */}
            <div className="bg-white border border-[#E7E7E7] rounded-[12px] p-4">
              <h4 className="text-[12px] text-[#7E7E7E] leading-4 mb-3">Price</h4>
              <div className="flex gap-2 items-center">
                <div className="flex items-center border border-[#E7E7E7] rounded-[8px] h-10 flex-1 px-3">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Math.min(+e.target.value, priceRange[1]), priceRange[1]])}
                    className="w-full text-[14px] text-[#181818] outline-none bg-transparent text-center"
                  />
                </div>
                <div className="flex items-center border border-[#E7E7E7] rounded-[8px] h-10 flex-1 px-3">
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Math.max(+e.target.value, priceRange[0])])}
                    className="w-full text-[14px] text-[#181818] outline-none bg-transparent text-center"
                  />
                </div>
              </div>
              {/* Dual-range slider */}
              <div className="relative h-6 mt-4">
                {/* Track background */}
                <div className="absolute top-1/2 -translate-y-1/2 w-full h-1 bg-[#E7E7E7] rounded-full" />
                {/* Active range */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 h-1 bg-[#181818] rounded-full"
                  style={{
                    left: `${(priceRange[0] / 500) * 100}%`,
                    right: `${100 - (priceRange[1] / 500) * 100}%`,
                  }}
                />
                {/* Min handle */}
                <input
                  type="range"
                  min={0}
                  max={500}
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Math.min(+e.target.value, priceRange[1]), priceRange[1]])}
                  className="dual-range absolute top-0 left-0 w-full h-6 appearance-none bg-transparent pointer-events-none"
                  style={{ zIndex: priceRange[0] > 475 ? 5 : 3 }}
                />
                {/* Max handle */}
                <input
                  type="range"
                  min={0}
                  max={500}
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Math.max(+e.target.value, priceRange[0])])}
                  className="dual-range absolute top-0 left-0 w-full h-6 appearance-none bg-transparent pointer-events-none"
                  style={{ zIndex: 4 }}
                />
              </div>
            </div>
          </aside>

          {/* Products area */}
          <div className="flex-1 min-w-0">
            {/* Filters + Sort row — mobile + tablet only — Figma 2078:29093 */}
            <div className="desktop:hidden flex items-center gap-3 mb-4">
              {/* Filters — black button, equal half */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="cursor-pointer flex-1 basis-0 min-w-0 bg-[#181818] hover:bg-black rounded-[8px] flex items-center justify-center gap-4 px-5 py-3 text-[14px] font-semibold text-white leading-5 transition-colors"
              >
                {/* vuesax/bold/candle-2 — filter sliders icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M8 2c-.6 0-1 .4-1 1v2H5c-.6 0-1 .4-1 1s.4 1 1 1h6c.6 0 1-.4 1-1s-.4-1-1-1H9V3c0-.6-.4-1-1-1zM16 9c-.6 0-1 .4-1 1v2h-2c-.6 0-1 .4-1 1s.4 1 1 1h6c.6 0 1-.4 1-1s-.4-1-1-1h-2v-2c0-.6-.4-1-1-1zM8 16c-.6 0-1 .4-1 1v2H5c-.6 0-1 .4-1 1s.4 1 1 1h6c.6 0 1-.4 1-1s-.4-1-1-1H9v-2c0-.6-.4-1-1-1z"/>
                </svg>
                <span>Filters</span>
                {activeFilters.length > 0 && (
                  <span className="bg-[#FF6701] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center leading-none shrink-0">{activeFilters.length}</span>
                )}
              </button>
              {/* Sort — white button with selected value */}
              <div className="relative flex-1 basis-0 min-w-0">
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="cursor-pointer w-full bg-white border border-[#E7E7E7] hover:border-[#181818] rounded-[8px] flex items-center gap-2 px-5 py-3 text-[14px] font-semibold text-[#181818] leading-5 transition-colors"
                >
                  <span className="flex-1 min-w-0 text-left truncate">{sortOptions[activeSort]}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`shrink-0 transition-transform ${sortOpen ? "rotate-180" : ""}`}>
                    <path d="M4 6L8 10L12 6" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {sortOpen && (
                  <div className="absolute top-full right-0 mt-1 bg-white border border-[#E7E7E7] rounded-lg shadow-lg z-20 w-full min-w-[180px]">
                    {sortOptions.map((opt, i) => (
                      <button
                        key={opt}
                        onClick={() => { setActiveSort(i); setSortOpen(false); }}
                        className={`block w-full text-left px-4 py-2.5 text-[14px] transition-colors ${
                          i === activeSort ? "text-[#FF6701] font-semibold bg-[#FFF8F3]" : "text-[#181818] hover:bg-[#F7F7F7]"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Active filters (mobile+tablet): small chips row */}
            {activeFilters.length > 0 && (
              <div className="desktop:hidden flex items-center gap-2 flex-wrap mb-4">
                {activeFilters.map((f) => (
                  <button
                    key={f.label}
                    onClick={f.onRemove}
                    className="flex items-center gap-1.5 bg-[#F7F7F7] border border-[#E7E7E7] rounded-lg px-3 py-1.5 text-[13px] text-[#181818] hover:border-[#FF6701] transition-colors"
                  >
                    {f.label}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M9 3L3 9M3 3L9 9" stroke="#7E7E7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                ))}
              </div>
            )}

            {/* Active filters + Sort row — desktop only */}
            <div className="hidden desktop:flex items-center justify-between gap-3 mb-5 wide:mb-6">
              {/* Active filters */}
              <div className="flex items-center gap-2 flex-wrap">
                {activeFilters.length > 0 && (
                  <>
                    <span className="text-sm text-[#7E7E7E]">Active filters:</span>
                    {activeFilters.map((f) => (
                      <button
                        key={f.label}
                        onClick={f.onRemove}
                        className="flex items-center gap-1.5 bg-[#F7F7F7] border border-[#E7E7E7] rounded-lg px-3 py-1.5 text-sm text-[#181818] hover:border-[#FF6701] transition-colors"
                      >
                        {f.label}
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M9 3L3 9M3 3L9 9" stroke="#7E7E7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    ))}
                    {activeFilters.length > 1 && (
                      <button
                        onClick={clearAllFilters}
                        className="text-sm font-semibold text-[#FF6701] hover:underline ml-1"
                      >
                        Clear All
                      </button>
                    )}
                  </>
                )}
              </div>

              {/* Sort dropdown */}
              <div className="relative">
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="flex items-center gap-2 border border-[#E7E7E7] rounded-lg px-4 py-2 text-sm text-[#181818] hover:border-[#B6B6B6] transition-colors"
                >
                  {sortOptions[activeSort]}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform ${sortOpen ? "rotate-180" : ""}`}>
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="#181818" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {sortOpen && (
                  <div className="absolute top-full right-0 mt-1 bg-white border border-[#E7E7E7] rounded-lg shadow-lg z-20 min-w-[180px]">
                    {sortOptions.map((opt, i) => (
                      <button
                        key={opt}
                        onClick={() => { setActiveSort(i); setSortOpen(false); }}
                        className={`block w-full text-left px-4 py-2.5 text-sm transition-colors ${
                          i === activeSort
                            ? "text-[#FF6701] font-semibold bg-[#FFF8F3]"
                            : "text-[#181818] hover:bg-[#F7F7F7]"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Grid — 2 cols mobile, 3 tablet+desktop, 4 wide; ProductCards stretched via globals.css */}
            <div className="catalog-grid grid grid-cols-2 tablet:grid-cols-3 wide:grid-cols-4 gap-3 tablet:gap-4">
              {filteredProducts.map((p, i) => (
                <ProductCard key={i} {...p} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16 text-[#7E7E7E]">
                <p className="text-lg font-semibold mb-2">No products found</p>
                <p className="text-sm">Try adjusting your filters to find what you&apos;re looking for.</p>
              </div>
            )}

            {/* Pagination — Figma 1249:6504 */}
            {filteredProducts.length > 0 && (
              <Pagination currentPage={1} totalPages={12} onPageChange={() => {}} />
            )}

            {/* SEO text block — inside right column (per category from dinespower.to) */}
            {(() => {
              const seo = categorySlug ? categorySEO[categorySlug] : null;
              if (!seo) return null;
              return (
                <div className="pt-8 tablet:pt-10 desktop:pt-12 pb-6 tablet:pb-8">
                  <h3 className="text-[20px] tablet:text-[24px] desktop:text-[28px] font-extrabold text-[#181818] leading-[26px] tablet:leading-[30px] desktop:leading-[34px] mb-4 tablet:mb-5 desktop:mb-6">
                    {seo.heading}
                  </h3>
                  <div className={`relative text-[13px] tablet:text-[14px] text-[#7E7E7E] leading-[20px] tablet:leading-[22px] flex flex-col gap-3 ${!seoExpanded ? "max-h-[72px] overflow-hidden" : ""}`}>
                    {seo.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                    {!seoExpanded && <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-white to-transparent" />}
                  </div>
                  <button onClick={() => setSeoExpanded(!seoExpanded)} className="cursor-pointer flex items-center gap-1 text-[14px] font-semibold text-[#181818] mt-4 hover:underline">
                    {seoExpanded ? 'Show Less' : 'Read More'}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`transition-transform ${seoExpanded ? 'rotate-180' : ''}`}>
                      <path d="M4 6L8 10L12 6" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              );
            })()}

            {/* FAQ section — inside right column */}
            <div className="pb-12 tablet:pb-16">
              <h2 className="text-[20px] tablet:text-[24px] desktop:text-[28px] font-extrabold text-[#181818] leading-[26px] tablet:leading-[30px] desktop:leading-[34px] mb-4 tablet:mb-5 desktop:mb-6">Frequently Asked Questions</h2>
              <div className="flex flex-col">
                {faqItems.map((item, i) => (
                  <div key={i} className="border-b border-[#E7E7E7]">
                    <button
                      onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                      className="w-full flex items-start justify-between py-4 tablet:py-5 cursor-pointer gap-3 tablet:gap-4 text-left"
                    >
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        <Image src="/images/shop/faq-question-icon.svg" alt="?" width={24} height={24} className="shrink-0 mt-0.5" />
                        <span className="text-[14px] tablet:text-[16px] font-semibold text-[#181818] text-left leading-5 tablet:leading-6">{item.q}</span>
                      </div>
                      <div className={`w-[36px] h-[36px] tablet:w-[40px] tablet:h-[40px] rounded-[8px] flex items-center justify-center shrink-0 transition-colors ${openFAQ === i ? 'bg-[#E7E7E7]' : 'bg-[#F7F7F7]'}`}>
                        <span className="text-[20px] leading-none text-[#181818]">{openFAQ === i ? '−' : '+'}</span>
                      </div>
                    </button>
                    {openFAQ === i && (
                      <div className="pb-4 tablet:pb-5 pl-[36px] pr-2 tablet:pr-[56px] text-[13px] tablet:text-[14px] text-[#7E7E7E] leading-[20px] tablet:leading-[22px]">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="relative z-0">
        <Footer />
      </div>

      {/* Mobile + Tablet Filters modal */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[200] desktop:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute inset-x-0 bottom-0 tablet:inset-0 tablet:flex tablet:items-center tablet:justify-center tablet:bg-transparent">
            <div className="bg-[#F7F7F7] rounded-t-[16px] tablet:rounded-[16px] w-full tablet:max-w-[420px] tablet:max-h-[85vh] max-h-[90vh] overflow-y-auto flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#E7E7E7] bg-white tablet:bg-transparent tablet:border-b-0">
                <h3 className="text-[16px] font-semibold text-[#7E7E7E]">Filters</h3>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  aria-label="Close"
                  className="cursor-pointer w-8 h-8 flex items-center justify-center hover:bg-[#F7F7F7] rounded transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="#181818" strokeWidth="2" strokeLinecap="round"/></svg>
                </button>
              </div>

              <div className="flex flex-col gap-3 p-3 tablet:p-4">
                {/* Brands */}
                {brandsForCategory.length > 1 && (
                  <div className="bg-white border border-[#E7E7E7] rounded-[12px] p-2 flex flex-col">
                    {brandsForCategory.map((b) => {
                      const isActive = brandSlug === brandLabelToSlug[b];
                      return (
                        <Link
                          key={b}
                          href={`/catalog?category=${categorySlug}&brand=${brandLabelToSlug[b]}`}
                          onClick={() => setMobileFiltersOpen(false)}
                          className={`flex items-center justify-between px-4 py-3 rounded-[8px] transition-colors ${
                            isActive ? "bg-[#F7F7F7]" : "hover:bg-[#F7F7F7]"
                          }`}
                        >
                          <span className="text-[14px] font-semibold text-[#181818] leading-5">{b}</span>
                          {isActive && (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          )}
                        </Link>
                      );
                    })}
                    {currentBrandLabel && (
                      <>
                        <div className="h-px bg-[#E7E7E7] mx-4 my-1" />
                        <Link
                          href={`/catalog?category=${categorySlug}`}
                          onClick={() => setMobileFiltersOpen(false)}
                          className="flex items-center px-4 py-3 rounded-[8px] text-[14px] font-semibold text-[#181818] leading-5 hover:bg-[#F7F7F7] transition-colors"
                        >
                          See All
                        </Link>
                      </>
                    )}
                  </div>
                )}

                {/* Availability */}
                <div className="bg-white border border-[#E7E7E7] rounded-[12px] p-4">
                  <h4 className="text-[12px] text-[#7E7E7E] leading-4 mb-3">Availability</h4>
                  <div className="flex flex-col gap-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <span
                        onClick={() => setInStockChecked(!inStockChecked)}
                        className={`w-5 h-5 rounded-[4px] flex items-center justify-center shrink-0 transition-colors ${
                          inStockChecked ? "bg-[#181818]" : "border border-[#CBCBCB] bg-white"
                        }`}
                      >
                        {inStockChecked && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        )}
                      </span>
                      <span className="text-[14px] text-[#181818] leading-5">In Stock</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <span
                        onClick={() => setOutOfStockChecked(!outOfStockChecked)}
                        className={`w-5 h-5 rounded-[4px] flex items-center justify-center shrink-0 transition-colors ${
                          outOfStockChecked ? "bg-[#181818]" : "border border-[#CBCBCB] bg-white"
                        }`}
                      >
                        {outOfStockChecked && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        )}
                      </span>
                      <span className="text-[14px] text-[#181818] leading-5">Out of Stock</span>
                    </label>
                  </div>
                </div>

                {/* Price */}
                <div className="bg-white border border-[#E7E7E7] rounded-[12px] p-4">
                  <h4 className="text-[12px] text-[#7E7E7E] leading-4 mb-3">Price</h4>
                  <div className="flex gap-2 items-center">
                    <div className="flex items-center border border-[#E7E7E7] rounded-[8px] h-10 flex-1 px-3">
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Math.min(+e.target.value, priceRange[1]), priceRange[1]])}
                        className="w-full text-[14px] text-[#181818] outline-none bg-transparent text-center"
                      />
                    </div>
                    <div className="flex items-center border border-[#E7E7E7] rounded-[8px] h-10 flex-1 px-3">
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Math.max(+e.target.value, priceRange[0])])}
                        className="w-full text-[14px] text-[#181818] outline-none bg-transparent text-center"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Apply button */}
              <div className="px-3 tablet:px-4 pb-4 pt-2 sticky bottom-0 bg-[#F7F7F7]">
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="cursor-pointer w-full h-12 bg-[#FF6701] hover:bg-[#E65D00] text-white text-[16px] font-semibold rounded-[8px] transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function CatalogPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FF6701]" />
        </div>
      }
    >
      <CatalogContent />
    </Suspense>
  );
}
