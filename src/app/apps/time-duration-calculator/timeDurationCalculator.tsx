"use client";
import { useState } from "react";

export default function TimeDurationCalculator() {
  const [h1, setH1] = useState(9);
  const [m1, setM1] = useState(0);
  const [h2, setH2] = useState(17);
  const [m2, setM2] = useState(30);
  const [mode, setMode] = useState<"between" | "add" | "subtract">("between");
  const [addH, setAddH] = useState(2);
  const [addM, setAddM] = useState(45);

  const calcBetween = () => {
    let totalMin = h2 * 60 + m2 - (h1 * 60 + m1);
    if (totalMin < 0) totalMin += 24 * 60;
    const hours = Math.floor(totalMin / 60);
    const minutes = totalMin % 60;
    const decimalHours = totalMin / 60;
    return { hours, minutes, totalMin, decimalHours };
  };

  const calcAddSubtract = () => {
    const startMin = h1 * 60 + m1;
    const delta = addH * 60 + addM;
    let resultMin = mode === "add" ? startMin + delta : startMin - delta;
    if (resultMin < 0) resultMin += 24 * 60;
    if (resultMin >= 24 * 60) resultMin -= 24 * 60;
    const rH = Math.floor(resultMin / 60);
    const rM = resultMin % 60;
    return { hours: rH, minutes: rM };
  };

  const between = calcBetween();
  const addSub = calcAddSubtract();

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Mode</span>
        </label>
        <select
          className="select select-bordered w-full"
          value={mode}
          onChange={(e) =>
            setMode(e.target.value as "between" | "add" | "subtract")
          }
        >
          <option value="between">Time Between Two Times</option>
          <option value="add">Add Duration to Time</option>
          <option value="subtract">Subtract Duration from Time</option>
        </select>
      </div>

      <div className="card bg-base-200 p-4">
        <h3 className="font-bold mb-3">
          {mode === "between" ? "Start Time" : "Starting Time"}
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xs">Hours (0-23)</span>
            </label>
            <input
              type="number"
              className="input input-bordered w-full"
              min={0}
              max={23}
              value={h1}
              onChange={(e) => setH1(Number(e.target.value))}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xs">Minutes (0-59)</span>
            </label>
            <input
              type="number"
              className="input input-bordered w-full"
              min={0}
              max={59}
              value={m1}
              onChange={(e) => setM1(Number(e.target.value))}
            />
          </div>
        </div>
      </div>

      {mode === "between" ? (
        <div className="card bg-base-200 p-4">
          <h3 className="font-bold mb-3">End Time</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xs">Hours (0-23)</span>
              </label>
              <input
                type="number"
                className="input input-bordered w-full"
                min={0}
                max={23}
                value={h2}
                onChange={(e) => setH2(Number(e.target.value))}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xs">Minutes (0-59)</span>
              </label>
              <input
                type="number"
                className="input input-bordered w-full"
                min={0}
                max={59}
                value={m2}
                onChange={(e) => setM2(Number(e.target.value))}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="card bg-base-200 p-4">
          <h3 className="font-bold mb-3">
            Duration to {mode === "add" ? "Add" : "Subtract"}
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xs">Hours</span>
              </label>
              <input
                type="number"
                className="input input-bordered w-full"
                min={0}
                max={99}
                value={addH}
                onChange={(e) => setAddH(Number(e.target.value))}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xs">Minutes</span>
              </label>
              <input
                type="number"
                className="input input-bordered w-full"
                min={0}
                max={59}
                value={addM}
                onChange={(e) => setAddM(Number(e.target.value))}
              />
            </div>
          </div>
        </div>
      )}

      <div className="card bg-base-200 p-5 text-center">
        {mode === "between" ? (
          <>
            <div className="text-4xl font-bold">
              {between.hours}h {between.minutes}m
            </div>
            <div className="text-sm opacity-70 mt-1">
              {between.totalMin} minutes • {between.decimalHours.toFixed(2)}{" "}
              decimal hours
            </div>
          </>
        ) : (
          <>
            <div className="text-sm opacity-70 mb-1">Result Time</div>
            <div className="text-4xl font-bold">
              {addSub.hours.toString().padStart(2, "0")}:
              {addSub.minutes.toString().padStart(2, "0")}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
