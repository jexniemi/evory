"use client";

import { useState } from "react";

type Base = 2 | 8 | 10 | 16;

const BASES: { base: Base; label: string; prefix: string; pattern: RegExp }[] =
  [
    { base: 10, label: "Decimal (Base 10)", prefix: "", pattern: /^-?[0-9]+$/ },
    { base: 2, label: "Binary (Base 2)", prefix: "0b", pattern: /^[01]+$/ },
    { base: 8, label: "Octal (Base 8)", prefix: "0o", pattern: /^[0-7]+$/ },
    {
      base: 16,
      label: "Hexadecimal (Base 16)",
      prefix: "0x",
      pattern: /^[0-9a-fA-F]+$/,
    },
  ];

function toAllBases(value: string, fromBase: Base): Record<Base, string> {
  const decimal = parseInt(value, fromBase);
  if (isNaN(decimal)) return { 2: "—", 8: "—", 10: "—", 16: "—" };
  return {
    2: decimal.toString(2),
    8: decimal.toString(8),
    10: decimal.toString(10),
    16: decimal.toString(16).toUpperCase(),
  };
}

export default function BaseConverter() {
  const [inputs, setInputs] = useState<Record<Base, string>>({
    2: "11111101000",
    8: "3750",
    10: "2024",
    16: "7E8",
  });
  const [activeBase, setActiveBase] = useState<Base>(10);
  const [copied, setCopied] = useState<Base | null>(null);

  const handleChange = (base: Base, value: string) => {
    setActiveBase(base);
    const clean = value.trim().toUpperCase();
    const info = BASES.find((b) => b.base === base)!;
    if (!clean || info.pattern.test(clean)) {
      const conversions = toAllBases(clean || "0", base);
      setInputs(
        BASES.reduce(
          (acc, b) => {
            acc[b.base] = clean ? conversions[b.base] : "";
            return acc;
          },
          {} as Record<Base, string>,
        ),
      );
    }
  };

  const handleCopy = (base: Base) => {
    navigator.clipboard.writeText(inputs[base]).then(() => {
      setCopied(base);
      setTimeout(() => setCopied(null), 1500);
    });
  };

  return (
    <div className="max-w-lg mx-auto space-y-3 p-4">
      {BASES.map(({ base, label, prefix }) => (
        <div
          key={base}
          className="card bg-base-100 border border-base-300 shadow-sm"
        >
          <div className="card-body p-4">
            <div className="flex items-center justify-between mb-2">
              <label className="label-text font-semibold text-sm">
                {label}
              </label>
              <button
                className={`btn btn-xs btn-ghost ${copied === base ? "text-success" : ""}`}
                onClick={() => handleCopy(base)}
                disabled={!inputs[base] || inputs[base] === "—"}
              >
                {copied === base ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <div className="flex items-center gap-2">
              {prefix && (
                <span className="text-sm font-mono text-base-content/40 shrink-0">
                  {prefix}
                </span>
              )}
              <input
                type="text"
                className={`input input-bordered w-full font-mono text-base ${
                  activeBase === base ? "input-primary" : ""
                }`}
                value={inputs[base] || ""}
                onChange={(e) => handleChange(base, e.target.value)}
                placeholder={`Enter ${label.split(" ")[0].toLowerCase()} number`}
                spellCheck={false}
              />
            </div>
          </div>
        </div>
      ))}
      <p className="text-xs text-base-content/40 text-center px-2">
        Edit any field — all others update instantly
      </p>
    </div>
  );
}
