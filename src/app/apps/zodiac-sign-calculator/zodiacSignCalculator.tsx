"use client";

import { useState } from "react";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

type ZodiacInfo = {
  name: string;
  emoji: string;
  element: string;
  planet: string;
  dates: string;
  traits: string;
  elementColor: string;
};

const ZODIAC: ZodiacInfo[] = [
  {
    name: "Capricorn",
    emoji: "♑",
    element: "Earth",
    planet: "Saturn",
    dates: "Dec 22 – Jan 19",
    traits: "Ambitious, disciplined, patient, practical",
    elementColor: "bg-green-100 text-green-800 border-green-200",
  },
  {
    name: "Aquarius",
    emoji: "♒",
    element: "Air",
    planet: "Uranus",
    dates: "Jan 20 – Feb 18",
    traits: "Innovative, independent, humanitarian, intellectual",
    elementColor: "bg-sky-100 text-sky-800 border-sky-200",
  },
  {
    name: "Pisces",
    emoji: "♓",
    element: "Water",
    planet: "Neptune",
    dates: "Feb 19 – Mar 20",
    traits: "Compassionate, intuitive, artistic, gentle",
    elementColor: "bg-blue-100 text-blue-800 border-blue-200",
  },
  {
    name: "Aries",
    emoji: "♈",
    element: "Fire",
    planet: "Mars",
    dates: "Mar 21 – Apr 19",
    traits: "Courageous, energetic, confident, impulsive",
    elementColor: "bg-red-100 text-red-800 border-red-200",
  },
  {
    name: "Taurus",
    emoji: "♉",
    element: "Earth",
    planet: "Venus",
    dates: "Apr 20 – May 20",
    traits: "Reliable, patient, devoted, stubborn",
    elementColor: "bg-green-100 text-green-800 border-green-200",
  },
  {
    name: "Gemini",
    emoji: "♊",
    element: "Air",
    planet: "Mercury",
    dates: "May 21 – Jun 20",
    traits: "Adaptable, witty, curious, inconsistent",
    elementColor: "bg-sky-100 text-sky-800 border-sky-200",
  },
  {
    name: "Cancer",
    emoji: "♋",
    element: "Water",
    planet: "Moon",
    dates: "Jun 21 – Jul 22",
    traits: "Loyal, empathetic, intuitive, moody",
    elementColor: "bg-blue-100 text-blue-800 border-blue-200",
  },
  {
    name: "Leo",
    emoji: "♌",
    element: "Fire",
    planet: "Sun",
    dates: "Jul 23 – Aug 22",
    traits: "Creative, generous, warm-hearted, dramatic",
    elementColor: "bg-red-100 text-red-800 border-red-200",
  },
  {
    name: "Virgo",
    emoji: "♍",
    element: "Earth",
    planet: "Mercury",
    dates: "Aug 23 – Sep 22",
    traits: "Analytical, hardworking, practical, critical",
    elementColor: "bg-green-100 text-green-800 border-green-200",
  },
  {
    name: "Libra",
    emoji: "♎",
    element: "Air",
    planet: "Venus",
    dates: "Sep 23 – Oct 22",
    traits: "Diplomatic, fair-minded, social, indecisive",
    elementColor: "bg-sky-100 text-sky-800 border-sky-200",
  },
  {
    name: "Scorpio",
    emoji: "♏",
    element: "Water",
    planet: "Pluto",
    dates: "Oct 23 – Nov 21",
    traits: "Brave, resourceful, passionate, secretive",
    elementColor: "bg-blue-100 text-blue-800 border-blue-200",
  },
  {
    name: "Sagittarius",
    emoji: "♐",
    element: "Fire",
    planet: "Jupiter",
    dates: "Nov 22 – Dec 21",
    traits: "Optimistic, adventurous, honest, impatient",
    elementColor: "bg-red-100 text-red-800 border-red-200",
  },
];

function getZodiac(month: number, day: number): ZodiacInfo {
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
    return ZODIAC[0];
  if (month === 1 || (month === 2 && day <= 18)) return ZODIAC[1];
  if (month === 2 || (month === 3 && day <= 20)) return ZODIAC[2];
  if (month === 3 || (month === 4 && day <= 19)) return ZODIAC[3];
  if (month === 4 || (month === 5 && day <= 20)) return ZODIAC[4];
  if (month === 5 || (month === 6 && day <= 20)) return ZODIAC[5];
  if (month === 6 || (month === 7 && day <= 22)) return ZODIAC[6];
  if (month === 7 || (month === 8 && day <= 22)) return ZODIAC[7];
  if (month === 8 || (month === 9 && day <= 22)) return ZODIAC[8];
  if (month === 9 || (month === 10 && day <= 22)) return ZODIAC[9];
  if (month === 10 || (month === 11 && day <= 21)) return ZODIAC[10];
  return ZODIAC[11];
}

export default function ZodiacSignCalculator() {
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(15);

  const sign = getZodiac(month, day);

  return (
    <div className="max-w-lg mx-auto space-y-5 p-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="label">
            <span className="label-text font-medium">Birth Month</span>
          </label>
          <select
            className="select select-bordered w-full"
            value={month}
            onChange={(e) => setMonth(parseInt(e.target.value))}
          >
            {MONTHS.map((m, i) => (
              <option key={m} value={i + 1}>
                {m}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="label">
            <span className="label-text font-medium">Birth Day</span>
          </label>
          <input
            type="number"
            className="input input-bordered w-full"
            min={1}
            max={31}
            value={day}
            onChange={(e) =>
              setDay(Math.max(1, Math.min(31, parseInt(e.target.value) || 1)))
            }
          />
        </div>
      </div>

      <div className="card bg-gradient-to-br from-base-200 to-base-300 border border-base-300 shadow-md">
        <div className="card-body text-center">
          <div className="text-6xl mb-2">{sign.emoji}</div>
          <h2 className="text-3xl font-black">{sign.name}</h2>
          <p className="text-base-content/60 text-sm">{sign.dates}</p>

          <div className="flex flex-wrap justify-center gap-2 mt-3">
            <span className={`badge badge-lg border ${sign.elementColor}`}>
              {sign.element}
            </span>
            <span className="badge badge-lg bg-purple-100 text-purple-800 border border-purple-200">
              ☿ {sign.planet}
            </span>
          </div>

          <p className="text-sm text-base-content/70 mt-3 italic">
            {sign.traits}
          </p>
        </div>
      </div>
    </div>
  );
}
