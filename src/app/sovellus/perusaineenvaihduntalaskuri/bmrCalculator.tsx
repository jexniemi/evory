"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  {
    label: "Sukupuoli",
    labels: ["Mies", "Nainen"],
    values: [1, 2],
  },
  { label: "Ikä (vuotta)", initialValue: 30 },
  { label: "Paino (kg)", initialValue: 75 },
  { label: "Pituus (cm)", initialValue: 175 },
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
        label: "Perusaineenvaihdunta (BMR)",
        suffix: " kcal",
        decimals: 0,
      },
      {
        result: bmr * 1.2,
        label: "Istumatyö, ei liikuntaa",
        suffix: " kcal/pv",
        decimals: 0,
      },
      {
        result: bmr * 1.55,
        label: "Kohtalainen liikunta",
        suffix: " kcal/pv",
        decimals: 0,
      },
      {
        result: bmr * 1.725,
        label: "Rankka liikunta",
        suffix: " kcal/pv",
        decimals: 0,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculateBMR} />;
}
