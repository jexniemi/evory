"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Trip distance (miles)", initialValue: 100 },
  { label: "Fuel consumption (gal/100mi)", initialValue: 7, step: 0.1 },
  { label: "Fuel price ($/gal)", initialValue: 3.5, step: 0.01 },
  { label: "Annual mileage (mi/yr)", initialValue: 15000 },
];

export default function FuelCostCalculator() {
  const calculate = (values: number[]) => {
    const distance = values[0];
    const consumption = values[1];
    const fuelPrice = values[2];
    const yearlyKm = values[3];

    const fuelNeeded = (distance / 100) * consumption;
    const tripCost = fuelNeeded * fuelPrice;
    const costPerKm = consumption > 0 ? (consumption / 100) * fuelPrice : 0;
    const yearlyCost = (yearlyKm / 100) * consumption * fuelPrice;

    return [
      {
        result: tripCost,
        label: "Trip fuel cost",
        suffix: " $",
        decimals: 2,
      },
      {
        result: fuelNeeded,
        label: "Fuel needed",
        suffix: " gal",
        decimals: 2,
      },
      {
        result: costPerKm,
        label: "Cost per mile",
        suffix: " $/mi",
        decimals: 3,
      },
      {
        result: yearlyCost,
        label: "Annual fuel cost",
        suffix: " $/yr",
        decimals: 0,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
