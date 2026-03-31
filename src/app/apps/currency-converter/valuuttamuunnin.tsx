"use client";
import { useState } from "react";

// Approximate rates relative to EUR (updated reference rates, indicative only)
const CURRENCIES: {
  code: string;
  name: string;
  rateToEur: number;
  flag: string;
}[] = [
  { code: "EUR", name: "Euro", rateToEur: 1.0, flag: "🇪🇺" },
  { code: "USD", name: "Yhdysvaltain dollari", rateToEur: 1.08, flag: "🇺🇸" },
  { code: "GBP", name: "Englannin punta", rateToEur: 0.85, flag: "🇬🇧" },
  { code: "SEK", name: "Ruotsin kruunu", rateToEur: 11.35, flag: "🇸🇪" },
  { code: "NOK", name: "Norjan kruunu", rateToEur: 11.55, flag: "🇳🇴" },
  { code: "DKK", name: "Tanskan kruunu", rateToEur: 7.46, flag: "🇩🇰" },
  { code: "CHF", name: "Sveitsin frangi", rateToEur: 0.97, flag: "🇨🇭" },
  { code: "JPY", name: "Japanin jeni", rateToEur: 161, flag: "🇯🇵" },
  { code: "CNY", name: "Kiinan yuan", rateToEur: 7.8, flag: "🇨🇳" },
  { code: "CAD", name: "Kanadan dollari", rateToEur: 1.47, flag: "🇨🇦" },
  { code: "AUD", name: "Australian dollari", rateToEur: 1.65, flag: "🇦🇺" },
  { code: "THB", name: "Thaimaan baht", rateToEur: 38.5, flag: "🇹🇭" },
  { code: "TRY", name: "Turkin liira", rateToEur: 37.0, flag: "🇹🇷" },
  { code: "PLN", name: "Puolan zloty", rateToEur: 4.25, flag: "🇵🇱" },
  { code: "CZK", name: "Tšekin kruunu", rateToEur: 25.2, flag: "🇨🇿" },
  { code: "HUF", name: "Unkarin forintti", rateToEur: 395, flag: "🇭🇺" },
  { code: "RUB", name: "Venäjän rupla", rateToEur: 100, flag: "🇷🇺" },
  { code: "MXN", name: "Meksikon peso", rateToEur: 20.5, flag: "🇲🇽" },
  { code: "BRL", name: "Brasilian real", rateToEur: 6.0, flag: "🇧🇷" },
  { code: "INR", name: "Intian rupia", rateToEur: 90, flag: "🇮🇳" },
];

export default function Valuuttamuunnin() {
  const [amount, setAmount] = useState<number | "">(100);
  const [fromIdx, setFromIdx] = useState(1); // USD
  const [toIdx, setToIdx] = useState(0); // EUR

  const convert = (a: number, from: number, to: number): number => {
    const eur = a / CURRENCIES[from].rateToEur;
    return eur * CURRENCIES[to].rateToEur;
  };

  const result =
    typeof amount === "number" && amount >= 0
      ? convert(amount, fromIdx, toIdx)
      : null;

  const swap = () => {
    setFromIdx(toIdx);
    setToIdx(fromIdx);
  };

  const selectClass = "select select-bordered w-full bg-white";

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
      <div>
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
          Summa
        </label>
        <input
          type="number"
          min={0}
          step={1}
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value === "" ? "" : Number(e.target.value))
          }
          className="input input-bordered w-full text-lg font-bold"
        />
      </div>

      <div>
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
          Mistä valuutasta
        </label>
        <select
          value={fromIdx}
          onChange={(e) => setFromIdx(Number(e.target.value))}
          className={selectClass}
        >
          {CURRENCIES.map((c, i) => (
            <option key={c.code} value={i}>
              {c.flag} {c.code} — {c.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-center">
        <button
          onClick={swap}
          className="btn btn-circle btn-sm btn-ghost text-lg"
          title="Vaihda suunta"
        >
          ⇅
        </button>
      </div>

      <div>
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
          Mihin valuuttaan
        </label>
        <select
          value={toIdx}
          onChange={(e) => setToIdx(Number(e.target.value))}
          className={selectClass}
        >
          {CURRENCIES.map((c, i) => (
            <option key={c.code} value={i}>
              {c.flag} {c.code} — {c.name}
            </option>
          ))}
        </select>
      </div>

      {result !== null && (
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-5 text-center mt-2">
          <div className="text-sm text-gray-500 mb-1">
            {typeof amount === "number"
              ? amount.toLocaleString("fi-FI", { maximumFractionDigits: 2 })
              : "—"}{" "}
            {CURRENCIES[fromIdx].code} =
          </div>
          <div className="text-4xl font-bold text-blue-700">
            {result.toLocaleString("fi-FI", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
          <div className="text-lg font-semibold text-blue-600 mt-0.5">
            {CURRENCIES[toIdx].code}
          </div>
          <div className="text-xs text-gray-400 mt-3">
            1 {CURRENCIES[fromIdx].code} ≈{" "}
            {convert(1, fromIdx, toIdx).toLocaleString("fi-FI", {
              minimumFractionDigits: 4,
              maximumFractionDigits: 4,
            })}{" "}
            {CURRENCIES[toIdx].code}
          </div>
          <div className="text-xs text-gray-400 mt-0.5">
            ⚠️ Kurssit ovat viitteellisiä — tarkista ajantasaiset kurssit
            pankistasi.
          </div>
        </div>
      )}
    </div>
  );
}
