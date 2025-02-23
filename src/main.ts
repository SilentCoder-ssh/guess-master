import { resetGame, SCORE, theChoice } from "./../player";
import type { GuessState } from "./../guess-infos";
import { GUESS_BORDER_COLOR } from "./../guess-infos";
import "./style.css";
import "virtual:uno.css";
import { domManagement, DOM_ELEMENTS } from "./utils/dom";

// DOM_ELEMENTS.cheat.innerHTML = theChoice.toString(); //cheat
// if (theChoice) DOM_ELEMENTS.cheat.innerHTML = theChoice.toString(); //cheat


const refreshTryScore = (points: number): void => {
  SCORE.current += points;
  ++SCORE.tryCount;
  DOM_ELEMENTS.tryScore.textContent = SCORE.tryCount.toString();
  DOM_ELEMENTS.spanScore.textContent = SCORE.current.toString();
};

domManagement.enableInput();


const responseVerify = (value: number): GuessState | undefined => {
  const isCorrect = value === theChoice;
  const isClose = value <= theChoice + 10 && value >= theChoice - 10;
  const isHot = value > theChoice + 10;
  const isCold = value < theChoice - 10;

  const state = isCorrect
    ? "CORRECT"
    : isClose
    ? "CLOSE"
    : isHot
    ? "HOT"
    : isCold
    ? "COLD"
    : undefined;
  return state;
};

const sytleAction = (STATE: GuessState) => {
  const styles = [
    "border-solid",
    "animate-bounce",
    GUESS_BORDER_COLOR[STATE].borderColor,
  ];

  Array.from(DOM_ELEMENTS.spansDegree).forEach((e, i) => {
    if (i === GUESS_BORDER_COLOR[STATE].index) {
      e.classList.add(...styles);
    } else {
      e.className = "rounded-full px-2";
    }
  });
};

const stateManagement = (state: GuessState) => {
  sytleAction(state);
  if (state === "CORRECT") {
    DOM_ELEMENTS.displayNumber.innerHTML = theChoice.toString();
    console.log("Trouvé !");
    refreshTryScore(0);
    DOM_ELEMENTS.input.disabled;
    domManagement.disableInput();
    domManagement.enableButton();
    console.log(typeof DOM_ELEMENTS.spansDegree, DOM_ELEMENTS.spansDegree);
  } else if (state === "CLOSE") {
    console.log("Presque ! CLOOOOOOOOOOOSE", theChoice);
    refreshTryScore(10);
  } else if (state === "HOT") {
    console.log("Trop haut !");
    refreshTryScore(50);
  } else if (state === "COLD") {
    console.log("Trop bas !");
    refreshTryScore(50);
  }
  return false;
};

DOM_ELEMENTS.input.addEventListener("keyup", (e: any) => {
  if (SCORE.current)
    DOM_ELEMENTS.spanScore.innerHTML = SCORE.current.toString();
  if (e.key === "Enter") {
    const val = e.target.value;
    if (val.length < 1 || isNaN(val)) return;
    const value = parseInt(DOM_ELEMENTS.input.value);
    const result = responseVerify(value);
    result && stateManagement(result);

    DOM_ELEMENTS.input.value = "";
    console.log("SCORE.current :", SCORE.current, "try :", SCORE.tryCount);
  }
});

DOM_ELEMENTS.resetBtn.addEventListener("click", (_) => {
  resetGame();
  domManagement.disableButton();
  domManagement.enableInput();
});

console.log(SCORE.tryCount, SCORE.current);
