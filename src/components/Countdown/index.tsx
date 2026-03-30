"use client";
import DateSelector from "@/components/DatePicker";
import React, { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: Date;
  targetDateName: string;
  allowUserSelection?: boolean;
}

function formatFinnishDate(date: Date) {
  return date.toLocaleDateString("fi-FI", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const CountdownUnit = ({
  value,
  label,
  highlight,
}: {
  value: number;
  label: string;
  highlight?: boolean;
}) => (
  <div
    className={`flex flex-col items-center justify-center rounded-2xl px-3 py-4 sm:px-5 sm:py-5 min-w-[70px] sm:min-w-[90px] shadow-sm transition-colors ${
      highlight
        ? "bg-primary text-primary-content"
        : "bg-base-200 text-base-content"
    }`}
  >
    <span className="font-mono text-4xl sm:text-5xl font-bold tabular-nums leading-none">
      {String(Math.max(0, value)).padStart(2, "0")}
    </span>
    <span className="text-[11px] sm:text-xs mt-2 uppercase tracking-widest opacity-70 font-medium">
      {label}
    </span>
  </div>
);

const Countdown: React.FC<CountdownProps> = ({
  targetDate,
  targetDateName,
  allowUserSelection,
}) => {
  const [target, setTarget] = useState(targetDate);
  const [timeLeft, setTimeLeft] = useState(target.getTime() - Date.now());

  useEffect(() => {
    setTimeLeft(target.getTime() - Date.now());
    const id = setInterval(() => {
      setTimeLeft(target.getTime() - Date.now());
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  const isPast = timeLeft <= 0;

  const totalMs =
    target.getTime() - targetDate.getTime() === 0
      ? target.getTime() - (target.getTime() - 365 * 24 * 3600 * 1000)
      : target.getTime() - Date.now();

  // Progress: rough percentage of year elapsed toward the target
  const oneYearMs = 365 * 24 * 3600 * 1000;
  const elapsed = oneYearMs - Math.max(0, timeLeft);
  const progress = Math.min(
    100,
    Math.max(0, Math.round((elapsed / oneYearMs) * 100)),
  );

  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  const totalDays = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">
          Aikaa {targetDateName.toLowerCase()}
        </p>
        <p className="text-base font-semibold text-base-content">
          📅 {formatFinnishDate(target)}
        </p>
      </div>

      {isPast ? (
        <div className="alert alert-success shadow-sm">
          <span className="text-lg">🎉</span>
          <span className="font-semibold">
            {targetDateName} on jo koittanut!
          </span>
        </div>
      ) : (
        <>
          {/* Countdown tiles */}
          <div className="flex flex-row gap-3 sm:gap-4 flex-wrap">
            <CountdownUnit value={days} label="päivää" highlight={days > 0} />
            <CountdownUnit value={hours} label="tuntia" />
            <CountdownUnit value={minutes} label="min" />
            <CountdownUnit value={seconds} label="sek" />
          </div>

          {/* Summary line */}
          <p className="text-sm text-gray-500">
            Yhteensä{" "}
            <span className="font-bold text-base-content">
              {totalDays.toLocaleString("fi-FI")} päivää
            </span>{" "}
            jäljellä
          </p>

          {/* Progress bar */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-xs text-gray-400">
              <span>Tänään</span>
              <span>{targetDateName}</span>
            </div>
            <progress
              className="progress progress-primary w-full h-3"
              value={
                100 -
                Math.min(
                  100,
                  Math.max(0, Math.round((timeLeft / oneYearMs) * 100)),
                )
              }
              max={100}
            />
          </div>
        </>
      )}

      {/* Date picker */}
      {allowUserSelection && (
        <div className="card border border-base-200 bg-base-100 shadow-sm mt-2">
          <div className="card-body p-4 gap-2">
            <p className="text-sm font-semibold">📆 Valitse oma päivämäärä</p>
            <DateSelector
              onDateChange={(date: Date) => setTarget(date)}
              initialDate={target}
              label="Päivämäärä"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Countdown;
