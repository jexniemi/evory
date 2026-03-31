"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

// Wind chill formula (Environment Canada / WMO)
// Valid when T ≤ 10°C and V > 4.8 km/h
// Tw = 13.12 + 0.6215*T − 11.37*(V^0.16) + 0.3965*T*(V^0.16)

const inputs = [
  { label: "Temperature (°C)", initialValue: -5, step: 0.5 },
  { label: "Wind speed (km/h)", initialValue: 20, step: 1 },
];

function getFeelDesc(wc: number): string {
  if (wc > 10) return "No wind chill (T > 10°C)";
  if (wc > 0) return "Cool";
  if (wc > -10) return "Cold — dress in layers";
  if (wc > -28) return "Very cold — frostbite risk with prolonged exposure";
  if (wc > -40) return "Severe cold — frostbite risk in 10–30 min";
  return "Extreme cold — frostbite risk in under 2 min";
}

export default function Tuuliviimalaskuri() {
  const calculate = (values: number[]) => {
    const T = values[0];
    const V = values[1];

    if (V < 4.8 || T > 10) {
      return [
        {
          result: T,
          label: "Wind chill (not significant)",
          suffix: " °C",
          decimals: 1,
        },
      ];
    }

    const V016 = Math.pow(V, 0.16);
    const wc = 13.12 + 0.6215 * T - 11.37 * V016 + 0.3965 * T * V016;
    const diff = T - wc;

    return [
      {
        result: wc,
        label: "Wind chill temperature (feels like)",
        suffix: " °C",
        decimals: 1,
      },
      {
        result: diff,
        label: "Chilling effect of wind",
        suffix: " °C",
        decimals: 1,
      },
    ];
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <SimpleCalculator inputs={inputs} calculate={calculate} suffix=" " />
      <div className="text-xs text-gray-400 text-center">
        Formula: Environment Canada / WMO. Valid when T ≤ 10°C and wind &gt; 4.8
        km/h.
      </div>
    </div>
  );
}
