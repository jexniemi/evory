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
  "monthly-salary-calculator": "💵",
  "hourly-salary-calculator": "⏱️",
  "annual-salary-calculator": "📅",
  "student-loan-credit-calculator": "🎓",
  "compound-interest-calculator": "📈",
  "electric-car-trip-cost-calculator": "🔋",
  "fuel-cost-calculator": "⛽",
  "discount-calculator": "🏷️",
  "installment-calculator": "💳",
  "tip-calculator": "🍽️",
  "vat-calculator": "🧾",
  "loan-repayment-calculator": "🏦",
  "tax-percentage-calculator": "📊",
  "investment-return-calculator": "💹",
  "simple-compound-interest-calculator": "🔄",
  "bmr-calculator": "🔥",
  "daily-calorie-needs-calculator": "🥗",
  "flight-carbon-footprint-calculator": "✈️",
  "running-pace-calculator": "🏃",
  "bmi-calculator": "⚖️",
  "sleep-needs-calculator": "😴",
  "gpa-calculator": "📚",
  "qr-generator": "📱",
  "name-day-search": "🗓️",
  "word-counter": "✍️",
  "driving-cost-calculator": "🚗",
  "electricity-bill-calculator": "💡",
  "name-generator": "🐕",
  "vacation-days-calculator": "☀️",
  "days-until-christmas": "🎄",
  "calendar-tool": "📆",
  "flag-game": "🏁",
  "military-insignia-quiz": "⭐",
  "wind-chill-calculator": "🌬️",
  "net-salary-calculator": "💰",
  "savings-goal-calculator": "🎯",
  "price-per-square-foot-calculator": "🏘️",
  "water-needs-calculator": "💧",
  "age-calculator": "🎂",
  "dice-generator": "🎲",
  "percentage-calculator": "📐",
  "bac-calculator": "🍺",
  "temperature-converter": "🌡️",
  "date-calculator": "📅",
  "sleep-cycle-calculator": "😴",
  "macro-calculator": "🥩",
  "rental-yield-calculator": "🏠",
  "length-converter": "📏",
  "weight-converter": "⚖️",
  horoscope: "✨",
  "lottery-number-generator": "🎰",
  "random-number-generator": "🎲",
  "work-hours-calculator": "⏰",
  "pregnancy-calculator": "🤰",
  "heart-rate-calculator": "💓",
  "calorie-burn-calculator": "🔥",
  "currency-converter": "💱",
  "speed-converter": "🏎️",
  "area-converter": "📐",
  "portion-calculator": "🍳",
  "life-calculator": "🎂",
  "raffle-machine": "🎰",
};
