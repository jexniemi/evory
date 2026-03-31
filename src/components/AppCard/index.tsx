import Link from "next/link";

interface Props {
  application: { route: string; displayName: string; shortDescription: string };
  index: number;
  isAppSuggestionsBar?: boolean;
}

const appIcons: Record<string, string> = {
  // Legacy Finnish routes
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
  "unit-price-calculator": "🛒",
  "paint-calculator": "🎨",
  "moving-cost-calculator": "📦",
  "square-footage-calculator": "🏗️",
  "car-loan-calculator": "🚗",
  "break-even-calculator": "⚖️", // Health & Fitness
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
  "random-number-generator": "🔢",
  "time-zone-converter": "🌍",
  "grade-calculator": "📋",
  "password-generator": "🔐",
  "character-counter": "🔤",
  "json-formatter": "💻",
  "countdown-timer": "⏳",
  // Entertainment
  "name-generator/dogs": "🐕",
  "name-generator/cats": "🐈",
  "vacation-days-calculator": "☀️",
  "days-until-christmas": "🎄",
  "calendar-tool": "📆",
  "flag-game": "🏁",
  "military-insignia-quiz": "⭐",
  "dice-generator": "🎲",
  horoscope: "♈",
  "lottery-number-generator": "🎰",
  "raffle-machine": "🎡",
  "life-calculator": "⌛",
  "coin-flip": "🪙",
  "rock-paper-scissors": "✂️",
  "love-calculator": "❤️",
  "baby-name-generator": "🍼",
};

export default function AppCard({ application }: Props) {
  return (
    <Link
      href={`/apps/${application.route}`}
      className="group flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
    >
      <span className="text-xl mt-0.5 flex-shrink-0">
        {appIcons[application.route] ?? "🔧"}
      </span>
      <div className="min-w-0">
        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-main transition-colors">
          {application.displayName}
        </h3>
        <p className="mt-0.5 text-xs text-gray-500 leading-relaxed line-clamp-2">
          {application.shortDescription}
        </p>
      </div>
    </Link>
  );
}
