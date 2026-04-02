"use client";

import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Total carbohydrates (g)", initialValue: 25, step: 0.5 },
  { label: "Dietary fiber (g)", initialValue: 5, step: 0.5 },
  { label: "Sugar alcohols (g)", initialValue: 0, step: 0.5 },
  {
    label: "Sugar alcohol type",
    values: [1.0, 0.5, 0.2, 0.0],
    labels: [
      "None / unknown (count 100%)",
      "Maltitol / sorbitol (count 50%)",
      "Xylitol (count 20%)",
      "Erythritol (count 0% — fully excluded)",
    ],
  },
];

const calculate = (values: number[]) => {
  const totalCarbs = values[0];
  const fiber = values[1];
  const sugarAlcohols = values[2];
  const saFactor = values[3];

  const countableSugarAlcohols = sugarAlcohols * saFactor;
  const netCarbs = Math.max(0, totalCarbs - fiber - countableSugarAlcohols);

  return [
    {
      result: Math.round(netCarbs * 10) / 10,
      label: "Net Carbs",
      suffix: " g",
      decimals: 1,
    },
    {
      result: Math.round(fiber * 10) / 10,
      label: "Dietary fiber (subtracted)",
      suffix: " g",
      decimals: 1,
    },
    {
      result: Math.round(countableSugarAlcohols * 10) / 10,
      label: "Sugar alcohols counted",
      suffix: " g",
      decimals: 1,
    },
    {
      result: Math.round(netCarbs * 4 * 10) / 10,
      label: "Calories from net carbs",
      suffix: " kcal",
      decimals: 0,
    },
  ];
};

export default function NetCarbCalculator() {
  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix=" g" />;
}
