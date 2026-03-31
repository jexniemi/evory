"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function HourlyPayCalculator() {
  const inputs = [
    { label: "Kuukausipalkka (€)", initialValue: 3200, step: 50 },
    { label: "Työtunteja viikossa", initialValue: 37.5, step: 0.5 },
  ];

  const calculate = (values: number[]) => {
    const monthlySalary = values[0];
    const weeklyHours = values[1];
    const monthlyHours = (weeklyHours * 52) / 12;
    const hourly = monthlySalary / monthlyHours;
    const daily = hourly * (weeklyHours / 5);
    const annual = monthlySalary * 12;

    return [
      { result: hourly, label: "Tuntipalkka", suffix: " €/h", decimals: 2 },
      { result: daily, label: "Päiväpalkka", suffix: " €/pv", decimals: 2 },
      {
        result: monthlySalary,
        label: "Kuukausipalkka",
        suffix: " €/kk",
        decimals: 0,
      },
      { result: annual, label: "Vuosipalkka", suffix: " €/v", decimals: 0 },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
