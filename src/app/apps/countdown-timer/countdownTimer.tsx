"use client";
import { useState, useEffect, useRef, useCallback } from "react";

export default function CountdownTimer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (isRunning && totalSeconds > 0) {
      intervalRef.current = setInterval(() => {
        setTotalSeconds((prev) => {
          if (prev <= 1) {
            clearTimer();
            setIsRunning(false);
            setIsFinished(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return clearTimer;
  }, [isRunning, clearTimer]);

  // Flash effect for finished state
  useEffect(() => {
    if (isFinished) {
      const timeout = setTimeout(() => setIsFinished(false), 4000);
      return () => clearTimeout(timeout);
    }
  }, [isFinished]);

  const displayHours = Math.floor(totalSeconds / 3600);
  const displayMinutes = Math.floor((totalSeconds % 3600) / 60);
  const displaySeconds = totalSeconds % 60;

  const pad = (n: number) => n.toString().padStart(2, "0");

  const handleStart = () => {
    if (!isRunning && totalSeconds === 0) {
      const total = hours * 3600 + minutes * 60 + seconds;
      if (total <= 0) return;
      setTotalSeconds(total);
      setIsFinished(false);
      setIsRunning(true);
    } else if (!isRunning && totalSeconds > 0) {
      setIsFinished(false);
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    clearTimer();
    setIsRunning(false);
  };

  const handleReset = () => {
    clearTimer();
    setIsRunning(false);
    setTotalSeconds(0);
    setIsFinished(false);
  };

  const isActive = isRunning || totalSeconds > 0;

  return (
    <div className="flex flex-col gap-6">
      {/* Input Controls */}
      {!isActive && (
        <div className="flex flex-wrap items-end gap-4 justify-center">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Hours</span>
            </label>
            <input
              type="number"
              min={0}
              max={99}
              className="input input-bordered w-20 text-center"
              value={hours}
              onChange={(e) =>
                setHours(Math.max(0, Math.min(99, Number(e.target.value) || 0)))
              }
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Minutes</span>
            </label>
            <input
              type="number"
              min={0}
              max={59}
              className="input input-bordered w-20 text-center"
              value={minutes}
              onChange={(e) =>
                setMinutes(
                  Math.max(0, Math.min(59, Number(e.target.value) || 0)),
                )
              }
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Seconds</span>
            </label>
            <input
              type="number"
              min={0}
              max={59}
              className="input input-bordered w-20 text-center"
              value={seconds}
              onChange={(e) =>
                setSeconds(
                  Math.max(0, Math.min(59, Number(e.target.value) || 0)),
                )
              }
            />
          </div>
        </div>
      )}

      {/* Countdown Display */}
      <div
        className={`bg-base-200 p-8 rounded-lg text-center transition-all duration-300 ${
          isFinished ? "animate-pulse bg-success/30" : ""
        }`}
      >
        <div
          className={`text-6xl sm:text-7xl font-mono font-bold tracking-wider ${
            isFinished
              ? "text-success"
              : totalSeconds <= 10 && totalSeconds > 0 && isRunning
                ? "text-error"
                : ""
          }`}
        >
          {pad(displayHours)}:{pad(displayMinutes)}:{pad(displaySeconds)}
        </div>
        {isFinished && (
          <p className="text-success text-xl font-semibold mt-4 animate-bounce">
            ⏰ Time&apos;s up!
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3 justify-center">
        {!isRunning ? (
          <button
            className="btn btn-primary min-w-[120px]"
            onClick={handleStart}
            disabled={
              !isActive && hours === 0 && minutes === 0 && seconds === 0
            }
          >
            {totalSeconds > 0 ? "▶ Resume" : "▶ Start"}
          </button>
        ) : (
          <button
            className="btn btn-secondary min-w-[120px]"
            onClick={handlePause}
          >
            ⏸ Pause
          </button>
        )}
        <button
          className="btn btn-error min-w-[120px]"
          onClick={handleReset}
          disabled={!isActive && !isFinished}
        >
          ↺ Reset
        </button>
      </div>

      {/* Quick Presets */}
      {!isActive && (
        <div className="flex flex-wrap gap-2 justify-center">
          <span className="text-sm opacity-70 self-center mr-1">Quick:</span>
          {[
            { label: "1 min", h: 0, m: 1, s: 0 },
            { label: "5 min", h: 0, m: 5, s: 0 },
            { label: "10 min", h: 0, m: 10, s: 0 },
            { label: "15 min", h: 0, m: 15, s: 0 },
            { label: "25 min", h: 0, m: 25, s: 0 },
            { label: "1 hour", h: 1, m: 0, s: 0 },
          ].map((preset) => (
            <button
              key={preset.label}
              className="btn btn-outline btn-sm"
              onClick={() => {
                setHours(preset.h);
                setMinutes(preset.m);
                setSeconds(preset.s);
              }}
            >
              {preset.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
