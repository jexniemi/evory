"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Net salary per month ($)", initialValue: 2500 },
  { label: "Taxes paid per month ($)", initialValue: 700 },
];

export default function TaxRateCalculator() {
  const calculate = (values: number[]) => {
    const netSalary = values[0];
    const taxes = values[1];
    const grossSalary = netSalary + taxes;
    const taxRate = (taxes / grossSalary) * 100;

    return [
      { result: grossSalary, label: "Gross salary", suffix: " $", decimals: 2 },
      { result: taxRate, label: "Tax rate", suffix: " %", decimals: 1 },
      {
        result: grossSalary * 12,
        label: "Annual gross income",
        suffix: " $",
        decimals: 0,
      },
      {
        result: taxes * 12,
        label: "Annual taxes total",
        suffix: " $",
        decimals: 0,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
