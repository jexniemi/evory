"use client";
import { useState } from "react";

const SIZE_DATA = {
  small: { label: "Small (under 20 lbs)", multipliers: [15, 9.5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] },
  medium: { label: "Medium (20–50 lbs)", multipliers: [15, 9.5, 5, 5, 5, 5, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5, 5, 5, 5, 5.5, 5.5, 5.5] },
  large: { label: "Large (50–100 lbs)", multipliers: [15, 9.5, 6, 6, 5.5, 5.5, 5.5, 5.5, 5.5, 5.5, 5.5, 6, 6, 6.5, 6.5, 7, 7, 7, 7, 7] },
  giant: { label: "Giant (over 100 lbs)", multipliers: [12, 9, 8, 8, 7, 7, 7, 7, 7, 7, 7, 7.5, 7.5, 8, 8, 8, 8, 8, 8, 8] },
};

type DogSize = keyof typeof SIZE_DATA;

export default function DogAgeCalculator() {
  const [dogAge, setDogAge] = useState(3);
  const [size, setSize] = useState<DogSize>("medium");

  const calculateHumanAge = () => {
    if (dogAge <= 0) return 0;
    const mults = SIZE_DATA[size].multipliers;
    let humanAge = 0;
    for (let i = 0; i < Math.min(Math.floor(dogAge), mults.length); i++) {
      humanAge += mults[i];
    }
    const fraction = dogAge - Math.floor(dogAge);
    if (fraction > 0 && Math.floor(dogAge) < mults.length) {
      humanAge += fraction * mults[Math.floor(dogAge)];
    }
    return Math.round(humanAge);
  };

  const humanAge = calculateHumanAge();

  const getLifeStage = () => {
    if (dogAge < 0.5) return { stage: "Puppy", emoji: "🐶", color: "text-blue-600" };
    if (dogAge < 1) return { stage: "Junior", emoji: "🐕", color: "text-cyan-600" };
    if (dogAge < 3) return { stage: "Young Adult", emoji: "🦮", color: "text-green-600" };
    if (dogAge < 6) return { stage: "Adult", emoji: "🐕‍🦺", color: "text-emerald-600" };
    if (dogAge < 10) return { stage: "Mature", emoji: "🐾", color: "text-amber-600" };
    return { stage: "Senior", emoji: "🦴", color: "text-orange-600" };
  };

  const lifeStage = getLifeStage();

  return (
    <div className="space-y-6">
      <div className="form-control">
        <label className="label"><span className="label-text font-semibold">Dog Size</span></label>
        <select
          className="select select-bordered w-full"
          value={size}
          onChange={(e) => setSize(e.target.value as DogSize)}
        >
          {Object.entries(SIZE_DATA).map(([key, val]) => (
            <option key={key} value={key}>{val.label}</option>
          ))}
        </select>
      </div>

      <div className="form-control">
        <label className="label"><span className="label-text font-semibold">Dog&apos;s Age (years)</span></label>
        <input
          type="number"
          className="input input-bordered"
          min={0}
          max={25}
          step={0.5}
          value={dogAge}
          onChange={(e) => setDogAge(Number(e.target.value))}
        />
        <input
          type="range"
          className="range range-sm mt-2"
          min={0}
          max={20}
          step={0.5}
          value={dogAge}
          onChange={(e) => setDogAge(Number(e.target.value))}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-amber-50 border border-amber-200 border-l-4 border-l-amber-400 rounded-xl p-4 text-center">
          <div className="text-4xl font-bold text-amber-700">{humanAge}</div>
          <div className="text-sm text-amber-600 font-medium mt-1">Human Years</div>
        </div>
        <div className="bg-sky-50 border border-sky-200 border-l-4 border-l-sky-400 rounded-xl p-4 text-center">
          <div className="text-4xl font-bold text-sky-700">{dogAge}</div>
          <div className="text-sm text-sky-600 font-medium mt-1">Dog Years</div>
        </div>
        <div className="bg-violet-50 border border-violet-200 border-l-4 border-l-violet-400 rounded-xl p-4 text-center">
          <div className={`text-3xl font-bold ${lifeStage.color}`}>{lifeStage.emoji}</div>
          <div className="text-sm font-medium mt-1">{lifeStage.stage}</div>
        </div>
      </div>
    </div>
  );
}
