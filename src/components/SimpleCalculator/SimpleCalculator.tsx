"use client";

import CountUp from "react-countup";
import DropdownInput from "@/components/common/DropdownInput/DropdownInput";
import Label from "@/components/common/Label/Label";
import { InputHTMLAttributes, useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";

const SimpleChart = dynamic(
  () => import("@/components/SimpleCalculator/SimpleChart"),
  {
    ssr: false,
    loading: () => (
      <div className="h-72 animate-pulse bg-base-200 rounded-xl" />
    ),
  },
);

/* ------------------------------------------------------------------ */
/*  Types – fully backward-compatible with existing consumers          */
/* ------------------------------------------------------------------ */

interface NumberInputType {
  label: string;
  initialValue: number;
  step?: InputHTMLAttributes<HTMLInputElement>["step"];
}

interface DropdownInputType {
  label: string;
  values: number[];
  labels?: string[];
}

interface Props {
  inputs: Array<NumberInputType | DropdownInputType>;
  calculate: (values: number[]) => Results;
  header?: string;
  extradata?: string;
  suffix?: string;
  resultButtonStyle?: string;
}

type Results = Array<{
  result: number;
  label: string;
  suffix?: string;
  decimals?: number;
}>;

/* ------------------------------------------------------------------ */
/*  Visual constants                                                   */
/* ------------------------------------------------------------------ */

const RESULT_COLORS = [
  "bg-amber-50 border border-amber-200 border-l-4 border-l-amber-400 shadow-sm",
  "bg-sky-50 border border-sky-200 border-l-4 border-l-sky-400 shadow-sm",
  "bg-violet-50 border border-violet-200 border-l-4 border-l-violet-400 shadow-sm",
  "bg-teal-50 border border-teal-200 border-l-4 border-l-teal-400 shadow-sm",
  "bg-orange-50 border border-orange-200 border-l-4 border-l-orange-400 shadow-sm",
];


/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function getCountUpFixes(resultSuffix: string): {
  prefix: string;
  suffix: string;
} {
  const trimmed = resultSuffix.trim();
  if (trimmed === "$" || trimmed === "€" || trimmed === "£") {
    return { prefix: trimmed, suffix: "" };
  }
  return { prefix: "", suffix: resultSuffix };
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function SimpleCalculator({
  inputs,
  calculate,
  extradata,
  header,
  suffix = "$",
  resultButtonStyle = "",
}: Props) {
  const init = inputs.map((input) =>
    "initialValue" in input ? input.initialValue : input.values[0],
  );
  const [values, setValues] = useState<number[]>(init);
  const [rawValues, setRawValues] = useState<string[]>(init.map(String));
  const [result, setResult] = useState<Results>(calculate(init));
  const [showGraph, setShowGraph] = useState(false);
  const [graphInputIdx, setGraphInputIdx] = useState(() =>
    Math.max(
      0,
      inputs.findIndex((i) => "initialValue" in i),
    ),
  );

  useEffect(() => {
    const doCalculate = async () => {
      const r = await calculate(values);
      setResult(r);
    };
    doCalculate();
  }, [extradata, values, calculate]);

  const handleInput = (index: number, value: number) => {
    setValues((prev) => prev.map((v, i) => (i === index ? value : v)));
  };

  const handleRawInput = (index: number, raw: string, input: NumberInputType) => {
    setRawValues((prev) => prev.map((v, i) => (i === index ? raw : v)));
    const parsed = input.step ? parseFloat(raw) : parseInt(raw);
    const num = isNaN(parsed) ? 0 : parsed;
    setValues((prev) => prev.map((v, i) => (i === index ? num : v)));
  };

  /* Numeric inputs list (for graph selector) */
  const numericInputs = inputs
    .map((input, idx) => ({ input: input as NumberInputType, idx }))
    .filter(({ input }) => "initialValue" in input);
  const hasNumericInputs = numericInputs.length > 0;

  /* ---- Graph data ---- */
  const graphData = useMemo(() => {
    if (!showGraph || !hasNumericInputs)
      return { data: [], xKey: "", yKeys: [] as string[] };

    const inputIdx =
      graphInputIdx >= 0 ? graphInputIdx : (numericInputs[0]?.idx ?? 0);
    const input = inputs[inputIdx];
    if (!("initialValue" in input))
      return { data: [], xKey: "", yKeys: [] as string[] };

    const currentVal = values[inputIdx];
    const baseVal = Math.max(
      Math.abs(input.initialValue),
      Math.abs(currentVal),
      1,
    );
    const steps = 40;
    const min = 0;
    const max = baseVal * 3;
    const stepSize = (max - min) / steps;

    const resultIdxs = result
      ? result.slice(0, 3).map((_, i) => i)
      : [0];

    const data: Record<string, number>[] = [];
    const yKeysSet = new Set<string>();

    for (let i = 0; i <= steps; i++) {
      const xVal = Math.round((min + stepSize * i) * 100) / 100;
      const testValues = [...values];
      testValues[inputIdx] = xVal;
      try {
        const results = calculate(testValues);
        const point: Record<string, number> = { [input.label]: xVal };
        resultIdxs.forEach((ri) => {
          if (results[ri] && isFinite(results[ri].result)) {
            const key = results[ri].label.replace(/:?\s*$/, "").trim();
            point[key] = Math.round(results[ri].result * 100) / 100;
            yKeysSet.add(key);
          }
        });
        if (Object.keys(point).length > 1) data.push(point);
      } catch {
        /* skip invalid data points */
      }
    }

    return { data, xKey: input.label, yKeys: Array.from(yKeysSet) };
  }, [
    showGraph,
    values,
    graphInputIdx,
    inputs,
    calculate,
    result,
    hasNumericInputs,
    numericInputs,
  ]);

  /* ---- Render ---- */
  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto">
      {header && (
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold text-base-content/80">{header}</h2>
        </div>
      )}

      {/* ── Inputs Card ── */}
      <div className="w-full card bg-base-200/40 border border-base-300 mb-6">
        <div className="card-body p-4 sm:p-6 gap-5">
          {inputs.map((input, idx) => {
            if ("initialValue" in input) {
              return (
                <div key={input.label} className="w-full">
                  <Label text={input.label} />
                  <input
                    type="number"
                    className="input input-bordered w-full font-medium"
                    step={input.step}
                    value={rawValues[idx]}
                    onChange={(e) => handleRawInput(idx, e.target.value, input)}
                    onBlur={() => {
                      // On blur, if empty or just "-", reset to 0
                      if (rawValues[idx] === "" || rawValues[idx] === "-") {
                        setRawValues((prev) =>
                          prev.map((v, i) => (i === idx ? "0" : v)),
                        );
                      }
                    }}
                  />
                </div>
              );
            }

            return (
              <div key={input.label} className="w-full">
                <Label text={input.label} />
                <DropdownInput
                  values={input.values}
                  selectedValue={values[idx]}
                  setSelectedValue={(value) =>
                    handleInput(idx, Number(value))
                  }
                  labels={input.labels}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Results Grid ── */}
      {result && result.length > 0 && (
        <div
          className={`w-full grid gap-3 mb-6 ${
            result.length === 1
              ? "grid-cols-1"
              : "grid-cols-1 sm:grid-cols-2"
          }`}
        >
          {result.map((res, index) => {
            const displaySuffix =
              res.suffix !== undefined ? res.suffix : suffix;
            const decimals = res.decimals ?? 2;
            const isHero = result.length > 1 && index === 0;

            const { prefix, suffix: cSuffix } =
              getCountUpFixes(displaySuffix);

            return (
              <div
                key={res.label}
                className={`card transition-all duration-300 ${
                  resultButtonStyle
                    ? resultButtonStyle
                    : RESULT_COLORS[index % RESULT_COLORS.length]
                } ${isHero ? "sm:col-span-2" : ""}`}
              >
                <div
                  className={`card-body ${
                    isHero ? "p-5" : "p-4"
                  } items-center text-center`}
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                    {res.label}
                  </p>
                  <CountUp
                    end={res.result}
                    decimals={decimals}
                    duration={0.6}
                    separator=","
                    decimal="."
                    prefix={prefix}
                    suffix={cSuffix}
                    preserveValue
                    className={`font-extrabold tabular-nums text-black ${
                      isHero
                        ? "text-3xl sm:text-4xl"
                        : "text-2xl sm:text-3xl"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── Graph Section ── */}
      {hasNumericInputs && (
        <div className="w-full">
          <button
            className={`btn btn-sm gap-2 ${
              showGraph
                ? "btn-primary"
                : "btn-ghost border border-base-300"
            }`}
            onClick={() => setShowGraph((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            {showGraph ? "Hide Graph" : "Show Graph"}
            <span className="badge badge-warning badge-xs font-bold">BETA</span>
          </button>

          {showGraph && (
            <div className="mt-4 card bg-base-200/40 border border-base-300 overflow-hidden">
              <div className="p-4">
                {numericInputs.length > 1 && (
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wide opacity-50">
                      Vary
                    </span>
                    <select
                      className="select select-bordered select-xs"
                      value={graphInputIdx}
                      onChange={(e) =>
                        setGraphInputIdx(Number(e.target.value))
                      }
                    >
                      {numericInputs.map(({ input, idx }) => (
                        <option key={idx} value={idx}>
                          {input.label}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="text-base-content">
                  {graphData.data.length > 0 ? (
                    <SimpleChart
                      data={graphData.data}
                      xKey={graphData.xKey}
                      yKeys={graphData.yKeys}
                    />
                  ) : (
                    <p className="text-center text-sm opacity-50 py-8">
                      Not enough data points to display a graph.
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
