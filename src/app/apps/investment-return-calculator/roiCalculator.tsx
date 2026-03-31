"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Initial investment ($)", initialValue: 10000 },
  { label: "Current value / sale price ($)", initialValue: 15000 },
  { label: "Investment period (years)", initialValue: 5 },
];

export default function ReturnOnInvestmentCalculator() {
  const calculate = (values: number[]) => {
    const initial = values[0];
    const finalValue = values[1];
    const years = values[2];

    const profit = finalValue - initial;
    const roi = initial > 0 ? (profit / initial) * 100 : 0;
    // Annualized return: (final/initial)^(1/years) - 1
    const annualizedRoi =
      initial > 0 && years > 0
        ? (Math.pow(finalValue / initial, 1 / years) - 1) * 100
        : 0;

    return [
      { result: profit, label: "Profit / loss", suffix: " $", decimals: 2 },
      { result: roi, label: "Total return (ROI)", suffix: " %", decimals: 2 },
      {
        result: annualizedRoi,
        label: "Annual return (CAGR)",
        suffix: " %/yr",
        decimals: 2,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
