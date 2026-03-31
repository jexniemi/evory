"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  {
    label: "Gender",
    labels: ["Male", "Female"],
    values: [1, 2],
  },
  { label: "Age (years)", initialValue: 30 },
  { label: "Weight (kg)", initialValue: 75 },
  { label: "Height (cm)", initialValue: 175 },
];

export default function BMRCalculator() {
  const calculateBMR = (values: number[]) => {
    const gender = values[0];
    const age = values[1];
    const weight = values[2];
    const height = values[3];

    // Harris-Benedict
    const bmr =
      gender === 1
        ? 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age
        : 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;

    return [
      {
        result: bmr,
        label: "Basal Metabolic Rate (BMR)",
        suffix: " kcal",
        decimals: 0,
      },
      {
        result: bmr * 1.2,
        label: "Sedentary, no exercise",
        suffix: " kcal/day",
        decimals: 0,
      },
      {
        result: bmr * 1.55,
        label: "Moderate exercise",
        suffix: " kcal/day",
        decimals: 0,
      },
      {
        result: bmr * 1.725,
        label: "Heavy exercise",
        suffix: " kcal/day",
        decimals: 0,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculateBMR} />;
}
