"use client"

import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator"

const inputs = [
  { label: "Daily calorie maintenance (TDEE, kcal)", initialValue: 2200, step: 50 },
  {
    label: "Target weekly weight loss",
    values: [0.25, 0.5, 0.75, 1.0],
    labels: ["0.25 kg/week (mild)", "0.5 kg/week (moderate)", "0.75 kg/week (aggressive)", "1.0 kg/week (very aggressive)"],
  },
]

const calculate = (values: number[]) => {
  const tdee = values[0]
  const weeklyLossKg = values[1]

  // 1 kg of body fat = approx 7700 kcal
  const dailyDeficit = Math.round((weeklyLossKg * 7700) / 7)
  const dailyCalories = Math.round(tdee - dailyDeficit)
  const weeksToLose5kg = Math.round((5 * 7700) / (dailyDeficit * 7) * 10) / 10

  return [
    { result: dailyCalories, label: dailyCalories < 1200 ? "⚠️ Daily calorie target (too low — increase pace)" : "Daily calorie target", suffix: " kcal", decimals: 0 },
    { result: dailyDeficit, label: "Daily calorie deficit", suffix: " kcal/day", decimals: 0 },
    { result: weeklyLossKg, label: "Expected fat loss per week", suffix: " kg/week", decimals: 2 },
    { result: weeksToLose5kg, label: "Estimated weeks to lose 5 kg", suffix: " weeks", decimals: 1 },
  ]
}

export default function CalorieDeficitCalculator() {
  return <SimpleCalculator inputs={inputs} calculate={calculate} />
}
