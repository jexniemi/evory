"use client";

import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Number of steps", initialValue: 10000, step: 500 },
  { label: "Body weight (kg)", initialValue: 70, step: 1 },
  {
    label: "Walking pace",
    values: [2.5, 3.5, 4.0, 4.8, 6.0],
    labels: [
      "Strolling (2.5 MET)",
      "Easy walk (3.0 MET)",
      "Brisk walk (3.5 MET)",
      "Fast walk (4.5 MET)",
      "Power walk (5.0 MET)",
    ],
  },
];

const calculate = (values: number[]) => {
  const steps = values[0];
  const weightKg = values[1];
  const met = values[2];

  // Average stride length: 76.2 cm (0.762 m)
  const avgStrideM = 0.762;
  const distanceKm = (steps * avgStrideM) / 1000;
  // Walking speed based on MET level (approximation)
  const speedKmh = met * 1.0; // rough approximation
  const timeHours = distanceKm / speedKmh;
  // Calories = MET × weight (kg) × time (hours)
  const calories = Math.round(met * weightKg * timeHours);

  return [
    {
      result: calories,
      label: "Estimated calories burned",
      suffix: " kcal",
      decimals: 0,
    },
    {
      result: Math.round(distanceKm * 100) / 100,
      label: "Estimated distance walked",
      suffix: " km",
      decimals: 2,
    },
    {
      result: Math.round(timeHours * 60),
      label: "Estimated walking time",
      suffix: " min",
      decimals: 0,
    },
    {
      result: Math.round((calories / 0.9) * 10) / 10,
      label: "Approx. grams of fat burned (9 kcal/g)",
      suffix: " g fat",
      decimals: 1,
    },
  ];
};

export default function StepsToCaloriesCalculator() {
  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
