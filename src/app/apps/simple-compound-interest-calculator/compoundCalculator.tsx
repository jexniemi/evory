"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Initial capital ($)", initialValue: 10000 },
  { label: "Annual return (%)", initialValue: 7, step: 0.1 },
  { label: "Investment period (years)", initialValue: 10 },
];

export default function CompoundInterestCalculator() {
  const calculate = (values: number[]) => {
    const principal = values[0];
    const rate = values[1] / 100;
    const years = values[2];

    const endValue = principal * Math.pow(1 + rate, years);
    const interest = endValue - principal;
    const growthPercent = principal > 0 ? (interest / principal) * 100 : 0;
    // Doubling time using rule of 72
    const doublingYears = rate > 0 ? 72 / (rate * 100) : 0;

    return [
      { result: endValue, label: "Final balance", suffix: " $", decimals: 2 },
      { result: interest, label: "Interest earned", suffix: " $", decimals: 2 },
      {
        result: growthPercent,
        label: "Total growth",
        suffix: " %",
        decimals: 1,
      },
      {
        result: doublingYears,
        label: "Doubling time (rule of 72)",
        suffix: " yrs",
        decimals: 1,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
