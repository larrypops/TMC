import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { ProductCategory, siteConfig } from "@/lib/site-data";
import { buildWhatsAppLink, cn } from "@/lib/utils";

type ProductSectionProps = {
  product: ProductCategory;
  index: number;
};

export function ProductSection({ product, index }: ProductSectionProps) {
  const reverse = index % 2 === 1;

  return (
    <section
      className={cn(
        "scroll-mt-28 border-b border-steel-200",
        index % 2 === 0 ? "bg-white" : "bg-[#f0e8dd]"
      )}
      id={product.slug}
    >
      <div className="section-shell py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className={cn("relative min-h-[360px] lg:min-h-[440px]", reverse && "lg:order-2")}>
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-steel-200 bg-ink shadow-soft">
              <Image
                alt={product.name}
                className="object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                src={product.image}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,27,37,0.05),rgba(17,27,37,0.55))]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xs uppercase tracking-[0.24em] text-copper-200">
                  Catégorie produit
                </p>
                <p className="mt-2 font-display text-2xl tracking-[-0.04em]">{product.name}</p>
              </div>
            </div>
          </div>

          <div className={cn("max-w-xl", reverse && "lg:order-1")}>
            <p className="eyebrow">0{index + 1}</p>
            <h2 className="mt-4 font-display text-3xl tracking-[-0.05em] text-ink sm:text-4xl">
              {product.name}
            </h2>
            <p className="mt-5 text-lg leading-8 text-steel-700">{product.summary}</p>
            <p className="mt-4 text-base leading-8 text-steel-600">{product.description}</p>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-sm uppercase tracking-[0.24em] text-steel-500">
                  Bénéfices
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-steel-700">
                  {product.benefits.map((benefit) => (
                    <li className="flex gap-3" key={benefit}>
                      <span className="mt-2 h-2.5 w-2.5 flex-none rounded-full bg-copper-400" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-[0.24em] text-steel-500">Usages</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.uses.map((useCase) => (
                    <span
                      className="rounded-full border border-steel-200 bg-white/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-steel-600"
                      key={useCase}
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-8 border-l-2 border-copper-300 pl-4 text-sm leading-7 text-steel-600">
              {product.note}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                href={buildWhatsAppLink(
                  `Bonjour TMC, je souhaite recevoir les prix pour ${product.name}.`
                )}
                newTab
              >
                {product.ctaLabel}
              </ButtonLink>
              <ButtonLink href={siteConfig.phoneHref} icon={false} variant="secondary">
                Appeler TMC
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

