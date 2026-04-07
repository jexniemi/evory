"use client";
import { useState } from "react";

const INHERITANCE: Record<string, Record<string, string[]>> = {
  A: {
    A: ["A", "O"],
    B: ["A", "B", "AB", "O"],
    AB: ["A", "B", "AB"],
    O: ["A", "O"],
  },
  B: {
    A: ["A", "B", "AB", "O"],
    B: ["B", "O"],
    AB: ["A", "B", "AB"],
    O: ["B", "O"],
  },
  AB: {
    A: ["A", "B", "AB"],
    B: ["A", "B", "AB"],
    AB: ["A", "B", "AB"],
    O: ["A", "B"],
  },
  O: { A: ["A", "O"], B: ["B", "O"], AB: ["A", "B"], O: ["O"] },
};

const RH_INHERITANCE: Record<string, Record<string, string[]>> = {
  "+": { "+": ["+", "−"], "−": ["+", "−"] },
  "−": { "+": ["+", "−"], "−": ["−"] },
};

export default function BloodTypeCalculator() {
  const [parent1Type, setParent1Type] = useState("A");
  const [parent1Rh, setParent1Rh] = useState("+");
  const [parent2Type, setParent2Type] = useState("B");
  const [parent2Rh, setParent2Rh] = useState("+");

  const possibleTypes = INHERITANCE[parent1Type]?.[parent2Type] || [];
  const possibleRh = RH_INHERITANCE[parent1Rh]?.[parent2Rh] || [];

  const combinations = possibleTypes.flatMap((t) =>
    possibleRh.map((r) => `${t}${r}`),
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Parent 1</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Blood Type</span>
            </label>
            <select
              className="select select-bordered"
              value={parent1Type}
              onChange={(e) => setParent1Type(e.target.value)}
            >
              {["A", "B", "AB", "O"].map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rh Factor</span>
            </label>
            <select
              className="select select-bordered"
              value={parent1Rh}
              onChange={(e) => setParent1Rh(e.target.value)}
            >
              <option value="+">Positive (+)</option>
              <option value="−">Negative (−)</option>
            </select>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Parent 2</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Blood Type</span>
            </label>
            <select
              className="select select-bordered"
              value={parent2Type}
              onChange={(e) => setParent2Type(e.target.value)}
            >
              {["A", "B", "AB", "O"].map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rh Factor</span>
            </label>
            <select
              className="select select-bordered"
              value={parent2Rh}
              onChange={(e) => setParent2Rh(e.target.value)}
            >
              <option value="+">Positive (+)</option>
              <option value="−">Negative (−)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-sky-50 border border-sky-200 rounded-xl p-5">
        <h3 className="font-semibold text-sky-700 mb-3">
          Possible Child Blood Types
        </h3>
        <div className="flex flex-wrap gap-2">
          {combinations.map((combo) => (
            <span
              key={combo}
              className="badge badge-lg bg-sky-100 border-sky-300 text-sky-800 font-bold text-lg px-4 py-3"
            >
              {combo}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <h3 className="font-semibold text-amber-700 mb-2">Parents</h3>
        <p className="text-amber-800">
          {parent1Type}
          {parent1Rh} × {parent2Type}
          {parent2Rh} → {combinations.length} possible combination
          {combinations.length !== 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
}
