"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Height (inches)", initialValue: 68 },
  {
    label: "Gender",
    values: [1, 2],
    labels: ["Male", "Female"],
  },
];

export default function IdealWeightCalculator() {
  const calculate = (values: number[]) => {
    const height = values[0];
    const gender = values[1];
    const diff = height - 60;
    const heightM = height * 0.0254;

    let devine: number;
    let robinson: number;
    let miller: number;

    if (gender === 1) {
      devine = 110 + 5.06 * diff;
      robinson = 115 + 4.09 * diff;
      miller = 123.7 + 3.09 * diff;
    } else {
      devine = 100 + 5.06 * diff;
      robinson = 108 + 3.94 * diff;
      miller = 115.7 + 2.54 * diff;
    }

    const bmiLow = 18.5 * heightM * heightM * 2.20462;
    const bmiHigh = 24.9 * heightM * heightM * 2.20462;

    return [
      { result: devine, label: "Devine Formula:", suffix: " lbs", decimals: 1 },
      {
        result: robinson,
        label: "Robinson Formula:",
        suffix: " lbs",
        decimals: 1,
      },
      {
        result: miller,
        label: "Miller Formula:",
        suffix: " lbs",
        decimals: 1,
      },
      {
        result: bmiLow,
        label: "Healthy BMI Low:",
        suffix: " lbs",
        decimals: 1,
      },
      {
        result: bmiHigh,
        label: "Healthy BMI High:",
        suffix: " lbs",
        decimals: 1,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
