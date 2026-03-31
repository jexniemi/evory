"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function MonthlyPayCalculator() {
  const inputs = [
    { label: "Hourly wage ($)", initialValue: 18, step: 0.5 },
    { label: "Work hours per week", initialValue: 37.5, step: 0.5 },
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
        label: "Monthly salary",
        suffix: " $/mo",
        decimals: 2,
      },
      { result: daily, label: "Daily pay", suffix: " $/day", decimals: 2 },
      { result: hourly, label: "Hourly wage", suffix: " $/hr", decimals: 2 },
      { result: annual, label: "Annual salary", suffix: " $/yr", decimals: 0 },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
