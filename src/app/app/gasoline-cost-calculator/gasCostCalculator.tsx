"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function GasCostCalculator() {
  const inputs = [
    { label: "Distance Traveled (miles)", initialValue: 50 },
    { label: "Average Fuel Consumption (miles per gallon)", initialValue: 25 },
    { label: "Fuel Price per Gallon ($)", initialValue: 3.5, step: 0.01 },
  ];

  const calculate = (values: number[]) => {
    let result = 0;
    try {
      result = (values[0] / values[1]) * values[2];
    } catch (error) {
      console.error(error);
    }
    return [{ result, label: "Fuel Cost for the Trip:" }];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} prefix="$" />;
}
