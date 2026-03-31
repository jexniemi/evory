"use client";
import { useState } from "react";

const MONTH_NAMES = [
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

const DAY_NAMES = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

function isLeapYear(year: number) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function getDaysInMonth(month: number, year: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstWeekday(month: number, year: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

export default function MonthMachine() {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [selected, setSelected] = useState(now.getMonth());

  const days = getDaysInMonth(selected, year);
  const firstWeekday = getFirstWeekday(selected, year);
  const totalDaysInYear = isLeapYear(year) ? 366 : 365;

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto gap-6">
      {/* Year selector */}
      <div className="flex items-center gap-3">
        <button
          className="btn btn-sm btn-ghost text-lg"
          onClick={() => setYear((y) => y - 1)}
        >
          ◀
        </button>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="input input-bordered input-sm w-24 text-center text-lg font-bold"
        />
        <button
          className="btn btn-sm btn-ghost text-lg"
          onClick={() => setYear((y) => y + 1)}
        >
          ▶
        </button>
      </div>

      <p className="text-sm text-gray-500">
        {isLeapYear(year) ? "🗓️ Leap year" : "📅 Regular year"} —{" "}
        {totalDaysInYear} days
      </p>

      {/* Month grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 w-full">
        {MONTH_NAMES.map((name, i) => {
          const d = getDaysInMonth(i, year);
          const active = i === selected;
          return (
            <button
              key={name}
              onClick={() => setSelected(i)}
              className={`flex flex-col items-center p-3 rounded-xl border-2 transition-all cursor-pointer select-none
                ${
                  active
                    ? "border-emerald-500 bg-emerald-50 shadow-md scale-[1.03]"
                    : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                }`}
            >
              <span
                className={`text-sm font-semibold ${active ? "text-emerald-700" : "text-gray-600"}`}
              >
                {name}
              </span>
              <span
                className={`text-2xl font-bold ${active ? "text-emerald-600" : "text-gray-900"}`}
              >
                {d}
              </span>
              <span className="text-xs text-gray-400">days</span>
            </button>
          );
        })}
      </div>

      {/* Mini calendar for selected month */}
      <div className="w-full bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
        <h3 className="text-lg font-bold text-center mb-4">
          {MONTH_NAMES[selected]} {year}
        </h3>
        <div className="grid grid-cols-7 gap-1 text-center text-sm max-w-xs mx-auto">
          {DAY_NAMES.map((d) => (
            <div key={d} className="font-semibold text-gray-400 py-1 text-xs">
              {d}
            </div>
          ))}
          {Array.from({ length: firstWeekday }).map((_, i) => (
            <div key={`e-${i}`} />
          ))}
          {Array.from({ length: days }).map((_, i) => {
            const dayNum = i + 1;
            const isToday =
              year === now.getFullYear() &&
              selected === now.getMonth() &&
              dayNum === now.getDate();
            const isWeekend =
              (firstWeekday + i) % 7 === 5 || (firstWeekday + i) % 7 === 6;
            return (
              <div
                key={dayNum}
                className={`py-1 rounded-lg text-sm
                  ${isToday ? "bg-emerald-500 text-white font-bold" : ""}
                  ${!isToday && isWeekend ? "text-red-400" : ""}
                  ${!isToday && !isWeekend ? "text-gray-700" : ""}`}
              >
                {dayNum}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
