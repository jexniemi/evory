"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function GasCostCalculator() {
  const inputs = [
    { label: "Distance driven (miles)", initialValue: 50 },
    { label: "Fuel consumption (gal/100mi)", initialValue: 5 },
    { label: "Fuel price per gallon ($)", initialValue: 3.5, step: 0.001 },
  ];

  const calculate = (values: number[]) => {
    let result = 0;
    try {
      result = (values[0] / 100) * values[1] * values[2];
    } catch (error) {
      console.error(error);
    }
    return [{ result, label: "Trip fuel cost:" }];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix="$" />;
}
