"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Current age", initialValue: 30 },
  { label: "Retirement age", initialValue: 65 },
  { label: "Annual contribution ($)", initialValue: 7000 },
  { label: "Expected annual return (%)", initialValue: 7, step: 0.5 },
];

export default function RothIRACalculator() {
  const calculate = (values: number[]) => {
    const currentAge = values[0];
    const retirementAge = values[1];
    const contribution = values[2];
    const annualReturn = values[3];

    const years = Math.max(retirementAge - currentAge, 0);
    const annualRate = annualReturn / 100;

    let balance: number;
    if (annualRate > 0) {
      balance = contribution * ((Math.pow(1 + annualRate, years) - 1) / annualRate);
    } else {
      balance = contribution * years;
    }

    const totalContributions = contribution * years;
    const totalGrowth = balance - totalContributions;

    return [
      { result: balance, label: "Balance at retirement:", suffix: "$", decimals: 0 },
      { result: totalContributions, label: "Total contributions:", suffix: "$", decimals: 0 },
      { result: totalGrowth, label: "Tax-free growth:", suffix: "$", decimals: 0 },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix="$" />;
}
