"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Home price ($)", initialValue: 350000 },
  { label: "Down payment percentage (%)", initialValue: 20 },
  { label: "Current savings ($)", initialValue: 30000 },
  { label: "Monthly savings ($)", initialValue: 1500 },
];

export default function DownPaymentCalculator() {
  const calculate = (values: number[]) => {
    const homePrice = values[0];
    const downPaymentPct = values[1] / 100;
    const currentSavings = values[2];
    const monthlySavings = values[3];

    const downPaymentAmount = homePrice * downPaymentPct;
    const remainingToSave = Math.max(downPaymentAmount - currentSavings, 0);
    const monthsToGoal =
      monthlySavings > 0 ? Math.ceil(remainingToSave / monthlySavings) : 0;
    const loanAmount = homePrice - downPaymentAmount;

    return [
      {
        result: downPaymentAmount,
        label: "Down payment amount:",
        suffix: "$",
        decimals: 0,
      },
      {
        result: remainingToSave,
        label: "Remaining to save:",
        suffix: "$",
        decimals: 0,
      },
      {
        result: monthsToGoal,
        label: "Months to goal:",
        suffix: "",
        decimals: 0,
      },
      {
        result: loanAmount,
        label: "Loan amount:",
        suffix: "$",
        decimals: 0,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
