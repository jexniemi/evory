"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

// MET values for common activities
const ACTIVITIES = [
  { label: "Walking (4 km/h)", met: 3.0 },
  { label: "Brisk walking (6 km/h)", met: 4.5 },
  { label: "Jogging (8 km/h)", met: 8.0 },
  { label: "Running (10 km/h)", met: 10.5 },
  { label: "Running (12 km/h)", met: 12.5 },
  { label: "Cycling, light", met: 5.5 },
  { label: "Cycling, vigorous", met: 10.0 },
  { label: "Swimming", met: 7.0 },
  { label: "Gym (light)", met: 3.5 },
  { label: "Gym (heavy)", met: 6.0 },
  { label: "Yoga", met: 2.5 },
  { label: "Aerobics", met: 6.5 },
  { label: "Cross-country skiing", met: 7.0 },
  { label: "Ice skating", met: 7.0 },
  { label: "Soccer", met: 7.0 },
  { label: "Tennis", met: 7.3 },
  { label: "Dancing", met: 5.5 },
  { label: "Housework (cleaning)", met: 3.3 },
  { label: "Stair climbing", met: 8.0 },
];

const inputs = [
  { label: "Paino (kg)", initialValue: 75, step: 0.5 },
  {
    label: "Aktiviteetti",
    labels: ACTIVITIES.map((a) => a.label),
    values: ACTIVITIES.map((a) => a.met),
  },
  { label: "Duration (minutes)", initialValue: 30, step: 5 },
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
        label: "Calories burned",
        suffix: " kcal",
        decimals: 0,
      },
      {
        result: caloriesPerHour,
        label: "Calories per hour",
        suffix: " kcal/h",
        decimals: 0,
      },
      {
        result: caloriesPer10min,
        label: "Calories per 10 min",
        suffix: " kcal",
        decimals: 0,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix=" " />;
}
