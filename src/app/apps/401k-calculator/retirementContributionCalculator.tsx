"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Current age", initialValue: 30 },
  { label: "Retirement age", initialValue: 65 },
  { label: "Current 401(k) balance ($)", initialValue: 25000 },
  { label: "Annual salary ($)", initialValue: 75000 },
  { label: "Contribution rate (%)", initialValue: 10 },
  { label: "Employer match (%)", initialValue: 4 },
  { label: "Expected annual return (%)", initialValue: 7 },
];

export default function RetirementContributionCalculator() {
  const calculate = (values: number[]) => {
    const currentAge = values[0];
    const retirementAge = values[1];
    const currentBalance = values[2];
    const annualSalary = values[3];
    const contributionRate = values[4] / 100;
    const employerMatch = values[5] / 100;
    const annualReturn = values[6] / 100;

    const years = Math.max(retirementAge - currentAge, 0);
    const annualContribution = annualSalary * contributionRate;
    const annualEmployerMatch = annualSalary * employerMatch;
    const totalAnnualAddition = annualContribution + annualEmployerMatch;

    let balance = currentBalance;
    let totalContributions = 0;
    let totalEmployerContributions = 0;

    for (let i = 0; i < years; i++) {
      balance *= 1 + annualReturn;
      balance += totalAnnualAddition;
      totalContributions += annualContribution;
      totalEmployerContributions += annualEmployerMatch;
    }

    const investmentGrowth =
      balance - currentBalance - totalContributions - totalEmployerContributions;

    return [
      {
        result: balance,
        label: "Total at retirement:",
        suffix: "$",
        decimals: 0,
      },
      {
        result: totalContributions,
        label: "Your total contributions:",
        suffix: "$",
        decimals: 0,
      },
      {
        result: totalEmployerContributions,
        label: "Total employer match:",
        suffix: "$",
        decimals: 0,
      },
      {
        result: investmentGrowth,
        label: "Investment growth:",
        suffix: "$",
        decimals: 0,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
