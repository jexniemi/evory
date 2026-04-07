"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function EmiCalculator() {
  const inputs = [
    { label: "Loan amount ($)", initialValue: 25000 },
    { label: "Annual interest rate (%)", initialValue: 7.5 },
    { label: "Loan tenure (months)", initialValue: 60 },
  ];

  const calculate = (values: number[]) => {
    const [principal, annualRate, months] = values;
    if (principal <= 0 || months <= 0) {
      return [{ result: 0, label: "EMI:", suffix: "$" }];
    }

    if (annualRate === 0) {
      const emi = principal / months;
      return [
        { result: emi, label: "Monthly EMI:", suffix: "$", decimals: 2 },
        { result: emi * months, label: "Total Payment:", suffix: "$", decimals: 2 },
        { result: 0, label: "Total Interest:", suffix: "$", decimals: 2 },
      ];
    }

    const r = annualRate / 100 / 12;
    const emi = (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
    const totalPayment = emi * months;
    const totalInterest = totalPayment - principal;

    return [
      { result: emi, label: "Monthly EMI:", suffix: "$", decimals: 2 },
      { result: totalPayment, label: "Total Payment:", suffix: "$", decimals: 2 },
      { result: totalInterest, label: "Total Interest:", suffix: "$", decimals: 2 },
      { result: (totalInterest / principal) * 100, label: "Interest as % of Principal:", suffix: "%", decimals: 1 },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
