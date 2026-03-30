"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function GasCostCalculator() {
  const inputs = [
    { label: "Ajettu matka (km)", initialValue: 50 },
    { label: "Polttoaineen keskikulutus (litraa / 100km)", initialValue: 5 },
    { label: "Polttoaineen litrahinta (€)", initialValue: 1.979, step: 0.001 },
  ];

  const calculate = (values: number[]) => {
    let result = 0;
    try {
      result = (values[0] / 100) * values[1] * values[2];
    } catch (error) {
      console.error(error);
    }
    return [{ result, label: "Matkan polttoainekustannukset:" }];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix="€" />;
}
