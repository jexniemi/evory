"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function RunningSpeedCalculator() {
  const inputs = [
    {
      label: "Time spent running (min)",
      initialValue: 40,
      step: 0.5,
    },
    { label: "Distance run (miles)", initialValue: 3.1, step: 0.1 },
  ];

  const calculate = (values: number[]) => {
    let result = 0;
    try {
      result = values[1] / (values[0] / 60); // Calculates speed in miles per hour
    } catch (error) {
      console.error(error);
    }
    return [
      { result, label: "Running Speed:", suffix: " mph" },
      { result: 60 / result, label: "Pace:", suffix: " min/mile" },
    ];
  };

  return (
    <SimpleCalculator inputs={inputs} suffix=" mph" calculate={calculate} />
  );
}
