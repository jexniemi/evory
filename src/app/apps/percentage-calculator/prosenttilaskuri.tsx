"use client";
import type { ReactNode } from "react";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

// ── Section 1: X% of Y ──────────────────────────────────────────────────────
const pctOfInputs = [
  { label: "Percentage (%)", initialValue: 15, step: 0.5 },
  { label: "Value", initialValue: 200, step: 1 },
];
const calcPctOf = (values: number[]) => {
  const pct = values[0];
  const val = values[1];
  const result = (pct / 100) * val;
  return [{ result, label: `${pct}% of ${val} is`, suffix: " ", decimals: 2 }];
};

// ── Section 2: What % is X of Y ─────────────────────────────────────────────
const whatPctInputs = [
  { label: "Part", initialValue: 35, step: 1 },
  { label: "Whole", initialValue: 200, step: 1 },
];
const calcWhatPct = (values: number[]) => {
  const result = values[1] !== 0 ? (values[0] / values[1]) * 100 : 0;
  return [{ result, label: "Share of the whole", suffix: " %", decimals: 2 }];
};

// ── Section 3: Percentage change from A to B ─────────────────────────────────
const changeInputs = [
  { label: "Start value", initialValue: 100, step: 1 },
  { label: "End value", initialValue: 130, step: 1 },
];
const calcChange = (values: number[]) => {
  const from = values[0];
  const to = values[1];
  const pct = from !== 0 ? ((to - from) / Math.abs(from)) * 100 : 0;
  const diff = to - from;
  return [
    { result: pct, label: "Change", suffix: " %", decimals: 2 },
    { result: diff, label: "Change in numbers", suffix: " ", decimals: 2 },
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
      <Section title="How much is X% of Y?">
        <SimpleCalculator
          inputs={pctOfInputs}
          calculate={calcPctOf}
          suffix=" "
        />
      </Section>
      <Section title="What % of Y is X?">
        <SimpleCalculator
          inputs={whatPctInputs}
          calculate={calcWhatPct}
          suffix=" "
        />
      </Section>
      <Section title="By what percentage did the value change?">
        <SimpleCalculator
          inputs={changeInputs}
          calculate={calcChange}
          suffix=" "
        />
      </Section>
    </div>
  );
}
