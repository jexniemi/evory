"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function PixelToRemConverter() {
  const inputs = [
    { label: "Pixels (px)", initialValue: 16 },
    { label: "Base font size (px)", initialValue: 16 },
  ];

  const calculate = (values: number[]) => {
    const [px, base] = values;
    if (base <= 0) {
      return [{ result: 0, label: "REM:", suffix: " rem" }];
    }
    const rem = px / base;
    const em = px / base;
    const pt = px * 0.75;
    const vw = (px / 1920) * 100;

    return [
      { result: rem, label: "REM:", suffix: " rem", decimals: 4 },
      { result: em, label: "EM:", suffix: " em", decimals: 4 },
      { result: pt, label: "Points:", suffix: " pt", decimals: 2 },
      { result: vw, label: "VW (1920px viewport):", suffix: " vw", decimals: 4 },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
