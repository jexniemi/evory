"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Monthly expenses ($)", initialValue: 3500 },
  { label: "Months of coverage", values: [3, 6, 9, 12], labels: ["3 months", "6 months", "9 months", "12 months"] },
  { label: "Current savings ($)", initialValue: 2000 },
  { label: "Monthly savings contribution ($)", initialValue: 300 },
];

export default function EmergencyFundCalculator() {
  const calculate = (values: number[]) => {
    const monthlyExpenses = values[0];
    const months = values[1];
    const currentSavings = values[2];
    const monthlyContribution = values[3];

    const target = monthlyExpenses * months;
    const remaining = Math.max(0, target - currentSavings);
    const monthsToGoal =
      remaining > 0 && monthlyContribution > 0
        ? Math.ceil(remaining / monthlyContribution)
        : 0;
    const percentFunded = Math.min(100, (currentSavings / target) * 100);

    return [
      { result: target, label: "Emergency fund target:", suffix: "$", decimals: 0 },
      { result: remaining, label: "Still needed:", suffix: "$", decimals: 0 },
      { result: monthsToGoal, label: "Months to reach goal:", suffix: " months", decimals: 0 },
      { result: percentFunded, label: "Currently funded:", suffix: "%", decimals: 1 },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix="$" />;
}
