"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function HourlyWageCalculator() {
  const inputs = [
    { label: "Monthly Salary ($)", initialValue: 2800 },
    { label: "Working Hours per Month", initialValue: 173 },
  ];

  const calculate = (values: number[]) => {
    let result = 0;
    try {
      result = values[0] / values[1];
    } catch (error) {
      console.error(error);
    }
    return [{ result, label: "Calculated Hourly Wage:", prefix: "$" }];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
