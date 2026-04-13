import { MessageIcon } from "@/components/icons";
import { buildWhatsAppLink } from "@/lib/utils";

export function FloatingWhatsApp() {
  return (
    <a
      aria-label="Contacter TMC sur WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full bg-pine-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lift transition hover:bg-pine-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine-200 animate-soft-pulse"
      href={buildWhatsAppLink()}
      rel="noreferrer noopener"
      target="_blank"
    >
      <MessageIcon className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

