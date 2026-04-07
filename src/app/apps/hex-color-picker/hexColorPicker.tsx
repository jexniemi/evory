"use client";
import { useState, useCallback } from "react";

export default function HexColorPicker() {
  const [hex, setHex] = useState("#3B82F6");
  const [r, setR] = useState(59);
  const [g, setG] = useState(130);
  const [b, setB] = useState(246);

  const hexToRgb = useCallback((hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      setR(parseInt(result[1], 16));
      setG(parseInt(result[2], 16));
      setB(parseInt(result[3], 16));
    }
  }, []);

  const rgbToHex = useCallback((r: number, g: number, b: number) => {
    return (
      "#" +
      [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")
    ).toUpperCase();
  }, []);

  const handleHexChange = (value: string) => {
    setHex(value);
    if (/^#[0-9A-Fa-f]{6}$/.test(value)) {
      hexToRgb(value);
    }
  };

  const handleRgbChange = (channel: "r" | "g" | "b", value: number) => {
    const clamped = Math.max(0, Math.min(255, value));
    const newR = channel === "r" ? clamped : r;
    const newG = channel === "g" ? clamped : g;
    const newB = channel === "b" ? clamped : b;
    setR(newR);
    setG(newG);
    setB(newB);
    setHex(rgbToHex(newR, newG, newB));
  };

  const hslFromRgb = (r: number, g: number, b: number) => {
    const rr = r / 255, gg = g / 255, bb = b / 255;
    const max = Math.max(rr, gg, bb), min = Math.min(rr, gg, bb);
    const l = (max + min) / 2;
    let h = 0, s = 0;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case rr: h = ((gg - bb) / d + (gg < bb ? 6 : 0)) / 6; break;
        case gg: h = ((bb - rr) / d + 2) / 6; break;
        case bb: h = ((rr - gg) / d + 4) / 6; break;
      }
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
  };

  const hsl = hslFromRgb(r, g, b);
  const copied = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    copied[1](true);
    setTimeout(() => copied[1](false), 1500);
  };

  return (
    <div className="space-y-6">
      <div
        className="w-full h-48 rounded-2xl border-2 border-base-300 shadow-inner transition-colors duration-200"
        style={{ backgroundColor: hex }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label"><span className="label-text font-semibold">HEX</span></label>
          <input
            type="text"
            className="input input-bordered font-mono text-lg"
            value={hex}
            onChange={(e) => handleHexChange(e.target.value)}
            maxLength={7}
          />
        </div>
        <div className="form-control">
          <label className="label"><span className="label-text font-semibold">Color Picker</span></label>
          <input
            type="color"
            className="w-full h-12 rounded-lg cursor-pointer border border-base-300"
            value={hex}
            onChange={(e) => handleHexChange(e.target.value.toUpperCase())}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {([["R", r, "r"], ["G", g, "g"], ["B", b, "b"]] as const).map(
          ([label, value, channel]) => (
            <div key={label} className="form-control">
              <label className="label"><span className="label-text font-semibold">{label}</span></label>
              <input
                type="number"
                className="input input-bordered text-center"
                min={0}
                max={255}
                value={value}
                onChange={(e) => handleRgbChange(channel, Number(e.target.value))}
              />
              <input
                type="range"
                min={0}
                max={255}
                value={value}
                onChange={(e) => handleRgbChange(channel, Number(e.target.value))}
                className="range range-xs mt-2"
              />
            </div>
          )
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          { label: "HEX", value: hex },
          { label: "RGB", value: `rgb(${r}, ${g}, ${b})` },
          { label: "HSL", value: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)` },
        ].map((item) => (
          <button
            key={item.label}
            className="btn btn-outline btn-sm font-mono gap-2"
            onClick={() => copyToClipboard(item.value)}
          >
            📋 {item.value}
          </button>
        ))}
      </div>

      {copied[0] && (
        <div className="text-center text-sm text-success font-medium">
          Copied to clipboard!
        </div>
      )}
    </div>
  );
}
