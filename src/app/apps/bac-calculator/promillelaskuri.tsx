"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

// Finnish standard drink = ~12g pure alcohol
const GRAMS_PER_DRINK = 12;
// Elimination rate: ~0.15‰/h (average)
const ELIMINATION = 0.15;
// Finnish driving limit
const DRIVING_LIMIT = 0.5;

const inputs = [
  {
    label: "Sukupuoli",
    labels: ["Mies", "Nainen"],
    // Widmark r-factor: men 0.68, women 0.55
    values: [0.68, 0.55],
  },
  { label: "Paino (kg)", initialValue: 80, step: 1 },
  {
    label: "Alkoholiannoksia (à ~12g alkoholia)",
    initialValue: 3,
    step: 0.5,
  },
  { label: "Juomisesta kulunut aika (h)", initialValue: 1, step: 0.5 },
];

const calculate = (values: number[]) => {
  const r = values[0]; // Widmark r-factor
  const weight = values[1];
  const drinks = values[2];
  const hours = values[3];

  const grams = drinks * GRAMS_PER_DRINK;
  // Widmark: BAC (‰) = grams / (weight × r) — β × hours
  const peakBAC = weight > 0 ? grams / (weight * r) : 0;
  const currentBAC = Math.max(0, peakBAC - ELIMINATION * hours);

  const hoursToSober = peakBAC > 0 ? peakBAC / ELIMINATION : 0;
  const hoursToLegal = Math.max(0, (peakBAC - DRIVING_LIMIT) / ELIMINATION);

  return [
    {
      result: currentBAC,
      label: "Promillearvio nyt",
      suffix: " ‰",
      decimals: 2,
    },
    {
      result: Math.round(hoursToSober * 10) / 10,
      label: "Arvioitu aika täysin selväksi",
      suffix: " h",
      decimals: 1,
    },
    {
      result: Math.round(hoursToLegal * 10) / 10,
      label: `Aika alle ${DRIVING_LIMIT}‰ (ajokunto)`,
      suffix: " h",
      decimals: 1,
    },
  ];
};

export default function Promillelaskuri() {
  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix=" " />;
}
