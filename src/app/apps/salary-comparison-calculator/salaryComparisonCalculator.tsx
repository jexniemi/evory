"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Salary A – Annual ($)", initialValue: 65000, step: 1000 },
  { label: "Salary B – Annual ($)", initialValue: 75000, step: 1000 },
];

const calculate = (values: number[]) => {
  const a = values[0];
  const b = values[1];
  const diff = b - a;
  const pctHigher = a !== 0 ? ((b - a) / a) * 100 : 0;
  const monthlyDiff = diff / 12;
  const weeklyDiff = diff / 52;
  return [
    { result: diff, label: "Annual Difference", suffix: " $", decimals: 0 },
    { result: pctHigher, label: "Salary B is higher by", suffix: " %", decimals: 2 },
    { result: monthlyDiff, label: "Monthly Difference", suffix: " $", decimals: 2 },
    { result: weeklyDiff, label: "Weekly Difference", suffix: " $", decimals: 2 },
  ];
};

export default function SalaryComparisonCalculator() {
  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix="$" />;
}
