"use client";
import { useState } from "react";

const signs = [
  {
    name: "Oinas",
    emoji: "♈",
    from: "21.3.",
    to: "19.4.",
    element: "Tuli 🔥",
    planet: "Mars",
    color: "bg-red-50 border-red-200",
    desc: "Sinun mahtavat ideat, luova mieli ja luonnollinen intohimo tekevät sinusta loistavan johtajan. Olet kilpailuhenkinen, joka johtaa moniin suuriin asioihin elämässäsi.",
    compatible: ["Leijona", "Jousimies", "Kaksoset", "Vesimies"],
  },
  {
    name: "Härkä",
    emoji: "♉",
    from: "20.4.",
    to: "20.5.",
    element: "Maa 🌿",
    planet: "Venus",
    color: "bg-green-50 border-green-200",
    desc: "Härät tykkäävät rentoutua levollisessa ympäristössä, jota ympäröi pehmeät äänet, miellyttävät tuoksut ja monipuoliset maut.",
    compatible: ["Neitsyt", "Kauris", "Rapu", "Kalat"],
  },
  {
    name: "Kaksoset",
    emoji: "♊",
    from: "21.5.",
    to: "20.6.",
    element: "Ilma 💨",
    planet: "Merkurius",
    color: "bg-yellow-50 border-yellow-200",
    desc: "Oletko koskaan ollut niin kiireinen, että toivoisit sinun voivasi kloonata itsesi saadaksesi kaiken tehtyä? Tämä on Kaksosten luonne pähkinänkuoressa.",
    compatible: ["Vaaka", "Vesimies", "Oinas", "Leijona"],
  },
  {
    name: "Rapu",
    emoji: "♋",
    from: "21.6.",
    to: "22.7.",
    element: "Vesi 💧",
    planet: "Kuu",
    color: "bg-blue-50 border-blue-200",
    desc: "Olet luonteeltasi empaattinen, ja tähän pohjautuu sinun luonnollinen intuitio ja halu hoitaa asiat kunnolla.",
    compatible: ["Skorpioni", "Kalat", "Härkä", "Neitsyt"],
  },
  {
    name: "Leijona",
    emoji: "♌",
    from: "23.7.",
    to: "22.8.",
    element: "Tuli 🔥",
    planet: "Aurinko",
    color: "bg-orange-50 border-orange-200",
    desc: "Sinun ei tarvitse huolehtia siitä, oletko pidettävä, sillä olet karismaattinen ja rakastettava. Valoisa, tulinen ja loistava.",
    compatible: ["Oinas", "Jousimies", "Kaksoset", "Vaaka"],
  },
  {
    name: "Neitsyt",
    emoji: "♍",
    from: "23.8.",
    to: "22.9.",
    element: "Maa 🌿",
    planet: "Merkurius",
    color: "bg-lime-50 border-lime-200",
    desc: "Olet huolehtivainen ja käytännön ihminen, joka tekee työtä varmistaakseen, että rakastettusi ovat iloisia.",
    compatible: ["Härkä", "Kauris", "Rapu", "Skorpioni"],
  },
  {
    name: "Vaaka",
    emoji: "♎",
    from: "23.9.",
    to: "23.10.",
    element: "Ilma 💨",
    planet: "Venus",
    color: "bg-pink-50 border-pink-200",
    desc: "Olet sosiaalinen ja suurin persoona ikinä. Sinun on uskomattoman helppo löytää ja pitää uusia ystäviä.",
    compatible: ["Kaksoset", "Vesimies", "Leijona", "Jousimies"],
  },
  {
    name: "Skorpioni",
    emoji: "♏",
    from: "24.10.",
    to: "22.11.",
    element: "Vesi 💧",
    planet: "Pluto",
    color: "bg-purple-50 border-purple-200",
    desc: "Olet erittäin päättäväinen ja tiedät tarkalleen mitä haluat. Olet halukas tekemään kaikkesi saavuttaaksesi päämääräsi.",
    compatible: ["Rapu", "Kalat", "Neitsyt", "Kauris"],
  },
  {
    name: "Jousimies",
    emoji: "♐",
    from: "23.11.",
    to: "21.12.",
    element: "Tuli 🔥",
    planet: "Jupiter",
    color: "bg-amber-50 border-amber-200",
    desc: "Olet jatkuvasti liikkeessä etsiessäsi lisää tietämystä. Työskentelet kovasti ja pusket itseäsi jatkuvasti mukavuusalueesi ulkopuolelle.",
    compatible: ["Oinas", "Leijona", "Vaaka", "Vesimies"],
  },
  {
    name: "Kauris",
    emoji: "♑",
    from: "22.12.",
    to: "19.1.",
    element: "Maa 🌿",
    planet: "Saturnus",
    color: "bg-stone-50 border-stone-200",
    desc: "Sinun uskomattoman omistautumisesi ja kurinalaisuutesi vievät sinut huipulle jonain päivänä. Olet pätevä johtaja.",
    compatible: ["Härkä", "Neitsyt", "Skorpioni", "Kalat"],
  },
  {
    name: "Vesimies",
    emoji: "♒",
    from: "20.1.",
    to: "19.2.",
    element: "Ilma 💨",
    planet: "Uranus",
    color: "bg-sky-50 border-sky-200",
    desc: "Olet erittäin luova ja haaveilet usein muuttavasi maailmaa. Olet luonnollinen maailman mullistaja, ja sinulla on suuria ideoita.",
    compatible: ["Kaksoset", "Vaaka", "Oinas", "Jousimies"],
  },
  {
    name: "Kalat",
    emoji: "♓",
    from: "20.2.",
    to: "20.3.",
    element: "Vesi 💧",
    planet: "Neptunus",
    color: "bg-teal-50 border-teal-200",
    desc: "Sinun ystävällinen ja luova sielusi tekevät ihmissuhteistasi intohimoisia ja unenomaisia. Muodostat helposti useita, syvällisiä suhteita.",
    compatible: ["Rapu", "Skorpioni", "Härkä", "Kauris"],
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
              <div className="text-xs text-gray-500 mt-0.5">Päivän numero</div>
            </div>
            <div className="bg-white rounded-xl p-3 border border-gray-100">
              <div className="text-xs text-gray-500 mb-1 font-semibold">
                Sopivat merkit
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
          <p>Valitse horoskooppimerkkisi ylhäältä</p>
        </div>
      )}
    </div>
  );
}
