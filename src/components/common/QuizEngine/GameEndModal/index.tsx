"use client";
import { motion } from "framer-motion";
import { GameStatus } from "../types";

interface Props {
  gameStatus: GameStatus;
  score: number;
  reset: () => void;
  winCondition: number;
  bestStreak: number;
}

export default function GameEndModal({
  gameStatus,
  score,
  reset,
  winCondition,
  bestStreak,
}: Props) {
  const win = gameStatus === GameStatus.Win;

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto py-10 gap-6">
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
        className="text-7xl"
      >
        {win ? "🏆" : "😔"}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold mb-2">
          {win ? "Voitit pelin!" : "Peli päättyi!"}
        </h2>
        <p className="text-gray-600">
          Pisteesi: <span className="font-bold text-gray-900">{score}</span> /{" "}
          {winCondition}
        </p>
        {bestStreak >= 2 && (
          <p className="text-orange-600 font-semibold mt-1">
            🔥 Paras putki: {bestStreak} peräkkäin
          </p>
        )}
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        onClick={reset}
        className="mt-2 px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-emerald-200 active:scale-95 cursor-pointer"
      >
        Pelaa uudestaan
      </motion.button>
    </div>
  );
}
