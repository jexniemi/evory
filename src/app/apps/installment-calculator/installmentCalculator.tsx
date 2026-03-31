"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function InstallmentCalculator() {
  const calculateInstallment = (values: number[]) => {
    const r = values[1] / 12 / 100;
    const months = values[2];
    const principal = values[0];

    const monthlyPayment = (principal * r) / (1 - Math.pow(1 + r, -months));
    const totalCost = monthlyPayment * months;
    const totalInterest = totalCost - principal;

    return [
      { result: monthlyPayment || 0, label: "Monthly payment:", suffix: "$" },
      { result: totalCost || 0, label: "Total cost:", suffix: "$" },
      { result: totalInterest || 0, label: "Total interest:", suffix: "$" },
    ];
  };

  return (
    <SimpleCalculator
      inputs={[
        { label: "Loan/product total ($)", initialValue: 1000 },
        { label: "Annual interest rate (%)", initialValue: 5 },
        { label: "Payment period (months)", initialValue: 12 },
      ]}
      calculate={calculateInstallment}
    />
  );
}
