"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Initial principal ($)", initialValue: 2000 },
  { label: "Annual interest rate (%)", initialValue: 5 },
  { label: "Investment period (years)", initialValue: 20 },
  { label: "Monthly contribution ($)", initialValue: 100 },
];

export default function CompoundInterestCalculator() {
  const calculate = (values: number[]) => {
    const principal = values[0];
    const interestRate = values[1] / 100;
    const time = values[2];
    const monthlyInvestment = values[3];

    let result = principal * Math.pow(1 + interestRate, time);

    // Add monthly investments
    for (let i = 0; i < time * 12; i++) {
      result += monthlyInvestment * Math.pow(1 + interestRate / 12, i);
    }

    return [
      { result: Number(result.toFixed(2)), label: "Future investment value:" },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix="$" />;
}
