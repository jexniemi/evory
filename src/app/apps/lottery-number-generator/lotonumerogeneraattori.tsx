"use client";
import { useState } from "react";

interface Generated {
  numbers: number[];
  time: string;
}

function pickUnique(count: number, min: number, max: number): number[] {
  const pool = Array.from({ length: max - min + 1 }, (_, i) => i + min);
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count).sort((a, b) => a - b);
}

export default function Lotonumerogeneraattori() {
  const [history, setHistory] = useState<Generated[]>([]);
  const [latest, setLatest] = useState<number[] | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const generate = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    let count = 0;
    const interval = setInterval(() => {
      setLatest(pickUnique(7, 1, 40));
      count++;
      if (count >= 12) {
        clearInterval(interval);
        const final = pickUnique(7, 1, 40);
        setLatest(final);
        setIsAnimating(false);
        const now = new Date();
        const time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
        setHistory((prev) => [{ numbers: final, time }, ...prev].slice(0, 10));
      }
    }, 80);
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
      <div className="text-center">
        <p className="text-sm text-gray-500 mb-1">
          Suomen Lotto: 7 numeroa väliltä 1–40
        </p>
      </div>

      {/* Number display */}
      <div className="bg-base-200 rounded-2xl p-5 min-h-[90px] flex items-center justify-center">
        {latest ? (
          <div className="flex flex-wrap gap-2 justify-center">
            {latest.map((n, i) => (
              <span
                key={`${i}-${n}`}
                className="w-11 h-11 rounded-full bg-main text-white flex items-center justify-center text-lg font-bold shadow"
              >
                {n}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-sm">
            Paina nappia arvotaksesi numerot
          </p>
        )}
      </div>

      <button
        onClick={generate}
        disabled={isAnimating}
        className="btn btn-primary w-full text-base font-semibold"
      >
        {isAnimating ? "Arvotaan..." : "🎰 Arvo Lotto-numerot"}
      </button>

      {/* History */}
      {history.length > 1 && (
        <div>
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Aiemmat arvonnat
          </h4>
          <div className="flex flex-col gap-2">
            {history.slice(1).map((h, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-base-100 rounded-xl p-2 border border-base-200"
              >
                <span className="text-xs text-gray-400 w-10 shrink-0">
                  {h.time}
                </span>
                <div className="flex flex-wrap gap-1">
                  {h.numbers.map((n, i) => (
                    <span
                      key={i}
                      className="w-7 h-7 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-xs font-bold"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
