"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Deposit amount ($)", initialValue: 10000 },
  { label: "Annual APY (%)", initialValue: 5, step: 0.01 },
  { label: "Term in months", initialValue: 12 },
];

export default function CdCalculator() {
  const calculate = (values: number[]) => {
    const principal = values[0];
    const apy = values[1];
    const termMonths = values[2];

    const monthlyRate = apy / 100 / 12;
    const totalAtMaturity =
      principal * Math.pow(1 + monthlyRate, termMonths);
    const interestEarned = totalAtMaturity - principal;
    const effectiveMonthlyEarnings =
      termMonths > 0 ? interestEarned / termMonths : 0;

    return [
      {
        result: interestEarned,
        label: "Interest earned",
        suffix: " $",
        decimals: 2,
      },
      {
        result: totalAtMaturity,
        label: "Total at maturity",
        suffix: " $",
        decimals: 2,
      },
      {
        result: effectiveMonthlyEarnings,
        label: "Effective monthly earnings",
        suffix: " $",
        decimals: 2,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
