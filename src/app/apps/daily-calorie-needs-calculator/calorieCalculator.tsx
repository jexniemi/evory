"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  {
    label: "Gender",
    labels: ["Male", "Female"],
    values: [1, 2],
  },
  { label: "Age (years)", initialValue: 30 },
  { label: "Weight (kg)", initialValue: 70 },
  { label: "Height (cm)", initialValue: 170 },
  {
    label: "Activity level",
    labels: [
      "Sedentary, no exercise",
      "Light exercise 1–3 days/wk",
      "Moderate exercise 3–5 days/wk",
      "Heavy exercise 6–7 days/wk",
      "Very intense / physical work",
    ],
    values: [1.2, 1.375, 1.55, 1.725, 1.9],
  },
];

export default function DailyCalorieCalculator() {
  const calculate = (values: number[]) => {
    const gender = values[0];
    const age = values[1];
    const weight = values[2];
    const height = values[3];
    const activityMultiplier = values[4];

    // Mifflin-St Jeor
    const bmr =
      gender === 1
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;

    const dailyNeed = bmr * activityMultiplier;

    return [
      {
        result: dailyNeed,
        label: "Daily calorie needs",
        suffix: " kcal",
        decimals: 0,
      },
      {
        result: dailyNeed - 500,
        label: "Weight loss (−500 kcal)",
        suffix: " kcal",
        decimals: 0,
      },
      {
        result: dailyNeed + 500,
        label: "Muscle gain (+500 kcal)",
        suffix: " kcal",
        decimals: 0,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
