"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Height (cm)", initialValue: 170 },
  { label: "Weight (kg)", initialValue: 70 },
];

export default function BmiCalculator() {
  const calculate = (values: number[]) => {
    const heightM = values[0] / 100;
    const weight = values[1];
    const bmi = weight / (heightM * heightM);

    let category = "";
    if (bmi < 16) category = "Severe underweight";
    else if (bmi < 17) category = "Moderate underweight";
    else if (bmi < 18.5) category = "Mild underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else if (bmi < 35) category = "Obesity (Grade I)";
    else if (bmi < 40) category = "Obesity (Grade II)";
    else category = "Morbid obesity";

    const healthyMin = 18.5 * heightM * heightM;
    const healthyMax = 24.9 * heightM * heightM;

    return [
      { result: bmi, label: `BMI — ${category}`, suffix: "", decimals: 1 },
      {
        result: healthyMin,
        label: "Normal weight lower limit",
        suffix: " kg",
        decimals: 1,
      },
      {
        result: healthyMax,
        label: "Normal weight upper limit",
        suffix: " kg",
        decimals: 1,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
