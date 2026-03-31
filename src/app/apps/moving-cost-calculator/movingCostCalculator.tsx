"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Distance (miles)", initialValue: 500 },
  { label: "Number of Rooms", initialValue: 3 },
  {
    label: "Packing Service",
    values: [0, 500, 1200],
    labels: ["Self-pack ($0)", "Partial ($500)", "Full service ($1,200)"],
  },
];

export default function MovingCostCalculator() {
  const calculate = (values: number[]) => {
    const [distance, rooms, packingCost] = values;

    const isLongDistance = distance >= 100;
    const baseCostPerRoom = isLongDistance ? 1500 : 1000;
    const baseCost = rooms * baseCostPerRoom;
    const distanceCost = distance * 0.5;
    const grandTotal = baseCost + distanceCost + packingCost;
    const perMileCost = distance > 0 ? grandTotal / distance : 0;

    return [
      { result: baseCost + distanceCost, label: "Estimated Moving Cost:", suffix: "$", decimals: 2 },
      { result: perMileCost, label: "Cost Per Mile:", suffix: "$", decimals: 2 },
      { result: packingCost, label: "Packing Service Total:", suffix: "$", decimals: 2 },
      { result: grandTotal, label: "Grand Total:", suffix: "$", decimals: 2 },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
