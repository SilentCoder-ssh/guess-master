import { DOM_ELEMENTS } from "./src/utils/dom";
import random from "./src/utils/random";

export const arr: number[] = Array.from(Array(101), (_, i) => i);

export const SCORE = {
  current: 0,
  tryCount: 0,
};

export let theChoice = random(arr);

export const resetGame = () => {
  DOM_ELEMENTS.input.value = "";
  SCORE.current = 0;
  SCORE.tryCount = 0;
  DOM_ELEMENTS.tryScore.textContent = SCORE.tryCount.toString();
  DOM_ELEMENTS.spanScore.textContent = SCORE.current.toString();
  DOM_ELEMENTS.displayNumber.textContent = "???";
  theChoice = random(arr);
};
