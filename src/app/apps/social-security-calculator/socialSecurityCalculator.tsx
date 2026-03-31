"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const claimingAges = Array.from({ length: 9 }, (_, i) => i + 62);
const claimingLabels = claimingAges.map((age) => {
  if (age === 62) return "62 (earliest)";
  if (age === 67) return "67 (full retirement age)";
  if (age === 70) return "70 (maximum benefit)";
  return String(age);
});

const inputs = [
  { label: "Monthly benefit at full retirement age ($)", initialValue: 2000 },
  { label: "Current age", initialValue: 60 },
  {
    label: "Planned claiming age",
    values: claimingAges,
    labels: claimingLabels,
  },
];

export default function SocialSecurityCalculator() {
  const calculate = (values: number[]) => {
    const fullBenefit = values[0];
    const currentAge = values[1];
    const claimingAge = values[2];

    const fullRetirementAge = 67;
    let adjustmentFactor = 1;

    if (claimingAge < fullRetirementAge) {
      const monthsEarly = (fullRetirementAge - claimingAge) * 12;
      // First 36 months early: 5/9 of 1% per month (6.67% per year)
      const firstReduction = Math.min(monthsEarly, 36) * (5 / 900);
      // Additional months beyond 36: 5/12 of 1% per month (5% per year)
      const additionalReduction = Math.max(monthsEarly - 36, 0) * (5 / 1200);
      adjustmentFactor = 1 - firstReduction - additionalReduction;
    } else if (claimingAge > fullRetirementAge) {
      // Delayed retirement credits: 8% per year (2/3 of 1% per month)
      const monthsDelayed = (claimingAge - fullRetirementAge) * 12;
      adjustmentFactor = 1 + monthsDelayed * (2 / 300);
    }

    const adjustedMonthly = fullBenefit * adjustmentFactor;
    const annualBenefit = adjustedMonthly * 12;
    const totalBy85 = annualBenefit * Math.max(85 - claimingAge, 0);

    return [
      {
        result: adjustedMonthly,
        label: "Adjusted monthly benefit:",
        suffix: "$",
        decimals: 2,
      },
      {
        result: annualBenefit,
        label: "Annual benefit:",
        suffix: "$",
        decimals: 2,
      },
      {
        result: totalBy85,
        label: "Total received by age 85:",
        suffix: "$",
        decimals: 0,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
