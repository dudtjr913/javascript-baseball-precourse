import BaseballGame from "./index.js";

const baseballWrapper = document.body.querySelector("#app");
const submitButton = baseballWrapper.querySelector("#submit");
const userInput = baseballWrapper.querySelector("#user-input");
const game = new BaseballGame();

const submitUserInput = () => {
  const { isInputRight, play, showResultOnScreen, runningGame, answer } = game;

  if (!runningGame) return alert("게임을 재시작해주세요.");
  if (isInputRight()) {
    const resultText = play(answer, userInput.value);

    return showResultOnScreen(resultText);
  }
};

submitButton.addEventListener("click", submitUserInput);
