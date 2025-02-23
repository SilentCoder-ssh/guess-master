export const GUESS_STATES = {
  CORRECT: "CORRECT",
  HOT: "HOT",
  COLD: "COLD",
  CLOSE: "CLOSE",
} as const;

export type GuessState = (typeof GUESS_STATES)[keyof typeof GUESS_STATES];

export const GUESS_BORDER_COLOR = {
  [GUESS_STATES.CORRECT]: {
    color: "green",
    borderColor: "border-green-500",
    index: 3,
  },
  [GUESS_STATES.HOT]: { color: "red", borderColor: "border-red-500", index: 1 },
  [GUESS_STATES.COLD]: {
    color: "blue",
    borderColor: "border-blue-500",
    index: 0,
  },
  [GUESS_STATES.CLOSE]: {
    color: "yellow",
    borderColor: "border-yellow-500",
    index: 2,
  },
} as const;
