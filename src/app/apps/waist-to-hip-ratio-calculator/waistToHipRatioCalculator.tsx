"use client"

import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator"

const inputs = [
  { label: "Waist circumference (cm)", initialValue: 80, step: 0.5 },
  { label: "Hip circumference (cm)", initialValue: 100, step: 0.5 },
  {
    label: "Biological sex",
    values: [0, 1],
    labels: ["Female", "Male"],
  },
]

const calculate = (values: number[]) => {
  const waist = values[0]
  const hip = values[1]
  const isMale = values[2] === 1

  if (hip <= 0) return [{ result: 0, label: "Hip circumference must be greater than 0", suffix: "" }]

  const ratio = waist / hip

  // WHO risk thresholds
  let riskScore: number
  let riskLabel: string
  if (isMale) {
    if (ratio < 0.9) { riskScore = 1; riskLabel = "Low health risk (Male: WHR < 0.90)" }
    else if (ratio < 1.0) { riskScore = 2; riskLabel = "Moderate health risk (Male: WHR 0.90–0.99)" }
    else { riskScore = 3; riskLabel = "High health risk (Male: WHR ≥ 1.00)" }
  } else {
    if (ratio < 0.8) { riskScore = 1; riskLabel = "Low health risk (Female: WHR < 0.80)" }
    else if (ratio < 0.85) { riskScore = 2; riskLabel = "Moderate health risk (Female: WHR 0.80–0.84)" }
    else { riskScore = 3; riskLabel = "High health risk (Female: WHR ≥ 0.85)" }
  }

  return [
    { result: Math.round(ratio * 100) / 100, label: "Waist-to-Hip Ratio (WHR)", suffix: "", decimals: 2 },
    { result: riskScore, label: riskLabel, suffix: "/3", decimals: 0 },
  ]
}

export default function WaistToHipRatioCalculator() {
  return <SimpleCalculator inputs={inputs} calculate={calculate} />
}
