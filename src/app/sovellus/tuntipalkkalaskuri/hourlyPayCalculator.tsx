"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function HourlyPayCalculator() {
  const inputs = [
    { label: "Kuukausipalkka (€)", initialValue: 2800 },
    { label: "Työtunteja kuukaudessa", initialValue: 166 },
  ];

  const calculate = (values: number[]) => {
    let result = 0;
    try {
      result = values[0] / values[1];
    } catch (error) {
      console.error(error);
    }
    return [{ result, label: "Laskettu tuntipalkka:" }];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
