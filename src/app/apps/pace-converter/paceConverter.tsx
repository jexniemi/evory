"use client";
import { useState } from "react";

function formatTime(totalSeconds: number): string {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = Math.round(totalSeconds % 60);
  if (h > 0) return `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function PaceConverter() {
  const [paceMin, setPaceMin] = useState(8);
  const [paceSec, setPaceSec] = useState(30);
  const [unit, setUnit] = useState<"mile" | "km">("mile");

  const totalSecPerUnit = paceMin * 60 + paceSec;
  const totalSecPerMile = unit === "mile" ? totalSecPerUnit : totalSecPerUnit * 1.60934;
  const totalSecPerKm = unit === "km" ? totalSecPerUnit : totalSecPerUnit / 1.60934;

  const mph = totalSecPerMile > 0 ? 3600 / totalSecPerMile : 0;
  const kph = totalSecPerKm > 0 ? 3600 / totalSecPerKm : 0;

  const mileMin = Math.floor(totalSecPerMile / 60);
  const mileSec = Math.round(totalSecPerMile % 60);
  const kmMin = Math.floor(totalSecPerKm / 60);
  const kmSec = Math.round(totalSecPerKm % 60);

  const races = [
    { name: "5K", km: 5 },
    { name: "10K", km: 10 },
    { name: "Half Marathon", km: 21.0975 },
    { name: "Marathon", km: 42.195 },
  ];

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
      <div className="form-control">
        <label className="label"><span className="label-text">Pace Unit</span></label>
        <select className="select select-bordered w-full" value={unit} onChange={(e) => setUnit(e.target.value as "mile" | "km")}>
          <option value="mile">Minutes per Mile</option>
          <option value="km">Minutes per Kilometer</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="form-control">
          <label className="label"><span className="label-text">Minutes</span></label>
          <input type="number" className="input input-bordered w-full" min={0} max={59} value={paceMin} onChange={(e) => setPaceMin(Number(e.target.value))} />
        </div>
        <div className="form-control">
          <label className="label"><span className="label-text">Seconds</span></label>
          <input type="number" className="input input-bordered w-full" min={0} max={59} value={paceSec} onChange={(e) => setPaceSec(Number(e.target.value))} />
        </div>
      </div>

      <div className="card bg-base-200 p-5 mt-2">
        <h3 className="text-lg font-bold mb-3">Converted Pace</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="stat bg-base-100 rounded-lg p-3">
            <div className="stat-title text-xs">Per Mile</div>
            <div className="stat-value text-xl">{mileMin}:{mileSec.toString().padStart(2, "0")}</div>
          </div>
          <div className="stat bg-base-100 rounded-lg p-3">
            <div className="stat-title text-xs">Per Kilometer</div>
            <div className="stat-value text-xl">{kmMin}:{kmSec.toString().padStart(2, "0")}</div>
          </div>
          <div className="stat bg-base-100 rounded-lg p-3">
            <div className="stat-title text-xs">Speed (mph)</div>
            <div className="stat-value text-xl">{mph.toFixed(1)}</div>
          </div>
          <div className="stat bg-base-100 rounded-lg p-3">
            <div className="stat-title text-xs">Speed (km/h)</div>
            <div className="stat-value text-xl">{kph.toFixed(1)}</div>
          </div>
        </div>
      </div>

      <div className="card bg-base-200 p-5">
        <h3 className="text-lg font-bold mb-3">Race Time Estimates</h3>
        <div className="grid grid-cols-2 gap-3">
          {races.map((race) => (
            <div key={race.name} className="stat bg-base-100 rounded-lg p-3">
              <div className="stat-title text-xs">{race.name}</div>
              <div className="stat-value text-lg">{formatTime(totalSecPerKm * race.km)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

