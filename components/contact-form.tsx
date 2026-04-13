"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

import { products } from "@/lib/site-data";
import { buildWhatsAppLink } from "@/lib/utils";

type FormState = {
  name: string;
  phone: string;
  city: string;
  product: string;
  details: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  city: "",
  product: "",
  details: ""
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "redirected">("idle");

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      "Bonjour TMC, je souhaite demander un devis rapide.",
      form.name ? `Nom : ${form.name}` : null,
      form.phone ? `Téléphone : ${form.phone}` : null,
      form.city ? `Ville / localité : ${form.city}` : null,
      form.product ? `Produit recherché : ${form.product}` : null,
      form.details ? `Besoin : ${form.details}` : null
    ]
      .filter(Boolean)
      .join("\n");

    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
    setStatus("redirected");
  }

  return (
    <form
      className="rounded-[2rem] border border-steel-200 bg-white p-6 shadow-soft sm:p-8"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <p className="eyebrow">Devis rapide</p>
          <h2 className="mt-3 font-display text-3xl tracking-[-0.05em] text-ink">
            Préparez votre message en quelques secondes
          </h2>
          <p className="mt-3 text-sm leading-7 text-steel-600">
            Dès l’envoi, votre demande s’ouvre dans WhatsApp pour un traitement plus
            rapide.
          </p>
        </div>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-steel-700">Nom</span>
          <input
            className="form-field"
            name="name"
            onChange={handleChange}
            placeholder="Votre nom"
            value={form.name}
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-steel-700">Téléphone</span>
          <input
            className="form-field"
            name="phone"
            onChange={handleChange}
            placeholder="+237..."
            value={form.phone}
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-steel-700">Ville / localité</span>
          <input
            className="form-field"
            name="city"
            onChange={handleChange}
            placeholder="Ex. Bafoussam, Douala"
            value={form.city}
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-steel-700">Produit recherché</span>
          <select className="form-field" name="product" onChange={handleChange} value={form.product}>
            <option value="">Sélectionnez une catégorie</option>
            {products.map((product) => (
              <option key={product.slug} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 sm:col-span-2">
          <span className="text-sm font-medium text-steel-700">Détails du besoin</span>
          <textarea
            className="form-field min-h-[160px] resize-y"
            name="details"
            onChange={handleChange}
            placeholder="Décrivez le type de bâtiment, les quantités estimées ou la ville de livraison."
            value={form.details}
          />
        </label>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button className="btn-core btn-primary btn-shine justify-center" type="submit">
          Ouvrir la demande sur WhatsApp
        </button>
        <p className="text-sm leading-7 text-steel-600">
          Réponse prioritaire sur WhatsApp pour les demandes de prix et de disponibilité.
        </p>
      </div>

      {status === "redirected" ? (
        <p className="mt-4 text-sm font-medium text-pine-700">
          Votre message est prêt. Si aucune fenêtre ne s’ouvre, utilisez aussi le bouton
          WhatsApp visible sur la page.
        </p>
      ) : null}
    </form>
  );
}
