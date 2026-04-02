"use client";

import { useState } from "react";

const TO_ROMAN: [number, string][] = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

function toRoman(num: number): string {
  if (num < 1 || num > 3999) return "Number must be between 1 and 3999";
  let result = "";
  for (const [value, numeral] of TO_ROMAN) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }
  return result;
}

function fromRoman(str: string): number | null {
  const ROMAN_VALUES: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const upper = str.toUpperCase().trim();
  if (!upper || !/^[IVXLCDM]+$/.test(upper)) return null;
  let result = 0;
  for (let i = 0; i < upper.length; i++) {
    const curr = ROMAN_VALUES[upper[i]];
    const next = ROMAN_VALUES[upper[i + 1]];
    if (next && curr < next) {
      result -= curr;
    } else {
      result += curr;
    }
  }
  return result;
}

export default function RomanNumeralConverter() {
  const [decimal, setDecimal] = useState(2024);
  const [romanInput, setRomanInput] = useState("");

  const romanResult = toRoman(decimal);
  const decimalResult = fromRoman(romanInput);

  return (
    <div className="max-w-lg mx-auto space-y-6 p-4">
      {/* Decimal to Roman */}
      <div className="card bg-base-100 border border-base-300 shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-base font-semibold">
            Number → Roman Numeral
          </h2>
          <label className="label">
            <span className="label-text">Enter a number (1–3999)</span>
          </label>
          <input
            type="number"
            className="input input-bordered w-full"
            value={decimal}
            min={1}
            max={3999}
            onChange={(e) => setDecimal(parseInt(e.target.value) || 1)}
          />
          <div className="mt-3 p-4 bg-amber-50 border border-amber-200 border-l-4 border-l-amber-400 rounded-lg">
            <p className="text-sm text-amber-700 font-medium">Roman Numeral</p>
            <p className="text-3xl font-bold text-amber-900 tracking-widest mt-1">
              {romanResult}
            </p>
          </div>
        </div>
      </div>

      {/* Roman to Decimal */}
      <div className="card bg-base-100 border border-base-300 shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-base font-semibold">
            Roman Numeral → Number
          </h2>
          <label className="label">
            <span className="label-text">
              Enter Roman numerals (e.g. XIV, MMXXIV)
            </span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full uppercase"
            placeholder="e.g. MMXXIV"
            value={romanInput}
            onChange={(e) => setRomanInput(e.target.value.toUpperCase())}
          />
          <div className="mt-3 p-4 bg-sky-50 border border-sky-200 border-l-4 border-l-sky-400 rounded-lg">
            <p className="text-sm text-sky-700 font-medium">Decimal Number</p>
            <p className="text-3xl font-bold text-sky-900 mt-1">
              {romanInput
                ? decimalResult !== null
                  ? decimalResult.toLocaleString()
                  : "Invalid Roman numeral"
                : "—"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
