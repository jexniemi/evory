import { useReducer, useEffect } from "react";
import { Option, GameStatus } from "./types";

interface State {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  correctAnswer: { name: string; [key: string]: any };
  chosenAnswer: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  answerOptions: any[];
  revealAnswer: boolean;
  score: number;
  negativeScore: number;
  disableButtons: boolean;
  streak: number;
  bestStreak: number;
  level: number;
  xp: number;
  xpToNext: number;
  totalPoints: number;
  lastPointsDelta: number;
  lastAnswerCorrect: boolean | null;
}

const initialState: State = {
  correctAnswer: { name: "" },
  chosenAnswer: "",
  answerOptions: [],
  revealAnswer: false,
  score: 0,
  negativeScore: 0,
  disableButtons: false,
  streak: 0,
  bestStreak: 0,
  level: 1,
  xp: 0,
  xpToNext: 300,
  totalPoints: 0,
  lastPointsDelta: 0,
  lastAnswerCorrect: null,
};

const getXpToNext = (level: number) => 300 + (level - 1) * 120;

function reducer(
  state: typeof initialState,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: { type: string; payload?: any },
): State {
  const { payload, type } = action;
  switch (type) {
    case "set_state":
      return { ...state, ...payload };
    case "correct_answer": {
      const newStreak = state.streak + 1;
      const pointsGained = 100 + Math.min(newStreak * 20, 140);
      let nextLevel = state.level;
      let nextXp = state.xp + Math.round(pointsGained * 0.6);
      let nextXpToNext = state.xpToNext;

      while (nextXp >= nextXpToNext) {
        nextXp -= nextXpToNext;
        nextLevel += 1;
        nextXpToNext = getXpToNext(nextLevel);
      }

      return {
        ...state,
        revealAnswer: true,
        score: state.score + 1,
        streak: newStreak,
        bestStreak: Math.max(state.bestStreak, newStreak),
        level: nextLevel,
        xp: nextXp,
        xpToNext: nextXpToNext,
        totalPoints: state.totalPoints + pointsGained,
        lastPointsDelta: pointsGained,
        lastAnswerCorrect: true,
      };
    }
    case "false_answer": {
      const pointsLost = Math.min(60, state.totalPoints);
      return {
        ...state,
        revealAnswer: true,
        negativeScore: state.negativeScore + 1,
        chosenAnswer: payload,
        streak: 0,
        totalPoints: Math.max(0, state.totalPoints - pointsLost),
        lastPointsDelta: -pointsLost,
        lastAnswerCorrect: false,
      };
    }
    case "reset":
      return { ...initialState, correctAnswer: state.correctAnswer };
    default:
      return state;
  }
}

interface Props {
  quizOptions: Option[];
  winScore: number;
  loseScore: number;
  idKey: string;
}

export default function UseGame({
  quizOptions = [],
  winScore,
  loseScore,
  idKey,
}: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { correctAnswer, score, negativeScore } = state;

  const gameStatus: GameStatus =
    (score === winScore && GameStatus.Win) ||
    (negativeScore === loseScore && GameStatus.Lose) ||
    (score === 0 && negativeScore === 0 && GameStatus.RoundStart) ||
    GameStatus.OnGoing;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setState = (payload: any) => {
    dispatch({ type: "set_state", payload });
  };

  const getRandomIndex = (maxIndex: number) => {
    return Math.floor(Math.random() * maxIndex);
  };

  const getUniqueIndices = (
    count: number,
    maxIndex: number,
    exclude: number,
  ) => {
    const indices = new Set<number>();
    indices.add(exclude);
    while (indices.size < count + 1) {
      indices.add(getRandomIndex(maxIndex));
    }
    indices.delete(exclude);
    return Array.from(indices);
  };

  const buildNewRound = () => {
    const maxIndex = quizOptions.length;
    const correctIdx = getRandomIndex(maxIndex);
    const wrongIndices = getUniqueIndices(3, maxIndex, correctIdx);
    const correctAnswer = quizOptions[correctIdx];
    const newOptions = wrongIndices.map((i) => quizOptions[i]);
    const insertAt = getRandomIndex(newOptions.length + 1);
    newOptions.splice(insertAt, 0, correctAnswer);
    return { correctAnswer, answerOptions: newOptions };
  };

  const getGameState = (gameStatus: GameStatus) => {
    if (gameStatus === GameStatus.RoundStart) {
      setState(buildNewRound());
      return;
    }
    if (gameStatus === GameStatus.OnGoing) {
      setTimeout(() => {
        setState({
          revealAnswer: false,
          chosenAnswer: "",
          disableButtons: false,
          lastPointsDelta: 0,
          lastAnswerCorrect: null,
          ...buildNewRound(),
        });
      }, 1200);
    }
  };

  const checkAnswer = (guess: string) => {
    setState({ disableButtons: true });
    if (guess === correctAnswer[idKey]) {
      dispatch({ type: "correct_answer" });
    } else {
      dispatch({ type: "false_answer", payload: guess });
    }
  };

  const reset = () => {
    dispatch({ type: "reset" });
  };

  useEffect(() => {
    getGameState(gameStatus);
    // eslint-disable-next-line
  }, [score, negativeScore]);

  return {
    state,
    checkAnswer,
    reset,
    gameStatus,
  };
}
