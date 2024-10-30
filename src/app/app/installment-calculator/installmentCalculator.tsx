"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function InstallmentCalculator() {
  const calculateInstallment = (values: number[]) => {
    const r = values[1] / 12 / 100; // Annual interest rate divided by 12 and converted to decimal
    const months = values[2]; // Payment period in months
    const principal = values[0]; // Total amount of the loan/product

    // Calculate monthly payment using the annuity formula
    const monthlyPayment = (principal * r) / (1 - Math.pow(1 + r, -months));
    const totalCost = monthlyPayment * months; // Total cost of the loan
    const totalInterest = totalCost - principal; // Total interest paid

    return [
      { result: monthlyPayment || 0, label: "Monthly Payment:", suffix: "$" },
      { result: totalCost || 0, label: "Total Cost:", suffix: "$" },
      { result: totalInterest || 0, label: "Total Interest:", suffix: "$" },
    ];
  };

  return (
    <SimpleCalculator
      inputs={[
        { label: "Total Amount of Loan/Product ($)", initialValue: 1000 },
        { label: "Annual Interest Rate (%)", initialValue: 5 },
        { label: "Payment Period (in months)", initialValue: 12 },
      ]}
      calculate={calculateInstallment}
    />
  );
}
