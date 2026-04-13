import { ButtonLink } from "@/components/button-link";
import { ContactForm } from "@/components/contact-form";
import { ClockIcon, MapPinIcon, MessageIcon, PhoneIcon, TruckIcon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";
import { buildWhatsAppLink } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Contact TMC à Bafoussam",
  description:
    "Contactez TMC à Bafoussam par téléphone ou WhatsApp pour vos besoins en tôles, bac acier, métrobondes, gouttières PVC et accessoires au Cameroun.",
  path: "/contact",
  keywords: [
    "contact tôles Bafoussam",
    "WhatsApp tôles Cameroun",
    "devis toiture Bafoussam",
    "fournisseur toiture Cameroun contact"
  ]
});

const quickCards = [
  {
    title: "Téléphone",
    text: siteConfig.phoneDisplay,
    icon: PhoneIcon,
    href: siteConfig.phoneHref
  },
  {
    title: "WhatsApp",
    text: "Réponse rapide pour prix, disponibilité et commande",
    icon: MessageIcon,
    href: buildWhatsAppLink()
  },
  {
    title: "Horaires",
    text: siteConfig.hours,
    icon: ClockIcon
  },
  {
    title: "Localisation",
    text: siteConfig.location.label,
    icon: MapPinIcon
  }
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        actions={[
          {
            href: buildWhatsAppLink(),
            label: "Devis rapide sur WhatsApp",
            newTab: true
          },
          {
            href: siteConfig.phoneHref,
            label: "Appeler maintenant",
            variant: "secondary",
            icon: false
          }
        ]}
        aside={
          <div className="space-y-4">
            <div className="flex items-start gap-3 rounded-[1.4rem] border border-steel-200 bg-canvas/70 p-4">
              <PhoneIcon className="mt-1 h-5 w-5 text-copper-600" />
              <div>
                <p className="text-sm font-semibold text-ink">{siteConfig.phoneDisplay}</p>
                <p className="mt-1 text-sm leading-7 text-steel-600">
                  Ligne directe pour vos demandes de prix et de disponibilité.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-[1.4rem] border border-steel-200 bg-canvas/70 p-4">
              <TruckIcon className="mt-1 h-5 w-5 text-copper-600" />
              <div>
                <p className="text-sm font-semibold text-ink">Couverture possible</p>
                <p className="mt-1 text-sm leading-7 text-steel-600">
                  Bafoussam et plusieurs villes du Cameroun selon le projet.
                </p>
              </div>
            </div>
          </div>
        }
        description="Retrouvez ici toutes les coordonnées utiles pour demander un devis, vérifier une disponibilité ou préciser la ville de livraison."
        eyebrow="Contact & devis"
        title="Besoin d’un prix rapide pour vos tôles ou votre système de gouttières ?"
      />

      <section className="section-shell py-20 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <div className="grid gap-5">
            {quickCards.map((card) => {
              const Icon = card.icon;
              const content = (
                <article className="rounded-[1.8rem] border border-steel-200 bg-white p-6 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-copper-100 p-3 text-copper-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl tracking-[-0.04em] text-ink">
                        {card.title}
                      </h2>
                      <p className="mt-2 text-sm leading-7 text-steel-600">{card.text}</p>
                    </div>
                  </div>
                </article>
              );

              if (card.href) {
                return (
                  <a
                    className="transition hover:-translate-y-0.5"
                    href={card.href}
                    key={card.title}
                    rel={card.href.startsWith("http") ? "noreferrer noopener" : undefined}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                  >
                    {content}
                  </a>
                );
              }

              return <div key={card.title}>{content}</div>;
            })}

            <div className="rounded-[1.8rem] bg-ink p-6 text-white shadow-lift">
              <p className="eyebrow text-copper-200">Conseil utile</p>
              <h2 className="mt-4 font-display text-3xl tracking-[-0.05em]">
                Pour aller plus vite, précisez le type de produit et la ville
              </h2>
              <p className="mt-4 text-sm leading-7 text-steel-200">
                Exemple : bac acier pour hangar, métrobondes pour maison, gouttières PVC
                pour façade, ou accessoires de descente.
              </p>
              <div className="mt-6">
                <ButtonLink href={buildWhatsAppLink()} newTab>
                  Ouvrir WhatsApp
                </ButtonLink>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="border-t border-steel-200 bg-white">
        <div className="section-shell py-20 sm:py-24">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
            <div>
              <p className="eyebrow">Localisation</p>
              <h2 className="mt-4 font-display text-3xl tracking-[-0.05em] text-ink sm:text-4xl">
                Bafoussam comme point de contact principal
              </h2>
              <p className="mt-5 text-base leading-8 text-steel-700">
                Les échanges se font depuis Bafoussam, avec possibilité d’accompagner des
                demandes provenant d’autres villes du Cameroun selon la disponibilité et la
                logistique.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {siteConfig.coverageCities.map((city) => (
                  <span
                    className="rounded-full border border-steel-200 bg-canvas/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-steel-600"
                    key={city}
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-steel-200 bg-[#ece4d8] p-6 shadow-soft">
              <div className="absolute inset-0 grid-sheen opacity-70" />
              <div className="relative h-full rounded-[1.6rem] border border-white/70 bg-white/70 p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-steel-500">
                  Localisation & couverture
                </p>
                <h3 className="mt-4 font-display text-3xl tracking-[-0.05em] text-ink">
                  Bafoussam, Cameroun
                </h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-steel-600">
                  Bafoussam reste le point de contact principal. Pour orienter une commande
                  ou une livraison, TMC peut aussi préciser la zone de couverture directement
                  par appel ou sur WhatsApp.
                </p>
                <div className="mt-8 rounded-[1.4rem] bg-ink p-5 text-white">
                  <p className="text-xs uppercase tracking-[0.24em] text-copper-200">
                    Besoin d’un devis rapide ?
                  </p>
                  <p className="mt-3 text-base leading-7 text-steel-100">
                    Contactez-nous sur WhatsApp pour recevoir une réponse pratique et rapide.
                  </p>
                  <div className="mt-5">
                    <ButtonLink href={buildWhatsAppLink()} newTab>
                      Demander un devis via WhatsApp
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
