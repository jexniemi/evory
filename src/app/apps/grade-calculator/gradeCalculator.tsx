"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Current Grade (%)", initialValue: 85 },
  { label: "Final Exam Weight (%)", initialValue: 30 },
  { label: "Desired Grade (%)", initialValue: 90 },
];

export default function GradeCalculator() {
  const calculate = (values: number[]) => {
    const current = values[0];
    const finalWeight = values[1];
    const desired = values[2];

    const finalWeightDecimal = finalWeight / 100;
    const courseWorkWeight = 1 - finalWeightDecimal;

    const needed =
      (desired - current * courseWorkWeight) / finalWeightDecimal;

    const currentWeighted = current * courseWorkWeight;

    const maxPossible = currentWeighted + 100 * finalWeightDecimal;

    return [
      {
        result: needed,
        label: "Score Needed on Final:",
        suffix: "%",
        decimals: 1,
      },
      {
        result: currentWeighted,
        label: "Current Weighted Grade:",
        suffix: "%",
        decimals: 1,
      },
      {
        result: finalWeightDecimal * 100,
        label: "Final Exam Impact:",
        suffix: "% of total",
        decimals: 0,
      },
      {
        result: maxPossible,
        label: "Max Possible Grade:",
        suffix: "%",
        decimals: 1,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
