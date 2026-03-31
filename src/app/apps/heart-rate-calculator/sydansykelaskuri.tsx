"use client";
import { useState } from "react";

const ZONES = [
  {
    name: "Zone 1 – Recovery",
    pctMin: 50,
    pctMax: 60,
    color: "bg-blue-100 border-blue-300 text-blue-800",
    desc: "Lightest zone. Ideal for warm-ups, cool-downs, and active recovery.",
  },
  {
    name: "Zone 2 – Aerobic base",
    pctMin: 60,
    pctMax: 70,
    color: "bg-green-100 border-green-300 text-green-800",
    desc: "Most effective zone for fat burning. Improves aerobic endurance and metabolism.",
  },
  {
    name: "Zone 3 – Aerobic power",
    pctMin: 70,
    pctMax: 80,
    color: "bg-yellow-100 border-yellow-300 text-yellow-800",
    desc: "Improves aerobic capacity and muscular endurance. Good for longer training sessions.",
  },
  {
    name: "Zone 4 – Anaerobic threshold",
    pctMin: 80,
    pctMax: 90,
    color: "bg-orange-100 border-orange-300 text-orange-800",
    desc: "Heavy zone. Improves speed endurance and lactate threshold.",
  },
  {
    name: "Zone 5 – Maximum effort",
    pctMin: 90,
    pctMax: 100,
    color: "bg-red-100 border-red-300 text-red-800",
    desc: "Maximum performance. Used for interval training and speed work.",
  },
];

export default function Sydansykelaskuri() {
  const [age, setAge] = useState(30);
  const [customMax, setCustomMax] = useState<number | "">(190);
  const [useCustom, setUseCustom] = useState(false);
  const [restHR, setRestHR] = useState<number | "">(60);

  const formulaMax = 220 - age;
  const maxHR =
    useCustom && typeof customMax === "number" ? customMax : formulaMax;
  const restHRVal = typeof restHR === "number" ? restHR : 0;

  // Karvonen formula for zones
  const karvonenHR = (pct: number) =>
    Math.round(restHRVal + pct * (maxHR - restHRVal));

  const inputClass = "input input-bordered w-full";

  return (
    <div className="flex flex-col gap-5 w-full max-w-lg mx-auto">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
            Age (years)
          </label>
          <input
            type="number"
            min={10}
            max={99}
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className={inputClass}
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
            Resting HR (bpm)
          </label>
          <input
            type="number"
            min={30}
            max={120}
            value={restHR}
            onChange={(e) =>
              setRestHR(e.target.value === "" ? "" : Number(e.target.value))
            }
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="flex items-center gap-2 cursor-pointer select-none mb-2">
          <input
            type="checkbox"
            className="checkbox checkbox-sm"
            checked={useCustom}
            onChange={(e) => setUseCustom(e.target.checked)}
          />
          <span className="text-sm text-gray-700">
            Enter measured max heart rate
          </span>
        </label>
        {useCustom && (
          <input
            type="number"
            min={100}
            max={250}
            value={customMax}
            onChange={(e) =>
              setCustomMax(e.target.value === "" ? "" : Number(e.target.value))
            }
            placeholder="E.g. 185"
            className={inputClass}
          />
        )}
      </div>

      <div className="bg-base-200 rounded-xl p-3 flex gap-4 text-sm">
        <div className="text-center flex-1">
          <div className="text-2xl font-bold text-main">{maxHR}</div>
          <div className="text-xs text-gray-500">Max HR</div>
          {!useCustom && (
            <div className="text-xs text-gray-400">formula: 220 − {age}</div>
          )}
        </div>
        <div className="text-center flex-1">
          <div className="text-2xl font-bold text-main">{restHRVal}</div>
          <div className="text-xs text-gray-500">Resting HR</div>
        </div>
        <div className="text-center flex-1">
          <div className="text-2xl font-bold text-main">
            {maxHR - restHRVal}
          </div>
          <div className="text-xs text-gray-500">HR reserve</div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {ZONES.map((zone) => {
          const hrMin = karvonenHR(zone.pctMin / 100);
          const hrMax = karvonenHR(zone.pctMax / 100);
          return (
            <div
              key={zone.name}
              className={`rounded-xl border p-3 ${zone.color}`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-sm">{zone.name}</span>
                <span className="font-bold text-sm tabular-nums">
                  {hrMin}–{hrMax} bpm
                </span>
              </div>
              <p className="text-xs opacity-80">{zone.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
