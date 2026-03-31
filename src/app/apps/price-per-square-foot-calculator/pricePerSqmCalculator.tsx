"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Home price ($)", initialValue: 250000, step: 1000 },
  { label: "Area (sq ft)", initialValue: 700, step: 1 },
  { label: "HOA loan share ($)", initialValue: 0, step: 1000 },
];

export default function PricePerSqmCalculator() {
  const calculate = (values: number[]) => {
    const price = values[0];
    const area = values[1];
    const housingCompanyLoan = values[2];

    if (area <= 0) {
      return [
        { result: 0, label: "Price per sq ft", suffix: " $/sqft", decimals: 2 },
      ];
    }

    const totalPrice = price + housingCompanyLoan;
    const pricePerSqm = totalPrice / area;
    const totalDebtFreePrice = totalPrice;

    return [
      {
        result: pricePerSqm,
        label: "Price per sq ft",
        suffix: " $/sqft",
        decimals: 2,
      },
      {
        result: totalDebtFreePrice,
        label: "Total price",
        suffix: " $",
        decimals: 0,
      },
      { result: price, label: "Selling price", suffix: " $", decimals: 0 },
      {
        result: housingCompanyLoan,
        label: "HOA loan share",
        suffix: " $",
        decimals: 0,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
