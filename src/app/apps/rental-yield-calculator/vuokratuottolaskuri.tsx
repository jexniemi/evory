"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Property price ($)", initialValue: 200000, step: 1000 },
  { label: "Monthly rent ($)", initialValue: 900, step: 10 },
  {
    label: "Monthly expenses (HOA, insurance, etc.) ($)",
    initialValue: 150,
    step: 10,
  },
  { label: "Purchase costs (%)", initialValue: 4, step: 0.5 },
];

export default function VuokratuottolaskuriComponent() {
  const calculate = (values: number[]) => {
    const price = values[0];
    const rent = values[1];
    const costs = values[2];
    const purchaseCostPct = values[3];

    const totalInvestment = price * (1 + purchaseCostPct / 100);
    const annualRent = rent * 12;
    const annualCosts = costs * 12;
    const annualNet = annualRent - annualCosts;
    const grossYield = (annualRent / totalInvestment) * 100;
    const netYield = (annualNet / totalInvestment) * 100;
    const monthlyCashflow = annualNet / 12;

    return [
      {
        result: grossYield,
        label: "Gross rental yield",
        suffix: " %",
        decimals: 2,
      },
      {
        result: netYield,
        label: "Net rental yield",
        suffix: " %",
        decimals: 2,
      },
      {
        result: annualNet,
        label: "Annual net income",
        suffix: " $",
        decimals: 0,
      },
      {
        result: monthlyCashflow,
        label: "Monthly cash flow",
        suffix: " $",
        decimals: 0,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix=" " />;
}
