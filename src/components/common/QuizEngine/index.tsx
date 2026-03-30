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
  } = state;

  const livesLeft = loseScore - negativeScore;
  const progressPercent = Math.round((score / winScore) * 100);

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
        reset={reset}
      />
    );
  }

  return (
    <div className="flex flex-col items-center w-full max-w-lg mx-auto gap-5">
      {/* Top bar: lives + streak */}
      <div className="flex items-center justify-between w-full">
        <div
          className="flex gap-0.5 text-xl"
          aria-label={`${livesLeft} elämää jäljellä`}
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
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="flex items-center gap-1 bg-orange-100 text-orange-700 font-bold rounded-full px-3 py-1 text-sm"
            >
              🔥 {streak} putkeen!
            </motion.div>
          )}
        </AnimatePresence>
        <div className="text-sm font-semibold text-gray-500">
          {score} / {winScore}
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <motion.div
          className="h-full bg-emerald-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        />
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
                className="object-contain drop-shadow-lg max-h-[148px] w-auto"
              />
            )}
          </motion.div>
        )}
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
