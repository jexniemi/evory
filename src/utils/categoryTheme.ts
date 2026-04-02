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
  "Salary & Taxes": {
    icon: "💼",
    accent: "border-l-amber-400",
    bg: "bg-amber-50",
    hoverBorder: "hover:border-amber-400",
    decoration: "decoration-amber-400",
    badge: "bg-amber-100 text-amber-700",
    text: "text-amber-600",
  },
  "Savings & Investments": {
    icon: "📈",
    accent: "border-l-emerald-400",
    bg: "bg-emerald-50",
    hoverBorder: "hover:border-emerald-400",
    decoration: "decoration-emerald-400",
    badge: "bg-emerald-100 text-emerald-700",
    text: "text-emerald-600",
  },
  "Daily Life & Home": {
    icon: "🏠",
    accent: "border-l-orange-400",
    bg: "bg-orange-50",
    hoverBorder: "hover:border-orange-400",
    decoration: "decoration-orange-400",
    badge: "bg-orange-100 text-orange-700",
    text: "text-orange-600",
  },
  "Health & Fitness": {
    icon: "❤️",
    accent: "border-l-rose-400",
    bg: "bg-rose-50",
    hoverBorder: "hover:border-rose-400",
    decoration: "decoration-rose-400",
    badge: "bg-rose-100 text-rose-700",
    text: "text-rose-600",
  },
  Tools: {
    icon: "🛠️",
    accent: "border-l-sky-400",
    bg: "bg-sky-50",
    hoverBorder: "hover:border-sky-400",
    decoration: "decoration-sky-400",
    badge: "bg-sky-100 text-sky-700",
    text: "text-sky-600",
  },
  Entertainment: {
    icon: "🎮",
    accent: "border-l-violet-400",
    bg: "bg-violet-50",
    hoverBorder: "hover:border-violet-400",
    decoration: "decoration-violet-400",
    badge: "bg-violet-100 text-violet-700",
    text: "text-violet-600",
  },
  Quizzes: {
    icon: "🧠",
    accent: "border-l-indigo-400",
    bg: "bg-indigo-50",
    hoverBorder: "hover:border-indigo-400",
    decoration: "decoration-indigo-400",
    badge: "bg-indigo-100 text-indigo-700",
    text: "text-indigo-600",
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
  // Salary & Taxes
  "monthly-salary-calculator": "💵",
  "hourly-salary-calculator": "⏱️",
  "annual-salary-calculator": "📅",
  "tax-percentage-calculator": "📊",
  "vat-calculator": "🧾",
  "net-salary-calculator": "💰",
  "work-hours-calculator": "⏰",
  "paycheck-calculator": "🏧",
  "overtime-calculator": "🕐",
  "tax-bracket-calculator": "🗂️",
  "freelance-rate-calculator": "💼",
  // Savings & Investments
  "compound-interest-calculator": "📈",
  "simple-compound-interest-calculator": "🔄",
  "investment-return-calculator": "💹",
  "loan-repayment-calculator": "🏦",
  "installment-calculator": "💳",
  "savings-goal-calculator": "🎯",
  "401k-calculator": "🪙",
  "social-security-calculator": "🏛️",
  "mortgage-calculator": "🏠",
  "down-payment-calculator": "🏡",
  "rental-yield-calculator": "🏘️",
  "debt-payoff-calculator": "🔓",
  "retirement-calculator": "🌅",
  "cd-calculator": "📜",
  "student-loan-calculator": "🎓",
  "roth-ira-calculator": "🏦",
  "net-worth-calculator": "💎",
  "inflation-calculator": "📉",
  "emergency-fund-calculator": "🛡️",
  "home-affordability-calculator": "🔑",
  // Daily Life & Home
  "percentage-calculator": "🔢",
  "discount-calculator": "🏷️",
  "tip-calculator": "🍽️",
  "sales-tax-calculator": "🛒",
  "electricity-bill-calculator": "💡",
  "fuel-cost-calculator": "⛽",
  "electric-car-trip-cost-calculator": "🔋",
  "driving-cost-calculator": "🚗",
  "price-per-square-foot-calculator": "📐",
  "length-converter": "📏",
  "weight-converter": "🏋️",
  "currency-converter": "💱",
  "speed-converter": "🚀",
  "area-converter": "🗺️",
  "portion-calculator": "🍳",
  "gas-mileage-calculator": "🚘",
  "unit-price-calculator": "🏪",
  "paint-calculator": "🎨",
  "moving-cost-calculator": "📦",
  "square-footage-calculator": "🏗️",
  "car-loan-calculator": "🚗",
  "break-even-calculator": "⚖️",
  // Health & Fitness
  "bac-calculator": "🍺",
  "bmi-calculator": "⚖️",
  "bmr-calculator": "🔥",
  "daily-calorie-needs-calculator": "🍎",
  "sleep-needs-calculator": "😴",
  "running-pace-calculator": "🏃",
  "water-needs-calculator": "💧",
  "macro-calculator": "🥗",
  "sleep-cycle-calculator": "😪",
  "pregnancy-calculator": "🤰",
  "heart-rate-calculator": "❤️",
  "calorie-burn-calculator": "🏅",
  "wind-chill-calculator": "🌬️",
  "body-fat-calculator": "💪",
  "protein-intake-calculator": "🥩",
  "ideal-weight-calculator": "🏆",
  "due-date-calculator": "👶",
  "blood-pressure-checker": "🫀",
  // Tools
  "temperature-converter": "🌡️",
  "qr-generator": "📱",
  "word-counter": "✍️",
  "gpa-calculator": "📚",
  "name-day-search": "🗓️",
  "flight-carbon-footprint-calculator": "✈️",
  "age-calculator": "🎂",
  "date-calculator": "📆",
  "random-number-generator": "🎲",
  "time-zone-converter": "🌍",
  "grade-calculator": "📋",
  "password-generator": "🔐",
  "character-counter": "🔤",
  "json-formatter": "💻",
  "countdown-timer": "⏳",
  // Entertainment
  "name-generator/dogs": "🐕",
  "name-generator/cats": "🐈",
  "name-generator": "🐾",
  "vacation-days-calculator": "☀️",
  "days-until-christmas": "🎄",
  "trump-term-countdown": "🇺🇸",
  "calendar-tool": "📆",
  "flag-game": "🏁",
  "military-insignia-quiz": "⭐",
  "us-state-capitals-quiz": "🗺️",
  "world-capitals-quiz": "🌐",
  "us-presidents-quiz": "🏛️",
  "car-logos-quiz": "🚗",
  "planets-quiz": "🪐",
  "famous-paintings-quiz": "🎨",
  "dice-generator": "🎲",
  horoscope: "♈",
  "lottery-number-generator": "🎰",
  "raffle-machine": "🎡",
  "life-calculator": "⌛",
  "coin-flip": "🪙",
  "rock-paper-scissors": "✂️",
  "love-calculator": "❤️",
  "baby-name-generator": "🍼",
  // Legacy / misc
  "student-loan-credit-calculator": "🎓",
};
