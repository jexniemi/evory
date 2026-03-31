"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Miles driven", initialValue: 300 },
  { label: "Gallons used", initialValue: 10, step: 0.1 },
  { label: "Gas price per gallon ($)", initialValue: 3.5, step: 0.01 },
];

export default function GasMileageCalculator() {
  const calculate = (values: number[]) => {
    const miles = values[0];
    const gallons = values[1];
    const pricePerGallon = values[2];

    const mpg = gallons > 0 ? miles / gallons : 0;
    const totalFuelCost = gallons * pricePerGallon;
    const costPerMile = miles > 0 ? totalFuelCost / miles : 0;

    return [
      {
        result: mpg,
        label: "Miles per gallon (MPG)",
        suffix: " MPG",
        decimals: 1,
      },
      {
        result: costPerMile,
        label: "Cost per mile",
        suffix: " $",
        decimals: 3,
      },
      {
        result: totalFuelCost,
        label: "Total fuel cost",
        suffix: " $",
        decimals: 2,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
