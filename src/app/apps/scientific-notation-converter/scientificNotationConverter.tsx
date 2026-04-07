"use client";
import { useState, useMemo } from "react";

export default function ScientificNotationConverter() {
  const [input, setInput] = useState("299792458");
  const [mode, setMode] = useState<"toSci" | "fromSci">("toSci");

  const result = useMemo(() => {
    try {
      if (mode === "toSci") {
        const num = parseFloat(input);
        if (isNaN(num)) return null;
        if (num === 0) return { scientific: "0 × 10⁰", eNotation: "0e+0", decimal: "0", exponent: 0, coefficient: 0 };

        const exp = Math.floor(Math.log10(Math.abs(num)));
        const coeff = num / Math.pow(10, exp);

        const superscript = exp.toString().replace(/-/g, "⁻").replace(/\d/g, (d) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[parseInt(d)]);

        return {
          scientific: `${coeff.toFixed(6).replace(/\.?0+$/, "")} × 10${superscript}`,
          eNotation: num.toExponential(),
          decimal: num.toLocaleString("en-US", { maximumFractionDigits: 20 }),
          exponent: exp,
          coefficient: parseFloat(coeff.toFixed(10)),
        };
      } else {
        // From scientific notation: parse "3.5e8" or "3.5 x 10^8" style
        let cleaned = input.replace(/×/g, "x").replace(/\s/g, "");
        let num: number;

        if (cleaned.toLowerCase().includes("x10^")) {
          const parts = cleaned.toLowerCase().split("x10^");
          const coeff = parseFloat(parts[0]);
          const exp = parseInt(parts[1]);
          num = coeff * Math.pow(10, exp);
        } else if (cleaned.toLowerCase().includes("e")) {
          num = parseFloat(cleaned);
        } else {
          num = parseFloat(cleaned);
        }

        if (isNaN(num)) return null;

        const exp = num === 0 ? 0 : Math.floor(Math.log10(Math.abs(num)));
        const coeff = num === 0 ? 0 : num / Math.pow(10, exp);
        const superscript = exp.toString().replace(/-/g, "⁻").replace(/\d/g, (d) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[parseInt(d)]);

        return {
          scientific: `${coeff.toFixed(6).replace(/\.?0+$/, "")} × 10${superscript}`,
          eNotation: num.toExponential(),
          decimal: num.toLocaleString("en-US", { maximumFractionDigits: 20 }),
          exponent: exp,
          coefficient: parseFloat(coeff.toFixed(10)),
        };
      }
    } catch {
      return null;
    }
  }, [input, mode]);

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
      <div className="form-control">
        <label className="label"><span className="label-text">Mode</span></label>
        <select className="select select-bordered w-full" value={mode} onChange={(e) => setMode(e.target.value as "toSci" | "fromSci")}>
          <option value="toSci">Number → Scientific Notation</option>
          <option value="fromSci">Scientific Notation → Number</option>
        </select>
      </div>

      <div className="form-control">
        <label className="label"><span className="label-text">{mode === "toSci" ? "Enter a number" : "Enter scientific notation (e.g. 3.5e8)"}</span></label>
        <input
          type="text"
          className="input input-bordered w-full font-mono"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={mode === "toSci" ? "299792458" : "2.998e8"}
        />
      </div>

      {result && (
        <div className="card bg-base-200 p-5 mt-2">
          <div className="grid grid-cols-1 gap-3">
            <div className="stat bg-base-100 rounded-lg p-3">
              <div className="stat-title text-xs">Scientific Notation</div>
              <div className="stat-value text-lg font-mono">{result.scientific}</div>
            </div>
            <div className="stat bg-base-100 rounded-lg p-3">
              <div className="stat-title text-xs">E-Notation</div>
              <div className="stat-value text-lg font-mono">{result.eNotation}</div>
            </div>
            <div className="stat bg-base-100 rounded-lg p-3">
              <div className="stat-title text-xs">Decimal</div>
              <div className="stat-value text-lg font-mono break-all">{result.decimal}</div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="stat bg-base-100 rounded-lg p-3">
                <div className="stat-title text-xs">Coefficient</div>
                <div className="stat-value text-lg font-mono">{result.coefficient}</div>
              </div>
              <div className="stat bg-base-100 rounded-lg p-3">
                <div className="stat-title text-xs">Exponent</div>
                <div className="stat-value text-lg font-mono">{result.exponent}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!result && input && (
        <div className="alert alert-warning text-sm">
          <span>Could not parse the input. Try a number like 299792458 or scientific notation like 2.998e8.</span>
        </div>
      )}
    </div>
  );
}
