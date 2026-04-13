import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p className={cn("eyebrow", light && "text-copper-200")}>{eyebrow}</p>
      <h2
        className={cn(
          "mt-4 font-display text-3xl tracking-[-0.05em] text-ink sm:text-4xl lg:text-[3rem]",
          light && "text-white"
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mt-5 text-base leading-8 text-steel-600 sm:text-lg",
          light && "text-steel-200"
        )}
      >
        {description}
      </p>
    </div>
  );
}

