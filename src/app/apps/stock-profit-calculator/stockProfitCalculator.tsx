"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Buy Price per Share ($)", initialValue: 50, step: 0.01 },
  { label: "Number of Shares", initialValue: 100, step: 1 },
  { label: "Sell Price per Share ($)", initialValue: 75, step: 0.01 },
];

const calculate = (values: number[]) => {
  const buyPrice = values[0];
  const shares = values[1];
  const sellPrice = values[2];
  const totalInvested = buyPrice * shares;
  const totalReceived = sellPrice * shares;
  const profit = totalReceived - totalInvested;
  const roi = totalInvested !== 0 ? (profit / totalInvested) * 100 : 0;
  return [
    { result: profit, label: profit >= 0 ? "Profit" : "Loss", suffix: " $", decimals: 2 },
    { result: roi, label: "Return on Investment (ROI)", suffix: " %", decimals: 2 },
    { result: totalInvested, label: "Total Invested", suffix: " $", decimals: 2 },
    { result: totalReceived, label: "Total Received", suffix: " $", decimals: 2 },
  ];
};

export default function StockProfitCalculator() {
  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix="$" />;
}
