import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <section className="section-shell py-28 sm:py-32">
      <div className="max-w-2xl rounded-[2rem] border border-steel-200 bg-white p-8 shadow-soft sm:p-10">
        <p className="eyebrow">Page introuvable</p>
        <h1 className="mt-4 font-display text-4xl tracking-[-0.05em] text-ink">
          Cette page n’est pas disponible
        </h1>
        <p className="mt-5 text-base leading-8 text-steel-700">
          Revenez vers l’accueil ou consultez nos produits pour retrouver rapidement les
          informations sur les tôles, métrobondes et gouttières PVC.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/">Retour à l’accueil</ButtonLink>
          <ButtonLink href="/produits" icon={false} variant="secondary">
            Voir les produits
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
