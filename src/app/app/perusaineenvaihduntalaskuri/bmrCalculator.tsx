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
];

export default function BMRCalculator() {
  const calculateBMR = (values: number[]) => {
    let result = 0;
    try {
      const age = values[1];
      const weight = values[2];
      const height = values[3];

      if (values[0] === 1) {
        result = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
      } else {
        result = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
      }
    } catch {}
    return [{ result, label: "Perusaineenvaihdunta (BMR)" }];
  };

  return (
    <SimpleCalculator inputs={inputs} calculate={calculateBMR} suffix=" kcal" />
  );
}
