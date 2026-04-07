"use client";
import { useState, useMemo } from "react";

export default function PasswordStrengthChecker() {
  const [password, setPassword] = useState("");

  const analysis = useMemo(() => {
    const length = password.length;
    if (length === 0) return null;

    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(password);
    const hasRepeat = /(.)\1{2,}/.test(password);
    const hasSequential = /(012|123|234|345|456|567|678|789|890|abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/i.test(password);
    const commonPasswords = ["password", "123456", "qwerty", "letmein", "admin", "welcome", "monkey", "dragon", "master", "abc123", "password1", "iloveyou"];
    const isCommon = commonPasswords.includes(password.toLowerCase());

    let charsetSize = 0;
    if (hasLower) charsetSize += 26;
    if (hasUpper) charsetSize += 26;
    if (hasDigit) charsetSize += 10;
    if (hasSpecial) charsetSize += 33;

    const entropy = length * Math.log2(charsetSize || 1);
    const combinations = Math.pow(charsetSize || 1, length);
    const bruteForceSeconds = combinations / 10e9; // 10 billion guesses/sec

    let score = 0;
    if (length >= 8) score += 1;
    if (length >= 12) score += 1;
    if (length >= 16) score += 1;
    if (hasLower && hasUpper) score += 1;
    if (hasDigit) score += 1;
    if (hasSpecial) score += 1;
    if (!hasRepeat) score += 1;
    if (!hasSequential) score += 1;
    if (!isCommon) score += 1;
    if (entropy >= 60) score += 1;

    let strength: string;
    let color: string;
    if (isCommon || score <= 2) { strength = "Very Weak"; color = "text-error"; }
    else if (score <= 4) { strength = "Weak"; color = "text-warning"; }
    else if (score <= 6) { strength = "Fair"; color = "text-info"; }
    else if (score <= 8) { strength = "Strong"; color = "text-success"; }
    else { strength = "Very Strong"; color = "text-success"; }

    const formatTime = (seconds: number): string => {
      if (seconds < 1) return "Instantly";
      if (seconds < 60) return `${Math.round(seconds)} seconds`;
      if (seconds < 3600) return `${Math.round(seconds / 60)} minutes`;
      if (seconds < 86400) return `${Math.round(seconds / 3600)} hours`;
      if (seconds < 31536000) return `${Math.round(seconds / 86400)} days`;
      if (seconds < 31536000 * 1000) return `${Math.round(seconds / 31536000)} years`;
      if (seconds < 31536000 * 1e6) return `${Math.round(seconds / (31536000 * 1000))} thousand years`;
      if (seconds < 31536000 * 1e9) return `${Math.round(seconds / (31536000 * 1e6))} million years`;
      return `${(seconds / (31536000 * 1e9)).toExponential(1)} billion years`;
    };

    return {
      length,
      hasLower,
      hasUpper,
      hasDigit,
      hasSpecial,
      hasRepeat,
      hasSequential,
      isCommon,
      entropy: entropy.toFixed(1),
      crackTime: formatTime(bruteForceSeconds),
      score,
      strength,
      color,
      percentage: Math.min(100, (score / 10) * 100),
    };
  }, [password]);

  const Check = ({ pass, label }: { pass: boolean; label: string }) => (
    <div className="flex items-center gap-2 text-sm">
      <span className={pass ? "text-success" : "text-error"}>{pass ? "✓" : "✗"}</span>
      <span>{label}</span>
    </div>
  );

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
      <div className="form-control">
        <label className="label"><span className="label-text">Enter Password</span></label>
        <input
          type="text"
          className="input input-bordered w-full font-mono"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Type a password to check..."
          autoComplete="off"
        />
      </div>

      {analysis && (
        <>
          <div className="card bg-base-200 p-5 text-center">
            <div className={`text-2xl font-bold ${analysis.color}`}>{analysis.strength}</div>
            <progress className="progress progress-primary w-full mt-2" value={analysis.percentage} max={100} />
            <div className="text-sm opacity-70 mt-2">Crack time (brute force): <span className="font-bold">{analysis.crackTime}</span></div>
            <div className="text-xs opacity-50">Entropy: {analysis.entropy} bits · {analysis.length} characters</div>
          </div>

          <div className="card bg-base-200 p-4">
            <h3 className="font-bold text-sm mb-2">Requirements</h3>
            <div className="grid grid-cols-1 gap-1">
              <Check pass={analysis.length >= 8} label="At least 8 characters" />
              <Check pass={analysis.length >= 12} label="12+ characters (recommended)" />
              <Check pass={analysis.hasLower} label="Lowercase letter (a-z)" />
              <Check pass={analysis.hasUpper} label="Uppercase letter (A-Z)" />
              <Check pass={analysis.hasDigit} label="Number (0-9)" />
              <Check pass={analysis.hasSpecial} label="Special character (!@#$...)" />
              <Check pass={!analysis.hasRepeat} label="No repeated characters (aaa)" />
              <Check pass={!analysis.hasSequential} label="No sequential patterns (123, abc)" />
              <Check pass={!analysis.isCommon} label="Not a common password" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
