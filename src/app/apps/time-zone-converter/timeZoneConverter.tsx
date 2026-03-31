"use client";
import { useState } from "react";

const timezones = [
  { value: -5, label: "EST (UTC−5)" },
  { value: -6, label: "CST (UTC−6)" },
  { value: -7, label: "MST (UTC−7)" },
  { value: -8, label: "PST (UTC−8)" },
  { value: -4, label: "AST (UTC−4)" },
  { value: -10, label: "HST (UTC−10)" },
  { value: -9, label: "AKST (UTC−9)" },
  { value: 0, label: "GMT (UTC+0)" },
  { value: 1, label: "CET (UTC+1)" },
  { value: 2, label: "EET (UTC+2)" },
  { value: 3, label: "MSK (UTC+3)" },
  { value: 4, label: "GST (UTC+4)" },
  { value: 5.5, label: "IST (UTC+5:30)" },
  { value: 7, label: "ICT (UTC+7)" },
  { value: 8, label: "CST China (UTC+8)" },
  { value: 9, label: "JST (UTC+9)" },
  { value: 9.5, label: "ACST (UTC+9:30)" },
  { value: 10, label: "AEST (UTC+10)" },
  { value: 12, label: "NZST (UTC+12)" },
];

function formatTime(totalMinutes: number): string {
  let mins = ((totalMinutes % 1440) + 1440) % 1440;
  const h = Math.floor(mins / 60);
  const m = Math.round(mins % 60);
  const period = h >= 12 ? "PM" : "AM";
  const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${h12}:${m.toString().padStart(2, "0")} ${period} (${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")})`;
}

function formatDiff(diff: number): string {
  const sign = diff >= 0 ? "+" : "−";
  const absDiff = Math.abs(diff);
  const hours = Math.floor(absDiff);
  const minutes = Math.round((absDiff - hours) * 60);
  if (minutes === 0) return `${sign}${hours} hour${hours !== 1 ? "s" : ""}`;
  return `${sign}${hours}h ${minutes}m`;
}

export default function TimeZoneConverter() {
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);
  const [fromTz, setFromTz] = useState(-5);
  const [toTz, setToTz] = useState(0);

  const sourceMinutes = hour * 60 + minute;
  const diff = toTz - fromTz;
  const convertedMinutes = sourceMinutes + diff * 60;

  const dayShift =
    convertedMinutes >= 1440
      ? " (next day)"
      : convertedMinutes < 0
        ? " (previous day)"
        : "";

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">
            Hour (0–23)
          </label>
          <input
            type="number"
            className="input input-bordered w-full"
            value={hour}
            onChange={(e) =>
              setHour(Math.max(0, Math.min(23, Number(e.target.value))))
            }
            min={0}
            max={23}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">
            Minute (0–59)
          </label>
          <input
            type="number"
            className="input input-bordered w-full"
            value={minute}
            onChange={(e) =>
              setMinute(Math.max(0, Math.min(59, Number(e.target.value))))
            }
            min={0}
            max={59}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">
            From Timezone
          </label>
          <select
            className="select select-bordered w-full"
            value={fromTz}
            onChange={(e) => setFromTz(Number(e.target.value))}
          >
            {timezones.map((tz) => (
              <option key={`from-${tz.label}`} value={tz.value}>
                {tz.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">
            To Timezone
          </label>
          <select
            className="select select-bordered w-full"
            value={toTz}
            onChange={(e) => setToTz(Number(e.target.value))}
          >
            {timezones.map((tz) => (
              <option key={`to-${tz.label}`} value={tz.value}>
                {tz.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-center bg-orange px-5 py-4 rounded-2xl">
          <p className="text-sm font-medium text-gray-600 mb-1">
            Converted Time
          </p>
          <p className="text-2xl font-bold dark:text-black">
            {formatTime(convertedMinutes)}
            {dayShift && (
              <span className="text-sm font-normal ml-2">{dayShift}</span>
            )}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="text-center bg-pastelgreen px-5 py-3 rounded-2xl">
            <p className="text-sm font-medium text-gray-600 mb-1">
              Source Time
            </p>
            <p className="text-lg font-bold dark:text-black">
              {formatTime(sourceMinutes)}
            </p>
          </div>
          <div className="text-center bg-pastelblue px-5 py-3 rounded-2xl">
            <p className="text-sm font-medium text-gray-600 mb-1">
              Time Difference
            </p>
            <p className="text-lg font-bold dark:text-black">
              {formatDiff(diff)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
