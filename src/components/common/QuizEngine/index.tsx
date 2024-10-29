"use client";
import Image from "next/image";
import GameEndModal from "./GameEndModal";
import { motion } from "framer-motion";
import UseGame from "./UseGame";
import { GameStatus, Option } from "./types";
import ProgressBar from "@ramonak/react-progress-bar";

interface Props {
  winScore?: number; // How much score needed to win
  loseScore?: number; // How much score needed to lose
  quizOptions: Option[]; // Must have attribute matching idKey, which matches images in /public dir
  idKey: string; // Key that maps to image
  displayNameKey?: string; // Key of option that is displayed to user
  imgPath?: string;
  imgType?: string;
  textAnswerKey?: string; // This string can be used as an alternative to using img as displayed answer.
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
    disableButtons,
  } = state;

  const getButtonBackground = (answerOption: Option) => {
    if (revealAnswer) {
      if (correctAnswer[idKey] === answerOption[idKey]) {
        return "rgba(38,211,102,1)";
      } else if (chosenAnswer === answerOption[idKey]) {
        return "red";
      }
    }
    return "white";
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
        reset={reset}
      />
    );
  }

  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col">
          {correctAnswer[idKey] !== "" && (
            <motion.div
              key={correctAnswer[idKey]}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.4,
                  },
                },
              }}
            >
              <Answer>
                {textAnswerKey ? (
                  <TextAnswer>{correctAnswer[textAnswerKey]}</TextAnswer>
                ) : (
                  <Image
                    src={`${imgPath}${correctAnswer[idKey]}${imgType}`}
                    width={128}
                    height={128}
                    alt="answer"
                    objectFit="contain"
                  />
                )}
              </Answer>
            </motion.div>
          )}
        </div>
        <AnswersRow>
          {answerOptions.map((answerOption) => (
            <button
              className="text-sm font-semibold m-2 w-48 h-16 border border-gray-300 rounded-xl p-2"
              style={{
                backgroundColor: getButtonBackground(answerOption),
              }}
              disabled={disableButtons}
              key={answerOption[idKey]}
              value={answerOption[idKey]}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onClick={(e: any) => {
                checkAnswer(e.target.value);
              }}
            >
              {answerOption[displayNameKey].charAt(0).toUpperCase() +
                answerOption[displayNameKey].slice(1)}
            </button>
          ))}
        </AnswersRow>
        <AttemptsContainer>
          Arvauksia jäljellä:{" "}
          <AttemptsLeft>
            <div>{loseScore - negativeScore}</div>
          </AttemptsLeft>
        </AttemptsContainer>
        <div className="my-5 w-full text-center">
          <ProgressBar
            bgColor="rgba(38,211,102,1)"
            completed={Math.round((score / winScore) * 100)}
          />
        </div>
      </div>
    </>
  );
}

type ChildrenProps = {
  children: React.ReactNode;
};

const Answer = ({ children }: ChildrenProps) => <div>{children}</div>;

const TextAnswer = ({ children }: ChildrenProps) => (
  <div className="text-7xl font-medium py-9">{children}</div>
);

const AnswersRow = ({ children }: ChildrenProps) => (
  <div className="py-8 md:flex-col md:py-4">{children}</div>
);

const AttemptsContainer = ({ children }: ChildrenProps) => (
  <div className="flex flex-row items-center justify-center">{children}</div>
);

const AttemptsLeft = ({ children }: ChildrenProps) => (
  <div className="rounded-full border border-black w-7 h-7 inline-flex items-center justify-center m-0 ml-1">
    {children}
  </div>
);
