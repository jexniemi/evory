"use client";
import { useState } from "react";

const CYCLE_MIN = 90;
const FALL_ASLEEP_MIN = 15;

function parseTime(t: string): number {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function formatTime(totalMinutes: number): string {
  const norm = ((totalMinutes % 1440) + 1440) % 1440;
  const h = Math.floor(norm / 60);
  const m = norm % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

const QUALITY = [
  "😴 Heikko (4 sykliä)",
  "👍 Hyvä (5 sykliä)",
  "⭐ Optimaalinen (6 sykliä)",
];
const CYCLES = [4, 5, 6];

export default function Unisyklilaskuri() {
  const [mode, setMode] = useState<"toWake" | "toSleep">("toWake");
  const [time, setTime] = useState("06:30");

  const baseMin = parseTime(time);

  const options = CYCLES.map((cycles, i) => {
    const sleepMin = cycles * CYCLE_MIN;
    if (mode === "toWake") {
      // Enter wake-up time → when to go to sleep
      const bedtime = baseMin - FALL_ASLEEP_MIN - sleepMin;
      return {
        label: QUALITY[i],
        time: formatTime(bedtime),
        hours: sleepMin / 60,
        cycles,
      };
    } else {
      // Enter bedtime → when to wake up
      const wakeUp = baseMin + FALL_ASLEEP_MIN + sleepMin;
      return {
        label: QUALITY[i],
        time: formatTime(wakeUp),
        hours: sleepMin / 60,
        cycles,
      };
    }
  });

  const colors = ["bg-pastelblue", "bg-pastelgreen", "bg-pastelorange"];

  return (
    <div className="flex flex-col gap-6 w-full max-w-lg mx-auto">
      {/* Mode tabs */}
      <div className="tabs tabs-boxed bg-gray-100 p-1 rounded-xl flex">
        <button
          className={`tab flex-1 rounded-lg transition-all ${mode === "toWake" ? "tab-active bg-white shadow font-semibold" : ""}`}
          onClick={() => setMode("toWake")}
        >
          Halusin herätä klo…
        </button>
        <button
          className={`tab flex-1 rounded-lg transition-all ${mode === "toSleep" ? "tab-active bg-white shadow font-semibold" : ""}`}
          onClick={() => setMode("toSleep")}
        >
          Menen nukkumaan klo…
        </button>
      </div>

      {/* Time input */}
      <div>
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
          {mode === "toWake" ? "Heräämisaika" : "Nukkumaanmenoaika"}
        </label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="input input-bordered w-full text-xl font-bold text-center"
        />
      </div>

      {/* Sleep note */}
      <p className="text-xs text-gray-400 text-center -mt-2">
        Laskuri huomioi ~15 min nukahtamisviiveen ja 90 min unisyklit.
      </p>

      {/* Results */}
      <div className="flex flex-col gap-3">
        {options.map((opt, i) => (
          <div
            key={opt.cycles}
            className={`${colors[i]} rounded-2xl p-4 flex items-center justify-between`}
          >
            <div>
              <div className="font-semibold text-gray-800">{opt.label}</div>
              <div className="text-xs text-gray-500 mt-0.5">
                {opt.cycles} sykliä · {opt.hours.toFixed(1)} h unta
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900">{opt.time}</div>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-400 text-center">
        Unisyklit kestävät noin 90 minuuttia. Herääminen syklin lopussa on
        virkeämpää kuin kesken syklin.
      </p>
    </div>
  );
}
