"use client";
import type { ReactNode } from "react";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

// ── Section 1: X% of Y ──────────────────────────────────────────────────────
const pctOfInputs = [
  { label: "Prosentti (%)", initialValue: 15, step: 0.5 },
  { label: "Arvo", initialValue: 200, step: 1 },
];
const calcPctOf = (values: number[]) => {
  const pct = values[0];
  const val = values[1];
  const result = (pct / 100) * val;
  return [
    { result, label: `${pct}% arvosta ${val} on`, suffix: " ", decimals: 2 },
  ];
};

// ── Section 2: What % is X of Y ─────────────────────────────────────────────
const whatPctInputs = [
  { label: "Osa", initialValue: 35, step: 1 },
  { label: "Kokonaisuus", initialValue: 200, step: 1 },
];
const calcWhatPct = (values: number[]) => {
  const result = values[1] !== 0 ? (values[0] / values[1]) * 100 : 0;
  return [
    { result, label: "Osuus kokonaisuudesta", suffix: " %", decimals: 2 },
  ];
};

// ── Section 3: Percentage change from A to B ─────────────────────────────────
const changeInputs = [
  { label: "Alkuarvo", initialValue: 100, step: 1 },
  { label: "Loppuarvo", initialValue: 130, step: 1 },
];
const calcChange = (values: number[]) => {
  const from = values[0];
  const to = values[1];
  const pct = from !== 0 ? ((to - from) / Math.abs(from)) * 100 : 0;
  const diff = to - from;
  return [
    { result: pct, label: "Muutos", suffix: " %", decimals: 2 },
    { result: diff, label: "Muutos numeroina", suffix: " ", decimals: 2 },
  ];
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="w-full">
      <h3 className="text-lg font-bold text-gray-800 mb-5 pb-2 border-b border-gray-200">
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function Prosenttilaskuri() {
  return (
    <div className="flex flex-col gap-12 w-full">
      <Section title="Kuinka paljon on X% Y:stä?">
        <SimpleCalculator
          inputs={pctOfInputs}
          calculate={calcPctOf}
          suffix=" "
        />
      </Section>
      <Section title="X on kuinka monta % Y:stä?">
        <SimpleCalculator
          inputs={whatPctInputs}
          calculate={calcWhatPct}
          suffix=" "
        />
      </Section>
      <Section title="Kuinka monta prosenttia arvo muuttui?">
        <SimpleCalculator
          inputs={changeInputs}
          calculate={calcChange}
          suffix=" "
        />
      </Section>
    </div>
  );
}
