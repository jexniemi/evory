"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Paino (kg)", initialValue: 70, step: 1 },
  {
    label: "Aktiivisuustaso",
    values: [1, 1.2, 1.5, 1.8],
    labels: [
      "Kevyt (istumatyö)",
      "Kohtalainen (kevyt liikunta)",
      "Aktiivinen (säännöllinen urheilu)",
      "Erittäin aktiivinen (raskas harjoittelu)",
    ],
  },
];

export default function WaterIntakeCalculator() {
  const calculate = (values: number[]) => {
    const weight = values[0];
    const activityMultiplier = values[1];

    // Base: 33ml per kg body weight, adjusted by activity level
    const baseMl = weight * 33;
    const adjustedMl = baseMl * activityMultiplier;
    const liters = adjustedMl / 1000;
    const glasses = Math.ceil(adjustedMl / 250); // 250ml per glass

    return [
      {
        result: liters,
        label: "Päivittäinen vedestarve",
        suffix: " litraa",
        decimals: 1,
      },
      {
        result: adjustedMl,
        label: "Millilitroina",
        suffix: " ml",
        decimals: 0,
      },
      {
        result: glasses,
        label: "Lasillista (2,5 dl)",
        suffix: " kpl",
        decimals: 0,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
