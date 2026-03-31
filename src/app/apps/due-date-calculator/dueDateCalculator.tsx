"use client";
import { useState } from "react";
import CountUpResult from "@/components/CountUpResult/CountUpResult";

export default function DueDateCalculator() {
  const today = new Date();
  const [lmpYear, setLmpYear] = useState(today.getFullYear());
  const [lmpMonth, setLmpMonth] = useState(today.getMonth() + 1);
  const [lmpDay, setLmpDay] = useState(today.getDate());

  const lmpDate = new Date(lmpYear, lmpMonth - 1, lmpDay);
  const dueDate = new Date(lmpDate.getTime() + 280 * 24 * 60 * 60 * 1000);

  const diffMs = today.getTime() - lmpDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const currentWeek = Math.floor(diffDays / 7);
  const currentDay = diffDays % 7;

  const daysRemaining = Math.max(
    0,
    Math.ceil((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)),
  );

  let trimester = "";
  if (currentWeek < 0 || diffDays < 0) {
    trimester = "Not yet pregnant";
  } else if (currentWeek <= 12) {
    trimester = "1st Trimester (Weeks 1–12)";
  } else if (currentWeek <= 27) {
    trimester = "2nd Trimester (Weeks 13–27)";
  } else if (currentWeek <= 42) {
    trimester = "3rd Trimester (Weeks 28–40+)";
  } else {
    trimester = "Past due date";
  }

  const monthNames = [
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

  const dueDateStr = `${monthNames[dueDate.getMonth()]} ${dueDate.getDate()}, ${dueDate.getFullYear()}`;

  const isValid = lmpDate <= today && diffDays >= 0 && diffDays <= 300;

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">Month</label>
          <select
            className="select select-bordered w-full"
            value={lmpMonth}
            onChange={(e) => setLmpMonth(Number(e.target.value))}
          >
            {monthNames.map((name, i) => (
              <option key={i + 1} value={i + 1}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">Day</label>
          <select
            className="select select-bordered w-full"
            value={lmpDay}
            onChange={(e) => setLmpDay(Number(e.target.value))}
          >
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">Year</label>
          <input
            type="number"
            className="input input-bordered w-full"
            value={lmpYear}
            onChange={(e) => setLmpYear(Number(e.target.value))}
            min={today.getFullYear() - 1}
            max={today.getFullYear()}
          />
        </div>
      </div>

      {isValid && (
        <div className="flex flex-col gap-4">
          <div className="text-center bg-orange px-5 py-4 rounded-2xl">
            <p className="text-sm font-medium text-gray-600 mb-1">
              Estimated Due Date
            </p>
            <p className="text-2xl font-bold dark:text-black">{dueDateStr}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <CountUpResult
              end={currentWeek}
              label="Current Week"
              suffix={` weeks, ${currentDay} days`}
            />
            <CountUpResult
              end={daysRemaining}
              label="Days Remaining"
              suffix=" days"
            />
          </div>

          <div className="text-center bg-pastelgreen px-5 py-3 rounded-2xl">
            <p className="text-sm font-medium text-gray-600 mb-1">Trimester</p>
            <p className="text-lg font-bold dark:text-black">{trimester}</p>
          </div>
        </div>
      )}

      {!isValid && diffDays > 300 && (
        <div className="text-center text-red-500 font-medium">
          The date entered is too far in the past. Please enter a recent date.
        </div>
      )}
    </div>
  );
}
