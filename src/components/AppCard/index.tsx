import Link from "next/link";

interface Props {
  application: { route: string; displayName: string; shortDescription: string };
  index: number;
  isAppSuggestionsBar?: boolean;
}

const appIcons: Record<string, string> = {
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
