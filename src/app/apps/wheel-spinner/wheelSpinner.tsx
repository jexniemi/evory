"use client"

import { useState, useRef, useEffect, useCallback } from "react"

const DEFAULT_OPTIONS = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6"]

const COLORS = [
  "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7", "#DDA0DD",
  "#98D8C8", "#F7DC6F", "#BB8FCE", "#73C6B6", "#F1948A", "#85C1E9",
]

export default function WheelSpinner() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [options, setOptions] = useState(DEFAULT_OPTIONS)
  const [newOption, setNewOption] = useState("")
  const [spinning, setSpinning] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [angle, setAngle] = useState(0)
  const animRef = useRef<number | null>(null)

  const drawWheel = useCallback((currentAngle: number) => {
    const canvas = canvasRef.current
    if (!canvas || options.length === 0) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const size = canvas.width
    const cx = size / 2
    const cy = size / 2
    const radius = size / 2 - 4
    const arc = (2 * Math.PI) / options.length

    ctx.clearRect(0, 0, size, size)

    options.forEach((opt, i) => {
      const startAngle = currentAngle + i * arc
      const endAngle = startAngle + arc

      ctx.beginPath()
      ctx.moveTo(cx, cy)
      ctx.arc(cx, cy, radius, startAngle, endAngle)
      ctx.closePath()
      ctx.fillStyle = COLORS[i % COLORS.length]
      ctx.fill()
      ctx.strokeStyle = "#fff"
      ctx.lineWidth = 2
      ctx.stroke()

      ctx.save()
      ctx.translate(cx, cy)
      ctx.rotate(startAngle + arc / 2)
      ctx.textAlign = "right"
      ctx.fillStyle = "#fff"
      ctx.font = `bold ${Math.max(10, Math.min(14, 160 / options.length))}px sans-serif`
      ctx.shadowColor = "rgba(0,0,0,0.3)"
      ctx.shadowBlur = 2
      const maxLen = Math.max(8, Math.floor(radius * 0.5))
      const label = opt.length > maxLen ? opt.slice(0, maxLen - 1) + "…" : opt
      ctx.fillText(label, radius - 8, 4)
      ctx.restore()
    })

    // Center circle
    ctx.beginPath()
    ctx.arc(cx, cy, 16, 0, 2 * Math.PI)
    ctx.fillStyle = "#fff"
    ctx.fill()
    ctx.strokeStyle = "#e5e7eb"
    ctx.lineWidth = 2
    ctx.stroke()

    // Arrow (pointer at top)
    ctx.beginPath()
    ctx.moveTo(cx - 10, 0)
    ctx.lineTo(cx + 10, 0)
    ctx.lineTo(cx, 22)
    ctx.closePath()
    ctx.fillStyle = "#374151"
    ctx.fill()
  }, [options])

  useEffect(() => {
    drawWheel(angle)
  }, [angle, options, drawWheel])

  const spin = () => {
    if (spinning || options.length === 0) return
    setSpinning(true)
    setResult(null)
    const extraSpins = (5 + Math.random() * 5) * 2 * Math.PI
    const stopAngle = Math.random() * 2 * Math.PI
    const totalRotation = extraSpins + stopAngle
    const duration = 3000 + Math.random() * 1000
    const start = performance.now()
    const startAngle = angle

    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = startAngle + totalRotation * eased
      setAngle(current)

      if (progress < 1) {
        animRef.current = requestAnimationFrame(animate)
      } else {
        setAngle(current)
        // Find the winner (pointer is at top = angle = 0)
        const arc = (2 * Math.PI) / options.length
        const normalized = ((-current % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)
        const winnerIndex = Math.floor(normalized / arc) % options.length
        setResult(options[winnerIndex])
        setSpinning(false)
      }
    }
    animRef.current = requestAnimationFrame(animate)
  }

  const addOption = () => {
    const trimmed = newOption.trim()
    if (trimmed && !options.includes(trimmed) && options.length < 20) {
      setOptions([...options, trimmed])
      setNewOption("")
    }
  }

  const removeOption = (i: number) => {
    setOptions(options.filter((_, idx) => idx !== i))
  }

  return (
    <div className="max-w-lg mx-auto space-y-5 p-4">
      {/* Wheel */}
      <div className="flex flex-col items-center gap-3">
        <canvas
          ref={canvasRef}
          width={300}
          height={300}
          className="rounded-full shadow-md cursor-pointer"
          onClick={spin}
        />
        <button
          className={`btn btn-primary btn-wide ${spinning ? "loading" : ""}`}
          onClick={spin}
          disabled={spinning || options.length < 2}
        >
          {spinning ? "Spinning…" : "🎰 Spin the Wheel!"}
        </button>
        {result && (
          <div className="alert alert-success shadow-sm">
            <span className="text-lg font-bold">🎉 Result: {result}</span>
          </div>
        )}
      </div>

      {/* Add option */}
      <div className="flex gap-2">
        <input
          type="text"
          className="input input-bordered flex-1"
          placeholder="Add option…"
          value={newOption}
          onChange={(e) => setNewOption(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addOption()}
          maxLength={40}
        />
        <button className="btn btn-outline" onClick={addOption} disabled={options.length >= 20}>
          Add
        </button>
      </div>

      {/* Options list */}
      <div className="space-y-1">
        {options.map((opt, i) => (
          <div
            key={i}
            className="flex items-center justify-between px-3 py-2 rounded-lg bg-base-200"
          >
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: COLORS[i % COLORS.length] }}
              />
              <span className="text-sm truncate max-w-xs">{opt}</span>
            </div>
            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={() => removeOption(i)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <p className="text-xs text-base-content/40 text-center">
        {options.length}/20 options · Click the wheel or button to spin
      </p>
    </div>
  )
}
