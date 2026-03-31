"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Home price ($)", initialValue: 350000 },
  { label: "Down payment (%)", initialValue: 20 },
  { label: "Interest rate (%)", initialValue: 6.5, step: 0.1 },
  { label: "Loan term (years)", initialValue: 30 },
];

export default function MortgageCalculator() {
  const calculate = (values: number[]) => {
    const homePrice = values[0];
    const downPaymentPct = values[1] / 100;
    const annualRate = values[2] / 100;
    const termYears = values[3];

    const downPayment = homePrice * downPaymentPct;
    const loanAmount = homePrice - downPayment;
    const monthlyRate = annualRate / 12;
    const numPayments = termYears * 12;

    let monthlyPayment = 0;
    if (monthlyRate > 0 && numPayments > 0) {
      monthlyPayment =
        (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
        (Math.pow(1 + monthlyRate, numPayments) - 1);
    } else if (numPayments > 0) {
      monthlyPayment = loanAmount / numPayments;
    }

    const totalPaid = monthlyPayment * numPayments;
    const totalInterest = totalPaid - loanAmount;
    const totalCost = totalPaid + downPayment;

    return [
      {
        result: monthlyPayment,
        label: "Monthly payment (P&I):",
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
        label: "Total cost of home:",
        suffix: "$",
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
