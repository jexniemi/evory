"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Pool Length (feet)", initialValue: 30, step: 1 },
  { label: "Pool Width (feet)", initialValue: 15, step: 1 },
  { label: "Average Depth (feet)", initialValue: 5, step: 0.5 },
];

const calculate = (values: number[]) => {
  const length = values[0];
  const width = values[1];
  const depth = values[2];
  const cubicFeet = length * width * depth;
  const gallons = cubicFeet * 7.48052;
  const liters = gallons * 3.78541;
  return [
    {
      result: gallons,
      label: "Volume (US Gallons)",
      suffix: " gal",
      decimals: 0,
    },
    { result: liters, label: "Volume (Liters)", suffix: " L", decimals: 0 },
    {
      result: cubicFeet,
      label: "Volume (Cubic Feet)",
      suffix: " ft³",
      decimals: 1,
    },
  ];
};

export default function SwimmingPoolVolumeCalculator() {
  return (
    <SimpleCalculator inputs={inputs} calculate={calculate} suffix=" gal" />
  );
}
