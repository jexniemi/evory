"use client";
import { useState } from "react";

const ZONES = [
  {
    name: "Vyöhyke 1 – Palautuminen",
    pctMin: 50,
    pctMax: 60,
    color: "bg-blue-100 border-blue-300 text-blue-800",
    desc: "Kevyin vyöhyke. Sopii lämmittelyyn, jäähdyttelyyn ja aktiiviseen palautumiseen.",
  },
  {
    name: "Vyöhyke 2 – Aerobinen peruskunto",
    pctMin: 60,
    pctMax: 70,
    color: "bg-green-100 border-green-300 text-green-800",
    desc: "Rasvapolton tehokkain alue. Parantaa aerobista kestävyyttä ja aineenvaihduntaa.",
  },
  {
    name: "Vyöhyke 3 – Aerobinen teho",
    pctMin: 70,
    pctMax: 80,
    color: "bg-yellow-100 border-yellow-300 text-yellow-800",
    desc: "Parantaa aerobista kapasiteettia ja lihaskestävyyttä. Sopii pitkiin treenisuorituksiin.",
  },
  {
    name: "Vyöhyke 4 – Anaerobinen kynnys",
    pctMin: 80,
    pctMax: 90,
    color: "bg-orange-100 border-orange-300 text-orange-800",
    desc: "Raskas vyöhyke. Parantaa nopeuskestävyyttä ja laktaattikynnystä.",
  },
  {
    name: "Vyöhyke 5 – Maksimisuoritus",
    pctMin: 90,
    pctMax: 100,
    color: "bg-red-100 border-red-300 text-red-800",
    desc: "Maksimaalinen suoritus. Käytetään intervalliharjoittelussa ja nopeusharjoittelussa.",
  },
];

export default function Sydansykelaskuri() {
  const [age, setAge] = useState(30);
  const [customMax, setCustomMax] = useState<number | "">(190);
  const [useCustom, setUseCustom] = useState(false);
  const [restHR, setRestHR] = useState<number | "">(60);

  const formulaMax = 220 - age;
  const maxHR =
    useCustom && typeof customMax === "number" ? customMax : formulaMax;
  const restHRVal = typeof restHR === "number" ? restHR : 0;

  // Karvonen formula for zones
  const karvonenHR = (pct: number) =>
    Math.round(restHRVal + pct * (maxHR - restHRVal));

  const inputClass = "input input-bordered w-full";

  return (
    <div className="flex flex-col gap-5 w-full max-w-lg mx-auto">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
            Ikä (vuotta)
          </label>
          <input
            type="number"
            min={10}
            max={99}
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className={inputClass}
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
            Leposyke (lyöntiä/min)
          </label>
          <input
            type="number"
            min={30}
            max={120}
            value={restHR}
            onChange={(e) =>
              setRestHR(e.target.value === "" ? "" : Number(e.target.value))
            }
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="flex items-center gap-2 cursor-pointer select-none mb-2">
          <input
            type="checkbox"
            className="checkbox checkbox-sm"
            checked={useCustom}
            onChange={(e) => setUseCustom(e.target.checked)}
          />
          <span className="text-sm text-gray-700">
            Syötä mitattu maksimisyke itse
          </span>
        </label>
        {useCustom && (
          <input
            type="number"
            min={100}
            max={250}
            value={customMax}
            onChange={(e) =>
              setCustomMax(e.target.value === "" ? "" : Number(e.target.value))
            }
            placeholder="Esim. 185"
            className={inputClass}
          />
        )}
      </div>

      <div className="bg-base-200 rounded-xl p-3 flex gap-4 text-sm">
        <div className="text-center flex-1">
          <div className="text-2xl font-bold text-main">{maxHR}</div>
          <div className="text-xs text-gray-500">Maksimisyke</div>
          {!useCustom && (
            <div className="text-xs text-gray-400">kaava: 220 − {age}</div>
          )}
        </div>
        <div className="text-center flex-1">
          <div className="text-2xl font-bold text-main">{restHRVal}</div>
          <div className="text-xs text-gray-500">Leposyke</div>
        </div>
        <div className="text-center flex-1">
          <div className="text-2xl font-bold text-main">
            {maxHR - restHRVal}
          </div>
          <div className="text-xs text-gray-500">Sykereservi</div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {ZONES.map((zone) => {
          const hrMin = karvonenHR(zone.pctMin / 100);
          const hrMax = karvonenHR(zone.pctMax / 100);
          return (
            <div
              key={zone.name}
              className={`rounded-xl border p-3 ${zone.color}`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-sm">{zone.name}</span>
                <span className="font-bold text-sm tabular-nums">
                  {hrMin}–{hrMax} bpm
                </span>
              </div>
              <p className="text-xs opacity-80">{zone.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
