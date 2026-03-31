"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

// Square metres per unit
const SQM_PER_UNIT = [
  1, // m²
  0.0001, // cm²
  1_000_000, // km²
  0.092903, // ft²
  0.836127, // yd²
  10_000, // ha (hehtaari)
  4046.86, // acre
];
const UNIT_NAMES = ["m²", "cm²", "km²", "ft²", "yd²", "ha (hectare)", "acre"];
const UNIT_SUFFIXES = [" m²", " cm²", " km²", " ft²", " yd²", " ha", " acre"];
const UNIT_DECIMALS = [4, 2, 10, 4, 4, 6, 6];

const inputs = [
  {
    label: "From unit",
    labels: UNIT_NAMES,
    values: [0, 1, 2, 3, 4, 5, 6],
  },
  { label: "Area", initialValue: 100, step: 1 },
];

export default function Pintaalamunnin() {
  const calculate = (values: number[]) => {
    const unitIdx = values[0];
    const val = values[1];
    const valInSqm = val * SQM_PER_UNIT[unitIdx];

    return SQM_PER_UNIT.map((factor, i) => ({
      result: valInSqm / factor,
      label: UNIT_NAMES[i],
      suffix: UNIT_SUFFIXES[i],
      decimals: UNIT_DECIMALS[i],
    })).filter((_, i) => i !== unitIdx);
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix=" " />;
}
