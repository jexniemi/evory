"use client";
import { useState } from "react";

const PLATFORM_LIMITS = [
  { name: "Twitter / X", limit: 280 },
  { name: "Instagram Caption", limit: 2200 },
  { name: "LinkedIn Post", limit: 3000 },
  { name: "TikTok Caption", limit: 2200 },
  { name: "YouTube Title", limit: 100 },
  { name: "Meta Description", limit: 160 },
];

export default function CharacterCounter() {
  const [text, setText] = useState("");

  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, "").length;
  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const sentences =
    text.trim() === ""
      ? 0
      : text.split(/[.!?]+/).filter((s) => s.trim()).length;
  const paragraphs =
    text.trim() === "" ? 0 : text.split(/\n\n+/).filter((p) => p.trim()).length;
  const readingTime = Math.max(1, Math.ceil(words / 225));
  const speakingTime = Math.max(1, Math.ceil(words / 150));

  return (
    <div className="flex flex-col gap-6">
      <textarea
        className="textarea textarea-bordered w-full min-h-[200px] text-base"
        placeholder="Type or paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Stats grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {[
          { label: "Characters", value: characters },
          { label: "No Spaces", value: charactersNoSpaces },
          { label: "Words", value: words },
          { label: "Sentences", value: sentences },
          { label: "Paragraphs", value: paragraphs },
          { label: "Reading Time", value: `${readingTime} min` },
          { label: "Speaking Time", value: `${speakingTime} min` },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-base-200 rounded-lg p-4 text-center"
          >
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-base-content/60">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Platform limits */}
      {characters > 0 && (
        <div>
          <h3 className="font-semibold mb-3">Platform Character Limits</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {PLATFORM_LIMITS.map((platform) => {
              const percentage = Math.min(
                100,
                Math.round((characters / platform.limit) * 100),
              );
              const isOver = characters > platform.limit;
              return (
                <div key={platform.name} className="bg-base-200 rounded-lg p-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{platform.name}</span>
                    <span className={isOver ? "text-error font-bold" : ""}>
                      {characters}/{platform.limit}
                    </span>
                  </div>
                  <progress
                    className={`progress w-full ${isOver ? "progress-error" : "progress-primary"}`}
                    value={percentage}
                    max={100}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
