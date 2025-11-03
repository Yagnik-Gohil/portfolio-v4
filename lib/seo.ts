// lib/seo.ts
import type { Metadata } from "next";

export function makeMetadata({
  title,
  description,
  path = "",
  image,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string | null;
}): Metadata {
  const baseUrl = "https://yagnik.dev";
  const fullUrl = `${baseUrl}${path}`;
  const imageUrl = image || "/logo.svg";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: "Yagnik Gohil",
      images: image ? [{ url: imageUrl }] : [{ url: "/logo.svg" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [imageUrl] : ["/logo.svg"],
    },
    alternates: { canonical: fullUrl },
  };
}
