"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

// MET values for common activities
const ACTIVITIES = [
  { label: "Kävely (4 km/h)", met: 3.0 },
  { label: "Reipas kävely (6 km/h)", met: 4.5 },
  { label: "Hölkkä (8 km/h)", met: 8.0 },
  { label: "Juoksu (10 km/h)", met: 10.5 },
  { label: "Juoksu (12 km/h)", met: 12.5 },
  { label: "Pyöräily, kevyt", met: 5.5 },
  { label: "Pyöräily, reipas", met: 10.0 },
  { label: "Uinti", met: 7.0 },
  { label: "Kuntosali (kevyt)", met: 3.5 },
  { label: "Kuntosali (rankka)", met: 6.0 },
  { label: "Jooga", met: 2.5 },
  { label: "Aerobic", met: 6.5 },
  { label: "Hiihto (perinteinen)", met: 7.0 },
  { label: "Luistelu", met: 7.0 },
  { label: "Jalkapallo", met: 7.0 },
  { label: "Tennis", met: 7.3 },
  { label: "Tanssiminen", met: 5.5 },
  { label: "Kotityöt (siivous)", met: 3.3 },
  { label: "Portaiden kävely", met: 8.0 },
];

const inputs = [
  { label: "Paino (kg)", initialValue: 75, step: 0.5 },
  {
    label: "Aktiviteetti",
    labels: ACTIVITIES.map((a) => a.label),
    values: ACTIVITIES.map((a) => a.met),
  },
  { label: "Kesto (minuuttia)", initialValue: 30, step: 5 },
];

export default function Kalorienpolttolaskuri() {
  const calculate = (values: number[]) => {
    const weight = values[0];
    const met = values[1];
    const durationMin = values[2];

    const calories = (met * weight * durationMin) / 60;
    const caloriesPerHour = met * weight;
    const caloriesPer10min = (met * weight * 10) / 60;

    return [
      {
        result: calories,
        label: "Kulutetut kalorit",
        suffix: " kcal",
        decimals: 0,
      },
      {
        result: caloriesPerHour,
        label: "Kalorit tunnissa",
        suffix: " kcal/h",
        decimals: 0,
      },
      {
        result: caloriesPer10min,
        label: "Kalorit per 10 min",
        suffix: " kcal",
        decimals: 0,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix=" " />;
}
