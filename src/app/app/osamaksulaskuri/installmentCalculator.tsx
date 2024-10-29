"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function InstallmentCalculator() {
  const calculateInstallment = (values: number[]) => {
    const r = values[1] / 12 / 100;
    const months = values[2];
    const principal = values[0];

    const monthlyPayment = (principal * r) / (1 - Math.pow(1 + r, -months));
    const totalCost = monthlyPayment * months;
    const totalInterest = totalCost - principal;

    return [
      { result: monthlyPayment || 0, label: "Kuukausierä:", suffix: "$" },
      { result: totalCost || 0, label: "Kokonaishinta:", suffix: "$" },
      { result: totalInterest || 0, label: "Korkojen määrä:", suffix: "$" },
    ];
  };

  return (
    <SimpleCalculator
      inputs={[
        { label: "Lainan/tuotteen kokonaissumma ($)", initialValue: 1000 },
        { label: "Vuosikorko (%)", initialValue: 5 },
        { label: "Maksuaika (kuukausina)", initialValue: 12 },
      ]}
      calculate={calculateInstallment}
    />
  );
}
