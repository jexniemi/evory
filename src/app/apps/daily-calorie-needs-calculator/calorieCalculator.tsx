"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  {
    label: "Sukupuoli",
    labels: ["Mies", "Nainen"],
    values: [1, 2],
  },
  { label: "Ikä (vuotta)", initialValue: 30 },
  { label: "Paino (kg)", initialValue: 70 },
  { label: "Pituus (cm)", initialValue: 170 },
  {
    label: "Aktiivisuustaso",
    labels: [
      "Istumatyö, ei liikuntaa",
      "Kevyt liikunta 1–3 pv/vk",
      "Kohtalainen liikunta 3–5 pv/vk",
      "Rankka liikunta 6–7 pv/vk",
      "Erittäin rankka / fyysinen työ",
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
        label: "Päivittäinen kalorintarve",
        suffix: " kcal",
        decimals: 0,
      },
      {
        result: dailyNeed - 500,
        label: "Painon pudotus (−500 kcal)",
        suffix: " kcal",
        decimals: 0,
      },
      {
        result: dailyNeed + 500,
        label: "Lihasmassan kasvatus (+500 kcal)",
        suffix: " kcal",
        decimals: 0,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
