"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Loan amount ($)", initialValue: 150000 },
  { label: "Annual interest rate (%)", initialValue: 4.5, step: 0.1 },
  { label: "Loan term (years)", initialValue: 25 },
];

export default function LoanCalculator() {
  const calculate = (values: number[]) => {
    const principal = values[0];
    const annualRate = values[1];
    const years = values[2];

    const months = years * 12;
    const monthlyRate = annualRate / 100 / 12;

    let monthlyPayment = 0;
    if (monthlyRate === 0) {
      monthlyPayment = principal / months;
    } else {
      monthlyPayment =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
    }

    const totalPaid = monthlyPayment * months;
    const totalInterest = totalPaid - principal;
    const paybackRatio = principal > 0 ? totalPaid / principal : 0;

    return [
      {
        result: monthlyPayment,
        label: "Monthly payment",
        suffix: " $",
        decimals: 2,
      },
      {
        result: totalInterest,
        label: "Total interest",
        suffix: " $",
        decimals: 2,
      },
      {
        result: totalPaid,
        label: "Total repayment",
        suffix: " $",
        decimals: 2,
      },
      {
        result: paybackRatio,
        label: "Repayment multiplier",
        suffix: "×",
        decimals: 2,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
