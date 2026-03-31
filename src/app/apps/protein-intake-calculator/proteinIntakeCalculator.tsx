"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const CALORIES_PER_GRAM_PROTEIN = 4;

const inputs = [
  { label: "Body Weight (lbs)", initialValue: 170 },
  {
    label: "Activity Level",
    values: [0.36, 0.5, 0.7, 0.9, 1.0],
    labels: [
      "Sedentary (0.36 g/lb)",
      "Light activity (0.5 g/lb)",
      "Moderate (0.7 g/lb)",
      "Active / Muscle gain (0.9 g/lb)",
      "Athlete (1.0 g/lb)",
    ],
  },
];

export default function ProteinIntakeCalculator() {
  const calculate = (values: number[]) => {
    const [weight, multiplier] = values;

    const dailyProtein = weight * multiplier;
    const proteinPerMeal3 = dailyProtein / 3;
    const proteinPerMeal4 = dailyProtein / 4;
    const caloriesFromProtein = dailyProtein * CALORIES_PER_GRAM_PROTEIN;

    return [
      {
        result: dailyProtein,
        label: "Daily Protein:",
        suffix: " g",
        decimals: 0,
      },
      {
        result: proteinPerMeal3,
        label: "Protein Per Meal (3 meals):",
        suffix: " g",
        decimals: 1,
      },
      {
        result: proteinPerMeal4,
        label: "Protein Per Meal (4 meals):",
        suffix: " g",
        decimals: 1,
      },
      {
        result: caloriesFromProtein,
        label: "Calories from Protein:",
        suffix: " kcal",
        decimals: 0,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
