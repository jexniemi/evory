"use client";
import Image from "next/image";
import GameEndModal from "./GameEndModal";
import { motion, AnimatePresence } from "framer-motion";
import UseGame from "./UseGame";
import { GameStatus, Option } from "./types";

interface Props {
  winScore?: number;
  loseScore?: number;
  quizOptions: Option[];
  idKey: string;
  displayNameKey?: string;
  imgPath?: string;
  imgType?: string;
  textAnswerKey?: string;
}

export default function QuizEngine({
  winScore = 10,
  loseScore = 3,
  quizOptions = [],
  idKey = "name",
  displayNameKey = "name",
  imgPath = "/flags/128x128/",
  imgType = ".png",
  textAnswerKey,
}: Props) {
  const { state, checkAnswer, reset, gameStatus } = UseGame({
    quizOptions,
    winScore,
    loseScore,
    idKey,
  });
  const {
    correctAnswer,
    chosenAnswer,
    answerOptions,
    revealAnswer,
    score,
    negativeScore,
    streak,
    bestStreak,
    disableButtons,
    level,
    xp,
    xpToNext,
    totalPoints,
    lastPointsDelta,
    lastAnswerCorrect,
  } = state;

  const livesLeft = loseScore - negativeScore;
  const progressPercent = Math.round((score / winScore) * 100);
  const xpPercent = Math.round((xp / xpToNext) * 100);

  const getLevelLabel = (currentLevel: number) => {
    if (currentLevel >= 16) return "Legend";
    if (currentLevel >= 12) return "Master";
    if (currentLevel >= 8) return "Pro";
    if (currentLevel >= 4) return "Rising";
    return "Rookie";
  };

  const getButtonClasses = (answerOption: Option) => {
    const base =
      "text-sm font-semibold w-full py-4 px-3 rounded-xl border-2 transition-all duration-200 cursor-pointer select-none";
    if (revealAnswer) {
      if (correctAnswer[idKey] === answerOption[idKey]) {
        return `${base} bg-emerald-500 border-emerald-600 text-white scale-105`;
      }
      if (chosenAnswer === answerOption[idKey]) {
        return `${base} bg-red-500 border-red-600 text-white animate-[shake_0.4s_ease-in-out]`;
      }
      return `${base} bg-gray-100 border-gray-200 text-gray-400`;
    }
    return `${base} bg-white border-gray-200 hover:border-gray-400 hover:shadow-md active:scale-95`;
  };

  if (
    gameStatus !== GameStatus.OnGoing &&
    gameStatus !== GameStatus.RoundStart
  ) {
    return (
      <GameEndModal
        gameStatus={gameStatus}
        score={score}
        winCondition={winScore}
        bestStreak={bestStreak}
        level={level}
        totalPoints={totalPoints}
        reset={reset}
      />
    );
  }

  return (
    <div className="flex flex-col items-center w-full max-w-lg mx-auto gap-5">
      {/* HUD */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full">
        <div className="rounded-xl border border-violet-200 bg-violet-50 px-3 py-2">
          <p className="text-[11px] uppercase tracking-wide text-violet-700 font-semibold">
            Level
          </p>
          <p className="text-lg font-extrabold text-violet-900">{level}</p>
          <p className="text-[11px] text-violet-700">{getLevelLabel(level)}</p>
        </div>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2">
          <p className="text-[11px] uppercase tracking-wide text-emerald-700 font-semibold">
            Points
          </p>
          <p className="text-lg font-extrabold text-emerald-900">
            {totalPoints}
          </p>
        </div>
        <div className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2">
          <p className="text-[11px] uppercase tracking-wide text-amber-700 font-semibold">
            Combo
          </p>
          <p className="text-lg font-extrabold text-amber-900">
            x{Math.max(1, streak)}
          </p>
        </div>
        <div className="rounded-xl border border-sky-200 bg-sky-50 px-3 py-2">
          <p className="text-[11px] uppercase tracking-wide text-sky-700 font-semibold">
            Goal
          </p>
          <p className="text-lg font-extrabold text-sky-900">
            {score}/{winScore}
          </p>
        </div>
      </div>

      {/* Top bar: lives + streak feedback */}
      <div className="flex items-center justify-between w-full">
        <div
          className="flex gap-0.5 text-xl"
          aria-label={`${livesLeft} lives remaining`}
        >
          {Array.from({ length: loseScore }).map((_, i) => (
            <span
              key={i}
              className={i < livesLeft ? "" : "grayscale opacity-30"}
            >
              ❤️
            </span>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {streak >= 2 && (
            <motion.div
              key={streak}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              className="flex items-center gap-1 bg-orange-100 text-orange-700 font-bold rounded-full px-3 py-1 text-sm"
            >
              🔥 {streak} in a row!
            </motion.div>
          )}
        </AnimatePresence>

        <div className="text-sm font-semibold text-gray-500">
          Best: {bestStreak}
        </div>
      </div>

      {/* Goal progress */}
      <div className="w-full">
        <div className="flex justify-between text-xs font-semibold text-gray-500 mb-1">
          <span>Round progress</span>
          <span>{progressPercent}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <motion.div
            className="h-full bg-emerald-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          />
        </div>
      </div>

      {/* XP progress */}
      <div className="w-full">
        <div className="flex justify-between text-xs font-semibold text-violet-600 mb-1">
          <span>XP to Level {level + 1}</span>
          <span>
            {xp}/{xpToNext}
          </span>
        </div>
        <div className="w-full bg-violet-100 rounded-full h-2.5 overflow-hidden">
          <motion.div
            className="h-full bg-violet-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${xpPercent}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          />
        </div>
      </div>

      {/* Question image/text */}
      <div className="relative flex items-center justify-center w-full h-[160px]">
        {correctAnswer[idKey] !== "" && (
          <motion.div
            key={correctAnswer[idKey]}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {textAnswerKey ? (
              <div className="text-6xl sm:text-7xl font-bold text-center">
                {correctAnswer[textAnswerKey]}
              </div>
            ) : (
              <Image
                src={`${imgPath}${correctAnswer[idKey]}${imgType}`}
                width={148}
                height={148}
                alt="answer"
                className={`object-contain drop-shadow-lg max-h-[148px] w-auto ${streak >= 3 ? "animate-pulse" : ""}`}
              />
            )}
          </motion.div>
        )}

        <AnimatePresence>
          {lastAnswerCorrect !== null && lastPointsDelta !== 0 && (
            <motion.div
              key={`${correctAnswer[idKey]}-${lastPointsDelta}`}
              initial={{ y: 10, opacity: 0, scale: 0.9 }}
              animate={{ y: -8, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className={`absolute top-1 right-2 text-sm font-extrabold px-2 py-1 rounded-full ${
                lastAnswerCorrect
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {lastPointsDelta > 0 ? `+${lastPointsDelta}` : lastPointsDelta}{" "}
              pts
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Answer buttons - 2x2 grid */}
      <motion.div
        key={correctAnswer[idKey] + "-buttons"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-2 gap-3 w-full"
      >
        {answerOptions.map((answerOption) => (
          <button
            className={getButtonClasses(answerOption)}
            disabled={disableButtons}
            key={answerOption[idKey]}
            value={answerOption[idKey]}
            onClick={() => checkAnswer(answerOption[idKey])}
          >
            {answerOption[displayNameKey].charAt(0).toUpperCase() +
              answerOption[displayNameKey].slice(1)}
          </button>
        ))}
      </motion.div>
    </div>
  );
}
