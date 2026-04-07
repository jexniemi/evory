"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function AspectRatioCalculator() {
  const inputs = [
    { label: "Width (px)", initialValue: 1920 },
    { label: "Height (px)", initialValue: 1080 },
  ];

  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

  const calculate = (values: number[]) => {
    const [w, h] = values;
    if (w <= 0 || h <= 0) {
      return [
        { result: 0, label: "Aspect Ratio:", suffix: "" },
        { result: 0, label: "Decimal Ratio:", suffix: "" },
      ];
    }
    const d = gcd(Math.round(w), Math.round(h));
    const ratioW = Math.round(w) / d;
    const ratioH = Math.round(h) / d;
    const decimal = w / h;
    const megapixels = (w * h) / 1000000;

    return [
      { result: ratioW, label: `Aspect Ratio: ${ratioW}:${ratioH}`, suffix: "", decimals: 0 },
      { result: decimal, label: "Decimal Ratio:", suffix: ":1", decimals: 4 },
      { result: megapixels, label: "Megapixels:", suffix: " MP", decimals: 2 },
      { result: w * h, label: "Total Pixels:", suffix: " px", decimals: 0 },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
