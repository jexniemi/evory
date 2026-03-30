"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Alkupääoma (€)", initialValue: 10000 },
  { label: "Vuotuinen tuotto (%)", initialValue: 7, step: 0.1 },
  { label: "Sijoitusaika (vuotta)", initialValue: 10 },
];

export default function CompoundInterestCalculator() {
  const calculate = (values: number[]) => {
    const principal = values[0];
    const rate = values[1] / 100;
    const years = values[2];

    const endValue = principal * Math.pow(1 + rate, years);
    const interest = endValue - principal;
    const growthPercent = principal > 0 ? (interest / principal) * 100 : 0;
    // Tuplausaika 72-säännöllä
    const doublingYears = rate > 0 ? 72 / (rate * 100) : 0;

    return [
      { result: endValue, label: "Loppusaldo", suffix: " €", decimals: 2 },
      { result: interest, label: "Korkotuotto", suffix: " €", decimals: 2 },
      {
        result: growthPercent,
        label: "Kokonaiskasvu",
        suffix: " %",
        decimals: 1,
      },
      {
        result: doublingYears,
        label: "Tuplausaika (72-sääntö)",
        suffix: " v",
        decimals: 1,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
