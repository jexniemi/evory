"use client";

import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  {
    label: "Beers (12 oz / 355 ml regular, ~5% ABV)",
    initialValue: 2,
    step: 1,
  },
  {
    label: "Glasses of wine (5 oz / 148 ml, ~12% ABV)",
    initialValue: 1,
    step: 1,
  },
  {
    label: "Shots of spirits (1.5 oz / 44 ml, ~40% ABV)",
    initialValue: 0,
    step: 1,
  },
  { label: "Cocktails (avg mixed drink)", initialValue: 0, step: 1 },
];

const calculate = (values: number[]) => {
  const beers = values[0];
  const wines = values[1];
  const shots = values[2];
  const cocktails = values[3];

  // Approximate calories per serving (alcohol + carbs in beverage)
  const beerCals = beers * 150;
  const wineCals = wines * 125;
  const shotCals = shots * 97;
  const cocktailCals = cocktails * 220;

  const total = beerCals + wineCals + shotCals + cocktailCals;
  // Pure alcohol calories: 7 kcal per gram
  const totalAlcoholGrams =
    beers * 14 + wines * 14 + shots * 14 + cocktails * 18; // standard drinks in grams
  const alcoholOnlyCalories = Math.round(totalAlcoholGrams * 7);

  return [
    {
      result: total,
      label: "Total estimated calories",
      suffix: " kcal",
      decimals: 0,
    },
    {
      result: alcoholOnlyCalories,
      label: "Calories from alcohol alone",
      suffix: " kcal",
      decimals: 0,
    },
    {
      result: Math.round((total / 2000) * 100 * 10) / 10,
      label: "% of a 2,000 kcal daily budget",
      suffix: " %",
      decimals: 1,
    },
    {
      result: Math.round((total / 7700) * 1000) / 1000,
      label: "Fat equivalent (kg) if stored",
      suffix: " kg fat",
      decimals: 3,
    },
  ];
};

export default function AlcoholCalorieCalculator() {
  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
