import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { FactoryIcon, MapPinIcon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";
import { buildWhatsAppLink } from "@/lib/utils";

export const metadata = createMetadata({
  title: "À propos de TMC",
  description:
    "Découvrez TMC, entreprise de Bafoussam spécialisée dans les tôles, métrobondes et solutions d’évacuation d’eau pour le marché camerounais.",
  path: "/a-propos",
  keywords: [
    "entreprise tôles Bafoussam",
    "fabrication locale tôles Cameroun",
    "fournisseur toiture Cameroun",
    "TMC Cameroun"
  ]
});

const processSteps = [
  {
    title: "Écouter le besoin",
    text: "Nous prenons en compte le type de bâtiment, la ville, la finition et l’objectif du chantier."
  },
  {
    title: "Proposer une solution cohérente",
    text: "Le conseil porte sur la catégorie de tôle ou le système d’évacuation d’eau le plus pertinent."
  },
  {
    title: "Rester disponibles",
    text: "Le suivi commercial se fait avec réactivité pour faciliter la décision et la mise en oeuvre."
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        actions={[
          {
            href: buildWhatsAppLink(),
            label: "Échanger avec TMC",
            newTab: true
          },
          {
            href: "/produits",
            label: "Voir les produits",
            variant: "secondary",
            icon: false
          }
        ]}
        aside={
          <div className="space-y-4">
            <div className="flex items-start gap-3 rounded-[1.4rem] border border-steel-200 bg-canvas/70 p-4">
              <MapPinIcon className="mt-1 h-5 w-5 text-copper-600" />
              <div>
                <p className="text-sm font-semibold text-ink">{siteConfig.location.label}</p>
                <p className="mt-1 text-sm leading-7 text-steel-600">
                  Point d’ancrage principal pour les échanges commerciaux.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-[1.4rem] border border-steel-200 bg-canvas/70 p-4">
              <FactoryIcon className="mt-1 h-5 w-5 text-copper-600" />
              <div>
                <p className="text-sm font-semibold text-ink">Fabrication locale / distribution</p>
                <p className="mt-1 text-sm leading-7 text-steel-600">
                  Une logique de proximité utile pour le marché camerounais.
                </p>
              </div>
            </div>
          </div>
        }
        description="TMC se positionne comme un acteur sérieux de la toiture et de l’évacuation d’eau, avec un discours simple, un contact direct et une approche orientée résultat."
        eyebrow="Qui sommes-nous"
        title="Une entreprise de Bafoussam engagée pour des matériaux fiables et un service crédible"
      />

      <section className="section-shell py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] border border-steel-200 shadow-soft">
            <Image
              alt="Stock de tôles profilées chez TMC"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 44vw"
              src="/images/tole-profilee-stock.jpg"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,27,37,0.05),rgba(17,27,37,0.56))]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.24em] text-copper-200">
                TMC à Bafoussam
              </p>
              <p className="mt-2 max-w-sm font-display text-2xl tracking-[-0.04em]">
                Une vision claire de la toiture durable et bien finie.
              </p>
            </div>
          </div>

          <div className="max-w-2xl">
            <SectionHeading
              description="TMC : Tôles et Métrobondes du Cameroun accompagne les clients qui recherchent des matériaux de toiture solides, un contact rapide et une entreprise qui comprend les réalités du terrain. Notre rôle ne se limite pas à vendre des tôles ; nous voulons aider chaque client à sécuriser une solution cohérente pour son bâtiment."
              eyebrow="Notre histoire professionnelle"
              title="Un positionnement simple : fournir des matériaux qui tiennent et un service qui rassure"
            />
            <p className="mt-6 text-base leading-8 text-steel-700">
              En travaillant sur des besoins variés, de la maison au hangar, TMC a construit
              une offre centrée sur les produits les plus demandés du marché : tôles
              ondulées, bac acier, tôles galvanisées, Aluzinc, métrobondes, gouttières
              PVC et accessoires d’évacuation d’eau.
            </p>
            <p className="mt-4 text-base leading-8 text-steel-700">
              La promesse est volontairement crédible : une disponibilité de contact,
              un conseil pratique et des gammes adaptées au contexte camerounais, sans
              exagération inutile.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-steel-200 bg-white">
        <div className="section-shell py-20 sm:py-24">
          <SectionHeading
            align="center"
            description="Ces engagements structurent la manière dont TMC présente ses produits, conseille ses clients et gère la relation commerciale."
            eyebrow="Nos valeurs"
            title="Quatre repères pour garder un service sérieux et constant"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {siteConfig.values.map((value) => (
              <article
                className="rounded-[1.8rem] border border-steel-200 bg-canvas/70 p-6 shadow-soft"
                key={value.title}
              >
                <h2 className="font-display text-2xl tracking-[-0.04em] text-ink">
                  {value.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-steel-600">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] bg-ink p-8 text-white shadow-lift sm:p-10">
            <p className="eyebrow text-copper-200">Mission</p>
            <h2 className="mt-4 font-display text-3xl tracking-[-0.05em] sm:text-4xl">
              Mettre à disposition des matériaux de toiture et d’évacuation d’eau fiables
            </h2>
            <p className="mt-5 text-base leading-8 text-steel-200">
              Notre mission est de fournir des solutions durables, adaptées au marché local
              et suffisamment claires pour aider chaque client à prendre une décision sereine.
            </p>
          </article>

          <article className="rounded-[2rem] border border-steel-200 bg-[#ece4d8] p-8 shadow-soft sm:p-10">
            <p className="eyebrow">Vision</p>
            <h2 className="mt-4 font-display text-3xl tracking-[-0.05em] text-ink sm:text-4xl">
              Devenir un repère de confiance pour les besoins de couverture au Cameroun
            </h2>
            <p className="mt-5 text-base leading-8 text-steel-700">
              TMC veut être identifiée comme une entreprise sérieuse, disponible et cohérente,
              capable d’accompagner aussi bien le client particulier que le professionnel.
            </p>
          </article>
        </div>
      </section>

      <section className="border-t border-steel-200 bg-white">
        <div className="section-shell py-20 sm:py-24">
          <SectionHeading
            description="Le travail s’appuie sur une relation courte, claire et directement utile au projet du client."
            eyebrow="Notre manière d’accompagner"
            title="Une méthode simple pour garder la relation fluide"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {processSteps.map((step) => (
              <article
                className="rounded-[1.8rem] border border-steel-200 bg-canvas/70 p-6"
                key={step.title}
              >
                <h3 className="font-display text-2xl tracking-[-0.04em] text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-steel-600">{step.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-[2rem] bg-[#ece4d8] p-8 shadow-soft">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div className="max-w-3xl">
                <p className="eyebrow">Bloc confiance</p>
                <h2 className="mt-4 font-display text-3xl tracking-[-0.05em] text-ink sm:text-4xl">
                  TMC travaille avec un ton direct, une offre lisible et des engagements
                  réalistes
                </h2>
                <p className="mt-5 text-base leading-8 text-steel-700">
                  Cette sobriété fait partie de notre crédibilité. Nous préférons guider
                  clairement le client vers la bonne solution plutôt que multiplier les
                  promesses.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <ButtonLink href={buildWhatsAppLink()} newTab>
                  Contacter TMC
                </ButtonLink>
                <ButtonLink href="/contact" icon={false} variant="secondary">
                  Voir les coordonnées
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
