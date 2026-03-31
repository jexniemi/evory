"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Vehicle price ($)", initialValue: 35000 },
  { label: "Down payment ($)", initialValue: 5000 },
  { label: "Interest rate (%)", initialValue: 7.0, step: 0.1 },
  {
    label: "Loan term (months)",
    values: [24, 36, 48, 60, 72, 84],
    labels: [
      "24 months",
      "36 months",
      "48 months",
      "60 months",
      "72 months",
      "84 months",
    ],
  },
];

export default function CarLoanCalculator() {
  const calculate = (values: number[]) => {
    const vehiclePrice = values[0];
    const downPayment = values[1];
    const interestRate = values[2];
    const n = values[3];

    const loanAmount = vehiclePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;

    const monthlyPayment =
      monthlyRate > 0
        ? (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, n))) /
          (Math.pow(1 + monthlyRate, n) - 1)
        : loanAmount / n;

    const totalPaid = monthlyPayment * n;
    const totalInterest = totalPaid - loanAmount;
    const totalCost = totalPaid + downPayment;

    return [
      {
        result: monthlyPayment,
        label: "Monthly payment:",
        suffix: "$",
        decimals: 2,
      },
      {
        result: totalInterest,
        label: "Total interest paid:",
        suffix: "$",
        decimals: 0,
      },
      {
        result: totalCost,
        label: "Total cost of vehicle:",
        suffix: "$",
        decimals: 0,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix="$" />;
}
