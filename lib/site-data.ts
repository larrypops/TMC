export type NavItem = {
  href: string;
  label: string;
};

export type ProductCategory = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  benefits: string[];
  uses: string[];
  image: string;
  ctaLabel: string;
  note: string;
};

export const siteConfig = {
  name: "TMC : Tôles et Métrobondes du Cameroun",
  shortName: "TMC",
  legalName: "TMC : Tôles et Métrobondes du Cameroun",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://tmc-cameroun.com",
  phoneDisplay: "+237 6 90 09 67 98",
  phoneHref: "tel:+237690096798",
  whatsappNumber: "237690096798",
  whatsappDefaultMessage:
    "Bonjour TMC, je souhaite avoir plus d’informations sur vos tôles et matériaux.",
  location: {
    city: "Bafoussam",
    country: "Cameroun",
    label: "Bafoussam, Cameroun"
  },
  hours: "Ouvert 24h/24",
  nav: [
    { href: "/", label: "Accueil" },
    { href: "/produits", label: "Produits" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" }
  ] satisfies NavItem[],
  coverageCities: [
    "Bafoussam",
    "Douala",
    "Yaoundé",
    "Dschang",
    "Mbouda",
    "Bafang",
    "Bamenda"
  ],
  trustPoints: [
    {
      title: "Qualité durable",
      description:
        "Des matériaux pensés pour résister au climat, à la pluie et aux usages intensifs."
    },
    {
      title: "Prix compétitifs",
      description:
        "Des solutions adaptées au budget des particuliers, artisans et professionnels."
    },
    {
      title: "Fabrication locale",
      description:
        "Une production au plus près du marché camerounais pour plus de réactivité."
    },
    {
      title: "Accompagnement client",
      description:
        "Un échange direct sur WhatsApp ou par téléphone pour orienter votre choix."
    }
  ],
  values: [
    {
      title: "Qualité",
      description:
        "Nous privilégions des matériaux fiables et des finitions cohérentes avec les exigences du terrain."
    },
    {
      title: "Durabilité",
      description:
        "Nos gammes sont choisies pour tenir dans le temps et protéger durablement les bâtiments."
    },
    {
      title: "Disponibilité",
      description:
        "Nous restons accessibles 24h/24 pour répondre rapidement aux besoins urgents de chantier."
    },
    {
      title: "Proximité client",
      description:
        "Chaque demande est traitée avec écoute, conseil pratique et sens du résultat."
    }
  ],
  faq: [
    {
      question: "TMC fournit-elle des matériaux pour maisons, magasins et hangars ?",
      answer:
        "Oui. Les gammes TMC couvrent les besoins des habitations, des commerces, des dépôts et des bâtiments à usage professionnel."
    },
    {
      question: "Peut-on commander depuis une autre ville que Bafoussam ?",
      answer:
        "Oui. Les demandes peuvent être préparées depuis Bafoussam avec une couverture possible vers plusieurs villes du Cameroun selon la logistique du projet."
    },
    {
      question: "Comment obtenir rapidement les prix ?",
      answer:
        "Le moyen le plus direct est WhatsApp. Vous pouvez aussi appeler pour préciser le type de tôle, les dimensions et la ville de livraison."
    },
    {
      question: "Les gouttières PVC et accessoires sont-ils disponibles ?",
      answer:
        "Oui. TMC propose aussi les éléments d’évacuation d’eau comme les gouttières PVC, tuyaux de descente, collecteurs et accessoires."
    }
  ]
};

export const products: ProductCategory[] = [
  {
    slug: "toles-ondulees",
    name: "Tôles ondulées",
    summary: "Une couverture simple, fiable et économique pour les constructions du quotidien.",
    description:
      "Les tôles ondulées restent une référence pour les projets qui recherchent une pose rapide, un entretien limité et un coût maîtrisé. Elles conviennent parfaitement aux maisons, annexes, boutiques et ouvrages utilitaires.",
    benefits: [
      "Pose pratique sur chantiers neufs ou en rénovation",
      "Bon équilibre entre budget, protection et durabilité",
      "Format adapté aux besoins courants de couverture"
    ],
    uses: ["Maisons", "Annexes", "Boutiques", "Abris et dépendances"],
    image: "/images/metrobondes-fabrication.jpg",
    ctaLabel: "Demander les prix",
    note: "Disponible selon les finitions et épaisseurs adaptées au projet."
  },
  {
    slug: "bac-acier",
    name: "Bac acier",
    summary: "La solution robuste pour les toitures qui demandent portée, tenue et rapidité de pose.",
    description:
      "Le bac acier est apprécié pour sa rigidité, son rendu net et sa capacité à équiper des bâtiments résidentiels comme professionnels. Il répond bien aux besoins des hangars, magasins, ateliers et toitures contemporaines.",
    benefits: [
      "Très bon comportement pour les ouvrages de grande couverture",
      "Aspect professionnel et lignes régulières",
      "Mise en oeuvre rapide sur structures adaptées"
    ],
    uses: ["Hangars", "Magasins", "Ateliers", "Toitures modernes"],
    image: "/images/hero-bac-acier.jpg",
    ctaLabel: "Commander via WhatsApp",
    note: "Idéal pour les besoins de couverture à la fois techniques et esthétiques."
  },
  {
    slug: "toles-galvanisees-aluzinc",
    name: "Tôles galvanisées / Aluzinc",
    summary: "Des finitions pensées pour renforcer la tenue face à l’humidité et à la corrosion.",
    description:
      "Les tôles galvanisées et Aluzinc sont recherchées pour leur bonne résistance et leur polyvalence. Elles conviennent aux clients qui veulent une couverture durable avec une finition adaptée aux réalités climatiques locales.",
    benefits: [
      "Protection renforcée contre les agressions extérieures",
      "Bon niveau de durabilité pour un usage résidentiel ou professionnel",
      "Choix pertinent pour les zones exposées à l’humidité"
    ],
    uses: ["Toitures exposées", "Bâtiments commerciaux", "Extensions", "Réhabilitations"],
    image: "/images/tole-profilee-stock.jpg",
    ctaLabel: "Demander les prix",
    note: "Une gamme utile lorsque la résistance dans le temps est prioritaire."
  },
  {
    slug: "metrobondes",
    name: "Métrobondes",
    summary: "Un profil de toiture apprécié pour son cachet et sa finition premium.",
    description:
      "Les métrobondes apportent une signature visuelle plus élégante tout en assurant une couverture fiable. Elles sont souvent choisies pour les maisons, villas, bâtiments commerciaux et projets qui veulent associer esthétique et protection.",
    benefits: [
      "Rendu soigné pour les projets résidentiels et commerciaux",
      "Bonne présence visuelle sur les bâtiments de standing",
      "Solution adaptée aux clients qui veulent valoriser leur toiture"
    ],
    uses: ["Maisons", "Villas", "Commerces", "Bâtiments en finition premium"],
    image: "/images/realisation-toiture.jpg",
    ctaLabel: "Commander via WhatsApp",
    note: "Un excellent choix pour les toitures visibles qui doivent inspirer confiance."
  },
  {
    slug: "gouttieres-pvc",
    name: "Gouttières PVC",
    summary: "La protection essentielle pour canaliser l’eau et préserver façades et fondations.",
    description:
      "Les gouttières PVC permettent une évacuation propre des eaux pluviales et limitent les projections qui dégradent les murs, les avancées de toit et les abords du bâtiment. Elles s’intègrent facilement aux constructions neuves comme aux rénovations.",
    benefits: [
      "Aide à protéger la façade et les zones sensibles du bâtiment",
      "Pose simple et entretien raisonnable",
      "Compatible avec différents usages résidentiels et commerciaux"
    ],
    uses: ["Maisons", "Magasins", "Bureaux", "Bâtiments avec collecte d’eau"],
    image: "/images/realisation-toiture.jpg",
    ctaLabel: "Demander les prix",
    note: "Un complément stratégique pour une toiture bien pensée."
  },
  {
    slug: "tuyaux-de-descente",
    name: "Tuyaux de descente",
    summary: "Une évacuation verticale propre pour guider l’eau vers la bonne zone de rejet.",
    description:
      "Les tuyaux de descente complètent les gouttières pour sécuriser le cheminement de l’eau. Ils réduisent les ruissellements désordonnés et participent à la protection des murs, terrasses et zones de passage.",
    benefits: [
      "Canalisation maîtrisée des eaux pluviales",
      "Réduction des traces et éclaboussures au pied du bâtiment",
      "Intégration cohérente avec les systèmes de gouttières PVC"
    ],
    uses: ["Façades", "Cours", "Terrasses", "Toitures avec collecte d’eau"],
    image: "/images/hero-bac-acier.jpg",
    ctaLabel: "Commander via WhatsApp",
    note: "Particulièrement utile pour garder un chantier propre et durable."
  },
  {
    slug: "collecteurs-et-accessoires",
    name: "Collecteurs et accessoires",
    summary: "Les pièces de finition qui assurent une installation cohérente et durable.",
    description:
      "Naissances, coudes, raccords, colliers et autres accessoires permettent de finaliser l’installation de manière propre. Ce sont des détails techniques essentiels pour une évacuation d’eau fiable et un rendu professionnel.",
    benefits: [
      "Finition soignée de l’installation",
      "Montage cohérent des réseaux d’évacuation",
      "Amélioration de la fiabilité globale du système"
    ],
    uses: ["Gouttières", "Descentes", "Collecte d’eau", "Finitions de chantier"],
    image: "/images/metrobondes-fabrication.jpg",
    ctaLabel: "Demander les prix",
    note: "Les accessoires font la différence entre une pose provisoire et un système complet."
  }
];

export const homeShowcase = [products[1], products[3], products[4]];

export const homeCategories = products.map((product) => ({
  href: `/produits#${product.slug}`,
  name: product.name,
  summary: product.summary
}));

