"use client";
import { useState } from "react";
import CountUpResult from "@/components/CountUpResult/CountUpResult";

export default function AgeCalculator() {
  const today = new Date();
  const [birthYear, setBirthYear] = useState(1990);
  const [birthMonth, setBirthMonth] = useState(1);
  const [birthDay, setBirthDay] = useState(1);

  const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  const totalDays = Math.floor(
    (today.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24),
  );
  const totalWeeks = Math.floor(totalDays / 7);
  const totalMonths = years * 12 + months;

  const results =
    birthDate <= today
      ? [
          { end: years, label: "Vuosia", suffix: " v" },
          { end: months, label: "Kuukausia", suffix: " kk" },
          { end: days, label: "Päiviä", suffix: " pv" },
          { end: totalDays, label: "Päiviä yhteensä", suffix: " pv" },
          { end: totalWeeks, label: "Viikkoja yhteensä", suffix: " vko" },
          { end: totalMonths, label: "Kuukausia yhteensä", suffix: " kk" },
        ]
      : [];

  const months_fi = [
    "Tammikuu",
    "Helmikuu",
    "Maaliskuu",
    "Huhtikuu",
    "Toukokuu",
    "Kesäkuu",
    "Heinäkuu",
    "Elokuu",
    "Syyskuu",
    "Lokakuu",
    "Marraskuu",
    "Joulukuu",
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">Päivä</label>
          <select
            className="select select-bordered w-full"
            value={birthDay}
            onChange={(e) => setBirthDay(Number(e.target.value))}
          >
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">Kuukausi</label>
          <select
            className="select select-bordered w-full"
            value={birthMonth}
            onChange={(e) => setBirthMonth(Number(e.target.value))}
          >
            {months_fi.map((name, i) => (
              <option key={i + 1} value={i + 1}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">Vuosi</label>
          <input
            type="number"
            className="input input-bordered w-full"
            value={birthYear}
            onChange={(e) => setBirthYear(Number(e.target.value))}
            min={1900}
            max={today.getFullYear()}
          />
        </div>
      </div>

      {results.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          {results.map((r, i) => (
            <CountUpResult
              key={i}
              end={r.end}
              label={r.label}
              suffix={r.suffix}
            />
          ))}
        </div>
      )}
    </div>
  );
}
