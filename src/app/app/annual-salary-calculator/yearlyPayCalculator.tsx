"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function YearlyPayCalculator() {
  const inputsHourly = [
    { label: "Hourly Wage ($)", initialValue: 20 }, // Adjusted to a more typical US hourly wage
    { label: "Hours Worked per Month", initialValue: 173 }, // Adjusted to reflect a typical 40-hour work week (4 weeks)
  ];

  const inputsMonthly = [
    { label: "Monthly Salary ($)", initialValue: 3500 }, // Adjusted to a typical US monthly salary
    { label: "Annual Bonuses ($)", initialValue: 0 }, // No change needed
  ];

  const calculateYearlyFromMonthly = (values: number[]) => {
    let result = 0;
    try {
      result = values[0] * 12 + values[1]; // Monthly salary multiplied by 12 plus annual bonuses
    } catch (error) {
      console.error(error);
    }
    return [
      {
        result,
        label: "Calculated Annual Salary from Monthly Salary:",
        decimals: 0,
      },
    ];
  };

  const calculateYearlyFromHourly = (values: number[]) => {
    let result = 0;
    try {
      result = values[0] * values[1] * 12; // Hourly wage multiplied by hours worked per month multiplied by 12
    } catch (error) {
      console.error(error);
    }
    return [
      {
        result,
        label: "Calculated Annual Salary from Hourly Wage:",
        decimals: 0,
      },
    ];
  };

  return (
    <div>
      <SimpleCalculator
        inputs={inputsMonthly}
        header="Calculate Annual Salary from Monthly Salary"
        calculate={calculateYearlyFromMonthly}
      />
      <div className="flex w-full flex-col">
        <div className="divider h-40">OR</div>
      </div>
      <SimpleCalculator
        inputs={inputsHourly}
        header="Calculate Annual Salary from Hourly Wage"
        calculate={calculateYearlyFromHourly}
        resultButtonStyle="bg-pastelgreen"
      />
    </div>
  );
}
