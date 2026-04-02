"use client";

import { useState, useCallback } from "react";

type ColorFormat = "hex" | "rgb" | "hsl";

type Color = {
  hex: string;
  r: number;
  g: number;
  b: number;
  h: number;
  s: number;
  l: number;
};

function randomColor(): Color {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const hex =
    "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("");
  const { h, s, l } = rgbToHsl(r, g, b);
  return { hex, r, g, b, h, s, l };
}

function rgbToHsl(r: number, g: number, b: number) {
  const rn = r / 255,
    gn = g / 255,
    bn = b / 255;
  const max = Math.max(rn, gn, bn),
    min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;
  if (max === min) return { h: 0, s: 0, l: Math.round(l * 100) };
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === rn) h = ((gn - bn) / d + (gn < bn ? 6 : 0)) / 6;
  else if (max === gn) h = ((bn - rn) / d + 2) / 6;
  else h = ((rn - gn) / d + 4) / 6;
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

function isDark(c: Color) {
  return 0.299 * c.r + 0.587 * c.g + 0.114 * c.b < 128;
}

function colorString(c: Color, fmt: ColorFormat) {
  if (fmt === "hex") return c.hex.toUpperCase();
  if (fmt === "rgb") return `rgb(${c.r}, ${c.g}, ${c.b})`;
  return `hsl(${c.h}, ${c.s}%, ${c.l}%)`;
}

const PALETTE_SIZE = 5;

export default function RandomColorGenerator() {
  const [main, setMain] = useState<Color>(() => randomColor());
  const [palette, setPalette] = useState<Color[]>(() =>
    Array.from({ length: PALETTE_SIZE }, randomColor),
  );
  const [format, setFormat] = useState<ColorFormat>("hex");
  const [copied, setCopied] = useState<string | null>(null);

  const copy = useCallback((text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(text);
      setTimeout(() => setCopied(null), 1500);
    });
  }, []);

  const newMain = () => setMain(randomColor());
  const newPalette = () =>
    setPalette(Array.from({ length: PALETTE_SIZE }, randomColor));

  const mainStr = colorString(main, format);

  return (
    <div className="max-w-lg mx-auto space-y-6 p-4">
      {/* Format selector */}
      <div className="flex justify-center gap-2">
        {(["hex", "rgb", "hsl"] as ColorFormat[]).map((f) => (
          <button
            key={f}
            className={`btn btn-sm ${format === f ? "btn-primary" : "btn-outline"}`}
            onClick={() => setFormat(f)}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Main color card */}
      <div
        className="rounded-2xl shadow-lg p-8 flex flex-col items-center gap-3 cursor-pointer transition-transform active:scale-95"
        style={{ backgroundColor: main.hex }}
        onClick={newMain}
        title="Click to generate new color"
      >
        <span
          className={`text-4xl font-black tracking-wider ${isDark(main) ? "text-white" : "text-black"}`}
        >
          {mainStr}
        </span>
        <span
          className={`text-sm opacity-70 ${isDark(main) ? "text-white" : "text-black"}`}
        >
          Click to randomize
        </span>
      </div>

      {/* Copy buttons */}
      <div className="flex flex-wrap gap-2 justify-center">
        {(["hex", "rgb", "hsl"] as ColorFormat[]).map((f) => {
          const val = colorString(main, f);
          return (
            <button
              key={f}
              className={`btn btn-sm ${copied === val ? "btn-success" : "btn-outline"}`}
              onClick={() => copy(val)}
            >
              {copied === val ? "✓ Copied!" : `Copy ${f.toUpperCase()}`}
            </button>
          );
        })}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 text-center text-sm">
        <div className="bg-base-200 rounded-lg p-3">
          <div className="font-bold text-base">R {main.r}</div>
          <div className="text-base-content/50">Red</div>
        </div>
        <div className="bg-base-200 rounded-lg p-3">
          <div className="font-bold text-base">G {main.g}</div>
          <div className="text-base-content/50">Green</div>
        </div>
        <div className="bg-base-200 rounded-lg p-3">
          <div className="font-bold text-base">B {main.b}</div>
          <div className="text-base-content/50">Blue</div>
        </div>
      </div>

      {/* Palette */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-sm text-base-content/70">
            Random Palette
          </h3>
          <button className="btn btn-xs btn-outline" onClick={newPalette}>
            New palette
          </button>
        </div>
        <div className="flex gap-2">
          {palette.map((c, i) => {
            const s = colorString(c, format);
            return (
              <div
                key={i}
                className="flex-1 rounded-xl h-20 flex items-end justify-center pb-2 cursor-pointer shadow transition-transform active:scale-95"
                style={{ backgroundColor: c.hex }}
                title={s}
                onClick={() => copy(s)}
              >
                <span
                  className={`text-[9px] font-bold px-1 rounded ${isDark(c) ? "text-white" : "text-black"}`}
                >
                  {format === "hex" ? c.hex.toUpperCase() : s}
                </span>
              </div>
            );
          })}
        </div>
        <p className="text-xs text-base-content/40 mt-1 text-center">
          Click a swatch to copy its value
        </p>
      </div>
    </div>
  );
}
