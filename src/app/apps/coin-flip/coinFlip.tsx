"use client";
import { useState, useCallback } from "react";

interface FlipRecord {
  result: "Heads" | "Tails";
  id: number;
}

export default function CoinFlip() {
  const [result, setResult] = useState<"Heads" | "Tails" | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [history, setHistory] = useState<FlipRecord[]>([]);
  const [totalHeads, setTotalHeads] = useState(0);
  const [totalTails, setTotalTails] = useState(0);
  const [flipCount, setFlipCount] = useState(0);

  const flip = useCallback(() => {
    if (isFlipping) return;
    setIsFlipping(true);

    setTimeout(() => {
      const outcome: "Heads" | "Tails" = Math.random() < 0.5 ? "Heads" : "Tails";
      setResult(outcome);
      setFlipCount((c) => c + 1);

      if (outcome === "Heads") {
        setTotalHeads((h) => h + 1);
      } else {
        setTotalTails((t) => t + 1);
      }

      setHistory((prev) => {
        const next = [{ result: outcome, id: Date.now() }, ...prev];
        return next.slice(0, 10);
      });

      setIsFlipping(false);
    }, 600);
  }, [isFlipping]);

  const total = totalHeads + totalTails;
  const headsPercent = total > 0 ? ((totalHeads / total) * 100).toFixed(1) : "0";
  const tailsPercent = total > 0 ? ((totalTails / total) * 100).toFixed(1) : "0";

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Coin display */}
      <div
        className={`w-40 h-40 rounded-full flex items-center justify-center text-4xl font-bold border-4 transition-all duration-500 ${
          isFlipping
            ? "animate-spin border-primary bg-primary/10"
            : result === "Heads"
              ? "border-primary bg-primary/10"
              : result === "Tails"
                ? "border-secondary bg-secondary/10"
                : "border-base-300 bg-base-200"
        }`}
      >
        {isFlipping ? "..." : result ? result : "?"}
      </div>

      {/* Result badge */}
      {result && !isFlipping && (
        <div
          className={`badge badge-lg text-lg py-4 px-6 ${
            result === "Heads" ? "badge-primary" : "badge-secondary"
          }`}
        >
          {result}!
        </div>
      )}

      {/* Flip button */}
      <button
        className="btn btn-primary btn-lg"
        onClick={flip}
        disabled={isFlipping}
      >
        {isFlipping ? "Flipping..." : "🪙 Flip Coin"}
      </button>

      {/* Stats */}
      {total > 0 && (
        <div className="w-full grid grid-cols-3 gap-3">
          <div className="bg-base-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">{totalHeads}</div>
            <div className="text-sm text-base-content/60">
              Heads ({headsPercent}%)
            </div>
          </div>
          <div className="bg-base-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-secondary">
              {totalTails}
            </div>
            <div className="text-sm text-base-content/60">
              Tails ({tailsPercent}%)
            </div>
          </div>
          <div className="bg-base-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">{total}</div>
            <div className="text-sm text-base-content/60">Total Flips</div>
          </div>
        </div>
      )}

      {/* History */}
      {history.length > 0 && (
        <div className="w-full">
          <h3 className="font-semibold mb-2">Last {history.length} Flips</h3>
          <div className="flex flex-wrap gap-2">
            {history.map((flip) => (
              <span
                key={flip.id}
                className={`badge ${
                  flip.result === "Heads"
                    ? "badge-primary"
                    : "badge-secondary"
                }`}
              >
                {flip.result}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
