"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Total debt ($)", initialValue: 15000 },
  { label: "Interest rate (%)", initialValue: 18, step: 0.1 },
  { label: "Monthly payment ($)", initialValue: 500 },
];

export default function DebtPayoffCalculator() {
  const calculate = (values: number[]) => {
    const totalDebt = values[0];
    const annualRate = values[1];
    const monthlyPayment = values[2];

    const monthlyRate = annualRate / 100 / 12;
    let balance = totalDebt;
    let months = 0;
    let totalInterest = 0;
    const maxMonths = 1200;

    if (monthlyPayment <= balance * monthlyRate) {
      return [
        { result: 0, label: "Months to payoff", suffix: "", decimals: 0 },
        { result: 0, label: "Total interest paid", suffix: " $", decimals: 2 },
        { result: 0, label: "Total amount paid", suffix: " $", decimals: 2 },
      ];
    }

    while (balance > 0 && months < maxMonths) {
      const interest = balance * monthlyRate;
      totalInterest += interest;
      const principal = monthlyPayment - interest;
      balance -= principal;
      months++;
      if (balance < 0) balance = 0;
    }

    const totalPaid = totalDebt + totalInterest;

    return [
      { result: months, label: "Months to payoff", suffix: "", decimals: 0 },
      {
        result: totalInterest,
        label: "Total interest paid",
        suffix: " $",
        decimals: 2,
      },
      {
        result: totalPaid,
        label: "Total amount paid",
        suffix: " $",
        decimals: 2,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
