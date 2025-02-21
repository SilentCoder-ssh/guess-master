import "./style.css";
import "virtual:uno.css";
import random from "./utils/random";

const displayNumber: HTMLDivElement =
  document.querySelector("#display-number")!;
const cheat: HTMLSpanElement = document.querySelector("#cheat")!;
const input: HTMLInputElement = document.querySelector("input")!;
const spansDegree: NodeListOf<HTMLSpanElement> =
  document.querySelectorAll("#feedback > span")!;
const tryScore: HTMLSpanElement = document.querySelector("#try")!;
const spanScore: HTMLSpanElement = document.querySelector("#score")!;
const resetBtn: HTMLButtonElement = document.querySelector("#reset")!;


const chooseNumber = (): number => random(arr); //function choisir un nombre aléatoire pour le round
const resetGame = (): void => {
    input.value = "";
    score = 0;
    tryCount = 0;
};
const refreshTryScore = (tryy: number, points: number): void => {
    // Rafraîchir le Score et les essais
    tryScore.textContent = tryCount + tryy.toString();
    spanScore.textContent = score + points.toString();
};
const resetInput = () => input.value = ""

function enableResetButton() {
    resetBtn.disabled = false;
    resetBtn.classList.add(
        "bg-blue-600", 
        "text-white", 
        "border-blue-500",
        "hover:bg-blue-700", 
        "hover:border-blue-600", 
        "hover:shadow-blue-600/50", 
        "cursor-pointer", 
        "active:bg-blue-800",
        "cursor-pointer" 
    );
    resetBtn.classList.remove(
        "disabled:bg-gray-800",
        "disabled:text-zinc-500",
        "disabled:border-gray-700",
        "disabled:cursor-not-allowed"
    );
}

function disableResetButton() {
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
        "hover:shadow-blue-600/50",
        "cursor-pointer",
        "active:bg-blue-800",
        "cursor-pointer"
    );
}

let arr: number[] = Array.from(Array(101), (_, i) => i); //tableau [0-100]

let score: number = 0;
let tryCount: number = 0;

let choice: number = chooseNumber();
if (choice) cheat.innerHTML = choice.toString();

input.addEventListener("keyup", (e) => {
  if (score) spanScore.innerHTML = score.toString();

  if (e.key === "Enter") {
    const value = parseInt(input.value, 10); // convertie en nombre décimal
    console.log("J'appuie sur entrer!");
    if (!isNaN(value) && value === choice) {
      // gestion de la victoire
      displayNumber.innerHTML = choice.toString();
      console.log("Trouvé !");
      refreshTryScore(1, 100);
      resetInput()
      enableResetButton();
    } else if (
      !isNaN(value) &&
      ((value <= (choice + 10) || value >= (choice - 10)) &&
      value !== choice)
    ) {
      console.log("Presque !");
      resetInput();
      refreshTryScore(1, 50);
    } else if (!isNaN(value) && value) {
    }
  }
});

resetBtn.addEventListener("click", (_) => {
  resetGame()
  disableResetButton()
});
