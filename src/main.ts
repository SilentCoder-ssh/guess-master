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

let arr: number[] = Array.from(Array(101), (_, i) => i); //tableau [0-100]

const chooseNumber = (): number => random(arr); //function choisir un nombre aléatoire pour le round
const resetInput = (): void => {
  input.value = ""; // vide l'input
};

let score: number = 0;
if (score) spanScore.innerHTML = score.toString();

let choice = chooseNumber();
if (choice) cheat.innerHTML = choice.toString();

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const value = parseInt(input.value, 10); // convertie en nombre décimal 
    console.log("J'appuie sur entrer!");
    if (!isNaN(value) && value === choice) {
      // Vérifier que c’est un nombre valide
      displayNumber.innerHTML = choice.toString();
      console.log("Trouvé !");
      choice = chooseNumber();
      if (choice) cheat.innerHTML = choice.toString();
      score = score + 100;
      resetInput(); // À corriger aussi, voir ci-dessous
    }
    // Ajoutez vos else if pour spansDegree ici
  }
});