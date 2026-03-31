"use client";
import { useState } from "react";

function calculateLoveScore(name1: string, name2: string): number {
  const combined = (name1.trim() + name2.trim()).toLowerCase();
  if (combined.length === 0) return 0;
  let hash = 0;
  for (let i = 0; i < combined.length; i++) {
    hash = (hash * 31 + combined.charCodeAt(i)) % 10007;
  }
  return hash % 101;
}

function getMessage(score: number): string {
  if (score <= 20) return "Keep looking... 💔";
  if (score <= 40) return "There might be a spark! ✨";
  if (score <= 60) return "Not bad — worth exploring! 😊";
  if (score <= 80) return "Strong connection! ❤️";
  return "Perfect match! 💕";
}

function getColor(score: number): string {
  if (score <= 20) return "text-error";
  if (score <= 40) return "text-warning";
  if (score <= 60) return "text-info";
  if (score <= 80) return "text-success";
  return "text-primary";
}

export default function LoveCalculator() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [score, setScore] = useState<number | null>(null);
  const [animate, setAnimate] = useState(false);

  const handleCalculate = () => {
    if (!name1.trim() || !name2.trim()) return;
    setAnimate(false);
    setTimeout(() => {
      const result = calculateLoveScore(name1, name2);
      setScore(result);
      setAnimate(true);
    }, 50);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Your Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter first name"
            className="input input-bordered w-full"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Partner&apos;s Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter partner's name"
            className="input input-bordered w-full"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
          />
        </div>
      </div>

      <button
        className="btn btn-primary"
        onClick={handleCalculate}
        disabled={!name1.trim() || !name2.trim()}
      >
        💕 Calculate Love Score
      </button>

      {score !== null && (
        <div
          className={`bg-base-200 p-8 rounded-lg text-center transition-all duration-500 ${
            animate ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <div className="text-6xl mb-4">
            {score > 80 ? "💕" : score > 60 ? "❤️" : score > 40 ? "💛" : score > 20 ? "🤔" : "💔"}
          </div>

          <div className="mb-4">
            <span className="text-sm opacity-70">Compatibility Score</span>
            <div className={`text-6xl font-bold font-mono ${getColor(score)}`}>
              {score}%
            </div>
          </div>

          <progress
            className={`progress w-full h-4 ${
              score > 80
                ? "progress-primary"
                : score > 60
                ? "progress-success"
                : score > 40
                ? "progress-info"
                : score > 20
                ? "progress-warning"
                : "progress-error"
            }`}
            value={score}
            max="100"
          />

          <p className={`text-xl font-semibold mt-4 ${getColor(score)}`}>
            {getMessage(score)}
          </p>

          <p className="text-sm opacity-60 mt-4">
            {name1.trim()} & {name2.trim()}
          </p>
        </div>
      )}
    </div>
  );
}
