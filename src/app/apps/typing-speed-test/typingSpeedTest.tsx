"use client";
import { useState, useCallback, useRef, useEffect } from "react";

const SENTENCES = [
  "The quick brown fox jumps over the lazy dog near the riverbank.",
  "She sells seashells by the seashore where the waves crash softly.",
  "A journey of a thousand miles begins with a single determined step.",
  "Pack my box with five dozen liquor jugs and send them today.",
  "How vexingly quick daft zebras jump over the lazy sleeping dogs.",
  "The five boxing wizards jump quickly to avoid the falling debris.",
  "Bright vixens jump and dozy fowl quack near the old farmhouse.",
  "Every morning I enjoy a warm cup of coffee before starting work.",
  "Technology continues to reshape how we communicate and share ideas globally.",
  "Learning to type faster can significantly improve your daily productivity.",
  "The sunset painted the sky in shades of orange purple and gold.",
  "Good writing requires practice patience and a willingness to revise drafts.",
  "Musicians spend thousands of hours practicing before performing on big stages.",
  "The ancient library contained thousands of rare manuscripts and scrolled texts.",
  "Climate change affects ecosystems around the world in unexpected new ways.",
];

export default function TypingSpeedTest() {
  const [status, setStatus] = useState<"idle" | "running" | "done">("idle");
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [elapsed, setElapsed] = useState(0);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const pickText = useCallback(() => {
    const idx = Math.floor(Math.random() * SENTENCES.length);
    return SENTENCES[idx];
  }, []);

  const startTest = useCallback(() => {
    const newText = pickText();
    setText(newText);
    setInput("");
    setWpm(0);
    setAccuracy(100);
    setElapsed(0);
    setStatus("running");
    setStartTime(Date.now());
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setElapsed(Math.floor((Date.now() - Date.now()) / 1000));
    }, 100);
    setTimeout(() => inputRef.current?.focus(), 50);
  }, [pickText]);

  useEffect(() => {
    if (status === "running") {
      const interval = setInterval(() => {
        setElapsed((Date.now() - startTime) / 1000);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [status, startTime]);

  const handleInput = (value: string) => {
    if (status !== "running") return;
    setInput(value);

    // Calculate accuracy
    let correct = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i] === text[i]) correct++;
    }
    const acc = value.length > 0 ? Math.round((correct / value.length) * 100) : 100;
    setAccuracy(acc);

    // Calculate WPM
    const minutes = (Date.now() - startTime) / 60000;
    const words = value.trim().split(/\s+/).filter(Boolean).length;
    if (minutes > 0) {
      setWpm(Math.round(words / minutes));
    }

    // Check completion
    if (value.length >= text.length) {
      setStatus("done");
      if (timerRef.current) clearInterval(timerRef.current);
    }
  };

  const getCharClass = (i: number) => {
    if (i >= input.length) return "text-base-content/40";
    return input[i] === text[i] ? "text-success" : "text-error bg-error/10";
  };

  return (
    <div className="space-y-6">
      {status === "idle" && (
        <div className="text-center py-8">
          <p className="text-lg mb-6">Test your typing speed and accuracy. Click Start to begin!</p>
          <button className="btn btn-primary btn-lg" onClick={startTest}>
            Start Typing Test
          </button>
        </div>
      )}

      {(status === "running" || status === "done") && (
        <>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="text-3xl font-bold text-amber-700">{wpm}</div>
              <div className="text-sm text-amber-600 font-medium">WPM</div>
            </div>
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-4">
              <div className="text-3xl font-bold text-sky-700">{accuracy}%</div>
              <div className="text-sm text-sky-600 font-medium">Accuracy</div>
            </div>
            <div className="bg-violet-50 border border-violet-200 rounded-xl p-4">
              <div className="text-3xl font-bold text-violet-700">{elapsed.toFixed(1)}s</div>
              <div className="text-sm text-violet-600 font-medium">Time</div>
            </div>
          </div>

          <div className="bg-base-200 rounded-xl p-4 sm:p-6 font-mono text-base sm:text-lg leading-relaxed select-none">
            {text.split("").map((char, i) => (
              <span key={i} className={getCharClass(i)}>
                {char}
              </span>
            ))}
          </div>

          <textarea
            ref={inputRef}
            className="textarea textarea-bordered w-full font-mono text-base sm:text-lg min-h-24"
            value={input}
            onChange={(e) => handleInput(e.target.value)}
            placeholder="Start typing here..."
            disabled={status === "done"}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
          />

          {status === "done" && (
            <div className="text-center space-y-4">
              <div className="text-xl font-semibold text-success">
                Test Complete!
              </div>
              <p className="text-base-content/70">
                You typed at <strong>{wpm} WPM</strong> with <strong>{accuracy}%</strong> accuracy
                in <strong>{elapsed.toFixed(1)} seconds</strong>.
              </p>
              <button className="btn btn-primary" onClick={startTest}>
                Try Again
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
