"use client";
import { useState, useMemo } from "react";

export default function PpiCalculator() {
  const [widthPx, setWidthPx] = useState(2560);
  const [heightPx, setHeightPx] = useState(1440);
  const [diagonal, setDiagonal] = useState(27);

  const result = useMemo(() => {
    if (widthPx <= 0 || heightPx <= 0 || diagonal <= 0) return null;
    const diagonalPx = Math.sqrt(widthPx * widthPx + heightPx * heightPx);
    const ppi = diagonalPx / diagonal;
    const dotPitch = 25.4 / ppi; // mm
    const widthIn = widthPx / ppi;
    const heightIn = heightPx / ppi;
    const widthCm = widthIn * 2.54;
    const heightCm = heightIn * 2.54;
    const totalPixels = widthPx * heightPx;
    const aspectRatio = gcd(widthPx, heightPx);

    return {
      ppi: ppi.toFixed(1),
      dotPitch: dotPitch.toFixed(3),
      diagonalPx: Math.round(diagonalPx),
      totalPixels,
      megapixels: (totalPixels / 1_000_000).toFixed(2),
      widthIn: widthIn.toFixed(1),
      heightIn: heightIn.toFixed(1),
      widthCm: widthCm.toFixed(1),
      heightCm: heightCm.toFixed(1),
      aspectW: widthPx / aspectRatio,
      aspectH: heightPx / aspectRatio,
    };
  }, [widthPx, heightPx, diagonal]);

  const presets = [
    { name: 'iPhone 15 Pro', w: 2556, h: 1179, d: 6.1 },
    { name: 'iPad Pro 12.9"', w: 2732, h: 2048, d: 12.9 },
    { name: 'MacBook Pro 14"', w: 3024, h: 1964, d: 14.2 },
    { name: '1080p 24"', w: 1920, h: 1080, d: 24 },
    { name: '1440p 27"', w: 2560, h: 1440, d: 27 },
    { name: '4K 27"', w: 3840, h: 2160, d: 27 },
    { name: '4K 32"', w: 3840, h: 2160, d: 32 },
    { name: 'Samsung S24 Ultra', w: 3120, h: 1440, d: 6.8 },
  ];

  return (
    <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto">
      {/* Presets */}
      <div className="flex gap-2 flex-wrap">
        {presets.map((p) => (
          <button
            key={p.name}
            className="btn btn-xs btn-outline"
            onClick={() => { setWidthPx(p.w); setHeightPx(p.h); setDiagonal(p.d); }}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="form-control">
          <label className="label"><span className="label-text text-sm">Width (px)</span></label>
          <input type="number" className="input input-bordered input-sm" value={widthPx} onChange={(e) => setWidthPx(Number(e.target.value))} min={1} />
        </div>
        <div className="form-control">
          <label className="label"><span className="label-text text-sm">Height (px)</span></label>
          <input type="number" className="input input-bordered input-sm" value={heightPx} onChange={(e) => setHeightPx(Number(e.target.value))} min={1} />
        </div>
        <div className="form-control">
          <label className="label"><span className="label-text text-sm">Screen Size (inches)</span></label>
          <input type="number" className="input input-bordered input-sm" value={diagonal} onChange={(e) => setDiagonal(Number(e.target.value))} min={0.1} step={0.1} />
        </div>
      </div>

      {result && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-center">
            <Stat label="PPI" value={result.ppi} highlight />
            <Stat label="Dot Pitch" value={`${result.dotPitch} mm`} />
            <Stat label="Megapixels" value={`${result.megapixels} MP`} />
            <Stat label="Aspect Ratio" value={`${result.aspectW}:${result.aspectH}`} />
            <Stat label="Display Size" value={`${result.widthCm} × ${result.heightCm} cm`} />
            <Stat label="Total Pixels" value={result.totalPixels.toLocaleString()} />
          </div>

          <div className="text-sm mt-1">
            {Number(result.ppi) >= 300 ? (
              <div className="badge badge-success gap-1">Retina-grade (300+ PPI)</div>
            ) : Number(result.ppi) >= 200 ? (
              <div className="badge badge-info gap-1">High density (200+ PPI)</div>
            ) : Number(result.ppi) >= 100 ? (
              <div className="badge badge-warning gap-1">Standard density</div>
            ) : (
              <div className="badge badge-error gap-1">Low density</div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

function Stat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`stat rounded-lg p-3 ${highlight ? "bg-primary text-primary-content" : "bg-base-200"}`}>
      <div className={`stat-title text-xs ${highlight ? "text-primary-content/70" : ""}`}>{label}</div>
      <div className="stat-value text-lg">{value}</div>
    </div>
  );
}

function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) { [a, b] = [b, a % b]; }
  return a;
}
