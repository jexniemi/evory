"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Weight (lbs)", initialValue: 70, step: 1 },
  {
    label: "Activity level",
    values: [1, 1.2, 1.5, 1.8],
    labels: [
      "Sedentary (desk job)",
      "Moderate (light exercise)",
      "Active (regular exercise)",
      "Very active (intense training)",
    ],
  },
];

export default function WaterIntakeCalculator() {
  const calculate = (values: number[]) => {
    const weight = values[0];
    const activityMultiplier = values[1];

    // Base: 33ml per kg body weight, adjusted by activity level
    const baseMl = weight * 33;
    const adjustedMl = baseMl * activityMultiplier;
    const liters = adjustedMl / 1000;
    const glasses = Math.ceil(adjustedMl / 250); // 250ml per glass

    return [
      {
        result: liters,
        label: "Daily water needs",
        suffix: " liters",
        decimals: 1,
      },
      {
        result: adjustedMl,
        label: "In milliliters",
        suffix: " ml",
        decimals: 0,
      },
      {
        result: glasses,
        label: "Glasses (8 oz)",
        suffix: " glasses",
        decimals: 0,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
