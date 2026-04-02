"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Monthly Income (after tax, $)", initialValue: 5000, step: 100 },
  { label: "Monthly Expenses ($)", initialValue: 3800, step: 100 },
];

const calculate = (values: number[]) => {
  const income = values[0];
  const expenses = values[1];
  const savings = income - expenses;
  const savingsRate = income !== 0 ? (savings / income) * 100 : 0;
  const annualSavings = savings * 12;
  return [
    { result: savings, label: "Monthly Savings", suffix: " $", decimals: 0 },
    { result: savingsRate, label: "Savings Rate", suffix: " %", decimals: 1 },
    {
      result: annualSavings,
      label: "Annual Savings",
      suffix: " $",
      decimals: 0,
    },
  ];
};

export default function BudgetCalculator() {
  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix="$" />;
}
