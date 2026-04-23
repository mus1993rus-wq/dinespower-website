"use client";

import ProductPageContent from "@/components/ProductPageContent";
import { defaultProduct } from "@/data/products";

export default function ProductPage() {
  return <ProductPageContent product={defaultProduct} />;
}
