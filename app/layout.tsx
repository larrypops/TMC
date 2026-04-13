import type { Metadata, Viewport } from "next";

import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/utils";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "TMC | Tôles, Métrobondes et Gouttières PVC à Bafoussam",
    template: "%s | TMC Cameroun"
  },
  description:
    "TMC fournit des tôles ondulées, bac acier, métrobondes, tôles galvanisées, gouttières PVC et accessoires à Bafoussam avec couverture possible dans plusieurs villes du Cameroun.",
  applicationName: "TMC Cameroun",
  alternates: {
    canonical: "/"
  },
  category: "building materials",
  openGraph: {
    type: "website",
    locale: "fr_CM",
    url: siteConfig.siteUrl,
    siteName: siteConfig.shortName,
    title: "TMC | Tôles, Métrobondes et Gouttières PVC à Bafoussam",
    description:
      "Matériaux de toiture, métrobondes et solutions d’évacuation d’eau au Cameroun.",
    images: [
      {
        url: "/images/og-tmc.jpg",
        width: 1200,
        height: 630,
        alt: "TMC Cameroun"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "TMC | Tôles, Métrobondes et Gouttières PVC à Bafoussam",
    description:
      "Matériaux de toiture, métrobondes et solutions d’évacuation d’eau au Cameroun.",
    images: ["/images/og-tmc.jpg"]
  },
  icons: {
    icon: "/images/logo-tmc.jpg",
    apple: "/images/logo-tmc.jpg"
  },
  other: {
    "geo.region": "CM-OU",
    "geo.placename": siteConfig.location.city
  }
};

export const viewport: Viewport = {
  themeColor: "#111b25",
  colorScheme: "light"
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  logo: absoluteUrl("/images/logo-tmc.jpg"),
  image: absoluteUrl("/images/og-tmc.jpg"),
  telephone: siteConfig.phoneDisplay,
  areaServed: siteConfig.coverageCities,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.city,
    addressCountry: "CM"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="bg-canvas text-ink antialiased">
        <JsonLd data={organizationJsonLd} />
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(188,105,33,0.08),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(37,121,106,0.08),_transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.32),rgba(255,255,255,0))]" />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

