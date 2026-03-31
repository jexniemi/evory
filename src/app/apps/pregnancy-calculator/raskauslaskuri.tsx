"use client";
import { useState } from "react";

const DAYS_EN = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const MONTHS_EN = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function addWeeks(d: Date, weeks: number) {
  const r = new Date(d);
  r.setDate(r.getDate() + weeks * 7);
  return r;
}

function formatDate(d: Date) {
  return `${DAYS_EN[d.getDay()]}, ${MONTHS_EN[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

function weeksBetween(a: Date, b: Date) {
  return (b.getTime() - a.getTime()) / (7 * 24 * 3600 * 1000);
}

export default function Raskauslaskuri() {
  const today = new Date().toISOString().split("T")[0];
  const [lmpDate, setLmpDate] = useState(today);
  const [mode, setMode] = useState<"lmp" | "duedate">("lmp");
  const [dueInput, setDueInput] = useState("");

  let lmp: Date | null = null;
  let dueDate: Date | null = null;

  if (mode === "lmp" && lmpDate) {
    lmp = new Date(lmpDate + "T12:00:00");
    dueDate = addWeeks(lmp, 40);
  } else if (mode === "duedate" && dueInput) {
    dueDate = new Date(dueInput + "T12:00:00");
    lmp = addWeeks(dueDate, -40);
  }

  const now = new Date();
  const currentWeekRaw = lmp ? weeksBetween(lmp, now) : null;
  const currentWeek =
    currentWeekRaw !== null ? Math.max(0, Math.floor(currentWeekRaw)) : null;
  const currentDay =
    currentWeekRaw !== null
      ? Math.max(0, Math.floor(currentWeekRaw * 7))
      : null;
  const daysLeft = dueDate
    ? Math.ceil((dueDate.getTime() - now.getTime()) / 86400000)
    : null;

  const trimester =
    currentWeek === null
      ? null
      : currentWeek < 13
        ? "1st trimester (wk 1–12)"
        : currentWeek < 27
          ? "2nd trimester (wk 13–27)"
          : "3rd trimester (wk 28–40)";

  const milestones = lmp
    ? [
        { week: 12, label: "First ultrasound (usually wk 11–14)" },
        { week: 20, label: "Anatomy scan (wk 18–21)" },
        { week: 28, label: "Third trimester begins" },
        { week: 36, label: "Full-term pregnancy begins" },
        { week: 40, label: "Due date" },
      ].map((m) => ({ ...m, date: addWeeks(lmp!, m.week) }))
    : [];

  return (
    <div className="flex flex-col gap-6 w-full max-w-lg mx-auto">
      {/* Mode selector */}
      <div className="tabs tabs-boxed bg-gray-100 p-1 rounded-xl flex">
        <button
          className={`tab flex-1 rounded-lg transition-all ${mode === "lmp" ? "tab-active bg-white shadow font-semibold" : ""}`}
          onClick={() => setMode("lmp")}
        >
          Last menstrual period date
        </button>
        <button
          className={`tab flex-1 rounded-lg transition-all ${mode === "duedate" ? "tab-active bg-white shadow font-semibold" : ""}`}
          onClick={() => setMode("duedate")}
        >
          Due date known
        </button>
      </div>

      {mode === "lmp" ? (
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
            First day of last menstrual period
          </label>
          <input
            type="date"
            value={lmpDate}
            onChange={(e) => setLmpDate(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>
      ) : (
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
            Due date (estimated delivery date)
          </label>
          <input
            type="date"
            value={dueInput}
            onChange={(e) => setDueInput(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>
      )}

      {dueDate && currentWeek !== null && (
        <>
          {/* Key stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-pink-50 border border-pink-200 rounded-2xl p-4 text-center">
              <div className="text-3xl font-bold text-pink-600">
                Wk {currentWeek}
              </div>
              <div className="text-xs text-gray-500 mt-1">Pregnancy week</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">
                {daysLeft !== null && daysLeft > 0
                  ? `${daysLeft} d`
                  : daysLeft === 0
                    ? "Today!"
                    : "Passed"}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Days until due date
              </div>
            </div>
          </div>

          <div className="bg-base-200 rounded-xl p-4 flex flex-col gap-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Due date</span>
              <span className="font-semibold">{formatDate(dueDate)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Day of pregnancy</span>
              <span className="font-semibold">{currentDay}. day / 280</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Trimester</span>
              <span className="font-semibold">{trimester}</span>
            </div>
          </div>

          {/* Progress bar */}
          <div>
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Week 1</span>
              <span>
                {Math.min(100, Math.round((currentWeek / 40) * 100))}%
              </span>
              <span>Week 40</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-pink-400 h-3 rounded-full transition-all"
                style={{ width: `${Math.min(100, (currentWeek / 40) * 100)}%` }}
              />
            </div>
          </div>

          {/* Milestones */}
          <div>
            <h4 className="text-sm font-semibold text-gray-600 mb-2">
              Key milestones
            </h4>
            <div className="flex flex-col gap-1.5">
              {milestones.map((m) => {
                const passed = currentWeek >= m.week;
                return (
                  <div
                    key={m.week}
                    className={`flex items-center gap-3 p-2.5 rounded-lg text-sm ${passed ? "bg-green-50 border border-green-200" : "bg-gray-50 border border-gray-100"}`}
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${passed ? "bg-green-400 text-white" : "bg-gray-300 text-gray-600"}`}
                    >
                      {passed ? "✓" : m.week}
                    </span>
                    <div>
                      <span className="font-medium">{m.label}</span>
                      <span className="text-gray-400 ml-2">
                        {formatDate(m.date)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
