import type { ReactNode } from "react";

import { ButtonLink } from "@/components/button-link";
import { cn } from "@/lib/utils";

type HeroAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost";
  newTab?: boolean;
  icon?: boolean;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: HeroAction[];
  aside?: ReactNode;
};

export function PageHero({ eyebrow, title, description, actions = [], aside }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-steel-200 bg-[#ece4d8] pt-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(188,105,33,0.16),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(37,121,106,0.14),_transparent_34%)]" />
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.45))] lg:block" />
      <div className="section-shell relative py-20 sm:py-24">
        <div className={cn("grid gap-10 lg:items-end", aside && "lg:grid-cols-[minmax(0,1fr)_320px]")}>
          <div className="max-w-3xl">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-5 font-display text-4xl tracking-[-0.06em] text-ink sm:text-5xl lg:text-[4rem]">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-steel-700 sm:text-lg">
              {description}
            </p>

            {actions.length ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {actions.map((action) => (
                  <ButtonLink
                    className="min-w-[180px] justify-center"
                    href={action.href}
                    icon={action.icon}
                    key={`${action.href}-${action.label}`}
                    newTab={action.newTab}
                    variant={action.variant}
                  >
                    {action.label}
                  </ButtonLink>
                ))}
              </div>
            ) : null}
          </div>

          {aside ? (
            <div className="rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-soft backdrop-blur-xl">
              {aside}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

