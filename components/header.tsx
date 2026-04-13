"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ButtonLink } from "@/components/button-link";
import { CloseIcon, MenuIcon, MessageIcon, PhoneIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-data";
import { buildWhatsAppLink, cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-white/10 transition-all duration-300",
        scrolled ? "bg-ink/92 shadow-lift backdrop-blur-xl" : "bg-ink/78 backdrop-blur-lg"
      )}
    >
      <div className="section-shell">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link className="group flex min-w-0 items-center gap-3" href="/">
            <div className="relative h-11 w-11 flex-none overflow-hidden rounded-full border border-white/10 bg-white/95 shadow-soft">
              <Image
                alt="Logo TMC"
                className="object-cover"
                fill
                sizes="44px"
                src="/images/logo-tmc.jpg"
              />
            </div>
            <div className="min-w-0">
              <p className="truncate font-display text-lg tracking-[-0.04em] text-white transition group-hover:text-copper-200">
                TMC
              </p>
              <p className="truncate text-[0.7rem] uppercase tracking-[0.22em] text-steel-300">
                Tôles et Métrobondes du Cameroun
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {siteConfig.nav.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition",
                    active
                      ? "bg-white/10 text-white"
                      : "text-steel-200 hover:bg-white/5 hover:text-white"
                  )}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-steel-100 transition hover:border-white/20 hover:text-white"
              href={siteConfig.phoneHref}
            >
              <PhoneIcon className="h-4 w-4" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <ButtonLink href={buildWhatsAppLink()} newTab>
              WhatsApp
            </ButtonLink>
          </div>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-white/20 hover:bg-white/5 lg:hidden"
            onClick={() => setOpen((current) => !current)}
            type="button"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-white/10 transition-all duration-300 lg:hidden",
          open ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
        )}
        id="mobile-navigation"
      >
        <div className="section-shell space-y-6 bg-ink/98 py-6">
          <nav className="grid gap-2">
            {siteConfig.nav.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  className={cn(
                    "rounded-2xl border px-4 py-3 text-base font-medium transition",
                    active
                      ? "border-copper-300/50 bg-copper-300/10 text-white"
                      : "border-white/10 text-steel-100 hover:border-white/20 hover:bg-white/5"
                  )}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="grid gap-3 sm:grid-cols-2">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3.5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/5"
              href={siteConfig.phoneHref}
            >
              <PhoneIcon className="h-4 w-4" />
              <span>Appeler</span>
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full bg-pine-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-pine-400"
              href={buildWhatsAppLink()}
              rel="noreferrer noopener"
              target="_blank"
            >
              <MessageIcon className="h-4 w-4" />
              <span>Écrire sur WhatsApp</span>
            </a>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 text-sm text-steel-200">
            <p>{siteConfig.location.label}</p>
            <p className="mt-1">{siteConfig.hours}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

