"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const KG_PER_UNIT = [1, 0.001, 0.453592, 6.35029, 1000];
const UNIT_NAMES = [
  "kg",
  "grams (g)",
  "pounds (lbs)",
  "stone (st)",
  "metric tons (t)",
];
const UNIT_SUFFIXES = [" kg", " g", " lbs", " st", " t"];
const UNIT_DECIMALS = [4, 1, 3, 4, 6];

const inputs = [
  {
    label: "From unit",
    labels: UNIT_NAMES,
    values: [0, 1, 2, 3, 4],
  },
  { label: "Value", initialValue: 75, step: 0.1 },
];

export default function Painomuunnin() {
  const calculate = (values: number[]) => {
    const unitIdx = values[0];
    const val = values[1];
    const valInKg = val * KG_PER_UNIT[unitIdx];

    return KG_PER_UNIT.map((factor, i) => ({
      result: valInKg / factor,
      label: UNIT_NAMES[i],
      suffix: UNIT_SUFFIXES[i],
      decimals: UNIT_DECIMALS[i],
    })).filter((_, i) => i !== unitIdx);
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix=" " />;
}
