"use client";
import { useState, useMemo } from "react";

type Mode = "text-to-binary" | "binary-to-text";

export default function BinaryTranslator() {
  const [mode, setMode] = useState<Mode>("text-to-binary");
  const [input, setInput] = useState("Hello World!");

  const result = useMemo(() => {
    if (!input.trim()) return { binary: "", hex: "", octal: "", decimal: "", text: "", error: null };

    try {
      if (mode === "text-to-binary") {
        const bytes = new TextEncoder().encode(input);
        const binary = Array.from(bytes).map((b) => b.toString(2).padStart(8, "0")).join(" ");
        const hex = Array.from(bytes).map((b) => b.toString(16).padStart(2, "0").toUpperCase()).join(" ");
        const octal = Array.from(bytes).map((b) => b.toString(8).padStart(3, "0")).join(" ");
        const decimal = Array.from(bytes).map((b) => b.toString(10)).join(" ");
        return { binary, hex, octal, decimal, text: input, error: null };
      } else {
        const cleaned = input.replace(/\s+/g, "");
        if (!/^[01]+$/.test(cleaned)) throw new Error("Invalid binary input — use only 0 and 1");
        if (cleaned.length % 8 !== 0) throw new Error("Binary length must be a multiple of 8");
        const bytes: number[] = [];
        for (let i = 0; i < cleaned.length; i += 8) {
          bytes.push(parseInt(cleaned.slice(i, i + 8), 2));
        }
        const text = new TextDecoder().decode(new Uint8Array(bytes));
        const hex = bytes.map((b) => b.toString(16).padStart(2, "0").toUpperCase()).join(" ");
        const octal = bytes.map((b) => b.toString(8).padStart(3, "0")).join(" ");
        const decimal = bytes.map((b) => b.toString(10)).join(" ");
        const binary = bytes.map((b) => b.toString(2).padStart(8, "0")).join(" ");
        return { binary, hex, octal, decimal, text, error: null };
      }
    } catch (err) {
      return { binary: "", hex: "", octal: "", decimal: "", text: "", error: (err as Error).message };
    }
  }, [input, mode]);

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto">
      <div className="flex gap-2 flex-wrap">
        <button
          className={`btn btn-sm ${mode === "text-to-binary" ? "btn-primary" : "btn-outline"}`}
          onClick={() => { setMode("text-to-binary"); setInput("Hello World!"); }}
        >
          Text → Binary
        </button>
        <button
          className={`btn btn-sm ${mode === "binary-to-text" ? "btn-primary" : "btn-outline"}`}
          onClick={() => { setMode("binary-to-text"); setInput("01001000 01100101 01101100 01101100 01101111"); }}
        >
          Binary → Text
        </button>
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text font-bold">{mode === "text-to-binary" ? "Enter Text" : "Enter Binary (0s and 1s)"}</span>
        </label>
        <textarea
          className="textarea textarea-bordered w-full font-mono text-sm"
          rows={4}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={mode === "text-to-binary" ? "Type text here..." : "01001000 01100101 01101100 01101100 01101111"}
        />
      </div>

      {result.error && (
        <div className="alert alert-error text-sm">{result.error}</div>
      )}

      {!result.error && input.trim() && (
        <div className="flex flex-col gap-3">
          {mode === "binary-to-text" && (
            <ResultRow label="Text" value={result.text} onCopy={() => copy(result.text)} />
          )}
          <ResultRow label="Binary" value={result.binary} onCopy={() => copy(result.binary)} />
          <ResultRow label="Hexadecimal" value={result.hex} onCopy={() => copy(result.hex)} />
          <ResultRow label="Octal" value={result.octal} onCopy={() => copy(result.octal)} />
          <ResultRow label="Decimal" value={result.decimal} onCopy={() => copy(result.decimal)} />
        </div>
      )}
    </div>
  );
}

function ResultRow({ label, value, onCopy }: { label: string; value: string; onCopy: () => void }) {
  return (
    <div className="bg-base-200 rounded-lg p-3">
      <div className="flex justify-between items-center mb-1">
        <span className="font-bold text-sm">{label}</span>
        <button className="btn btn-xs btn-ghost" onClick={onCopy}>Copy</button>
      </div>
      <pre className="font-mono text-xs break-all whitespace-pre-wrap">{value}</pre>
    </div>
  );
}
