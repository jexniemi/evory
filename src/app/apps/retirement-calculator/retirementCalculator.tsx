"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Current age", initialValue: 30 },
  { label: "Retirement age", initialValue: 65 },
  { label: "Current savings ($)", initialValue: 50000 },
  { label: "Monthly contribution ($)", initialValue: 500 },
  { label: "Expected annual return (%)", initialValue: 7, step: 0.1 },
];

export default function RetirementCalculator() {
  const calculate = (values: number[]) => {
    const currentAge = values[0];
    const retirementAge = values[1];
    const currentSavings = values[2];
    const monthlyContribution = values[3];
    const annualReturn = values[4];

    const years = Math.max(retirementAge - currentAge, 0);
    const months = years * 12;
    const monthlyRate = annualReturn / 100 / 12;

    let futureValue: number;
    if (monthlyRate === 0) {
      futureValue = currentSavings + monthlyContribution * months;
    } else {
      const growthFactor = Math.pow(1 + monthlyRate, months);
      futureValue =
        currentSavings * growthFactor +
        monthlyContribution * ((growthFactor - 1) / monthlyRate);
    }

    const totalContributions = currentSavings + monthlyContribution * months;
    const investmentGrowth = futureValue - totalContributions;
    const monthlyIncome = (futureValue * 0.04) / 12;

    return [
      {
        result: futureValue,
        label: "Total at retirement",
        suffix: " $",
        decimals: 2,
      },
      {
        result: totalContributions,
        label: "Total contributions",
        suffix: " $",
        decimals: 2,
      },
      {
        result: investmentGrowth,
        label: "Investment growth",
        suffix: " $",
        decimals: 2,
      },
      {
        result: monthlyIncome,
        label: "Monthly income (4% rule)",
        suffix: " $",
        decimals: 2,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
