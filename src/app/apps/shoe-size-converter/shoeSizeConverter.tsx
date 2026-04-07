"use client";
import { useState } from "react";

const SIZES = {
  mens: [
    { us: "6", uk: "5.5", eu: "39", cm: "24.0" },
    { us: "6.5", uk: "6", eu: "39.5", cm: "24.5" },
    { us: "7", uk: "6.5", eu: "40", cm: "25.0" },
    { us: "7.5", uk: "7", eu: "40.5", cm: "25.5" },
    { us: "8", uk: "7.5", eu: "41", cm: "26.0" },
    { us: "8.5", uk: "8", eu: "42", cm: "26.5" },
    { us: "9", uk: "8.5", eu: "42.5", cm: "27.0" },
    { us: "9.5", uk: "9", eu: "43", cm: "27.5" },
    { us: "10", uk: "9.5", eu: "44", cm: "28.0" },
    { us: "10.5", uk: "10", eu: "44.5", cm: "28.5" },
    { us: "11", uk: "10.5", eu: "45", cm: "29.0" },
    { us: "11.5", uk: "11", eu: "45.5", cm: "29.5" },
    { us: "12", uk: "11.5", eu: "46", cm: "30.0" },
    { us: "13", uk: "12.5", eu: "47", cm: "31.0" },
    { us: "14", uk: "13.5", eu: "48", cm: "32.0" },
  ],
  womens: [
    { us: "5", uk: "3", eu: "35.5", cm: "22.0" },
    { us: "5.5", uk: "3.5", eu: "36", cm: "22.5" },
    { us: "6", uk: "4", eu: "36.5", cm: "23.0" },
    { us: "6.5", uk: "4.5", eu: "37", cm: "23.5" },
    { us: "7", uk: "5", eu: "37.5", cm: "24.0" },
    { us: "7.5", uk: "5.5", eu: "38", cm: "24.5" },
    { us: "8", uk: "6", eu: "39", cm: "25.0" },
    { us: "8.5", uk: "6.5", eu: "39.5", cm: "25.5" },
    { us: "9", uk: "7", eu: "40", cm: "26.0" },
    { us: "9.5", uk: "7.5", eu: "40.5", cm: "26.5" },
    { us: "10", uk: "8", eu: "41", cm: "27.0" },
    { us: "10.5", uk: "8.5", eu: "42", cm: "27.5" },
    { us: "11", uk: "9", eu: "42.5", cm: "28.0" },
    { us: "12", uk: "10", eu: "43.5", cm: "29.0" },
  ],
};

type Gender = "mens" | "womens";

export default function ShoeSizeConverter() {
  const [gender, setGender] = useState<Gender>("mens");
  const [selectedIdx, setSelectedIdx] = useState(4);

  const data = SIZES[gender];
  const selected = data[selectedIdx] || data[0];

  return (
    <div className="space-y-6">
      <div className="form-control">
        <label className="label"><span className="label-text font-semibold">Gender</span></label>
        <div className="flex gap-2">
          <button
            className={`btn flex-1 ${gender === "mens" ? "btn-primary" : "btn-outline"}`}
            onClick={() => { setGender("mens"); setSelectedIdx(Math.min(selectedIdx, SIZES.mens.length - 1)); }}
          >
            Men&apos;s
          </button>
          <button
            className={`btn flex-1 ${gender === "womens" ? "btn-primary" : "btn-outline"}`}
            onClick={() => { setGender("womens"); setSelectedIdx(Math.min(selectedIdx, SIZES.womens.length - 1)); }}
          >
            Women&apos;s
          </button>
        </div>
      </div>

      <div className="form-control">
        <label className="label"><span className="label-text font-semibold">US Size</span></label>
        <select
          className="select select-bordered w-full"
          value={selectedIdx}
          onChange={(e) => setSelectedIdx(Number(e.target.value))}
        >
          {data.map((s, i) => (
            <option key={i} value={i}>US {s.us}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "US", value: selected.us, color: "amber" },
          { label: "UK", value: selected.uk, color: "sky" },
          { label: "EU", value: selected.eu, color: "violet" },
          { label: "CM", value: selected.cm, color: "teal" },
        ].map((item) => (
          <div key={item.label} className={`bg-${item.color}-50 border border-${item.color}-200 border-l-4 border-l-${item.color}-400 rounded-xl p-4 text-center`}>
            <div className={`text-3xl font-bold text-${item.color}-700`}>{item.value}</div>
            <div className={`text-sm text-${item.color}-600 font-medium mt-1`}>{item.label}</div>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="table table-sm">
          <thead className="bg-base-200">
            <tr>
              <th>US</th>
              <th>UK</th>
              <th>EU</th>
              <th>CM</th>
            </tr>
          </thead>
          <tbody>
            {data.map((s, i) => (
              <tr key={i} className={i === selectedIdx ? "bg-primary/10 font-semibold" : ""}>
                <td>{s.us}</td>
                <td>{s.uk}</td>
                <td>{s.eu}</td>
                <td>{s.cm}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
