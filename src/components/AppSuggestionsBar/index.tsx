"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { getRandomApps } from "../../applications";
import { Application } from "@/types/types";
import MiddleColumn from "@/components/common/MiddleColumn";
import Link from "next/link";

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

export default function AppSuggestionBar() {
  const path = usePathname();
  const appSuggestions = useMemo(() => getRandomApps(path, 3), [path]);

  if (path === "/") {
    return null;
  }

  return (
    <MiddleColumn location="appsuggestionbar">
      <div className="py-10">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xl">🔍</span>
          <h5 className="text-lg font-bold text-gray-900">Try these too</h5>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {appSuggestions.map((application) => (
            <Link
              key={application.route}
              href={`/apps/${application.route}`}
              className="group relative flex flex-col items-center text-center rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-main"
            >
              <span className="text-4xl mb-3">
                {appIcons[application.route] ?? "🔧"}
              </span>
              <h3 className="text-base font-bold text-gray-900 group-hover:text-main transition-colors">
                {application.displayName}
              </h3>
              <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
                {application.shortDescription}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-main opacity-0 group-hover:opacity-100 transition-opacity">
                Kokeile ilmaiseksi →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </MiddleColumn>
  );
}
