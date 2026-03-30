import { apps } from "@/applications";

export interface CategoryTheme {
  icon: string;
  accent: string; // border-l-{color}-400
  bg: string; // bg-{color}-50
  hoverBorder: string; // hover:border-{color}-400
  decoration: string; // decoration-{color}-400
  badge: string; // bg-{color}-100 text-{color}-700
  text: string; // text-{color}-600
}

export const categoryThemes: Record<string, CategoryTheme> = {
  "Palkka & Verot": {
    icon: "💼",
    accent: "border-l-amber-400",
    bg: "bg-amber-50",
    hoverBorder: "hover:border-amber-400",
    decoration: "decoration-amber-400",
    badge: "bg-amber-100 text-amber-700",
    text: "text-amber-600",
  },
  "Säästöt & Sijoitukset": {
    icon: "📈",
    accent: "border-l-emerald-400",
    bg: "bg-emerald-50",
    hoverBorder: "hover:border-emerald-400",
    decoration: "decoration-emerald-400",
    badge: "bg-emerald-100 text-emerald-700",
    text: "text-emerald-600",
  },
  "Arki & Koti": {
    icon: "🏠",
    accent: "border-l-orange-400",
    bg: "bg-orange-50",
    hoverBorder: "hover:border-orange-400",
    decoration: "decoration-orange-400",
    badge: "bg-orange-100 text-orange-700",
    text: "text-orange-600",
  },
  "Terveys & Liikunta": {
    icon: "❤️",
    accent: "border-l-rose-400",
    bg: "bg-rose-50",
    hoverBorder: "hover:border-rose-400",
    decoration: "decoration-rose-400",
    badge: "bg-rose-100 text-rose-700",
    text: "text-rose-600",
  },
  Työkalut: {
    icon: "🛠️",
    accent: "border-l-sky-400",
    bg: "bg-sky-50",
    hoverBorder: "hover:border-sky-400",
    decoration: "decoration-sky-400",
    badge: "bg-sky-100 text-sky-700",
    text: "text-sky-600",
  },
  Viihde: {
    icon: "🎮",
    accent: "border-l-violet-400",
    bg: "bg-violet-50",
    hoverBorder: "hover:border-violet-400",
    decoration: "decoration-violet-400",
    badge: "bg-violet-100 text-violet-700",
    text: "text-violet-600",
  },
};

const defaultTheme: CategoryTheme = {
  icon: "📦",
  accent: "border-l-gray-400",
  bg: "bg-gray-50",
  hoverBorder: "hover:border-gray-400",
  decoration: "decoration-gray-400",
  badge: "bg-gray-100 text-gray-700",
  text: "text-gray-600",
};

export function getCategoryTheme(categoryName: string): CategoryTheme {
  return categoryThemes[categoryName] ?? defaultTheme;
}

/** Look up the category theme for a given app route */
export function getThemeByRoute(route: string): CategoryTheme {
  for (const [categoryName, category] of Object.entries(apps)) {
    if (category.apps.some((app) => route.includes(app.route))) {
      return getCategoryTheme(categoryName);
    }
  }
  return defaultTheme;
}

/** Look up the category theme by slug (path segment like "talous") */
export function getThemeBySlug(
  slug: string,
): { name: string; theme: CategoryTheme } | undefined {
  for (const [name, category] of Object.entries(apps)) {
    if (category.path === `/${slug}`) {
      return { name, theme: getCategoryTheme(name) };
    }
  }
  return undefined;
}

export const appIcons: Record<string, string> = {
  kuukausipalkkalaskuri: "💵",
  tuntipalkkalaskuri: "⏱️",
  vuosipalkkalaskuri: "📅",
  opintolainahyvityslaskuri: "🎓",
  "korkoa-korolle-laskuri": "📈",
  "sahkoauton-matkakululaskuri": "🔋",
  bensakululaskuri: "⛽",
  alennuslaskuri: "🏷️",
  osamaksulaskuri: "💳",
  tippilaskuri: "🍽️",
  "alv-laskuri": "🧾",
  "lainan-lyhennyslaskuri": "🏦",
  "veroprosentti-laskuri": "📊",
  "sijoitustuoton-laskuri": "💹",
  "yksinkertainen-korkoa-korolle-laskuri": "🔄",
  perusaineenvaihduntalaskuri: "🔥",
  kalorintarvelaskuri: "🥗",
  "lentojen-hiilijalanjalkilaskuri": "✈️",
  juoksuvauhtilaskuri: "🏃",
  "bmi-laskuri": "⚖️",
  "unen-tarve-laskuri": "😴",
  "paivittainen-kalorintarve-laskuri": "🍎",
  "opintojen-keskiarvolaskuri": "📚",
  "qr-generaattori": "📱",
  nimipaivahakukone: "🗓️",
  sanalaskuri: "✍️",
  ajokustannuslaskuri: "🚗",
  "sahkolaskun-laskuri": "💡",
  "nimikone/koirat": "🐕",
  "nimikone/kissat": "🐈",
  kesalomalaskuri: "☀️",
  joululaskuri: "🎄",
  kuukausikone: "📆",
  lippupeli: "🏁",
  sotilasmerkit: "⭐",
  "vyotaisyrja-laskuri": "📏",
  nettopalkkalaskuri: "💰",
  "saastotavoite-laskuri": "🎯",
  "neliohinta-laskuri": "🏘️",
  "vesitarve-laskuri": "💧",
  "ika-laskuri": "🎂",
  noppageneraattori: "🎲",
  prosenttilaskuri: "📐",
  promillelaskuri: "🍺",
  lampotilamuunnin: "🌡️",
  "paivamaara-laskuri": "📅",
  unisyklilaskuri: "😴",
  makrolaskuri: "🥩",
  vuokratuottolaskuri: "🏠",
  pituusmuunnin: "📏",
  painomuunnin: "⚖️",
  horoskooppi: "✨",
  lotonumerogeneraattori: "🎰",
  satunnaislukugeneraattori: "🎲",
  tyotuntilaskuri: "⏰",
  raskauslaskuri: "🤰",
  sydansykelaskuri: "💓",
  kalorienpolttolaskuri: "🔥",
  tuuliviimalaskuri: "🌬️",
  valuuttamuunnin: "💱",
  nopeusmuunnin: "🏎️",
  "pinta-alamuunnin": "📐",
  annoslaskuri: "🍳",
  elamalaskuri: "🎂",
  arvontakone: "🎰",
};
