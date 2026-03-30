"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Asunnon hinta (€)", initialValue: 250000, step: 1000 },
  { label: "Pinta-ala (m²)", initialValue: 65, step: 0.5 },
  { label: "Yhtiölainaosuus (€)", initialValue: 0, step: 1000 },
];

export default function PricePerSqmCalculator() {
  const calculate = (values: number[]) => {
    const price = values[0];
    const area = values[1];
    const housingCompanyLoan = values[2];

    if (area <= 0) {
      return [{ result: 0, label: "Neliöhinta", suffix: " €/m²", decimals: 2 }];
    }

    const totalPrice = price + housingCompanyLoan;
    const pricePerSqm = totalPrice / area;
    const velattomanHinta = totalPrice;

    return [
      {
        result: pricePerSqm,
        label: "Neliöhinta",
        suffix: " €/m²",
        decimals: 2,
      },
      {
        result: velattomanHinta,
        label: "Velaton hinta yhteensä",
        suffix: " €",
        decimals: 0,
      },
      { result: price, label: "Myyntihinta", suffix: " €", decimals: 0 },
      {
        result: housingCompanyLoan,
        label: "Yhtiölainaosuus",
        suffix: " €",
        decimals: 0,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
