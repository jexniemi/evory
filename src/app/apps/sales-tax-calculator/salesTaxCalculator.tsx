"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Item price ($)", initialValue: 50 },
  { label: "Sales tax rate (%)", initialValue: 7 },
];

export default function SalesTaxCalculator() {
  const calculate = (values: number[]) => {
    const price = values[0];
    const rate = values[1];

    const taxAmount = price * (rate / 100);
    const totalWithTax = price + taxAmount;
    const preTaxFromTotal = price / (1 + rate / 100);

    return [
      { result: taxAmount, label: "Tax amount:", suffix: "$", decimals: 2 },
      {
        result: totalWithTax,
        label: "Total price (with tax):",
        suffix: "$",
        decimals: 2,
      },
      {
        result: preTaxFromTotal,
        label: "Pre-tax price from total (reverse):",
        suffix: "$",
        decimals: 2,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
