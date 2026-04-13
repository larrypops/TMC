import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/button-link";
import { ClockIcon, MapPinIcon, MessageIcon, PhoneIcon } from "@/components/icons";
import { products, siteConfig } from "@/lib/site-data";
import { buildWhatsAppLink } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="section-shell py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_0.8fr_0.8fr]">
          <div className="max-w-xl">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/10 bg-white">
                <Image
                  alt="Logo TMC"
                  className="object-cover"
                  fill
                  sizes="56px"
                  src="/images/logo-tmc.jpg"
                />
              </div>
              <div>
                <p className="font-display text-2xl tracking-[-0.04em]">{siteConfig.shortName}</p>
                <p className="text-sm text-steel-300">{siteConfig.legalName}</p>
              </div>
            </div>

            <p className="mt-6 max-w-lg text-sm leading-7 text-steel-200">
              Basée à Bafoussam, TMC accompagne les besoins en tôles, métrobondes et
              évacuation d’eau pour les maisons, magasins, hangars et projets de
              couverture au Cameroun.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={buildWhatsAppLink()} newTab>
                Demander un devis
              </ButtonLink>
              <ButtonLink href={siteConfig.phoneHref} icon={false} variant="secondary">
                Appeler maintenant
              </ButtonLink>
            </div>
          </div>

          <div>
            <p className="font-display text-lg tracking-[-0.03em] text-white">Navigation</p>
            <div className="mt-6 grid gap-3 text-sm text-steel-200">
              {siteConfig.nav.map((item) => (
                <Link className="transition hover:text-white" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>

            <p className="mt-10 font-display text-lg tracking-[-0.03em] text-white">
              Produits clés
            </p>
            <div className="mt-6 grid gap-3 text-sm text-steel-200">
              {products.slice(0, 4).map((product) => (
                <Link
                  className="transition hover:text-white"
                  href={`/produits#${product.slug}`}
                  key={product.slug}
                >
                  {product.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-lg tracking-[-0.03em] text-white">Contact rapide</p>
            <div className="mt-6 grid gap-4 text-sm text-steel-200">
              <a className="inline-flex items-center gap-3 transition hover:text-white" href={siteConfig.phoneHref}>
                <PhoneIcon className="h-5 w-5 text-copper-300" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
              <a
                className="inline-flex items-center gap-3 transition hover:text-white"
                href={buildWhatsAppLink()}
                rel="noreferrer noopener"
                target="_blank"
              >
                <MessageIcon className="h-5 w-5 text-pine-300" />
                <span>WhatsApp direct</span>
              </a>
              <div className="inline-flex items-center gap-3">
                <MapPinIcon className="h-5 w-5 text-copper-300" />
                <span>{siteConfig.location.label}</span>
              </div>
              <div className="inline-flex items-center gap-3">
                <ClockIcon className="h-5 w-5 text-copper-300" />
                <span>{siteConfig.hours}</span>
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.26em] text-steel-400">
                Villes desservies
              </p>
              <p className="mt-3 text-sm leading-7 text-steel-100">
                {siteConfig.coverageCities.join(" • ")}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.22em] text-steel-400 sm:flex-row sm:items-center sm:justify-between">
          <p>TMC Cameroun</p>
          <p>Matériaux de toiture et évacuation d’eau</p>
        </div>
      </div>
    </footer>
  );
}

