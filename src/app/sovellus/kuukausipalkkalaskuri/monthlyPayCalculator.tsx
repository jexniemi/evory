"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function MonthlyPayCalculator() {
  const inputs = [
    { label: "Tuntipalkka (€)", initialValue: 18, step: 0.5 },
    { label: "Työtunteja viikossa", initialValue: 37.5, step: 0.5 },
  ];

  const calculate = (values: number[]) => {
    const hourly = values[0];
    const weeklyHours = values[1];
    const monthlyHours = (weeklyHours * 52) / 12;
    const monthly = hourly * monthlyHours;
    const daily = hourly * (weeklyHours / 5);
    const annual = monthly * 12;

    return [
      {
        result: monthly,
        label: "Kuukausipalkka",
        suffix: " €/kk",
        decimals: 2,
      },
      { result: daily, label: "Päiväpalkka", suffix: " €/pv", decimals: 2 },
      { result: hourly, label: "Tuntipalkka", suffix: " €/h", decimals: 2 },
      { result: annual, label: "Vuosipalkka", suffix: " €/v", decimals: 0 },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
