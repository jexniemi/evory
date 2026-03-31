"use client";
import { useState } from "react";

const signs = [
  {
    name: "Aries",
    emoji: "♈",
    from: "21.3.",
    to: "19.4.",
    element: "Fire 🔥",
    planet: "Mars",
    color: "bg-red-50 border-red-200",
    desc: "Your great ideas, creative mind, and natural passion make you an outstanding leader. You are competitive, which leads to many great achievements in life.",
    compatible: ["Leo", "Sagittarius", "Gemini", "Aquarius"],
  },
  {
    name: "Taurus",
    emoji: "♉",
    from: "20.4.",
    to: "20.5.",
    element: "Earth 🌿",
    planet: "Venus",
    color: "bg-green-50 border-green-200",
    desc: "Taureans love to relax in peaceful surroundings filled with soft sounds, pleasant aromas, and delicious flavors.",
    compatible: ["Virgo", "Capricorn", "Cancer", "Pisces"],
  },
  {
    name: "Gemini",
    emoji: "♊",
    from: "21.5.",
    to: "20.6.",
    element: "Air 💨",
    planet: "Mercury",
    color: "bg-yellow-50 border-yellow-200",
    desc: "Have you ever been so busy that you wish you could clone yourself to get everything done? That is Gemini in a nutshell.",
    compatible: ["Libra", "Aquarius", "Aries", "Leo"],
  },
  {
    name: "Cancer",
    emoji: "♋",
    from: "21.6.",
    to: "22.7.",
    element: "Water 💧",
    planet: "Moon",
    color: "bg-blue-50 border-blue-200",
    desc: "You are naturally empathetic, and this forms the basis of your strong intuition and desire to care for others.",
    compatible: ["Scorpio", "Pisces", "Taurus", "Virgo"],
  },
  {
    name: "Leo",
    emoji: "♌",
    from: "23.7.",
    to: "22.8.",
    element: "Fire 🔥",
    planet: "Sun",
    color: "bg-orange-50 border-orange-200",
    desc: "You don't have to worry about being liked — you are charismatic and lovable. Bright, fiery, and radiant.",
    compatible: ["Aries", "Sagittarius", "Gemini", "Libra"],
  },
  {
    name: "Virgo",
    emoji: "♍",
    from: "23.8.",
    to: "22.9.",
    element: "Earth 🌿",
    planet: "Mercury",
    color: "bg-lime-50 border-lime-200",
    desc: "You are caring and practical, working hard to ensure that your loved ones are happy.",
    compatible: ["Taurus", "Capricorn", "Cancer", "Scorpio"],
  },
  {
    name: "Libra",
    emoji: "♎",
    from: "23.9.",
    to: "23.10.",
    element: "Air 💨",
    planet: "Venus",
    color: "bg-pink-50 border-pink-200",
    desc: "You are social and the greatest personality there ever was. You find it incredibly easy to make and keep new friends.",
    compatible: ["Gemini", "Aquarius", "Leo", "Sagittarius"],
  },
  {
    name: "Scorpio",
    emoji: "♏",
    from: "24.10.",
    to: "22.11.",
    element: "Water 💧",
    planet: "Pluto",
    color: "bg-purple-50 border-purple-200",
    desc: "You are extremely determined and know exactly what you want. You are willing to do whatever it takes to reach your goals.",
    compatible: ["Cancer", "Pisces", "Virgo", "Capricorn"],
  },
  {
    name: "Sagittarius",
    emoji: "♐",
    from: "23.11.",
    to: "21.12.",
    element: "Fire 🔥",
    planet: "Jupiter",
    color: "bg-amber-50 border-amber-200",
    desc: "You are constantly on the move, seeking more knowledge. You work hard and continually push yourself outside your comfort zone.",
    compatible: ["Aries", "Leo", "Libra", "Aquarius"],
  },
  {
    name: "Capricorn",
    emoji: "♑",
    from: "22.12.",
    to: "19.1.",
    element: "Earth 🌿",
    planet: "Saturn",
    color: "bg-stone-50 border-stone-200",
    desc: "Your incredible dedication and discipline will take you to the top someday. You are a capable leader.",
    compatible: ["Taurus", "Virgo", "Scorpio", "Pisces"],
  },
  {
    name: "Aquarius",
    emoji: "♒",
    from: "20.1.",
    to: "19.2.",
    element: "Air 💨",
    planet: "Uranus",
    color: "bg-sky-50 border-sky-200",
    desc: "You are extremely creative and often dream of changing the world. You are a natural world-changer with big ideas.",
    compatible: ["Gemini", "Libra", "Aries", "Sagittarius"],
  },
  {
    name: "Pisces",
    emoji: "♓",
    from: "20.2.",
    to: "20.3.",
    element: "Water 💧",
    planet: "Neptune",
    color: "bg-teal-50 border-teal-200",
    desc: "Your kind and creative soul makes your relationships passionate and dreamlike. You easily form multiple, deep connections.",
    compatible: ["Cancer", "Scorpio", "Taurus", "Capricorn"],
  },
];

function getLuckyNumber(signIdx: number): number {
  const today = new Date();
  const seed = signIdx * 7 + today.getDate() + today.getMonth() * 31;
  return (seed % 9) + 1;
}

export default function Horoskooppi() {
  const [selected, setSelected] = useState<number | null>(null);
  const sign = selected !== null ? signs[selected] : null;

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Sign grid */}
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
        {signs.map((s, i) => (
          <button
            key={s.name}
            onClick={() => setSelected(i)}
            className={`flex flex-col items-center p-3 rounded-xl border-2 transition-all cursor-pointer
              ${selected === i ? "border-main bg-orange-50 scale-105 shadow-md" : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"}`}
          >
            <span className="text-2xl">{s.emoji}</span>
            <span className="text-xs font-semibold mt-1 text-gray-700 leading-tight text-center">
              {s.name}
            </span>
          </button>
        ))}
      </div>

      {/* Detail card */}
      {sign ? (
        <div className={`rounded-2xl border-2 p-6 ${sign.color}`}>
          <div className="flex items-start gap-4 mb-4">
            <span className="text-5xl">{sign.emoji}</span>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{sign.name}</h3>
              <div className="text-sm text-gray-500">
                {sign.from} – {sign.to}
              </div>
              <div className="flex gap-3 mt-1 text-sm">
                <span>{sign.element}</span>
                <span>🪐 {sign.planet}</span>
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">{sign.desc}</p>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-xl p-3 text-center border border-gray-100">
              <div className="text-2xl font-bold text-main">
                {getLuckyNumber(selected!)}
              </div>
              <div className="text-xs text-gray-500 mt-0.5">Lucky number</div>
            </div>
            <div className="bg-white rounded-xl p-3 border border-gray-100">
              <div className="text-xs text-gray-500 mb-1 font-semibold">
                Compatible signs
              </div>
              <div className="flex flex-wrap gap-1">
                {sign.compatible.map((c) => (
                  <span
                    key={c}
                    className="text-xs bg-gray-100 rounded-full px-2 py-0.5"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-8 text-gray-400">
          <div className="text-4xl mb-2">✨</div>
          <p>Select your zodiac sign above</p>
        </div>
      )}
    </div>
  );
}
