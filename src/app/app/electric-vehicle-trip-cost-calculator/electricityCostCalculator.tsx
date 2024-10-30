"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function ElectricityCostCalculator() {
  const inputs = [
    { label: "Distance (miles)", initialValue: 100 },
    {
      label: "Car energy consumption (kWh / 100 miles)",
      initialValue: 15,
    },
    {
      label: "Electricity price ($/kWh)",
      initialValue: 0.15,
      step: 0.01,
    },
  ];

  const calculate = (values: number[]) => {
    let result = 0;
    try {
      result = (values[0] / 100) * values[1] * values[2];
    } catch (error) {
      console.error(error);
    }
    return [{ result, label: "Trip electricity costs:" }];
  };

  return (
    <SimpleCalculator
      inputs={inputs}
      calculate={calculate}
      prefix="$"
      resultButtonStyle="bg-pastelblue"
    />
  );
}
