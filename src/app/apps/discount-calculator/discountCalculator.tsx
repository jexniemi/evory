"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function DiscountCalculator() {
  const inputs = [
    { label: "Tuotteen hinta (€)", initialValue: 100 },
    { label: "Alennusprosentti (%)", initialValue: 20 },
  ];

  const calculate = (values: number[]) => {
    let salePrice = 0;
    let savedMoney = 0;
    try {
      salePrice = values[0] * (1 - values[1] / 100);
      savedMoney = values[0] - salePrice;
    } catch (error) {
      console.error(error);
    }
    return [
      { result: salePrice || 0, label: "Alennettu hinta:", suffix: "€" },
      { result: savedMoney || 0, label: "Säästetty raha:", suffix: "€" },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
