"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function WaterIntakeCalculator() {
  const inputs = [
    { label: "Body weight (lbs)", initialValue: 160 },
    { label: "Exercise (minutes/day)", initialValue: 30 },
  ];

  const calculate = (values: number[]) => {
    const [weight, exercise] = values;
    if (weight <= 0) {
      return [{ result: 0, label: "Daily Water:", suffix: " oz" }];
    }

    // Base: half your body weight in ounces
    const baseOz = weight / 2;
    // Add 12 oz per 30 min of exercise
    const exerciseOz = (exercise / 30) * 12;
    const totalOz = baseOz + exerciseOz;
    const liters = totalOz * 0.0295735;
    const cups = totalOz / 8;
    const glasses = Math.ceil(cups);

    return [
      {
        result: totalOz,
        label: "Daily Water Intake:",
        suffix: " oz",
        decimals: 0,
      },
      { result: liters, label: "In Liters:", suffix: " L", decimals: 1 },
      { result: cups, label: "In Cups (8 oz):", suffix: " cups", decimals: 1 },
      {
        result: glasses,
        label: "Glasses Per Day:",
        suffix: " glasses",
        decimals: 0,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
