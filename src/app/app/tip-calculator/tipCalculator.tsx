"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Laskun summa ($)", initialValue: 100 },
  { label: "Tippi prosentti (%)", initialValue: 15 },
  { label: "Henkilöitä jakamassa", initialValue: 1 },
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
      { result: totalTip || 0, label: "Maksettava tipin määrä:", suffix: "$" },
      {
        result: totalBill || 0,
        label: "Laskun summa (tippi mukana):",
        suffix: "$",
      },
      {
        result: perPerson || 0,
        label: "Jokaisen osuus laskusta:",
        suffix: "$",
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
