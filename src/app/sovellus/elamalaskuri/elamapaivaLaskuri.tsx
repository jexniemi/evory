"use client";
import { useState } from "react";

const MONTHS_FI = [
  "tammikuuta", "helmikuuta", "maaliskuuta", "huhtikuuta", "toukokuuta",
  "kesäkuuta", "heinäkuuta", "elokuuta", "syyskuuta", "lokakuuta",
  "marraskuuta", "joulukuuta",
];

const ZODIAC = [
  { sign: "Kauris ♑", from: [12, 22], to: [1, 19] },
  { sign: "Vesimies ♒", from: [1, 20], to: [2, 18] },
  { sign: "Kalat ♓", from: [2, 19], to: [3, 20] },
  { sign: "Oinas ♈", from: [3, 21], to: [4, 19] },
  { sign: "Härkä ♉", from: [4, 20], to: [5, 20] },
  { sign: "Kaksoset ♊", from: [5, 21], to: [6, 20] },
  { sign: "Rapu ♋", from: [6, 21], to: [7, 22] },
  { sign: "Leijona ♌", from: [7, 23], to: [8, 22] },
  { sign: "Neitsyt ♍", from: [8, 23], to: [9, 22] },
  { sign: "Vaaka ♎", from: [9, 23], to: [10, 23] },
  { sign: "Skorpioni ♏", from: [10, 24], to: [11, 22] },
  { sign: "Jousimies ♐", from: [11, 23], to: [12, 21] },
];

function getZodiac(month: number, day: number): string {
  for (const z of ZODIAC) {
    const [fm, fd] = z.from;
    const [tm, td] = z.to;
    if ((month === fm && day >= fd) || (month === tm && day <= td)) return z.sign;
  }
  return "Kauris ♑";
}

export default function ElamapaivaLaskuri() {
  const today = new Date().toISOString().split("T")[0];
  const [birthday, setBirthday] = useState("1990-06-15");

  const birth = birthday ? new Date(birthday + "T00:00:00") : null;
  const now = new Date();

  const totalDays = birth ? Math.floor((now.getTime() - birth.getTime()) / 86400000) : null;
  const totalHours = totalDays !== null ? totalDays * 24 + now.getHours() : null;
  const totalMinutes = totalHours !== null ? totalHours * 60 + now.getMinutes() : null;
  const heartbeats = totalMinutes !== null ? Math.round(totalMinutes * 70) : null;
  const breaths = totalMinutes !== null ? Math.round(totalMinutes * 15) : null;
  const totalWeeks = totalDays !== null ? Math.floor(totalDays / 7) : null;
  const totalMonths = birth ? Math.floor((now.getTime() - birth.getTime()) / (30.4375 * 86400000)) : null;

  const nextBirthday = birth ? (() => {
    const nb = new Date(now.getFullYear(), birth.getMonth(), birth.getDate());
    if (nb <= now) nb.setFullYear(nb.getFullYear() + 1);
    return Math.ceil((nb.getTime() - now.getTime()) / 86400000);
  })() : null;

  const zodiac = birth ? getZodiac(birth.getMonth() + 1, birth.getDate()) : null;
  const birthMonth = birth ? `${birth.getDate()}. ${MONTHS_FI[birth.getMonth()]}` : null;

  const stats = birth && totalDays !== null ? [
    { icon: "📅", value: totalDays.toLocaleString("fi-FI"), label: "Elettyjä päiviä" },
    { icon: "🗓️", value: totalWeeks!.toLocaleString("fi-FI"), label: "Viikkoa" },
    { icon: "📆", value: totalMonths!.toLocaleString("fi-FI"), label: "Kuukautta" },
    { icon: "⏰", value: totalHours!.toLocaleString("fi-FI"), label: "Tuntia" },
    { icon: "❤️", value: heartbeats!.toLocaleString("fi-FI"), label: "Sydämenlyöntiä (arvio)" },
    { icon: "💨", value: breaths!.toLocaleString("fi-FI"), label: "Hengitystä (arvio)" },
    { icon: "🎂", value: `${nextBirthday} pv`, label: "Seuraavaan syntymäpäivään" },
    { icon: "✨", value: zodiac!, label: "Horoskooppimerkki" },
  ] : [];

  return (
    <div className="flex flex-col gap-5 w-full max-w-lg mx-auto">
      <div>
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Syntymäpäivä</label>
        <input
          type="date"
          value={birthday}
          max={today}
          onChange={e => setBirthday(e.target.value)}
          className="input input-bordered w-full text-lg"
        />
        {birthMonth && <p className="text-sm text-gray-400 mt-1">Syntynyt {birthMonth}</p>}
      </div>

      {stats.length > 0 && (
        <div className="grid grid-cols-2 gap-3">
          {stats.map(s => (
            <div key={s.label} className="bg-base-200 rounded-xl p-3 text-center">
              <div className="text-xl mb-0.5">{s.icon}</div>
              <div className="text-lg font-bold text-gray-800 leading-tight">{s.value}</div>
              <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
