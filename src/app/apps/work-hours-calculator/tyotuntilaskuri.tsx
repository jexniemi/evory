"use client";
import { useState } from "react";

function parseTimeToMin(t: string): number | null {
  if (!t) return null;
  const [h, m] = t.split(":").map(Number);
  if (isNaN(h) || isNaN(m)) return null;
  return h * 60 + m;
}

function formatDuration(totalMin: number): string {
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  if (m === 0) return `${h} h`;
  return `${h} h ${m} min`;
}

export default function Tyotuntilaskuri() {
  const [startTime, setStartTime] = useState("08:00");
  const [endTime, setEndTime] = useState("16:00");
  const [breakMin, setBreakMin] = useState(30);
  const [hourlyRate, setHourlyRate] = useState<number | "">(15);
  const [nightShift, setNightShift] = useState(false);

  const startMin = parseTimeToMin(startTime);
  const endMin = parseTimeToMin(endTime);

  let workedMin: number | null = null;
  if (startMin !== null && endMin !== null) {
    let diff = endMin - startMin;
    if (diff <= 0 || nightShift) diff += 1440; // crosses midnight
    workedMin = Math.max(0, diff - breakMin);
  }

  const workedHours = workedMin !== null ? workedMin / 60 : null;
  const earnings =
    workedHours !== null && typeof hourlyRate === "number" && hourlyRate > 0
      ? workedHours * hourlyRate
      : null;

  const inputClass = "input input-bordered w-full bg-white";
  const labelClass =
    "text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1";

  return (
    <div className="flex flex-col gap-5 w-full max-w-sm mx-auto">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
            Work start
          </label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
            Work end
          </label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
          Break (minutes)
        </label>
        <input
          type="number"
          min={0}
          max={480}
          value={breakMin}
          onChange={(e) => setBreakMin(Number(e.target.value))}
          className={inputClass}
        />
      </div>

      <div>
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
          Hourly rate ($) – optional
        </label>
        <input
          type="number"
          min={0}
          step={0.5}
          value={hourlyRate}
          onChange={(e) =>
            setHourlyRate(e.target.value === "" ? "" : Number(e.target.value))
          }
          placeholder="Leave empty if not needed"
          className={inputClass}
        />
      </div>

      <label className="flex items-center gap-2 cursor-pointer select-none">
        <input
          type="checkbox"
          className="checkbox checkbox-sm"
          checked={nightShift}
          onChange={(e) => setNightShift(e.target.checked)}
        />
        <span className="text-sm text-gray-700">
          Night shift (crosses midnight)
        </span>
      </label>

      {workedMin !== null && (
        <div className="flex flex-col gap-3 pt-2">
          <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
            <div className="text-3xl font-bold text-blue-700">
              {formatDuration(workedMin)}
            </div>
            <div className="text-sm text-gray-500 mt-1">
              {(workedMin / 60).toFixed(2)} hours
            </div>
            <div className="text-xs text-gray-400 mt-0.5">Hours worked</div>
          </div>
          {earnings !== null && (
            <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
              <div className="text-3xl font-bold text-green-700">
                ${earnings.toFixed(2)}
              </div>
              <div className="text-xs text-gray-400 mt-1">Earnings (gross)</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
