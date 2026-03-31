"use client";
import { useState } from "react";

export default function RandomNumberGenerator() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [count, setCount] = useState(1);
  const [unique, setUnique] = useState(true);
  const [results, setResults] = useState<number[] | null>(null);
  const [error, setError] = useState("");
  const [animating, setAnimating] = useState(false);

  const generate = () => {
    setError("");
    if (min >= max) {
      setError("Minimum cannot be greater than maximum.");
      return;
    }
    const range = max - min + 1;
    if (unique && count > range) {
      setError(`Unique numbers cannot be more than ${range}.`);
      return;
    }

    setAnimating(true);
    let rounds = 0;
    const interval = setInterval(() => {
      const nums: number[] = [];
      const pool = Array.from({ length: range }, (_, i) => i + min);
      if (unique) {
        for (let i = pool.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [pool[i], pool[j]] = [pool[j], pool[i]];
        }
        setResults(pool.slice(0, count).sort((a, b) => a - b));
      } else {
        for (let i = 0; i < count; i++)
          nums.push(Math.floor(Math.random() * range) + min);
        setResults(nums);
      }
      rounds++;
      if (rounds >= 10) {
        clearInterval(interval);
        setAnimating(false);
      }
    }, 70);
  };

  return (
    <div className="flex flex-col gap-5 w-full max-w-sm mx-auto">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs text-gray-500 font-semibold uppercase tracking-wide block mb-1">
            Minimum
          </label>
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(Number(e.target.value))}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="text-xs text-gray-500 font-semibold uppercase tracking-wide block mb-1">
            Maximum
          </label>
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(Number(e.target.value))}
            className="input input-bordered w-full"
          />
        </div>
      </div>

      <div>
        <label className="text-xs text-gray-500 font-semibold uppercase tracking-wide block mb-1">
          How many numbers?
        </label>
        <input
          type="number"
          min={1}
          max={100}
          value={count}
          onChange={(e) =>
            setCount(Math.max(1, Math.min(100, Number(e.target.value))))
          }
          className="input input-bordered w-full"
        />
      </div>

      <label className="flex items-center gap-2 cursor-pointer select-none">
        <input
          type="checkbox"
          className="checkbox checkbox-sm"
          checked={unique}
          onChange={(e) => setUnique(e.target.checked)}
        />
        <span className="text-sm text-gray-700">
          Unique numbers (no repeats)
        </span>
      </label>

      {error && <p className="text-sm text-error">{error}</p>}

      <button
        onClick={generate}
        disabled={animating}
        className="btn btn-primary w-full font-semibold"
      >
        {animating ? "Drawing..." : "🎲 Draw numbers"}
      </button>

      {results && (
        <div className="bg-base-200 rounded-2xl p-4">
          <p className="text-xs text-gray-500 mb-3 uppercase font-semibold tracking-wide">
            {count === 1 ? "Random number" : `${count} random numbers`}
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {results.map((n, i) => (
              <span
                key={`${i}-${n}`}
                className={`rounded-xl px-3 py-2 font-bold text-white shadow text-sm
                  ${count === 1 ? "text-3xl px-6 py-4" : ""} bg-main`}
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
