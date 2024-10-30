"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Bill Amount ($)", initialValue: 100 },
  { label: "Tip Percentage (%)", initialValue: 15 },
  { label: "Number of People Sharing", initialValue: 1 },
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
      { result: totalTip || 0, label: "Total Tip Amount:" },
      {
        result: totalBill || 0,
        label: "Total Bill (with Tip):",
      },
      {
        result: perPerson || 0,
        label: "Each Person's Share:",
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} prefix="$" />;
}
