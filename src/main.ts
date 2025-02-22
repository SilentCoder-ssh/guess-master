import "./style.css";
import "virtual:uno.css";
import random from "./utils/random";

const displayNumber: HTMLDivElement =
  document.querySelector("#display-number")!;
const cheat: HTMLSpanElement = document.querySelector("#cheat")!;
const input: HTMLInputElement = document.querySelector(
  "input"
) as HTMLInputElement;
const spansDegree: NodeListOf<HTMLSpanElement> =
  document.querySelectorAll("#feedback > span")!;
const tryScore: HTMLSpanElement = document.querySelector("#try")!;
const spanScore: HTMLSpanElement = document.querySelector("#score")!;
const resetBtn: HTMLButtonElement = document.querySelector("#reset")!;

const chooseNumber = (): number => random(arr);

const resetGame = () => {
  input.value = "";
  score = 0;
  tryCount = 0;
  tryScore.textContent = tryCount.toString();
  spanScore.textContent = score.toString();
  displayNumber.textContent = "???";
  theChoice = choice()
  //cheat.innerHTML = theChoice.toString(); //cheat
};

const refreshTryScore = (points: number): void => {
  score += points;
  ++tryCount;
  tryScore.textContent = tryCount.toString();
  spanScore.textContent = score.toString();
};

function enableButton() {
  resetBtn.disabled = false;
  resetBtn.classList.add(
    "bg-blue-600",
    "text-white",
    "border-blue-500",
    "hover:bg-blue-700",
    "hover:border-blue-600",
    "cursor-pointer",
    "active:bg-blue-800"
  );
  resetBtn.classList.remove(
    "disabled:bg-gray-800",
    "disabled:text-zinc-500",
    "disabled:border-gray-700",
    "disabled:cursor-not-allowed"
  );
}
function disableButton() {
  resetBtn.disabled = true;
  resetBtn.classList.add(
    "disabled:bg-gray-800",
    "disabled:text-zinc-500",
    "disabled:border-gray-700",
    "disabled:cursor-not-allowed"
  );
  resetBtn.classList.remove(
    "bg-blue-600",
    "text-white",
    "border-blue-500",
    "hover:bg-blue-700",
    "hover:border-blue-600",
    "cursor-pointer",
    "active:bg-blue-800"
  );
}

function enableInput() {
  input.disabled = false;
  input.classList.add(
    "bg-transparent",
    "text-zinc-200",
    "border-zinc-600"
  );
  input.classList.remove(
    "disabled:bg-gray-800",
    "disabled:text-zinc-500",
    "disabled:border-gray-700",
    "disabled:cursor-not-allowed"
  );
}
function disableInput() {
  input.disabled = true;
  input.classList.add(
    "disabled:bg-gray-800",
    "disabled:text-zinc-500",
    "disabled:border-gray-700",
    "disabled:cursor-not-allowed"
  );
  input.classList.remove(
    "bg-transparent",
    "text-zinc-200",
    "border-zinc-600"
  );
}
enableInput();

const arr: number[] = Array.from(Array(101), (_, i) => i);
const choice = () => chooseNumber();
let theChoice = choice()

let score = 0;
let tryCount = 0;

//if (theChoice) cheat.innerHTML = theChoice.toString(); //cheat

type StateResponse = "correct" | "close" | "hot" | "cold";

const responseVerify = (value: number): StateResponse | false => {
  const isCorrect = value === theChoice;
  const isClose = value <= theChoice + 10 && value >= theChoice - 10;
  const isHot = value > theChoice + 10;
  const isCold = value < theChoice - 10;

  if (isCorrect) return "correct";
  else if (isClose) return "close";
  else if (isHot) return "hot";
  else if (isCold) return "cold";
  return false;
};

const stateManagement = (state: StateResponse) => {
  if (state === "correct") {
    displayNumber.innerHTML = theChoice.toString();
    console.log("Trouvé !");
    refreshTryScore(100);
    input.disabled;
    disableInput();
    enableButton();
  } else if (state === "close") {
    console.log("Presque !", theChoice);
    refreshTryScore(50);
  } else if (state === "hot") {
    console.log("Trop haut !");
    refreshTryScore(10);
  } else if (state === "cold") {
    console.log("Trop bas !");
    refreshTryScore(10);
  }
  return false;
};

input.addEventListener("keyup", (e: any) => {
  if (score) spanScore.innerHTML = score.toString();
  if (e.key === "Enter") {
    const val = e.target.value;
    if (val.length < 1 || isNaN(val)) return;
    const value = parseInt(input.value);
    const result = responseVerify(value);
    result && stateManagement(result);

    input.value = "";
    console.log("score :", score, "try :", tryCount);
  }
});

resetBtn.addEventListener("click", (_) => {
  resetGame();
  disableButton();
  enableInput();
});

console.log(tryCount, score);
