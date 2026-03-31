"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function HourlyPayCalculator() {
  const inputs = [
    { label: "Monthly salary ($)", initialValue: 3200, step: 50 },
    { label: "Hours worked per week", initialValue: 40, step: 0.5 },
  ];

  const calculate = (values: number[]) => {
    const monthlySalary = values[0];
    const weeklyHours = values[1];
    const monthlyHours = (weeklyHours * 52) / 12;
    const hourly = monthlySalary / monthlyHours;
    const daily = hourly * (weeklyHours / 5);
    const annual = monthlySalary * 12;

    return [
      { result: hourly, label: "Hourly wage", suffix: " $/h", decimals: 2 },
      { result: daily, label: "Daily wage", suffix: " $/day", decimals: 2 },
      {
        result: monthlySalary,
        label: "Monthly salary",
        suffix: " $/mo",
        decimals: 0,
      },
      { result: annual, label: "Annual salary", suffix: " $/yr", decimals: 0 },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
