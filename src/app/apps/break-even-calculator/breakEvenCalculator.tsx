"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Fixed costs per month ($)", initialValue: 5000 },
  { label: "Price per unit / sale ($)", initialValue: 50 },
  { label: "Variable cost per unit ($)", initialValue: 20 },
];

export default function BreakEvenCalculator() {
  const calculate = (values: number[]) => {
    const fixedCosts = values[0];
    const pricePerUnit = values[1];
    const variableCostPerUnit = values[2];

    const contributionMargin = pricePerUnit - variableCostPerUnit;

    if (contributionMargin <= 0) {
      return [
        { result: 0, label: "Break-even units per month:", suffix: " units", decimals: 0 },
        { result: 0, label: "Break-even revenue per month:", suffix: "$", decimals: 0 },
        { result: 0, label: "Contribution margin:", suffix: "%", decimals: 1 },
        { result: 0, label: "Profit at 2× break-even:", suffix: "$", decimals: 0 },
      ];
    }

    const breakEvenUnits = Math.ceil(fixedCosts / contributionMargin);
    const breakEvenRevenue = breakEvenUnits * pricePerUnit;
    const contributionMarginPct = (contributionMargin / pricePerUnit) * 100;
    const profitAt2x = breakEvenUnits * 2 * contributionMargin - fixedCosts;

    return [
      { result: breakEvenUnits, label: "Break-even units per month:", suffix: " units", decimals: 0 },
      { result: breakEvenRevenue, label: "Break-even revenue per month:", suffix: "$", decimals: 0 },
      { result: contributionMarginPct, label: "Contribution margin:", suffix: "%", decimals: 1 },
      { result: profitAt2x, label: "Profit at 2× break-even:", suffix: "$", decimals: 0 },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix="$" />;
}
