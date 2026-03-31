"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Initial amount ($)", initialValue: 1000 },
  { label: "Annual inflation rate (%)", initialValue: 3.0, step: 0.1 },
  { label: "Number of years", initialValue: 20 },
];

export default function InflationCalculator() {
  const calculate = (values: number[]) => {
    const initialAmount = values[0];
    const rate = values[1];
    const years = values[2];

    const futureEquivalent = initialAmount * Math.pow(1 + rate / 100, years);
    const purchasingPowerLost = futureEquivalent - initialAmount;
    const realValueRemaining = initialAmount / Math.pow(1 + rate / 100, years);

    return [
      {
        result: futureEquivalent,
        label: "Future equivalent needed:",
        suffix: "$",
        decimals: 0,
      },
      {
        result: purchasingPowerLost,
        label: "Purchasing power lost:",
        suffix: "$",
        decimals: 0,
      },
      {
        result: realValueRemaining,
        label: "Real value of today's dollars:",
        suffix: "$",
        decimals: 2,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix="$" />;
}
