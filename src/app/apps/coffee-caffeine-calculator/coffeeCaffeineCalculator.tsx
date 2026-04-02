"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Espresso Shots", initialValue: 2, step: 1 },
  { label: "Cups of Drip Coffee (8 oz)", initialValue: 1, step: 1 },
  { label: "Cans of Energy Drink (12 oz)", initialValue: 0, step: 1 },
  { label: "Cups of Black Tea (8 oz)", initialValue: 1, step: 1 },
];

const calculate = (values: number[]) => {
  const espresso = values[0] * 63;    // ~63 mg per shot
  const dripCoffee = values[1] * 96;  // ~96 mg per 8 oz cup
  const energyDrink = values[2] * 80; // ~80 mg per 12 oz can (varies widely)
  const blackTea = values[3] * 47;    // ~47 mg per 8 oz cup
  const total = espresso + dripCoffee + energyDrink + blackTea;
  const safeLimit = 400; // FDA recommended max for healthy adults
  const pctOfLimit = (total / safeLimit) * 100;
  return [
    { result: total, label: "Total Caffeine Intake", suffix: " mg", decimals: 0 },
    { result: pctOfLimit, label: "% of Daily Safe Limit (400 mg)", suffix: " %", decimals: 1 },
    { result: Math.max(0, safeLimit - total), label: "Remaining Safe Margin", suffix: " mg", decimals: 0 },
  ];
};

export default function CoffeeCaffeineCalculator() {
  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix=" mg" />;
}
