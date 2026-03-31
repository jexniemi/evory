"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Cash & savings ($)", initialValue: 15000 },
  { label: "Investment accounts ($)", initialValue: 50000 },
  { label: "Real estate value ($)", initialValue: 300000 },
  { label: "Vehicle value ($)", initialValue: 20000 },
  { label: "Other assets ($)", initialValue: 5000 },
  { label: "Credit card & personal debt ($)", initialValue: 8000 },
  { label: "Student loans ($)", initialValue: 25000 },
  { label: "Mortgage balance ($)", initialValue: 230000 },
  { label: "Car loans ($)", initialValue: 12000 },
  { label: "Other liabilities ($)", initialValue: 2000 },
];

export default function NetWorthCalculator() {
  const calculate = (values: number[]) => {
    const totalAssets = values[0] + values[1] + values[2] + values[3] + values[4];
    const totalLiabilities = values[5] + values[6] + values[7] + values[8] + values[9];
    const netWorth = totalAssets - totalLiabilities;
    const debtToAssetRatio = totalAssets > 0 ? (totalLiabilities / totalAssets) * 100 : 0;

    return [
      { result: netWorth, label: "Net worth:", suffix: "$", decimals: 0 },
      { result: totalAssets, label: "Total assets:", suffix: "$", decimals: 0 },
      { result: totalLiabilities, label: "Total liabilities:", suffix: "$", decimals: 0 },
      { result: debtToAssetRatio, label: "Debt-to-asset ratio:", suffix: "%", decimals: 1 },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix="$" />;
}
