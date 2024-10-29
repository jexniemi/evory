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
}

const initialState: State = {
  correctAnswer: { name: "" },
  chosenAnswer: "",
  answerOptions: [],
  revealAnswer: false,
  score: 0,
  negativeScore: 0,
  disableButtons: false,
};

function reducer(
  state: typeof initialState,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: { type: string; payload?: any }
): State {
  const { payload, type } = action;
  switch (type) {
    case "set_state":
      return { ...state, ...payload };
    case "correct_answer":
      return { ...state, revealAnswer: true, score: state.score + 1 };
    case "false_answer":
      return {
        ...state,
        revealAnswer: true,
        negativeScore: state.negativeScore + 1,
        chosenAnswer: payload,
      };
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
  idKey: string; // Attribute that identifies each option
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

  const getGameState = (gameStatus: GameStatus) => {
    if (gameStatus === GameStatus.RoundStart) {
      newAnswerOptions();
      return;
    }
    if (gameStatus === GameStatus.OnGoing) {
      setTimeout(() => {
        setState({
          revealAnswer: false,
          chosenAnswer: "",
        });
        newAnswerOptions();
        setState({ disableButtons: false, animate: true });
      }, 2000);
    }
  };

  const newAnswerOptions = () => {
    const maxIndex = quizOptions.length;
    const newCorrectAnswerIndex = getRandomIndex(maxIndex);
    let optionIndex1 = getRandomIndex(maxIndex);
    let optionIndex2 = getRandomIndex(maxIndex);
    while (
      optionIndex1 === newCorrectAnswerIndex ||
      optionIndex2 === newCorrectAnswerIndex ||
      optionIndex1 === optionIndex2
    ) {
      optionIndex1 = getRandomIndex(maxIndex);
      optionIndex2 = getRandomIndex(maxIndex);
    }
    const correctAnswer = quizOptions[newCorrectAnswerIndex];
    const newOptions = [quizOptions[optionIndex1], quizOptions[optionIndex2]];
    const randomIndex = getRandomIndex(newOptions.length + 1);
    newOptions.splice(randomIndex, 0, correctAnswer);
    setState({ correctAnswer, answerOptions: newOptions });
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
    dispatch,
    setState,
    getGameState,
    checkAnswer,
    reset,
    gameStatus,
  };
}
