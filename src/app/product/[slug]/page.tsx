"use client";

import { notFound, useParams } from "next/navigation";
import ProductPageContent from "@/components/ProductPageContent";
import { getProductBySlug } from "@/data/products";

export default function ProductSlugPage() {
  const params = useParams<{ slug: string }>();
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();
  return <ProductPageContent product={product} />;
}
