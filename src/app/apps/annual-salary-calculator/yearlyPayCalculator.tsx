"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function YearlyPayCalculator() {
  const inputsMonthly = [
    { label: "Kuukausipalkka (€)", initialValue: 3200, step: 50 },
    { label: "Vuosittaiset bonukset (€)", initialValue: 0, step: 100 },
    { label: "Saatko lomarahaa?", values: [1, 0], labels: ["Kyllä", "Ei"] },
  ];

  const inputsHourly = [
    { label: "Tuntipalkka (€)", initialValue: 18, step: 0.5 },
    { label: "Työtunteja viikossa", initialValue: 37.5, step: 0.5 },
    { label: "Saatko lomarahaa?", values: [1, 0], labels: ["Kyllä", "Ei"] },
  ];

  const calculateYearlyFromMonthly = (values: number[]) => {
    const monthly = values[0];
    const bonuses = values[1];
    const holidayBonusMonths = values[2] === 1 ? 0.5 : 0;
    const yearly = monthly * (12 + holidayBonusMonths) + bonuses;
    const holidayBonus = monthly * holidayBonusMonths;

    return [
      { result: yearly, label: "Vuosipalkka", suffix: " €/v", decimals: 0 },
      {
        result: monthly,
        label: "Kuukausipalkka",
        suffix: " €/kk",
        decimals: 0,
      },
      { result: holidayBonus, label: "Lomaraha", suffix: " €", decimals: 0 },
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
      { result: yearly, label: "Vuosipalkka", suffix: " €/v", decimals: 0 },
      {
        result: monthly,
        label: "Kuukausipalkka",
        suffix: " €/kk",
        decimals: 2,
      },
      { result: hourly, label: "Tuntipalkka", suffix: " €/h", decimals: 2 },
    ];
  };

  return (
    <div>
      <SimpleCalculator
        inputs={inputsMonthly}
        header="Laske vuosipalkka kuukausipalkasta"
        calculate={calculateYearlyFromMonthly}
      />
      <div className="flex w-full flex-col">
        <div className="divider h-40">TAI</div>
      </div>
      <SimpleCalculator
        inputs={inputsHourly}
        header="Laske vuosipalkka tuntipalkasta"
        calculate={calculateYearlyFromHourly}
        resultButtonStyle="bg-pastelgreen"
      />
    </div>
  );
}
