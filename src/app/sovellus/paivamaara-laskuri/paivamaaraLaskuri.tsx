"use client";
import { useState } from "react";

const DAYS_FI = [
  "sunnuntai",
  "maanantai",
  "tiistai",
  "keskiviikko",
  "torstai",
  "perjantai",
  "lauantai",
];
const MONTHS_FI = [
  "tammikuuta",
  "helmikuuta",
  "maaliskuuta",
  "huhtikuuta",
  "toukokuuta",
  "kesäkuuta",
  "heinäkuuta",
  "elokuuta",
  "syyskuuta",
  "lokakuuta",
  "marraskuuta",
  "joulukuuta",
];

function formatFinnish(d: Date) {
  return `${DAYS_FI[d.getDay()]} ${d.getDate()}. ${MONTHS_FI[d.getMonth()]} ${d.getFullYear()}`;
}

function daysBetween(a: Date, b: Date) {
  return Math.round(Math.abs(b.getTime() - a.getTime()) / 86400000);
}

function addDays(d: Date, n: number) {
  const result = new Date(d);
  result.setDate(result.getDate() + n);
  return result;
}

export default function PaivamaaraLaskuri() {
  const today = new Date().toISOString().split("T")[0];
  const [date1, setDate1] = useState(today);
  const [date2, setDate2] = useState("");
  const [baseDate, setBaseDate] = useState(today);
  const [daysToAdd, setDaysToAdd] = useState(30);

  const d1 = date1 ? new Date(date1 + "T12:00:00") : null;
  const d2 = date2 ? new Date(date2 + "T12:00:00") : null;

  const days = d1 && d2 ? daysBetween(d1, d2) : null;
  const weeks = days !== null ? (days / 7).toFixed(1) : null;
  const months = days !== null ? Math.floor(days / 30.437) : null;
  const remDays = days !== null ? days - (months ?? 0) * 30 : null;

  const base = baseDate ? new Date(baseDate + "T12:00:00") : null;
  const resultDate = base ? addDays(base, daysToAdd) : null;

  const inputClass = "input input-bordered w-full bg-white text-sm";
  const labelClass =
    "text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1";

  return (
    <div className="flex flex-col gap-10 w-full max-w-lg mx-auto">
      {/* Section 1: Difference */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
          Päivien määrä kahden päivämäärän välillä
        </h3>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div>
            <label className={labelClass}>Päivämäärä 1</label>
            <input
              type="date"
              value={date1}
              onChange={(e) => setDate1(e.target.value)}
              className={inputClass}
            />
            {d1 && (
              <p className="text-xs text-gray-400 mt-1">{formatFinnish(d1)}</p>
            )}
          </div>
          <div>
            <label className={labelClass}>Päivämäärä 2</label>
            <input
              type="date"
              value={date2}
              onChange={(e) => setDate2(e.target.value)}
              className={inputClass}
            />
            {d2 && (
              <p className="text-xs text-gray-400 mt-1">{formatFinnish(d2)}</p>
            )}
          </div>
        </div>

        {days !== null ? (
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-pastelblue rounded-2xl p-4 text-center">
              <div className="text-3xl font-bold text-gray-900">{days}</div>
              <div className="text-sm text-gray-600 mt-1">päivää</div>
            </div>
            <div className="bg-pastelgreen rounded-2xl p-4 text-center">
              <div className="text-3xl font-bold text-gray-900">{weeks}</div>
              <div className="text-sm text-gray-600 mt-1">viikkoa</div>
            </div>
            <div className="bg-pastelorange rounded-2xl p-4 text-center">
              <div className="text-3xl font-bold text-gray-900">{months}</div>
              <div className="text-sm text-gray-600 mt-1">kk {remDays} pv</div>
            </div>
          </div>
        ) : (
          <p className="text-sm text-gray-400 text-center py-4">
            Valitse molemmat päivämäärät
          </p>
        )}
      </div>

      {/* Section 2: Add/subtract days */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
          Lisää tai vähennä päiviä päivämäärästä
        </h3>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div>
            <label className={labelClass}>Aloituspäivä</label>
            <input
              type="date"
              value={baseDate}
              onChange={(e) => setBaseDate(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>
              Päivien määrä (neg. = takaisin)
            </label>
            <input
              type="number"
              value={daysToAdd}
              onChange={(e) => setDaysToAdd(Number(e.target.value))}
              className={inputClass}
            />
          </div>
        </div>

        {resultDate && (
          <div className="bg-pastelgreen rounded-2xl p-5 text-center">
            <div className="text-2xl font-bold text-gray-900">
              {formatFinnish(resultDate)}
            </div>
            <div className="text-sm text-gray-500 mt-1">
              {daysToAdd >= 0
                ? `${daysToAdd} päivää myöhemmin`
                : `${Math.abs(daysToAdd)} päivää aiemmin`}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
