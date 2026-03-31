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
  { code: "USD", name: "US Dollar", rateToEur: 1.08, flag: "🇺🇸" },
  { code: "GBP", name: "British Pound", rateToEur: 0.85, flag: "🇬🇧" },
  { code: "SEK", name: "Swedish Krona", rateToEur: 11.35, flag: "🇸🇪" },
  { code: "NOK", name: "Norwegian Krone", rateToEur: 11.55, flag: "🇳🇴" },
  { code: "DKK", name: "Danish Krone", rateToEur: 7.46, flag: "🇩🇰" },
  { code: "CHF", name: "Swiss Franc", rateToEur: 0.97, flag: "🇨🇭" },
  { code: "JPY", name: "Japanese Yen", rateToEur: 161, flag: "🇯🇵" },
  { code: "CNY", name: "Chinese Yuan", rateToEur: 7.8, flag: "🇨🇳" },
  { code: "CAD", name: "Canadian Dollar", rateToEur: 1.47, flag: "🇨🇦" },
  { code: "AUD", name: "Australian Dollar", rateToEur: 1.65, flag: "🇦🇺" },
  { code: "THB", name: "Thai Baht", rateToEur: 38.5, flag: "🇹🇭" },
  { code: "TRY", name: "Turkish Lira", rateToEur: 37.0, flag: "🇹🇷" },
  { code: "PLN", name: "Polish Zloty", rateToEur: 4.25, flag: "🇵🇱" },
  { code: "CZK", name: "Czech Koruna", rateToEur: 25.2, flag: "🇨🇿" },
  { code: "HUF", name: "Hungarian Forint", rateToEur: 395, flag: "🇭🇺" },
  { code: "RUB", name: "Russian Ruble", rateToEur: 100, flag: "🇷🇺" },
  { code: "MXN", name: "Mexican Peso", rateToEur: 20.5, flag: "🇲🇽" },
  { code: "BRL", name: "Brazilian Real", rateToEur: 6.0, flag: "🇧🇷" },
  { code: "INR", name: "Indian Rupee", rateToEur: 90, flag: "🇮🇳" },
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
          Amount
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
          From currency
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
          title="Swap currencies"
        >
          ⇅
        </button>
      </div>

      <div>
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
          To currency
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
              ? amount.toLocaleString("en-US", { maximumFractionDigits: 2 })
              : "—"}{" "}
            {CURRENCIES[fromIdx].code} =
          </div>
          <div className="text-4xl font-bold text-blue-700">
            {result.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
          <div className="text-lg font-semibold text-blue-600 mt-0.5">
            {CURRENCIES[toIdx].code}
          </div>
          <div className="text-xs text-gray-400 mt-3">
            1 {CURRENCIES[fromIdx].code} ≈{" "}
            {convert(1, fromIdx, toIdx).toLocaleString("en-US", {
              minimumFractionDigits: 4,
              maximumFractionDigits: 4,
            })}{" "}
            {CURRENCIES[toIdx].code}
          </div>
          <div className="text-xs text-gray-400 mt-0.5">
            ⚠️ Rates are indicative — check current rates with your bank.
          </div>
        </div>
      )}
    </div>
  );
}
