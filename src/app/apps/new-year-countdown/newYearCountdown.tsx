"use client"

import { useEffect, useState } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  total: number
}

function getTimeUntilNewYear(): TimeLeft {
  const now = new Date()
  const nextYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0, 0)
  const diff = nextYear.getTime() - now.getTime()

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 }
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return { days, hours, minutes, seconds, total: diff }
}

function Digit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-base-900 text-base-content font-mono font-black rounded-xl px-4 py-3 min-w-[80px] text-center shadow-lg border border-base-300">
        <span className="text-4xl sm:text-5xl">{String(value).padStart(2, "0")}</span>
      </div>
      <span className="text-xs text-base-content/50 mt-1 uppercase tracking-wider font-medium">{label}</span>
    </div>
  )
}

export default function NewYearCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeUntilNewYear())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setTimeLeft(getTimeUntilNewYear())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const nextYear = new Date().getFullYear() + 1
  const percentElapsed = mounted
    ? ((new Date().getTime() - new Date(new Date().getFullYear(), 0, 1).getTime()) /
        (new Date(nextYear, 0, 1).getTime() - new Date(new Date().getFullYear(), 0, 1).getTime())) *
      100
    : 0

  if (!mounted) {
    return (
      <div className="flex justify-center p-12">
        <span className="loading loading-spinner loading-lg" />
      </div>
    )
  }

  return (
    <div className="max-w-lg mx-auto space-y-6 p-4 text-center">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold">
          🎆 {nextYear} is coming!
        </h2>
        <p className="text-base-content/60 text-sm mt-1">Countdown to New Year {nextYear}</p>
      </div>

      {timeLeft.total > 0 ? (
        <>
          <div className="flex flex-wrap justify-center gap-3">
            <Digit value={timeLeft.days} label="Days" />
            <Digit value={timeLeft.hours} label="Hours" />
            <Digit value={timeLeft.minutes} label="Minutes" />
            <Digit value={timeLeft.seconds} label="Seconds" />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs text-base-content/50">
              <span>Jan 1, {nextYear - 1}</span>
              <span>{Math.round(percentElapsed)}% of year elapsed</span>
              <span>Jan 1, {nextYear}</span>
            </div>
            <progress
              className="progress progress-primary w-full"
              value={percentElapsed}
              max={100}
            />
          </div>

          <div className="stats shadow border border-base-300 w-full">
            <div className="stat">
              <div className="stat-title">Total hours remaining</div>
              <div className="stat-value text-primary">
                {(timeLeft.total / (1000 * 60 * 60)).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </div>
            </div>
            <div className="stat">
              <div className="stat-title">Total seconds remaining</div>
              <div className="stat-value text-secondary text-2xl">
                {(timeLeft.total / 1000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-4xl font-bold text-primary animate-bounce">
          🎉 Happy New Year {nextYear}! 🎉
        </div>
      )}
    </div>
  )
}
