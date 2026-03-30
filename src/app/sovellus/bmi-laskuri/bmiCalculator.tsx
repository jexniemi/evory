"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Pituus (cm)", initialValue: 170 },
  { label: "Paino (kg)", initialValue: 70 },
];

export default function BmiCalculator() {
  const calculate = (values: number[]) => {
    const heightM = values[0] / 100;
    const weight = values[1];
    const bmi = weight / (heightM * heightM);

    let category = "";
    if (bmi < 16) category = "Vaikea alipaino";
    else if (bmi < 17) category = "Kohtalainen alipaino";
    else if (bmi < 18.5) category = "Lievä alipaino";
    else if (bmi < 25) category = "Normaalipaino";
    else if (bmi < 30) category = "Liikapaino";
    else if (bmi < 35) category = "Lihavuus (I aste)";
    else if (bmi < 40) category = "Lihavuus (II aste)";
    else category = "Sairaalloinen lihavuus";

    const healthyMin = 18.5 * heightM * heightM;
    const healthyMax = 24.9 * heightM * heightM;

    return [
      { result: bmi, label: `BMI — ${category}`, suffix: "", decimals: 1 },
      {
        result: healthyMin,
        label: "Normaalipainon alaraja",
        suffix: " kg",
        decimals: 1,
      },
      {
        result: healthyMax,
        label: "Normaalipainon yläraja",
        suffix: " kg",
        decimals: 1,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
