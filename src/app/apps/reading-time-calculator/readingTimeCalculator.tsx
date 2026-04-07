"use client";
import { useState, useMemo } from "react";

export default function ReadingTimeCalculator() {
  const [text, setText] = useState("");
  const [wpm, setWpm] = useState(238);

  const stats = useMemo(() => {
    if (!text.trim()) return null;
    const words = text.trim().split(/\s+/).length;
    const chars = text.length;
    const charsNoSpaces = text.replace(/\s/g, "").length;
    const sentences = (text.match(/[.!?]+/g) || []).length || 1;
    const paragraphs = text.split(/\n\s*\n/).filter((p) => p.trim()).length || 1;
    const syllables = countSyllables(text);
    const avgWordLength = charsNoSpaces / words;
    const avgSentenceLength = words / sentences;

    const readMinutes = words / wpm;
    const readSec = Math.round(readMinutes * 60);
    const speakMinutes = words / 150;
    const speakSec = Math.round(speakMinutes * 60);

    return {
      words,
      chars,
      charsNoSpaces,
      sentences,
      paragraphs,
      syllables,
      avgWordLength: avgWordLength.toFixed(1),
      avgSentenceLength: avgSentenceLength.toFixed(1),
      readMin: Math.floor(readSec / 60),
      readRemSec: readSec % 60,
      speakMin: Math.floor(speakSec / 60),
      speakRemSec: speakSec % 60,
    };
  }, [text, wpm]);

  return (
    <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto">
      <div className="form-control">
        <label className="label">
          <span className="label-text font-bold">Paste or type your text</span>
          <span className="label-text-alt">{stats ? `${stats.words} words` : "0 words"}</span>
        </label>
        <textarea
          className="textarea textarea-bordered w-full text-sm"
          rows={8}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your article, blog post, essay, or any text here to estimate reading time..."
        />
      </div>

      <div className="form-control w-48">
        <label className="label"><span className="label-text text-sm">Reading speed (WPM)</span></label>
        <select className="select select-bordered select-sm" value={wpm} onChange={(e) => setWpm(Number(e.target.value))}>
          <option value={150}>Slow (150 WPM)</option>
          <option value={200}>Below Average (200 WPM)</option>
          <option value={238}>Average (238 WPM)</option>
          <option value={300}>Fast (300 WPM)</option>
          <option value={400}>Very Fast (400 WPM)</option>
          <option value={600}>Speed Reader (600 WPM)</option>
        </select>
      </div>

      {stats && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
            <Stat label="Reading Time" value={stats.readMin > 0 ? `${stats.readMin}m ${stats.readRemSec}s` : `${stats.readRemSec}s`} />
            <Stat label="Speaking Time" value={stats.speakMin > 0 ? `${stats.speakMin}m ${stats.speakRemSec}s` : `${stats.speakRemSec}s`} />
            <Stat label="Words" value={String(stats.words)} />
            <Stat label="Characters" value={String(stats.chars)} />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
            <Stat label="Sentences" value={String(stats.sentences)} />
            <Stat label="Paragraphs" value={String(stats.paragraphs)} />
            <Stat label="Avg Word Length" value={`${stats.avgWordLength} chars`} />
            <Stat label="Avg Sentence" value={`${stats.avgSentenceLength} words`} />
          </div>
        </>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="stat bg-base-200 rounded-lg p-3">
      <div className="stat-title text-xs">{label}</div>
      <div className="stat-value text-lg">{value}</div>
    </div>
  );
}

function countSyllables(text: string): number {
  const words = text.toLowerCase().match(/[a-z]+/g) || [];
  let total = 0;
  for (const word of words) {
    let count = (word.match(/[aeiouy]+/g) || []).length;
    if (word.endsWith("e") && count > 1) count--;
    if (count === 0) count = 1;
    total += count;
  }
  return total;
}
