"use client";
import { useState } from "react";

async function computeHash(algorithm: string, text: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest(algorithm, data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export default function HashGenerator() {
  const [input, setInput] = useState("Hello, World!");
  const [hashes, setHashes] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState("");

  const generate = async () => {
    const algorithms = [
      { name: "SHA-1", algo: "SHA-1" },
      { name: "SHA-256", algo: "SHA-256" },
      { name: "SHA-384", algo: "SHA-384" },
      { name: "SHA-512", algo: "SHA-512" },
    ];

    const results: Record<string, string> = {};
    for (const { name, algo } of algorithms) {
      results[name] = await computeHash(algo, input);
    }
    setHashes(results);
  };

  const copyToClipboard = async (text: string, name: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(name);
    setTimeout(() => setCopied(""), 2000);
  };

  // Auto-generate on mount and input change
  useState(() => { generate(); });

  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto">
      <div className="form-control">
        <label className="label"><span className="label-text">Input Text</span></label>
        <textarea
          className="textarea textarea-bordered w-full font-mono text-sm min-h-24"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to hash..."
        />
      </div>

      <button className="btn btn-primary w-full" onClick={generate}>Generate Hashes</button>

      {Object.keys(hashes).length > 0 && (
        <div className="flex flex-col gap-3 mt-2">
          {Object.entries(hashes).map(([name, hash]) => (
            <div key={name} className="card bg-base-200 p-4">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-sm">{name}</span>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() => copyToClipboard(hash, name)}
                >
                  {copied === name ? "Copied!" : "Copy"}
                </button>
              </div>
              <div className="font-mono text-xs break-all opacity-80">{hash}</div>
              <div className="text-xs opacity-50 mt-1">{hash.length * 4} bits ({hash.length} hex chars)</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
