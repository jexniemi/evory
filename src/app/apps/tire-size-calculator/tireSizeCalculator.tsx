"use client";
import { useState } from "react";

export default function TireSizeCalculator() {
  const [width, setWidth] = useState(225);
  const [aspect, setAspect] = useState(45);
  const [rim, setRim] = useState(17);

  const [width2, setWidth2] = useState(235);
  const [aspect2, setAspect2] = useState(40);
  const [rim2, setRim2] = useState(18);

  const calc = (w: number, a: number, r: number) => {
    const sidewall = w * (a / 100); // mm
    const diameter = sidewall * 2 + r * 25.4; // mm
    const diameterIn = diameter / 25.4;
    const circumference = Math.PI * diameter; // mm
    const circumferenceIn = circumference / 25.4;
    const revsPerMile = 1609344 / circumference;
    return {
      sidewall: sidewall / 25.4,
      diameter: diameterIn,
      circumference: circumferenceIn,
      revsPerMile,
    };
  };

  const t1 = calc(width, aspect, rim);
  const t2 = calc(width2, aspect2, rim2);
  const diamDiff = ((t2.diameter - t1.diameter) / t1.diameter) * 100;
  const speedDiff =
    ((t2.circumference - t1.circumference) / t1.circumference) * 100;

  const TireInput = ({
    label,
    w,
    a,
    r,
    setW,
    setA,
    setR,
  }: {
    label: string;
    w: number;
    a: number;
    r: number;
    setW: (n: number) => void;
    setA: (n: number) => void;
    setR: (n: number) => void;
  }) => (
    <div className="card bg-base-200 p-4">
      <h3 className="font-bold mb-3">{label}</h3>
      <div className="grid grid-cols-3 gap-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xs">Width (mm)</span>
          </label>
          <input
            type="number"
            className="input input-bordered input-sm w-full"
            value={w}
            onChange={(e) => setW(Number(e.target.value))}
            min={100}
            max={400}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xs">Aspect %</span>
          </label>
          <input
            type="number"
            className="input input-bordered input-sm w-full"
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            min={20}
            max={80}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xs">Rim (in)</span>
          </label>
          <input
            type="number"
            className="input input-bordered input-sm w-full"
            value={r}
            onChange={(e) => setR(Number(e.target.value))}
            min={12}
            max={24}
          />
        </div>
      </div>
      <div className="text-center mt-2 font-mono text-lg">
        {w}/{a}R{r}
      </div>
    </div>
  );

  const StatCard = ({
    label,
    v1,
    v2,
    unit,
  }: {
    label: string;
    v1: number;
    v2: number;
    unit: string;
  }) => (
    <div className="grid grid-cols-3 gap-2 text-sm">
      <div className="text-right font-mono">
        {v1.toFixed(1)} {unit}
      </div>
      <div className="text-center font-bold">{label}</div>
      <div className="text-left font-mono">
        {v2.toFixed(1)} {unit}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
      <TireInput
        label="Original Tire"
        w={width}
        a={aspect}
        r={rim}
        setW={setWidth}
        setA={setAspect}
        setR={setRim}
      />
      <TireInput
        label="Comparison Tire"
        w={width2}
        a={aspect2}
        r={rim2}
        setW={setWidth2}
        setA={setAspect2}
        setR={setRim2}
      />

      <div className="card bg-base-200 p-5">
        <h3 className="font-bold mb-3">Comparison</h3>
        <div className="flex flex-col gap-2">
          <StatCard
            label="Diameter"
            v1={t1.diameter}
            v2={t2.diameter}
            unit="in"
          />
          <StatCard
            label="Circumference"
            v1={t1.circumference}
            v2={t2.circumference}
            unit="in"
          />
          <StatCard
            label="Sidewall"
            v1={t1.sidewall}
            v2={t2.sidewall}
            unit="in"
          />
          <StatCard
            label="Revs/Mile"
            v1={t1.revsPerMile}
            v2={t2.revsPerMile}
            unit=""
          />
        </div>
        <div className="divider my-2" />
        <div className="text-center">
          <div
            className={`text-2xl font-bold ${Math.abs(diamDiff) <= 3 ? "text-success" : "text-warning"}`}
          >
            {diamDiff > 0 ? "+" : ""}
            {diamDiff.toFixed(1)}%
          </div>
          <div className="text-sm opacity-70">Diameter difference</div>
          <div className="text-xs opacity-50 mt-1">
            {Math.abs(speedDiff) > 0.1 &&
              `Speedometer will read ${speedDiff > 0 ? "slower" : "faster"} by ${Math.abs(speedDiff).toFixed(1)}%`}
          </div>
          {Math.abs(diamDiff) > 3 && (
            <div className="badge badge-warning mt-2 text-xs">
              Difference exceeds 3% — may cause issues
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
