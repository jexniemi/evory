"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function YearlyPayCalculator() {
  const inputsHourly = [
    { label: "Tuntipalkka (€)", initialValue: 12 },
    { label: "Työtunteja kuukaudessa", initialValue: 166 },
    { label: "Saatko lomarahaa?", values: [1, 0], labels: ["Kyllä", "Ei"] },
  ];

  const inputsMonthly = [
    { label: "Kuukausipalkka (€)", initialValue: 2800 },
    { label: "Vuosittaiset bonukset (€)", initialValue: 0 },
    { label: "Saatko lomarahaa?", values: [1, 0], labels: ["Kyllä", "Ei"] },
  ];

  const calculateYearlyFromMonthly = (values: number[]) => {
    let result = 0;
    try {
      result = values[0] * (12 + (values[2] === 1 ? 0.5 : 0)) + values[1];
    } catch (error) {
      console.error(error);
    }
    return [
      { result, label: "Kuukausipalkasta laskettu vuosipalkka:", decimals: 0 },
    ];
  };

  const calculateYearlyFromHourly = (values: number[]) => {
    let result = 0;
    try {
      result = values[0] * values[1] * (12 + (values[2] === 1 ? 0.5 : 0));
    } catch (error) {
      console.error(error);
    }
    return [
      { result, label: "Tuntipalkasta laskettu vuosipalkka:", decimals: 0 },
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
