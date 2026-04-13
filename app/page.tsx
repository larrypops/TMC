import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/button-link";
import {
  DropletIcon,
  FactoryIcon,
  LayersIcon,
  MapPinIcon,
  ShieldIcon
} from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/metadata";
import { homeCategories, homeShowcase, products, siteConfig } from "@/lib/site-data";
import { absoluteUrl, buildWhatsAppLink } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Tôles, Métrobondes et Gouttières PVC à Bafoussam",
  description:
    "TMC à Bafoussam propose des tôles ondulées, bac acier, métrobondes, tôles galvanisées et gouttières PVC pour maisons, magasins et hangars au Cameroun.",
  path: "/",
  keywords: [
    "tôles Cameroun",
    "tôles Bafoussam",
    "métrobondes Cameroun",
    "gouttières PVC Cameroun",
    "matériaux de toiture Cameroun",
    "fournisseur toiture Bafoussam",
    "bac acier Cameroun"
  ]
});

const whyChoose = [
  {
    title: "Conseil orienté chantier",
    description:
      "Nous aidons à choisir la catégorie la plus cohérente selon le type de bâtiment, la finition et le budget visé.",
    icon: LayersIcon
  },
  {
    title: "Fabrication et distribution locales",
    description:
      "La proximité avec le marché camerounais améliore la disponibilité et la réactivité pour les demandes sérieuses.",
    icon: FactoryIcon
  },
  {
    title: "Solutions complètes",
    description:
      "La toiture et l’évacuation d’eau sont traitées dans la même logique pour une réalisation plus propre et plus durable.",
    icon: DropletIcon
  },
  {
    title: "Service direct",
    description:
      "Le contact est simple, rapide et concret via WhatsApp ou appel, sans friction inutile.",
    icon: ShieldIcon
  }
];

const logisticsPoints = [
  {
    title: "Point de départ principal",
    text: "Bafoussam concentre l’échange commercial, l’orientation produit et la préparation des demandes."
  },
  {
    title: "Couverture possible",
    text: "Des livraisons ou approvisionnements peuvent être organisés vers plusieurs villes du Cameroun selon le volume et la logistique."
  },
  {
    title: "Réponse rapide",
    text: "WhatsApp reste la voie la plus directe pour préciser la catégorie, la quantité et la localité."
  }
];

const cityPositions = [
  { name: "Bafoussam", top: "48%", left: "46%" },
  { name: "Douala", top: "70%", left: "30%" },
  { name: "Yaoundé", top: "66%", left: "56%" },
  { name: "Dschang", top: "42%", left: "31%" },
  { name: "Mbouda", top: "38%", left: "48%" },
  { name: "Bafang", top: "56%", left: "28%" },
  { name: "Bamenda", top: "22%", left: "53%" }
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  image: [absoluteUrl("/images/og-tmc.jpg")],
  url: siteConfig.siteUrl,
  telephone: siteConfig.phoneDisplay,
  description:
    "Entreprise basée à Bafoussam spécialisée dans les tôles, métrobondes, bacs acier et systèmes de gouttières PVC au Cameroun.",
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.city,
    addressCountry: "CM"
  },
  openingHours: "Mo-Su 00:00-23:59",
  areaServed: siteConfig.coverageCities.map((city) => ({
    "@type": "City",
    name: city
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Matériaux de toiture et évacuation d’eau",
    itemListElement: products.map((product) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: product.name,
        description: product.summary
      }
    }))
  }
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: siteConfig.faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={[localBusinessJsonLd, faqJsonLd]} />

      <section className="relative overflow-hidden bg-ink pt-10 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(188,105,33,0.26),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(37,121,106,0.16),_transparent_28%)]" />
          <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
            <Image
              alt="Toiture réalisée par TMC au Cameroun"
              className="object-cover object-center opacity-25"
              fill
              priority
              sizes="46vw"
              src="/images/realisation-toiture.jpg"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(17,27,37,0.94)_32%,rgba(17,27,37,0.76)_58%,rgba(17,27,37,0.58)_100%)]" />
        </div>

        <div className="section-shell relative pb-20 pt-16 sm:pb-24 lg:pb-28">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] lg:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow text-copper-200 animate-fade-up">
                {siteConfig.location.label} • {siteConfig.hours} • Fabrication locale
              </p>
              <p
                className="mt-6 text-sm uppercase tracking-[0.32em] text-steel-300 animate-fade-up"
                style={{ animationDelay: "90ms" }}
              >
                {siteConfig.name}
              </p>
              <h1
                className="mt-4 max-w-3xl font-display text-4xl tracking-[-0.07em] text-white sm:text-5xl lg:text-[5.2rem] animate-fade-up"
                style={{ animationDelay: "160ms" }}
              >
                Matériaux de toiture durables pour bâtir avec confiance au Cameroun.
              </h1>
              <p
                className="mt-6 max-w-2xl text-balance text-base leading-8 text-steel-100 sm:text-lg animate-fade-up"
                style={{ animationDelay: "240ms" }}
              >
                Depuis Bafoussam, TMC accompagne les maisons, magasins et hangars avec
                des tôles ondulées, bacs acier, métrobondes et systèmes de gouttières
                PVC conçus pour durer.
              </p>

              <div
                className="mt-8 flex flex-wrap gap-3 animate-fade-up"
                style={{ animationDelay: "320ms" }}
              >
                <ButtonLink href={buildWhatsAppLink()} newTab>
                  Écrire sur WhatsApp
                </ButtonLink>
                <ButtonLink href={siteConfig.phoneHref} icon={false} variant="secondary">
                  Appeler TMC
                </ButtonLink>
              </div>

              <div
                className="mt-10 grid gap-5 border-t border-white/10 pt-6 text-sm text-steel-200 sm:grid-cols-3 animate-fade-up"
                style={{ animationDelay: "400ms" }}
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-copper-200">
                    Produits
                  </p>
                  <p className="mt-2 leading-7">
                    Tôles ondulées, bac acier, galvanisées, Aluzinc et métrobondes.
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-copper-200">
                    Bâtiments
                  </p>
                  <p className="mt-2 leading-7">
                    Solutions pour maisons, magasins, hangars et chantiers utilitaires.
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-copper-200">
                    Contact
                  </p>
                  <p className="mt-2 leading-7">
                    Réponse prioritaire via WhatsApp pour les prix, la disponibilité et les
                    besoins de livraison.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative min-h-[430px] lg:min-h-[560px]">
              <div className="absolute inset-y-8 left-0 right-14 overflow-hidden rounded-[2rem] border border-white/10 shadow-lift">
                <Image
                  alt="Toiture métallique installée par TMC"
                  className="object-cover"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  src="/images/realisation-toiture.jpg"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,27,37,0.08),rgba(17,27,37,0.62))]" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-copper-200">
                    Réalisation toiture
                  </p>
                  <p className="mt-2 max-w-xs font-display text-2xl tracking-[-0.04em] text-white">
                    Une couverture qui protège, valorise et inspire confiance.
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-2 left-0 w-[46%] overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/5 shadow-soft animate-float-soft">
                <div className="relative aspect-[4/5]">
                  <Image
                    alt="Bac acier en fabrication"
                    className="object-cover"
                    fill
                    sizes="(max-width: 1024px) 46vw, 20vw"
                    src="/images/hero-bac-acier.jpg"
                  />
                </div>
              </div>

              <div className="absolute right-0 top-0 w-[34%] overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5 shadow-soft">
                <div className="relative aspect-[4/5]">
                  <Image
                    alt="Profil de toiture en production"
                    className="object-cover"
                    fill
                    sizes="(max-width: 1024px) 34vw, 16vw"
                    src="/images/metrobondes-fabrication.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-steel-200 bg-[#e8dfd1]">
        <div className="section-shell py-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {siteConfig.trustPoints.map((item) => (
              <article className="border-l border-steel-300/80 pl-5" key={item.title}>
                <h2 className="font-display text-xl tracking-[-0.04em] text-ink">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-7 text-steel-700">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
          <div className="max-w-xl">
            <SectionHeading
              description="Chaque famille de produit répond à un besoin précis de couverture ou d’évacuation d’eau. La lecture reste claire pour aider le client à comparer rapidement."
              eyebrow="Catégories principales"
              title="Une offre structurée pour les besoins réels du bâtiment"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/produits">Voir tous les produits</ButtonLink>
              <ButtonLink href="/contact" icon={false} variant="secondary">
                Demander un devis
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {homeCategories.map((category) => (
              <Link
                className="group border-t border-steel-300 py-5 transition hover:border-copper-300"
                href={category.href}
                key={category.name}
              >
                <h3 className="font-display text-2xl tracking-[-0.04em] text-ink transition group-hover:text-copper-600">
                  {category.name}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-steel-600">
                  {category.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-steel-200 bg-white">
        <div className="section-shell grid gap-12 py-20 sm:py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] border border-steel-200 shadow-soft">
            <Image
              alt="Atelier de fabrication de tôles au Cameroun"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              src="/images/tole-profilee-stock.jpg"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,27,37,0.04),rgba(17,27,37,0.62))]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.24em] text-copper-200">
                Pourquoi choisir TMC
              </p>
              <p className="mt-2 max-w-sm font-display text-2xl tracking-[-0.04em]">
                Un partenaire sérieux pour couvrir durablement les bâtiments.
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              description="La promesse de TMC repose sur la qualité perçue sur le terrain, la disponibilité du contact et une logique de conseil utile avant la vente."
              eyebrow="Pourquoi choisir TMC"
              title="Une entreprise qui parle chantier, durabilité et résultat concret"
            />
            <div className="mt-8 grid gap-5">
              {whyChoose.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    className="rounded-[1.6rem] border border-steel-200 bg-canvas/70 p-5"
                    key={item.title}
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl bg-copper-100 p-3 text-copper-700">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl tracking-[-0.04em] text-ink">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-steel-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white sm:py-24">
        <div className="section-shell">
          <SectionHeading
            align="center"
            description="Trois gammes particulièrement demandées pour les projets qui cherchent un bon rapport entre résistance, rendu visuel et protection de l’ouvrage."
            eyebrow="Produits mis en avant"
            light
            title="Des solutions qui couvrent aussi bien l’usage résidentiel que professionnel"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {homeShowcase.map((product) => (
              <article
                className="overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/5"
                key={product.slug}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    alt={product.name}
                    className="object-cover transition duration-700 hover:scale-105"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    src={product.image}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl tracking-[-0.04em] text-white">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-steel-200">{product.summary}</p>
                  <ul className="mt-5 space-y-2 text-sm leading-7 text-steel-100">
                    {product.benefits.slice(0, 2).map((benefit) => (
                      <li className="flex gap-3" key={benefit}>
                        <span className="mt-2 h-2 w-2 flex-none rounded-full bg-copper-300" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <ButtonLink href={`/produits#${product.slug}`} variant="ghost">
                      Voir le détail
                    </ButtonLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ece4d8] py-20 sm:py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div>
            <SectionHeading
              description="Depuis Bafoussam, TMC peut préparer et orienter les demandes de clients situés dans plusieurs villes du Cameroun. Les délais et modalités dépendent naturellement du volume et de la logistique."
              eyebrow="Zones desservies"
              title="Une présence ancrée à Bafoussam, avec une portée utile vers d’autres villes"
            />
            <div className="mt-8 grid gap-5">
              {logisticsPoints.map((item) => (
                <article className="rounded-[1.5rem] border border-white/70 bg-white/70 p-5" key={item.title}>
                  <h3 className="font-display text-xl tracking-[-0.04em] text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-steel-600">{item.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={buildWhatsAppLink()} newTab>
                Vérifier la disponibilité
              </ButtonLink>
              <ButtonLink href="/contact" icon={false} variant="secondary">
                Voir la page contact
              </ButtonLink>
            </div>
          </div>

          <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] border border-steel-200 bg-ink p-6 shadow-soft">
            <div className="absolute inset-0 opacity-60 grid-sheen" />
            <div className="relative z-10 flex h-full flex-col">
              <div className="hidden flex-1 md:block">
                <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-copper-300/30" />
                <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
                {cityPositions.map((city) => (
                  <div
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    key={city.name}
                    style={{ left: city.left, top: city.top }}
                  >
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
                      <MapPinIcon className="h-4 w-4 text-copper-200" />
                      <span>{city.name}</span>
                    </div>
                  </div>
                ))}
                <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-copper-300 shadow-[0_0_0_10px_rgba(188,105,33,0.16)]" />
              </div>

              <div className="flex flex-wrap gap-3 md:hidden">
                {siteConfig.coverageCities.map((city) => (
                  <span
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur"
                    key={city}
                  >
                    <MapPinIcon className="h-4 w-4 text-copper-200" />
                    <span>{city}</span>
                  </span>
                ))}
              </div>

              <div className="mt-auto max-w-xs rounded-[1.4rem] border border-white/10 bg-white/10 p-4 text-sm leading-7 text-steel-100 backdrop-blur md:absolute md:bottom-6 md:left-6">
                Les échanges commencent à Bafoussam, avec une couverture possible vers
                plusieurs localités selon la nature de la commande.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-20 sm:py-24">
        <div className="overflow-hidden rounded-[2.2rem] bg-ink px-6 py-12 text-white shadow-lift sm:px-10 sm:py-14 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="eyebrow text-copper-200">Contact rapide</p>
              <h2 className="mt-4 font-display text-3xl tracking-[-0.05em] sm:text-4xl lg:text-[3.2rem]">
                Besoin d’un prix, d’une disponibilité ou d’un conseil de choix ?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-steel-200 sm:text-lg">
                Envoyez votre demande sur WhatsApp pour recevoir une réponse pratique et
                rapide sur les tôles, métrobondes, gouttières PVC et accessoires.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink href={buildWhatsAppLink()} newTab>
                Demander un devis via WhatsApp
              </ButtonLink>
              <ButtonLink href={siteConfig.phoneHref} icon={false} variant="ghost">
                Appeler {siteConfig.phoneDisplay}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
