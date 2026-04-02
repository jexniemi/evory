"use client"

import { useState, useEffect, useCallback } from "react"

type Element = {
  symbol: string
  name: string
  atomicNumber: number
  category: string
}

const ELEMENTS: Element[] = [
  { symbol: "H", name: "Hydrogen", atomicNumber: 1, category: "Nonmetal" },
  { symbol: "He", name: "Helium", atomicNumber: 2, category: "Noble Gas" },
  { symbol: "Li", name: "Lithium", atomicNumber: 3, category: "Alkali Metal" },
  { symbol: "Be", name: "Beryllium", atomicNumber: 4, category: "Alkaline Earth Metal" },
  { symbol: "B", name: "Boron", atomicNumber: 5, category: "Metalloid" },
  { symbol: "C", name: "Carbon", atomicNumber: 6, category: "Nonmetal" },
  { symbol: "N", name: "Nitrogen", atomicNumber: 7, category: "Nonmetal" },
  { symbol: "O", name: "Oxygen", atomicNumber: 8, category: "Nonmetal" },
  { symbol: "F", name: "Fluorine", atomicNumber: 9, category: "Halogen" },
  { symbol: "Ne", name: "Neon", atomicNumber: 10, category: "Noble Gas" },
  { symbol: "Na", name: "Sodium", atomicNumber: 11, category: "Alkali Metal" },
  { symbol: "Mg", name: "Magnesium", atomicNumber: 12, category: "Alkaline Earth Metal" },
  { symbol: "Al", name: "Aluminum", atomicNumber: 13, category: "Post-Transition Metal" },
  { symbol: "Si", name: "Silicon", atomicNumber: 14, category: "Metalloid" },
  { symbol: "P", name: "Phosphorus", atomicNumber: 15, category: "Nonmetal" },
  { symbol: "S", name: "Sulfur", atomicNumber: 16, category: "Nonmetal" },
  { symbol: "Cl", name: "Chlorine", atomicNumber: 17, category: "Halogen" },
  { symbol: "Ar", name: "Argon", atomicNumber: 18, category: "Noble Gas" },
  { symbol: "K", name: "Potassium", atomicNumber: 19, category: "Alkali Metal" },
  { symbol: "Ca", name: "Calcium", atomicNumber: 20, category: "Alkaline Earth Metal" },
  { symbol: "Fe", name: "Iron", atomicNumber: 26, category: "Transition Metal" },
  { symbol: "Cu", name: "Copper", atomicNumber: 29, category: "Transition Metal" },
  { symbol: "Zn", name: "Zinc", atomicNumber: 30, category: "Transition Metal" },
  { symbol: "Br", name: "Bromine", atomicNumber: 35, category: "Halogen" },
  { symbol: "Kr", name: "Krypton", atomicNumber: 36, category: "Noble Gas" },
  { symbol: "Ag", name: "Silver", atomicNumber: 47, category: "Transition Metal" },
  { symbol: "Sn", name: "Tin", atomicNumber: 50, category: "Post-Transition Metal" },
  { symbol: "I", name: "Iodine", atomicNumber: 53, category: "Halogen" },
  { symbol: "Xe", name: "Xenon", atomicNumber: 54, category: "Noble Gas" },
  { symbol: "Au", name: "Gold", atomicNumber: 79, category: "Transition Metal" },
  { symbol: "Hg", name: "Mercury", atomicNumber: 80, category: "Transition Metal" },
  { symbol: "Pb", name: "Lead", atomicNumber: 82, category: "Post-Transition Metal" },
  { symbol: "U", name: "Uranium", atomicNumber: 92, category: "Actinide" },
]

type Mode = "symbol" | "name" | "atomic"
type State = "playing" | "correct" | "wrong" | "finished"

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function getChoices(correct: Element, all: Element[], mode: Mode): string[] {
  const wrong = shuffle(all.filter((e) => e.symbol !== correct.symbol)).slice(0, 3)
  const choices = shuffle([correct, ...wrong])
  return choices.map((e) => {
    if (mode === "symbol") return e.symbol
    if (mode === "name") return e.name
    return String(e.atomicNumber)
  })
}

const TOTAL = 10

export default function PeriodicTableQuiz() {
  const [mode, setMode] = useState<Mode>("symbol")
  const [queue, setQueue] = useState<Element[]>([])
  const [idx, setIdx] = useState(0)
  const [choices, setChoices] = useState<string[]>([])
  const [selected, setSelected] = useState<string | null>(null)
  const [state, setState] = useState<State>("playing")
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)

  const start = useCallback(() => {
    const q = shuffle(ELEMENTS).slice(0, TOTAL)
    setQueue(q)
    setIdx(0)
    setScore(0)
    setStreak(0)
    setSelected(null)
    setState("playing")
    setChoices(getChoices(q[0], ELEMENTS, mode))
  }, [mode])

  useEffect(() => { start() }, [start])

  const current = queue[idx]

  const answer = (choice: string) => {
    if (state !== "playing" || !current) return
    setSelected(choice)

    const correctAnswer =
      mode === "symbol" ? current.symbol :
      mode === "name" ? current.name :
      String(current.atomicNumber)

    if (choice === correctAnswer) {
      setState("correct")
      setScore((s) => s + 1)
      setStreak((s) => s + 1)
    } else {
      setState("wrong")
      setStreak(0)
    }
  }

  const next = () => {
    const nextIdx = idx + 1
    if (nextIdx >= TOTAL) {
      setState("finished")
      return
    }
    setIdx(nextIdx)
    setSelected(null)
    setState("playing")
    setChoices(getChoices(queue[nextIdx], ELEMENTS, mode))
  }

  const modeLabel = {
    symbol: "Guess the Symbol",
    name: "Guess the Name",
    atomic: "Guess the Atomic Number",
  }

  if (state === "finished") {
    const pct = Math.round((score / TOTAL) * 100)
    return (
      <div className="max-w-md mx-auto text-center space-y-5 p-4">
        <div className="text-6xl">
          {pct >= 80 ? "🏆" : pct >= 50 ? "👍" : "📚"}
        </div>
        <h2 className="text-2xl font-black">Quiz Complete!</h2>
        <div className="text-4xl font-bold text-primary">{score} / {TOTAL}</div>
        <p className="text-base-content/60">{pct}% correct</p>
        <button className="btn btn-primary btn-wide" onClick={start}>Play Again</button>
      </div>
    )
  }

  if (!current) return null

  const prompt =
    mode === "symbol" ? (
      <div className="text-center space-y-1">
        <div className="text-7xl font-black text-primary">{current.symbol}</div>
        <div className="text-sm text-base-content/50">Element symbol</div>
      </div>
    ) : mode === "name" ? (
      <div className="text-center space-y-1">
        <div className="text-3xl font-bold">{current.name}</div>
        <div className="text-sm text-base-content/50">Atomic number: {current.atomicNumber}</div>
      </div>
    ) : (
      <div className="text-center space-y-1">
        <div className="text-7xl font-black text-primary">{current.atomicNumber}</div>
        <div className="text-sm text-base-content/50">Atomic number</div>
      </div>
    )

  const question =
    mode === "symbol" ? "What element has this symbol?" :
    mode === "name" ? "What is the symbol for this element?" :
    "Which element has this atomic number?"

  const correctAnswer =
    mode === "symbol" ? current.symbol :
    mode === "name" ? current.name :
    String(current.atomicNumber)

  return (
    <div className="max-w-md mx-auto space-y-4 p-4">
      {/* Mode selector */}
      <div className="flex gap-1 flex-wrap justify-center">
        {(["symbol", "name", "atomic"] as Mode[]).map((m) => (
          <button
            key={m}
            className={`btn btn-xs ${mode === m ? "btn-primary" : "btn-outline"}`}
            onClick={() => { setMode(m); }}
          >
            {modeLabel[m]}
          </button>
        ))}
      </div>

      {/* Progress */}
      <div className="flex justify-between text-sm text-base-content/60">
        <span>Question {idx + 1} / {TOTAL}</span>
        <span>Score: {score} {streak >= 3 ? `🔥 ×${streak}` : ""}</span>
      </div>
      <progress className="progress progress-primary w-full" value={idx} max={TOTAL} />

      {/* Prompt */}
      <div className="card bg-base-200 shadow-sm">
        <div className="card-body py-6 items-center">
          {prompt}
          <p className="text-base-content/60 text-sm mt-2">{question}</p>
        </div>
      </div>

      {/* Choices */}
      <div className="grid grid-cols-2 gap-2">
        {choices.map((c) => {
          const isCorrect = c === correctAnswer
          let cls = "btn btn-outline w-full"
          if (selected) {
            if (c === selected && isCorrect) cls = "btn btn-success w-full"
            else if (c === selected && !isCorrect) cls = "btn btn-error w-full"
            else if (isCorrect) cls = "btn btn-success w-full opacity-70"
            else cls = "btn btn-outline w-full opacity-30"
          }
          return (
            <button key={c} className={cls} onClick={() => answer(c)} disabled={!!selected}>
              {c}
            </button>
          )
        })}
      </div>

      {/* Feedback + next */}
      {selected && (
        <div className="text-center space-y-2">
          <div className={`font-semibold ${state === "correct" ? "text-success" : "text-error"}`}>
            {state === "correct" ? "✓ Correct!" : `✗ It was ${correctAnswer} — ${current.name} (#${current.atomicNumber})`}
          </div>
          <div className="text-xs text-base-content/50">{current.category}</div>
          <button className="btn btn-primary btn-sm" onClick={next}>
            {idx + 1 < TOTAL ? "Next Question →" : "See Results"}
          </button>
        </div>
      )}
    </div>
  )
}
