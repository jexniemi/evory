"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function CpmCalculator() {
  const inputs = [
    { label: "Total ad cost ($)", initialValue: 500 },
    { label: "Total impressions", initialValue: 100000 },
  ];

  const calculate = (values: number[]) => {
    const [cost, impressions] = values;
    if (impressions <= 0) {
      return [{ result: 0, label: "CPM:", suffix: "$" }];
    }
    const cpm = (cost / impressions) * 1000;
    const cpc = impressions > 0 ? cost / (impressions * 0.02) : 0; // estimated 2% CTR
    const costPerView = cost / impressions;

    return [
      {
        result: cpm,
        label: "CPM (Cost per 1,000 impressions):",
        suffix: "$",
        decimals: 2,
      },
      {
        result: costPerView * 100,
        label: "Cost per 100 impressions:",
        suffix: "$",
        decimals: 4,
      },
      {
        result: cost / (impressions / 1000000),
        label: "Cost per million impressions:",
        suffix: "$",
        decimals: 2,
      },
      {
        result: costPerView,
        label: "Cost per single impression:",
        suffix: "$",
        decimals: 6,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
