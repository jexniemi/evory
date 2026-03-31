"use client";
import { useState, useCallback } from "react";

type DieResult = {
  id: number;
  value: number;
  rolling: boolean;
};

const dieFaces: Record<number, string[]> = {
  1: ["⚀"],
  2: ["⚁"],
  3: ["⚂"],
  4: ["⚃"],
  5: ["⚄"],
  6: ["⚅"],
};

export default function DiceGenerator() {
  const [numDice, setNumDice] = useState(2);
  const [sides, setSides] = useState(6);
  const [results, setResults] = useState<DieResult[]>([]);
  const [history, setHistory] = useState<{ dice: number[]; total: number }[]>(
    [],
  );

  const rollDice = useCallback(() => {
    // Start rolling animation
    const rollingDice = Array.from({ length: numDice }, (_, i) => ({
      id: i,
      value: Math.floor(Math.random() * sides) + 1,
      rolling: true,
    }));
    setResults(rollingDice);

    // Quick animation - cycle random values
    let count = 0;
    const interval = setInterval(() => {
      setResults((prev) =>
        prev.map((d) => ({
          ...d,
          value: Math.floor(Math.random() * sides) + 1,
        })),
      );
      count++;
      if (count >= 8) {
        clearInterval(interval);
        const finalDice = Array.from({ length: numDice }, (_, i) => ({
          id: i,
          value: Math.floor(Math.random() * sides) + 1,
          rolling: false,
        }));
        setResults(finalDice);
        setHistory((prev) => [
          {
            dice: finalDice.map((d) => d.value),
            total: finalDice.reduce((sum, d) => sum + d.value, 0),
          },
          ...prev.slice(0, 19),
        ]);
      }
    }, 60);
  }, [numDice, sides]);

  const total = results.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">
            Number of dice
          </label>
          <select
            className="select select-bordered w-full"
            value={numDice}
            onChange={(e) => {
              setNumDice(Number(e.target.value));
              setResults([]);
            }}
          >
            {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "die" : "dice"}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">
            Number of sides
          </label>
          <select
            className="select select-bordered w-full"
            value={sides}
            onChange={(e) => {
              setSides(Number(e.target.value));
              setResults([]);
            }}
          >
            {[4, 6, 8, 10, 12, 20, 100].map((s) => (
              <option key={s} value={s}>
                d{s} ({s}-sided)
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        className="btn btn-primary btn-lg text-white text-xl"
        onClick={rollDice}
      >
        🎲 Roll {numDice === 1 ? "die" : "dice"}!
      </button>

      {results.length > 0 && (
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-3">
            {results.map((die) => (
              <div
                key={die.id}
                className={`
                  w-20 h-20 rounded-2xl flex items-center justify-center
                  bg-white border-2 border-gray-200 shadow-lg
                  transition-transform duration-150
                  ${die.rolling ? "animate-bounce" : ""}
                `}
              >
                {sides === 6 && dieFaces[die.value] ? (
                  <span className="text-5xl leading-none">
                    {dieFaces[die.value][0]}
                  </span>
                ) : (
                  <span className="text-3xl font-bold text-gray-800">
                    {die.value}
                  </span>
                )}
              </div>
            ))}
          </div>

          {numDice > 1 && (
            <div className="text-center">
              <span className="text-sm text-gray-500">Total</span>
              <p className="text-4xl font-bold text-primary">{total}</p>
            </div>
          )}
        </div>
      )}

      {history.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-semibold text-gray-500 mb-2">
            Roll history
          </h3>
          <div className="overflow-x-auto">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Results</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {history.map((h, i) => (
                  <tr key={i} className={i === 0 ? "bg-base-200" : ""}>
                    <td className="text-gray-400">{history.length - i}</td>
                    <td>{h.dice.join(", ")}</td>
                    <td className="font-bold">{h.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
