"use client";

import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Weight lifted (kg)", initialValue: 100, step: 2.5 },
  {
    label: "Reps performed (use 1–10 for best accuracy)",
    initialValue: 5,
    step: 1,
  },
];

const calculate = (values: number[]) => {
  const weight = values[0];
  const reps = values[1];

  if (reps <= 0 || weight <= 0)
    return [{ result: 0, label: "Enter valid weight and reps", suffix: " kg" }];
  if (reps === 1)
    return [
      {
        result: weight,
        label: "Estimated 1RM (actual lift)",
        suffix: " kg",
        decimals: 1,
      },
    ];

  // Epley formula
  const epley = weight * (1 + reps / 30);
  // Brzycki formula
  const brzycki = weight * (36 / (37 - reps));
  // Average of both
  const oneRM = (epley + brzycki) / 2;

  return [
    {
      result: Math.round(oneRM * 2) / 2,
      label: "Estimated 1RM",
      suffix: " kg",
      decimals: 1,
    },
    {
      result: Math.round(oneRM * 0.9 * 2) / 2,
      label: "90% of 1RM — Strength training",
      suffix: " kg",
      decimals: 1,
    },
    {
      result: Math.round(oneRM * 0.8 * 2) / 2,
      label: "80% of 1RM — Hypertrophy",
      suffix: " kg",
      decimals: 1,
    },
    {
      result: Math.round(oneRM * 0.7 * 2) / 2,
      label: "70% of 1RM — Muscular endurance",
      suffix: " kg",
      decimals: 1,
    },
  ];
};

export default function OneRepMaxCalculator() {
  return (
    <SimpleCalculator inputs={inputs} calculate={calculate} suffix=" kg" />
  );
}
