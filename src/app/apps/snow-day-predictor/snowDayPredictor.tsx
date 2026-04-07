"use client";
import { useState } from "react";

export default function SnowDayPredictor() {
  const [snowfall, setSnowfall] = useState(4);
  const [temp, setTemp] = useState(28);
  const [windSpeed, setWindSpeed] = useState(15);
  const [schoolType, setSchoolType] = useState("public");
  const [region, setRegion] = useState("midwest");
  const [timeOfSnow, setTimeOfSnow] = useState("overnight");
  const [result, setResult] = useState<number | null>(null);

  const predict = () => {
    let score = 0;

    // Snowfall factor (0-35 points)
    if (snowfall >= 12) score += 35;
    else if (snowfall >= 8) score += 30;
    else if (snowfall >= 6) score += 25;
    else if (snowfall >= 4) score += 18;
    else if (snowfall >= 2) score += 10;
    else if (snowfall >= 1) score += 5;

    // Temperature factor (0-15 points)
    if (temp <= 0) score += 15;
    else if (temp <= 10) score += 12;
    else if (temp <= 20) score += 8;
    else if (temp <= 28) score += 4;

    // Wind speed factor (0-15 points)
    if (windSpeed >= 40) score += 15;
    else if (windSpeed >= 30) score += 12;
    else if (windSpeed >= 20) score += 8;
    else if (windSpeed >= 10) score += 4;

    // School type factor (0-10 points)
    if (schoolType === "private") score += 8;
    else if (schoolType === "public") score += 3;

    // Region factor (0-15 points) — southern regions less equipped
    if (region === "south") score += 15;
    else if (region === "midatlantic") score += 10;
    else if (region === "pacific") score += 8;
    else if (region === "midwest") score += 5;
    else if (region === "mountain") score += 4;
    else if (region === "northeast") score += 3;

    // Timing factor (0-10 points)
    if (timeOfSnow === "overnight") score += 10;
    else if (timeOfSnow === "earlymorning") score += 7;
    else if (timeOfSnow === "afternoon") score += 3;

    const percentage = Math.min(99, Math.max(1, score));
    setResult(percentage);
  };

  const getVerdict = (pct: number) => {
    if (pct >= 80)
      return { text: "Very Likely — Snow Day!", color: "text-success" };
    if (pct >= 60)
      return { text: "Good Chance — Keep Hoping!", color: "text-info" };
    if (pct >= 40)
      return { text: "Possible — Could Go Either Way", color: "text-warning" };
    if (pct >= 20)
      return {
        text: "Unlikely — Better Do Homework",
        color: "text-orange-500",
      };
    return { text: "Very Unlikely — School Is On", color: "text-error" };
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Expected Snowfall (inches)</span>
        </label>
        <input
          type="number"
          className="input input-bordered w-full"
          min={0}
          max={48}
          value={snowfall}
          onChange={(e) => setSnowfall(Number(e.target.value))}
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Temperature (°F)</span>
        </label>
        <input
          type="number"
          className="input input-bordered w-full"
          min={-40}
          max={50}
          value={temp}
          onChange={(e) => setTemp(Number(e.target.value))}
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Wind Speed (mph)</span>
        </label>
        <input
          type="number"
          className="input input-bordered w-full"
          min={0}
          max={80}
          value={windSpeed}
          onChange={(e) => setWindSpeed(Number(e.target.value))}
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">School Type</span>
        </label>
        <select
          className="select select-bordered w-full"
          value={schoolType}
          onChange={(e) => setSchoolType(e.target.value)}
        >
          <option value="public">Public School</option>
          <option value="private">Private School</option>
        </select>
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Region</span>
        </label>
        <select
          className="select select-bordered w-full"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="northeast">Northeast</option>
          <option value="midwest">Midwest</option>
          <option value="south">South</option>
          <option value="midatlantic">Mid-Atlantic</option>
          <option value="mountain">Mountain West</option>
          <option value="pacific">Pacific / West Coast</option>
        </select>
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">When is the Snow Expected?</span>
        </label>
        <select
          className="select select-bordered w-full"
          value={timeOfSnow}
          onChange={(e) => setTimeOfSnow(e.target.value)}
        >
          <option value="overnight">Overnight (before 5 AM)</option>
          <option value="earlymorning">Early Morning (5–8 AM)</option>
          <option value="afternoon">Afternoon / Evening</option>
        </select>
      </div>

      <button className="btn btn-primary w-full" onClick={predict}>
        Predict Snow Day
      </button>

      {result !== null && (
        <div className="card bg-base-200 p-6 text-center mt-2">
          <div className="text-5xl font-bold mb-2">{result}%</div>
          <div className={`text-lg font-semibold ${getVerdict(result).color}`}>
            {getVerdict(result).text}
          </div>
          <div className="mt-4">
            <progress
              className="progress progress-primary w-full"
              value={result}
              max={100}
            />
          </div>
        </div>
      )}
    </div>
  );
}
