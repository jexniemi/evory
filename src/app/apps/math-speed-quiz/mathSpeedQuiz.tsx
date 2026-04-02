"use client"

import { useState, useEffect, useRef, useCallback } from "react"

type Op = "+" | "-" | "×" | "÷"
type Difficulty = "easy" | "medium" | "hard"

type Question = {
  a: number
  b: number
  op: Op
  answer: number
}

const TOTAL_QUESTIONS = 10
const TIME_PER_QUESTION = 10 // seconds

const OPS: Op[] = ["+", "-", "×", "÷"]

function genQuestion(ops: Op[], diff: Difficulty): Question {
  const op = ops[Math.floor(Math.random() * ops.length)]
  const max = diff === "easy" ? 10 : diff === "medium" ? 25 : 50

  let a: number, b: number, answer: number

  if (op === "+") {
    a = Math.floor(Math.random() * max) + 1
    b = Math.floor(Math.random() * max) + 1
    answer = a + b
  } else if (op === "-") {
    a = Math.floor(Math.random() * max) + 1
    b = Math.floor(Math.random() * a) + 1
    answer = a - b
  } else if (op === "×") {
    const mmax = diff === "easy" ? 10 : diff === "medium" ? 12 : 20
    a = Math.floor(Math.random() * mmax) + 1
    b = Math.floor(Math.random() * mmax) + 1
    answer = a * b
  } else {
    // division — generate clean integer answers
    b = Math.floor(Math.random() * (diff === "easy" ? 9 : 11)) + 2
    answer = Math.floor(Math.random() * (diff === "easy" ? 9 : 11)) + 1
    a = b * answer
  }

  return { a, b, op, answer }
}

function genChoices(correct: number): number[] {
  const set = new Set<number>([correct])
  while (set.size < 4) {
    const delta = Math.floor(Math.random() * 10) - 5
    const c = correct + delta
    if (c !== correct && c >= 0) set.add(c)
  }
  return [...set].sort(() => Math.random() - 0.5)
}

type GameState = "idle" | "playing" | "finished"

export default function MathSpeedQuiz() {
  const [difficulty, setDifficulty] = useState<Difficulty>("medium")
  const [selectedOps, setSelectedOps] = useState<Op[]>(["+", "-", "×"])
  const [gameState, setGameState] = useState<GameState>("idle")
  const [questions, setQuestions] = useState<Question[]>([])
  const [idx, setIdx] = useState(0)
  const [choices, setChoices] = useState<number[]>([])
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION)
  const [answered, setAnswered] = useState<boolean[]>([])
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
  }

  const start = useCallback(() => {
    const ops: Op[] = selectedOps.length > 0 ? selectedOps : ["+"]
    const qs = Array.from({ length: TOTAL_QUESTIONS }, () => genQuestion(ops, difficulty))
    setQuestions(qs)
    setIdx(0)
    setScore(0)
    setSelected(null)
    setAnswered([])
    setTimeLeft(TIME_PER_QUESTION)
    setChoices(genChoices(qs[0].answer))
    setGameState("playing")
  }, [difficulty, selectedOps])

  const goNext = useCallback((wasCorrect: boolean, currentIdx: number, currentScore: number) => {
    stopTimer()
    const nextIdx = currentIdx + 1
    if (nextIdx >= TOTAL_QUESTIONS) {
      setGameState("finished")
      return
    }
    setIdx(nextIdx)
    setSelected(null)
    setTimeLeft(TIME_PER_QUESTION)
    setAnswered((prev) => {
      const next = [...prev]
      next[currentIdx] = wasCorrect
      return next
    })
    setQuestions((prev) => {
      setChoices(genChoices(prev[nextIdx].answer))
      return prev
    })
  }, [])

  // timer
  useEffect(() => {
    if (gameState !== "playing" || selected !== null) return
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          stopTimer()
          setSelected(-999) // time out sentinel
          setTimeout(() => goNext(false, idx, score), 1000)
          return 0
        }
        return t - 1
      })
    }, 1000)
    return stopTimer
  }, [gameState, idx, selected, score, goNext])

  const answer = (choice: number) => {
    if (selected !== null || gameState !== "playing") return
    stopTimer()
    setSelected(choice)
    const correct = choice === questions[idx].answer
    if (correct) setScore((s) => s + 1)
    setTimeout(() => goNext(correct, idx, correct ? score + 1 : score), 800)
  }

  const toggleOp = (op: Op) => {
    setSelectedOps((prev) =>
      prev.includes(op)
        ? prev.length > 1 ? prev.filter((o) => o !== op) : prev
        : [...prev, op]
    )
  }

  if (gameState === "idle" || gameState === "finished") {
    const pct = gameState === "finished" ? Math.round((score / TOTAL_QUESTIONS) * 100) : null
    return (
      <div className="max-w-sm mx-auto space-y-6 p-4">
        {gameState === "finished" && (
          <div className="text-center space-y-2">
            <div className="text-5xl">{pct! >= 80 ? "🏆" : pct! >= 50 ? "💪" : "📖"}</div>
            <h2 className="text-2xl font-black">Result: {score} / {TOTAL_QUESTIONS}</h2>
            <p className="text-base-content/60">{pct}% correct</p>
          </div>
        )}

        <div>
          <label className="label"><span className="label-text font-medium">Difficulty</span></label>
          <div className="flex gap-2">
            {(["easy", "medium", "hard"] as Difficulty[]).map((d) => (
              <button
                key={d}
                className={`btn btn-sm flex-1 capitalize ${difficulty === d ? "btn-primary" : "btn-outline"}`}
                onClick={() => setDifficulty(d)}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="label"><span className="label-text font-medium">Operations</span></label>
          <div className="flex gap-2">
            {OPS.map((op) => (
              <button
                key={op}
                className={`btn btn-sm flex-1 text-lg ${selectedOps.includes(op) ? "btn-primary" : "btn-outline"}`}
                onClick={() => toggleOp(op)}
              >
                {op}
              </button>
            ))}
          </div>
        </div>

        <button className="btn btn-primary btn-block" onClick={start}>
          {gameState === "finished" ? "Play Again" : "Start Quiz"}
        </button>
      </div>
    )
  }

  const q = questions[idx]
  const isTimeout = selected === -999

  const timerColor =
    timeLeft > 6 ? "progress-success" :
    timeLeft > 3 ? "progress-warning" : "progress-error"

  return (
    <div className="max-w-sm mx-auto space-y-4 p-4">
      {/* Header */}
      <div className="flex justify-between text-sm text-base-content/60">
        <span>Question {idx + 1} / {TOTAL_QUESTIONS}</span>
        <span>Score: {score}</span>
      </div>
      <progress className={`progress ${timerColor} w-full`} value={timeLeft} max={TIME_PER_QUESTION} />
      <div className="text-center text-sm font-mono text-base-content/50">{timeLeft}s</div>

      {/* Question */}
      <div className="card bg-base-200 shadow">
        <div className="card-body py-8 text-center">
          <div className="text-5xl font-black tracking-wide">
            {q.a} {q.op} {q.b} = ?
          </div>
        </div>
      </div>

      {/* Choices */}
      <div className="grid grid-cols-2 gap-3">
        {choices.map((c) => {
          const isCorrect = c === q.answer
          let cls = "btn btn-outline w-full text-xl font-bold h-16"
          if (selected !== null) {
            if (isTimeout) {
              cls = isCorrect ? "btn btn-success w-full text-xl font-bold h-16" : "btn btn-outline w-full text-xl font-bold h-16 opacity-30"
            } else if (c === selected && isCorrect) cls = "btn btn-success w-full text-xl font-bold h-16"
            else if (c === selected && !isCorrect) cls = "btn btn-error w-full text-xl font-bold h-16"
            else if (isCorrect) cls = "btn btn-success w-full text-xl font-bold h-16 opacity-70"
            else cls = "btn btn-outline w-full text-xl font-bold h-16 opacity-30"
          }
          return (
            <button key={c} className={cls} onClick={() => answer(c)} disabled={selected !== null}>
              {c}
            </button>
          )
        })}
      </div>

      {selected !== null && (
        <div className={`text-center font-semibold ${isTimeout ? "text-warning" : selected === q.answer ? "text-success" : "text-error"}`}>
          {isTimeout ? `⏱ Time's up! Answer: ${q.answer}` : selected === q.answer ? "✓ Correct!" : `✗ Answer: ${q.answer}`}
        </div>
      )}
    </div>
  )
}
