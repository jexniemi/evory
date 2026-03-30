"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Sähkön kulutus (kWh)", initialValue: 1000 },
  { label: "Sähkön hinta (€/kWh)", initialValue: 0.25 },
];

export default function ElectricityCalculator() {
  const calculate = (values: number[]) => {
    let cost = 0;

    try {
      const consumption = values[0];
      const price = values[1];

      cost = consumption * price;
    } catch (error) {
      console.error(error);
    }

    return [
      { result: cost, label: "Sähkölaskun summa:", suffix: "€", decimals: 2 },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
