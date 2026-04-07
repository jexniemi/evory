"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function GradePercentageCalculator() {
  const inputs = [
    { label: "Points earned", initialValue: 85 },
    { label: "Total points possible", initialValue: 100 },
  ];

  const calculate = (values: number[]) => {
    const [earned, total] = values;
    if (total <= 0) {
      return [{ result: 0, label: "Percentage:", suffix: "%" }];
    }
    const percentage = (earned / total) * 100;

    let grade = "F";
    if (percentage >= 97) grade = "A+";
    else if (percentage >= 93) grade = "A";
    else if (percentage >= 90) grade = "A-";
    else if (percentage >= 87) grade = "B+";
    else if (percentage >= 83) grade = "B";
    else if (percentage >= 80) grade = "B-";
    else if (percentage >= 77) grade = "C+";
    else if (percentage >= 73) grade = "C";
    else if (percentage >= 70) grade = "C-";
    else if (percentage >= 67) grade = "D+";
    else if (percentage >= 63) grade = "D";
    else if (percentage >= 60) grade = "D-";

    let gpa = 0;
    if (percentage >= 93) gpa = 4.0;
    else if (percentage >= 90) gpa = 3.7;
    else if (percentage >= 87) gpa = 3.3;
    else if (percentage >= 83) gpa = 3.0;
    else if (percentage >= 80) gpa = 2.7;
    else if (percentage >= 77) gpa = 2.3;
    else if (percentage >= 73) gpa = 2.0;
    else if (percentage >= 70) gpa = 1.7;
    else if (percentage >= 67) gpa = 1.3;
    else if (percentage >= 63) gpa = 1.0;
    else if (percentage >= 60) gpa = 0.7;

    const pointsToNextGrade =
      total > 0
        ? Math.ceil(total * ((Math.ceil(percentage / 10) * 10) / 100)) - earned
        : 0;

    return [
      { result: percentage, label: "Percentage:", suffix: "%", decimals: 2 },
      {
        result: gpa,
        label: `Letter Grade: ${grade} — GPA:`,
        suffix: "",
        decimals: 1,
      },
      {
        result: Math.max(0, pointsToNextGrade),
        label: "Points to next grade boundary:",
        suffix: " pts",
        decimals: 0,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
