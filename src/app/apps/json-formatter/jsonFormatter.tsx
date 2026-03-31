"use client";
import { useState } from "react";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [indent, setIndent] = useState(2);
  const [copied, setCopied] = useState(false);

  const formatJson = () => {
    if (!input.trim()) {
      setError("Please enter some JSON to format.");
      setOutput("");
      return;
    }
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, indent));
      setError("");
    } catch (e) {
      setError(
        `Invalid JSON: ${e instanceof Error ? e.message : "Unknown error"}`,
      );
      setOutput("");
    }
  };

  const minifyJson = () => {
    if (!input.trim()) {
      setError("Please enter some JSON to minify.");
      setOutput("");
      return;
    }
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError("");
    } catch (e) {
      setError(
        `Invalid JSON: ${e instanceof Error ? e.message : "Unknown error"}`,
      );
      setOutput("");
    }
  };

  const copyOutput = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Input */}
      <div>
        <label className="label">
          <span className="label-text font-semibold">Input JSON</span>
        </label>
        <textarea
          className="textarea textarea-bordered w-full min-h-[200px] font-mono text-sm"
          placeholder='{"key": "value", "array": [1, 2, 3]}'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3">
        <button className="btn btn-primary" onClick={formatJson}>
          Format / Beautify
        </button>
        <button className="btn btn-secondary" onClick={minifyJson}>
          Minify
        </button>
        <div className="flex items-center gap-2">
          <span className="text-sm">Indent:</span>
          <select
            className="select select-bordered select-sm"
            value={indent}
            onChange={(e) => setIndent(Number(e.target.value))}
          >
            <option value={2}>2 spaces</option>
            <option value={4}>4 spaces</option>
          </select>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}

      {/* Output */}
      {output && (
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="label">
              <span className="label-text font-semibold">Output</span>
            </label>
            <button className="btn btn-outline btn-sm" onClick={copyOutput}>
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <textarea
            className="textarea textarea-bordered w-full min-h-[200px] font-mono text-sm"
            readOnly
            value={output}
          />
        </div>
      )}
    </div>
  );
}
