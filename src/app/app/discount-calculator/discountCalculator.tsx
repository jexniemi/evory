"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function DiscountCalculator() {
  const inputs = [
    { label: "Price ($)", initialValue: 100 },
    { label: "Discount percentage (%)", initialValue: 20 },
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
      { result: salePrice || 0, label: "Discounted price:", suffix: "$" },
      { result: savedMoney || 0, label: "Money saved:", suffix: "$" },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
