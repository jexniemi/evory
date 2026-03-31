"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const DOOR_AREA = 21; // sq ft per door (3ft × 7ft)
const WINDOW_AREA = 15; // sq ft per window (3ft × 5ft)
const COVERAGE_PER_GALLON = 350; // sq ft per gallon

const inputs = [
  { label: "Room Length (ft)", initialValue: 15 },
  { label: "Room Width (ft)", initialValue: 12 },
  { label: "Room Height (ft)", initialValue: 8 },
  { label: "Number of Doors", initialValue: 2 },
  { label: "Number of Windows", initialValue: 3 },
];

export default function PaintCalculator() {
  const calculate = (values: number[]) => {
    const [length, width, height, doors, windows] = values;

    const wallArea = 2 * (length + width) * height;
    const doorArea = doors * DOOR_AREA;
    const windowArea = windows * WINDOW_AREA;
    const paintableArea = Math.max(wallArea - doorArea - windowArea, 0);
    const gallonsOnCoat = paintableArea / COVERAGE_PER_GALLON;
    const gallonsNeeded = Math.ceil(gallonsOnCoat * 2 * 10) / 10; // 2 coats, round up to nearest 0.1

    return [
      { result: wallArea, label: "Total Wall Area:", suffix: " sq ft", decimals: 0 },
      { result: paintableArea, label: "Paintable Area:", suffix: " sq ft", decimals: 0 },
      { result: gallonsNeeded, label: "Gallons Needed (2 coats):", suffix: " gal", decimals: 1 },
      { result: 2, label: "Recommended Coats:", suffix: "", decimals: 0 },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
