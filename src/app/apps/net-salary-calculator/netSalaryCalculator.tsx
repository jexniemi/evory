"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Gross salary ($/mo)", initialValue: 3500 },
  {
    label: "Tax rate (%)",
    initialValue: 25,
    step: 0.5,
  },
  {
    label: "Pension contribution (%)",
    initialValue: 7.15,
    step: 0.01,
  },
  {
    label: "Unemployment insurance (%)",
    initialValue: 1.36,
    step: 0.01,
  },
];

export default function NetSalaryCalculator() {
  const calculate = (values: number[]) => {
    const gross = values[0];
    const taxRate = values[1] / 100;
    const pensionRate = values[2] / 100;
    const unemploymentRate = values[3] / 100;

    const pension = gross * pensionRate;
    const unemployment = gross * unemploymentRate;
    const taxableIncome = gross;
    const tax = taxableIncome * taxRate;
    const net = gross - tax - pension - unemployment;

    return [
      { result: net, label: "Net salary", suffix: " $/mo", decimals: 2 },
      { result: tax, label: "Income tax", suffix: " $/mo", decimals: 2 },
      {
        result: pension,
        label: "Pension (401k)",
        suffix: " $/mo",
        decimals: 2,
      },
      {
        result: unemployment,
        label: "Unemployment insurance",
        suffix: " $/mo",
        decimals: 2,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
