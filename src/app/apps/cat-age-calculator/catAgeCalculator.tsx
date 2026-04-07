"use client";
import { useState } from "react";

export default function CatAgeCalculator() {
  const [catAge, setCatAge] = useState(3);

  const calculateHumanAge = () => {
    if (catAge <= 0) return 0;
    if (catAge <= 1) return Math.round(catAge * 15);
    if (catAge <= 2) return 15 + Math.round((catAge - 1) * 9);
    return 24 + Math.round((catAge - 2) * 4);
  };

  const humanAge = calculateHumanAge();

  const getLifeStage = () => {
    if (catAge < 0.5)
      return { stage: "Kitten", emoji: "🐱", color: "text-blue-600" };
    if (catAge < 2)
      return { stage: "Junior", emoji: "😺", color: "text-cyan-600" };
    if (catAge < 6)
      return { stage: "Prime", emoji: "😸", color: "text-green-600" };
    if (catAge < 10)
      return { stage: "Mature", emoji: "🐈", color: "text-amber-600" };
    if (catAge < 15)
      return { stage: "Senior", emoji: "🐈‍⬛", color: "text-orange-600" };
    return { stage: "Geriatric", emoji: "😿", color: "text-red-600" };
  };

  const lifeStage = getLifeStage();

  return (
    <div className="space-y-6">
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">
            Cat&apos;s Age (years)
          </span>
        </label>
        <input
          type="number"
          className="input input-bordered"
          min={0}
          max={30}
          step={0.5}
          value={catAge}
          onChange={(e) => setCatAge(Number(e.target.value))}
        />
        <input
          type="range"
          className="range range-sm mt-2"
          min={0}
          max={25}
          step={0.5}
          value={catAge}
          onChange={(e) => setCatAge(Number(e.target.value))}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-amber-50 border border-amber-200 border-l-4 border-l-amber-400 rounded-xl p-4 text-center">
          <div className="text-4xl font-bold text-amber-700">{humanAge}</div>
          <div className="text-sm text-amber-600 font-medium mt-1">
            Human Years
          </div>
        </div>
        <div className="bg-sky-50 border border-sky-200 border-l-4 border-l-sky-400 rounded-xl p-4 text-center">
          <div className="text-4xl font-bold text-sky-700">{catAge}</div>
          <div className="text-sm text-sky-600 font-medium mt-1">Cat Years</div>
        </div>
        <div className="bg-violet-50 border border-violet-200 border-l-4 border-l-violet-400 rounded-xl p-4 text-center">
          <div className={`text-3xl font-bold ${lifeStage.color}`}>
            {lifeStage.emoji}
          </div>
          <div className="text-sm font-medium mt-1">{lifeStage.stage}</div>
        </div>
      </div>
    </div>
  );
}
