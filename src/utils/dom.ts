

// DOM
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

export const DOM_ELEMENTS = {
  displayNumber,
  cheat,
  input,
  spansDegree,
  tryScore,
  spanScore,
  resetBtn,
};

// STYLES

const enableButton = () => {
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
};
const disableButton = () => {
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
};

const enableInput = () => {
  input.disabled = false;
  input.classList.add("bg-transparent", "text-zinc-200", "border-zinc-600");
  input.classList.remove(
    "disabled:bg-gray-800",
    "disabled:text-zinc-500",
    "disabled:border-gray-700",
    "disabled:cursor-not-allowed"
  );
};
const disableInput = () => {
  input.disabled = true;
  input.classList.add(
    "disabled:bg-gray-800",
    "disabled:text-zinc-500",
    "disabled:border-gray-700",
    "disabled:cursor-not-allowed"
  );
  input.classList.remove("bg-transparent", "text-zinc-200", "border-zinc-600");
};

export const domManagement = {
  enableButton,
  enableInput,
  disableInput,
  disableButton,
};
