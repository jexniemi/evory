"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Nettopalkka kuukaudessa (€)", initialValue: 2500 },
  { label: "Maksamasi verot kuukaudessa (€)", initialValue: 700 },
];

export default function TaxRateCalculator() {
  const calculate = (values: number[]) => {
    const netSalary = values[0];
    const taxes = values[1];
    const grossSalary = netSalary + taxes;
    const taxRate = (taxes / grossSalary) * 100;

    return [
      { result: grossSalary, label: "Bruttopalkka", suffix: " €", decimals: 2 },
      { result: taxRate, label: "Veroprosentti", suffix: " %", decimals: 1 },
      {
        result: grossSalary * 12,
        label: "Vuositulot brutto",
        suffix: " €",
        decimals: 0,
      },
      {
        result: taxes * 12,
        label: "Vuoden verot yhteensä",
        suffix: " €",
        decimals: 0,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
