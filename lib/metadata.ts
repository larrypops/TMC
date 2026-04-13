import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-data";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
};

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = "/images/og-tmc.jpg"
}: MetadataInput): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path
    },
    openGraph: {
      type: "website",
      locale: "fr_CM",
      url: path,
      siteName: siteConfig.shortName,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
}

