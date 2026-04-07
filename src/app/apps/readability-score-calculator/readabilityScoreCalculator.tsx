"use client";
import { useState, useMemo } from "react";

export default function ReadabilityScoreCalculator() {
  const [text, setText] = useState(
    "The quick brown fox jumps over the lazy dog. This is a simple example sentence to test readability. Short sentences are easier to read than long complex ones."
  );

  const stats = useMemo(() => {
    if (!text.trim()) {
      return { words: 0, sentences: 0, syllables: 0, chars: 0, fleschKincaid: 0, fleschEase: 0, gunningFog: 0, avgWordLen: 0 };
    }

    const words = text.trim().split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0);
    const sentenceCount = Math.max(sentences.length, 1);
    const chars = text.replace(/\s/g, "").length;

    const countSyllables = (word: string): number => {
      word = word.toLowerCase().replace(/[^a-z]/g, "");
      if (word.length <= 3) return 1;
      word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "");
      word = word.replace(/^y/, "");
      const vowelGroups = word.match(/[aeiouy]{1,2}/g);
      return vowelGroups ? Math.max(vowelGroups.length, 1) : 1;
    };

    const syllables = words.reduce((sum, w) => sum + countSyllables(w), 0);
    const complexWords = words.filter((w) => countSyllables(w) >= 3).length;

    const fleschEase = 206.835 - 1.015 * (wordCount / sentenceCount) - 84.6 * (syllables / wordCount);
    const fleschKincaid = 0.39 * (wordCount / sentenceCount) + 11.8 * (syllables / wordCount) - 15.59;
    const gunningFog = 0.4 * ((wordCount / sentenceCount) + 100 * (complexWords / wordCount));
    const avgWordLen = chars / Math.max(wordCount, 1);

    return {
      words: wordCount,
      sentences: sentenceCount,
      syllables,
      chars,
      fleschKincaid: Math.max(0, fleschKincaid),
      fleschEase: Math.min(100, Math.max(0, fleschEase)),
      gunningFog: Math.max(0, gunningFog),
      avgWordLen,
    };
  }, [text]);

  const getEaseLabel = (score: number) => {
    if (score >= 90) return { label: "Very Easy", color: "text-green-700", bg: "bg-green-50 border-green-200" };
    if (score >= 80) return { label: "Easy", color: "text-green-600", bg: "bg-green-50 border-green-200" };
    if (score >= 70) return { label: "Fairly Easy", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200" };
    if (score >= 60) return { label: "Standard", color: "text-sky-600", bg: "bg-sky-50 border-sky-200" };
    if (score >= 50) return { label: "Fairly Difficult", color: "text-amber-600", bg: "bg-amber-50 border-amber-200" };
    if (score >= 30) return { label: "Difficult", color: "text-orange-600", bg: "bg-orange-50 border-orange-200" };
    return { label: "Very Difficult", color: "text-red-600", bg: "bg-red-50 border-red-200" };
  };

  const easeInfo = getEaseLabel(stats.fleschEase);

  return (
    <div className="space-y-6">
      <div className="form-control">
        <label className="label"><span className="label-text font-semibold">Paste your text</span></label>
        <textarea
          className="textarea textarea-bordered min-h-40 text-base"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste or type your text here..."
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Words", value: stats.words },
          { label: "Sentences", value: stats.sentences },
          { label: "Syllables", value: stats.syllables },
          { label: "Characters", value: stats.chars },
        ].map((s) => (
          <div key={s.label} className="bg-base-200 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold">{s.value}</div>
            <div className="text-xs text-base-content/60">{s.label}</div>
          </div>
        ))}
      </div>

      <div className={`rounded-xl border p-5 text-center ${easeInfo.bg}`}>
        <div className={`text-4xl font-bold ${easeInfo.color}`}>
          {stats.fleschEase.toFixed(1)}
        </div>
        <div className={`text-sm font-semibold mt-1 ${easeInfo.color}`}>
          Flesch Reading Ease — {easeInfo.label}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-amber-50 border border-amber-200 border-l-4 border-l-amber-400 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-amber-700">{stats.fleschKincaid.toFixed(1)}</div>
          <div className="text-sm text-amber-600 font-medium">Flesch-Kincaid Grade</div>
        </div>
        <div className="bg-sky-50 border border-sky-200 border-l-4 border-l-sky-400 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-sky-700">{stats.gunningFog.toFixed(1)}</div>
          <div className="text-sm text-sky-600 font-medium">Gunning Fog Index</div>
        </div>
        <div className="bg-violet-50 border border-violet-200 border-l-4 border-l-violet-400 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-violet-700">{stats.avgWordLen.toFixed(1)}</div>
          <div className="text-sm text-violet-600 font-medium">Avg Word Length</div>
        </div>
      </div>
    </div>
  );
}
