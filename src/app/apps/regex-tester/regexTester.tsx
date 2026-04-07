"use client";
import { useState, useMemo } from "react";

export default function RegexTester() {
  const [pattern, setPattern] = useState("\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b");
  const [flags, setFlags] = useState("gi");
  const [testString, setTestString] = useState("Contact us at hello@example.com or support@company.org for help.");

  const result = useMemo(() => {
    if (!pattern) return { matches: [], error: null };
    try {
      const regex = new RegExp(pattern, flags);
      const matches: { match: string; index: number; groups: string[] }[] = [];
      let m;

      if (flags.includes("g")) {
        while ((m = regex.exec(testString)) !== null) {
          matches.push({
            match: m[0],
            index: m.index,
            groups: m.slice(1),
          });
          if (m[0].length === 0) regex.lastIndex++;
        }
      } else {
        m = regex.exec(testString);
        if (m) {
          matches.push({
            match: m[0],
            index: m.index,
            groups: m.slice(1),
          });
        }
      }

      return { matches, error: null };
    } catch (err) {
      return { matches: [], error: (err as Error).message };
    }
  }, [pattern, flags, testString]);

  const highlightedText = useMemo(() => {
    if (!pattern || result.error || result.matches.length === 0) return null;
    try {
      const regex = new RegExp(pattern, flags.includes("g") ? flags : flags + "g");
      const parts: { text: string; highlighted: boolean }[] = [];
      let lastIndex = 0;
      let m;

      while ((m = regex.exec(testString)) !== null) {
        if (m.index > lastIndex) {
          parts.push({ text: testString.slice(lastIndex, m.index), highlighted: false });
        }
        parts.push({ text: m[0], highlighted: true });
        lastIndex = m.index + m[0].length;
        if (m[0].length === 0) { regex.lastIndex++; lastIndex++; }
      }
      if (lastIndex < testString.length) {
        parts.push({ text: testString.slice(lastIndex), highlighted: false });
      }
      return parts;
    } catch {
      return null;
    }
  }, [pattern, flags, testString, result]);

  const flagOptions = [
    { value: "g", label: "Global (g)" },
    { value: "i", label: "Case-insensitive (i)" },
    { value: "m", label: "Multiline (m)" },
    { value: "s", label: "Dotall (s)" },
  ];

  const toggleFlag = (f: string) => {
    setFlags((prev) => (prev.includes(f) ? prev.replace(f, "") : prev + f));
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto">
      <div className="form-control">
        <label className="label"><span className="label-text">Regular Expression</span></label>
        <div className="flex items-center gap-1">
          <span className="text-lg opacity-50">/</span>
          <input
            type="text"
            className="input input-bordered w-full font-mono text-sm"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            placeholder="Enter regex pattern"
          />
          <span className="text-lg opacity-50">/{flags}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {flagOptions.map((f) => (
          <label key={f.value} className="cursor-pointer flex items-center gap-1">
            <input
              type="checkbox"
              className="checkbox checkbox-sm checkbox-primary"
              checked={flags.includes(f.value)}
              onChange={() => toggleFlag(f.value)}
            />
            <span className="label-text text-sm">{f.label}</span>
          </label>
        ))}
      </div>

      <div className="form-control">
        <label className="label"><span className="label-text">Test String</span></label>
        <textarea
          className="textarea textarea-bordered w-full font-mono text-sm min-h-24"
          value={testString}
          onChange={(e) => setTestString(e.target.value)}
          placeholder="Enter text to test against"
        />
      </div>

      {result.error && (
        <div className="alert alert-error text-sm">
          <span>Invalid regex: {result.error}</span>
        </div>
      )}

      {highlightedText && (
        <div className="card bg-base-200 p-4">
          <h3 className="text-sm font-bold mb-2">Highlighted Matches</h3>
          <div className="font-mono text-sm whitespace-pre-wrap break-all">
            {highlightedText.map((part, i) =>
              part.highlighted ? (
                <mark key={i} className="bg-primary/30 text-primary-content rounded px-0.5">{part.text}</mark>
              ) : (
                <span key={i}>{part.text}</span>
              )
            )}
          </div>
        </div>
      )}

      <div className="card bg-base-200 p-4">
        <h3 className="text-sm font-bold mb-2">
          Matches: <span className="badge badge-primary badge-sm">{result.matches.length}</span>
        </h3>
        {result.matches.length === 0 && !result.error && (
          <p className="text-sm opacity-60">No matches found</p>
        )}
        {result.matches.map((m, i) => (
          <div key={i} className="bg-base-100 rounded p-2 mb-2 text-sm font-mono">
            <div><span className="opacity-50">Match {i + 1}:</span> <span className="text-primary font-bold">{m.match}</span></div>
            <div className="opacity-50">Index: {m.index}</div>
            {m.groups.length > 0 && (
              <div className="opacity-50">Groups: {m.groups.map((g, j) => <span key={j} className="badge badge-sm badge-ghost mr-1">{g || "(empty)"}</span>)}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
