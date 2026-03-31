"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Annual income ($)", initialValue: 75000 },
  {
    label: "Filing status",
    values: [0, 1, 2],
    labels: ["Single", "Married Filing Jointly", "Head of Household"],
  },
];

type Bracket = { max: number; rate: number }[];

const BRACKETS: Record<number, Bracket> = {
  // Single
  0: [
    { max: 11600, rate: 0.1 },
    { max: 47150, rate: 0.12 },
    { max: 100525, rate: 0.22 },
    { max: 191950, rate: 0.24 },
    { max: 243725, rate: 0.32 },
    { max: 609350, rate: 0.35 },
    { max: Infinity, rate: 0.37 },
  ],
  // Married Filing Jointly
  1: [
    { max: 23200, rate: 0.1 },
    { max: 94300, rate: 0.12 },
    { max: 201050, rate: 0.22 },
    { max: 383900, rate: 0.24 },
    { max: 487450, rate: 0.32 },
    { max: 731200, rate: 0.35 },
    { max: Infinity, rate: 0.37 },
  ],
  // Head of Household
  2: [
    { max: 16550, rate: 0.1 },
    { max: 63100, rate: 0.12 },
    { max: 100500, rate: 0.22 },
    { max: 191950, rate: 0.24 },
    { max: 243700, rate: 0.32 },
    { max: 609350, rate: 0.35 },
    { max: Infinity, rate: 0.37 },
  ],
};

const STANDARD_DEDUCTION: Record<number, number> = {
  0: 14600,
  1: 29200,
  2: 21900,
};

export default function TaxBracketCalculator() {
  const calculate = (values: number[]) => {
    const income = values[0];
    const status = Math.round(values[1]) as 0 | 1 | 2;

    const deduction = STANDARD_DEDUCTION[status] ?? STANDARD_DEDUCTION[0];
    const brackets = BRACKETS[status] ?? BRACKETS[0];
    const taxableIncome = Math.max(0, income - deduction);

    let tax = 0;
    let prevMax = 0;
    let marginalRate = brackets[0].rate * 100;

    for (const bracket of brackets) {
      if (taxableIncome <= prevMax) break;
      const taxable = Math.min(taxableIncome, bracket.max) - prevMax;
      tax += taxable * bracket.rate;
      marginalRate = bracket.rate * 100;
      prevMax = bracket.max;
    }

    const effectiveRate = income > 0 ? (tax / income) * 100 : 0;
    const afterTaxIncome = income - tax;

    return [
      { result: tax, label: "Estimated tax owed:", suffix: "$", decimals: 2 },
      {
        result: effectiveRate,
        label: "Effective tax rate:",
        suffix: "%",
        decimals: 1,
      },
      {
        result: marginalRate,
        label: "Marginal tax bracket:",
        suffix: "%",
        decimals: 0,
      },
      {
        result: afterTaxIncome,
        label: "After-tax income:",
        suffix: "$",
        decimals: 2,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix="$" />;
}
