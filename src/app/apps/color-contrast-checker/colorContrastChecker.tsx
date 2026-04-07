"use client";
import { useState, useMemo } from "react";

function hexToRgb(hex: string): [number, number, number] | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
}

function relativeLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function contrastRatio(l1: number, l2: number): number {
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

export default function ColorContrastChecker() {
  const [fg, setFg] = useState("#1a1a2e");
  const [bg, setBg] = useState("#e8e8e8");

  const result = useMemo(() => {
    const fgRgb = hexToRgb(fg);
    const bgRgb = hexToRgb(bg);
    if (!fgRgb || !bgRgb) return null;

    const fgLum = relativeLuminance(...fgRgb);
    const bgLum = relativeLuminance(...bgRgb);
    const ratio = contrastRatio(fgLum, bgLum);

    return {
      ratio,
      aaLargeText: ratio >= 3,
      aaNormalText: ratio >= 4.5,
      aaaLargeText: ratio >= 4.5,
      aaaNormalText: ratio >= 7,
    };
  }, [fg, bg]);

  const swap = () => {
    setFg(bg);
    setBg(fg);
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
      <div className="grid grid-cols-2 gap-3">
        <div className="form-control">
          <label className="label"><span className="label-text">Text Color</span></label>
          <div className="flex gap-2 items-center">
            <input type="color" value={fg} onChange={(e) => setFg(e.target.value)} className="w-10 h-10 cursor-pointer rounded border-0" />
            <input type="text" className="input input-bordered w-full font-mono text-sm" value={fg} onChange={(e) => setFg(e.target.value)} maxLength={7} />
          </div>
        </div>
        <div className="form-control">
          <label className="label"><span className="label-text">Background Color</span></label>
          <div className="flex gap-2 items-center">
            <input type="color" value={bg} onChange={(e) => setBg(e.target.value)} className="w-10 h-10 cursor-pointer rounded border-0" />
            <input type="text" className="input input-bordered w-full font-mono text-sm" value={bg} onChange={(e) => setBg(e.target.value)} maxLength={7} />
          </div>
        </div>
      </div>

      <button className="btn btn-outline btn-sm self-center" onClick={swap}>⇄ Swap Colors</button>

      <div className="rounded-lg p-6 border" style={{ backgroundColor: bg, color: fg }}>
        <p className="text-2xl font-bold mb-1">Large Text (24px+)</p>
        <p className="text-base">Normal text (16px). The quick brown fox jumps over the lazy dog.</p>
        <p className="text-sm mt-1">Small text (14px) for fine print and captions.</p>
      </div>

      {result && (
        <>
          <div className="card bg-base-200 p-6 text-center">
            <div className="text-4xl font-bold">{result.ratio.toFixed(2)}:1</div>
            <div className="text-sm opacity-70 mt-1">Contrast Ratio</div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className={`card p-4 text-center ${result.aaNormalText ? "bg-success/20" : "bg-error/20"}`}>
              <div className="text-xl font-bold">{result.aaNormalText ? "Pass ✓" : "Fail ✗"}</div>
              <div className="text-xs opacity-70">AA Normal Text</div>
              <div className="text-xs opacity-50">≥ 4.5:1</div>
            </div>
            <div className={`card p-4 text-center ${result.aaLargeText ? "bg-success/20" : "bg-error/20"}`}>
              <div className="text-xl font-bold">{result.aaLargeText ? "Pass ✓" : "Fail ✗"}</div>
              <div className="text-xs opacity-70">AA Large Text</div>
              <div className="text-xs opacity-50">≥ 3:1</div>
            </div>
            <div className={`card p-4 text-center ${result.aaaNormalText ? "bg-success/20" : "bg-error/20"}`}>
              <div className="text-xl font-bold">{result.aaaNormalText ? "Pass ✓" : "Fail ✗"}</div>
              <div className="text-xs opacity-70">AAA Normal Text</div>
              <div className="text-xs opacity-50">≥ 7:1</div>
            </div>
            <div className={`card p-4 text-center ${result.aaaLargeText ? "bg-success/20" : "bg-error/20"}`}>
              <div className="text-xl font-bold">{result.aaaLargeText ? "Pass ✓" : "Fail ✗"}</div>
              <div className="text-xs opacity-70">AAA Large Text</div>
              <div className="text-xs opacity-50">≥ 4.5:1</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
