"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Päivittäinen liikuntamäärä (minuuttia)", initialValue: 30 },
  {
    label: "Harjoituksen intensiteetti",
    values: [1, 3, 5],
    labels: ["Kevyt", "Kohtalainen", "Rankka"],
  },
];

export default function SleepCalculator() {
  const calculate = (values: number[]) => {
    let recommendedSleep = 0;
    let sleepMessage = "";

    try {
      const exercise = values[0];
      const intensity = values[1];

      let baseNeeds = 8; // Base 8 hours
      let exerciseBonus = (exercise / 30) * 0.5; // Add up to 0.5 hours per 30 min

      recommendedSleep = baseNeeds + (exerciseBonus * intensity) / 5;
      recommendedSleep = Math.min(10, Math.max(7, recommendedSleep)); // 7-10 hours

      sleepMessage = "Riittävä unen määrä auttaa palautumisessa.";
    } catch (error) {
      console.error(error);
    }

    return [
      {
        result: recommendedSleep,
        label: "Suositeltu unen määrä:",
        suffix: "h",
        decimals: 1,
      },
      { result: 0, label: sleepMessage, suffix: "" },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
