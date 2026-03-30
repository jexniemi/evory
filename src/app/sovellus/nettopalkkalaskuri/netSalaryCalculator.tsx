"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Bruttopalkka (€/kk)", initialValue: 3500 },
  {
    label: "Veroprosentti (%)",
    initialValue: 25,
    step: 0.5,
  },
  {
    label: "Työeläkemaksu (%)",
    initialValue: 7.15,
    step: 0.01,
  },
  {
    label: "Työttömyysvakuutusmaksu (%)",
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
      { result: net, label: "Nettopalkka", suffix: " €/kk", decimals: 2 },
      { result: tax, label: "Tulovero", suffix: " €/kk", decimals: 2 },
      {
        result: pension,
        label: "Työeläkemaksu (TyEL)",
        suffix: " €/kk",
        decimals: 2,
      },
      {
        result: unemployment,
        label: "Työttömyysvakuutus",
        suffix: " €/kk",
        decimals: 2,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
