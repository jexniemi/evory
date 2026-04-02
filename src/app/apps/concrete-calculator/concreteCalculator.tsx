"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Length (feet)", initialValue: 10, step: 0.5 },
  { label: "Width (feet)", initialValue: 10, step: 0.5 },
  { label: "Thickness (inches)", initialValue: 4, step: 0.5 },
];

const calculate = (values: number[]) => {
  const lengthFt = values[0];
  const widthFt = values[1];
  const thicknessIn = values[2];
  const thicknessFt = thicknessIn / 12;
  const cubicFeet = lengthFt * widthFt * thicknessFt;
  const cubicYards = cubicFeet / 27;
  const bags60lb = cubicFeet / 0.45; // one 60-lb bag covers 0.45 cu ft
  const bags80lb = cubicFeet / 0.60; // one 80-lb bag covers 0.60 cu ft
  return [
    { result: cubicYards, label: "Volume (cubic yards)", suffix: " yd³", decimals: 2 },
    { result: cubicFeet, label: "Volume (cubic feet)", suffix: " ft³", decimals: 2 },
    { result: Math.ceil(bags60lb), label: "60-lb Bags Needed", suffix: " bags", decimals: 0 },
    { result: Math.ceil(bags80lb), label: "80-lb Bags Needed", suffix: " bags", decimals: 0 },
  ];
};

export default function ConcreteCalculator() {
  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix=" bags" />;
}
