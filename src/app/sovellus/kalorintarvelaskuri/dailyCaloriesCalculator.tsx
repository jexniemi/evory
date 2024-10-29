"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  {
    label: "Sukupuoli",
    labels: ["Mies", "Nainen"],
    values: [1, 2],
  },
  {
    label: "Ikä",
    initialValue: 25,
  },
  {
    label: "Paino (kg)",
    initialValue: 75,
  },
  {
    label: "Pituus (cm)",
    initialValue: 175,
  },
  {
    label: "Aktiivisuustaso",
    values: [1.2, 1.375, 1.55, 1.725, 1.9],
    labels: [
      "Istuva (vähän tai ei lainkaan liikuntaa)",
      "Kevyesti aktiivinen (liikunta 1-3 päivänä viikossa)",
      "Kohtalaisesti aktiivinen (liikunta 3-5 päivänä viikossa)",
      "Erittäin aktiivinen (liikunta 6-7 päivänä viikossa)",
      "Teräsmies (fyysinen työ & hyvin raskas liikunta)",
    ],
  },
];

export default function DailyCaloriesCalculator() {
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
    return [{ result: result, label: "Päivittäinen kalorintarpeesi on:" }];
  };

  return (
    <SimpleCalculator inputs={inputs} calculate={calculate} suffix=" kcal" />
  );
}
