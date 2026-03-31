"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function YearlyPayCalculator() {
  const inputsMonthly = [
    { label: "Monthly salary ($)", initialValue: 3200, step: 50 },
    { label: "Annual bonuses ($)", initialValue: 0, step: 100 },
    { label: "Holiday bonus?", values: [1, 0], labels: ["Yes", "No"] },
  ];

  const inputsHourly = [
    { label: "Hourly wage ($)", initialValue: 18, step: 0.5 },
    { label: "Hours worked per week", initialValue: 40, step: 0.5 },
    { label: "Holiday bonus?", values: [1, 0], labels: ["Yes", "No"] },
  ];

  const calculateYearlyFromMonthly = (values: number[]) => {
    const monthly = values[0];
    const bonuses = values[1];
    const holidayBonusMonths = values[2] === 1 ? 0.5 : 0;
    const yearly = monthly * (12 + holidayBonusMonths) + bonuses;
    const holidayBonus = monthly * holidayBonusMonths;

    return [
      { result: yearly, label: "Annual salary", suffix: " $/yr", decimals: 0 },
      {
        result: monthly,
        label: "Monthly salary",
        suffix: " $/mo",
        decimals: 0,
      },
      {
        result: holidayBonus,
        label: "Holiday bonus",
        suffix: " $",
        decimals: 0,
      },
    ];
  };

  const calculateYearlyFromHourly = (values: number[]) => {
    const hourly = values[0];
    const weeklyHours = values[1];
    const monthlyHours = (weeklyHours * 52) / 12;
    const monthly = hourly * monthlyHours;
    const holidayBonusMonths = values[2] === 1 ? 0.5 : 0;
    const yearly = monthly * (12 + holidayBonusMonths);

    return [
      { result: yearly, label: "Annual salary", suffix: " $/yr", decimals: 0 },
      {
        result: monthly,
        label: "Monthly salary",
        suffix: " $/mo",
        decimals: 2,
      },
      { result: hourly, label: "Hourly wage", suffix: " $/h", decimals: 2 },
    ];
  };

  return (
    <div>
      <SimpleCalculator
        inputs={inputsMonthly}
        header="Calculate annual salary from monthly salary"
        calculate={calculateYearlyFromMonthly}
      />
      <div className="flex w-full flex-col">
        <div className="divider h-40">OR</div>
      </div>
      <SimpleCalculator
        inputs={inputsHourly}
        header="Calculate annual salary from hourly wage"
        calculate={calculateYearlyFromHourly}
        resultButtonStyle="bg-pastelgreen"
      />
    </div>
  );
}
