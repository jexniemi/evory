export enum GameStatus {
  Win = "WIN",
  Lose = "LOSE",
  RoundStart = "START",
  OnGoing = "",
}

export interface Option {
  name?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
