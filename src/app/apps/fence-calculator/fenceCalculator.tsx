"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  { label: "Total Fence Length (feet)", initialValue: 100, step: 5 },
  { label: "Post Spacing (feet)", initialValue: 8, step: 1 },
  { label: "Panel Width (feet)", initialValue: 8, step: 1 },
];

const calculate = (values: number[]) => {
  const totalLength = values[0];
  const postSpacing = values[1];
  const panelWidth = values[2];

  const posts = Math.ceil(totalLength / postSpacing) + 1;
  const panels = Math.ceil(totalLength / panelWidth);
  const concreteBags = posts * 1; // ~1 bag per post for standard 4x4

  return [
    { result: posts, label: "Fence Posts Needed", suffix: " posts", decimals: 0 },
    { result: panels, label: "Fence Panels Needed", suffix: " panels", decimals: 0 },
    { result: concreteBags, label: "Concrete Bags (1 per post)", suffix: " bags", decimals: 0 },
  ];
};

export default function FenceCalculator() {
  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix=" posts" />;
}
