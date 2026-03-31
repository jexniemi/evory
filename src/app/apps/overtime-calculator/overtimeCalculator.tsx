"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Hourly rate ($)", initialValue: 25 },
  { label: "Regular hours per week", initialValue: 40 },
  { label: "Overtime hours per week", initialValue: 10 },
  { label: "Overtime multiplier", initialValue: 1.5, step: 0.25 },
];

export default function OvertimeCalculator() {
  const calculate = (values: number[]) => {
    const rate = values[0];
    const regularHours = values[1];
    const overtimeHours = values[2];
    const multiplier = values[3];

    const regularPay = rate * regularHours;
    const overtimeRate = rate * multiplier;
    const overtimePay = overtimeRate * overtimeHours;
    const weeklyTotal = regularPay + overtimePay;
    const annualEstimate = weeklyTotal * 52;

    return [
      { result: overtimeRate, label: "Overtime hourly rate:", suffix: "$", decimals: 2 },
      { result: regularPay, label: "Regular weekly pay:", suffix: "$", decimals: 2 },
      { result: overtimePay, label: "Overtime weekly pay:", suffix: "$", decimals: 2 },
      { result: weeklyTotal, label: "Total weekly pay:", suffix: "$", decimals: 2 },
      { result: annualEstimate, label: "Estimated annual pay:", suffix: "$", decimals: 0 },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
