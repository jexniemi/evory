"use client";
import { useState } from "react";

type Choice = "rock" | "paper" | "scissors";
type Outcome = "win" | "lose" | "draw";

const CHOICES: { value: Choice; emoji: string; label: string }[] = [
  { value: "rock", emoji: "🪨", label: "Rock" },
  { value: "paper", emoji: "📄", label: "Paper" },
  { value: "scissors", emoji: "✂️", label: "Scissors" },
];

function getComputerChoice(): Choice {
  const choices: Choice[] = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getOutcome(player: Choice, computer: Choice): Outcome {
  if (player === computer) return "draw";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "win";
  }
  return "lose";
}

function getChoiceEmoji(choice: Choice): string {
  return CHOICES.find((c) => c.value === choice)?.emoji ?? "";
}

export default function RockPaperScissors() {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [outcome, setOutcome] = useState<Outcome | null>(null);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [draws, setDraws] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const play = (choice: Choice) => {
    if (isAnimating) return;
    setIsAnimating(true);

    setPlayerChoice(null);
    setComputerChoice(null);
    setOutcome(null);

    setTimeout(() => {
      const computer = getComputerChoice();
      const result = getOutcome(choice, computer);

      setPlayerChoice(choice);
      setComputerChoice(computer);
      setOutcome(result);

      if (result === "win") setWins((w) => w + 1);
      else if (result === "lose") setLosses((l) => l + 1);
      else setDraws((d) => d + 1);

      setIsAnimating(false);
    }, 400);
  };

  const reset = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setOutcome(null);
    setWins(0);
    setLosses(0);
    setDraws(0);
  };

  const totalGames = wins + losses + draws;

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Choice buttons */}
      <div className="flex gap-4">
        {CHOICES.map((choice) => (
          <button
            key={choice.value}
            className="btn btn-lg text-3xl h-24 w-24 flex flex-col gap-1"
            onClick={() => play(choice.value)}
            disabled={isAnimating}
          >
            <span>{choice.emoji}</span>
            <span className="text-xs font-normal">{choice.label}</span>
          </button>
        ))}
      </div>

      {/* Result display */}
      {isAnimating && (
        <div className="text-center">
          <p className="text-4xl animate-bounce">🤔</p>
          <p className="text-base-content/60 mt-2">Choosing...</p>
        </div>
      )}

      {outcome && !isAnimating && (
        <div className="bg-base-200 rounded-lg p-6 text-center w-full max-w-md">
          <div className="flex items-center justify-center gap-6 text-5xl mb-4">
            <div className="text-center">
              <div>{getChoiceEmoji(playerChoice!)}</div>
              <div className="text-sm mt-1 text-base-content/60">You</div>
            </div>
            <span className="text-2xl font-bold text-base-content/40">vs</span>
            <div className="text-center">
              <div>{getChoiceEmoji(computerChoice!)}</div>
              <div className="text-sm mt-1 text-base-content/60">Computer</div>
            </div>
          </div>
          <div
            className={`text-2xl font-bold ${
              outcome === "win"
                ? "text-success"
                : outcome === "lose"
                  ? "text-error"
                  : "text-warning"
            }`}
          >
            {outcome === "win"
              ? "🎉 You Win!"
              : outcome === "lose"
                ? "😞 You Lose!"
                : "🤝 It's a Draw!"}
          </div>
        </div>
      )}

      {/* Score */}
      {totalGames > 0 && (
        <div className="w-full max-w-md">
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-base-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-success">{wins}</div>
              <div className="text-sm text-base-content/60">Wins</div>
            </div>
            <div className="bg-base-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-error">{losses}</div>
              <div className="text-sm text-base-content/60">Losses</div>
            </div>
            <div className="bg-base-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-warning">{draws}</div>
              <div className="text-sm text-base-content/60">Draws</div>
            </div>
          </div>
          <p className="text-center text-sm text-base-content/60 mt-2">
            Total games: {totalGames} | Win rate:{" "}
            {((wins / totalGames) * 100).toFixed(1)}%
          </p>
          <div className="text-center mt-3">
            <button className="btn btn-outline btn-sm" onClick={reset}>
              Reset Score
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
