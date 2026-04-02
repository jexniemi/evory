"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Investment Amount ($)", initialValue: 10000, step: 500 },
  { label: "Annual Dividend Yield (%)", initialValue: 4, step: 0.1 },
  { label: "Number of Years", initialValue: 10, step: 1 },
];

const calculate = (values: number[]) => {
  const principal = values[0];
  const yieldPct = values[1];
  const years = values[2];
  const annualDividend = (principal * yieldPct) / 100;
  const monthlyDividend = annualDividend / 12;
  const totalDividends = annualDividend * years;
  return [
    { result: annualDividend, label: "Annual Dividend Income", suffix: " $", decimals: 2 },
    { result: monthlyDividend, label: "Monthly Dividend Income", suffix: " $", decimals: 2 },
    { result: totalDividends, label: `Total Dividends (${years} yrs)`, suffix: " $", decimals: 2 },
  ];
};

export default function DividendCalculator() {
  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix="$" />;
}
