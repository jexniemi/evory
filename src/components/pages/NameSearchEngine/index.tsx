"use client";
import React, { useState, useEffect } from "react";
import namedays from "@/data/namedays/suomalaiset.js";
import DateSelector from "@/components/DatePicker";

type Nameday = {
  date: string;
  day: number;
  month: number;
  name: string;
  subtype: string;
  type: string;
};

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

function findByDate(day: number, month: number): Nameday[] {
  return (namedays as Nameday[]).filter(
    (nd) => nd.day === day && nd.month === month,
  );
}

function searchByName(query: string): Nameday[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  return (namedays as Nameday[])
    .filter((nd) => nd.name.toLowerCase().startsWith(q))
    .slice(0, 24);
}

export default function NameSearchEngine() {
  const today = new Date();
  const [nameQuery, setNameQuery] = useState("");
  const [dateResults, setDateResults] = useState<Nameday[]>([]);
  const [selectedDate, setSelectedDate] = useState(today);

  useEffect(() => {
    setDateResults(findByDate(today.getDate(), today.getMonth()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const todayNames = findByDate(today.getDate(), today.getMonth());
  const nameResults = searchByName(nameQuery);
  const formattedToday = `${MONTHS_EN[today.getMonth()]} ${today.getDate()}`;
  const formattedSelected = `${selectedDate.getMonth() + 1}/${selectedDate.getDate()}`;

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Today's nameday banner */}
      <div className="rounded-xl bg-primary/5 border border-primary/20 p-4 flex gap-3 items-start">
        <span className="text-2xl">🗓️</span>
        <div>
          <p className="text-sm text-gray-500 mb-2">Today, {formattedToday}</p>
          {todayNames.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {todayNames.map((nd) => (
                <span
                  key={nd.name}
                  className="badge badge-primary badge-lg font-semibold text-sm px-3"
                >
                  {nd.name}
                </span>
              ))}
            </div>
          ) : (
            <p className="font-medium text-gray-500">No name days today</p>
          )}
        </div>
      </div>

      {/* Name search */}
      <div className="card border border-base-200 shadow-sm bg-base-100">
        <div className="card-body p-4 gap-3">
          <h2 className="font-bold text-base flex items-center gap-2">
            <span>🔍</span> Search name days by name
          </h2>
          <div className="relative">
            <input
              type="text"
              className="input input-bordered w-full pr-10"
              placeholder="E.g. Matthew, Anna, William…"
              value={nameQuery}
              onChange={(e) => setNameQuery(e.target.value)}
              autoComplete="off"
            />
            {nameQuery && (
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-ghost btn-xs btn-circle"
                onClick={() => setNameQuery("")}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {nameQuery &&
            (nameResults.length > 0 ? (
              <div className="flex flex-col gap-1">
                {nameResults.map((nd) => (
                  <div
                    key={nd.name + nd.date}
                    className="flex items-center justify-between rounded-lg bg-base-200 hover:bg-base-300 transition-colors px-3 py-2"
                  >
                    <span className="font-semibold">{nd.name}</span>
                    <span className="badge badge-ghost font-mono">
                      {nd.date}
                    </span>
                  </div>
                ))}
                {nameResults.length === 24 && (
                  <p className="text-xs text-gray-400 text-center pt-1">
                    Refine your search to see more results
                  </p>
                )}
              </div>
            ) : (
              <div className="alert alert-error">
                <span>
                  No name days found for &ldquo;{nameQuery}&rdquo;.
                  Please check the spelling.
                </span>
              </div>
            ))}
        </div>
      </div>

      {/* Date search */}
      <div className="card border border-base-200 shadow-sm bg-base-100">
        <div className="card-body p-4 gap-3">
          <h2 className="font-bold text-base flex items-center gap-2">
            <span>📅</span> Search name days by date
          </h2>
          <DateSelector
            onDateChange={(date) => {
              setSelectedDate(date);
              setDateResults(findByDate(date.getDate(), date.getMonth()));
            }}
          />
          {dateResults.length > 0 ? (
            <div>
              <p className="text-sm text-gray-500 mb-2">
                Name days for {formattedSelected}:
              </p>
              <div className="flex flex-wrap gap-2">
                {dateResults.map((nd) => (
                  <span
                    key={nd.name}
                    className="badge badge-outline badge-lg font-medium text-sm px-3"
                  >
                    {nd.name}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="alert alert-warning">
              <span>No name days found for the selected date.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
