import type { MetadataRoute } from "next";

const BASE_URL = "https://dinespower.info";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/account",
          "/account/",
          "/cart",
          "/checkout",
          "/checkout/confirmation",
          "/api/",
          "/_next/",
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
