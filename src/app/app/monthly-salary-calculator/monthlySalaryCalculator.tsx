"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function MonthlyWageCalculator() {
  const inputs = [
    { label: "Hourly Wage ($)", initialValue: 15 },
    { label: "Working Hours per Month", initialValue: 173 },
  ];

  const calculate = (values: number[]) => {
    let result = 0;
    try {
      result = values[0] * values[1];
    } catch (error) {
      console.error(error);
    }
    return [{ result, label: "Calculated Monthly Salary:" }];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
