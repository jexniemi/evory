"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Desired annual income ($)", initialValue: 80000 },
  { label: "Billable hours per week", initialValue: 30 },
  { label: "Weeks worked per year", initialValue: 48 },
  { label: "Monthly business expenses ($)", initialValue: 500 },
];

export default function FreelanceRateCalculator() {
  const calculate = (values: number[]) => {
    const desiredIncome = values[0];
    const hoursPerWeek = values[1];
    const weeksPerYear = values[2];
    const monthlyExpenses = values[3];

    const annualExpenses = monthlyExpenses * 12;
    // Factor in self-employment tax (~15.3%)
    const seTax = desiredIncome * 0.153;
    const totalRevenue = desiredIncome + annualExpenses + seTax;
    const billableHoursPerYear = hoursPerWeek * weeksPerYear;

    const hourlyRate = billableHoursPerYear > 0 ? totalRevenue / billableHoursPerYear : 0;
    const dailyRate = hourlyRate * 8;
    const monthlyRevenue = totalRevenue / 12;

    return [
      { result: hourlyRate, label: "Minimum hourly rate:", suffix: "$", decimals: 2 },
      { result: dailyRate, label: "Daily rate (8-hour day):", suffix: "$", decimals: 2 },
      { result: monthlyRevenue, label: "Monthly revenue needed:", suffix: "$", decimals: 2 },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix="$" />;
}
