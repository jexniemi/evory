"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const MPS_PER_UNIT = [
  1 / 3.6, // km/h → m/s
  1, // m/s
  1609.34 / 3600, // mph → m/s
  1852 / 3600, // knots → m/s
  0.3048, // ft/s → m/s
];
const UNIT_NAMES = ["km/h", "m/s", "mph", "knots", "ft/s"];
const UNIT_SUFFIXES = [" km/h", " m/s", " mph", " kn", " ft/s"];
const UNIT_DECIMALS = [2, 3, 3, 3, 3];

const inputs = [
  {
    label: "Source unit",
    labels: UNIT_NAMES,
    values: [0, 1, 2, 3, 4],
  },
  { label: "Speed", initialValue: 100, step: 1 },
];

export default function Nopeusmuunnin() {
  const calculate = (values: number[]) => {
    const unitIdx = values[0];
    const val = values[1];
    const valInMps = val * MPS_PER_UNIT[unitIdx];

    return MPS_PER_UNIT.map((factor, i) => ({
      result: valInMps / factor,
      label: UNIT_NAMES[i],
      suffix: UNIT_SUFFIXES[i],
      decimals: UNIT_DECIMALS[i],
    })).filter((_, i) => i !== unitIdx);
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix=" " />;
}
