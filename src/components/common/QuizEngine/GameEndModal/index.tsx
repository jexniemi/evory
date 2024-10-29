import Image from "next/image";
import { GameStatus } from "../types";

interface Props {
  gameStatus: GameStatus;
  score: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reset: () => any;
  winCondition: number;
}

export default function GameEndModal({
  gameStatus,
  score,
  reset,
  winCondition,
}: Props) {
  const win = gameStatus === GameStatus.Win;

  return (
    <div className="text-center justify-self-center w-screen flex justify-center">
      <div className="p-46 justify-self-center items-center flex p-12 flex-col justify-center">
        <span style={{ animation: "bounce", display: win ? "block" : "none" }}>
          <Image alt="win" src={"/quiz/trophy.png"} height={50} width={50} />
        </span>
        <span style={{ animation: "bounce", display: !win ? "block" : "none" }}>
          <Image alt="lose" src={"/quiz/lose.png"} height={50} width={50} />
        </span>
        <div className="text-xl text-bold">
          {win ? "Voitit " : "Hävisit "} pelin!
        </div>
        <div>
          Pisteesi: {score} / {winCondition}
        </div>
        <div className="flex">
          <button
            onClick={reset}
            style={{
              marginTop: "30px",
              fontSize: "14px",
              fontWeight: 600,
              margin: "7px",
              width: "200px",
              height: "60px",
              border: "1px solid rgba(200, 200, 200)",
              borderRadius: "20px",
            }}
          >
            Pelaa uudestaan
          </button>
        </div>
      </div>
    </div>
  );
}
