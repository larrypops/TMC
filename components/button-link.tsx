import Link from "next/link";
import type { ReactNode } from "react";

import { ArrowUpRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  newTab?: boolean;
  icon?: boolean;
  ariaLabel?: string;
};

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  newTab = false,
  icon = true,
  ariaLabel
}: ButtonLinkProps) {
  const classes = cn(
    "btn-core btn-shine",
    variant === "primary" && "btn-primary",
    variant === "secondary" && "btn-secondary",
    variant === "ghost" && "btn-ghost",
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {icon ? <ArrowUpRightIcon className="h-4 w-4 flex-none" /> : null}
    </>
  );

  if (href.startsWith("http") || href.startsWith("tel:")) {
    return (
      <a
        aria-label={ariaLabel}
        className={classes}
        href={href}
        rel={newTab ? "noreferrer noopener" : undefined}
        target={newTab ? "_blank" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link aria-label={ariaLabel} className={classes} href={href}>
      {content}
    </Link>
  );
}

