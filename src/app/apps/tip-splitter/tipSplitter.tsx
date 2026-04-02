"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Bill Amount ($)", initialValue: 80, step: 1 },
  {
    label: "Tip Percentage (%)",
    values: [10, 15, 18, 20, 25],
    labels: ["10%", "15%", "18%", "20%", "25%"],
  },
  { label: "Number of People", initialValue: 4, step: 1 },
];

const calculate = (values: number[]) => {
  const bill = values[0];
  const tipPct = values[1];
  const people = Math.max(1, values[2]);
  const tip = (bill * tipPct) / 100;
  const total = bill + tip;
  const perPerson = total / people;
  const tipPerPerson = tip / people;
  return [
    { result: tip, label: "Total Tip", suffix: " $", decimals: 2 },
    { result: total, label: "Total Bill", suffix: " $", decimals: 2 },
    { result: perPerson, label: "Per Person", suffix: " $", decimals: 2 },
    {
      result: tipPerPerson,
      label: "Tip Per Person",
      suffix: " $",
      decimals: 2,
    },
  ];
};

export default function TipSplitter() {
  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix="$" />;
}
