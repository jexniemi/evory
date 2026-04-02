"use client"

import { useState } from "react"

const cases = [
  "UPPERCASE",
  "lowercase",
  "Title Case",
  "Sentence case",
  "camelCase",
  "PascalCase",
  "snake_case",
  "kebab-case",
  "SCREAMING_SNAKE_CASE",
] as const

type CaseType = typeof cases[number]

function convertCase(text: string, target: CaseType): string {
  if (!text) return ""
  const words = text.trim().split(/[\s_\-]+/)

  switch (target) {
    case "UPPERCASE":
      return text.toUpperCase()
    case "lowercase":
      return text.toLowerCase()
    case "Title Case":
      return words.map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ")
    case "Sentence case": {
      const lower = text.toLowerCase()
      return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    case "camelCase":
      return words
        .map((w, i) =>
          i === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
        )
        .join("")
    case "PascalCase":
      return words.map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join("")
    case "snake_case":
      return words.map((w) => w.toLowerCase()).join("_")
    case "kebab-case":
      return words.map((w) => w.toLowerCase()).join("-")
    case "SCREAMING_SNAKE_CASE":
      return words.map((w) => w.toUpperCase()).join("_")
    default:
      return text
  }
}

export default function TextCaseConverter() {
  const [input, setInput] = useState("Hello World Example Text")
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label)
      setTimeout(() => setCopied(null), 1500)
    })
  }

  return (
    <div className="max-w-xl mx-auto space-y-4 p-4">
      <div>
        <label className="label">
          <span className="label-text font-medium">Input text</span>
        </label>
        <textarea
          className="textarea textarea-bordered w-full text-base"
          rows={3}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type or paste your text here..."
        />
      </div>
      <div className="grid gap-2">
        {cases.map((c) => {
          const converted = convertCase(input, c)
          return (
            <div
              key={c}
              className="flex items-center justify-between gap-3 p-3 rounded-lg bg-base-200 border border-base-300"
            >
              <div className="flex-1 min-w-0">
                <p className="text-xs text-base-content/50 font-mono mb-0.5">{c}</p>
                <p className="font-mono text-sm truncate">{converted || "—"}</p>
              </div>
              <button
                className={`btn btn-sm btn-ghost shrink-0 ${copied === c ? "text-success" : ""}`}
                onClick={() => handleCopy(converted, c)}
                disabled={!converted}
              >
                {copied === c ? "✓" : "Copy"}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
