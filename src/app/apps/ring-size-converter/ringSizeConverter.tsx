"use client";
import { useState } from "react";

const sizeChart = [
  { us: 3, uk: "F", eu: 44, diameter: 14.0, circumference: 44.0 },
  { us: 3.5, uk: "G", eu: 45, diameter: 14.4, circumference: 45.2 },
  { us: 4, uk: "H", eu: 46.5, diameter: 14.8, circumference: 46.5 },
  { us: 4.5, uk: "I", eu: 47.8, diameter: 15.2, circumference: 47.8 },
  { us: 5, uk: "J", eu: 49, diameter: 15.6, circumference: 49.0 },
  { us: 5.5, uk: "K", eu: 50.3, diameter: 16.0, circumference: 50.3 },
  { us: 6, uk: "L", eu: 51.5, diameter: 16.5, circumference: 51.8 },
  { us: 6.5, uk: "M", eu: 52.8, diameter: 16.9, circumference: 53.1 },
  { us: 7, uk: "N", eu: 54, diameter: 17.3, circumference: 54.4 },
  { us: 7.5, uk: "O", eu: 55.3, diameter: 17.7, circumference: 55.7 },
  { us: 8, uk: "P", eu: 56.5, diameter: 18.1, circumference: 57.0 },
  { us: 8.5, uk: "Q", eu: 57.8, diameter: 18.5, circumference: 58.3 },
  { us: 9, uk: "R", eu: 59, diameter: 18.9, circumference: 59.5 },
  { us: 9.5, uk: "S", eu: 60.3, diameter: 19.4, circumference: 60.8 },
  { us: 10, uk: "T", eu: 61.5, diameter: 19.8, circumference: 62.1 },
  { us: 10.5, uk: "U", eu: 62.8, diameter: 20.2, circumference: 63.4 },
  { us: 11, uk: "V", eu: 64, diameter: 20.6, circumference: 64.6 },
  { us: 11.5, uk: "W", eu: 65.3, diameter: 21.0, circumference: 65.9 },
  { us: 12, uk: "X", eu: 66.5, diameter: 21.4, circumference: 67.2 },
  { us: 12.5, uk: "Y", eu: 67.8, diameter: 21.8, circumference: 68.5 },
  { us: 13, uk: "Z", eu: 69, diameter: 22.2, circumference: 69.7 },
];

type System = "us" | "uk" | "eu" | "diameter" | "circumference";

export default function RingSizeConverter() {
  const [system, setSystem] = useState<System>("us");
  const [selectedIndex, setSelectedIndex] = useState(6);

  const current = sizeChart[selectedIndex];

  const getOptions = () => {
    return sizeChart.map((s, i) => {
      let label = "";
      if (system === "us") label = `US ${s.us}`;
      else if (system === "uk") label = `UK ${s.uk}`;
      else if (system === "eu") label = `EU ${s.eu}`;
      else if (system === "diameter") label = `${s.diameter} mm`;
      else label = `${s.circumference} mm`;
      return { label, index: i };
    });
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
      <div className="form-control">
        <label className="label"><span className="label-text">Size System</span></label>
        <select className="select select-bordered w-full" value={system} onChange={(e) => setSystem(e.target.value as System)}>
          <option value="us">US / Canada</option>
          <option value="uk">UK / Australia</option>
          <option value="eu">EU / International</option>
          <option value="diameter">Inner Diameter (mm)</option>
          <option value="circumference">Circumference (mm)</option>
        </select>
      </div>

      <div className="form-control">
        <label className="label"><span className="label-text">Select Size</span></label>
        <select className="select select-bordered w-full" value={selectedIndex} onChange={(e) => setSelectedIndex(Number(e.target.value))}>
          {getOptions().map((o) => (
            <option key={o.index} value={o.index}>{o.label}</option>
          ))}
        </select>
      </div>

      <div className="card bg-base-200 p-6 mt-2">
        <h3 className="text-lg font-bold mb-3">Converted Sizes</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="stat bg-base-100 rounded-lg p-3">
            <div className="stat-title text-xs">US / Canada</div>
            <div className="stat-value text-xl">{current.us}</div>
          </div>
          <div className="stat bg-base-100 rounded-lg p-3">
            <div className="stat-title text-xs">UK / Australia</div>
            <div className="stat-value text-xl">{current.uk}</div>
          </div>
          <div className="stat bg-base-100 rounded-lg p-3">
            <div className="stat-title text-xs">EU / International</div>
            <div className="stat-value text-xl">{current.eu}</div>
          </div>
          <div className="stat bg-base-100 rounded-lg p-3">
            <div className="stat-title text-xs">Diameter</div>
            <div className="stat-value text-xl">{current.diameter} mm</div>
          </div>
          <div className="col-span-2 stat bg-base-100 rounded-lg p-3">
            <div className="stat-title text-xs">Circumference</div>
            <div className="stat-value text-xl">{current.circumference} mm</div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mt-2">
        <table className="table table-xs">
          <thead className="bg-base-200">
            <tr>
              <th>US</th>
              <th>UK</th>
              <th>EU</th>
              <th>Ø mm</th>
              <th>Circ mm</th>
            </tr>
          </thead>
          <tbody>
            {sizeChart.map((s, i) => (
              <tr key={i} className={i === selectedIndex ? "bg-primary/10 font-bold" : ""} onClick={() => setSelectedIndex(i)} style={{ cursor: "pointer" }}>
                <td>{s.us}</td>
                <td>{s.uk}</td>
                <td>{s.eu}</td>
                <td>{s.diameter}</td>
                <td>{s.circumference}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
