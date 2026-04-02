"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Monthly Lease Payment ($)", initialValue: 399, step: 10 },
  { label: "Lease Term (months)", initialValue: 36, step: 12 },
  { label: "Monthly Loan Payment ($)", initialValue: 520, step: 10 },
  { label: "Car Price ($)", initialValue: 30000, step: 500 },
  { label: "Estimated Resale Value ($)", initialValue: 18000, step: 500 },
];

const calculate = (values: number[]) => {
  const leasePayment = values[0];
  const term = values[1];
  const loanPayment = values[2];
  const carPrice = values[3];
  const resaleValue = values[4];

  const leaseTotalCost = leasePayment * term;
  const buyTotalPaid = loanPayment * term;
  const buyNetCost = buyTotalPaid - resaleValue;
  const difference = leaseTotalCost - buyNetCost;

  return [
    {
      result: leaseTotalCost,
      label: "Total Lease Cost",
      suffix: " $",
      decimals: 0,
    },
    {
      result: buyNetCost,
      label: "Net Buy Cost (after resale)",
      suffix: " $",
      decimals: 0,
    },
    {
      result: Math.abs(difference),
      label: difference > 0 ? "Buying saves you" : "Leasing saves you",
      suffix: " $",
      decimals: 0,
    },
  ];
};

export default function LeaseVsBuyCalculator() {
  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix="$" />;
}
