"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Alkusijoitus (€)", initialValue: 10000 },
  { label: "Nykyarvo / myyntihinta (€)", initialValue: 15000 },
  { label: "Sijoitusaika (vuotta)", initialValue: 5 },
];

export default function ReturnOnInvestmentCalculator() {
  const calculate = (values: number[]) => {
    const initial = values[0];
    const finalValue = values[1];
    const years = values[2];

    const profit = finalValue - initial;
    const roi = initial > 0 ? (profit / initial) * 100 : 0;
    // Annualisoitu tuotto: (loppuarvo/alkuarvo)^(1/vuodet) - 1
    const annualizedRoi =
      initial > 0 && years > 0
        ? (Math.pow(finalValue / initial, 1 / years) - 1) * 100
        : 0;

    return [
      { result: profit, label: "Voitto / tappio", suffix: " €", decimals: 2 },
      { result: roi, label: "Kokonaistuotto (ROI)", suffix: " %", decimals: 2 },
      {
        result: annualizedRoi,
        label: "Vuosituotto (CAGR)",
        suffix: " %/v",
        decimals: 2,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
