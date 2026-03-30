"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

// Wind chill formula (Environment Canada / WMO)
// Valid when T ≤ 10°C and V > 4.8 km/h
// Tw = 13.12 + 0.6215*T − 11.37*(V^0.16) + 0.3965*T*(V^0.16)

const inputs = [
  { label: "Lämpötila (°C)", initialValue: -5, step: 0.5 },
  { label: "Tuulen nopeus (km/h)", initialValue: 20, step: 1 },
];

function getFeelDesc(wc: number): string {
  if (wc > 10) return "Ei tuulivilua (T > 10°C)";
  if (wc > 0) return "Viileä";
  if (wc > -10) return "Kylmä — pue kerroksittain";
  if (wc > -28) return "Hyvin kylmä — paleltumisriski pitkällä altistuksella";
  if (wc > -40) return "Ankara pakkanen — paleltumisriski 10–30 min";
  return "Äärimmäinen pakkanen — paleltumisriski alle 2 min";
}

export default function Tuuliviimalaskuri() {
  const calculate = (values: number[]) => {
    const T = values[0];
    const V = values[1];

    if (V < 4.8 || T > 10) {
      return [
        {
          result: T,
          label: "Tuuliviima (ei merkittävä)",
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
        label: "Tuuliviimalämpötila (tuntuu kuin)",
        suffix: " °C",
        decimals: 1,
      },
      {
        result: diff,
        label: "Tuulen kylmistävä vaikutus",
        suffix: " °C",
        decimals: 1,
      },
    ];
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <SimpleCalculator inputs={inputs} calculate={calculate} suffix=" " />
      <div className="text-xs text-gray-400 text-center">
        Kaava: Environment Canada / WMO. Pätee kun T ≤ 10°C ja tuuli &gt; 4,8
        km/h.
      </div>
    </div>
  );
}
