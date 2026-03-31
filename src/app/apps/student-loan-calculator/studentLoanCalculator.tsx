"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Loan balance ($)", initialValue: 35000 },
  { label: "Interest rate (%)", initialValue: 6.5, step: 0.1 },
  { label: "Repayment term (years)", initialValue: 10 },
];

export default function StudentLoanCalculator() {
  const calculate = (values: number[]) => {
    const balance = values[0];
    const annualRate = values[1];
    const years = values[2];

    const monthlyRate = annualRate / 100 / 12;
    const n = years * 12;

    let monthlyPayment: number;
    if (monthlyRate > 0) {
      const factor = Math.pow(1 + monthlyRate, n);
      monthlyPayment = (balance * (monthlyRate * factor)) / (factor - 1);
    } else {
      monthlyPayment = n > 0 ? balance / n : 0;
    }

    const totalPaid = monthlyPayment * n;
    const totalInterest = totalPaid - balance;

    return [
      { result: monthlyPayment, label: "Monthly payment:", suffix: "$", decimals: 2 },
      { result: totalInterest, label: "Total interest paid:", suffix: "$", decimals: 0 },
      { result: totalPaid, label: "Total amount paid:", suffix: "$", decimals: 0 },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix="$" />;
}
