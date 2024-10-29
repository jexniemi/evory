"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function RunningSpeedCalculator() {
  const inputs = [
    {
      label: "Juoksuun käytetty aika (min)",
      initialValue: 40,
      step: 0.5,
    },
    { label: "Juostu etäisyys (km)", initialValue: 5, step: 0.1 },
  ];

  const calculate = (values: number[]) => {
    let result = 0;
    try {
      result = values[1] / (values[0] / 60);
    } catch (error) {
      console.error(error);
    }
    return [
      { result, label: "Juoksuvauhti:", suffix: " km/h" },
      { result: 60 / result, label: "Juoksutahti:", suffix: " min/km" },
    ];
  };

  return (
    <SimpleCalculator inputs={inputs} suffix=" km/h" calculate={calculate} />
  );
}
