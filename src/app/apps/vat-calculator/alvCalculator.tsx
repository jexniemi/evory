"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Price ($)", initialValue: 100 },
  {
    label: "Tax rate",
    values: [10, 5, 0, 0],
    labels: [
      "10% (standard)",
      "5% (food, restaurant)",
      "0% (medical, exempt)",
      "0%",
    ],
  },
];

export default function AlvCalculator() {
  const calculate = (values: number[]) => {
    let vatFromNetPrice = 0;
    let grossPrice = 0;
    let vatFromGrossPrice = 0;
    let netPrice = 0;

    try {
      const price = values[0];
      const vatRate = values[1] / 100;

      // Tax added to net price → gross price
      vatFromNetPrice = price * vatRate;
      grossPrice = price + vatFromNetPrice;

      // Tax removed from gross price → net price
      netPrice = price / (1 + vatRate);
      vatFromGrossPrice = price - netPrice;
    } catch (error) {
      console.error(error);
    }

    return [
      {
        result: vatFromNetPrice || 0,
        label: "Tax amount (price excl. tax):",
        suffix: "$",
        decimals: 2,
      },
      {
        result: grossPrice || 0,
        label: "Price incl. tax:",
        suffix: "$",
        decimals: 2,
      },
      {
        result: vatFromGrossPrice || 0,
        label: "Tax amount (price incl. tax):",
        suffix: "$",
        decimals: 2,
      },
      {
        result: netPrice || 0,
        label: "Price excl. tax:",
        suffix: "$",
        decimals: 2,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
