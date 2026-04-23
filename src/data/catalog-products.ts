// Shared catalog products data (moved from /app/catalog/page.tsx)
// Used by /catalog and /product/[slug] for related products.

export interface CatalogProduct {
  brand: string;
  name: string;
  dosage: string;
  price: number;
  oldPrice?: number;
  image: string;
  badges: string[];
  category: string;
  inStock?: boolean;
}

export const catalogProducts: CatalogProduct[] = [
  // Injectable — Deus Medical
  { category: "injectable", brand: "Deus Medical", name: "3-Trenbomed 150 Injectable Steroid In Ampoules", dosage: "150 mg/ml", price: 57, oldPrice: 65, image: "/images/shop/products/injectable-trenbomed-150.jpg", badges: ["sale", "top"], inStock: true },
  { category: "injectable", brand: "Deus Medical", name: "Decamed PP 100 Injectable Steroid In Ampoules", dosage: "100 mg/ml", price: 34, oldPrice: 44, image: "/images/shop/products/injectable-decamed-pp-100.jpg", badges: ["sale"], inStock: true },
  { category: "injectable", brand: "Deus Medical", name: "Dianamed 100 Injectable Steroid In Ampoules", dosage: "100 mg/ml", price: 40, oldPrice: 54, image: "/images/shop/products/injectable-dianamed-100.png", badges: ["sale", "top"], inStock: true },
  { category: "injectable", brand: "Deus Medical", name: "Equimed 250 Injectable Steroid In Ampoules", dosage: "250 mg/ml", price: 42, oldPrice: 53, image: "/images/shop/products/injectable-equimed-250.jpg", badges: ["sale"], inStock: true },
  { category: "injectable", brand: "Deus Medical", name: "Paramed 76.5 Injectable Steroid In Ampoules", dosage: "76.5 mg/ml", price: 55, oldPrice: 64, image: "/images/shop/products/injectable-paramed-76-5.jpg", badges: ["new", "sale"], inStock: true },
  { category: "injectable", brand: "Deus Medical", name: "Sustamed 250 Injectable Steroid In Ampoules", dosage: "250 mg/ml", price: 37, oldPrice: 43, image: "/images/shop/products/injectable-sustamed-250.jpg", badges: ["sale", "top"], inStock: true },
  { category: "injectable", brand: "Deus Medical", name: "Primomed 100 Injectable Steroid In Ampoules", dosage: "100 mg/ml", price: 70, oldPrice: 76, image: "/images/shop/products/injectable-primomed-100.jpg", badges: ["sale"], inStock: true },
  { category: "injectable", brand: "Deus Medical", name: "Testomed 100 (No Ester) In Ampoules", dosage: "100 mg/ml", price: 31, oldPrice: 43, image: "/images/shop/products/injectable-testomed-100.png", badges: ["sale"], inStock: true },
  { category: "injectable", brand: "Deus Medical", name: "Testomed E 250 Injectable Steroid In Ampoules", dosage: "250 mg/ml", price: 35, oldPrice: 45, image: "/images/shop/products/injectable-testomed-e-250.jpg", badges: ["sale", "top"], inStock: true },
  { category: "injectable", brand: "Deus Medical", name: "Testomed P 100 Injectable Steroid In Ampoules", dosage: "100 mg/ml", price: 29, oldPrice: 33, image: "/images/shop/products/injectable-testomed-p-100.jpg", badges: ["sale"], inStock: true },

  // Injectable — Astera Labs (real products from dinespower.to)
  { category: "injectable", brand: "Astera Labs", name: "Methenolone Enanthate 200 Injectable Steroid In Vials", dosage: "200 mg/ml", price: 125, image: "/images/shop/products/astera/methenolone-enanthate-200.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Bacteriostatic Water In Vials", dosage: "10 ml", price: 11, image: "/images/shop/products/astera/bacteriostatic-water.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Trenbolone Enanthate Injectable Steroid In Vials", dosage: "200 mg/ml", price: 55, image: "/images/shop/products/astera/trenbolone-enanthate.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "L-Carnitine In Vials", dosage: "200 mg/ml", price: 16, image: "/images/shop/products/astera/l-carnitine.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Nandrolone Phenylpropionate (NPP) Injectable Steroid In Vials", dosage: "100 mg/ml", price: 34, image: "/images/shop/products/astera/npp.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Testosterone Propionate Injectable Steroid In Vials", dosage: "100 mg/ml", price: 29, image: "/images/shop/products/astera/testosterone-propionate.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Methenolone Enanthate 100 Injectable Steroid In Vials", dosage: "100 mg/ml", price: 65, image: "/images/shop/products/astera/methenolone-enanthate-100.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Nandrolone Decanoate Injectable Steroid In Vials", dosage: "250 mg/ml", price: 50, image: "/images/shop/products/astera/nandrolone-decanoate.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Sustanon 300 Injectable Testosterone Blend In Vials", dosage: "300 mg/ml", price: 42, image: "/images/shop/products/astera/sustanon-300.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Boldenone Undecylenate Injectable Steroid In Vials", dosage: "250 mg/ml", price: 48, image: "/images/shop/products/astera/boldenone-undecylenate.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Stanozolol Injectable Steroid In Vials", dosage: "50 mg/ml", price: 36, image: "/images/shop/products/astera/stanozolol.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Trenbolone Acetate Injectable Steroid In Vials", dosage: "100 mg/ml", price: 49, image: "/images/shop/products/astera/trenbolone-acetate.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Testosterone Phenylpropionate Injectable Steroid In Vials", dosage: "100 mg/ml", price: 29, image: "/images/shop/products/astera/testosterone-phenylpropionate.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Sustanon 500 Injectable Testosterone Blend In Vials", dosage: "500 mg/ml", price: 66, image: "/images/shop/products/astera/sustanon-500.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Methandienone Injectable Steroid In Vials", dosage: "50 mg/ml", price: 40, image: "/images/shop/products/astera/methandienone.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Testosterone Undecanoate Injectable Steroid In Vials", dosage: "250 mg/ml", price: 33, image: "/images/shop/products/astera/testosterone-undecanoate.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Trenbolone Mix Injectable Steroid In Vials", dosage: "150 mg/ml", price: 57, image: "/images/shop/products/astera/trenbolone-mix.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Trenbolone Hexahydrobenzylcarbonate Injectable Steroid In Vials", dosage: "100 mg/ml", price: 66, image: "/images/shop/products/astera/trenbolone-hex.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Short Acting Mix Injectable Steroid In Vials", dosage: "100 mg/ml", price: 88, image: "/images/shop/products/astera/short-acting-mix.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Testosterone No Ester Injectable Steroid In Vials", dosage: "100 mg/ml", price: 31, image: "/images/shop/products/astera/testosterone-no-ester.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Trestolone Acetate (MENT) Injectable Steroid In Vials", dosage: "50 mg/ml", price: 60, image: "/images/shop/products/astera/trestolone-acetate.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Boldenone Acetate Injectable Steroid In Vials", dosage: "100 mg/ml", price: 39, image: "/images/shop/products/astera/boldenone-acetate.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Oxymetholone Injectable Steroid In Vials", dosage: "50 mg/ml", price: 33, image: "/images/shop/products/astera/oxymetholone.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Testosterone Cypionate Injectable Steroid In Vials", dosage: "250 mg/ml", price: 29, image: "/images/shop/products/astera/testosterone-cypionate.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Boldenone Cypionate Injectable Steroid In Vials", dosage: "250 mg/ml", price: 44, image: "/images/shop/products/astera/boldenone-cypionate.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Drostanolone Propionate Injectable Steroid In Vials", dosage: "100 mg/ml", price: 44, image: "/images/shop/products/astera/drostanolone-propionate.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Testosterone Enanthate Injectable Steroid In Vials", dosage: "250 mg/ml", price: 40, image: "/images/shop/products/astera/testosterone-enanthate.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Drostanolone Enanthate Injectable Steroid In Vials", dosage: "200 mg/ml", price: 55, image: "/images/shop/products/astera/drostanolone-enanthate.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Long Acting Mix Injectable Steroid In Vials", dosage: "500 mg/ml", price: 99, image: "/images/shop/products/astera/long-acting-mix.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Dihydroboldenone (DHB) Injectable Steroid In Vials", dosage: "100 mg/ml", price: 55, image: "/images/shop/products/astera/dihydroboldenone.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Trestolone Enanthate (MENT) Injectable Steroid In Vials", dosage: "50 mg/ml", price: 60, image: "/images/shop/products/astera/trestolone-enanthate.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Methyldrostanolone (Superdrol) Injectable Steroid In Vials", dosage: "50 mg/ml", price: 44, image: "/images/shop/products/astera/methyldrostanolone.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Stenbolone Acetate Injectable Steroid In Vials", dosage: "100 mg/ml", price: 55, image: "/images/shop/products/astera/stenbolone-acetate.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Trenbolone Base Injectable Steroid In Vials", dosage: "50 mg/ml", price: 39, image: "/images/shop/products/astera/trenbolone-base.webp", badges: ["new"], inStock: true },

  // Oral — Deus Medical
  { category: "oral", brand: "Deus Medical", name: "Anadromed 50 Oral Steroid In Tablets", dosage: "50 mg/tab", price: 30, oldPrice: 38, image: "/images/shop/products/oral-anadromed-50.jpg", badges: ["sale", "top"], inStock: true },
  { category: "oral", brand: "Deus Medical", name: "Anavamed 10 Oral Steroid In Tablets", dosage: "10 mg/tab", price: 25, oldPrice: 34, image: "/images/shop/products/oral-anavamed-10.jpg", badges: ["sale", "top"], inStock: true },
  { category: "oral", brand: "Deus Medical", name: "Cabermed 0.5 Oral Steroid In Tablets", dosage: "0.5 mg/tab", price: 66, oldPrice: 68, image: "/images/shop/products/oral-cabermed-05.png", badges: ["new"], inStock: true },
  { category: "oral", brand: "Deus Medical", name: "Dianamed 10 Oral Steroid In Tablets", dosage: "10 mg/tab", price: 13, oldPrice: 17, image: "/images/shop/products/oral-dianamed-10.jpg", badges: ["sale", "top"], inStock: true },
  { category: "oral", brand: "Deus Medical", name: "Ezetimed 10 Oral Steroid In Tablets", dosage: "10 mg/tab", price: 28, oldPrice: 32, image: "/images/shop/products/oral-ezetimed-10.png", badges: ["sale"], inStock: true },
  { category: "oral", brand: "Deus Medical", name: "Halomed 5 Oral Steroid In Tablets", dosage: "5 mg/tab", price: 50, oldPrice: 58, image: "/images/shop/products/oral-halomed-5.jpg", badges: ["sale"], inStock: true },
  { category: "oral", brand: "Deus Medical", name: "Livamed 1 Oral Steroid In Tablets", dosage: "1 mg/tab", price: 22, oldPrice: 25, image: "/images/shop/products/oral-livamed-1.png", badges: ["new"], inStock: true },
  { category: "oral", brand: "Deus Medical", name: "Nebimed 5 Oral Steroid In Tablets", dosage: "5 mg/tab", price: 17, oldPrice: 22, image: "/images/shop/products/oral-nebimed-5.png", badges: ["sale"], inStock: true },
  { category: "oral", brand: "Deus Medical", name: "Primomed 25 Oral Steroid In Tablets", dosage: "25 mg/tab", price: 83, oldPrice: 92, image: "/images/shop/products/oral-primomed-25.jpg", badges: ["sale", "top"], inStock: true },
  { category: "oral", brand: "Deus Medical", name: "Provimed 25 Oral Steroid In Tablets", dosage: "25 mg/tab", price: 25, oldPrice: 29, image: "/images/shop/products/oral-provimed-25.jpg", badges: ["sale"], inStock: true },

  // Oral — Astera Labs
  { category: "oral", brand: "Astera Labs", name: "Stanozolol Oral Steroid In Tablets", dosage: "10 mg/tab", price: 28, oldPrice: 36, image: "/images/shop/products/oral-anavamed-10.jpg", badges: ["sale", "new"], inStock: true },
  { category: "oral", brand: "Astera Labs", name: "Oxandrolone Oral Steroid In Tablets", dosage: "10 mg/tab", price: 35, oldPrice: 42, image: "/images/shop/products/oral-halomed-5.jpg", badges: ["sale"], inStock: true },
  { category: "oral", brand: "Astera Labs", name: "Methandrostenolone Oral Steroid In Tablets", dosage: "10 mg/tab", price: 18, oldPrice: 24, image: "/images/shop/products/oral-dianamed-10.jpg", badges: ["new"], inStock: true },
  { category: "oral", brand: "Astera Labs", name: "Methenolone Acetate Oral Steroid In Tablets", dosage: "25 mg/tab", price: 72, oldPrice: 85, image: "/images/shop/products/oral-primomed-25.jpg", badges: ["sale", "top"], inStock: true },

  // Fat Burn
  { category: "fat-burn", brand: "Deus Medical", name: "Clenomed 40 Sympathomimetic Amine In Tablets", dosage: "40 mcg/tab", price: 12, oldPrice: 16, image: "/images/shop/products/fat-burn-clenomed-40.jpg", badges: ["sale", "top"], inStock: true },
  { category: "fat-burn", brand: "Deus Medical", name: "Cytomed 25 Thyroid Hormone In Tablets", dosage: "25 mcg/tab", price: 13, oldPrice: 17, image: "/images/shop/products/fat-burn-cytomed-25.jpg", badges: ["sale"], inStock: true },
  { category: "fat-burn", brand: "Deus Medical", name: "Thyromed 50 Thyroid Hormone In Tablets", dosage: "50 mcg/tab", price: 10, oldPrice: 13, image: "/images/shop/products/fat-burn-thyromed-50.jpg", badges: ["sale"], inStock: true },
  { category: "fat-burn", brand: "Biaxol", name: "Yohimbine Fat Burner Capsules", dosage: "10 mg/cap", price: 24, oldPrice: 30, image: "/images/shop/products/fat-burn-yohimbine.png", badges: ["sale", "top"], inStock: true },
  { category: "fat-burn", brand: "Astera Labs", name: "Clenbuterol HCL In Tablets", dosage: "40 mcg/tab", price: 24, image: "/images/shop/products/fat-burn-clenbuterol-hcl.webp", badges: ["new"], inStock: true },
  { category: "fat-burn", brand: "Astera Labs", name: "Liothyronine Sodium (T3) In Tablets", dosage: "25 mcg/tab", price: 13, image: "/images/shop/products/fat-burn-liothyronine-t3.webp", badges: ["new"], inStock: true },
  { category: "fat-burn", brand: "Astera Labs", name: "Levothyroxine Sodium (T4) In Tablets", dosage: "100 mcg/tab", price: 10, image: "/images/shop/products/fat-burn-levothyroxine-t4.webp", badges: ["new"], inStock: true },
  { category: "fat-burn", brand: "Biaxol", name: "ECA Fat Burner Capsules", dosage: "3-in-1", price: 40, oldPrice: 48, image: "/images/shop/products/fat-burn-eca-xtreme-new.png", badges: ["sale", "top"], inStock: true },

  // Peptides & HGH
  { category: "peptides-hgh", brand: "Deus Medical", name: "Tirzepatide (GIP and GLP-1 Agonist) In Vials", dosage: "10 mg/vial", price: 100, image: "/images/shop/products/peptides-hgh-tirzepatide.webp", badges: ["new"], inStock: true },
  { category: "peptides-hgh", brand: "Deus Medical", name: "Retatrutide 10mg (GLP-1, GIP, Glucagon Agonist)", dosage: "10 mg/vial", price: 90, image: "/images/shop/products/peptides-hgh-retatrutide.webp", badges: ["new", "top"], inStock: true },
  { category: "peptides-hgh", brand: "Deus Medical", name: "BPC-157 Peptide In Vials", dosage: "5 mg/vial", price: 39, oldPrice: 43, image: "/images/shop/products/peptides-hgh-bpc-157.jpg", badges: ["sale", "top"], inStock: true },
  { category: "peptides-hgh", brand: "Deus Medical", name: "CJC-1295 DAC Peptide In Vials", dosage: "2 mg/vial", price: 33, oldPrice: 39, image: "/images/shop/products/peptides-hgh-cjc-1295.png", badges: ["sale"], inStock: true },
  { category: "peptides-hgh", brand: "Deus Medical", name: "DSIP Peptide In Vials", dosage: "5 mg/vial", price: 39, oldPrice: 43, image: "/images/shop/products/peptides-hgh-dsip.png", badges: ["sale"], inStock: true },
  { category: "peptides-hgh", brand: "Deus Medical", name: "Epitalon (Epitalamin) Peptide Vials", dosage: "10 mg/vial", price: 33, oldPrice: 40, image: "/images/shop/products/peptides-hgh-epitalon.png", badges: ["sale"], inStock: true },
  { category: "peptides-hgh", brand: "Deus Medical", name: "GHRP-2 Peptide In Vials", dosage: "5 mg/vial", price: 39, oldPrice: 43, image: "/images/shop/products/peptides-hgh-ghrp-2.png", badges: ["sale"], inStock: true },
  { category: "peptides-hgh", brand: "Deus Medical", name: "GHRP-6 Peptide In Vials", dosage: "5 mg/vial", price: 39, oldPrice: 44, image: "/images/shop/products/peptides-hgh-ghrp-6.png", badges: ["sale"], inStock: true },
  { category: "peptides-hgh", brand: "Deus Medical", name: "HCG Hormone In Vials", dosage: "5000 IU/vial", price: 44, oldPrice: 49, image: "/images/shop/products/peptides-hgh-hcg.png", badges: ["sale", "top"], inStock: true },
  { category: "peptides-hgh", brand: "Deus Medical", name: "Hexarelin Peptide In Vials", dosage: "5 mg/vial", price: 30, oldPrice: 37, image: "/images/shop/products/peptides-hgh-hexarelin.png", badges: ["sale"], inStock: true },

  // SARMs
  { category: "sarms", brand: "Deus Medical", name: "S4 25 SARM In Tablets", dosage: "25 mg/tab", price: 45, oldPrice: 55, image: "/images/shop/products/sarms-s4-25.jpg", badges: ["sale", "top"], inStock: true },
  { category: "sarms", brand: "Biaxol", name: "YK-11 SARM Capsules", dosage: "5 mg/cap", price: 72, oldPrice: 78, image: "/images/shop/products/sarms-yk-11.jpg", badges: ["sale"], inStock: true },
  { category: "sarms", brand: "Biaxol", name: "Andarine (S4) Capsules", dosage: "25 mg/cap", price: 60, oldPrice: 67, image: "/images/shop/products/sarms-andarine-s4.png", badges: ["sale"], inStock: true },
  { category: "sarms", brand: "Biaxol", name: "Cardarine (GW501516) SARM Capsules", dosage: "20 mg/cap", price: 54, oldPrice: 63, image: "/images/shop/products/sarms-cardarine.png", badges: ["sale", "top"], inStock: true },
  { category: "sarms", brand: "Deus Medical", name: "GW501516 10 SARM In Tablets", dosage: "10 mg/tab", price: 35, oldPrice: 44, image: "/images/shop/products/sarms-gw501516-10.jpg", badges: ["sale"], inStock: true },
  { category: "sarms", brand: "Biaxol", name: "Ibutamoren (MK677) SARM In Capsules", dosage: "10 mg/cap", price: 60, oldPrice: 65, image: "/images/shop/products/sarms-ibutamoren.png", badges: ["sale", "top"], inStock: true },
  { category: "sarms", brand: "Deus Medical", name: "LGD4033 (Ligandrol) SARM Tablets", dosage: "10 mg/tab", price: 60, oldPrice: 76, image: "/images/shop/products/sarms-lgd4033-10.jpg", badges: ["sale", "top"], inStock: true },
  { category: "sarms", brand: "Biaxol", name: "Ligandrol (LGD4033) SARM In Capsules", dosage: "10 mg/cap", price: 60, oldPrice: 65, image: "/images/shop/products/sarms-ligandrol.png", badges: ["sale"], inStock: true },
  { category: "sarms", brand: "Deus Medical", name: "MK2866 SARM In Tablets", dosage: "25 mg/tab", price: 33, oldPrice: 40, image: "/images/shop/products/sarms-mk2866.jpg", badges: ["sale"], inStock: true },
  { category: "sarms", brand: "Deus Medical", name: "MK677 10 SARM In Tablets", dosage: "10 mg/tab", price: 40, oldPrice: 60, image: "/images/shop/products/sarms-mk677-10.jpg", badges: ["sale", "top"], inStock: true },

  // PCT
  { category: "pct", brand: "Deus Medical", name: "Enclomimed 25 (Enclomiphene Citrate) Tablets", dosage: "25 mg/tab", price: 66, oldPrice: 69, image: "/images/shop/products/pct-enclomimed-25.png", badges: ["new"], inStock: true },
  { category: "pct", brand: "Deus Medical", name: "Arimimed 1 (Anastrozole) Tablets", dosage: "1 mg/tab", price: 30, oldPrice: 35, image: "/images/shop/products/pct-arimimed-1.jpg", badges: ["sale", "top"], inStock: true },
  { category: "pct", brand: "Deus Medical", name: "Aromamed 25 Aromatase Inhibitor In Tablets", dosage: "25 mg/tab", price: 33, oldPrice: 38, image: "/images/shop/products/pct-aromamed-25.jpg", badges: ["sale"], inStock: true },
  { category: "pct", brand: "Deus Medical", name: "Clomimed 50 (Clomiphene Citrate) Tablets", dosage: "50 mg/tab", price: 23, oldPrice: 27, image: "/images/shop/products/pct-clomimed-50.jpg", badges: ["sale", "top"], inStock: true },
  { category: "pct", brand: "Deus Medical", name: "Evimed 60 (Raloxifene Hydrochloride) Tablets", dosage: "60 mg/tab", price: 28, oldPrice: 33, image: "/images/shop/products/pct-evimed-60.jpg", badges: ["sale"], inStock: true },
  { category: "pct", brand: "Deus Medical", name: "Femamed 2.5 Aromatase Inhibitor In Tablets", dosage: "2.5 mg/tab", price: 39, oldPrice: 44, image: "/images/shop/products/pct-femamed-25.jpg", badges: ["sale"], inStock: true },
  { category: "pct", brand: "Deus Medical", name: "Nolvamed 20 (Tamoxifen Citrate) SERM Tablets", dosage: "20 mg/tab", price: 25, oldPrice: 32, image: "/images/shop/products/pct-nolvamed-20.jpg", badges: ["sale", "top"], inStock: true },
  { category: "pct", brand: "Astera Labs", name: "Tamoxifen Citrate SERM In Tablets", dosage: "20 mg/tab", price: 24, image: "/images/shop/products/pct-tamoxifen-citrate.webp", badges: ["new"], inStock: true },
  { category: "pct", brand: "Astera Labs", name: "Anastrozole Aromatase Inhibitor In Tablets", dosage: "1 mg/tab", price: 30, image: "/images/shop/products/pct-anastrozole.webp", badges: ["new"], inStock: true },
  { category: "pct", brand: "Astera Labs", name: "Clomiphene Citrate SERM In Tablets", dosage: "50 mg/tab", price: 28, image: "/images/shop/products/pct-clomiphene-citrate.webp", badges: ["new"], inStock: true },

  // Energy
  { category: "energy", brand: "Biaxol", name: "Caffeine Nasal Spray With DMAA In Bottle", dosage: "", price: 24, oldPrice: 28, image: "/images/shop/products/energy-caffeine-nasal.png", badges: ["sale"], inStock: true },
  { category: "energy", brand: "Biaxol", name: "DMAA (Pre-Workout Booster) In Capsules", dosage: "75 mg/cap", price: 36, oldPrice: 46, image: "/images/shop/products/energy-dmaa-capsules.jpg", badges: ["sale", "top"], inStock: true },

  // Sex Support
  { category: "sex-support", brand: "Deus Medical", name: "Viamed 100 (Sildenafil) 100mg Oral Jelly - Viagra", dosage: "100 mg", price: 17, image: "/images/shop/products/sex-support-viamed-100.webp", badges: ["new", "top"], inStock: true },
  { category: "sex-support", brand: "Deus Medical", name: "Ciamed 5 PDE5 Inhibitor In Tablets", dosage: "5 mg/tab", price: 22, oldPrice: 29, image: "/images/shop/products/sex-support-ciamed-5.jpg", badges: ["sale"], inStock: true },
  { category: "sex-support", brand: "Deus Medical", name: "Prilimed 30 Oral Steroid In Tablets", dosage: "30 mg/tab", price: 17, oldPrice: 22, image: "/images/shop/products/sex-support-prilimed-30.png", badges: ["sale"], inStock: true },
  { category: "sex-support", brand: "Deus Medical", name: "Viamed 20 PDE5 Inhibitor In Tablets", dosage: "20 mg/tab", price: 12, oldPrice: 18, image: "/images/shop/products/sex-support-viamed-20.jpg", badges: ["sale", "top"], inStock: true },
  { category: "sex-support", brand: "Astera Labs", name: "Tadalafil (Cialis) - 50 Tabs PDE5 Inhibitor", dosage: "20 mg/tab", price: 44, image: "/images/shop/products/sex-support-tadalafil-50.webp", badges: ["new"], inStock: true },
  { category: "sex-support", brand: "Astera Labs", name: "Tadalafil (Cialis) - 100 Tabs PDE5 Inhibitor", dosage: "20 mg/tab", price: 72, image: "/images/shop/products/sex-support-tadalafil-100.webp", badges: ["new"], inStock: true },
  { category: "sex-support", brand: "Astera Labs", name: "Sildenafil Citrate (Viagra) - 50 Tabs", dosage: "100 mg/tab", price: 40, image: "/images/shop/products/sex-support-sildenafil-50.webp", badges: ["new"], inStock: true },
  { category: "sex-support", brand: "Astera Labs", name: "Dapoxetine HCL Sex Support In Tablets", dosage: "60 mg/tab", price: 33, image: "/images/shop/products/sex-support-dapoxetine.webp", badges: ["new"], inStock: true },
  { category: "sex-support", brand: "Astera Labs", name: "Sex Hard Mix (Viagra + Cialis)", dosage: "Mix", price: 77, image: "/images/shop/products/sex-support-sex-hard-mix.webp", badges: ["new", "top"], inStock: true },
  { category: "sex-support", brand: "Astera Labs", name: "Sex Hard & Strong Mix (Viagra + Cialis + Dapoxetine)", dosage: "Mix", price: 99, image: "/images/shop/products/sex-support-sex-hard-strong.webp", badges: ["new"], inStock: true },

  // Health
  { category: "health", brand: "Biaxol", name: "CBD Health Products In Capsules", dosage: "25 mg/cap", price: 60, oldPrice: 65, image: "/images/shop/products/health-cbd.png", badges: ["sale", "top"], inStock: true },
  { category: "health", brand: "Biaxol", name: "DHEA (Hormone Support) Health Products", dosage: "50 mg/cap", price: 42, oldPrice: 52, image: "/images/shop/products/health-dhea.webp", badges: ["sale"], inStock: true },
  { category: "health", brand: "Biaxol", name: "Anti Stress (Emotional Wellness) In Capsules", dosage: "", price: 30, oldPrice: 33, image: "/images/shop/products/health-anti-stress.jpg", badges: ["sale"], inStock: true },
  { category: "health", brand: "Biaxol", name: "Detox (Body Cleanse) In Capsules", dosage: "", price: 25, oldPrice: 30, image: "/images/shop/products/health-detox.png", badges: ["sale"], inStock: true },
  { category: "health", brand: "Biaxol", name: "Cortisol (Health & Balance) In Capsules", dosage: "", price: 45, oldPrice: 54, image: "/images/shop/products/health-cortisol.png", badges: ["sale"], inStock: true },
  { category: "health", brand: "Biaxol", name: "GDA (Glucose Support) In Capsules", dosage: "", price: 40, oldPrice: 48, image: "/images/shop/products/health-gda.png", badges: ["sale"], inStock: true },
  { category: "health", brand: "Biaxol", name: "Immune Boost In Capsules", dosage: "", price: 35, oldPrice: 42, image: "/images/shop/products/health-immune.png", badges: ["sale", "top"], inStock: true },
  { category: "health", brand: "Biaxol", name: "Nootropic (Brain & Memory Support)", dosage: "", price: 35, oldPrice: 42, image: "/images/shop/products/health-nootropic.png", badges: ["sale"], inStock: true },
  { category: "health", brand: "Biaxol", name: "Sleep (Body & Mind Relax) In Capsules", dosage: "", price: 35, oldPrice: 42, image: "/images/shop/products/health-sleep.png", badges: ["sale"], inStock: true },
  { category: "health", brand: "Biaxol", name: "TUDCA (Liver Support) In Capsules", dosage: "", price: 54, oldPrice: 64, image: "/images/shop/products/health-tudca.png", badges: ["sale", "top"], inStock: true },

  // Stacks
  { category: "stacks", brand: "Biaxol", name: "Muscle Building Stack", dosage: "Bundle", price: 222, oldPrice: 242, image: "/images/shop/products/stacks-muscle-building.webp", badges: ["sale", "top"], inStock: true },
  { category: "stacks", brand: "Biaxol", name: "Cutting Stack", dosage: "Bundle", price: 160, oldPrice: 180, image: "/images/shop/products/stacks-cutting.webp", badges: ["sale", "top"], inStock: true },
  { category: "stacks", brand: "Biaxol", name: "Bulking Stack", dosage: "Bundle", price: 234, oldPrice: 254, image: "/images/shop/products/stacks-bulking.webp", badges: ["sale"], inStock: true },
  { category: "stacks", brand: "Biaxol", name: "Beginner Stack", dosage: "Bundle", price: 168, oldPrice: 188, image: "/images/shop/products/stacks-beginner.webp", badges: ["sale", "top"], inStock: true },
  { category: "stacks", brand: "Biaxol", name: "Valhalla Cutting Stack", dosage: "Bundle", price: 282, oldPrice: 298, image: "/images/shop/products/stacks-valhalla-cutting.webp", badges: ["sale"], inStock: true },
  { category: "stacks", brand: "Biaxol", name: "Valhalla Muscle Stack", dosage: "Bundle", price: 156, oldPrice: 186, image: "/images/shop/products/stacks-valhalla-muscle.webp", badges: ["sale"], inStock: true },
  { category: "stacks", brand: "Biaxol", name: "Fat Burning Stack", dosage: "Bundle", price: 216, oldPrice: 236, image: "/images/shop/products/stacks-fat-burning.webp", badges: ["sale", "top"], inStock: true },
  { category: "stacks", brand: "Biaxol", name: "High Libido & Fat Burning Stack", dosage: "Bundle", price: 144, oldPrice: 165, image: "/images/shop/products/stacks-high-libido-stack.webp", badges: ["sale"], inStock: true },
  { category: "stacks", brand: "Deus Medical", name: "SARMs Bulking Stack For Beginners", dosage: "Bundle", price: 210, oldPrice: 221, image: "/images/shop/products/stacks-sarms-bulking-beginner.webp", badges: ["sale"], inStock: true },
  { category: "stacks", brand: "Deus Medical", name: "SARMs Muscle Building Stack For Advanced", dosage: "Bundle", price: 349, oldPrice: 387, image: "/images/shop/products/stacks-sarms-muscle-advanced.webp", badges: ["sale", "top"], inStock: true },

  // Amino Acids
  { category: "amino-acids", brand: "Astera Labs", name: "Burn Supplement For Fat Loss And Energy", dosage: "", price: 44, image: "/images/shop/products/amino-acids-burn.webp", badges: ["new", "top"], inStock: true },
  { category: "amino-acids", brand: "Astera Labs", name: "Vaso Burn - Thermogenic Formula", dosage: "", price: 33, image: "/images/shop/products/amino-acids-vaso-burn.webp", badges: ["new"], inStock: true },
  { category: "amino-acids", brand: "Astera Labs", name: "Pump Supplement For Blood Flow", dosage: "", price: 33, image: "/images/shop/products/amino-acids-pump.webp", badges: ["new"], inStock: true },
  { category: "amino-acids", brand: "Astera Labs", name: "Night Blend Supplement For Sleep Recovery", dosage: "", price: 33, image: "/images/shop/products/amino-acids-night-blend.webp", badges: ["new"], inStock: true },
  { category: "amino-acids", brand: "Astera Labs", name: "Bones & Joint Recovery Formula", dosage: "", price: 39, image: "/images/shop/products/amino-acids-bones-joint.webp", badges: ["new"], inStock: true },
  { category: "amino-acids", brand: "Astera Labs", name: "Daily Blend For Energy And Focus", dosage: "", price: 33, image: "/images/shop/products/amino-acids-daily-blend.webp", badges: ["new", "top"], inStock: true },
  { category: "amino-acids", brand: "Astera Labs", name: "BCAA Supplements For Muscle Recovery", dosage: "", price: 28, image: "/images/shop/products/amino-acids-bcaa.webp", badges: ["new"], inStock: true },
  { category: "amino-acids", brand: "Astera Labs", name: "Lipo Burn Supplement For Fat Metabolism", dosage: "", price: 28, image: "/images/shop/products/amino-acids-lipo-burn.webp", badges: ["new"], inStock: true },
  { category: "amino-acids", brand: "Astera Labs", name: "Lipo-C Supplement For Fat Metabolism", dosage: "", price: 33, image: "/images/shop/products/amino-acids-lipo-c.webp", badges: ["new"], inStock: true },
  { category: "amino-acids", brand: "Astera Labs", name: "Power Supplement For Energy And Endurance", dosage: "", price: 33, image: "/images/shop/products/amino-acids-power.webp", badges: ["new"], inStock: true },
];
