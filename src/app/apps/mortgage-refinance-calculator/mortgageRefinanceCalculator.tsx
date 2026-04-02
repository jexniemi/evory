"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Current Monthly Payment ($)", initialValue: 2100, step: 50 },
  { label: "New Monthly Payment ($)", initialValue: 1800, step: 50 },
  { label: "Closing Costs ($)", initialValue: 4500, step: 100 },
];

const calculate = (values: number[]) => {
  const currentPayment = values[0];
  const newPayment = values[1];
  const closingCosts = values[2];
  const monthlySavings = currentPayment - newPayment;
  const breakEvenMonths = monthlySavings > 0 ? closingCosts / monthlySavings : 0;
  const fiveYearSavings = monthlySavings * 60 - closingCosts;
  return [
    { result: monthlySavings, label: "Monthly Savings", suffix: " $", decimals: 2 },
    { result: breakEvenMonths, label: "Break-Even (months)", suffix: " months", decimals: 1 },
    { result: fiveYearSavings, label: "Net Savings After 5 Years", suffix: " $", decimals: 0 },
  ];
};

export default function MortgageRefinanceCalculator() {
  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix="$" />;
}
