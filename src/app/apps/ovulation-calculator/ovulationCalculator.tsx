"use client";

import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  {
    label: "Days since period started (day of cycle)",
    initialValue: 1,
    step: 1,
  },
  { label: "Average cycle length (days)", initialValue: 28, step: 1 },
];

const calculate = (values: number[]) => {
  const daysSincePeriod = values[0];
  const cycleLength = values[1];

  // Ovulation typically occurs 14 days before next period
  const ovulationDay = cycleLength - 14;
  // Fertile window: 5 days before ovulation to 1 day after
  const fertileStart = ovulationDay - 5;
  const fertileEnd = ovulationDay + 1;

  const daysUntilOvulation = ovulationDay - daysSincePeriod + 1;
  const daysUntilNextPeriod = cycleLength - daysSincePeriod + 1;
  const inFertileWindow =
    daysSincePeriod >= fertileStart && daysSincePeriod <= fertileEnd ? 1 : 0;

  return [
    {
      result: ovulationDay,
      label: "Ovulation expected on cycle day",
      suffix: "",
      decimals: 0,
    },
    {
      result: Math.max(0, daysUntilOvulation),
      label: "Days until estimated ovulation",
      suffix: " days",
      decimals: 0,
    },
    {
      result: fertileStart,
      label: "Fertile window starts on cycle day",
      suffix: "",
      decimals: 0,
    },
    {
      result: daysUntilNextPeriod,
      label: "Days until next period",
      suffix: " days",
      decimals: 0,
    },
    {
      result: inFertileWindow,
      label: inFertileWindow
        ? "Currently in fertile window ✅"
        : "Currently in fertile window ❌",
      suffix: "",
      decimals: 0,
    },
  ];
};

export default function OvulationCalculator() {
  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
