"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  {
    label: "Gender",
    labels: ["Male", "Female"],
    values: [1, 2],
  },
  {
    label: "Age",
    initialValue: 25,
  },
  {
    label: "Weight (kg)",
    initialValue: 75,
  },
  {
    label: "Height (cm)",
    initialValue: 175,
  },
  {
    label: "Activity Level",
    values: [1.2, 1.375, 1.55, 1.725, 1.9],
    labels: [
      "Sedentary (little or no exercise)",
      "Lightly active (exercise 1-3 days per week)",
      "Moderately active (exercise 3-5 days per week)",
      "Very active (exercise 6-7 days per week)",
      "Super active (physical job & very intense exercise)",
    ],
  },
];

export default function CaloricNeedsCalculator() {
  const calculate = (values: number[]) => {
    let result = 0;
    let bmr = 0;
    try {
      const age = values[1];
      const weight = values[2];
      const height = values[3];
      const activityLevel = values[4];

      if (values[0] === 1) {
        bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
      } else {
        bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
      }
      result = bmr * activityLevel;
    } catch {}
    return [{ result: result, label: "Your daily caloric need is:" }];
  };

  return (
    <SimpleCalculator inputs={inputs} calculate={calculate} suffix=" kcal" />
  );
}
