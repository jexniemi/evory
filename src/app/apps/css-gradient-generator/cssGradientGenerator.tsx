"use client";
import { useState, useMemo } from "react";

interface ColorStop {
  color: string;
  position: number;
}

type GradientType = "linear" | "radial" | "conic";

export default function CssGradientGenerator() {
  const [type, setType] = useState<GradientType>("linear");
  const [angle, setAngle] = useState(135);
  const [stops, setStops] = useState<ColorStop[]>([
    { color: "#667eea", position: 0 },
    { color: "#764ba2", position: 100 },
  ]);
  const [copied, setCopied] = useState(false);

  const gradientCSS = useMemo(() => {
    const stopsStr = stops.map((s) => `${s.color} ${s.position}%`).join(", ");
    switch (type) {
      case "linear":
        return `linear-gradient(${angle}deg, ${stopsStr})`;
      case "radial":
        return `radial-gradient(circle, ${stopsStr})`;
      case "conic":
        return `conic-gradient(from ${angle}deg, ${stopsStr})`;
    }
  }, [type, angle, stops]);

  const cssCode = `background: ${gradientCSS};`;

  const updateStop = (index: number, field: keyof ColorStop, value: string | number) => {
    setStops((prev) => prev.map((s, i) => (i === index ? { ...s, [field]: value } : s)));
  };

  const addStop = () => {
    const lastPos = stops[stops.length - 1]?.position ?? 0;
    const newPos = Math.min(lastPos + 10, 100);
    setStops([...stops, { color: "#00d2ff", position: newPos }]);
  };

  const removeStop = (index: number) => {
    if (stops.length <= 2) return;
    setStops(stops.filter((_, i) => i !== index));
  };

  const copyCSS = async () => {
    await navigator.clipboard.writeText(cssCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const presets = [
    { name: "Sunset", stops: [{ color: "#f093fb", position: 0 }, { color: "#f5576c", position: 100 }], angle: 135 },
    { name: "Ocean", stops: [{ color: "#667eea", position: 0 }, { color: "#764ba2", position: 100 }], angle: 135 },
    { name: "Forest", stops: [{ color: "#11998e", position: 0 }, { color: "#38ef7d", position: 100 }], angle: 135 },
    { name: "Fire", stops: [{ color: "#f12711", position: 0 }, { color: "#f5af19", position: 100 }], angle: 90 },
    { name: "Night Sky", stops: [{ color: "#0f0c29", position: 0 }, { color: "#302b63", position: 50 }, { color: "#24243e", position: 100 }], angle: 180 },
    { name: "Rainbow", stops: [{ color: "#ff0000", position: 0 }, { color: "#ff8800", position: 20 }, { color: "#ffff00", position: 40 }, { color: "#00ff00", position: 60 }, { color: "#0000ff", position: 80 }, { color: "#8800ff", position: 100 }], angle: 90 },
  ];

  return (
    <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto">
      {/* Preview */}
      <div className="rounded-xl border border-base-300 overflow-hidden" style={{ background: gradientCSS, height: "200px" }} />

      {/* Controls */}
      <div className="flex gap-3 flex-wrap items-end">
        <div className="form-control">
          <label className="label"><span className="label-text text-sm">Type</span></label>
          <select className="select select-bordered select-sm" value={type} onChange={(e) => setType(e.target.value as GradientType)}>
            <option value="linear">Linear</option>
            <option value="radial">Radial</option>
            <option value="conic">Conic</option>
          </select>
        </div>
        {(type === "linear" || type === "conic") && (
          <div className="form-control">
            <label className="label"><span className="label-text text-sm">Angle: {angle}°</span></label>
            <input type="range" className="range range-sm range-primary w-32" min={0} max={360} value={angle} onChange={(e) => setAngle(Number(e.target.value))} />
          </div>
        )}
        <button className="btn btn-sm btn-outline" onClick={addStop}>+ Add Color</button>
      </div>

      {/* Stops */}
      <div className="flex flex-col gap-2">
        {stops.map((stop, i) => (
          <div key={i} className="flex gap-2 items-center flex-wrap">
            <input
              type="color"
              className="w-10 h-10 rounded cursor-pointer border-0"
              value={stop.color}
              onChange={(e) => updateStop(i, "color", e.target.value)}
            />
            <input
              type="text"
              className="input input-bordered input-sm w-24 font-mono text-xs"
              value={stop.color}
              onChange={(e) => updateStop(i, "color", e.target.value)}
            />
            <input
              type="range"
              className="range range-xs range-primary flex-1 min-w-[80px]"
              min={0}
              max={100}
              value={stop.position}
              onChange={(e) => updateStop(i, "position", Number(e.target.value))}
            />
            <span className="text-xs w-8">{stop.position}%</span>
            {stops.length > 2 && (
              <button className="btn btn-xs btn-ghost text-error" onClick={() => removeStop(i)}>✕</button>
            )}
          </div>
        ))}
      </div>

      {/* CSS Output */}
      <div className="bg-base-200 rounded-lg p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-sm">CSS Code</span>
          <button className="btn btn-xs btn-primary" onClick={copyCSS}>{copied ? "Copied!" : "Copy"}</button>
        </div>
        <pre className="font-mono text-xs break-all whitespace-pre-wrap">{cssCode}</pre>
      </div>

      {/* Presets */}
      <div>
        <span className="font-bold text-sm">Presets</span>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-2">
          {presets.map((p) => (
            <button
              key={p.name}
              className="rounded-lg border border-base-300 h-12 text-xs font-bold text-white flex items-end justify-center pb-1"
              style={{ background: `linear-gradient(135deg, ${p.stops.map((s) => `${s.color} ${s.position}%`).join(", ")})` }}
              onClick={() => { setStops(p.stops); setAngle(p.angle); setType("linear"); }}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
