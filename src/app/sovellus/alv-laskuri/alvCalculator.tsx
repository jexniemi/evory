"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Hinta (€)", initialValue: 100 },
  {
    label: "ALV-kanta",
    values: [25.5, 14, 10, 0],
    labels: [
      "25,5 % (yleinen)",
      "14 % (ruoka, ravintola)",
      "10 % (kirjat, lääkkeet, liikenne)",
      "0 %",
    ],
  },
];

export default function AlvCalculator() {
  const calculate = (values: number[]) => {
    let vatFromNetPrice = 0;
    let grossPrice = 0;
    let vatFromGrossPrice = 0;
    let netPrice = 0;

    try {
      const price = values[0];
      const vatRate = values[1] / 100;

      // ALV lisätään nettohintaan → bruttohinta
      vatFromNetPrice = price * vatRate;
      grossPrice = price + vatFromNetPrice;

      // ALV poistetaan bruttohinnasta → nettohinta
      netPrice = price / (1 + vatRate);
      vatFromGrossPrice = price - netPrice;
    } catch (error) {
      console.error(error);
    }

    return [
      {
        result: vatFromNetPrice || 0,
        label: "ALV-summa (hinta ei sisällä ALV:tä):",
        suffix: "€",
        decimals: 2,
      },
      {
        result: grossPrice || 0,
        label: "Bruttohinta (ALV lisättynä):",
        suffix: "€",
        decimals: 2,
      },
      {
        result: vatFromGrossPrice || 0,
        label: "ALV-summa (hinta sisältää ALV:n):",
        suffix: "€",
        decimals: 2,
      },
      {
        result: netPrice || 0,
        label: "Nettohinta (ALV vähennettynä):",
        suffix: "€",
        decimals: 2,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
