"use client";
import { useState, useCallback } from "react";

const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useLowercase, setUseLowercase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = useCallback(() => {
    let charset = "";
    if (useUppercase) charset += UPPERCASE;
    if (useLowercase) charset += LOWERCASE;
    if (useNumbers) charset += NUMBERS;
    if (useSymbols) charset += SYMBOLS;

    if (charset.length === 0) {
      setPassword("");
      return;
    }

    const array = new Uint32Array(length);
    crypto.getRandomValues(array);
    const result = Array.from(array, (x) => charset[x % charset.length]).join(
      "",
    );
    setPassword(result);
    setCopied(false);
  }, [length, useUppercase, useLowercase, useNumbers, useSymbols]);

  const copyToClipboard = async () => {
    if (!password) return;
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const entropy = (() => {
    let poolSize = 0;
    if (useUppercase) poolSize += 26;
    if (useLowercase) poolSize += 26;
    if (useNumbers) poolSize += 10;
    if (useSymbols) poolSize += SYMBOLS.length;
    if (poolSize === 0) return 0;
    return Math.round(length * Math.log2(poolSize));
  })();

  return (
    <div className="flex flex-col gap-6">
      {/* Length slider */}
      <div>
        <label className="label">
          <span className="label-text font-semibold">
            Password Length: {length}
          </span>
        </label>
        <input
          type="range"
          min={8}
          max={64}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="range range-primary w-full"
        />
        <div className="flex justify-between text-xs text-base-content/60 px-1 mt-1">
          <span>8</span>
          <span>24</span>
          <span>40</span>
          <span>56</span>
          <span>64</span>
        </div>
      </div>

      {/* Checkboxes */}
      <div className="grid grid-cols-2 gap-3">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            checked={useUppercase}
            onChange={(e) => setUseUppercase(e.target.checked)}
          />
          <span className="label-text">Uppercase (A-Z)</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            checked={useLowercase}
            onChange={(e) => setUseLowercase(e.target.checked)}
          />
          <span className="label-text">Lowercase (a-z)</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            checked={useNumbers}
            onChange={(e) => setUseNumbers(e.target.checked)}
          />
          <span className="label-text">Numbers (0-9)</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            checked={useSymbols}
            onChange={(e) => setUseSymbols(e.target.checked)}
          />
          <span className="label-text">Symbols (!@#$...)</span>
        </label>
      </div>

      {/* Generate button */}
      <button className="btn btn-primary" onClick={generate}>
        Generate Password
      </button>

      {/* Password display */}
      {password && (
        <div className="bg-base-200 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={password}
              className="input input-bordered w-full font-mono text-lg"
            />
            <button
              className="btn btn-outline btn-sm min-w-[80px]"
              onClick={copyToClipboard}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <p className="text-sm text-base-content/60 mt-2">
            Entropy: <strong>{entropy} bits</strong>
            {entropy >= 128
              ? " — Very strong"
              : entropy >= 80
                ? " — Strong"
                : entropy >= 60
                  ? " — Moderate"
                  : " — Weak"}
          </p>
        </div>
      )}
    </div>
  );
}
