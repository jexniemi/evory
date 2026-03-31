"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function RunningSpeedCalculator() {
  const inputs = [
    {
      label: "Time spent running (min)",
      initialValue: 40,
      step: 0.5,
    },
    { label: "Distance run (km)", initialValue: 5, step: 0.1 },
  ];

  const calculate = (values: number[]) => {
    const timeMin = values[0];
    const distKm = values[1];
    const speedKmh = distKm / (timeMin / 60);
    const paceMinPerKm = timeMin / distKm;

    return [
      {
        result: speedKmh,
        label: "Running speed",
        suffix: " km/h",
        decimals: 1,
      },
      {
        result: paceMinPerKm,
        label: "Running pace",
        suffix: " min/km",
        decimals: 2,
      },
      {
        result: paceMinPerKm * 5,
        label: "Estimated 5 km time",
        suffix: " min",
        decimals: 0,
      },
      {
        result: paceMinPerKm * 10,
        label: "Estimated 10 km time",
        suffix: " min",
        decimals: 0,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
