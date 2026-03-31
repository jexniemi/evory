"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const SQ_FT_TO_SQ_M = 0.092903;

const inputs = [
  { label: "Length (ft)", initialValue: 20 },
  { label: "Width (ft)", initialValue: 15 },
  { label: "Price per sq ft ($)", initialValue: 150 },
];

export default function SquareFootageCalculator() {
  const calculate = (values: number[]) => {
    const [length, width, pricePerSqFt] = values;

    const totalAreaSqFt = length * width;
    const totalAreaSqM = totalAreaSqFt * SQ_FT_TO_SQ_M;
    const estimatedValue = totalAreaSqFt * pricePerSqFt;

    return [
      { result: totalAreaSqFt, label: "Total Area:", suffix: " sq ft", decimals: 1 },
      { result: totalAreaSqM, label: "Total Area:", suffix: " sq m", decimals: 2 },
      { result: estimatedValue, label: "Estimated Value:", suffix: "$", decimals: 0 },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
