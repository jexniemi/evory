"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const CM_PER_UNIT = [1, 100, 30.48, 2.54, 100000, 160934];
const UNIT_NAMES = [
  "cm",
  "m",
  "jalkaa (ft)",
  "tuumaa (in)",
  "km",
  "mailia (mi)",
];
const UNIT_SUFFIXES = [" cm", " m", " ft", " in", " km", " mi"];
const UNIT_DECIMALS = [2, 4, 4, 3, 6, 6];

const inputs = [
  {
    label: "Lähtöyksikkö",
    labels: UNIT_NAMES,
    values: [0, 1, 2, 3, 4, 5],
  },
  { label: "Arvo", initialValue: 170, step: 0.1 },
];

export default function Pituusmuunnin() {
  const calculate = (values: number[]) => {
    const unitIdx = values[0];
    const val = values[1];
    const valInCm = val * CM_PER_UNIT[unitIdx];

    return CM_PER_UNIT.map((factor, i) => ({
      result: valInCm / factor,
      label: UNIT_NAMES[i],
      suffix: UNIT_SUFFIXES[i],
      decimals: UNIT_DECIMALS[i],
    })).filter((_, i) => i !== unitIdx);
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix=" " />;
}
