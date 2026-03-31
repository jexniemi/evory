"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Paino (kg)", initialValue: 75, step: 0.5 },
  {
    label: "Tavoite",
    labels: ["Ylläpidä painoa", "Laihdu", "Kasvata lihasmassaa"],
    values: [0, 1, 2],
  },
  {
    label: "Aktiivisuustaso",
    labels: [
      "Istumatyö, ei liikuntaa",
      "Kevyt liikunta 1–3 pv/vk",
      "Kohtalainen liikunta 3–5 pv/vk",
      "Rankka liikunta 6–7 pv/vk",
    ],
    values: [1.2, 1.375, 1.55, 1.725],
  },
];

export default function Makrolaskuri() {
  const calculate = (values: number[]) => {
    const weight = values[0];
    const goal = values[1]; // 0=maintain, 1=lose, 2=gain
    const activity = values[2];

    // Rough TDEE estimate (gender-neutral average BMR ~22kcal/kg lean mass)
    const bmr = weight * 22;
    let calories = bmr * activity;
    if (goal === 1) calories -= 500;
    if (goal === 2) calories += 300;

    // Protein targets
    const proteinPerKg = goal === 1 ? 2.2 : goal === 2 ? 2.0 : 1.6;
    const protein = weight * proteinPerKg;

    // Fat: ~28% of calories
    const fat = (calories * 0.28) / 9;

    // Carbs: remainder
    const carbs = (calories - protein * 4 - fat * 9) / 4;

    return [
      {
        result: Math.round(calories),
        label: "Päivittäiset kalorit",
        suffix: " kcal",
        decimals: 0,
      },
      {
        result: Math.round(protein),
        label: "Proteiini",
        suffix: " g/pv",
        decimals: 0,
      },
      {
        result: Math.round(carbs),
        label: "Hiilihydraatit",
        suffix: " g/pv",
        decimals: 0,
      },
      { result: Math.round(fat), label: "Rasva", suffix: " g/pv", decimals: 0 },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix=" " />;
}
