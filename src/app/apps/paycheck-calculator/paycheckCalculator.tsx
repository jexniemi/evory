"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Annual salary ($)", initialValue: 60000 },
  { label: "Federal tax rate (%)", initialValue: 22 },
  { label: "State tax rate (%)", initialValue: 5 },
  { label: "401(k) contribution (%)", initialValue: 6 },
];

export default function PaycheckCalculator() {
  const calculate = (values: number[]) => {
    const annual = values[0];
    const federalRate = values[1] / 100;
    const stateRate = values[2] / 100;
    const retirement = values[3] / 100;

    const ficaRate = 0.0765; // Social Security 6.2% + Medicare 1.45%
    const biweeklyGross = annual / 26;
    const retirementDeduction = biweeklyGross * retirement;
    const taxableIncome = biweeklyGross - retirementDeduction;
    const federalTax = taxableIncome * federalRate;
    const stateTax = taxableIncome * stateRate;
    const fica = biweeklyGross * ficaRate;
    const biweeklyNet =
      biweeklyGross - federalTax - stateTax - fica - retirementDeduction;
    const monthlyNet = (biweeklyNet * 26) / 12;

    return [
      {
        result: biweeklyGross,
        label: "Gross pay (biweekly):",
        suffix: "$",
        decimals: 2,
      },
      { result: federalTax, label: "Federal tax:", suffix: "$", decimals: 2 },
      { result: stateTax, label: "State tax:", suffix: "$", decimals: 2 },
      {
        result: fica,
        label: "FICA (SS + Medicare):",
        suffix: "$",
        decimals: 2,
      },
      {
        result: retirementDeduction,
        label: "401(k) deduction:",
        suffix: "$",
        decimals: 2,
      },
      {
        result: biweeklyNet,
        label: "Net pay (biweekly):",
        suffix: "$",
        decimals: 2,
      },
      {
        result: monthlyNet,
        label: "Estimated monthly net:",
        suffix: "$",
        decimals: 2,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
