"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Säästötavoite (€)", initialValue: 10000, step: 100 },
  { label: "Kuukausittainen säästösumma (€)", initialValue: 200, step: 10 },
  { label: "Vuotuinen tuotto-odotus (%)", initialValue: 5, step: 0.5 },
];

export default function SavingsGoalCalculator() {
  const calculate = (values: number[]) => {
    const target = values[0];
    const monthlySaving = values[1];
    const annualReturn = values[2] / 100;
    const monthlyReturn = annualReturn / 12;

    if (monthlySaving <= 0) {
      return [{ result: 0, label: "Aika", suffix: " kuukautta", decimals: 0 }];
    }

    let months = 0;
    if (monthlyReturn === 0) {
      months = Math.ceil(target / monthlySaving);
    } else {
      // FV = PMT * ((1+r)^n - 1) / r => solve for n
      // n = ln(1 + target * r / PMT) / ln(1 + r)
      const inner = 1 + (target * monthlyReturn) / monthlySaving;
      if (inner <= 0) {
        months = 9999;
      } else {
        months = Math.ceil(Math.log(inner) / Math.log(1 + monthlyReturn));
      }
    }

    const totalSaved = monthlySaving * months;
    const totalReturn = target - totalSaved;
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    return [
      { result: years, label: "Vuosia", suffix: " v", decimals: 0 },
      {
        result: remainingMonths,
        label: "Kuukausia",
        suffix: " kk",
        decimals: 0,
      },
      {
        result: totalSaved,
        label: "Säästetty yhteensä",
        suffix: " €",
        decimals: 0,
      },
      {
        result: Math.max(0, totalReturn),
        label: "Tuotot yhteensä",
        suffix: " €",
        decimals: 0,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
