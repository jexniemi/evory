"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  {
    label: "Gender",
    values: [1, 2],
    labels: ["Male", "Female"],
  },
  { label: "Weight (lbs)", initialValue: 180 },
  { label: "Waist Circumference (inches)", initialValue: 34 },
  { label: "Neck Circumference (inches)", initialValue: 15 },
  { label: "Height (inches)", initialValue: 70 },
];

export default function BodyFatCalculator() {
  const calculate = (values: number[]) => {
    const [gender, weight, waist, neck, height] = values;

    let bodyFatPct: number;

    if (gender === 1) {
      // US Navy formula — Male
      bodyFatPct =
        86.01 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;
    } else {
      // US Navy formula — Female (simplified without hip; uses adjusted constants)
      // Without a hip measurement, we use an approximation for females
      bodyFatPct =
        163.205 * Math.log10(waist - neck) -
        97.684 * Math.log10(height) -
        78.387;
    }

    bodyFatPct = Math.max(bodyFatPct, 0);

    const fatMass = (bodyFatPct / 100) * weight;
    const leanMass = weight - fatMass;

    // Category determination
    let categoryNum: number;
    if (gender === 1) {
      if (bodyFatPct < 6)
        categoryNum = 1; // Essential
      else if (bodyFatPct < 14)
        categoryNum = 2; // Athletic
      else if (bodyFatPct < 18)
        categoryNum = 3; // Fitness
      else if (bodyFatPct < 25)
        categoryNum = 4; // Average
      else categoryNum = 5; // Obese
    } else {
      if (bodyFatPct < 14)
        categoryNum = 1; // Essential
      else if (bodyFatPct < 21)
        categoryNum = 2; // Athletic
      else if (bodyFatPct < 25)
        categoryNum = 3; // Fitness
      else if (bodyFatPct < 32)
        categoryNum = 4; // Average
      else categoryNum = 5; // Obese
    }

    return [
      {
        result: bodyFatPct,
        label: "Estimated Body Fat:",
        suffix: "%",
        decimals: 1,
      },
      { result: fatMass, label: "Fat Mass:", suffix: " lbs", decimals: 1 },
      { result: leanMass, label: "Lean Mass:", suffix: " lbs", decimals: 1 },
      {
        result: categoryNum,
        label:
          "Category (1=Essential, 2=Athletic, 3=Fitness, 4=Average, 5=Obese):",
        suffix: "",
        decimals: 0,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
