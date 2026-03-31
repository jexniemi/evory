"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Bill amount ($)", initialValue: 100 },
  { label: "Tip percentage (%)", initialValue: 15 },
  { label: "Number of people", initialValue: 1 },
];

export default function TipCalculator() {
  const calculate = (values: number[]) => {
    let totalTip = 0;
    let totalBill = 0;
    let perPerson = 0;
    try {
      const bill = values[0];
      const tipPercentage = values[1];
      const numberOfPeople = values[2];

      totalTip = (bill * tipPercentage) / 100;
      totalBill = bill + totalTip;
      perPerson = totalBill / numberOfPeople;
    } catch (error) {
      console.error(error);
    }
    return [
      { result: totalTip || 0, label: "Tip amount:", suffix: "$" },
      {
        result: totalBill || 0,
        label: "Total bill (with tip):",
        suffix: "$",
      },
      {
        result: perPerson || 0,
        label: "Each person's share:",
        suffix: "$",
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
