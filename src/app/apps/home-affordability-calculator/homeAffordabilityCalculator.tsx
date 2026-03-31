"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Annual gross income ($)", initialValue: 90000 },
  { label: "Monthly debt payments ($)", initialValue: 400 },
  { label: "Down payment available ($)", initialValue: 60000 },
  { label: "Interest rate (%)", initialValue: 6.5, step: 0.1 },
  { label: "Loan term (years)", initialValue: 30 },
];

export default function HomeAffordabilityCalculator() {
  const calculate = (values: number[]) => {
    const annualIncome = values[0];
    const monthlyDebts = values[1];
    const downPayment = values[2];
    const interestRate = values[3];
    const loanTerm = values[4];

    const monthlyIncome = annualIncome / 12;
    const maxHousingPayment = monthlyIncome * 0.28;
    const maxTotalDebt = monthlyIncome * 0.36;
    const maxMortgageByDebt = maxTotalDebt - monthlyDebts;
    const maxMonthlyPayment = Math.min(maxHousingPayment, maxMortgageByDebt);

    const r = (interestRate / 100) / 12;
    const n = loanTerm * 12;
    const maxLoan =
      r > 0
        ? maxMonthlyPayment * ((1 - Math.pow(1 + r, -n)) / r)
        : maxMonthlyPayment * n;

    const maxHomePrice = maxLoan + downPayment;

    return [
      { result: maxHomePrice, label: "Maximum home price:", suffix: "$", decimals: 0 },
      { result: maxLoan, label: "Maximum loan amount:", suffix: "$", decimals: 0 },
      { result: maxMonthlyPayment, label: "Max monthly payment:", suffix: "$", decimals: 0 },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix="$" />;
}
