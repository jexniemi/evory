"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Ajomatka (km)", initialValue: 100 },
  { label: "Kulutus (L/100 km)", initialValue: 7, step: 0.1 },
  { label: "Polttoaineen hinta (€/l)", initialValue: 1.85, step: 0.01 },
  { label: "Vuosikilometrit (km/v)", initialValue: 15000 },
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
        label: "Matkan polttoainekustannus",
        suffix: " €",
        decimals: 2,
      },
      {
        result: fuelNeeded,
        label: "Polttoainetta tarvitaan",
        suffix: " L",
        decimals: 2,
      },
      {
        result: costPerKm,
        label: "Kustannus per kilometri",
        suffix: " €/km",
        decimals: 3,
      },
      {
        result: yearlyCost,
        label: "Vuosikulut polttoaineeseen",
        suffix: " €/v",
        decimals: 0,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
