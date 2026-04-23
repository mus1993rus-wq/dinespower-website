import type { Metadata } from "next";
import { getProductBySlug } from "@/data/products";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return {
      title: "Product not found",
      description: "The product you are looking for no longer exists or has never existed.",
    };
  }
  return {
    title: `${product.name} — ${product.brand}`,
    description: product.overview.slice(0, 160),
    openGraph: {
      title: `${product.name} — ${product.brand} | Dines Power`,
      description: product.overview.slice(0, 160),
      images: product.thumbnails[0] ? [{ url: product.thumbnails[0] }] : undefined,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
