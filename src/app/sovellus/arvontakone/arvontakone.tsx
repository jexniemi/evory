"use client";
import { useState, useRef } from "react";

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function Arvontakone() {
  const [text, setText] = useState("Anna\nBen\nCarla\nDavid\nElisa\nFredrik");
  const [winner, setWinner] = useState<string | null>(null);
  const [allWinners, setAllWinners] = useState<string[]>([]);
  const [removed, setRemoved] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [flash, setFlash] = useState("");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const entries = text
    .split("\n")
    .map((s) => s.trim())
    .filter((s) => s.length > 0)
    .filter((s) => !removed.includes(s));

  const draw = () => {
    if (entries.length === 0 || isAnimating) return;
    setIsAnimating(true);
    setWinner(null);
    let count = 0;
    intervalRef.current = setInterval(() => {
      setFlash(pickRandom(entries));
      count++;
      if (count >= 15) {
        clearInterval(intervalRef.current!);
        const picked = pickRandom(entries);
        setFlash("");
        setWinner(picked);
        setAllWinners((prev) => [picked, ...prev]);
        setIsAnimating(false);
      }
    }, 80);
  };

  const reset = () => {
    setWinner(null);
    setAllWinners([]);
    setRemoved([]);
    setFlash("");
  };

  return (
    <div className="flex flex-col gap-5 w-full max-w-lg mx-auto">
      <div>
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
          Osallistujat (yksi per rivi)
        </label>
        <textarea
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            reset();
          }}
          rows={6}
          placeholder="Anna&#10;Ben&#10;Carla&#10;..."
          className="textarea textarea-bordered w-full font-mono text-sm"
        />
        <p className="text-xs text-gray-400 mt-1">
          {entries.length} osallistujaa
        </p>
      </div>

      {/* Animation display */}
      <div
        className={`min-h-[90px] rounded-2xl flex items-center justify-center transition-all
        ${winner ? "bg-yellow-50 border-2 border-yellow-300" : "bg-base-200"}`}
      >
        {isAnimating ? (
          <span className="text-2xl font-bold text-main animate-pulse">
            {flash}
          </span>
        ) : winner ? (
          <div className="text-center">
            <div className="text-3xl mb-1">🎉</div>
            <div className="text-2xl font-bold text-yellow-700">{winner}</div>
            <div className="text-sm text-gray-500 mt-1">Voittaja!</div>
          </div>
        ) : (
          <p className="text-gray-400 text-sm">
            Paina nappia aloittaaksesi arvonnan
          </p>
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={draw}
          disabled={isAnimating || entries.length === 0}
          className="btn btn-primary flex-1 font-semibold"
        >
          {isAnimating ? "Arvotaan..." : "🎰 Arvo voittaja"}
        </button>
        {winner && (
          <button
            onClick={() => setRemoved((prev) => [...prev, winner!])}
            className="btn btn-outline btn-sm self-center"
            title="Poista voittaja osallistujalistasta"
          >
            Poista voittaja
          </button>
        )}
        {(allWinners.length > 0 || removed.length > 0) && (
          <button onClick={reset} className="btn btn-ghost btn-sm self-center">
            Nollaa
          </button>
        )}
      </div>

      {allWinners.length > 1 && (
        <div>
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Aiemmat voittajat
          </h4>
          <div className="flex flex-wrap gap-2">
            {allWinners.slice(1).map((w, i) => (
              <span
                key={i}
                className="bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-600"
              >
                {w}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
