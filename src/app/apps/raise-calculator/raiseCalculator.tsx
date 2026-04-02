"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Current Annual Salary ($)", initialValue: 60000, step: 1000 },
  { label: "Raise (%)", initialValue: 5, step: 0.1 },
];

const calculate = (values: number[]) => {
  const current = values[0];
  const raisePct = values[1];
  const newSalary = current * (1 + raisePct / 100);
  const annualIncrease = newSalary - current;
  const monthlyIncrease = annualIncrease / 12;
  return [
    { result: newSalary, label: "New Annual Salary", suffix: " $", decimals: 0 },
    { result: annualIncrease, label: "Annual Increase", suffix: " $", decimals: 0 },
    { result: monthlyIncrease, label: "Monthly Increase", suffix: " $", decimals: 2 },
  ];
};

export default function RaiseCalculator() {
  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix="$" />;
}
