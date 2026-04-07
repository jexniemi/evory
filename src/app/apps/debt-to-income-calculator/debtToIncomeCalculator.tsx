"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function DebtToIncomeCalculator() {
  const inputs = [
    { label: "Monthly gross income ($)", initialValue: 5000 },
    { label: "Monthly debt payments ($)", initialValue: 1200 },
  ];

  const calculate = (values: number[]) => {
    const [income, debt] = values;
    if (income <= 0) {
      return [
        { result: 0, label: "DTI Ratio:", suffix: "%" },
        { result: 0, label: "Remaining Income:", suffix: "$" },
      ];
    }
    const dti = (debt / income) * 100;
    const remaining = income - debt;
    const maxMortgage28 = income * 0.28;
    const availableForHousing = maxMortgage28 - Math.max(0, debt - income * 0.08);

    return [
      { result: dti, label: "DTI Ratio:", suffix: "%", decimals: 1 },
      { result: remaining, label: "Remaining Income:", suffix: "$", decimals: 0 },
      { result: maxMortgage28, label: "Max Housing Payment (28% rule):", suffix: "$", decimals: 0 },
      { result: income * 12, label: "Annual Gross Income:", suffix: "$", decimals: 0 },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
