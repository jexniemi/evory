"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Room Length (feet)", initialValue: 14, step: 0.5 },
  { label: "Room Width (feet)", initialValue: 12, step: 0.5 },
  { label: "Ceiling Height (feet)", initialValue: 9, step: 0.5 },
  { label: "Number of Doors", initialValue: 1, step: 1 },
  { label: "Number of Windows", initialValue: 2, step: 1 },
];

const calculate = (values: number[]) => {
  const length = values[0];
  const width = values[1];
  const height = values[2];
  const doors = values[3];
  const windows = values[4];

  const perimeterFt = 2 * (length + width);
  const totalWallArea = perimeterFt * height;
  const doorArea = doors * 21; // standard door: 3x7 ft
  const windowArea = windows * 15; // standard window: 3x5 ft
  const netArea = totalWallArea - doorArea - windowArea;
  const netAreaWithWaste = netArea * 1.1; // 10% waste
  const rollsNeeded = netAreaWithWaste / 57; // standard roll covers 57 sq ft

  return [
    { result: netArea, label: "Net Wall Area", suffix: " ft²", decimals: 0 },
    {
      result: netAreaWithWaste,
      label: "Area with 10% Waste",
      suffix: " ft²",
      decimals: 0,
    },
    {
      result: Math.ceil(rollsNeeded),
      label: "Rolls of Wallpaper Needed",
      suffix: " rolls",
      decimals: 0,
    },
  ];
};

export default function WallpaperCalculator() {
  return (
    <SimpleCalculator inputs={inputs} calculate={calculate} suffix=" rolls" />
  );
}
