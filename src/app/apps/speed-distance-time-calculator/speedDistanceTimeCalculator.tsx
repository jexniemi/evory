"use client";

import { useState } from "react";

type Mode = "speed" | "distance" | "time";

const MODES: { mode: Mode; label: string; desc: string }[] = [
  { mode: "speed", label: "Calculate Speed", desc: "I know distance and time" },
  {
    mode: "distance",
    label: "Calculate Distance",
    desc: "I know speed and time",
  },
  { mode: "time", label: "Calculate Time", desc: "I know speed and distance" },
];

function formatTime(hours: number): string {
  if (!isFinite(hours) || hours <= 0) return "—";
  const h = Math.floor(hours);
  const m = Math.round((hours - h) * 60);
  if (h === 0) return `${m} min`;
  if (m === 0) return `${h} hr`;
  return `${h} hr ${m} min`;
}

export default function SpeedDistanceTimeCalculator() {
  const [mode, setMode] = useState<Mode>("speed");
  const [distance, setDistance] = useState(100);
  const [time, setTime] = useState(1);
  const [speed, setSpeed] = useState(100);

  const calcSpeed = mode === "speed" ? distance / time : speed;
  const calcDistance = mode === "distance" ? speed * time : distance;
  const calcTime = mode === "time" ? distance / speed : time;

  const resultSpeed = calcSpeed;
  const resultDistance = calcDistance;
  const resultTime = calcTime;

  return (
    <div className="max-w-lg mx-auto space-y-5 p-4">
      {/* Mode selector */}
      <div className="grid grid-cols-3 gap-2">
        {MODES.map(({ mode: m, label }) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`btn btn-sm ${mode === m ? "btn-primary" : "btn-ghost border border-base-300"}`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Inputs */}
      <div className="space-y-3">
        {mode !== "speed" && (
          <div>
            <label className="label">
              <span className="label-text font-medium">Speed (km/h)</span>
            </label>
            <input
              type="number"
              className="input input-bordered w-full"
              value={speed}
              min={0}
              onChange={(e) => setSpeed(parseFloat(e.target.value) || 0)}
            />
          </div>
        )}
        {mode !== "distance" && (
          <div>
            <label className="label">
              <span className="label-text font-medium">Distance (km)</span>
            </label>
            <input
              type="number"
              className="input input-bordered w-full"
              value={distance}
              min={0}
              onChange={(e) => setDistance(parseFloat(e.target.value) || 0)}
            />
          </div>
        )}
        {mode !== "time" && (
          <div>
            <label className="label">
              <span className="label-text font-medium">Time (hours)</span>
            </label>
            <input
              type="number"
              className="input input-bordered w-full"
              value={time}
              min={0}
              step={0.25}
              onChange={(e) => setTime(parseFloat(e.target.value) || 0)}
            />
          </div>
        )}
      </div>

      {/* Results */}
      <div className="space-y-2">
        {mode === "speed" && (
          <>
            <ResultCard
              label="Speed"
              color="amber"
              values={[
                {
                  value: `${Math.round(resultSpeed * 10) / 10} km/h`,
                  note: "kilometres per hour",
                },
                {
                  value: `${Math.round(resultSpeed * 0.6214 * 10) / 10} mph`,
                  note: "miles per hour",
                },
                {
                  value: `${Math.round((resultSpeed / 3.6) * 10) / 10} m/s`,
                  note: "metres per second",
                },
              ]}
            />
            <ResultCard
              label="Journey time summary"
              color="sky"
              values={[
                { value: formatTime(resultTime), note: "duration" },
                { value: `${Math.round(resultDistance)} km`, note: "distance" },
              ]}
            />
          </>
        )}
        {mode === "distance" && (
          <ResultCard
            label="Distance"
            color="amber"
            values={[
              {
                value: `${Math.round(resultDistance * 10) / 10} km`,
                note: "kilometres",
              },
              {
                value: `${Math.round(resultDistance * 0.6214 * 10) / 10} miles`,
                note: "miles",
              },
              { value: formatTime(resultTime), note: "at given speed" },
            ]}
          />
        )}
        {mode === "time" && (
          <ResultCard
            label="Travel Time"
            color="amber"
            values={[
              { value: formatTime(resultTime), note: "hours and minutes" },
              {
                value: `${Math.round(resultTime * 60)} min total`,
                note: "total minutes",
              },
              {
                value: `${Math.round(resultTime * 10) / 10} hours`,
                note: "decimal hours",
              },
            ]}
          />
        )}
      </div>
    </div>
  );
}

function ResultCard({
  label,
  color,
  values,
}: {
  label: string;
  color: "amber" | "sky";
  values: { value: string; note: string }[];
}) {
  const colorClasses =
    color === "amber"
      ? "bg-amber-50 border-amber-200 border-l-amber-400 text-amber-700 text-amber-900"
      : "bg-sky-50 border-sky-200 border-l-sky-400 text-sky-700 text-sky-900";

  const [bg, border, accent, labelColor, valueColor] = colorClasses.split(" ");

  return (
    <div
      className={`p-4 rounded-lg ${bg} border ${border} border-l-4 ${accent}`}
    >
      <p className={`text-xs font-medium ${labelColor} mb-2`}>{label}</p>
      <div className="space-y-1">
        {values.map(({ value, note }, i) => (
          <div key={i} className="flex items-baseline justify-between">
            <span className={`text-xl font-bold ${valueColor}`}>{value}</span>
            <span className={`text-xs ${labelColor}`}>{note}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
