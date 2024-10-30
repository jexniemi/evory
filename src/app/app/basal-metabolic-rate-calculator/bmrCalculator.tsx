"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

// Input fields for the BMR calculator
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
];

export default function BMRCalculator() {
  const calculateBMR = (values: number[]) => {
    let result = 0;
    try {
      const age = values[1];
      const weight = values[2];
      const height = values[3];

      // Calculate BMR based on gender
      if (values[0] === 1) {
        // Male formula
        result = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
      } else {
        // Female formula
        result = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
      }
    } catch {}
    return [{ result, label: "Basal Metabolic Rate (BMR)" }];
  };

  return (
    <SimpleCalculator inputs={inputs} calculate={calculateBMR} suffix=" kcal" />
  );
}
