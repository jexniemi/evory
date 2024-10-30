"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Initial Principal ($)", initialValue: 2000 },
  { label: "Annual Interest Rate (%)", initialValue: 5 },
  { label: "Investment Duration (years)", initialValue: 20 },
  { label: "Monthly Investment Amount ($)", initialValue: 100 },
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
      {
        result: Number(result.toFixed(2)),
        label: "Future Value of Investment:",
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} prefix="$" />;
}
