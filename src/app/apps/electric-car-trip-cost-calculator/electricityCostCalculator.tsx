"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function GasCostCalculator() {
  const inputs = [
    { label: "Ajomatka (km)", initialValue: 100 },
    {
      label: "Auton energiankulutus (kWh / 100km)",
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
    return [{ result, label: "Trip electricity cost:" }];
  };

  return (
    <SimpleCalculator
      inputs={inputs}
      calculate={calculate}
      suffix="$"
      resultButtonStyle="bg-pastelblue"
    />
  );
}
