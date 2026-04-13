import { ButtonLink } from "@/components/button-link";
import { ClockIcon, FactoryIcon, LayersIcon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { ProductSection } from "@/components/product-section";
import { createMetadata } from "@/lib/metadata";
import { products, siteConfig } from "@/lib/site-data";
import { buildWhatsAppLink } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Produits de toiture et évacuation d’eau au Cameroun",
  description:
    "Découvrez les tôles ondulées, bac acier, tôles galvanisées, Aluzinc, métrobondes, gouttières PVC, tuyaux de descente et accessoires proposés par TMC à Bafoussam.",
  path: "/produits",
  keywords: [
    "tôles profilées Cameroun",
    "bac acier Cameroun",
    "métrobondes Bafoussam",
    "gouttières PVC Bafoussam",
    "matériaux de toiture Bafoussam"
  ]
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        actions={[
          {
            href: buildWhatsAppLink(),
            label: "Demander les prix",
            newTab: true
          },
          {
            href: siteConfig.phoneHref,
            label: "Appeler TMC",
            variant: "secondary",
            icon: false
          }
        ]}
        aside={
          <div className="space-y-4">
            <div className="rounded-[1.5rem] border border-steel-200 bg-canvas/70 p-4">
              <div className="flex items-center gap-3">
                <LayersIcon className="h-5 w-5 text-copper-600" />
                <p className="text-sm font-semibold text-ink">7 familles de produits</p>
              </div>
              <p className="mt-2 text-sm leading-7 text-steel-600">
                De la tôle de couverture aux accessoires d’évacuation d’eau.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-steel-200 bg-canvas/70 p-4">
              <div className="flex items-center gap-3">
                <FactoryIcon className="h-5 w-5 text-copper-600" />
                <p className="text-sm font-semibold text-ink">Fabrication locale</p>
              </div>
              <p className="mt-2 text-sm leading-7 text-steel-600">
                Un appui concret pour les besoins de toiture au Cameroun.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-steel-200 bg-canvas/70 p-4">
              <div className="flex items-center gap-3">
                <ClockIcon className="h-5 w-5 text-copper-600" />
                <p className="text-sm font-semibold text-ink">{siteConfig.hours}</p>
              </div>
              <p className="mt-2 text-sm leading-7 text-steel-600">
                Un canal de réponse direct pour les demandes urgentes.
              </p>
            </div>
          </div>
        }
        description="Chaque catégorie est présentée clairement avec ses bénéfices, ses usages et un accès direct à WhatsApp pour demander les prix ou lancer une commande."
        eyebrow="Catalogue TMC"
        title="Tôles, métrobondes et solutions d’évacuation d’eau pour vos chantiers"
      />

      <section className="border-b border-steel-200 bg-white">
        <div className="section-shell py-8">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {products.map((product) => (
              <a
                className="whitespace-nowrap rounded-full border border-steel-200 bg-canvas/60 px-4 py-2 text-sm font-semibold text-steel-700 transition hover:border-copper-300 hover:text-copper-700"
                href={`#${product.slug}`}
                key={product.slug}
              >
                {product.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {products.map((product, index) => (
        <ProductSection index={index} key={product.slug} product={product} />
      ))}

      <section className="section-shell py-20 sm:py-24">
        <div className="grid gap-8 overflow-hidden rounded-[2rem] border border-steel-200 bg-[#ece4d8] p-8 shadow-soft lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="eyebrow">Besoin d’aide pour choisir</p>
            <h2 className="mt-4 font-display text-3xl tracking-[-0.05em] text-ink sm:text-4xl">
              Décrivez votre bâtiment, votre ville et la finition souhaitée
            </h2>
            <p className="mt-5 text-base leading-8 text-steel-700">
              TMC peut vous orienter vers la catégorie la plus adaptée pour une maison,
              un magasin, un hangar ou un besoin de rénovation.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink href={buildWhatsAppLink()} newTab>
              Demander les prix sur WhatsApp
            </ButtonLink>
            <ButtonLink href="/contact" icon={false} variant="secondary">
              Aller à la page contact
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
